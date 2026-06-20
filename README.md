# LinkWA — Astro Project

WhatsApp Link Generator built with Astro for maximum SEO performance.

---

## Project Structure

```
linkwa-astro/
├── src/
│   ├── layouts/
│   │   └── Base.astro          ← Main layout (nav, footer, SEO tags)
│   ├── pages/
│   │   ├── index.astro         ← Homepage (main tool)
│   │   ├── about.astro
│   │   ├── privacy.astro
│   │   ├── sitemap.xml.astro   ← Auto-generated sitemap
│   │   ├── robots.txt.astro
│   │   └── blog/
│   │       ├── index.astro     ← Blog listing page
│   │       ├── how-to-create-whatsapp-link.astro
│   │       ├── whatsapp-link-instagram-bio.astro
│   │       ├── whatsapp-qr-code-guide.astro
│   │       ├── utm-tracking-whatsapp.astro
│   │       └── wa-me-link-explained.astro
│   └── styles/
│       └── global.css          ← All styles (premium system fonts)
├── public/
│   └── favicon.svg
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → Opens at http://localhost:4321

# Build for production
npm run build
# → Output goes to /dist folder

# Preview production build
npm run preview
```

---

## Deploy to GitHub Pages (Free Hosting)

### Step 1: Create GitHub repo
1. Go to github.com → New repository
2. Name it: `linkwa` (or your username.github.io)
3. Set to Public

### Step 2: Push code
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/linkwa.git
git push -u origin main
```

### Step 3: Add GitHub Actions workflow
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Step 4: Enable GitHub Pages
- Go to repo Settings → Pages
- Source: Deploy from a branch → gh-pages branch
- Save

### Step 5: Add custom domain
- In Settings → Pages → Custom domain: type `linkwa.in`
- In your domain registrar DNS, add:
  ```
  A     @     185.199.108.153
  A     @     185.199.109.153
  A     @     185.199.110.153
  A     @     185.199.111.153
  CNAME www   YOUR_USERNAME.github.io
  ```

---

## Deploy to Netlify (Alternative — Even Easier)

1. Go to netlify.com → Add new site → Import from Git
2. Connect GitHub → select the repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click Deploy
6. Add custom domain in Site settings → Domain management

---

## After Deploying — SEO Checklist

- [ ] Submit sitemap: https://search.google.com/search-console
  - Add property → URL prefix → https://linkwa.in
  - Sitemaps → Add sitemap → https://linkwa.in/sitemap.xml
- [ ] Request indexing: URL Inspection → Request Indexing
- [ ] Add Google Analytics 4:
  - Create GA4 property → get Measurement ID (G-XXXXXXXX)
  - Add to Base.astro `<head>` section
- [ ] Apply for AdSense after 20 days live

---

## Adding Google Analytics to Base.astro

In `src/layouts/Base.astro`, add inside `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID.

---

## Adding AdSense to Base.astro

After AdSense approval, add inside `<head>`:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossorigin="anonymous"></script>
```

Replace `ca-pub-XXXXXXXXXX` with your Publisher ID.

---

## Why Astro for SEO

- Outputs 100% static HTML — no JavaScript required to render content
- Google indexes the page instantly without waiting for JS execution
- Perfect Lighthouse score out of the box
- Automatic code splitting — only loads JS needed for that page
- Built-in sitemap support
- Zero runtime overhead

---

## Competitive Strategy: Beating `create.wa.link` (Walink)

To achieve #1 rankings on Google and capture maximum organic traffic, **LinkWA (`linkwa.in`)** targets the major friction points of the leading competitor, `create.wa.link`.

### Competitor Audit: `create.wa.link`
*   **Positives**:
    *   Fast, no-login link generation.
    *   Live chat preview.
    *   Multilingual subdomains (ES/PT) capturing high-volume Latin American traffic.
*   **Negatives & Paywalls (Our Opportunities)**:
    *   **Paid custom links ($6/year)**: Charging for custom readable links like `wa.link/MyBrand`.
    *   **No editability on free links**: Free links cannot be updated if the phone number or message changes.
    *   **Generic QR codes**: Free QR codes are basic black-and-white. Logo branding and frames are paid.
    *   **Paid click analytics**: Access to daily traffic reports requires a paid plan.
    *   **Paid multi-agent routing**: Distributing clicks among multiple numbers is locked.
    *   **Heavy Ad Clutter**: Aggressive banner ads that degrade the user experience of the generator.

### How `linkwa.in` Beats Them (100% Free Strategy)
We offer their premium features **completely free**, monetized with clean, non-intrusive Google AdSense placements:
1.  **Free Custom Short Links (`linkwa.in/yourname`)**: Built using Cloudflare KV + Pages Functions, giving businesses branded redirect links for $0 (creating a massive backlink network for our SEO).
2.  **Free Multi-Number Routing**: Support for multiple sales/support numbers under one generation dashboard.
3.  **Free UTM Tracking**: Advanced campaign parameter building for digital marketers.
4.  **Free QR Code Customization**: Multi-template custom-colored QR codes with center branding ready to print.
5.  **Premium UX**: Zero ad-clutter around the main tool card, with clean, modern HSL transitions and focus rings.
