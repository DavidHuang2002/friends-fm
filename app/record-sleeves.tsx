import { ArchivePreview } from "./archive-elements";
import { About, Footer, Schedule } from "./nightly";
import { octoberQueue } from "./october-records";

const lightQueue = [{ day: "Thursday", date: "Oct 01", sender: "TT" }];

function SleeveNavigation({ archived }: { archived: boolean }) {
  return <nav className="sleeve-nav" aria-label="Main navigation"><a className="sleeve-brand" href="/">FriendsFM!</a><div><a href={archived ? "/#about" : "#about"}>How it works</a><a href="/archive">Archive ↗</a></div></nav>;
}

function SleevePlayer({ video, title, edition, duration }: { video: string; title: string; edition: string; duration: string }) {
  return <div className="embedded-player sleeve-player"><div className="player-label"><span>{edition}</span><span>{duration}</span></div><div className="video-frame"><iframe title={title} src={`https://www.youtube.com/embed/${video}?playsinline=1&rel=0`} width="100%" height="100%" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" /></div><a className="sleeve-external" href={`https://www.youtube.com/watch?v=${video}`} target="_blank" rel="noreferrer">Open on YouTube ↗</a></div>;
}

function SleeveFooter({ number, date }: { number: string; date: string }) {
  return <footer><span className="footer-brand">FriendsFM!</span><p>Postcard No. {number} · {date}</p><a href="/">Go to tonight →</a></footer>;
}

export function StayWithMeHome({ archived = false }: { archived?: boolean }) {
  return <main className="stay-page">
    <section className="stay-cover" id="tonight" aria-labelledby="song-title">
      <SleeveNavigation archived={archived} />
      <div className="sleeve-dateline"><span>September 30, 2026</span><span>No. 030 / Sent by Lucy</span></div>
      <div className="stay-composition">
        <div className="stay-copy"><p className="section-kicker">Tonight’s song</p><p className="stay-japanese" lang="ja">真夜中のドア</p><h1 id="song-title">Stay<br /><em>With Me</em></h1><p className="stay-artist">Miki Matsubara <span lang="ja">松原みき</span></p><p className="stay-edition">The 1979 debut single · Pocket Park, 1980</p></div>
        <figure className="stay-sleeve"><img src="/stay-with-me-pocket-park.jpg" alt="Original Pocket Park sleeve by Miki Matsubara: white space, lavender triangles and a partial portrait" /><figcaption><span>The sleeve that started this page</span><span>Pocket Park / 1980</span></figcaption></figure>
        <div className="stay-triangles" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
      </div>
      <div className="stay-cover-bottom"><blockquote><span>A NOTE FROM LUCY</span><p lang="zh">你怎么知道我到霓虹了</p></blockquote><a className="sleeve-listen" href="#story"><span>▶</span><div>Listen & read<small>5:10 · Official lyric video</small></div><b aria-hidden="true">↓</b></a></div>
    </section>
    <section className="stay-story sleeve-story" id="story" aria-labelledby="story-title">
      <header><p className="section-kicker">Listening notes · FriendsFM</p><h2 id="story-title">A familiar song.<br />A new <em>arrival.</em></h2><div className="stay-index"><span>01 / VOICE</span><strong>Miki Matsubara</strong><span>02 / MUSIC & ARRANGEMENT</span><strong>Tetsuji Hayashi</strong><span>03 / WORDS</span><strong>Yoshiko Miura</strong></div></header>
      <div className="sleeve-story-body"><p className="sleeve-lede" lang="zh">歌还是那首歌。<br />这次，听歌的人到了日本。</p><div className="sleeve-prose" lang="zh"><p>《真夜中のドア / Stay With Me》是松原みき 1979 年的出道单曲，由三浦徳子作词、林哲司作曲及编曲，随后成为 1980 年首张专辑《Pocket Park》的开篇。这里播放的是 Pony Canyon 官方发布的歌词视频，由松原みき演唱。</p><p>Lucy 的一句话，让这张老唱片多了一个今天的坐标。今晚可以把注意力放在声音和节奏之间：一边是挽留，一边是停不下来的律动。页面也从原封面出发，留下白、淡紫色的小三角和露出一角的肖像——不必再替这首歌造一座霓虹城市。</p></div>
        <SleevePlayer video="nuU2YHtxMik" title="真夜中のドア / Stay With Me by Miki Matsubara — official lyric video" edition="Pony Canyon · Official lyric video" duration="5:10" />
        <div className="sleeve-sources"><span>Sources & recording</span><a href="https://www.ponycanyon.co.jp/music/PCCA000050026" target="_blank" rel="noreferrer">Pony Canyon · Pocket Park & original release ↗</a><a href="https://www.ponycanyon.co.jp/music/PCCA000050282" target="_blank" rel="noreferrer">Pony Canyon · Debut single history ↗</a><a href="https://www.youtube.com/watch?v=nuU2YHtxMik" target="_blank" rel="noreferrer">Pony Canyon · Official lyric video ↗</a><small>Original sleeve © Pony Canyon. Editorial layout and listening notes by FriendsFM. Lucy’s note is quoted verbatim.</small></div>
      </div>
    </section>
    {archived ? <SleeveFooter number="030" date="Sep 30, 2026" /> : <><Schedule entries={lightQueue} theme="stay-shared" /><ArchivePreview current="stay-with-me" /><About theme="stay-shared" /><Footer /></>}
  </main>;
}

