import { AmsterdamHome, BlowersDaughterHome, BozHome, ButterflyHome, CathedralesHome, DearHome, DijonHome, EternalThemeHome, GingerHome, GuoYuanChaoHome, HolidayHome, IShallBelieveHome, JiufenCafeHome, JoyHome, LiangboHome, MovingHome, MyLifeHome, RuHeHome, SchumannHome, SeptemberHome, StillLonelyHome, UfofHome } from "./nightly";

import { LateSeptemberHome } from "./late-september";
import { MoonHome } from "./moon";
import { AutumnHome } from "./autumn";
import { StayWithMeHome, LightSongHome } from "./record-sleeves";
import { NautilusHome, MusicBookHome } from "./october-records";
import { ForLoversHome } from "./for-lovers";
import { EndlessRainHome, MonAmourHome } from "./october-six-seven";

export const dynamic = "force-dynamic";

function losAngelesDate() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day}`;
}

export default function Home() {
  return <><TonightPage />{losAngelesDate() >= "2026-10-01" && <a className="september-discovery" href="/volumes/september-2026" aria-label="Discover our September recap — 30 songs from friends"><span className="discovery-record" aria-hidden="true"><span className="discovery-vinyl" /><span className="discovery-sleeve"><small>FRIENDS FM</small><strong>Sep.</strong><span>VOL. 01</span></span></span><span className="discovery-copy"><small>30 NIGHTS LATER</small><strong>Look what we made <span aria-hidden="true">↗</span></strong></span></a>}</>;
}

function TonightPage() {
  const date = losAngelesDate();
  if (date <= "2026-08-30") return <MovingHome />;
  if (date === "2026-08-31") return <DearHome />;
  if (date === "2026-09-01") return <StillLonelyHome />;
  if (date === "2026-09-02") return <GingerHome />;
  if (date === "2026-09-03") return <LiangboHome />;
  if (date === "2026-09-04") return <SchumannHome />;
  if (date === "2026-09-05") return <DijonHome />;
  if (date === "2026-09-06") return <BozHome />;
  if (date === "2026-09-07") return <MyLifeHome />;
  if (date === "2026-09-08") return <GuoYuanChaoHome />;
  if (date === "2026-09-09") return <JoyHome />;
  if (date === "2026-09-10") return <BlowersDaughterHome />;
  if (date === "2026-09-11") return <JiufenCafeHome />;
  if (date === "2026-09-12") return <CathedralesHome />;
  if (date === "2026-09-13") return <AmsterdamHome />;
  if (date === "2026-09-14") return <HolidayHome />;
  if (date === "2026-09-15") return <RuHeHome />;
  if (date === "2026-09-16") return <EternalThemeHome />;
  if (date === "2026-09-17") return <IShallBelieveHome />;
  if (date === "2026-09-18") return <UfofHome />;
  if (date === "2026-09-19") return <UfofHome />;
  if (date === "2026-09-20") return <ButterflyHome />;
  if (date < "2026-09-24") return <SeptemberHome />;
  if (date === "2026-09-24") return <LateSeptemberHome song="its-over" />;
  if (date === "2026-09-25") return <LateSeptemberHome song="for-once-in-my-life" />;
  if (date === "2026-09-26") return <LateSeptemberHome song="m21-forgiveness" />;
  if (date === "2026-09-27") return <MoonHome />;
  if (date === "2026-09-28") return <AutumnHome song="adult" />;
  if (date === "2026-09-29") return <AutumnHome song="jiu-yue" />;
  if (date === "2026-09-30") return <StayWithMeHome />;
  if (date === "2026-10-01") return <LightSongHome />;
  if (date === "2026-10-02") return <NautilusHome />;
  if (date < "2026-10-05") return <MusicBookHome />;
  if (date === "2026-10-05") return <ForLoversHome />;
  if (date === "2026-10-06") return <EndlessRainHome />;
  return <MonAmourHome />;
}
