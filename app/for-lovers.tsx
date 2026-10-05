import { ArchivePreview } from "./archive-elements";
import { About, Footer, Schedule } from "./nightly";

export function ForLoversHome({ archived = false }: { archived?: boolean }) {
  return <main className="lovers-page">
    <section className="lovers-cover" id="tonight" aria-labelledby="song-title">
      <nav className="lovers-nav" aria-label="Main navigation"><a href="/">FriendsFM!</a><div><a href={archived ? "/#about" : "#about"}>How it works</a><a href="/archive">Archive ↗</a></div></nav>
      <div className="lovers-dateline"><span>October 05, 2026</span><span>No. 034 · Sent by David</span></div>
      <div className="lovers-composition">
        <div className="lovers-title"><p className="section-kicker">Tonight’s song</p><h1 id="song-title">For<br /><em>Lovers</em></h1><div className="lovers-artist"><span>Lamp</span><span lang="ja">恋人へ</span></div><p className="lovers-edition">2004 / The opening track</p></div>
        <figure className="lovers-sleeve"><img src="/lamp-for-lovers-cover.png" alt="Original For Lovers album cover: two people standing beside a grey-blue sea, with 恋人へ in the sky" fetchPriority="high" /><figcaption><span>The original sleeve</span><span>Lamp · 恋人へ · 2004</span></figcaption></figure>
      </div>
      <div className="lovers-bottom"><blockquote><span>A note from David</span><p lang="zh">很短但很有感觉的一首歌，整个专辑都很好听</p></blockquote><a className="lovers-listen" href="#story"><span className="lovers-play" aria-hidden="true">▶</span><span>Listen & linger<small>01:15 · A little goes a long way</small></span><b aria-hidden="true">↓</b></a></div>
    </section>
    <section className="lovers-story" id="story" aria-labelledby="lovers-story-title">
      <header><p className="section-kicker">Listening notes · FriendsFM</p><h2 id="lovers-story-title">A minute.<br />A little<br /><em>longer inside.</em></h2><div className="lovers-duration" aria-hidden="true"><strong>01:15</strong><span>Small song. Long afterglow.</span></div></header>
      <div className="lovers-story-body"><p className="lovers-lede">有些歌很短，<br />却让人想在里面多待一会儿。</p><div className="lovers-prose" lang="zh"><p>《For Lovers》（恋人へ）是 Lamp 同名第二张专辑的第一首。专辑于 2004 年 2 月 11 日发行，共八首歌；这一首只有 1 分 15 秒。它既是独立的小歌，也是整张唱片的门口——还没来得及待够，就已经想听下一首。</p><p>David 推荐的不只是这一小段，也是一整张专辑。今晚可以先把这一分钟留出来，再决定要不要继续。像封面里灰蓝的海和没有看向镜头的人，有些感觉不用说满，也能留得很久。</p></div>
        <div className="embedded-player lovers-player"><div className="player-label"><span>Listen here · Submitted lyric video</span><span>Lamp · For Lovers</span></div><div className="video-frame"><iframe title="For Lovers by Lamp — Arctic Lines lyric video submitted by David" src="https://www.youtube.com/embed/v1Ng43JoGtE?playsinline=1&rel=0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" loading="lazy" /></div><a href="https://www.youtube.com/watch?v=v1Ng43JoGtE" target="_blank" rel="noreferrer">Open on YouTube ↗</a><p>This lyric video is uploaded by Arctic Lines, not Lamp’s official channel. If playback is unavailable, listen on the band’s Bandcamp below.</p></div>
        <a className="lovers-album-link" href="https://botanicalhouse.bandcamp.com/album/for-lovers-2004" target="_blank" rel="noreferrer"><span>Stay for the whole record<small>For Lovers · Eight songs · 2004</small></span><b aria-hidden="true">↗</b></a>
        <div className="lovers-sources"><span>Sources & credits</span><a href="https://botanicalhouse.bandcamp.com/track/for-lovers" target="_blank" rel="noreferrer">Botanical House · Official track ↗</a><a href="https://botanicalhouse.bandcamp.com/album/for-lovers-2004" target="_blank" rel="noreferrer">Botanical House · Release date & tracklist ↗</a><small>Original album artwork supplied by David; rights remain with its owners. Listening notes by FriendsFM. David’s note is preserved verbatim.</small></div>
      </div>
    </section>
    {archived ? <footer className="lovers-footer"><span className="footer-brand">FriendsFM!</span><p>Postcard No. 034 · October 05, 2026</p><a href="/">Go to tonight →</a></footer> : <><Schedule entries={[]} theme="lovers-shared" /><ArchivePreview current="for-lovers" /><About theme="lovers-shared" /><Footer /></>}
  </main>;
}
