const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const dir = 'D:/Social Ninja\'s/projects/socialninjas-fit';
const files = fs.readdirSync(dir);

async function scanFile(file) {
  try {
    const image = await Jimp.read(path.join(dir, file));
    const colors = {};
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (width * y + x) * 4;
        const r = image.bitmap.data[idx];
        const g = image.bitmap.data[idx + 1];
        const b = image.bitmap.data[idx + 2];
        const a = image.bitmap.data[idx + 3];
        
        if (a > 100) {
          if (Math.abs(r - g) > 20 || Math.abs(r - b) > 20 || Math.abs(g - b) > 20) {
            const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0').toLowerCase();
            colors[hex] = (colors[hex] || 0) + 1;
          }
        }
      }
    }
    
    const sorted = Object.entries(colors).sort((a, b) => b[1] - a[1]);
    console.log(`\nDominant non-grey colors in ${file}:`);
    sorted.slice(0, 5).forEach(([hex, count]) => {
      console.log(` - #${hex}: frequency ${count}`);
    });
  } catch (err) {
    console.error(`Error reading ${file}:`, err.message);
  }
}

async function run() {
  for (const file of files) {
    if (file.toLowerCase().includes('logo') && file.endsWith('.png')) {
      await scanFile(file);
    }
  }
}

run();