export function LightSongHome({ archived = false }: { archived?: boolean }) {
  return <main className="light-page">
    <section className="light-cover" id="tonight" aria-labelledby="song-title">
      <SleeveNavigation archived={archived} />
      <div className="sleeve-dateline"><span>October 01, 2026</span><span>No. 031 / Sent by TT</span></div>
      <div className="light-composition">
        <figure className="light-sleeve"><img src="/light-song-album.jpg" alt="Original Look Back soundtrack cover: Fujino drawing at a desk beneath a lamp, surrounded by books and paper" /><figcaption><span>Look Back</span><span>Original soundtrack / 2024</span></figcaption></figure>
        <div className="light-copy"><p className="section-kicker">Tonight’s song</p><h1 id="song-title">Light<br /><em>song</em><span className="light-pencil" aria-hidden="true" /></h1><div className="light-credits"><p><span>Music & words</span>haruka nakamura</p><p><span>Voice</span>urara</p></div><div className="light-listening"><span className="light-rule" aria-hidden="true" /><p>From the soundtrack of<br /><em>Look Back.</em></p></div><a className="sleeve-listen" href="#story"><span>▶</span><div>Listen & read<small>4:10 · Official soundtrack audio</small></div><b aria-hidden="true">↓</b></a></div>
      </div>
      <div className="light-cover-bottom"><span>A song sent by TT</span><span>One night · One friend · One song</span></div>
    </section>
    <section className="light-story sleeve-story" id="story" aria-labelledby="story-title"><header><p className="section-kicker">Listening notes · FriendsFM</p><h2 id="story-title">The light<br />on the <em>page.</em></h2><div className="light-sheet" aria-hidden="true"><span /><span /><span /><span /></div><p className="light-caption">A DESK / A DRAWING / A VOICE</p></header><div className="sleeve-story-body"><p className="sleeve-lede" lang="zh">画完这一页，<br />让歌再留一会儿。</p><div className="sleeve-prose" lang="zh"><p>《Light song》是 2024 年动画电影《Look Back》（《蓦然回首》）的主题曲，由 haruka nakamura 创作，urara 演唱，收录在同年 6 月 28 日发行的原声带中。电影改编自藤本树的漫画，讲述藤野与京本因画画而相遇的故事。</p><p>原声带封面没有把镜头对准远方，而是留在一个人的画桌后面：灯、纸、书架，还有正在画下去的背影。今晚就从这里听起。把 urara 的声音当作另一道光，不急着往下翻，也不必先替这首歌写好感想。</p></div><SleevePlayer video="dnHpo1CVbLg" title="Light song by haruka nakamura and urara — official Look Back soundtrack audio" edition="avex pictures · Look Back soundtrack" duration="4:10" /><div className="sleeve-sources"><span>Sources & recording</span><a href="https://lookback-anime.com/news/detail/?id=1115209" target="_blank" rel="noreferrer">Look Back · Official theme-song announcement ↗</a><a href="https://music.apple.com/us/album/light-song/1751243365?i=1751243381" target="_blank" rel="noreferrer">Apple Music · Album & recording ↗</a><a href="https://www.youtube.com/watch?v=dnHpo1CVbLg" target="_blank" rel="noreferrer">avex pictures · Official audio & credits ↗</a><small>Original soundtrack artwork belongs to its respective rights holders. Layout and listening notes by FriendsFM; no personal note was supplied by TT.</small></div></div></section>
    {archived ? <SleeveFooter number="031" date="Oct 01, 2026" /> : <><Schedule entries={octoberQueue} theme="light-shared" /><ArchivePreview current="light-song" /><About theme="light-shared" /><Footer /></>}
  </main>;
}
