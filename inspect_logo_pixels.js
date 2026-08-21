const Jimp = require('jimp');

Jimp.read('D:/Social Ninja\'s/projects/socialninjas-fit/assets/logo.png')
  .then(image => {
    const colors = {};
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      const a = this.bitmap.data[idx + 3];
      
      if (a > 50) { // check non-transparent
        // Convert to hex
        const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0').toLowerCase();
        // Ignore white, black and greys
        if (Math.abs(r - g) > 20 || Math.abs(r - b) > 20) {
          colors[hex] = (colors[hex] || 0) + 1;
        }
      }
    });
    
    // Sort colors by frequency
    const sorted = Object.entries(colors).sort((a, b) => b[1] - a[1]);
    console.log('Dominant non-grey colors in logo.png:');
    sorted.slice(0, 10).forEach(([hex, count]) => {
      console.log(` - #${hex}: frequency ${count}`);
    });
  })
  .catch(err => {
    console.error('Error reading image:', err);
  });
