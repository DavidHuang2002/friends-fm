export default function MovingPostcard() {
  return (
    <main className="moving-page">
      <section className="moving-cover" aria-labelledby="song-title">
        <img className="moving-cover-art" src="/moving-album-cover.jpg" alt="Album artwork for Moving by A-Yue Chang" />
        <div className="moving-overlay" />
        <a className="brand moving-brand" href="/" aria-label="Back to FriendsFM tonight">FriendsFM!</a>
        <a className="archive-link moving-archive-link" href="/#archive">Archive <span>↖</span></a>
        <div className="moving-date"><span>Aug 30, 2026</span><span>Postcard No. 002</span><span>Sent by David</span></div>
        <div className="moving-title-block">
          <p className="tonight">From the archive · No. 002</p>
          <h1 id="song-title">搬家</h1>
          <p className="moving-english-title">Sadly Moving On</p>
          <div className="moving-meta"><p>张震岳<br /><span>Ayal Komod</span></p><p>跟着感觉走<br /><span>Rock Records · 2025</span></p></div>
        </div>
        <div className="moving-quote-card"><p>“老早以前以前听的，没多喜欢，最近搬家听到，感觉被一年前的子弹正中眉心。”</p><span>— David, that night</span></div>
        <a className="moving-enter" href="#story"><span className="moving-play">▶</span><span><strong>Enter this song</strong><small>4 min 01 sec · Track 02</small></span></a>
        <div className="moving-scroll">Scroll to unpack <span>↓</span></div>
      </section>
      <section className="moving-story" id="story" aria-labelledby="story-title">
        <div className="packing-tape tape-one" aria-hidden="true">FRAGILE · MEMORY · FRAGILE · MEMORY ·</div>
        <div className="packing-tape tape-two" aria-hidden="true">THIS SIDE UP · THIS SIDE UP · THIS SIDE UP ·</div>
        <div className="moving-story-heading"><p className="section-kicker">Why this one, that night</p><h2 id="story-title">The boxes leave.<br />The past<br />doesn’t.</h2></div>
        <div className="moving-story-body">
          <p className="moving-lede">搬家不难。难的是决定什么要带走，什么该留下。</p>
          <div className="moving-copy"><p>相隔十二年，张震岳在 2025 年带着《跟着感觉走》回来，把这些年真实而普通的生活收进十首歌里。《搬家》排在第二首：它从收拾旧物开始，让照片、房间和一段关系的残影，一件一件重新出现。</p><p>滚石后来把它的影像称作《浪人的…》的续集——从辽阔海边回到逼仄城市，从浪漫的等待走进空掉的房间。旋律听起来平静、松弛，真正刺人的却是那件最日常的事：东西可以装箱，人的问题和回忆不会自动被搬走。</p></div>
          <div className="embedded-player moving-player"><div className="player-label"><span>Listen here · No login</span><span>张震岳 · 搬家 · 4:01</span></div><div className="video-frame"><iframe title="YouTube player for 搬家 by 张震岳" src="https://www.youtube.com/embed/tt_JXfBIiBM?playsinline=1&rel=0" width="100%" height="100%" frameBorder="0" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" /></div></div>
          <div className="sources moving-sources"><span>Listening notes assembled from</span><a href="https://dashi.streetvoice.cn/article/20250723/001/" target="_blank" rel="noreferrer">StreetVoice</a><a href="https://music.apple.com/cn/song/1827445751" target="_blank" rel="noreferrer">Apple Music</a><a href="https://www.youtube.com/watch?v=tt_JXfBIiBM" target="_blank" rel="noreferrer">Rock Records</a></div>
        </div>
      </section>
      <footer><span className="footer-brand">FriendsFM!</span><p>Postcard No. 002 · Aug 30, 2026</p><a href="/">Go to tonight →</a></footer>
    </main>
  );
}
