"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { septemberTracks } from "../../september-volume";

export default function RecordShelf() {
  const story = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [selected, setSelected] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const measure = () => {
      frame = 0;
      if (!story.current) return;
      const bounds = story.current.getBoundingClientRect();
      setProgress(Math.max(0, Math.min(1, -bounds.top / Math.max(1, bounds.height - innerHeight))));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(measure); };
    const preferenceChanged = () => { setReduced(preference.matches); measure(); };
    preferenceChanged();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    preference.addEventListener("change", preferenceChanged);
    return () => { cancelAnimationFrame(frame); removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); preference.removeEventListener("change", preferenceChanged); };
  }, []);

  const moveTo = (index: number) => {
    const item = rail.current?.children[index] as HTMLElement | undefined;
    if (!item || !rail.current) return;
    rail.current.scrollTo({ left: item.offsetLeft - rail.current.offsetLeft - (rail.current.clientWidth - item.clientWidth) / 2, behavior: reduced ? "instant" : "smooth" });
  };
  const updateSelection = () => {
    if (!rail.current) return;
    const middle = rail.current.getBoundingClientRect().left + rail.current.clientWidth / 2;
    let closest = Infinity;
    let index = 0;
    Array.from(rail.current.children).forEach((child, i) => {
      const rect = child.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - middle);
      if (distance < closest) { closest = distance; index = i; }
    });
    setSelected(index);
  };
  const song = septemberTracks[selected];
  const count = reduced ? 30 : Math.min(30, 1 + Math.floor(progress * 39));
  const spread = reduced ? 1 : Math.max(0, Math.min(1, (progress - .18) / .62));

  return <>
    <div ref={story} className="record-story">
      <div className="record-stage">
        <div className="record-story-heading"><p className="volume-label">September · Volume 01</p><h2>{count === 1 ? "It started with one song." : count < 30 ? "And we kept sending." : "And then there were thirty."}</h2></div>
        <div className="record-constellation" aria-hidden="true">{septemberTracks.map((track, index) => <div className="record-memory" key={track.key} style={{
          "--x": `${((index % 6) - 2.5) * 104 * spread}%`,
          "--y": `${(Math.floor(index / 6) - 2) * 104 * spread}%`,
          "--scale": 1.9 - spread * .9,
          "--angle": `${(1 - spread) * ((index % 5) - 2) * 5}deg`,
          opacity: index < count ? 1 : 0,
          zIndex: 30 - index,
        } as CSSProperties}><img src={track.image} alt="" /><span>{track.number}</span></div>)}</div>
        <div className="record-story-bottom"><span>{String(count).padStart(2,"0")} / 30 <span className="record-scroll-cue">— Scroll to unfold</span></span><a href="#record-shelf">Browse the records ↓</a><a href="#letter-title">David’s note ↘</a></div>
      </div>
    </div>
    <section className="record-shelf" id="record-shelf" aria-labelledby="shelf-title">
      <header><p className="volume-label">Thirty nights. Side by side.</p><h2 id="shelf-title">Our little record shelf.</h2><p>Swipe through. Find an old friend. Open a night.</p></header>
      <div ref={rail} className="record-rail" onScroll={updateSelection} aria-label="September records">{septemberTracks.map((track, index) => <a className={`record-sleeve${index === selected ? " is-selected" : ""}`} href={track.href} key={track.key} aria-label={`Open ${track.title} by ${track.artist}, sent by ${track.sender}`} onFocus={() => moveTo(index)}><img src={track.image} alt="" loading="lazy" /><span>{track.number} / 030</span></a>)}</div>
      <div className="record-controls"><button type="button" onClick={() => moveTo(selected - 1)} disabled={selected === 0} aria-label="Previous record">←</button><div aria-live="polite" aria-atomic="true"><p className="volume-label">{song.number} · SENT BY {song.sender} · {song.date}</p><h3>{song.title}</h3><p>{song.artist}</p><a href={song.href}>Open this postcard ↗</a></div><button type="button" onClick={() => moveTo(selected + 1)} disabled={selected === septemberTracks.length - 1} aria-label="Next record">→</button></div>
      <a className="record-tracklist-link" href="#tracks-title">See the whole tracklist ↓</a>
    </section>
  </>;
}
