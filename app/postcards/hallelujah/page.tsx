import type { Metadata } from "next";
import { HallelujahHome, hallelujahNote } from "../../buckley";
export const metadata: Metadata = {title:"Hallelujah — Jeff Buckley · FriendsFM!",description:`Sent by David: ${hallelujahNote}`,openGraph:{title:"Hallelujah — Jeff Buckley",description:`Sent by David · ${hallelujahNote}`,images:["https://friendsfm.davidhuang1203.chatgpt.site/hallelujah-share.png"]}};
export default function Page(){return <HallelujahHome archived/>;}
