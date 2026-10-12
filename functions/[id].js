export async function onRequest(context) {
  const { id } = context.params;
  
  // Clean and sanitize ID to prevent malicious lookups
  const cleanId = (id || '').trim().toLowerCase().replace(/[^a-z0-9-_]/g, '');
  
  if (!cleanId) {
    return context.next();
  }

  // Bypass dynamic KV redirection for static files (containing a dot) and standard Astro pages
  const staticRoutes = new Set([
    'about',
    'contact',
    'blog',
    'privacy',
    'terms',
    'robots',
    'sitemap',
    'rss',
    'api',
    'es',
    'pt',
    'whatsapp-auto-reply',
    'whatsapp-link'
  ]);

  if (
    id.includes('.') || 
    cleanId.startsWith('yandex') || 
    cleanId.startsWith('google') ||
    cleanId.startsWith('whatsapp-') ||
    cleanId.startsWith('feed') ||
    staticRoutes.has(cleanId)
  ) {
    return context.next();
  }

  // If KV is available, check for a branded short-link slug
  if (context.env && context.env.LINKWA_KV) {
    try {
      const destination = await context.env.LINKWA_KV.get(cleanId);
      if (destination) {
        return Response.redirect(destination, 302);
      }
    } catch (err) {
      console.error("KV Lookup Error:", err);
    }
  }

  // If not a short-link slug, check if Cloudflare has a static file/page to serve
  const response = await context.next();
  if (response && response.status !== 404) {
    return response;
  }

  // Redirect to home page with error parameter only if slug truly does not exist
  return Response.redirect(new URL("/?error=not-found", context.request.url), 302);
}
