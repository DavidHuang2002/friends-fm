"use client";

import { useEffect } from "react";

const YOUTUBE_EMBED = 'iframe[src*="youtube.com/embed/"]';
const PLAYER_MESSAGE = JSON.stringify({
  event: "command",
  func: "playVideo",
  args: [],
});

function configurePlayer(frame: HTMLIFrameElement) {
  const url = new URL(frame.src);
  url.searchParams.set("enablejsapi", "1");
  url.searchParams.set("origin", window.location.origin);

  if (frame.src !== url.toString()) {
    frame.src = url.toString();
  }

  // The player should be ready by the time the visitor uses the entry link.
  // This also lets a quick click queue playback until YouTube finishes loading.
  frame.loading = "eager";
}

function play(frame: HTMLIFrameElement) {
  frame.contentWindow?.postMessage(PLAYER_MESSAGE, "https://www.youtube.com");
}

/**
 * Applies the FriendsFM click-to-play convention to every postcard:
 * an entry link to #story starts the YouTube player inside that story.
 * Keeping this at the layout level makes future postcards opt in by using
 * the existing postcard anatomy, without duplicating playback logic.
 */
export function SongPlaybackController() {
  useEffect(() => {
    const frames = Array.from(document.querySelectorAll<HTMLIFrameElement>(YOUTUBE_EMBED));
    const pending = new WeakSet<HTMLIFrameElement>();

    for (const frame of frames) {
      configurePlayer(frame);
      frame.addEventListener("load", () => {
        if (pending.has(frame)) {
          pending.delete(frame);
          play(frame);
        }
      });
    }

    const onEntryClick = (event: MouseEvent) => {
      const entry = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href="#story"]');
      if (!entry) return;

      const story = document.getElementById("story");
      const player = story?.querySelector<HTMLIFrameElement>(YOUTUBE_EMBED);
      if (!player) return;

      pending.add(player);
      play(player);
    };

    document.addEventListener("click", onEntryClick);
    return () => document.removeEventListener("click", onEntryClick);
  }, []);

  return null;
}
