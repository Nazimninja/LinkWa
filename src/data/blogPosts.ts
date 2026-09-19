export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  date: string;
  author?: string;
}

export const authorInfo = {
  name: "Nazim · Social Ninja's",
  title: "Tech & Marketing Specialist",
  url: "https://linkwa.in/about"
};

export const posts: BlogPost[] = [
  {
    slug: 'whatsapp-channel-link-growth-guide',
    title: 'How to Create, Share & Promote a WhatsApp Channel Link (2026 Growth Guide)',
    excerpt: 'Step-by-step guide to finding, copying, and sharing your WhatsApp Channel link. Learn how to create QR codes, promote on Instagram/TikTok, and grow your subscriber base.',
    tag: 'Channels',
    readTime: '6 min read',
    date: 'Sep 15, 2026',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-link-tiktok-bio',
    title: 'How to Add a WhatsApp Link to Your TikTok Bio (2026 Step-by-Step)',
    excerpt: 'Learn how to add a clickable WhatsApp link to your TikTok bio to turn viewers into paying customers. Complete tutorial for TikTok Business and Personal accounts.',
    tag: 'TikTok',
    readTime: '6 min read',
    date: 'Sep 15, 2026',
    author: authorInfo.name
  },
  {
    slug: 'how-to-share-whatsapp-catalog-link',
    title: 'How to Share WhatsApp Catalog & Product Links to Boost Sales',
    excerpt: 'Complete guide on sharing entire WhatsApp Business catalogs and individual product links. Learn how to link products on social media, websites, and QR codes.',
    tag: 'E-Commerce',
    readTime: '6 min read',
    date: 'Sep 15, 2026',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-ai-chatbot-automation-guide',
    title: 'How to Automate WhatsApp for Small Business: AI Chatbots & Workflows (2026)',
    excerpt: 'Discover how small businesses can automate WhatsApp using AI chatbots, auto-responders, and CRM integrations in 2026 to capture leads and close sales 24/7.',
    tag: 'Automation',
    readTime: '7 min read',
    date: 'Sep 15, 2026',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-link-not-working-troubleshooting',
    title: 'WhatsApp Link Not Working? 7 Common Errors & How to Fix Them',
    excerpt: 'Is your WhatsApp link broken or showing "Phone number shared via url is invalid"? Here are the 7 most common WhatsApp link errors and how to fix them in seconds.',
    tag: 'Troubleshooting',
    readTime: '6 min read',
    date: 'Sep 15, 2026',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-business-auto-reply-message-samples',
    title: '35+ Best WhatsApp Business Auto Reply Message Samples (Copy & Paste)',
    excerpt: 'Ready-to-use WhatsApp Business auto reply message samples for customer support, lead generation, away messages, and sales. Copy and customize instantly.',
    tag: 'Guide',
    readTime: '7 min read',
    date: 'Aug 21, 2026',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-business-auto-reply-setup',
    title: 'How to Set Up WhatsApp Business Auto-Replies (25+ Ready Message Samples)',
    excerpt: 'Complete tutorial to set up automated greeting messages, away messages, and quick replies on WhatsApp Business to respond to leads 24/7.',
    tag: 'Guide',
    readTime: '8 min read',
    date: 'Aug 21, 2026',
    author: authorInfo.name
  },
  {
    slug: 'track-whatsapp-clicks-facebook-pixel',
    title: 'How to Track WhatsApp Link Clicks with Facebook Pixel',
    excerpt: 'Optimize your Facebook and Meta ads conversion. Learn how to track WhatsApp link clicks as custom conversions using Meta Pixel (Facebook Pixel).',
    tag: 'Marketing & Tech',
    readTime: '6 min read',
    date: 'Jul 18, 2026',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-qr-codes-real-estate-listings',
    title: 'WhatsApp QR Codes for Real Estate Listings and Agents',
    excerpt: 'Boost real estate lead generation. Learn how realtors and property agents use custom WhatsApp QR codes on yard signs, banners, and brochures.',
    tag: 'Real Estate',
    readTime: '4 min read',
    date: 'Jul 18, 2026',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-link-local-seo-google-maps',
    title: 'Using WhatsApp Links for Local SEO and Google Maps',
    excerpt: 'Optimize your local business presence on Google Maps and Google Business Profile by integrating direct WhatsApp click-to-chat links. Drive local leads instantly.',
    tag: 'SEO & Local',
    readTime: '5 min read',
    date: 'Jul 18, 2026',
    author: authorInfo.name
  },
  {
    slug: 'how-to-create-whatsapp-link',
    title: 'How to Create a WhatsApp Link for Your Business (2025 Guide)',
    excerpt: 'Learn how to create a WhatsApp click-to-chat link in under 60 seconds. Step-by-step guide with examples for Instagram bio, website, and ads.',
    tag: 'Guide',
    readTime: '5 min read',
    date: 'Jun 15, 2025',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-link-instagram-bio',
    title: 'How to Add a WhatsApp Link to Your Instagram Bio',
    excerpt: 'Add a WhatsApp link to your Instagram bio and start getting enquiries directly on WhatsApp. Works for personal and business accounts.',
    tag: 'Instagram',
    readTime: '4 min read',
    date: 'Jun 12, 2025',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-qr-code-guide',
    title: 'WhatsApp QR Code: How to Create and Use It for Business',
    excerpt: 'Create a WhatsApp QR code for free and add it to your visiting cards, menus, posters, and store displays. Complete guide with download steps.',
    tag: 'QR Code',
    readTime: '4 min read',
    date: 'Jun 10, 2025',
    author: authorInfo.name
  },
  {
    slug: 'utm-tracking-whatsapp',
    title: 'UTM Tracking for WhatsApp: Know Which Ad Sends You Leads',
    excerpt: 'Add UTM parameters to your WhatsApp links to track which Instagram ad, Facebook post, or campaign is actually generating your enquiries.',
    tag: 'Marketing',
    readTime: '6 min read',
    date: 'Jun 8, 2025',
    author: authorInfo.name
  },
  {
    slug: 'wa-me-link-explained',
    title: 'What is a wa.me Link? The Complete Guide for 2025',
    excerpt: 'Everything you need to know about wa.me links — what they are, how they work, the correct format, and how to use them for your business.',
    tag: 'Guide',
    readTime: '5 min read',
    date: 'Jun 5, 2025',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-link-generator-excel',
    title: 'How to Generate WhatsApp Links in Bulk with Excel',
    excerpt: 'Learn how to use Excel or Google Sheets to generate WhatsApp links in bulk. Step-by-step tutorial with Excel formulas.',
    tag: 'Guide',
    readTime: '5 min read',
    date: 'Jun 25, 2026',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-link-website-widget',
    title: 'How to Add a WhatsApp Chat Widget to Your Website',
    excerpt: 'A floating WhatsApp chat button makes it easy for visitors to contact you. Complete guide to adding custom widgets.',
    tag: 'Guide',
    readTime: '5 min read',
    date: 'Jun 24, 2026',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-qr-code-restaurant-menu',
    title: 'WhatsApp QR Codes for Restaurant Menus: Complete Guide',
    excerpt: 'Ditch paper menus. A simple WhatsApp QR code at tables lets diners view your menu and place orders directly in chat.',
    tag: 'QR Code',
    readTime: '4 min read',
    date: 'Jun 23, 2026',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-broadcast-campaign-best-practices',
    title: 'WhatsApp Broadcast Campaigns: Best Practices to Avoid Ban',
    excerpt: 'Broadcast campaigns are powerful, but sending bulk messages incorrectly can lead to your account being banned. Read the guidelines.',
    tag: 'Marketing',
    readTime: '6 min read',
    date: 'Jun 21, 2026',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-marketing-compliance-gdpr',
    title: 'WhatsApp Marketing Compliance: Guide to GDPR & Local Laws',
    excerpt: 'Using WhatsApp for commercial outreach requires navigating strict privacy laws. Ensure compliance with GDPR and TCPA guidelines.',
    tag: 'Marketing',
    readTime: '5 min read',
    date: 'Jun 20, 2026',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-api-vs-whatsapp-business-app',
    title: 'WhatsApp Business App vs. WhatsApp Business API',
    excerpt: 'Choosing the wrong WhatsApp product can limit scaling. Here is a detailed comparison of features, pricing, and limits.',
    tag: 'Guide',
    readTime: '5 min read',
    date: 'Jun 19, 2026',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-link-linkedin-profile',
    title: 'How to Add a WhatsApp Link to Your LinkedIn Profile',
    excerpt: 'Turn your professional profile into a direct client acquisition channel. Learn where and how to place click-to-chat links.',
    tag: 'Guide',
    readTime: '4 min read',
    date: 'Jun 18, 2026',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-qr-code-product-packaging',
    title: 'WhatsApp QR Codes on Product Packaging: Setup Guide',
    excerpt: 'Add WhatsApp QR codes to physical boxes to register warranties, offer instant customer support, and collect reviews.',
    tag: 'QR Code',
    readTime: '5 min read',
    date: 'Jun 17, 2026',
    author: authorInfo.name
  },
  {
    slug: 'whatsapp-link-facebook-ads-lead-generation',
    title: 'How to Use WhatsApp Links in Facebook Ads for Leads',
    excerpt: 'Click-to-WhatsApp ads are transforming lead generation. Learn to construct and target ads that route leads directly to chat.',
    tag: 'Marketing',
    readTime: '5 min read',
    date: 'Jun 16, 2026',
    author: authorInfo.name
  }
];
