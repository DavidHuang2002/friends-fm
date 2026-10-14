import type { Metadata } from "next";
import { AquaHome, aquaNote } from "../../aqua";
export const metadata: Metadata = { title: "Aqua — Ryuichi Sakamoto · FriendsFM!", description: `Sent by TT: ${aquaNote}`, openGraph: { title: "Aqua — Ryuichi Sakamoto", description: "A song postcard from TT · October 14, 2026", images: ["https://friendsfm.davidhuang1203.chatgpt.site/aqua-share.png"] } };
export default function Page() { return <AquaHome archived/>; }
