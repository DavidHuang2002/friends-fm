import type { Metadata } from "next";
import { EndlessRainHome } from "../../october-six-seven";

export const metadata: Metadata = {
  title: "ENDLESS RAIN — X JAPAN · FriendsFM!",
  description: "Sent by YSY: 双吉他solo太经典了",
  openGraph: { title: "ENDLESS RAIN — X JAPAN", description: "A song postcard from YSY · October 06, 2026", images: ["https://friendsfm.davidhuang1203.chatgpt.site/endless-rain-share.png"] },
};
export default function Page() { return <EndlessRainHome archived />; }
