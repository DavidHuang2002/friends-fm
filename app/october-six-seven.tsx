import { ArchivePreview } from "./archive-elements";
import { About, Footer, Schedule } from "./nightly";

export const octoberSixSevenQueue = [
  { day: "Tuesday", date: "Oct 06", sender: "YSY" },
  { day: "Wednesday", date: "Oct 07", sender: "TT" },
];

function Navigation({ archived }: { archived: boolean }) {
  return <nav className="signal-nav" aria-label="Main navigation"><a href="/">FriendsFM!</a><div><a href={archived ? "/#about" : "#about"}>How it works</a><a href="/archive">Archive ↗</a></div></nav>;
}

function Player({ video, title, label }: { video: string; title: string; label: string }) {
  return <div className="embedded-player signal-player"><div className="player-label"><span>{label}</span></div><div className="video-frame"><iframe src={`https://www.youtube.com/embed/${video}?playsinline=1&rel=0`} title={title} width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" loading="lazy" /></div><a href={`https://www.youtube.com/watch?v=${video}`} target="_blank" rel="noreferrer">Open on YouTube ↗</a><small>Playback availability may vary by region. Use the link above if the player is unavailable.</small></div>;
}

function End({ archived, akina = false }: { archived: boolean; akina?: boolean }) {
  if (archived) return <footer className="signal-footer"><span className="footer-brand">FriendsFM!</span><p>Postcard No. {akina ? "036" : "035"} · October {akina ? "07" : "06"}, 2026</p><a href="/">Go to tonight →</a></footer>;
  const theme = akina ? "amour-shared" : "endless-shared";
  return <><Schedule entries={akina ? [] : octoberSixSevenQueue.slice(1)} theme={theme} /><ArchivePreview current={akina ? "abunai-mon-amour" : "endless-rain"} /><About theme={theme} /><Footer /></>;
}

function TwinStrings() {
  return <svg className="endless-strings" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="string-silver" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#9bb7ff" /><stop offset=".5" stopColor="#eef3ff" /><stop offset="1" stopColor="#345add" /></linearGradient></defs>{Array.from({ length: 6 }, (_, i) => <g key={i} fill="none" stroke="url(#string-silver)" strokeWidth={i === 0 ? 2 : 1}><path d={`M ${700 + i * 25} -80 C ${320 + i * 25} 190, ${1050 + i * 25} 410, ${410 + i * 25} 880`} /><path d={`M ${1180 + i * 23} -80 C ${1370 + i * 23} 290, ${240 + i * 23} 560, ${780 + i * 23} 880`} /></g>)}</svg>;
}

export function EndlessRainHome({ archived = false }: { archived?: boolean }) {
  return <main className="endless-page">
    <section className="endless-cover" id="tonight" aria-labelledby="song-title">
      <TwinStrings /><Navigation archived={archived} />
      <div className="signal-dateline"><span>October 06, 2026</span><span>No. 035 · Sent by YSY</span></div>
      <div className="endless-composition"><div className="endless-title"><p className="section-kicker">Tonight’s song</p><h1 id="song-title">ENDLESS<br /><em>RAIN</em></h1><p className="endless-artist">X JAPAN</p></div><div className="endless-margin"><span>BLUE BLOOD / 1989</span><span>TWO GUITARS.<br />ONE LONG AFTERGLOW.</span></div></div>
      <div className="signal-bottom"><blockquote><span>A note from YSY</span><p lang="zh">双吉他solo太经典了</p></blockquote><a href="#story" className="signal-listen"><span>▶ Listen & read</span><small>Official music video</small><b aria-hidden="true">↓</b></a></div>
    </section>
    <section className="endless-story signal-story" id="story" aria-labelledby="story-title"><header><p className="section-kicker">Listening notes · FriendsFM</p><h2 id="story-title">Let the<br />strings<br /><em>say it.</em></h2><figure className="endless-sleeve"><img src="/endless-rain-blue-blood-cover.jpg" alt="BLUE BLOOD Special Edition album sleeve, from Sony Music" width="220" height="220" /><figcaption>From BLUE BLOOD<br />1989 album · 2007 reissue sleeve</figcaption></figure></header><div className="signal-story-body"><p className="signal-lede" lang="zh">有些旋律，<br />值得两把吉他再说一遍。</p><div className="signal-prose" lang="zh"><p>《ENDLESS RAIN》收录于 X 在 1989 年发行的《BLUE BLOOD》，排在专辑第六首。这是乐队的主流厂牌出道专辑；Sony 后来推出的双碟重制版，还把这首歌的器乐版本收在了第二张碟里。</p><p>YSY 的推荐理由很直接：双吉他 solo。今晚就带着这句话听，留意两条旋律如何靠近、交错，再一起把情绪拉长。这里保留的是 YSY 发来的官方频道视频，不另换成其他现场版本。</p></div><Player video="QhOFg_3RV5Q" title="ENDLESS RAIN by X JAPAN — official HD music video submitted by YSY" label="X Japan Official · Submitted music video" /><div className="signal-sources"><span>Sources & recording</span><a href="https://www.sonymusic.co.jp/artist/xjapan/discography/buy/KSCL-1092" target="_blank" rel="noreferrer">Sony Music · BLUE BLOOD, release context & tracklist ↗</a><a href="https://www.youtube.com/watch?v=QhOFg_3RV5Q" target="_blank" rel="noreferrer">X Japan Official · ENDLESS RAIN ↗</a><small>Original record artwork belongs to its rights holders. Listening notes by FriendsFM; YSY’s note is preserved verbatim. The twin-string illustration is an original graphic, not an album cover.</small></div></div></section>
    <End archived={archived} />
  </main>;
}

