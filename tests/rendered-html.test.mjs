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
