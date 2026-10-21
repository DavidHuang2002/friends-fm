import { ArchivePreview } from "./archive-elements";
import { About, Footer, Schedule } from "./nightly";

export const bathroomTitle = "(一個男人) 一個女人 和浴室";
export const bathroomNote = "超好听的对唱";

export function BathroomHome({ archived = false }: { archived?: boolean }) {
  return <main className="bath-page">
    <section className="bath-cover" id="tonight" aria-labelledby="song-title">
      <nav className="bath-nav"><a href="/">FriendsFM!</a><div><a href={archived ? "/#about" : "#about"}>How it works</a><a href="/archive">Archive ↗</a></div></nav>
      <div className="bath-dateline"><span>October 19, 2026</span><span>No. 043 / Sent by David</span></div>
      <div className="bath-composition">
        <header><p className="bath-label">Tonight’s song / Two voices</p><h1 id="song-title" lang="zh-Hant"><span>(一個男人)</span><span>一個女人</span><span>和浴室</span></h1><p className="bath-artists">謝安琪 <i>×</i> 古天樂</p><p className="bath-english">KAY TSE / LOUIS KOO</p><blockquote><span>A note from David</span><p lang="zh">{bathroomNote}</p></blockquote><a className="bath-listen-link" href="#listen">Listen together <span>↘</span></a></header>
        <figure><img src="/bathroom-share.png" alt="Original AI-generated postcard: a silver-grained bathroom mirror with two overlapping wiped arcs, with the song title and artist names" fetchPriority="high"/></figure>
      </div>
      <div className="bath-bottom"><span>Two voices. One room.</span><span>Cantopop · 2018 · 05:00</span></div>
    </section>
    <section className="bath-story" id="story">
      <header><p className="bath-label">Listening notes / FriendsFM</p><h2>In the<br/><em>same room.</em></h2><figure className="bath-sleeve"><img src="/bathroom-official-cover.jpg" alt="Official single sleeve for (一個男人) 一個女人 和浴室, featuring Louis Koo and Kay Tse in a framed monochrome photograph" loading="lazy"/><figcaption>Original single sleeve · 2018<br/>imagine.nation entertainment</figcaption></figure></header>
      <div className="bath-editorial"><p className="bath-lede" lang="zh-Hant">兩個聲音，<br/>不一定是同一個答案。</p><div className="bath-prose" lang="zh-Hant"><p>今晚是謝安琪與古天樂的合唱版本。單曲於 2018 年 11 月 8 日發行，全長五分鐘；黃偉文填詞，Ted Lo 編曲，麥浚龍與陳哲廬監製。David 選的連結，是謝安琪官方音樂頻道上的發行錄音。</p><p>不妨把這次對唱聽成一場近距離的對話：留意兩個聲音怎樣輪流接話，又在哪裡碰到一起。歌名把場景縮到一間浴室，聽的時候，卻可以把注意力留給兩個人之間的距離。這是 FriendsFM 的聆聽邀請；David 的理由簡單得多：「超好听的对唱」。</p></div>
        <div className="embedded-player bath-player" id="listen"><div className="player-label"><span>Listen / Official audio</span><span>05:00</span></div><div className="video-frame"><iframe title="(一個男人) 一個女人 和浴室 — 謝安琪 × 古天樂 official audio" src="https://www.youtube.com/embed/hwzIUmI-mK8?playsinline=1&rel=0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" loading="lazy"/></div><a href="https://www.youtube.com/watch?v=hwzIUmI-mK8" target="_blank" rel="noreferrer">Listen on YouTube ↗</a></div>
        <div className="bath-sources"><p className="bath-label">Sources & artwork</p><a href="https://music.apple.com/us/album/1441511846" target="_blank" rel="noreferrer">Apple Music · Single, release date & artwork ↗</a><a href="https://www.youtube.com/watch?v=hwzIUmI-mK8" target="_blank" rel="noreferrer">Kay Tse · Official release audio ↗</a><a href="https://www.joox.com/hk/single/FSAwcmUJAcvZWfWRBwXdmg%3D%3D" target="_blank" rel="noreferrer">JOOX · Recording credits ↗</a><small>David’s note is unchanged. Listening notes by FriendsFM. Original AI-generated postcard inspired by the single sleeve’s monochrome photography; the small sleeve is official artwork.</small></div>
      </div>
    </section>
    {archived ? <footer className="bath-footer"><span className="footer-brand">FriendsFM!</span><p>No. 043 · October 19, 2026</p><a href="/">Go to tonight →</a></footer> : <><Schedule entries={[{day:"Wednesday",date:"Oct 21",sender:"TT"},{day:"Thursday",date:"Oct 22",sender:"David"}]} theme="bath-shared"/><ArchivePreview current="a-man-a-woman-and-a-bathroom"/><About theme="bath-shared"/><Footer/></>}
  </main>;
}
