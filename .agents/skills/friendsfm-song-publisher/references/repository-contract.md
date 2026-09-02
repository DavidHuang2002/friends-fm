# FriendsFM repository contract

## Source of truth

- `app/page.tsx`: Los Angeles date-to-postcard selection.
- `app/nightly.tsx`: postcard components, queue, archive data, shared sections.
- `app/globals.css`: shared and nightly visual systems.
- `app/postcards/<slug>/page.tsx`: stable archive routes.
- `public/`: artwork and web-served share assets.
- `content/postcards/YYYY-MM-DD-<slug>/`: portable release packets.
- `.openai/hosting.json`: existing Sites project identity; never create a duplicate site.

## Release packet schema

Each packet contains:

```text
content/postcards/2026-09-02-ginger/
├── submission.json
├── message.md
└── share.png
```

`submission.json` uses:

```json
{
  "date": "2026-09-02",
  "postcard_number": 5,
  "slug": "ginger",
  "title": "Ginger",
  "artist": "TOMOO",
  "sender": "YSY",
  "note": "最近发现的宝藏歌手",
  "input_url": "https://youtu.be/...",
  "player_url": "https://www.youtube.com/embed/...",
  "route": "/postcards/ginger",
  "status": "published",
  "sources": []
}
```

Valid `status` values are `queued`, `designed`, and `published`. Update the packet as the release moves through the workflow.

## Message format

Keep `message.md` ready to paste:

```text
Tonight on FriendsFM!
《Song》— Artist
Sent by Name

“Optional note”

https://friendsfm.davidhuang1203.chatgpt.site/postcards/slug
```

Omit the quote block when no note was supplied. Native punctuation can follow the song language.

## Scheduling invariants

- Interpret dates in `America/Los_Angeles`.
- Keep postcard numbers chronological, consecutive, and unique.
- Keep the current page, queue, archive, routes, packets, and public date selector synchronized.
- Reordering a date requires updating all affected postcards, not only `app/page.tsx`.
- Preserve complete historical pages; never replace an archive route with a thumbnail-only mockup.

## Validation commands

Use the repository's existing package manager and build command. For this repository:

```bash
npm run build
```

Verify the public result only after a successful Sites deployment. The homepage is date-aware, so also verify the stable `/postcards/<slug>` route.
