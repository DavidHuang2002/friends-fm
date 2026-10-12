import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

// Resolve packet artwork once at build/dev startup, not in each Vite environment.
// Reuse identical public assets and copy only missing covers into static output.
export function preparePostcardCovers(root: string): Record<string, string> {
  const publicDir = join(root, "public");
  const hash = (file: string) => createHash("sha256").update(readFileSync(file)).digest("hex");
  const existing = new Map<string, string>();
  for (const file of readdirSync(publicDir, { withFileTypes: true })) {
    if (file.isFile() && /\.(png|jpe?g|webp)$/.test(file.name)) existing.set(hash(join(publicDir, file.name)), `/${file.name}`);
  }
  const packets = join(root, "content/postcards");
  const covers: Record<string, string> = {};
  for (const entry of readdirSync(packets, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const share = join(packets, entry.name, "share.png");
    const submission = join(packets, entry.name, "submission.json");
    if (!existsSync(share) || !existsSync(submission)) continue;
    const { route } = JSON.parse(readFileSync(submission, "utf8"));
    if (!route) continue;
    let url = existing.get(hash(share));
    if (!url) {
      mkdirSync(join(publicDir, "postcard-covers"), { recursive: true });
      url = `/postcard-covers/${entry.name}.png`;
      copyFileSync(share, join(publicDir, url));
    }
    covers[route] = url;
  }
  return covers;
}
