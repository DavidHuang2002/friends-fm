import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("schedules TT's One Summer Day for October 10 without changing the personal note", async (t) => {
  t.mock.timers.enable({ apis: ["Date"], now: new Date("2026-10-10T06:59:59Z") });
  const before = await (await render()).text();
  assert.match(before, /youtube.com\/embed\/PxMtHQuE-5Q/);
  const queue = before.match(/<ol class="schedule-list">([\s\S]*?)<\/ol>/)?.[1];
  assert.match(queue, /Oct 10/);
  assert.match(queue, /TT/);
  assert.doesNotMatch(queue, /あの夏へ|久石|Summer/);
  assert.doesNotMatch(await (await render("/archive")).text(), /href="\/postcards\/one-summer-day"/);
  const preview = await (await render("/postcards/one-summer-day")).text();
  const note = "千寻吃饭团 1:29把所有乐器抽走只剩钢琴 然后千寻开始大哭 印记特别深刻的瞬间";
  assert.ok(preview.includes(note));
  assert.match(preview, /youtube.com\/embed\/iOYAl37AScY/);
  assert.match(preview, /not been independently verified/);
  assert.match(preview, /tkma.co.jp/);
  assert.match(preview, /Postcard No. 037/);
  t.mock.timers.setTime(new Date("2026-10-10T07:00:00Z").getTime());
  const after = await (await render()).text();
  assert.match(after, /youtube.com\/embed\/iOYAl37AScY/);
  assert.match(after, /October 10, 2026/);
  assert.match(after, /one-summer-day-art.png/);
  assert.match(await (await render("/archive")).text(), /href="\/postcards\/one-summer-day"/);
  assert.doesNotMatch(after.match(/<ol class="schedule-list">([\s\S]*?)<\/ol>/)?.[1], /Oct 10/);
  const packet = JSON.parse(await readFile(new URL("content/postcards/2026-10-10-one-summer-day/submission.json", root)));
  assert.equal(packet.note, note);
  assert.equal(packet.date, "2026-10-10");
  assert.equal(packet.postcard_number, 37);
});

test("releases October 6–7 at LA midnight with exact submissions and people-only queues", async (t) => {
  t.mock.timers.enable({ apis: ["Date"], now: new Date("2026-10-06T06:59:59Z") });
  const before = await (await render()).text();
  assert.match(before, /youtube.com\/embed\/v1Ng43JoGtE/);
  const queue = before.match(/<ol class="schedule-list">([\s\S]*?)<\/ol>/)?.[1];
  assert.match(queue, /YSY[\s\S]*TT/);
  assert.match(queue, /Oct 06/);
  assert.match(queue, /Oct 07/);
  assert.doesNotMatch(queue, /ENDLESS|MON AMOUR|X JAPAN|中森/);
  assert.doesNotMatch(await (await render("/archive")).text(), /href="\/postcards\/(endless-rain|abunai-mon-amour)"/);
  for (const [slug, number, note, player, source] of [
    ["endless-rain", 35, "双吉他solo太经典了", "QhOFg_3RV5Q", "sonymusic.co.jp"],
    ["abunai-mon-amour", 36, "前奏和萨克斯爽麻了", "PxMtHQuE-5Q", "sp.wmg.jp"],
  ]) {
    const html = await (await render(`/postcards/${slug}`)).text();
    assert.ok(html.includes(note));
    assert.ok(html.includes(`/embed/${player}`));
    assert.ok(html.includes(source));
    assert.ok(html.replace(/<!--.*?-->/g, "").includes(`Postcard No. 0${number}`));
    const date = slug === "endless-rain" ? "2026-10-06" : "2026-10-07";
    const packet = JSON.parse(await readFile(new URL(`content/postcards/${date}-${slug}/submission.json`, root)));
    assert.equal(packet.note, note);
    assert.equal(packet.postcard_number, number);
    assert.equal(packet.date, date);
    assert.ok((await readFile(new URL(`content/postcards/${date}-${slug}/share.png`, root))).length > 1000);
  }
  t.mock.timers.setTime(new Date("2026-10-06T07:00:00Z").getTime());
  const sixth = await (await render()).text();
  assert.match(sixth, /youtube.com\/embed\/QhOFg_3RV5Q/);
  const sixthQueue = sixth.match(/<ol class="schedule-list">([\s\S]*?)<\/ol>/)?.[1];
  assert.match(sixthQueue, /TT/);
  assert.doesNotMatch(sixthQueue, /YSY|Oct 06/);
  assert.match(await (await render("/archive")).text(), /href="\/postcards\/endless-rain"/);
  assert.doesNotMatch(await (await render("/archive")).text(), /href="\/postcards\/abunai-mon-amour"/);
  t.mock.timers.setTime(new Date("2026-10-07T06:59:59Z").getTime());
  assert.match(await (await render()).text(), /youtube.com\/embed\/QhOFg_3RV5Q/);
  t.mock.timers.setTime(new Date("2026-10-07T07:00:00Z").getTime());
  const seventh = await (await render()).text();
  assert.match(seventh, /youtube.com\/embed\/PxMtHQuE-5Q/);
  assert.match(seventh, /akina-fin-cover.jpg/);
  assert.doesNotMatch(seventh.match(/<ol class="schedule-list">([\s\S]*?)<\/ol>/)?.[1], /Oct 06|Oct 07/);
  assert.match(await (await render("/archive")).text(), /href="\/postcards\/abunai-mon-amour"/);
});

