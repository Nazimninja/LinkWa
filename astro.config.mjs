import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://linkwa.in',
  output: 'static',
  compressHTML: true,
  build: {
    assets: 'assets'
  }
});
