/// <reference types="vite/client" />

// Vite emits these as static assets; no filesystem access is needed in Workers.
// Missing share files simply leave a postcard on its existing cover treatment.
const submissions = import.meta.glob<{ route: string }>(
  "../content/postcards/*/submission.json", { eager: true, import: "default" },
);
const shares = import.meta.glob<string>(
  "../content/postcards/*/share.png", { eager: true, query: "?url", import: "default" },
);
const generatedCovers: Record<string, string> = {
  "/postcards/peace-piece": "/peace-piece-postcard.png",
  "/postcards/dear": "/friendsfm-dear-share.png",
  "/postcards/still-lonely": "/friendsfm-still-lonely-share.png",
  "/postcards/schumann-andante": "/friendsfm-schumann-share.png",
};
for (const [path, submission] of Object.entries(submissions)) {
  const share = shares[path.replace(/submission\.json$/, "share.png")];
  if (share && submission.route) generatedCovers[submission.route] = share;
}

export function postcardArtwork(href: string): string | undefined {
  return generatedCovers[href];
}
