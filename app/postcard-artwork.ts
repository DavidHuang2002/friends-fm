// Injected at build time; no filesystem access or image imports in Workers.
declare const __POSTCARD_COVERS__: Record<string, string>;
const generatedCovers: Record<string, string> = {
  "/postcards/peace-piece": "/peace-piece-postcard.png",
  "/postcards/dear": "/friendsfm-dear-share.png",
  "/postcards/still-lonely": "/friendsfm-still-lonely-share.png",
  "/postcards/schumann-andante": "/friendsfm-schumann-share.png",
  ...__POSTCARD_COVERS__,
};

export function postcardArtwork(href: string): string | undefined {
  return generatedCovers[href];
}
