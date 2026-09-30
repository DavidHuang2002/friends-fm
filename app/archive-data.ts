export type ArchiveKey =
  | "stay-with-me"
  | "light-song"
  | "adult"
  | "jiu-yue"
  | "fly-me-to-the-moon"
  | "its-over"
  | "for-once-in-my-life"
  | "m21-forgiveness"
  | "september"
  | "butterfly"
  | "ufof"
  | "i-shall-believe"
  | "eternal-theme"
  | "ru-he"
  | "holiday"
  | "jiufen-cafe"
  | "le-temps-des-cathedrales"
  | "meet-me-in-amsterdam"
  | "the-blowers-daughter"
  | "joy"
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
  { key: "light-song", href: "/postcards/light-song", dateKey: "2026-10-01", date: "OCT 01", month: "October", sender: "TT", title: "Light song", artist: "haruka nakamura & urara", card: "light-record-card", art: "light-record-card-art", number: "031" },
  { key: "stay-with-me", href: "/postcards/stay-with-me", dateKey: "2026-09-30", date: "SEP 30", month: "September", sender: "LUCY", title: "Stay With Me", artist: "松原みき · Miki Matsubara", card: "stay-record-card", art: "stay-record-card-art", number: "030" },
  { key: "jiu-yue", href: "/postcards/jiu-yue", dateKey: "2026-09-29", date: "SEP 29", month: "September", sender: "TT", title: "九月", artist: "周云蓬", card: "jiuyue-card", art: "jiuyue-card-art", number: "029" },
  { key: "adult", href: "/postcards/adult", dateKey: "2026-09-28", date: "SEP 28", month: "September", sender: "YSY", title: "大人中", artist: "盧廣仲", card: "adult-card", art: "adult-card-art", number: "028" },
  { key: "fly-me-to-the-moon", href: "/postcards/fly-me-to-the-moon", dateKey: "2026-09-27", date: "SEP 27", month: "September", sender: "DAVID", title: "Fly Me to the Moon", artist: "Tony Bennett", card: "moon-card", art: "moon-card-art", number: "027" },
  { key: "m21-forgiveness", href: "/postcards/m21-forgiveness", dateKey: "2026-09-26", date: "SEP 26", month: "September", sender: "TT", title: "M21 - Forgiveness", artist: "坂本龙一", card: "m21-forgiveness-card", art: "m21-forgiveness-card-art", number: "026" },
  { key: "for-once-in-my-life", href: "/postcards/for-once-in-my-life", dateKey: "2026-09-25", date: "SEP 25", month: "September", sender: "TT", title: "For Once in My Life", artist: "Stevie Wonder", card: "for-once-in-my-life-card", art: "for-once-in-my-life-card-art", number: "025" },
  { key: "its-over", href: "/postcards/its-over", dateKey: "2026-09-24", date: "SEP 24", month: "September", sender: "JOEY", title: "It's Over", artist: "Boz Scaggs", card: "its-over-card", art: "its-over-card-art", number: "024" },
  { key: "september", href: "/postcards/september", dateKey: "2026-09-21", date: "SEP 21", month: "September", sender: "DAVID", title: "September", artist: "Earth, Wind & Fire", card: "september-card", art: "september-card-art", number: "023" },
  { key: "butterfly", href: "/postcards/gan-lu-de-hu-die", dateKey: "2026-09-20", date: "SEP 20", month: "September", sender: "DAVID", title: "赶路的蝴蝶", artist: "step.jad依加 & 李佳隆", card: "butterfly-card", art: "butterfly-card-art", number: "022" },
  { key: "ufof", href: "/postcards/ufof", dateKey: "2026-09-18", date: "SEP 18", month: "September", sender: "TT", title: "U.F.O.F.", artist: "Big Thief", card: "ufof-card", art: "ufof-card-art", number: "021" },
  { key: "i-shall-believe", href: "/postcards/i-shall-believe", dateKey: "2026-09-17", date: "SEP 17", month: "September", sender: "LUCY", title: "I Shall Believe", artist: "安溥", card: "believe-card", art: "believe-card-art", number: "020" },
  { key: "eternal-theme", href: "/postcards/eternal-theme", dateKey: "2026-09-16", date: "SEP 16", month: "September", sender: "YSY", title: "永恆的主題", artist: "丁世光", card: "eternal-card", art: "eternal-card-art", number: "019" },
  { key: "ru-he", href: "/postcards/ru-he", dateKey: "2026-09-15", date: "SEP 15", month: "September", sender: "TT", title: "如何", artist: "张悬", card: "ruhe-card", art: "ruhe-card-art", number: "018" },
  { key: "holiday", href: "/postcards/holiday", dateKey: "2026-09-14", date: "SEP 14", month: "September", sender: "JOEY", title: "Holiday", artist: "滨田金吾", card: "holiday-card", art: "holiday-card-art", number: "017" },
  { key: "meet-me-in-amsterdam", href: "/postcards/meet-me-in-amsterdam", dateKey: "2026-09-13", date: "SEP 13", month: "September", sender: "DAVID", title: "Meet Me in Amsterdam", artist: "RINI", card: "amsterdam-card", art: "amsterdam-card-art", number: "016" },
  { key: "le-temps-des-cathedrales", href: "/postcards/le-temps-des-cathedrales", dateKey: "2026-09-12", date: "SEP 12", month: "September", sender: "TT", title: "Le temps des cathédrales", artist: "Bruno Pelletier", card: "cathedral-card", art: "cathedral-card-art", number: "015" },
  { key: "jiufen-cafe", href: "/postcards/jiufen-cafe", dateKey: "2026-09-11", date: "SEP 11", month: "September", sender: "LUCY", title: "九份的咖啡店", artist: "陈绮贞", card: "jiufen-card", art: "jiufen-card-art", number: "014" },
  { key: "the-blowers-daughter", href: "/postcards/the-blowers-daughter", dateKey: "2026-09-10", date: "SEP 10", month: "September", sender: "DAVID", title: "The Blower's Daughter", artist: "Damien Rice", card: "blower-card", art: "blower-card-art", number: "013" },
  { key: "joy", href: "/postcards/joy", dateKey: "2026-09-09", date: "SEP 09", month: "September", sender: "TT", title: "Joy.", artist: "RAYE, Amma & Absolutely", card: "joy-card", art: "joy-card-art", number: "012" },
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
