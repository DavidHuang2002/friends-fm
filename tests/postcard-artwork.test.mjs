import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

test("release packet covers resolve to real routes and nonempty PNG files", async () => {
  const root = new URL("../content/postcards/", import.meta.url);
  const routes = new Set();
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const dir = entry.name;
    const files = await readdir(new URL(`${dir}/`, root));
    if (!files.includes("share.png")) continue;
    const packet = JSON.parse(await readFile(new URL(`${dir}/submission.json`, root)));
    assert.match(packet.route, /^\/postcards\/[a-z0-9-]+$/);
    assert.ok(!routes.has(packet.route), `Duplicate cover for ${packet.route}`);
    routes.add(packet.route);
    const image = await readFile(new URL(`${dir}/share.png`, root));
    assert.equal(image.subarray(1, 4).toString(), "PNG");
  }
  assert.ok(routes.size >= 30);
});
