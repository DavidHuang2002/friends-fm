import { ArchivePreview } from "./archive-elements";
import { About, Footer, Schedule } from "./nightly";

export const livingNote = "十年前第一次听到这首歌，从此爱上Passenger吟唱的诗句";

export function LivingHome({ archived = false }: { archived?: boolean }) {
  return <main className="living-page">
    <section className="living-cover" id="tonight" aria-labelledby="song-title">
      <nav className="living-nav"><a href="/">FriendsFM!</a><div><a href={archived ? "/#about" : "#about"}>How it works</a><a href="/archive">Archive ↗</a></div></nav>
      <div className="living-date"><span>October 23, 2026</span><span>No. 046 / Sent by TT</span></div>
      <div className="living-composition">
        <figure className="living-art"><img src="/lifes-for-the-living-share.png" alt="Original AI-generated Life’s for the Living postcard: yellow and ultramarine relief-print fields, loose black ink lines and vermilion flecks" fetchPriority="high"/></figure>
        <header className="living-letter"><p className="living-label">Tonight’s song</p><h1 id="song-title">Life’s for<br/>the <em>Living</em></h1><p className="living-artist">Passenger</p><div className="living-rule"/><blockquote><span className="living-label">A note from TT</span><p lang="zh">{livingNote}</p></blockquote><a href="#story" className="living-enter">A song, ten years later <span>↘</span></a></header>
      </div>
      <div className="living-cover-foot"><span>One night / One friend / One song</span><span>All the Little Lights · 2012</span></div>
    </section>
    <section className="living-story" id="story" aria-labelledby="living-story-title">
      <header><p className="living-label">Listening notes / FriendsFM</p><h2 id="living-story-title">The world,<br/><em>still moving.</em></h2><p className="living-story-caption">A small song for a very full life.</p><figure className="living-sleeve"><img src="/passenger-little-lights-official.jpg" alt="Official All the Little Lights album sleeve: a vivid blue and yellow sky with dark foliage and scattered colored marks" loading="lazy"/><figcaption>All the Little Lights / 2012<br/>Official album sleeve</figcaption></figure></header>
      <div className="living-story-body"><p className="living-lede">Ten years ago,<br/>a voice stayed.</p><div className="living-prose"><p>《Life’s for the Living》收在 Passenger 2012 年的专辑《All the Little Lights》中。在自己的创作手记里，他回忆起墨尔本一个风雨交加的日子：收起街头演出的装备，坐进咖啡馆，开始留意街上的人。他把这首歌形容为年轻时走进世界、试着理解其中美好与混乱的心情。</p><p>TT 十年前被这样的吟唱打动，今天把它寄给我们。顺着这个回忆，今晚选的是 Passenger 官方频道的早期现场：2012 年 4 月 21 日，悉尼 Factory Theatre。听他让细密的叙述落在吉他的节奏上，再把声音慢慢推向开阔的副歌。下面嵌入的是现场版本；旁边的封面属于原专辑。</p></div>
      <div className="embedded-player living-player" id="listen"><div className="player-label"><span>Listen / Official live performance</span><span>Factory Theatre · Sydney · 2012</span></div><div className="video-frame"><iframe title="Passenger — Life’s for the Living, live at Factory Theatre, Sydney, April 21, 2012" src="https://www.youtube.com/embed/VicMJJthmLI?playsinline=1&rel=0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" loading="lazy"/></div><a href="https://www.youtube.com/watch?v=VicMJJthmLI" target="_blank" rel="noreferrer">Watch this performance on YouTube ↗</a></div>
      <div className="living-sources"><p className="living-label">Sources & artwork</p><a href="https://passengermusic.com/blogs/news/life-s-for-the-living" target="_blank" rel="noreferrer">Passenger · The story behind the song ↗</a><a href="https://music.apple.com/us/album/all-the-little-lights/1623014082" target="_blank" rel="noreferrer">Apple Music · Original album, release & sleeve ↗</a><a href="https://www.youtube.com/watch?v=VicMJJthmLI" target="_blank" rel="noreferrer">Passenger · Official live upload ↗</a><small>TT’s note is unchanged. Listening notes by FriendsFM. Original AI-generated print inspired by the album’s ink texture and palette; the small sleeve is official artwork.</small></div></div>
    </section>
    {archived ? <footer className="living-footer"><span className="footer-brand">FriendsFM!</span><p>No. 046 · October 23, 2026</p><a href="/">Go to tonight →</a></footer> : <><Schedule entries={[{day:"Saturday",date:"Oct 24",sender:"David"}]} theme="living-shared"/><ArchivePreview current="lifes-for-the-living"/><About theme="living-shared"/><Footer/></>}
  </main>;
}
