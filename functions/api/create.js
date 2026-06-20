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
    const cleanSlug = slug.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '');
    if (!cleanSlug || cleanSlug.length < 3 || cleanSlug.length > 30) {
      return new Response(JSON.stringify({ error: 'Slug must be between 3 and 30 alphanumeric characters, dashes, or underscores.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate the target WhatsApp URL
    if (!url || !url.startsWith('https://wa.me/')) {
      return new Response(JSON.stringify({ error: 'Invalid destination URL.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Check if the custom slug already exists in KV
    const existing = await context.env.LINKWA_KV.get(cleanSlug);
    if (existing) {
      return new Response(JSON.stringify({ error: 'This custom link name is already taken.' }), {
        status: 409,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Save the mapping to Cloudflare KV
    await context.env.LINKWA_KV.put(cleanSlug, url);

    const origin = new URL(context.request.url).origin;
    return new Response(JSON.stringify({ success: true, shortUrl: `${origin}/${cleanSlug}` }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message || 'An unexpected server error occurred.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
