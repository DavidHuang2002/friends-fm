# FriendsFM!

FriendsFM is a tiny radio station between friends: one friend, one song, one
digital postcard every night.

Each recommendation gets its own visual world, a short researched introduction,
an embedded listening link, and a permanent place in the yearly archive. Visit
the [live site](https://friendsfm.davidhuang1203.chatgpt.site/).

## How it works

1. A friend submits a song, optionally with their name and a short note.
2. The submission is placed in the nightly queue.
3. On its scheduled date, the song becomes a designed FriendsFM postcard.
4. The homepage chooses the correct postcard for the current date in
   `America/Los_Angeles`.
5. Past postcards remain available in the yearly archive.

### Player behavior

Every postcard follows the same listening convention: its cover entry link points to
`#story`, and the story contains one YouTube embed. The shared playback controller
uses YouTube's IFrame Player API to start that embed when the entry link is clicked.
Do not add `autoplay=1` to postcard embeds or duplicate player scripts in new routes.
6. A square sharing image and ready-to-send message are stored with the release.

## FriendsFM Song Publisher skill

The repository includes the `$friendsfm-song-publisher` Codex skill:

```text
.agents/skills/friendsfm-song-publisher/
```

Use it whenever a song or Google Forms/Sheets response needs to become a
complete FriendsFM release.

### What the skill does

- Accepts a song, music URL, or a specified Google Sheet response row.
- Resolves the recording, artist, sender, note, and source link.
- Researches reliable context about the song, album, or musician.
- Writes a concise introduction in the appropriate language.
- Assigns a unique release date and postcard number.
- Designs and builds a distinctive responsive postcard page.
- Adds official artwork and an embedded player or listening link when available.
- Updates the homepage schedule, queue, and yearly archive.
- Creates a square group-chat image and ready-to-send message.
- Stores the complete release packet in the repository.
- Builds and checks desktop and mobile layouts.
- Deploys when the prompt explicitly asks it to publish or deploy.

### Minimum input

Only a song is required. The sender, note, date, and URL are optional.

```text
Song: Peace Piece
Artist: Bill Evans
Sent by: David
Note: This always feels like the room becoming quiet.
Publish date: September 5, 2026
```

Music links from YouTube, Spotify, Apple Music, NetEase Music, and similar
services can be supplied instead of a typed song and artist.

## Prompt examples

### Publish a Google Sheet response

```text
Use $friendsfm-song-publisher on row 8 of this Google Sheet:
[Google Sheet URL]

Schedule it for tomorrow, create the postcard page, sharing image and message,
update the queue and archive, then deploy.
```

Row numbers may be ambiguous when a sheet has headers or filters. The skill
verifies the song and sender before publishing and does not modify the sheet
unless explicitly asked.

### Publish a song directly

```text
Use $friendsfm-song-publisher for:

Song: Peace Piece
Artist: Bill Evans
Sent by: David
Note: This always feels like the room becoming quiet.

Schedule it for September 5, build the postcard, update the queue and archive,
create the sharing image and message, then deploy.
```

### Prepare without deploying

```text
Use $friendsfm-song-publisher for this song:
[music URL]

Prepare the complete release packet and schedule it for Friday,
but do not deploy yet.
```

### Publish the next queued song

```text
Use $friendsfm-song-publisher to publish the next queued submission.
Create the group-chat image and copy, then deploy the site.
```

### 中文 prompt

```text
用 $friendsfm-song-publisher 做 Google Sheet row 8。
排到明晚，完成网站、queue、archive、群聊图片和配文，然后 deploy。
```

## Release packets

Every prepared recommendation gets a dedicated folder:

```text
content/postcards/YYYY-MM-DD-song-slug/
├── submission.json  # submission, schedule, links, and sources
├── message.md       # ready-to-send recommendation copy
└── share.png        # square group-chat image
```

After a complete run, Codex should return the scheduled date, postcard URL,
sharing image, message copy, packet path, and live URL when deployed. It should
also report any unresolved source, licensing, player, or metadata limitations.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

## Repository map

```text
app/                  Pages and nightly scheduling logic
public/               Album artwork and generated sharing assets
content/postcards/    Durable release packets
.agents/skills/       Reusable FriendsFM publishing workflow
.openai/hosting.json  OpenAI Sites hosting configuration
```

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm run lint`: run the code quality checks
- `npm run db:generate`: generate Drizzle migrations after schema changes

## Learn More

- [vinext Documentation](https://github.com/cloudflare/vinext)
- [Drizzle D1 Guide](https://orm.drizzle.team/docs/get-started/d1-new)
