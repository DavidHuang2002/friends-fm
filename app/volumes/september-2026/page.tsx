import type { Metadata } from "next";
import { septemberLetter, septemberSignoff, septemberTracks } from "../../september-volume";
import RecordShelf from "./record-shelf";

export const metadata: Metadata = {
  title: "September · Volume 01 — FriendsFM!",
  description: "30 songs. Five friends. Our first month, kept together.",
  openGraph: { images: ["/september-volume-01.jpg"] },
};

export default function SeptemberVolume() {
  return <main className="volume">
    <nav className="volume-nav"><a href="/">FriendsFM!</a><span>A collection between friends</span><a href="/archive">The archive ↗</a></nav>
    <h1 className="volume-edition-title">September <span>Our first month, kept together. / Vol. 01</span></h1>
    <RecordShelf />
    <section className="volume-spotify" aria-labelledby="spotify-title"><div><p className="volume-label">Take September with you</p><h2 id="spotify-title">Same friends.<br />A longer listen.</h2><p>Our month, collected on Spotify.<br /><small>20 of 30 songs added so far — the playlist is still being assembled.</small></p></div><a href="https://open.spotify.com/playlist/2twVD4Mt0lSdFLX19NE3DB" target="_blank" rel="noreferrer"><span aria-hidden="true">▶</span> Listen on Spotify <span aria-hidden="true">↗</span></a></section>
    <section className="volume-letter" aria-labelledby="letter-title">
      <div><p className="volume-label">A note from David</p><h2 id="letter-title">Look what<br />we made.</h2><span className="volume-stamp">FRIENDS FM<br />FIRST EDITION<br />01</span></div>
      <div className="volume-letter-copy"><p>{septemberLetter}</p><p>{septemberSignoff}</p><p className="volume-signature">With love, David</p></div>
    </section>
    <section className="volume-tracks" aria-labelledby="tracks-title">
      <header><p className="volume-label">The liner notes</p><h2 id="tracks-title">Our September tracklist.</h2><p>Including the three August songs that started it all.<br />Pick a song to open its original postcard.</p></header>
      <div className="volume-sides">{[0, 15].map((start, side) => <div key={start}><h3>Side {side === 0 ? "A" : "B"}<span>{side === 0 ? "The beginning" : "And we kept going"}</span></h3><ol start={start + 1}>{septemberTracks.slice(start, start + 15).map((song) => <li key={song.key}><a href={song.href}><span className="volume-track-number">{song.number}</span><img src={song.image} alt="" loading="lazy" /><span className="volume-track-name"><strong>{song.title}</strong><small>{song.artist}</small></span><span className="volume-track-sender">{song.sender}<small>{song.date}</small></span></a></li>)}</ol></div>)}</div>
    </section>
    <footer className="volume-footer"><p>Same time. Another song.</p><h2>Let’s keep this<br /><em>ritual going.</em></h2><div><a href="/september-volume-01.jpg" download>Keep the collective postcard ↓</a><a href="https://forms.gle/KH685ZJcGp6xmbKaA" target="_blank" rel="noreferrer">Send me a song ↗</a></div><span>DAVID · TT · YSY · LUCY · JOEY</span></footer>
  </main>;
}
