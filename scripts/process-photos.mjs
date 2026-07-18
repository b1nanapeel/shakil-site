import { readdir, readFile, writeFile } from "fs/promises";
import { join, extname } from "path";
import exifr from "exifr";
import sharp from "sharp";

const SRC_DIR = "/Users/reb1nanapee1/Desktop/globe-photos";
const OUT_DIR = join(import.meta.dirname, "../public/travel");
const DATA_FILE = join(import.meta.dirname, "../src/data/travel.ts");

const MAX_DIM = 1600;
const QUALITY = 80;
const MAX_SIZE = 400 * 1024;

function toKebab(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function main() {
  const files = (await readdir(SRC_DIR)).filter((f) =>
    /\.(jpe?g|png|heic|webp)$/i.test(f)
  );
  files.sort();

  console.log(`Found ${files.length} photos\n`);

  const entries = [];
  const noGps = [];

  for (const file of files) {
    const filePath = join(SRC_DIR, file);
    const buf = await readFile(filePath);

    let gps = null;
    let dateTaken = null;
    try {
      const exif = await exifr.parse(buf, true);
      if (exif && exif.latitude != null && exif.longitude != null) {
        gps = { lat: Math.round(exif.latitude * 10000) / 10000, lng: Math.round(exif.longitude * 10000) / 10000 };
      }
      if (exif && (exif.DateTimeOriginal || exif.CreateDate)) {
        const d = exif.DateTimeOriginal || exif.CreateDate;
        dateTaken = d instanceof Date ? d.toISOString().split("T")[0] : String(d);
      }
    } catch (e) {
      // no exif
    }

    if (!gps) {
      noGps.push(file);
      console.log(`SKIP (no GPS): ${file}`);
      continue;
    }

    // Generate a clean name from the original filename
    const baseName = toKebab(file.replace(extname(file), ""));
    const outName = `${baseName}.webp`;
    const outPath = join(OUT_DIR, outName);

    // Resize, convert to webp, strip metadata
    let q = QUALITY;
    let outBuf = await sharp(buf)
      .rotate() // auto-rotate based on EXIF orientation
      .resize({ width: MAX_DIM, height: MAX_DIM, fit: "inside", withoutEnlargement: true })
      .webp({ quality: q })
      .toBuffer();

    // If too large, reduce quality
    while (outBuf.length > MAX_SIZE && q > 40) {
      q -= 10;
      outBuf = await sharp(buf)
        .rotate()
        .resize({ width: MAX_DIM, height: MAX_DIM, fit: "inside", withoutEnlargement: true })
        .webp({ quality: q })
        .toBuffer();
    }

    // Write with no metadata (sharp strips by default when not using keepMetadata)
    await writeFile(outPath, outBuf);

    const sizeMB = (outBuf.length / 1024).toFixed(0);
    console.log(`OK: ${file} -> ${outName} (${sizeMB}KB, q=${q}) @ ${gps.lat}, ${gps.lng} ${dateTaken || ""}`);

    entries.push({
      file: file,
      outName,
      lat: gps.lat,
      lng: gps.lng,
      date: dateTaken,
    });
  }

  console.log(`\nProcessed: ${entries.length}, Skipped (no GPS): ${noGps.length}`);
  if (noGps.length > 0) {
    console.log("Files with no GPS data:");
    noGps.forEach((f) => console.log(`  - ${f}`));
  }

  // Output entries as JSON for review
  console.log("\n--- ENTRIES JSON ---");
  console.log(JSON.stringify(entries, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
