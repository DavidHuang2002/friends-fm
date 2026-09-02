import { DearHome, GingerHome, LiangboHome, MovingHome, SchumannHome, StillLonelyHome } from "./nightly";

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
  return <SchumannHome />;
}
