import { ArchivePreview } from "./archive-elements";
import { About, Footer, Schedule } from "./nightly";
import { octoberSixSevenQueue } from "./october-six-seven";

export const octoberQueue = [{ day: "Friday", date: "Oct 02", sender: "YSY" }, { day: "Saturday", date: "Oct 03", sender: "TT" }];

function Navigation({ archived }: { archived: boolean }) {
  return <nav className="oct-nav" aria-label="Main navigation"><a className="oct-brand" href="/">FriendsFM!</a><div><a href={archived ? "/#about" : "#about"}>How it works</a><a href="/archive">Archive ↗</a></div></nav>;
}

function Player({ video, title, label, duration }: { video: string; title: string; label: string; duration: string }) {
  return <div className="embedded-player oct-player"><div className="player-label"><span>{label}</span><span>{duration}</span></div><div className="video-frame"><iframe src={`https://www.youtube.com/embed/${video}?playsinline=1&rel=0`} title={title} width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" loading="lazy" /></div><a className="oct-external" href={`https://www.youtube.com/watch?v=${video}`} target="_blank" rel="noreferrer">Open on YouTube ↗</a></div>;
}

function End({ archived, music = false }: { archived: boolean; music?: boolean }) {
  if (archived) return <footer><span className="footer-brand">FriendsFM!</span><p>Postcard No. {music ? "033" : "032"} · Oct {music ? "03" : "02"}, 2026</p><a href="/">Go to tonight →</a></footer>;
  return <><Schedule entries={music ? [{ day: "Monday", date: "Oct 05", sender: "David" }, ...octoberSixSevenQueue] : octoberQueue.slice(1)} theme={music ? "book-shared" : "nautilus-shared"} /><ArchivePreview current={music ? "music-book" : "nautilus"} /><About theme={music ? "book-shared" : "nautilus-shared"} /><Footer /></>;
}

export function NautilusHome({ archived = false }: { archived?: boolean }) {
  return <main className="nautilus-page">
    <section className="nautilus-cover" id="tonight" aria-labelledby="song-title">
      <Navigation archived={archived} />
      <div className="oct-dateline"><span>October 02, 2026</span><span>No. 032 / Sent by YSY</span></div>
      <div className="nautilus-composition">
        <div className="nautilus-title"><p className="section-kicker">Tonight’s song</p><h1 id="song-title">Nautilus</h1><p className="nautilus-japanese" lang="ja">ノーチラス</p><div className="nautilus-byline"><span>ヨルシカ / Yorushika</span><span>Elma · 2019 · Track 14</span></div></div>
        <figure className="nautilus-photo"><img src="/nautilus-elma-cover.jpg" alt="Original Elma album cover: a sunlit green park, sculptural bench and a white sketched figure" /><figcaption><span>A page kept from Elma</span><span>2019 → 2026</span></figcaption></figure>
        <div className="nautilus-margin" aria-hidden="true">KEEP THE LAST NOTE.</div>
        <blockquote className="nautilus-note"><span>A NOTE FROM YSY</span><p lang="zh">高中时期的回忆，都给我去听尾奏</p><i aria-hidden="true" /></blockquote>
      </div>
      <a className="oct-listen" href="#story"><span>▶ Listen & read</span><small>4:22 · Official music video</small><b aria-hidden="true">↓</b></a>
    </section>
    <section className="nautilus-story oct-story" id="story" aria-labelledby="story-title">
      <header><p className="section-kicker">Listening notes · FriendsFM</p><h2 id="story-title">Stay for<br />the <em>ending.</em></h2><div className="nautilus-page-number" aria-hidden="true">14<span>THE LAST TRACK<br />ON ELMA</span></div></header>
      <div className="oct-story-body"><p className="oct-lede" lang="zh">最后一首，<br />也可以是回去的入口。</p><div className="oct-prose" lang="zh"><p>《ノーチラス》是ヨルシカ 2019 年第二张完整专辑《エルマ》的最后一首，由 n-buna 作词、作曲及编曲，suis 演唱。《エルマ》接续《だから僕は音楽を辞めた》的故事：一个收到信的人，沿着另一个人的足迹重新出发。初回版甚至把照片和日记一起装进了唱片。</p><p>YSY 把这首歌从高中记忆里翻出来，还特意叮嘱了尾奏。今晚不急着切下一首：让声音在歌词之后再留一会儿。这张页面也像从旧日记中抽出的一页——原封面、纸张、铅笔线，给那段回忆留一个位置。</p></div><Player video="j83OVgv6woA" title="Nautilus / ノーチラス by Yorushika — official music video" label="Yorushika · Official video" duration="4:22" /><div className="oct-sources"><span>Sources & recording</span><a href="https://sp.universal-music.co.jp/yorushika/elma/" target="_blank" rel="noreferrer">Universal Music · Elma, story & tracklist ↗</a><a href="https://www.youtube.com/watch?v=j83OVgv6woA" target="_blank" rel="noreferrer">Yorushika · Official video & credits ↗</a><small>Original Elma artwork belongs to its rights holders. Listening notes by FriendsFM; YSY’s note is quoted verbatim.</small></div></div>
    </section><End archived={archived} />
  </main>;
}

