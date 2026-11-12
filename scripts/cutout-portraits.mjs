// Crops the 3x2 testimonial portrait grid into 6 cut-out PNGs with a
// transparent background. The source photos sit on a flat white backdrop,
// so a flood fill from the image border removes it cleanly.
// Usage: node scripts/cutout-portraits.mjs "<path to grid jpg>"
import sharp from "sharp";
import fs from "node:fs";

const src = process.argv[2];
if (!src) throw new Error("Pass the portrait grid path");
const outDir = "public/images/people";
fs.mkdirSync(outDir, { recursive: true });

const { width: W, height: H } = await sharp(src).metadata();
const cols = 3, rows = 2;
const cw = Math.floor(W / cols), ch = Math.floor(H / rows);

// Distance from pure white (0 = white). Low saturation required too.
const whiteness = (r, g, b) => {
  const min = Math.min(r, g, b), max = Math.max(r, g, b);
  return { dist: 255 - min, sat: max - min };
};

let n = 0;
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    n++;
    // Inset a few px so the white gutters between cells are excluded.
    const left = col * cw + 4, top = row * ch + 4;
    const w = cw - 8, h = ch - 8;
    const { data, info } = await sharp(src)
      .extract({ left, top, width: w, height: h })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const px = info.width * info.height;
    const bg = new Uint8Array(px); // 1 = background
    const stack = [];
    const isBgColor = (i) => {
      const o = i * 4;
      const { dist, sat } = whiteness(data[o], data[o + 1], data[o + 2]);
      return dist < 28 && sat < 22;
    };
    // Seed from every border pixel that looks white.
    for (let x = 0; x < info.width; x++) {
      stack.push(x, (info.height - 1) * info.width + x);
    }
    for (let y = 0; y < info.height; y++) {
      stack.push(y * info.width, y * info.width + info.width - 1);
    }
    while (stack.length) {
      const i = stack.pop();
      if (bg[i] || !isBgColor(i)) continue;
      bg[i] = 1;
      const x = i % info.width, y = (i / info.width) | 0;
      if (x > 0) stack.push(i - 1);
      if (x < info.width - 1) stack.push(i + 1);
      if (y > 0) stack.push(i - info.width);
      if (y < info.height - 1) stack.push(i + info.width);
    }

    // Alpha: background -> 0. Foreground pixels touching background get a
    // soft edge based on how close to white they are (anti-aliasing).
    for (let i = 0; i < px; i++) {
      const o = i * 4;
      if (bg[i]) { data[o + 3] = 0; continue; }
      const x = i % info.width, y = (i / info.width) | 0;
      let edge = false;
      for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= info.width || ny >= info.height) continue;
        if (bg[ny * info.width + nx]) { edge = true; break; }
      }
      if (edge) {
        const { dist } = whiteness(data[o], data[o + 1], data[o + 2]);
        data[o + 3] = Math.max(0, Math.min(255, Math.round((dist / 60) * 255)));
      }
    }

    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim({ threshold: 0 })
      .resize({ width: 360, withoutEnlargement: true })
      .png({ compressionLevel: 9 })
      .toFile(`${outDir}/person-${n}.png`);
    console.log(`person-${n}.png`);
  }
}
