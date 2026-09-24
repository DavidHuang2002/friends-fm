# It's Over — design notes

Scheduled 2026-09-24 in America/Los_Angeles. Status: designed locally, not deployed.

Website uses the unmodified official album artwork sourced through Apple Music. Research links are in submission.json. Share artwork generated with the built-in imagegen tool, then inspected for exact title, artist and sender. Not an official artist promotional image.

## Final image prompt

Use case: ads-marketing. Create a beautifully art-directed square 1024x1024 FriendsFM music recommendation poster. Use the attached official Silk Degrees cover as the editorial photographic anchor: preserve Boz Scaggs' real appearance and the seaside bench photograph, crop away original album typography. Ocean blue, sea-glass green, near-black, ivory. Restrained Swiss editorial composition with confident elegant serif song typography, photographic image covering lower two thirds, ivory margin across top, sophisticated asymmetrical spacing. Not a fake album cover, a music club postcard. Exact text only: "TONIGHT'S SONG", "It's Over", "Boz Scaggs", "SENT BY JOEY", "FriendsFM!". Large legible title, tiny careful metadata. No extra text, no gradients or generic decorative shapes.

## Validation

## Sender correction

David clarified that this recommendation is from Joey. The canonical share.png was corrected with the built-in imagegen tool using this edit prompt:

Edit this existing poster. Change ONLY the upper-right small sender label from 'SENT BY DAVID' to exactly 'SENT BY JOEY'. Preserve all other typography, text, layout, photograph, face, bench, colors, framing and dimensions unchanged. Match the existing sender label's font, size, tracking, baseline and right alignment. No other changes.

Run the production build and check the stable route at desktop and phone widths before publishing. No personal note was fabricated. The note for M21 is preserved verbatim.
