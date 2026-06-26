// app/sitemap.xml/route.ts
import { type NextRequest } from 'next/server';
import { _loadFromJson, _loadFromJsonComparison } from "../utils/helper";

const URL = "https://wonderdesk.ai";

interface IntegrationOrTemplate {
  id: string;
  type: 'integration' | 'showcase' | 'compare-against';
}

async function loadIntegrations(): Promise<IntegrationOrTemplate[]> {
  try {
    const [integrationsFile, templatesFile, comparison] = await Promise.all([
      _loadFromJson(false).then((items: any[]): IntegrationOrTemplate[] =>
        items.map(item => ({ ...item, type: 'integration' }))),
      _loadFromJson().then((items: any[]): IntegrationOrTemplate[] =>
        items.map(item => ({ ...item, type: 'showcase' }))),
      _loadFromJsonComparison().then((items: any[]): IntegrationOrTemplate[] =>
        items.map(item => ({ ...item, type: 'compare-against' })))
    ]);

    return [...integrationsFile, ...templatesFile, ...comparison];
  } catch (error) {
    console.error("Failed to load integrations", error);
    return [];
  }
}

const staticPages = [
  { path: '/pricing', changefreq: 'weekly', priority: '0.8' },
  { path: '/affiliate', changefreq: 'weekly', priority: '0.8' },
  { path: '/showcase', changefreq: 'daily', priority: '0.8' },
  { path: '/integration', changefreq: 'daily', priority: '0.8' },
  { path: '/features/ai-help-center', changefreq: 'weekly', priority: '0.8' },
  { path: '/features/ai-documentation-agent', changefreq: 'weekly', priority: '0.8' },
  { path: '/features/automated-screenshots-for-docs', changefreq: 'weekly', priority: '0.8' },
  { path: '/features/self-service-help-widget', changefreq: 'weekly', priority: '0.8' },
  { path: '/features/code-to-docs', changefreq: 'weekly', priority: '0.8' },
  { path: '/features/pr-to-docs', changefreq: 'weekly', priority: '0.8' },
  { path: '/features/multilingual-knowledge-base', changefreq: 'weekly', priority: '0.8' },
  { path: '/features/internal-knowledge-base', changefreq: 'weekly', priority: '0.8' },
  { path: '/features/generative-ai-customer-service', changefreq: 'weekly', priority: '0.8' },
  { path: '/features/chrome-extension-for-documentation', changefreq: 'weekly', priority: '0.8' },
];

function generateSiteMap(integrationsOrTemplates: IntegrationOrTemplate[]): string {
  const lastmod = new Date().toISOString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${URL}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${URL}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}
  ${integrationsOrTemplates
      .map(item => `
  <url>
    <loc>${URL}/${encodeURIComponent(item.type)}/${encodeURIComponent(item.id)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
      ).join('')}
</urlset>`;
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
      },
    });
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
}
