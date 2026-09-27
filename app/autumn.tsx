import { ArchivePreview } from "./archive-elements";
import { About, Footer, Schedule } from "./nightly";

const records = {
  adult: {
    title: "大人中", artist: "盧廣仲", sender: "YSY", day: 28, number: "028",
    note: "原来爱人不在身边就叫远方 😭😢😭", video: "Q0W--O7aWBg", duration: "4:40",
    edition: "Adult · 2014 · TEAM EAR MUSIC", image: "/adult-window.png",
    alt: "AI-generated editorial artwork: an open coral window, sheer curtain and distant blue sea",
    heading: "Somewhere,\nsomeone.", caption: "GROWING UP / LOOKING OUT",
    lede: "长大，也许是开始知道自己在想念谁。",
    paragraphs: [
      "《大人中》是盧廣仲 2014 年第六张独立 EP 的同名歌曲。添翼的发行介绍把它放在退伍、离乡与长大的交界处：成为大人，并不意味着只能变成别人期待的模样。这里保留 YSY 发来的官方歌词影像，让文字与声音一起展开。",
      "YSY 把这首歌寄给远方的人。今晚不必急着给“长大”一个答案；可以只听一首歌，想一想那个不在身边的人。窗外的距离很远，一张明信片却可以很近。",
    ],
    sources: [["TEAM EAR · Release notes", "https://www.team-ear.com/news_detail.php?id=593"], ["Apple Music · Recording", "https://music.apple.com/us/song/859721708"]],
  },
  "jiu-yue": {
    title: "九月", artist: "周云蓬", sender: "TT", day: 29, number: "029",
    note: "是在to do list上摘抄过的诗句", video: "zm2Ytj5bL_I", duration: "6:03",
    edition: "Third version · 2008 · 清炒苦瓜", image: "/jiu-yue-field.png",
    alt: "AI-generated editorial artwork: windblown bronze grassland beneath a pale, paper-like sky",
    heading: "A poem,\nkept close.", caption: "SEPTEMBER / WORDS TO KEEP",
    lede: "有些句子，不是待办，是想留下来。",
    paragraphs: [
      "《九月》的文字来自海子的诗。这次选用周云蓬《清炒苦瓜》中收录的“第三版”，发行于 2008 年；歌曲资料列出海子作词、张慧生与周云蓬的作曲署名。下方是由 YOYOROCK 提供的官方音源，不是后来节目的现场版。",
      "TT 说，这是在 to do list 上摘抄过的诗句。把诗写在待办之间，是给一天留下一点不用完成的东西。今晚的页面也留出这样的空白：一片草原，一首歌，和一句愿意再读一遍的话。",
    ],
    sources: [["Apple Music · Album recording", "https://music.apple.com/us/song/1648655030"], ["Shazam · Writing credits", "https://www.shazam.com/zh-tw/song/1648655030/九月-第三版"]],
  },
};

export function AutumnHome({ song, archived = false }: { song: keyof typeof records; archived?: boolean }) {
  const r = records[song];
  return <main className={`autumn-page ${song}`}>
    <section className="autumn-cover" id="tonight" aria-labelledby="song-title">
      <nav className="autumn-nav" aria-label="Main navigation"><a className="autumn-brand" href="/">FriendsFM!</a><div><a href={archived ? "/#about" : "#about"}>How it works</a><a href="/archive">Archive ↗</a></div></nav>
      <div className="autumn-date"><span>September {r.day}, 2026</span><span>No. {r.number} / Sent by {r.sender}</span></div>
      <div className="autumn-composition"><div className="autumn-title"><p className="section-kicker">Tonight’s song</p><h1 id="song-title" lang="zh">{r.title}</h1><p className="autumn-artist" lang="zh">{r.artist}</p><p className="autumn-edition">{r.edition}</p></div><figure className="autumn-art"><img src={r.image} alt={r.alt} /><figcaption>{r.caption}</figcaption></figure></div>
      <div className="autumn-bottom"><blockquote><span>A NOTE FROM {r.sender}</span><p lang="zh">{r.note}</p></blockquote><a className="autumn-listen" href="#story"><span>▶</span> Listen & read <small>{r.duration} ↓</small></a></div>
    </section>
    <section className="autumn-story" id="story" aria-labelledby="story-title"><header><p className="section-kicker">Listening notes · FriendsFM</p><h2 id="story-title">{r.heading}</h2><p className="autumn-caption">{r.caption}</p></header><div className="autumn-body"><p className="autumn-lede" lang="zh">{r.lede}</p><div className="autumn-copy" lang="zh">{r.paragraphs.map(p => <p key={p}>{p}</p>)}</div><div className="embedded-player"><div className="player-label"><span>Listen here · {song === "adult" ? "Official lyrics video" : "Official audio / Third version"}</span><span>{r.duration}</span></div><div className="video-frame"><iframe title={`${r.title} by ${r.artist} — official recording`} src={`https://www.youtube.com/embed/${r.video}?playsinline=1&rel=0`} width="100%" height="100%" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" /></div><a className="autumn-external" href={`https://www.youtube.com/watch?v=${r.video}`} target="_blank" rel="noreferrer">Open on YouTube ↗</a></div><div className="autumn-sources"><span>Sources & recording</span>{r.sources.map(([label,url]) => <a key={url} href={url} target="_blank" rel="noreferrer">{label} ↗</a>)}<small>Artwork is AI-generated. Listening notes by FriendsFM; {r.sender}’s note is preserved verbatim.</small></div></div></section>
    {archived ? <footer><span className="footer-brand">FriendsFM!</span><p>Postcard No. {r.number} · Sep {r.day}, 2026</p><a href="/">Go to tonight →</a></footer> : <><Schedule entries={song === "adult" ? [{day:"Tuesday",date:"Sep 29",sender:"TT"}] : []} theme="autumn-shared" /><ArchivePreview current={song} /><About theme="autumn-shared" /><Footer /></>}
  </main>;
}
