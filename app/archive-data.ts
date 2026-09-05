export type ArchiveKey =
  | "guo-yuan-chao"
  | "my-life"
  | "still-falling-for-you"
  | "dijon"
  | "liangbo"
  | "ginger"
  | "lonely"
  | "schumann"
  | "dear"
  | "moving"
  | "peace";

export type PostcardRecord = {
  key: ArchiveKey;
  href: string;
  dateKey: string;
  date: string;
  month: string;
  sender: string;
  title: string;
  artist: string;
  card: string;
  art: string;
  number: string;
};

export const postcards: PostcardRecord[] = [
  { key: "guo-yuan-chao", href: "/postcards/guo-yuan-chao", dateKey: "2026-09-08", date: "SEP 08", month: "September", sender: "DAVID", title: "郭源潮", artist: "宋冬野", card: "guo-card", art: "guo-card-art", number: "011" },
  { key: "my-life", href: "/postcards/my-life", dateKey: "2026-09-07", date: "SEP 07", month: "September", sender: "YSY", title: "My Life", artist: "Billy Joel", card: "my-life-card", art: "my-life-card-art", number: "010" },
  { key: "still-falling-for-you", href: "/postcards/still-falling-for-you", dateKey: "2026-09-06", date: "SEP 06", month: "September", sender: "JOEY", title: "Still Falling for You", artist: "Boz Scaggs", card: "boz-card", art: "boz-card-art", number: "009" },
  { key: "dijon", href: "/postcards/nicos-red-truck", dateKey: "2026-09-05", date: "SEP 05", month: "September", sender: "LUCY", title: "Nico's Red Truck", artist: "Dijon", card: "dijon-card", art: "dijon-card-art", number: "008" },
  { key: "schumann", href: "/postcards/schumann-andante", dateKey: "2026-09-04", date: "SEP 04", month: "September", sender: "DAVID", title: "Andante cantabile", artist: "Robert Schumann", card: "schumann-card", art: "schumann-card-art", number: "007" },
  { key: "liangbo", href: "/postcards/in-the-dark", dateKey: "2026-09-03", date: "SEP 03", month: "September", sender: "TT", title: "黑夜中", artist: "梁博", card: "liangbo-card", art: "liangbo-card-art", number: "006" },
  { key: "ginger", href: "/postcards/ginger", dateKey: "2026-09-02", date: "SEP 02", month: "September", sender: "YSY", title: "Ginger", artist: "TOMOO", card: "ginger-card", art: "ginger-card-art", number: "005" },
  { key: "lonely", href: "/postcards/still-lonely", dateKey: "2026-09-01", date: "SEP 01", month: "September", sender: "TT", title: "還是會寂寞", artist: "陳綺貞", card: "lonely-card", art: "lonely-card-art", number: "004" },
  { key: "dear", href: "/postcards/dear", dateKey: "2026-08-31", date: "AUG 31", month: "August", sender: "TT", title: "親愛的", artist: "張懸", card: "dear-card", art: "dear-card-art", number: "003" },
  { key: "moving", href: "/postcards/moving", dateKey: "2026-08-30", date: "AUG 30", month: "August", sender: "DAVID", title: "搬家", artist: "張震岳", card: "moving-card", art: "moving-card-art", number: "002" },
  { key: "peace", href: "/postcards/peace-piece", dateKey: "2026-08-29", date: "AUG 29", month: "August", sender: "DAVID", title: "Peace Piece", artist: "Bill Evans", card: "peace-card", art: "peace-card-art", number: "001" },
];

export function postcardByKey(key: ArchiveKey) {
  return postcards.find((postcard) => postcard.key === key);
}

export function postcardsBefore(key: ArchiveKey, limit?: number) {
  const current = postcardByKey(key);
  if (!current) return [];
  const previous = postcards.filter((postcard) => postcard.dateKey < current.dateKey);
  return typeof limit === "number" ? previous.slice(0, limit) : previous;
}

export function losAngelesDateKey() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day}`;
}

export function publishedPostcards() {
  const today = losAngelesDateKey();
  return postcards.filter((postcard) => postcard.dateKey <= today);
}
