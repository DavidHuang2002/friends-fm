import { ArchivePreview } from "./archive-elements";
import { About, Footer, Schedule } from "./nightly";

export const callYourMomNote = "再来一首的我特别喜欢很 vulnerable 很动人的歌";
export const callYourMomLyrics = [
  "Medicate, meditate, swear your soul to Jesus",
  "Throw a punch, fall in love, give yourself a reason",
  "Don't wanna drive another mile wonderin' if you're breathin'",
];

export function CallYourMomHome({ archived = false }: { archived?: boolean }) {
  return <main className="call-mom-page">
    <section className="call-mom-cover" id="tonight" aria-labelledby="song-title">
      <nav className="call-mom-nav"><a href="/">FriendsFM!</a><div><a href={archived ? "/#about" : "#about"}>How it works</a><a href="/archive">Archive ↗</a></div></nav>
      <div className="call-mom-date"><span>October 24, 2026</span><span>No. 047 / Sent by David</span></div>
      <div className="call-mom-composition"><figure><img src="/call-your-mom-share.png" alt="Original AI-generated Call Your Mom postcard: a cream telephone receiver off the hook, warm light and an olive-and-ivory print palette" fetchPriority="high"/></figure><header><p className="call-mom-label">Tonight’s song / A duet</p><h1 id="song-title">Call<br/><em>Your Mom</em></h1><p className="call-mom-artists">Noah Kahan<br/><span>& Lizzy McAlpine</span></p><blockquote><span>A note from David</span><p lang="zh">{callYourMomNote}</p></blockquote><a className="call-mom-enter" href="#listen">Stay on the line <span>↘</span></a></header></div>
      <div className="call-mom-bottom"><span>One night / One friend / One song</span><span>September 15, 2023 · 04:38</span></div>
    </section>
    <section className="call-mom-passage" aria-labelledby="passage-title"><div><p className="call-mom-label" id="passage-title">A passage David picked</p><span className="call-mom-quote-mark" aria-hidden="true">“</span></div><blockquote>{callYourMomLyrics.map((line, index) => <p key={line} className={index === 1 ? "call-mom-highlight" : ""}>{line}</p>)}</blockquote><p className="call-mom-lyric-credit">Lyrics by Noah Kahan & Todd Clark<br/>Performed by Noah Kahan & Lizzy McAlpine</p></section>
    <section className="call-mom-story" id="story"><header><p className="call-mom-label">Listening notes / FriendsFM</p><h2>Someone<br/><em>stays.</em></h2><figure className="call-mom-sleeve"><img src="/call-your-mom-official.jpg" alt="Official Call Your Mom collaboration single sleeve: Noah Kahan and a dog on a snowy woodland path" loading="lazy"/><figcaption>Call Your Mom · 2023<br/>Official single sleeve / Mercury & Republic</figcaption></figure></header><div><p className="call-mom-lede">Two voices.<br/>A little less alone.</p><div className="call-mom-prose"><p>Tonight is the Noah Kahan and Lizzy McAlpine duet, released on September 15, 2023. Written by Kahan and Todd Clark and produced by Kahan with Gabe Simon, it brings McAlpine’s voice into a song about reaching toward someone through a difficult night.</p><p>David calls it vulnerable and moving. The passage he picked makes that feeling concrete: a string of things to try, followed by the fear of not knowing whether someone is still there. Listen to how two voices carry that urgency together. The lyric video below is the exact version he sent.</p></div>
      <div className="embedded-player call-mom-player" id="listen"><div className="player-label"><span>Listen / Official lyric video</span><span>Noah Kahan & Lizzy McAlpine</span></div><div className="video-frame"><iframe title="Call Your Mom — Noah Kahan & Lizzy McAlpine official lyric video" src="https://www.youtube.com/embed/6W8no5Fmogo?playsinline=1&rel=0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" loading="lazy"/></div><a href="https://www.youtube.com/watch?v=6W8no5Fmogo" target="_blank" rel="noreferrer">Watch this version on YouTube ↗</a></div>
      <div className="call-mom-sources"><p className="call-mom-label">Sources & artwork</p><a href="https://music.apple.com/us/album/call-your-mom-single/1706433317" target="_blank" rel="noreferrer">Apple Music · Collaboration single, release date & sleeve ↗</a><a href="https://music.apple.com/mg/song/1706433321" target="_blank" rel="noreferrer">Apple Music · Writers, performers & production credits ↗</a><a href="https://www.youtube.com/watch?v=6W8no5Fmogo" target="_blank" rel="noreferrer">Noah Kahan · Official lyric video ↗</a><small>David’s note and selected lyrics are unchanged. Listening notes by FriendsFM. Original AI-generated postcard inspired by the single’s winter palette; the small sleeve is official artwork.</small></div>
      </div></section>
    {archived ? <footer className="call-mom-footer"><span className="footer-brand">FriendsFM!</span><p>No. 047 · October 24, 2026</p><a href="/">Go to tonight →</a></footer> : <><Schedule entries={[]} theme="call-mom-shared"/><ArchivePreview current="call-your-mom"/><About theme="call-mom-shared"/><Footer/></>}
  </main>;
}
