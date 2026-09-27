import { ArchivePreview } from "./archive-elements";
import { About, Footer, Schedule } from "./nightly";

export const moonNote = "2 days late but here is a song about the moon";

export function MoonHome({ archived = false }: { archived?: boolean }) {
  return <main className="moon-page">
    <section className="moon-cover" id="tonight" aria-labelledby="song-title">
      <img className="moon-landscape" src="/fly-me-to-the-moon-night.png" alt="AI-created moonlit bay and mountain silhouettes, inspired by the original Songs for the Jet Set sleeve" />
      <div className="moon-shade" />
      <nav className="moon-nav" aria-label="Main navigation"><a className="moon-brand" href="/">FriendsFM!</a><div><a href={archived ? "/#about" : "#about"}>How it works</a><a href="/archive">Archive ↗</a></div></nav>
      <div className="moon-dateline"><span>September 27, 2026</span><span>No. 027 / Sent by David</span></div>
      <div className="moon-title"><p className="section-kicker">Tonight’s song</p><h1 id="song-title">Fly Me<br />to the <em>Moon</em></h1><p className="moon-artist">Tony Bennett</p><p className="moon-edition">Songs for the Jet Set · 1965</p></div>
      <div className="moon-bottom"><a className="moon-enter" href="#story"><span className="moon-play">▶</span><span>Listen to this postcard<small>4:10 · Columbia / Legacy</small></span></a><blockquote><span>A NOTE FROM DAVID</span><p>“{moonNote}”</p></blockquote></div>
      <div className="moon-cover-foot"><span>A little late. Still looking up.</span><a href="#story">Read the postcard ↓</a></div>
    </section>
    <section className="moon-story" id="story" aria-labelledby="moon-story-title">
      <header className="moon-story-heading"><p className="section-kicker">Listening notes · FriendsFM</p><h2 id="moon-story-title">No deadline<br />for <em>the moon.</em></h2><p className="moon-story-caption">ONE VOICE / A WHOLE HORIZON</p><figure className="moon-sleeve"><img src="/fly-me-to-the-moon-album.jpg" alt="Original 1965 Tony Bennett album cover, If I Ruled the World: Songs for the Jet Set" /><figcaption>The original sleeve · Columbia, 1965</figcaption></figure></header>
      <div className="moon-story-body"><p className="moon-lede">Two days late is still a perfectly good time to look up.</p><div className="moon-copy"><p>Tony Bennett’s “Fly Me to the Moon” is the second track on <em>If I Ruled the World: Songs for the Jet Set</em>, released in April 1965. Bart Howard wrote the song; Don Costa arranged and conducted this recording, with Ralph Sharon at the piano and the Will Bronson Singers among the credited performers. The album’s travel theme makes the moon feel like one more place you might go.</p><p>Tonight’s listening suggestion: let the title be an invitation, not an itinerary. Pay attention to how Bennett places a phrase, how much room remains around a familiar melody. David’s postcard arrives a little late; the song has been waiting since 1965. It can spare us another evening.</p></div>
        <div className="embedded-player moon-player"><div className="player-label"><span>Listen here · Original recording</span><span>Tony Bennett · 4:10</span></div><div className="video-frame"><iframe title="Fly Me to the Moon by Tony Bennett — official 1965 recording" src="https://www.youtube.com/embed/yzBhPeoh5t4?playsinline=1&rel=0" width="100%" height="100%" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" /></div><a className="moon-external" href="https://www.youtube.com/watch?v=yzBhPeoh5t4" target="_blank" rel="noreferrer">Open on YouTube ↗</a></div>
        <div className="moon-sources"><span>Sources & recording</span><a href="https://www.youtube.com/watch?v=yzBhPeoh5t4" target="_blank" rel="noreferrer">Columbia / Legacy · Official audio & credits ↗</a><a href="https://music.apple.com/us/album/fly-me-to-the-moon/157427624?i=157427655" target="_blank" rel="noreferrer">Apple Music · Album & track listing ↗</a><small>Original sleeve © Columbia Records. Night landscape and share artwork are AI-generated; listening notes by FriendsFM. David’s note is quoted verbatim.</small></div>
      </div>
    </section>
    {archived ? <footer><span className="footer-brand">FriendsFM!</span><p>Postcard No. 027 · Sep 27, 2026</p><a href="/">Go to tonight →</a></footer> : <><Schedule entries={[]} theme="moon-schedule" /><ArchivePreview current="fly-me-to-the-moon" /><About theme="moon-about" /><Footer /></>}
  </main>;
}
