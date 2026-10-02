// Exact, reproducible contact sheet of the existing artwork; no regenerated covers.
import fs from 'node:fs/promises';
import sharp from 'sharp';
import { postcards } from '../app/archive-data.ts';

const source = await fs.readFile(new URL('../app/september-volume.ts', import.meta.url), 'utf8');
const mapping = Object.fromEntries([...source.matchAll(/(?:"([\w-]+)"|\b([\w]+)):\s*"([^"\n]+\.(?:png|jpg|webp))"/g)].map(m => [m[1] || m[2], m[3]]));
const songs = postcards.filter(p => p.dateKey >= '2026-08-29' && p.dateKey <= '2026-09-30').sort((a,b) => a.dateKey.localeCompare(b.dateKey));
if (songs.length !== 30) throw new Error('Expected 30 songs');
const svg = `<svg width="1800" height="2200" xmlns="http://www.w3.org/2000/svg"><rect width="1800" height="2200" fill="#eee8d9"/><g fill="#702d30"><text x="100" y="105" font-family="Helvetica" font-size="33" font-weight="bold">FriendsFM!</text><text x="1700" y="105" text-anchor="end" font-family="Helvetica" font-size="20" letter-spacing="3">VOLUME 01 / 2026</text><path d="M100 145H1700" stroke="#702d30"/><text x="80" y="405" font-family="Georgia" font-size="290" letter-spacing="-15">September</text><text x="105" y="480" font-family="Helvetica" font-size="25" letter-spacing="5">OUR FIRST MONTH, KEPT TOGETHER.</text><text x="100" y="1950" font-family="Georgia" font-size="72" font-style="italic">30 songs later, here we are.</text><text x="100" y="2025" font-family="Helvetica" font-size="24" letter-spacing="3">DAVID · TT · YSY · LUCY · JOEY</text><path d="M100 2090H1700" stroke="#702d30"/><text x="100" y="2145" font-family="Helvetica" font-size="20">AUGUST 29 — SEPTEMBER 30</text><text x="1700" y="2145" text-anchor="end" font-family="Helvetica" font-size="20">friendsfm.davidhuang1203.chatgpt.site</text></g></svg>`;
const tiles = await Promise.all(songs.map(async (song, i) => {
  if (!mapping[song.key]) throw new Error(`Missing artwork: ${song.key}`);
  return { input: await sharp(new URL(`../public/${mapping[song.key]}`, import.meta.url).pathname).resize(256,256,{fit:'cover'}).toBuffer(), left:100+(i%6)*269, top:550+Math.floor(i/6)*269 };
}));
const image = await sharp(Buffer.from(svg.replace('y="480"', 'y="510"'))).composite(tiles).jpeg({quality:94}).toBuffer();
await fs.mkdir(new URL('../content/volumes/2026-09/', import.meta.url),{recursive:true});
await fs.writeFile(new URL('../public/september-volume-01.jpg', import.meta.url), image);
await fs.writeFile(new URL('../content/volumes/2026-09/share.jpg', import.meta.url), image);
console.log(`Rendered ${songs.length} real artworks into September Volume 01`);
