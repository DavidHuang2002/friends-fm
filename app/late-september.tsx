import { ArchivePreview } from "./archive-elements";
import { About, Footer, Schedule } from "./nightly";
import type { ArchiveKey } from "./archive-data";

export const upcomingNights = [
  { day: "Thursday", date: "Sep 24", sender: "Joey" },
  { day: "Friday", date: "Sep 25", sender: "TT" },
  { day: "Saturday", date: "Sep 26", sender: "TT" },
  { day: "Sunday", date: "Sep 27", sender: "David" },
];

const records = {
  "its-over": {
    title: "It's Over", artist: "Boz Scaggs", sender: "Joey", day: 24, number: "024",
    album: "Silk Degrees", year: "1976", label: "Columbia", video: "Ls1dqc-FLTQ",
    heading: "A goodbye,\nin full colour.", caption: "THE PACIFIC / SILK DEGREES / 1976",
    lede: "A breakup song with its shoulders relaxed and its rhythm section wide awake.",
    paragraphs: [
      "“It's Over” appears on Boz Scaggs’ 1976 album Silk Degrees. Written with David Paich and produced by Joe Wissert, it belongs to the record that brought Scaggs together with the Los Angeles session players who would help form Toto: Paich, Jeff Porcaro and David Hungate.",
      "Listen to the way the rhythm keeps moving under the farewell: the piano leaves room, the bass answers, and the backing voices make the ending feel almost buoyant. The title closes a door; the arrangement keeps the windows open. The player below uses the official 2023 remaster of that recording.",
    ],
    sources: [
      ["Boz Scaggs · Silk Degrees", "https://bozscaggs.com/release/silk-degrees/"],
      ["Official audio & credits", "https://www.youtube.com/watch?v=Ls1dqc-FLTQ"],
    ],
    note: "",
  },
  "for-once-in-my-life": {
    title: "For Once in My Life", artist: "Stevie Wonder", sender: "TT", day: 25, number: "025",
    album: "For Once in My Life", year: "1968", label: "Tamla / Motown", video: "A7rBdYhmbXI",
    heading: "Joy,\nwithout restraint.", caption: "TAMLA / STEREO / 1968",
    lede: "Two minutes and fifty seconds of someone sounding completely sure of his happiness.",
    paragraphs: [
      "Stevie Wonder’s 1968 recording of “For Once in My Life” was written by Ron Miller and Orlando Murden and produced by Henry Cosby. It is also the title track of his album from that year—a voice already unmistakable, from a musician Motown had signed when he was only eleven.",
      "The pleasure is in the forward motion: the bass never simply sits on a note, the tambourine keeps the edges bright, and Stevie sings as though standing still would be impossible. Then the harmonica gets its own turn to smile. This is a small, exuberant record; give it the whole room.",
    ],
    sources: [
      ["Motown Museum · Stevie Wonder", "https://www.motownmuseum.org/artist/stevie-wonder/"],
      ["Original album · Apple Music", "https://music.apple.com/us/album/for-once-in-my-life/1442836193"],
      ["Official audio & credits", "https://www.youtube.com/watch?v=A7rBdYhmbXI"],
    ],
    note: "",
  },
  "m21-forgiveness": {
    title: "M21 - Forgiveness", artist: "坂本龙一", sender: "TT", day: 26, number: "026",
    album: "Rage · Original Soundtrack", year: "2016", label: "feat. 2CELLOS", video: "OtSyeBtver8",
    heading: "After the anger,\na little room.", caption: "RAGE / ORIGINAL SOUNDTRACK / 2016",
    lede: "先听到一段配乐，再决定走进一部电影。",
    paragraphs: [
      "《M21 - 許し forgiveness》来自李相日执导的电影《怒》，是坂本龙一与大提琴二重奏 2CELLOS 合作的主题曲。原声专辑于 2016 年 9 月 14 日发行：它列在最后一首，前一首的名字恰好是《M20 - 信 trust》。从「信」走到「许し」，光看曲目顺序，就能读到一点电影留下的问题。",
      "这里的动人不依赖你事先看过电影。可以先跟着钢琴的留白，再听大提琴怎样把旋律慢慢托起；情绪并没有一下被解决，只是终于有了停靠的地方。TT 是为了一段配乐去看一部电影。今晚我们先从这段音乐开始。",
    ],
    sources: [
      ["Sony Music · Soundtrack announcement", "https://www.sonymusic.co.jp/artist/2cellos/info/469966"],
      ["Milan Records · Official audio", "https://www.youtube.com/watch?v=OtSyeBtver8"],
      ["Rage · Track listing", "https://music.apple.com/us/album/rage-original-soundtrack-album/1497636018"],
    ],
    note: "为了一段配乐，去看了一个电影",
  },
} as const;

