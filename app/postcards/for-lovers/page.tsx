import type { Metadata } from "next";
import { ForLoversHome } from "../../for-lovers";

export const metadata: Metadata = {
  title: "For Lovers — Lamp · FriendsFM!",
  description: "Sent by David: 很短但很有感觉的一首歌，整个专辑都很好听",
  openGraph: { title: "For Lovers — Lamp", description: "A song postcard from David · October 05, 2026", images: ["https://friendsfm.davidhuang1203.chatgpt.site/lamp-for-lovers-share.png"] },
};

export default function Page() { return <ForLoversHome archived />; }