export function MusicBookHome({ archived = false }: { archived?: boolean }) {
  return <main className="book-page">
    <section className="book-cover" id="tonight" aria-labelledby="song-title">
      <Navigation archived={archived} /><div className="oct-dateline"><span>October 03, 2026</span><span>No. 033 / Sent by TT</span></div>
      <div className="book-composition"><div className="book-title"><p className="section-kicker">Tonight’s song</p><h1 id="song-title">MUSIC<br /><span>BOOK</span></h1><p className="book-artist"><span lang="ja">山下達郎</span><span>Tatsuro Yamashita</span></p><p className="book-catalogue">FOR YOU / 1982 / TRACK 02</p></div><figure className="book-sleeve"><img src="/music-book-for-you-cover.jpg" alt="Original For You album artwork: bold blue sky, colorful roadside signs and a white storefront" /><figcaption><span>From the record shelf</span><span>FOR YOU — 1982</span></figcaption></figure><div className="book-tabs" aria-hidden="true"><i /><i /><i /></div></div>
      <div className="book-bottom"><blockquote><span>A NOTE FROM TT</span><p>喔～～music book</p></blockquote><a className="oct-listen" href="#story"><span>▶ Listen & read</span><small>5:10 · YouTube upload</small><b aria-hidden="true">↓</b></a></div>
    </section>
    <section className="book-story oct-story" id="story" aria-labelledby="story-title"><header><p className="section-kicker">Listening notes · FriendsFM</p><h2 id="story-title">Turn up.<br /><em>Turn a page.</em></h2><div className="book-index"><span>SIDE A</span><strong>02</strong><span>MUSIC BOOK</span></div></header><div className="oct-story-body"><p className="oct-lede" lang="zh">有时推荐一首歌，<br />哼出它的名字就够了。</p><div className="oct-prose" lang="zh"><p>《MUSIC BOOK》收在山下達郎 1982 年的《FOR YOU》，紧接开场曲《SPARKLE》，是专辑的第二首。同年，它也成为单曲《あまく危険な香り》的 B 面。从一张唱片走到另一张唱片，这首歌一直有自己的位置。</p><p>TT 留下的是一句“喔～～music book”。这次不替它加一个复杂的理由：把音量调好，让这句话接着唱下去。页面取色自《FOR YOU》的原封面——钴蓝、奶白、红黄招牌，把一张老唱片变成今晚打开的一页。</p></div><Player video="TDkyTvZJ9uk" title="Music Book by Tatsuro Yamashita — third-party YouTube upload" label="YouTube · Third-party upload" duration="5:10" /><p className="book-player-note">This is a third-party upload, not an official artist channel. Playback availability may change; no audio is hosted by FriendsFM.</p><div className="oct-sources"><span>Sources & recording</span><a href="https://www.tatsuro.co.jp/discography/#album-rca07" target="_blank" rel="noreferrer">Tatsuro Yamashita · For You tracklist ↗</a><a href="https://www.tatsuro.co.jp/discography/single.php" target="_blank" rel="noreferrer">Official discography · 1982 single ↗</a><small>Original For You sleeve reproduced for editorial context. Listening notes by FriendsFM; TT’s note is quoted verbatim.</small></div></div></section><End archived={archived} music />
  </main>;
}
