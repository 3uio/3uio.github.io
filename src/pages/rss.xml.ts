import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const escapeXml = (value: string) => value.replace(/[<>&'\"]/g, (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[char] ?? char);

export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? new URL('https://3uio.github.io/');
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );
  const items = posts.map((post) => {
    const url = new URL(`/blog/${post.id}/`, origin).href;
    return `<item><title>${escapeXml(post.data.title)}</title><link>${url}</link><guid>${url}</guid><description>${escapeXml(post.data.description)}</description><pubDate>${post.data.publishedAt.toUTCString()}</pubDate></item>`;
  }).join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>3uio Blog</title><link>${origin.href}</link><description>Research, engineering and learning notes from 3uio.</description>${items}</channel></rss>`;
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
