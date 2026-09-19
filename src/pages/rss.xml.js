import { posts, authorInfo } from '../data/blogPosts';

export async function GET() {
  const siteUrl = 'https://linkwa.in';

  const itemsXml = posts
    .map((post) => {
      const postUrl = `${siteUrl}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>hello@socialninjas.in (${authorInfo.name})</author>
      <category><![CDATA[${post.tag}]]></category>
    </item>`;
    })
    .join('\n');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>LinkWA Blog – WhatsApp Marketing, Tools &amp; Automation Guides</title>
    <link>${siteUrl}/blog</link>
    <description>Guides, tutorials, and best practices for WhatsApp click-to-chat links, QR codes, marketing, and business automation by Social Ninja's.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <managingEditor>hello@socialninjas.in (${authorInfo.name})</managingEditor>
    <webMaster>hello@socialninjas.in (${authorInfo.name})</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Social Ninja's. All rights reserved.</copyright>
${itemsXml}
  </channel>
</rss>`;

  return new Response(rssFeed.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
}
