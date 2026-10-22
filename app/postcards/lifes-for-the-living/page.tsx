import type { Metadata } from "next";
import { LivingHome, livingNote } from "../../lifes-for-the-living";
export const metadata: Metadata = {title:"Life’s for the Living — Passenger · FriendsFM!",description:`Sent by TT: ${livingNote}`,openGraph:{title:"Life’s for the Living — Passenger",description:`Sent by TT · ${livingNote}`,images:["https://friendsfm.davidhuang1203.chatgpt.site/lifes-for-the-living-share.png"]}};
export default function Page(){return <LivingHome archived/>;}
