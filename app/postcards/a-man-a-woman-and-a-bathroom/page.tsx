import type { Metadata } from "next";
import { BathroomHome, bathroomTitle, bathroomNote } from "../../bathroom";
export const metadata: Metadata = {title:`${bathroomTitle} — 謝安琪 × 古天樂 · FriendsFM!`,description:`Sent by David: ${bathroomNote}`,openGraph:{title:bathroomTitle,description:`謝安琪 × 古天樂 · Sent by David`,images:["https://friendsfm.davidhuang1203.chatgpt.site/bathroom-share.png"]}};
export default function Page(){return <BathroomHome archived/>;}
