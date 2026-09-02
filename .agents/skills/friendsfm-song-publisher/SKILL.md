---
name: friendsfm-song-publisher
description: Turn a song, music link, or Google Form/Google Sheets response row into a complete FriendsFM release. Use when Codex needs to read a submission, verify the recording, design and schedule a nightly postcard page, update the queue and archive, create a square sharing image and ready-to-send recommendation message, store the release packet in the repository, validate responsive layouts, or deploy the updated FriendsFM site.
---

# FriendsFM song publisher

Publish one human recommendation as a complete nightly release: website, schedule, archive, share image, message copy, and repository packet.

Before acting, read:

- [references/design-contract.md](references/design-contract.md) for the product and visual rules;
- [references/repository-contract.md](references/repository-contract.md) for routes, dates, packet storage, and validation.

## 1. Resolve the submission

Accept either:

- a song and artist;
- a music URL;
- a named Google Form/Sheets response row.

Capture the exact song or recording, artist, sender, optional note, submitted URL, and intended date. Preserve the sender's wording and language unless asked to edit it. Never invent a personal note.

For a Google Sheet row, read the exact song/link, sender, and note cells. Sheet row numbers and response numbers may differ because of headers, tables, or filters. Verify that the visible song and sender match the user's description; prefer the named song/sender over an ambiguous row number. Do not modify the sheet unless explicitly asked.

## 2. Inspect and schedule

Read `app/page.tsx`, `app/nightly.tsx`, `app/globals.css`, `app/postcards/`, `.openai/hosting.json`, and the latest `content/postcards/` packets.

Use `America/Los_Angeles` for the nightly date. Assign consecutive, unique postcard numbers. Update all affected dates and numbers when recommendations are reordered.

Keep these views consistent:

1. date selection in `app/page.tsx`;
2. current page date, number, and sender;
3. `Waiting to send` entries in chronological order;
4. archive cards and routes;
5. stored release packets.

Never add fake queue names. If a future postcard is scheduled but not fully designed, make that explicit in the packet and finish it before its date; do not let the date selector point to an unrelated page.

## 3. Verify and research the recording

Browse before writing. Confirm the exact recording, artist, title, release context, duration, label, and an embeddable player.

Prefer official artist, label, rights-holder, Apple Music, Bandcamp, MusicBrainz, and reputable first-party interviews. Use one or two concise paragraphs to explain why this recording matters tonight. Avoid generic biographies, unsupported creative-intent claims, and lyrics beyond a very short phrase.

Add visible source links to the story section. Prefer an official or rights-holder YouTube embed that works without login. Never download, proxy, rip, or host copyrighted audio.

## 4. Design the nightly world

Choose a distinctive official cover as the visual anchor when it is strong enough. Save it under `public/` with a descriptive filename and derive the page's palette, type, texture, shapes, motion, and composition from it.

If the cover is generic or unsuitable, generate original artwork from verified mood, instrumentation, performance context, or structure. Save project artwork under `public/`. Do not imitate an existing cover or default to generic AI fantasy imagery.

Build a full-viewport cover and a matching story section. Keep the UI frame in English; use the song's or sender's language for the listening note when practical. Treat desktop and mobile as separate compositions. Check large titles against date labels, sender notes, and navigation at both breakpoints.

Preserve every previous postcard as a complete route under `app/postcards/<slug>/page.tsx`.

## 5. Create the share package

Generate a square, phone-readable recommendation image that belongs to the same visual world as the page. It must include only:

- `TONIGHT'S SONG`;
- exact song title;
- exact artist;
- `SENT BY <NAME>`;
- `FriendsFM!`.

Inspect generated text carefully and retry when any name or character is wrong.

Create `content/postcards/YYYY-MM-DD-<slug>/` using `scripts/create_packet.py`. Store:

- `submission.json` — normalized submission and publishing state;
- `message.md` — ready-to-send group message;
- `share.png` — final recommendation image.

Use the stable postcard route in the message, not a localhost URL. Keep the recommendation concise and preserve the friend's note verbatim.

## 6. Validate

Run the production build. Inspect the new page on desktop and at a phone viewport. Confirm:

- no horizontal overflow or overlapping labels;
- exact title, artist, sender, note, date, and number;
- story paragraphs, iframe title, alt text, player, and source links;
- queue order, archive order, and date selector;
- complete packet contents and exact share-image text;
- every prior postcard route still compiles.

## 7. Publish and hand off

When the user asks to publish, deploy, schedule the live site, or complete the full workflow, use the existing Sites project in `.openai/hosting.json`. Push the exact validated source, save a Sites version from that commit and build archive, deploy it, wait for success, and verify the public homepage plus the stable postcard route.

For local-only drafts, do not deploy.

Return:

- live homepage and postcard links;
- final schedule order;
- the share image;
- copy-ready message text;
- packet folder path;
- any playback or source limitation.
