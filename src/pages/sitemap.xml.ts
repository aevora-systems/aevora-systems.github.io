import type { APIRoute } from 'astro';
import { indexedPaths } from '../data/site';
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://aevora-systems.github.io');
  const urls = indexedPaths.map(path => `<url><loc>${new URL(path, base).href}</loc></url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
