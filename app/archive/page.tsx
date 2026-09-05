import type { Metadata } from "next";
import Link from "next/link";
import { PostcardCard } from "../archive-elements";
import { publishedPostcards } from "../archive-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Postcards we kept — FriendsFM!",
  description: "A year of songs sent between friends, each kept in its own little world.",
};

export default function ArchivePage() {
  const items = publishedPostcards();
  const senders = new Set(items.map((postcard) => postcard.sender)).size;
  const months = Array.from(new Set(items.map((postcard) => postcard.month)));

  return (
    <main className="year-archive">
      <header className="year-archive-hero">
        <Link className="year-archive-brand" href="/">FriendsFM!</Link>
        <Link className="year-archive-tonight" href="/">Tonight <span>↗</span></Link>
        <div className="year-archive-intro">
          <p className="section-kicker">The year so far · 2026</p>
          <h1>Postcards<br /><em>we kept.</em></h1>
          <p className="year-archive-deck">A growing collection of songs our friends thought we should hear—one night, one note, one world at a time.</p>
        </div>
        <dl className="year-archive-stats">
          <div><dt>Postcards</dt><dd>{String(items.length).padStart(2, "0")}</dd></div>
          <div><dt>Friends</dt><dd>{String(senders).padStart(2, "0")}</dd></div>
          <div><dt>Since</dt><dd>Aug 29</dd></div>
        </dl>
        <div className="year-archive-cue">Scroll through the year <span>↓</span></div>
      </header>

      <div className="year-archive-body">
        {months.map((month) => {
          const monthItems = items.filter((postcard) => postcard.month === month);
          return (
            <section className="archive-month" key={month} aria-labelledby={`month-${month.toLowerCase()}`}>
              <header className="archive-month-header">
                <div><span>2026</span><h2 id={`month-${month.toLowerCase()}`}>{month}</h2></div>
                <p>{String(monthItems.length).padStart(2, "0")} postcards</p>
              </header>
              <div className="archive-contact-sheet">
                {monthItems.map((postcard) => <PostcardCard key={postcard.key} postcard={postcard} compact />)}
              </div>
            </section>
          );
        })}
      </div>

      <section className="archive-invite">
        <p className="section-kicker">There is room for another night</p>
        <h2>Send something<br />worth keeping.</h2>
        <a href="https://forms.gle/KH685ZJcGp6xmbKaA" target="_blank" rel="noreferrer">Send me a song <span>↗</span></a>
      </section>
      <footer className="year-archive-footer"><span className="footer-brand">FriendsFM!</span><p>One year · A lot of small worlds</p><Link href="/">Go to tonight →</Link></footer>
    </main>
  );
}
