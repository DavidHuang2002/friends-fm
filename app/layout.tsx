import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import "./postcard-redesign.css";
import "./late-september.css";
import "./moon.css";
import "./autumn.css";
import "./record-sleeves.css";
import "./october-records.css";
import "./volume.css";
import "./record-shelf.css";
import "./september-discovery.css";
import "./for-lovers.css";
import "./one-summer-day.css";
import "./october-six-seven.css";
import { SongPlaybackController } from "./song-playback-controller";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FriendsFM! — A song postcard every night",
  description: "One night. One friend. One song. A tiny radio station between friends.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        {children}
        <SongPlaybackController />
      </body>
    </html>
  );
}
