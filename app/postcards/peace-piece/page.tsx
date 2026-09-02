export default function PeacePiecePostcard() {
  return (
    <main>
      <section className="cover" aria-labelledby="song-title">
        <div className="cover-image" />
        <div className="cover-shade" />
        <a className="brand" href="/" aria-label="Back to FriendsFM tonight">FriendsFM!</a>
        <a className="archive-link" href="/#archive">Archive <span>↖</span></a>
        <div className="cover-date">
          <span>Aug 29, 2026</span>
          <span>Postcard No. 001</span>
          <span>Sent by David</span>
        </div>
        <div className="cover-copy" id="tonight">
          <p className="tonight">From the archive · No. 001</p>
          <h1 id="song-title">Peace<br />Piece</h1>
          <div className="cover-meta">
            <p>Bill Evans</p>
            <p>Everybody Digs Bill Evans<br />Riverside · 1958</p>
          </div>
        </div>
        <div className="recommendation">
          <p className="quote">“For the hour when the city finally stops asking things of you.”</p>
          <p className="from">Sent by <strong>David</strong></p>
        </div>
        <a className="listen" href="#story">
          <span className="play-icon">▶</span>
          <span><strong>Enter this song</strong><small>6 min 44 sec · solo piano</small></span>
        </a>
        <div className="scroll-cue"><span /> Scroll to read</div>
      </section>

      <section className="story" id="story" aria-labelledby="story-title">
        <div className="signal-field" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, index) => (
            <i key={index} style={{ "--i": index } as React.CSSProperties} />
          ))}
        </div>
        <div className="story-heading">
          <p className="section-kicker">Why this one, that night</p>
          <h2 id="story-title">Two chords.<br />One suspended<br />moment.</h2>
        </div>
        <div className="story-body">
          <p className="lede">The left hand barely changes. It returns to the same two chords, again and again, while the right hand slowly lets go of the ground.</p>
          <div className="story-columns">
            <p>Evans recorded <em>Peace Piece</em> alone at the piano in New York on December 15, 1958. It began as an extension of the introduction he used for Leonard Bernstein’s <em>Some Other Time</em>. Instead of moving into the song, Evans stayed inside those opening harmonies and followed them somewhere new.</p>
            <p>What starts like a lullaby gradually becomes more open and unsettled: tiny dissonances, birdlike figures, long spaces. Evans later resisted recreating it exactly. The original belonged to its moment—and that may be why it still feels like time stopping for seven minutes.</p>
          </div>
          <div className="embedded-player">
            <div className="player-label"><span>Listen here · No login</span><span>Bill Evans · Peace Piece · 6:44</span></div>
            <div className="video-frame">
              <iframe title="YouTube player for Peace Piece by Bill Evans" src="https://www.youtube.com/embed/ocAf1rK3fxE?playsinline=1&rel=0" width="100%" height="100%" frameBorder="0" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" />
            </div>
          </div>
          <div className="sources">
            <span>Listening notes assembled from</span>
            <a href="https://www.universal-music.co.jp/p/UCCO-5570/" target="_blank" rel="noreferrer">Universal Music</a>
            <a href="https://musicbrainz.org/release/f04906d8-0ce0-4ffa-9339-c8cf6054a609" target="_blank" rel="noreferrer">MusicBrainz</a>
            <a href="https://www.jazz.com/dozens/the-dozens-essential-bill-evans" target="_blank" rel="noreferrer">Jazz.com</a>
          </div>
        </div>
      </section>
      <footer>
        <span className="footer-brand">FriendsFM!</span>
        <p>Postcard No. 001 · Aug 29, 2026</p>
        <a href="/">Go to tonight →</a>
      </footer>
    </main>
  );
}
