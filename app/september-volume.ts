import { postcards } from "./archive-data";

export const septemberLetter = "Friends! Crazy its already a month now. It started just as a random idea one afternoon that I thought might not last more than a week... yet here we are 30 songs later. It was nice building a sound scape with you all and keeping in touch with you all. Let's keep this ritual going and you all made up some of the best music in my life.";
export const septemberSignoff = "Enjoy our September song track~";

const artwork: Record<string, string> = {
  peace: "peace-piece-postcard.png", moving: "moving-album-cover.jpg", dear: "dear-album-cover.jpg",
  lonely: "still-lonely-album-cover.jpg", ginger: "tomoo-ginger-cover.jpg", liangbo: "liangbo-in-the-dark-art.png",
  schumann: "schumann-sunset-postcard.png", dijon: "dijon-nicos-red-truck-cover.jpg",
  "still-falling-for-you": "boz-scaggs-down-two-then-left-cover.webp", "my-life": "billy-joel-52nd-street-cover.jpg",
  "guo-yuan-chao": "song-dongye-guo-yuan-chao-cover.jpg", joy: "raye-this-music-may-contain-hope-cover.jpg",
  "the-blowers-daughter": "damien-rice-the-blowers-daughter-share.png", "jiufen-cafe": "cheer-chen-jiufen-cafe-share.png",
  "le-temps-des-cathedrales": "bruno-pelletier-le-temps-des-cathedrales-share.png",
  "meet-me-in-amsterdam": "rini-meet-me-in-amsterdam-share.png", holiday: "kingo-hamada-holiday-share.png",
  "ru-he": "deserts-xuan-ru-he-share.png", "eternal-theme": "dean-ting-eternal-theme-share.png",
  "i-shall-believe": "anpu-i-shall-believe-share.png", ufof: "big-thief-ufof-share.png",
  butterfly: "butterfly-official-cover.jpg", september: "september-official-cover.jpg", "its-over": "its-over-album.jpg",
  "for-once-in-my-life": "for-once-in-my-life-album.jpg", "m21-forgiveness": "m21-forgiveness-album.jpg",
  "fly-me-to-the-moon": "fly-me-to-the-moon-night.png", adult: "adult-window.png", "jiu-yue": "jiu-yue-field.png",
  "stay-with-me": "stay-with-me-pocket-park.jpg",
};

export const septemberTracks = postcards
  .filter((song) => song.dateKey >= "2026-08-29" && song.dateKey <= "2026-09-30")
  .sort((a, b) => a.dateKey.localeCompare(b.dateKey))
  .map((song) => ({ ...song, image: `/${artwork[song.key]}` }));
