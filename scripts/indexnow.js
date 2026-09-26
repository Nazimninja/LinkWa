import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function submitIndexNow() {
  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  const key = '8f7f1ad4b9714ebca808d4b3c95e1d90';
  const host = 'linkwa.in';

  let urlList = [
    'https://linkwa.in/',
    'https://linkwa.in/robots.txt',
    'https://linkwa.in/llms.txt',
    'https://linkwa.in/llms-full.txt',
    'https://linkwa.in/blog'
  ];

  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    const matches = sitemapContent.match(/<loc>(https:\/\/linkwa\.in[^<]+)<\/loc>/g);
    if (matches) {
      const extracted = matches.map(m => m.replace(/<\/?loc>/g, ''));
      urlList = Array.from(new Set([...urlList, ...extracted]));
    }
  }

  const payload = {
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urlList.slice(0, 1000)
  };

  console.log(`Submitting ${payload.urlList.length} URLs to IndexNow (Bing / AI search engines)...`);

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 200 || response.status === 202) {
      console.log(`IndexNow submission successful! Status: ${response.status}`);
    } else {
      console.error(`IndexNow submission responded with status: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('Failed to submit to IndexNow:', error.message);
  }
}

submitIndexNow();