test("publishes Lamp at LA midnight October 5, preserving the note, queue and archive", async (t) => {
  t.mock.timers.enable({ apis: ["Date"], now: new Date("2026-10-05T06:59:59Z") });
  const before = await (await render()).text();
  assert.match(before, /youtube.com\/embed\/TDkyTvZJ9uk/);
  const queue = before.match(/<ol class="schedule-list">([\s\S]*?)<\/ol>/)?.[1];
  assert.match(queue, /David/);
  assert.match(queue, /Oct 05/);
  assert.doesNotMatch(queue, /For Lovers|Lamp/);
  assert.doesNotMatch(await (await render("/archive")).text(), /href="\/postcards\/for-lovers"/);
  const preview = await (await render("/postcards/for-lovers")).text();
  assert.match(preview, /很短但很有感觉的一首歌，整个专辑都很好听/);
  assert.match(preview, /lamp-for-lovers-cover.png/);
  assert.match(preview, /Arctic Lines/);
  assert.match(preview, /botanicalhouse.bandcamp.com\/album\/for-lovers-2004/);
  assert.match(preview, /Postcard No. 034/);
  t.mock.timers.setTime(new Date("2026-10-05T07:00:00Z").getTime());
  const after = await (await render()).text();
  assert.match(after, /youtube.com\/embed\/v1Ng43JoGtE/);
  assert.match(after, /October 05, 2026/);
  assert.match(after, /很短但很有感觉的一首歌，整个专辑都很好听/);
  assert.doesNotMatch(after.match(/<ol class="schedule-list">([\s\S]*?)<\/ol>/)?.[1], /Oct 05|David/);
  assert.match(await (await render("/archive")).text(), /href="\/postcards\/for-lovers"/);
  assert.match(await (await render("/postcards/music-book")).text(), /youtube.com\/embed\/TDkyTvZJ9uk/);
  const packet = JSON.parse(await readFile(new URL("content/postcards/2026-10-05-for-lovers/submission.json", root)));
  assert.equal(packet.date, "2026-10-05");
  assert.equal(packet.postcard_number, 34);
  assert.equal(packet.note, "很短但很有感觉的一首歌，整个专辑都很好听");
});

test("exposes the September discovery widget only on home and links the partial Spotify playlist", async () => {
  const home = await (await render("/")).text();
  assert.match(home, /class="september-discovery"/);
  const postcard = await (await render("/postcards/nautilus")).text();
  assert.doesNotMatch(postcard, /class="september-discovery"/);
  const volume = await (await render("/volumes/september-2026")).text();
  assert.match(volume, /https:\/\/open.spotify.com\/playlist\/2twVD4Mt0lSdFLX19NE3DB/);
  assert.match(volume, /20 of 30 songs added so far/);
});

test("September volume keeps thirty original postcards including August's opening three", async () => {
  const response = await render("/volumes/september-2026");
  assert.equal(response.status, 200);
  const html = await response.text();
  const links = [...html.matchAll(/href="(\/postcards\/[^\"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(links).size, 30);
  for (const slug of ["peace-piece", "moving", "dear", "stay-with-me"]) assert.ok(links.includes(`/postcards/${slug}`));
  assert.ok(!links.includes("/postcards/light-song"));
  assert.match(html, /It was nice building a sound scape with you all/);
  assert.match(html, /Enjoy our September song track~/);
  assert.match(html, /AUG 29/);
  assert.match(html, /september-volume-01.jpg/);
});

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
  assert.match(stay, /youtube.com\/embed\/nuU2YHtxMik/);
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
    ["2026-09-30T07:00:00Z","nuU2YHtxMik",["Oct 01"]],
    ["2026-10-01T06:59:00Z","nuU2YHtxMik",["Oct 01"]],
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

test("prepares October 2 and 3 with exact notes, cover assets and honest player credits", async () => {
  for (const [slug, video, note, number, cover] of [
    ["nautilus", "j83OVgv6woA", "高中时期的回忆，都给我去听尾奏", "032", "nautilus-elma-cover.jpg"],
    ["music-book", "TDkyTvZJ9uk", "喔～～music book", "033", "music-book-for-you-cover.jpg"],
  ]) {
    const response = await render(`/postcards/${slug}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    for (const value of [video, note, number, cover, "Sources &amp; recording"]) assert.ok(html.includes(value), value);
    assert.equal(html.includes("Third-party upload"), slug === "music-book");
  }
});

test("releases October postcards at Los Angeles midnight and keeps queue names-only", async (t) => {
  t.mock.timers.enable({ apis: ["Date"], now: new Date("2026-10-02T06:59:00Z") });
  for (const [date, video, dates, visible] of [
    ["2026-10-02T06:59:00Z", "dnHpo1CVbLg", ["Oct 02", "Oct 03"], []],
    ["2026-10-02T07:00:00Z", "j83OVgv6woA", ["Oct 03"], ["nautilus"]],
    ["2026-10-03T06:59:00Z", "j83OVgv6woA", ["Oct 03"], ["nautilus"]],
    ["2026-10-03T07:00:00Z", "TDkyTvZJ9uk", [], ["nautilus", "music-book"]],
  ]) {
    t.mock.timers.setTime(new Date(date).getTime());
    const html = await (await render()).text();
    assert.ok(html.includes(`youtube.com/embed/${video}`));
    const queue = html.match(/<ol class="schedule-list">([\s\S]*?)<\/ol>/)?.[1];
    assert.ok(queue);
    for (const day of ["Oct 02", "Oct 03"]) assert.equal(queue.includes(day), dates.includes(day));
    assert.doesNotMatch(queue, /Nautilus|Music Book|ヨルシカ|山下/);
    const archive = await (await render("/archive")).text();
    for (const slug of ["nautilus", "music-book"]) assert.equal(archive.includes(`href="/postcards/${slug}"`), visible.includes(slug));
  }
});
