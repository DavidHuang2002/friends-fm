import type { Metadata } from "next";
import { CallYourMomHome, callYourMomNote } from "../../call-your-mom";
export const metadata: Metadata = {title:"Call Your Mom — Noah Kahan & Lizzy McAlpine · FriendsFM!",description:`Sent by David: ${callYourMomNote}`,openGraph:{title:"Call Your Mom — Noah Kahan & Lizzy McAlpine",description:`Sent by David · ${callYourMomNote}`,images:["https://friendsfm.davidhuang1203.chatgpt.site/call-your-mom-share.png"]}};
export default function Page(){return <CallYourMomHome archived/>;}
