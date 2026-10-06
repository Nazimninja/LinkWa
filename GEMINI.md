# LinkWA - Master Project Memory & Guidelines

> **Permanent Project Memory & Guidelines**  
> Consolidated from all previous engineering, design, SEO, GEO, analytics, and architecture chat sessions for LinkWA.  
> Loaded automatically by Antigravity / Gemini for all future tasks in this workspace.

---

## 1. Project Overview & Architecture

- **Primary Product**: **LinkWA** (`https://linkwa.in`) — Free, client-side, privacy-first WhatsApp Click-to-Chat Link Generator and Custom QR Code Studio.
- **Parent Brand / Agency**: **Social Ninja's** (`https://socialninjas.in`) — Growth Systems, Automation, Content Studio.
- **Ecosystem Role**: LinkWA is a high-volume satellite inbound utility funnel designed to capture organic search and AI search traffic, driving awareness and qualified leads to Social Ninja's agency services.
- **Authoritative Domain**: `https://linkwa.in` (Hosted on Cloudflare Pages).
  - *Note*: `linkwa.app` was a historical alternate domain that suffered Cloudflare Error 522 timeouts; production is strictly `linkwa.in`.
- **Repository**: `https://github.com/Nazimninja/LinkWa` (main branch auto-deploys via Cloudflare Pages).
- **Core Technology Stack**:
  - **Framework**: Astro v4 (`astro.config.mjs`) configured for static generation with pre-rendering.
  - **Styles**: Custom vanilla CSS (`src/styles/global.css`) with obsidian/carbon dark aesthetic, electric emerald green accents, system font stack, and responsive breakpoints.
  - **Client-Side Generation**: Pure in-browser JavaScript (`index.astro`, `qrcode.min.js`, `jimp`) for 100% privacy with zero server logging of phone numbers.
  - **Serverless Backend**: Cloudflare Pages Functions (`functions/api/create.js`, `functions/[id].js`) with Cloudflare KV storage for custom short-links (`linkwa.in/<custom_slug>`).
  - **SEO & Feeds**: RSS 2.0 Feed (`src/pages/rss.xml.js`), automated sitemaps, IndexNow integration (`scripts/indexnow.js`).

---

## 2. Core Features & Functional Modules

### A. Instant WhatsApp Link Generator
- Generates standard `https://wa.me/<country_code><phone>?text=<encoded_message>`.
- Client-side phone sanitization (strips spaces, dashes, parentheses).
- Multi-currency / international country dialing codes support.

### B. HD QR Code Studio (1000px Resolution)
- **High Resolution**: 1000x1000px canvas export for ultra-sharp physical printing (flyers, menus, stands).
- **Custom Logo Upload**:
  - Allows restaurants, clinics, and businesses to upload custom center logos.
  - **Automatic Background Removal**: Canvas edge pixel inspection with color thresholding to strip solid backgrounds automatically.
  - **Smart Bounding-Box Auto-Trimming**: Auto-crops transparent borders for maximum logo size.
  - White protective safe-margin boundary around center logo to preserve QR scanner read rate.
- **Brand Watermark**: "Created on linkwa.in" locked directly to the bottom border of exported QR images for backlink viral loop and attribution.
- **Color Customization**: Dynamic foreground color pickers and dark/light mode contrasts.

### C. WhatsApp Group & Community Invite QR Generator
- Dedicated generator for WhatsApp Group Invites (`chat.whatsapp.com/*`) and Community links.
- Perfect for gym memberships, student clubs, local cafes, and coworking space standees.
- Decluttered tabbed studio card layout with dynamic header switching.

### D. UTM Campaign Builder
- Appends `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` for Google Analytics and Meta Ads tracking.

### E. Multi-Number Rotator
- Distributes customer inquiries across multiple team members / sales agents.
- Responsive mobile & desktop cards with dynamic add/remove rows and accessible ARIA attributes.

---

## 3. SEO, GEO & AI Search Visibility

### A. Generative Engine Optimization (GEO)
- **ChatGPT Traffic**: ChatGPT is LinkWA's #1 external traffic acquisition source.
- **AI Crawler Directives (`robots.txt`)**: Allows `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Applebot`, `Google-Extended`.
- **LLM Manifests**:
  - `public/llms.txt` — Concise machine-readable summary of LinkWA capabilities.
  - `public/llms-full.txt` — Comprehensive documentation and API explanation for AI agents.
- **Agentic Resource Discovery (ARD)**:
  - `public/.well-known/ard.json` and `public/.well-known/ai-catalog.json` for AI-native agent navigation.

### B. Structured Data & Anti-Phishing Trust Signals
- Validated `SoftwareApplication` and `FAQPage` JSON-LD schemas.
- Explicit trust signals: Highlights 100% browser-side generation, no phone number harvesting, and zero phishing risk (countering untrusted competitor tools).
- Verified Google Search Console ownership for `https://linkwa.in`.
- Bing / Yandex instant submission via `scripts/indexnow.js`.

### C. Content & Google Publisher Network
- Google Publisher Center approved publication with author bylines: `"Nazim · Social Ninja's"`.
- Google Reader Revenue Manager integration enabled.
- 28+ deeply researched educational blog articles on WhatsApp marketing, group QR standees, Meta pricing updates, multi-number distribution, and business chatbots.

---

## 4. Branding & Funnel Rules (Agency Linkage)

1. **Top Header Banner**:
   - Persistent banner at the top of LinkWA linking directly to `https://socialninjas.in` ("Powered by Social Ninja's — Growth Systems & Lead Automation").
2. **Post-Generation Agency Callout Card**:
   - Immediately below generated WhatsApp links/QRs, a high-converting callout card invites users to automate their WhatsApp sales funnel via Social Ninja's.
3. **Featured on TinyShelf Badge**:
   - Official badge rendered in footer: `<a href="https://www.tinyshelf.co/?ref=linkwa.in" title="Featured on TinyShelf">...</a>`.
4. **Trustpilot Domain Verification**:
   - Meta tag installed in `<head>` for active Trustpilot verification.

---

## 5. Performance & Accessibility Standards (Lighthouse 13.5+)

- **Zero-TBT Script Loader**:
  - Google AdSense (`adsbygoogle.js`) and Google Tag Manager are deferred via `requestIdleCallback` / window load to prevent blocking main thread execution.
- **Image & Asset Optimization**:
  - Explicit width/height attributes and `loading="lazy"` on all non-hero media.
- **Accessibility (A11y)**:
  - Every dynamic input pair (`mphone`, `mlabel`) must have explicit `aria-label` or `for` associations.
  - Color picker swatch buttons must include descriptive `aria-label` attributes (e.g. `aria-label="Color #000000"`).
- **Layout Consistency**:
  - Clean unified layout with tabbed controls — avoid duplicate comparison tables or disconnected dual cards.

---

## 6. Analytics & Event Tracking (GA4)

- **GA4 Property**: `LinkWa` (`a389486896p542415933`).
- **Core Custom Events Tracked**:
  - `generate_link`: Triggered on link creation.
  - `copy_link`: Triggered when user copies the generated URL.
  - `download_qr`: Triggered on QR code PNG export.
  - `tab_switch`: Track user navigation between Direct Link, Multi-Number, UTM, and Group QR tabs.
  - `newsletter_signup`: Tracks email subscription capture (converts at ~17.4%).

---

## 7. Development & Maintenance Commands

```bash
# Local development
npm run dev

# Production build test (always run before git push)
npm run build

# Preview build locally
npm run preview

# Submit updated URLs to IndexNow (Bing/Yandex)
npm run indexnow
```
