export async function onRequest(context) {
  const { id } = context.params;
  
  // Clean and sanitize ID to prevent malicious lookups
  const cleanId = id.trim().toLowerCase().replace(/[^a-z0-9-_]/g, '');
  
  if (!cleanId || !context.env.LINKWA_KV) {
    return Response.redirect(new URL("/", context.request.url), 302);
  }

  // Bypass dynamic redirection for static site pages
  const staticRoutes = new Set(['about', 'contact', 'blog', 'privacy', 'terms']);
  if (staticRoutes.has(cleanId)) {
    return context.next();
  }

  try {
    const destination = await context.env.LINKWA_KV.get(cleanId);
    if (destination) {
      return Response.redirect(destination, 302);
    }
  } catch (err) {
    console.error("KV Lookup Error:", err);
  }

  // Redirect to home page with error parameter if slug not found
  return Response.redirect(new URL("/?error=not-found", context.request.url), 302);
}
