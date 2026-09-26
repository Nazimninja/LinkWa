export async function onRequestPost(context) {
  try {
    if (!context.env.LINKWA_KV) {
      return new Response(JSON.stringify({ error: 'Database service is currently unavailable.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { slug, url } = await context.request.json();

    // Clean and validate the custom slug
    const cleanSlug = slug ? slug.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '') : '';
    if (!cleanSlug || cleanSlug.length < 3 || cleanSlug.length > 40) {
      return new Response(JSON.stringify({ error: 'Slug must be between 3 and 40 alphanumeric characters, dashes, or underscores.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Protect system reserved routes from being claimed as short link slugs
    const reservedRoutes = new Set([
      'about', 'contact', 'blog', 'privacy', 'terms', 'api', 
      'robots', 'sitemap', 'favicon', 'cdn-cgi', 'admin', 
      'assets', 'dist', 'whatsapp-link'
    ]);
    if (reservedRoutes.has(cleanSlug)) {
      return new Response(JSON.stringify({ error: 'This name is reserved for website system pages. Please choose a different custom name.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate the target WhatsApp URL (supports 1-to-1 wa.me links, group invite links, and channels)
    const isValidWaUrl = url && (
      url.startsWith('https://wa.me/') ||
      url.startsWith('https://chat.whatsapp.com/') ||
      url.startsWith('https://whatsapp.com/channel/')
    );
    if (!isValidWaUrl) {
      return new Response(JSON.stringify({ error: 'Invalid destination WhatsApp URL. Must be a wa.me, group invite, or channel link.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if slug already exists to report editability / update status
    const existing = await context.env.LINKWA_KV.get(cleanSlug);

    // Save or update the mapping in Cloudflare KV (unlimited editability)
    await context.env.LINKWA_KV.put(cleanSlug, url);

    const origin = new URL(context.request.url).origin;
    return new Response(JSON.stringify({ 
      success: true, 
      shortUrl: `${origin}/${cleanSlug}`,
      updated: Boolean(existing)
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message || 'An unexpected server error occurred.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
