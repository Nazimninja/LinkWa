const { Jimp } = require('jimp');

Jimp.read('D:/Social Ninja\'s/projects/socialninjas-fit/assets/logo.png')
  .then(image => {
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
        
        if (a > 100) { // solid pixel
          // Skip grey/black/white
          if (Math.abs(r - g) > 15 || Math.abs(r - b) > 15 || Math.abs(g - b) > 15) {
            const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0').toLowerCase();
            colors[hex] = (colors[hex] || 0) + 1;
          }
        }
      }
    }
    
    const sorted = Object.entries(colors).sort((a, b) => b[1] - a[1]);
    console.log('Dominant non-grey colors in logo.png:');
    sorted.slice(0, 10).forEach(([hex, count]) => {
      console.log(` - #${hex}: frequency ${count}`);
    });
  })
  .catch(err => {
    console.error('Error reading image:', err);
  });
