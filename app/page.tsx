import { AmsterdamHome, BlowersDaughterHome, BozHome, CathedralesHome, DearHome, DijonHome, GingerHome, GuoYuanChaoHome, HolidayHome, JiufenCafeHome, JoyHome, LiangboHome, MovingHome, MyLifeHome, SchumannHome, StillLonelyHome } from "./nightly";

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
  return <HolidayHome />;
}
