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
    ["2026-09-24T07:00:00Z", "Ls1dqc-FLTQ", ["Sep 25", "Sep 26"]],
    ["2026-09-25T07:00:00Z", "A7rBdYhmbXI", ["Sep 26"]],
    ["2026-09-26T07:00:00Z", "OtSyeBtver8", []],
  ];
  for (const [date, video, queued] of dates) {
    t.mock.timers.setTime(new Date(date).getTime());
    const html = await (await render()).text();
    assert.ok(html.includes(`youtube.com/embed/${video}`), date);
    const queue = html.match(/<ol class="schedule-list">([\s\S]*?)<\/ol>/)?.[1];
    assert.ok(queue);
    for (const day of ["Sep 24", "Sep 25", "Sep 26"]) assert.equal(queue.includes(day), queued.includes(day));
    assert.doesNotMatch(queue, /Forgiveness|Boz|Stevie|It's Over/);
  }
});
