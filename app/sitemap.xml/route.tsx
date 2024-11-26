// app/sitemap.xml/route.ts
import { type NextRequest } from 'next/server';
import { _loadFromJson, _loadFromJsonComparison } from "../utils/helper";

const URL = "https://boringsites.com";

// Define system and unwanted pages to exclude
const EXCLUDED_PATHS = new Set([
  '/404',
  '/500',
  '/_not-found',
  '/api',
  '/_error',
  '/_app',
  '/_document',
  '/sitemap.xml'  // exclude the sitemap itself
]);

interface IntegrationOrTemplate {
  id: string;
  type: 'integration' | 'template' | 'compare-against';
}

async function loadIntegrations(): Promise<IntegrationOrTemplate[]> {
  try {
    const [integrationsFile, templatesFile, comparison] = await Promise.all([
      _loadFromJson(false).then((items: any[]): IntegrationOrTemplate[] => 
        items.map(item => ({ ...item, type: 'integration' }))),
      _loadFromJson().then((items: any[]): IntegrationOrTemplate[] => 
        items.map(item => ({ ...item, type: 'template' }))),
      _loadFromJsonComparison().then((items: any[]): IntegrationOrTemplate[] => 
        items.map(item => ({ ...item, type: 'compare-against' })))
    ]);
    
    return [...integrationsFile, ...templatesFile, ...comparison];
  } catch (error) {
    console.error("Failed to load integrations", error);
    return [];
  }
}

function generateSiteMap(integrationsOrTemplates: IntegrationOrTemplate[]): string {
  const date = new Date().toISOString();
  
  // Generate URLs for all dynamic pages
  const dynamicUrls = integrationsOrTemplates
    .map(item => {
      const path = `/${item.type}/${encodeURIComponent(item.id)}`;
      return !EXCLUDED_PATHS.has(path) ? `
  <url>
    <loc>${URL}${path}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>` : '';
    })
    .filter(Boolean) // Remove any empty strings
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>${URL}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
${dynamicUrls}
</urlset>`.trim();
}

export async function GET(request: NextRequest) {
  try {
    const integrations = await loadIntegrations();
    const sitemap = generateSiteMap(integrations);
    
    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate',
        'X-Content-Type-Options': 'nosniff',
        'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",
      },
    });
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
}