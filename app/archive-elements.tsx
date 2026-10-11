import type { ArchiveKey, PostcardRecord } from "./archive-data";
import { postcardsBefore } from "./archive-data";
import { postcardArtwork } from "./postcard-artwork";

export function PostcardCard({ postcard, compact = false }: { postcard: PostcardRecord; compact?: boolean }) {
  const cover = postcardArtwork(postcard.href);
  return (
    <a
      href={postcard.href}
      className={`archive-card ${postcard.card}${compact ? " archive-card-compact" : ""}`}
      aria-label={`Open ${postcard.title} by ${postcard.artist}, sent by ${postcard.sender}`}
    >
      <div className="card-top">
        <span>{postcard.date}</span>
        <span>FROM {postcard.sender}</span>
      </div>
      {cover ? <div className="generated-postcard-cover"><img src={cover} alt={`FriendsFM postcard for ${postcard.title}`} loading="lazy" /></div> : <div className={postcard.art} />}
      <div className="card-copy">
        <h3>{postcard.title}</h3>
        <p>{postcard.artist}</p>
      </div>
    </a>
  );
}

export function ArchivePreview({ current }: { current: ArchiveKey }) {
  const items = postcardsBefore(current, 6);
  return (
    <section className="archive scheduled-archive archive-preview" id="archive" aria-labelledby="archive-title">
      <div className="archive-header">
        <div><p className="section-kicker">The year so far</p><h2 id="archive-title">Postcards we kept.</h2></div>
        <p>Every night gets its own world.<br />Every world stays here.</p>
      </div>
      <div className="archive-grid scheduled-archive-grid">
        {items.map((postcard) => <PostcardCard key={postcard.key} postcard={postcard} />)}
      </div>
      <a className="volume-entry" href="/volumes/september-2026"><strong>September · Volume 01</strong><span>Our first 30 songs, kept together ↗</span></a>
      <a className="archive-all-link" href="/archive">
        <span>Open the whole year</span>
        <strong>View all postcards</strong>
        <i aria-hidden="true">↗</i>
      </a>
    </section>
  );
}
