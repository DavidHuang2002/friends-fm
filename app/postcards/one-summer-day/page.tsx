import type { Metadata } from "next";
import { OneSummerDayHome, summerNote } from "../../one-summer-day";
export const metadata: Metadata = {
  title: "あの夏へ — 久石譲 · FriendsFM!",
  description: `Sent by TT: ${summerNote}`,
  openGraph: { title: "あの夏へ — 久石譲", description: "A song postcard from TT · October 10, 2026", images: ["https://friendsfm.davidhuang1203.chatgpt.site/one-summer-day-share.png"] },
};
export default function Page() { return <OneSummerDayHome archived />; }
