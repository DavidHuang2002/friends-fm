import type { Metadata } from "next";
import { GoodbyeHome, goodbyeNote } from "../../goodbye";
export const metadata: Metadata = {
  title: "グッドバイ / Goodbye — toe · FriendsFM!",
  description: `Sent by David: ${goodbyeNote}`,
  openGraph: { title: "グッドバイ / Goodbye — toe", description: "A song postcard from David · October 13, 2026", images: ["https://friendsfm.davidhuang1203.chatgpt.site/toe-goodbye-share.png"] },
};
export default function Page() { return <GoodbyeHome archived/>; }
