import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render(path = "/") {
  const workerUrl = new URL("dist/server/index.js", root);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the FriendsFM homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>FriendsFM! — A song postcard every night<\/title>/);
  assert.match(html, /FriendsFM!/);
  assert.match(html, /href="#story"/);
  assert.match(html, /youtube\.com\/embed/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Building your site/i);
});

test("keeps stable postcard routes and the shared player controller wired", async () => {
  const [response, layout, page] = await Promise.all([
    render("/postcards/peace-piece"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("app/page.tsx", root), "utf8"),
  ]);

  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Peace Piece/);
  assert.match(html, /YouTube player for Peace Piece by Bill Evans/);
  assert.match(layout, /<SongPlaybackController\s*\/>/);
  assert.match(page, /timeZone: "America\/Los_Angeles"/);
});

test("renders the September 24–26 releases with exact senders and notes", async () => {
  const cases = [
    ["its-over", "Boz Scaggs", "024", "Ls1dqc-FLTQ", "Joey"],
    ["for-once-in-my-life", "Stevie Wonder", "025", "A7rBdYhmbXI", "TT"],
    ["m21-forgiveness", "坂本龙一", "026", "OtSyeBtver8", "TT"],
  ];
  for (const [slug, artist, number, video, sender] of cases) {
    const response = await render(`/postcards/${slug}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes(artist));
    assert.ok(html.includes(number));
    assert.ok(html.includes(sender));
    assert.ok(html.includes(`youtube.com/embed/${video}`));
    assert.ok(html.includes(`/${slug}-album.jpg`));
    assert.ok(html.includes('Sources &amp; recording'));
    assert.equal(html.includes('<blockquote'), slug === "m21-forgiveness");
    if (slug === "m21-forgiveness") assert.ok(html.includes("为了一段配乐，去看了一个电影"));
  }
});

test("switches nightly in Los Angeles and advances the people-only queue", async (t) => {
  t.mock.timers.enable({ apis: ["Date"], now: new Date("2026-09-24T06:59:00Z") });
  const dates = [
    ["2026-09-24T06:59:00Z", "3cKtSlsYVEU", ["Sep 24", "Sep 25", "Sep 26"]],
    ["2026-09-24T07:00:00Z", "Ls1dqc-FLTQ", ["Sep 25", "Sep 26", "Sep 27"]],
    ["2026-09-25T07:00:00Z", "A7rBdYhmbXI", ["Sep 26", "Sep 27"]],
    ["2026-09-26T07:00:00Z", "OtSyeBtver8", ["Sep 27"]],
    ["2026-09-27T06:59:00Z", "OtSyeBtver8", ["Sep 27"]],
    ["2026-09-27T07:00:00Z", "yzBhPeoh5t4", []],
    ["2026-09-28T07:00:00Z", "Q0W--O7aWBg", []],
    ["2026-09-29T07:00:00Z", "zm2Ytj5bL_I", []],
  ];
  for (const [date, video, queued] of dates) {
    t.mock.timers.setTime(new Date(date).getTime());
    const html = await (await render()).text();
    assert.ok(html.includes(`youtube.com/embed/${video}`), date);
    const queue = html.match(/<ol class="schedule-list">([\s\S]*?)<\/ol>/)?.[1];
    assert.ok(queue);
    for (const day of ["Sep 24", "Sep 25", "Sep 26", "Sep 27"]) assert.equal(queue.includes(day), queued.includes(day));
    assert.doesNotMatch(queue, /Forgiveness|Boz|Stevie|It's Over|Tony Bennett|Fly Me/);
  }
});

test("queues submissions by release order, not submission timestamp", async (t) => {
  t.mock.timers.enable({ apis: ["Date"], now: new Date("2026-09-27T07:00:00Z") });
  for (const [date, expected] of [["2026-09-27T07:00:00Z",["Sep 28","Sep 29"]],["2026-09-28T07:00:00Z",["Sep 29"]],["2026-09-29T07:00:00Z",[]]]) {
    t.mock.timers.setTime(new Date(date).getTime());
    const html = await (await render()).text();
    const queue = html.match(/<ol class="schedule-list">([\s\S]*?)<\/ol>/)?.[1];
    assert.ok(queue);
    for (const day of ["Sep 28","Sep 29"]) assert.equal(queue.includes(day),expected.includes(day));
    assert.doesNotMatch(queue,/大人中|九月|盧廣仲|周云蓬/);
  }
  for (const [slug,note,sender] of [["adult","原来爱人不在身边就叫远方 😭😢😭","YSY"],["jiu-yue","是在to do list上摘抄过的诗句","TT"]]) {
    const html = await (await render(`/postcards/${slug}`)).text();
    assert.ok(html.includes(note)); assert.ok(html.replace(/<!--.*?-->/g, "").includes(`Sent by ${sender}`));
    assert.ok(html.includes("Sources &amp; recording"));
  }
});

test("preserves David's exact moon note and recording on the stable route", async () => {
  const html = await (await render("/postcards/fly-me-to-the-moon")).text();
  assert.match(html, /2 days late but here is a song about the moon/);
  assert.match(html, /No\. 027/);
  assert.match(html, /Sent by David/);
  assert.match(html, /youtube.com\/embed\/yzBhPeoh5t4/);
  assert.match(html, /fly-me-to-the-moon-night.png/);
});

test("renders cover-led postcards with Lucy's note and no invented TT note", async () => {
  const stay = await (await render("/postcards/stay-with-me")).text();
  assert.match(stay, /你怎么知道我到霓虹了/);
  assert.match(stay, /No\. 030/);
  assert.match(stay, /stay-with-me-pocket-park.jpg/);
  assert.match(stay, /youtube.com\/embed\/BBj3SCImk_A/);
  const light = await (await render("/postcards/light-song")).text();
  assert.match(light, /No\. 031/);
  assert.match(light, /light-song-album.jpg/);
  assert.match(light, /urara/);
  assert.match(light, /youtube.com\/embed\/dnHpo1CVbLg/);
  assert.doesNotMatch(light, /<blockquote|A NOTE FROM TT/);
  for (const html of [stay, light]) assert.match(html, /Sources &amp; recording/);
});

test("advances the queue and homepage across the September–October boundary", async (t) => {
  t.mock.timers.enable({ apis: ["Date"], now: new Date("2026-09-30T06:59:00Z") });
  for (const [date,video,queued] of [
    ["2026-09-30T06:59:00Z","zm2Ytj5bL_I",["Sep 30","Oct 01"]],
    ["2026-09-30T07:00:00Z","BBj3SCImk_A",["Oct 01"]],
    ["2026-10-01T06:59:00Z","BBj3SCImk_A",["Oct 01"]],
    ["2026-10-01T07:00:00Z","dnHpo1CVbLg",[]],
  ]) {
    t.mock.timers.setTime(new Date(date).getTime());
    const html = await (await render()).text();
    assert.ok(html.includes(`youtube.com/embed/${video}`), date);
    const queue = html.match(/<ol class="schedule-list">([\s\S]*?)<\/ol>/)?.[1];
    assert.ok(queue);
    for (const day of ["Sep 30","Oct 01"]) assert.equal(queue.includes(day),queued.includes(day));
    assert.doesNotMatch(queue,/Stay With Me|Light song|松原|nakamura/);
    const archive = await (await render("/archive")).text();
    assert.equal(archive.includes('href="/postcards/light-song"'),date >= "2026-10-01T07:00:00Z");
  }
});
