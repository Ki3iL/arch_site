import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { glob } from 'glob';

// --- НАСТРОЙКИ ---
const SOURCE_DIR = './src/assets/images/projects';
const OUTPUT_AVIF = './src/assets/images/projects/avif';
const OUTPUT_WEBP = './src/assets/images/projects/webp';
const OUTPUT_JPG = './src/assets/images/projects/jpg'; // сжатые JPG (из PNG и JPG)

const AVIF_QUALITY = 70;
const AVIF_EFFORT = 5;
const WEBP_QUALITY = 80;
const WEBP_EFFORT = 4;
const JPG_QUALITY = 80; // для выходных JPG
// -----------------

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function convertFile(inputPath) {
  const relative = path.relative(SOURCE_DIR, inputPath);
  const parsed = path.parse(relative);
  const baseName = parsed.name;
  const ext = parsed.ext.toLowerCase();

  // --- 1. AVIF (для всех) ---
  const avifDir = path.join(OUTPUT_AVIF, parsed.dir);
  await ensureDir(avifDir);
  await sharp(inputPath)
    .avif({ quality: AVIF_QUALITY, effort: AVIF_EFFORT, chromaSubsampling: '4:4:4' })
    .toFile(path.join(avifDir, `${baseName}.avif`));

  // --- 2. WebP (для всех) ---
  const webpDir = path.join(OUTPUT_WEBP, parsed.dir);
  await ensureDir(webpDir);
  await sharp(inputPath)
    .webp({ quality: WEBP_QUALITY, effort: WEBP_EFFORT })
    .toFile(path.join(webpDir, `${baseName}.webp`));

  // --- 3. Сжатый JPG (для всех: PNG конвертируем, JPG пережимаем) ---
  const jpgDir = path.join(OUTPUT_JPG, parsed.dir);
  await ensureDir(jpgDir);

  let pipeline = sharp(inputPath);

  // Если исходный файл PNG, нужно убрать прозрачность (залить белым фоном)
  if (ext === '.png') {
    pipeline = pipeline.flatten({ background: { r: 255, g: 255, b: 255 } });
  }

  await pipeline
    .jpeg({ quality: JPG_QUALITY, mozjpeg: true })
    .toFile(path.join(jpgDir, `${baseName}.jpg`));

  console.log(`✅ ${relative}`);
}

// Поиск всех PNG и JPG/JPEG
const imagePaths = await glob(`${SOURCE_DIR}/**/*.{png,jpg,jpeg}`, {
  ignore: ['**/node_modules/**']
});

console.log(`🔍 Найдено изображений: ${imagePaths.length}\n`);

for (const img of imagePaths) {
  await convertFile(img);
}
console.log('\n🎉 Готово!');