export function MonAmourHome({ archived = false }: { archived?: boolean }) {
  return <main className="amour-page">
    <section className="amour-cover" id="tonight" aria-labelledby="song-title"><Navigation archived={archived} /><div className="signal-dateline"><span>October 07, 2026</span><span>No. 036 · Sent by TT</span></div>
      <div className="amour-composition"><div className="amour-title"><p className="section-kicker">Tonight’s song</p><h1 id="song-title"><span lang="ja">危ない</span><em>MON<br />AMOUR</em></h1><p className="amour-artist"><span lang="ja">中森明菜</span><span>Akina Nakamori</span></p><div className="amour-bside"><strong>B</strong><span>Turn the record over.<br />Fin / 1986 / The B-side</span></div></div><figure className="amour-sleeve"><img src="/akina-fin-cover.jpg" alt="Original Fin single sleeve: Akina Nakamori in a houndstooth hat, holding a small dog, photographed in black and white with orchid-pink Fin lettering" fetchPriority="high" /><figcaption><span>The original Fin sleeve</span><span>Side B is tonight’s song ↗</span></figcaption></figure></div>
      <div className="signal-bottom"><blockquote><span>A note from TT</span><p lang="zh">前奏和萨克斯爽麻了</p></blockquote><a className="signal-listen" href="#story"><span>▶ Play the B-side</span><small>1986 recording · 2014 remaster</small><b aria-hidden="true">↓</b></a></div>
    </section>
    <section className="amour-story signal-story" id="story" aria-labelledby="story-title"><header><p className="section-kicker">Listening notes · FriendsFM</p><h2 id="story-title">The other<br /><em>side of<br />the sleeve.</em></h2><div className="amour-side-label"><span>SIDE</span><strong>B</strong><span>危ないMON AMOUR<br />25 SEPTEMBER 1986</span></div></header><div className="signal-story-body"><p className="signal-lede" lang="zh">封面写着 Fin，<br />今晚听的是另一面。</p><div className="signal-prose" lang="zh"><p>《危ないMON AMOUR》是中森明菜 1986 年 9 月 25 日发行的单曲《Fin》的 B 面曲。许瑛子作词、铃木喜三郎作曲、椎名和夫编曲。主打歌的名字占着封面，但把唱片翻过来，还有这样一首值得单独寄出的歌。</p><p>TT 点名的是前奏和萨克斯。那就从开头认真听起，不把它只当作唱片背面的附赠。这里选用 Warner 提供的 2014 年重制版录音；页面的黑白与兰紫色，则来自《Fin》的原版封套。</p></div><Player video="PxMtHQuE-5Q" title="危ないMON AMOUR by Akina Nakamori — Warner Music Japan official audio, 2014 remaster" label="Akina Nakamori – Topic · Warner official audio" /><a className="amour-stream" href="https://WarnerMusicJapan.lnk.to/FinAW" target="_blank" rel="noreferrer">Find the record on your music service ↗</a><div className="signal-sources"><span>Sources & recording</span><a href="https://sp.wmg.jp/akinanakamori/" target="_blank" rel="noreferrer">Warner Music Japan · Fin, date & B-side ↗</a><a href="https://www.youtube.com/watch?v=PxMtHQuE-5Q" target="_blank" rel="noreferrer">Warner official audio · Recording & songwriting credits ↗</a><small>Original Fin sleeve via Warner Music Japan; rights remain with its owners. Listening notes by FriendsFM. TT’s note is preserved verbatim.</small></div></div></section>
    <End archived={archived} akina />
  </main>;
}
