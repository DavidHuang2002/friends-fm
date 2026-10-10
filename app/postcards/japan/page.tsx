import type { Metadata } from "next";
import { JapanHome, japanNote } from "../../japan";
export const metadata: Metadata = {
  title: "Japan — Jan A.P. Kaczmarek · FriendsFM!",
  description: `Sent by TT: ${japanNote}`,
  openGraph: { title: "Japan — Jan A.P. Kaczmarek", description: "A birthday dedication from TT · October 11, 2026", images: ["https://friendsfm.davidhuang1203.chatgpt.site/japan-share.png"] },
};
export default function Page() { return <JapanHome archived/>; }