export type SeptemberSong = keyof typeof records;

export function LateSeptemberHome({ song, archived = false }: { song: SeptemberSong; archived?: boolean }) {
  const r = records[song];
  const forgiveness = song === "m21-forgiveness";
  return (
    <main className={`late-postcard ${song}-page`}>
      <section className="late-cover" id="tonight" aria-labelledby="song-title">
        <nav className="late-nav" aria-label="Main navigation"><a className="late-brand" href="/">FriendsFM!</a><div><a href={archived ? "/#about" : "#about"}>How it works</a><a href="/archive">Archive ↗</a></div></nav>
        <div className="late-dateline"><span>September {r.day}, 2026</span><span>Postcard No. {r.number}</span><span>Sent by {r.sender}</span></div>
        <div className="late-composition">
          <div className="late-title"><p className="section-kicker">Tonight’s song</p><h1 id="song-title">{song === "for-once-in-my-life" ? <>For Once<br /><em>in My Life.</em></> : forgiveness ? <><small>M21 —</small>Forgiveness</> : <>It’s<br /><em>Over.</em></>}</h1><p className="late-artist">{r.artist}</p><p className="late-album">{r.album}<br />{r.label} · {r.year}</p></div>
          <figure className="late-art"><img src={`/${song}-album.jpg`} alt={`Official album cover: ${r.album} by ${r.artist}`} /><figcaption>{r.caption}</figcaption></figure>
          {r.note && <blockquote className="late-note"><span>TT LEFT A LINE</span><p>“{r.note}”</p></blockquote>}
        </div>
        <a className="late-enter" href="#story"><span>▶ &nbsp; Listen & read</span><span>One friend. One record. <b>↓</b></span></a>
      </section>
      <section className="late-story" id="story" aria-labelledby="listening-title">
        <header><p className="section-kicker">Listening notes · FriendsFM</p><h2 id="listening-title">{r.heading.split("\n").map((line, i) => <span key={line}>{i === 1 ? <em>{line}</em> : line}</span>)}</h2><p className="late-catalogue">{r.number} / {r.year}<br />{r.label}</p>{forgiveness && <div className="late-japanese" aria-hidden="true">許し</div>}</header>
        <div className="late-story-body"><p className="late-lede" lang={forgiveness ? "zh" : "en"}>{r.lede}</p><div className="late-copy" lang={forgiveness ? "zh" : "en"}>{r.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
          <div className="embedded-player late-player"><div className="player-label"><span>Listen here</span><span>{r.artist} · Official audio</span></div><div className="video-frame"><iframe title={`${r.title} by ${r.artist} — official YouTube player`} src={`https://www.youtube.com/embed/${r.video}?playsinline=1&rel=0`} width="100%" height="100%" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" /></div><a className="late-youtube" href={`https://www.youtube.com/watch?v=${r.video}`} target="_blank" rel="noreferrer">Open on YouTube ↗</a></div>
          <div className="late-sources"><span>Sources & recording</span>{r.sources.map(([label, url]) => <a key={url} href={url} target="_blank" rel="noreferrer">{label} ↗</a>)}<small>Album artwork belongs to its respective rights holders. Listening notes by FriendsFM; only the quoted note is from the sender.</small></div>
        </div>
      </section>
      {archived ? <footer><span className="footer-brand">FriendsFM!</span><p>Postcard No. {r.number} · Sep {r.day}, 2026</p><a href="/">Go to tonight →</a></footer> : <><Schedule entries={upcomingNights.slice(r.day - 23)} theme="late-schedule" /><ArchivePreview current={song as ArchiveKey} /><About theme="late-about" /><Footer /></>}
    </main>
  );
}
