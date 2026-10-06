import type { Metadata } from "next";
import { MonAmourHome } from "../../october-six-seven";

export const metadata: Metadata = {
  title: "危ないMON AMOUR — 中森明菜 · FriendsFM!",
  description: "Sent by TT: 前奏和萨克斯爽麻了",
  openGraph: { title: "危ないMON AMOUR — 中森明菜", description: "A song postcard from TT · October 07, 2026", images: ["https://friendsfm.davidhuang1203.chatgpt.site/abunai-mon-amour-share.png"] },
};
export default function Page() { return <MonAmourHome archived />; }
