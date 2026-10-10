import { ArchivePreview } from "./archive-elements";
import { About, Footer, Schedule } from "./nightly";

export const summerNote = "千寻吃饭团 1:29把所有乐器抽走只剩钢琴 然后千寻开始大哭 印记特别深刻的瞬间";

export function OneSummerDayHome({ archived = false }: { archived?: boolean }) {
  return <main className="summer-page">
    <section className="summer-cover" id="tonight" aria-labelledby="song-title">
      <nav className="summer-nav" aria-label="Main navigation"><a href="/">FriendsFM!</a><div><a href={archived ? "/#about" : "#about"}>How it works</a><a href="/archive">Archive ↗</a></div></nav>
      <div className="summer-dateline"><span>October 10, 2026</span><span>No. 037 · Sent by TT</span></div>
      <div className="summer-composition">
        <div className="summer-title"><p className="section-kicker">Tonight’s song</p><h1 id="song-title" lang="ja">あの<br /><span>夏へ</span></h1><p className="summer-english">One Summer Day</p><p className="summer-artist"><span lang="ja">久石譲</span><span>Joe Hisaishi</span></p></div>
        <figure className="summer-art"><img src="/one-summer-day-art.png" alt="Original AI-generated gouache still life: a rice ball on folded paper, a water drop and warm light against moss green; inspired by TT’s memory, not a film still" fetchPriority="high" /><figcaption><span>A small thing, remembered.</span><span>Original illustration</span></figcaption></figure>
      </div>
      <div className="summer-bottom"><blockquote><span>A note from TT</span><p lang="zh">{summerNote}</p></blockquote><a href="#story" className="summer-listen"><span>▶ Listen & remember</span><small>Spirited Away · Original soundtrack · 2001</small><b aria-hidden="true">↓</b></a></div>
    </section>
    <section className="summer-story" id="story" aria-labelledby="summer-story-title">
      <header><p className="section-kicker">Listening notes · FriendsFM</p><h2 id="summer-story-title">A little<br />room to<br /><em>feel.</em></h2><div className="summer-track-label"><span>FROM THE ORIGINAL SOUNDTRACK</span><strong>01</strong><span>SPIRITED AWAY<br />18 JULY 2001</span></div></header>
      <div className="summer-story-body"><p className="summer-lede" lang="zh">记住一首曲子，<br />有时是因为一个瞬间。</p><div className="summer-prose" lang="zh"><p>《あの夏へ》（One Summer Day）是久石譲为《千与千寻》创作的配乐，也是 2001 年 7 月 18 日发行的电影原声第一轨。德间唱片介绍，这张原声由新日本爱乐交响乐团参与，在音乐厅录制。今晚选的是 2001 年原声录音，而不是后来的钢琴独奏或音乐会改编版。</p><p>TT 寄来的是一段很具体的观影记忆：饭团、钢琴，还有突然落下来的眼泪。那种被一首曲子带回一个画面的感觉，就是今晚想留下的东西。听的时候，不妨也想想，自己第一次记住它是在哪一刻。</p></div>
        <div className="embedded-player summer-player"><div className="player-label"><span>Joe Hisaishi · Official soundtrack audio</span><span>Track 01</span></div><div className="video-frame"><iframe title="あの夏へ / One Summer Day — Joe Hisaishi, 2001 Spirited Away soundtrack" src="https://www.youtube.com/embed/iOYAl37AScY?playsinline=1&rel=0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" loading="lazy" /></div><a href="https://www.youtube.com/watch?v=iOYAl37AScY" target="_blank" rel="noreferrer">Open on YouTube ↗</a><small>Official soundtrack audio, provided by TuneCore Japan. Playback availability may vary by region.</small></div>
        <aside className="summer-memory-note">About the note: TT’s wording and “1:29” are kept exactly as sent. The timestamp and film-scene cue have not been independently verified against this recording.</aside>
        <div className="summer-sources"><span>Sources & credits</span><a href="https://www.tkma.co.jp/new_release_detail/id=3538" target="_blank" rel="noreferrer">Tokuma Japan · Original soundtrack, release & recording ↗</a><a href="https://www.youtube.com/watch?v=iOYAl37AScY" target="_blank" rel="noreferrer">Joe Hisaishi · Official audio & credits ↗</a><small>Listening notes by FriendsFM. TT’s note is preserved verbatim. Artwork is an original AI-generated still life inspired by that memory, not Studio Ghibli artwork.</small></div>
      </div>
    </section>
    {archived ? <footer className="summer-footer"><span className="footer-brand">FriendsFM!</span><p>Postcard No. 037 · October 10, 2026</p><a href="/">Go to tonight →</a></footer> : <><Schedule entries={[{ day: "Sunday", date: "Oct 11", sender: "TT" }]} theme="summer-shared" /><ArchivePreview current="one-summer-day" /><About theme="summer-shared" /><Footer /></>}
  </main>;
}
