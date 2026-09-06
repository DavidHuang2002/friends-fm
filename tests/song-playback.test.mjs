import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("keeps postcard playback centralized and click initiated", async () => {
  const [controller, layout, nightly, peace, moving] = await Promise.all([
    readFile(new URL("app/song-playback-controller.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("app/nightly.tsx", root), "utf8"),
    readFile(new URL("app/postcards/peace-piece/page.tsx", root), "utf8"),
    readFile(new URL("app/postcards/moving/page.tsx", root), "utf8"),
  ]);

  assert.match(layout, /<SongPlaybackController\s*\/>/);
  assert.match(controller, /a\[href="#story"\]/);
  assert.match(controller, /enablejsapi/);
  assert.match(controller, /playVideo/);
  assert.match(controller, /pending/);

  for (const page of [nightly, peace, moving]) {
    assert.match(page, /href="#story"/);
    assert.match(page, /youtube\.com\/embed/);
    assert.doesNotMatch(page, /autoplay=1/);
  }
});
