import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { glob } from 'glob';

// --- НАСТРОЙКИ ---
const SOURCE_DIR = './src/assets/images/base';
const OUTPUT_AVIF = './src/assets/images/projects/avif';
const OUTPUT_WEBP = './src/assets/images/projects/webp';
const OUTPUT_JPG = './src/assets/images/projects/jpg'; // сжатые JPG (из PNG и JPG)

// Качество для форматов (оставляем как есть)
const AVIF_QUALITY = 60;
const AVIF_EFFORT = 5;
const WEBP_QUALITY = 80;
const WEBP_EFFORT = 4;
const JPG_QUALITY = 80; // для выходных JPG

// Ширины, которые будем генерировать (можно добавить/убрать под свои нужды)
const WIDTHS = [800, 1200];
// -----------------

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function convertFile(inputPath) {
  const relative = path.relative(SOURCE_DIR, inputPath);
  const parsed = path.parse(relative);
  const baseName = parsed.name;
  const ext = parsed.ext.toLowerCase();

  // Создаём папки для каждого формата (если ещё нет)
  const avifBaseDir = path.join(OUTPUT_AVIF, parsed.dir);
  const webpBaseDir = path.join(OUTPUT_WEBP, parsed.dir);
  const jpgBaseDir = path.join(OUTPUT_JPG, parsed.dir);
  await ensureDir(avifBaseDir);
  await ensureDir(webpBaseDir);
  await ensureDir(jpgBaseDir);

  // Для каждой ширины создаём три формата
  for (const width of WIDTHS) {
    // Суффикс для имени файла: "название-480.avif"
    const suffix = `-${width}`;

    // --- AVIF ---
    await sharp(inputPath)
      .resize({ width, withoutEnlargement: true }) // без увеличения, если исходник меньше
      .avif({ quality: AVIF_QUALITY, effort: AVIF_EFFORT, chromaSubsampling: '4:4:4' })
      .toFile(path.join(avifBaseDir, `${baseName}${suffix}.avif`));

    // --- WebP ---
    await sharp(inputPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: WEBP_EFFORT })
      .toFile(path.join(webpBaseDir, `${baseName}${suffix}.webp`));

    // --- JPG (сжатый) ---
    let pipeline = sharp(inputPath).resize({ width, withoutEnlargement: true });
    if (ext === '.png') {
      pipeline = pipeline.flatten({ background: { r: 255, g: 255, b: 255 } });
    }
    await pipeline
      .jpeg({ quality: JPG_QUALITY, mozjpeg: true })
      .toFile(path.join(jpgBaseDir, `${baseName}${suffix}.jpg`));
  }

  console.log(`✅ ${relative} (создано ${WIDTHS.length} вариантов)`);
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