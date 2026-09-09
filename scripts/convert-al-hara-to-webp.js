/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

(async () => {
  const dir = path.join(__dirname, '..', 'public', 'images', 'Projects_Imgs', 'Al-Hara-Cafeteria-Dubai');
  if (!fs.existsSync(dir)) {
    console.error('Directory does not exist:', dir);
    process.exit(1);
  }

  const files = fs.readdirSync(dir).filter(f => f.match(/\.(png|jpe?g|webp)$/i));
  if (files.length === 0) {
    console.error('No image files found in', dir);
    process.exit(1);
  }

  const mainName = 'Screenshot 2026-08-13 200144.png';
  const ordered = [];
  if (files.includes(mainName)) ordered.push(mainName);
  files.forEach(f => { if (f !== mainName) ordered.push(f); });

  console.log('Converting files in order:', ordered);

  for (let i = 0; i < ordered.length; i++) {
    const src = path.join(dir, ordered[i]);
    const dest = path.join(dir, `${i+1}.webp`);
    try {
      await sharp(src).webp({ quality: 82 }).toFile(dest);
      console.log('Written', dest);
      // Remove original only after successful conversion
      fs.unlinkSync(src);
      console.log('Removed original', src);
    } catch (err) {
      console.error('Error converting', src, err);
      process.exitCode = 1;
    }
  }
  console.log('Conversion complete');
})();