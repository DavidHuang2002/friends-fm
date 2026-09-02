#!/usr/bin/env python3
"""Create a portable FriendsFM release packet."""

from __future__ import annotations

import argparse
import json
import shutil
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", type=Path, default=Path.cwd())
    parser.add_argument("--date", required=True)
    parser.add_argument("--number", type=int, required=True)
    parser.add_argument("--slug", required=True)
    parser.add_argument("--title", required=True)
    parser.add_argument("--artist", required=True)
    parser.add_argument("--sender", required=True)
    parser.add_argument("--note", default="")
    parser.add_argument("--input-url", default="")
    parser.add_argument("--player-url", default="")
    parser.add_argument("--status", choices=("queued", "designed", "published"), default="designed")
    parser.add_argument("--share-image", type=Path)
    parser.add_argument("--site-url", default="https://friendsfm.davidhuang1203.chatgpt.site")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    packet = args.repo / "content" / "postcards" / f"{args.date}-{args.slug}"
    packet.mkdir(parents=True, exist_ok=True)
    route = f"/postcards/{args.slug}"
    data = {
        "date": args.date,
        "postcard_number": args.number,
        "slug": args.slug,
        "title": args.title,
        "artist": args.artist,
        "sender": args.sender,
        "note": args.note,
        "input_url": args.input_url,
        "player_url": args.player_url,
        "route": route,
        "status": args.status,
        "sources": [],
    }
    (packet / "submission.json").write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    lines = [
        "Tonight on FriendsFM!",
        f"《{args.title}》— {args.artist}",
        f"Sent by {args.sender}",
    ]
    if args.note:
        lines.extend(["", f"“{args.note}”"])
    lines.extend(["", f"{args.site_url.rstrip('/')}{route}"])
    (packet / "message.md").write_text("\n".join(lines) + "\n", encoding="utf-8")

    if args.share_image:
        source = args.share_image.expanduser().resolve()
        if not source.is_file():
            raise FileNotFoundError(source)
        shutil.copy2(source, packet / "share.png")

    print(packet)


if __name__ == "__main__":
    main()
