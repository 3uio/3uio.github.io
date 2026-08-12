import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? new URL('https://3uio.github.io/');
  const pages = ['/', '/about/', '/research/', '/projects/', '/publications/', '/blog/', '/contact/'];
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const urls = [...pages, ...posts.map((post) => `/blog/${post.id}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((path) => `  <url><loc>${new URL(path, origin).href}</loc></url>`)
    .join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
