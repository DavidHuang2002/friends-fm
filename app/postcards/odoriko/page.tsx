import type { Metadata } from "next";
import { OdorikoHome, odorikoNote } from "../../october-sixteen";
export const metadata: Metadata = {title:"踊り子 — Vaundy · FriendsFM!",description:`Sent by Lucy: ${odorikoNote}`,openGraph:{title:"踊り子 — Vaundy",description:`A song from Lucy · ${odorikoNote}`,images:["https://friendsfm.davidhuang1203.chatgpt.site/odoriko-share-v2.png"]}};
export default function Page(){return <OdorikoHome archived/>;}
