import { _loadFromJson, _loadFromJsonComparison } from "../utils/helper";

const URL = "https://BoringSites.com";

interface IntegrationOrTemplate {
  id: string;
  type: 'integration' | 'template' | 'compare-against';
  lastmod?: string; // Optional last modification date
}

// Static pages configuration
const staticPages = [
  '',           // home page
  'integration',
  'pricing',
  'affiliate',
  'showcase'
];

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

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

function generateUrlEntry(path: string, lastmod?: string): string {
  const loc = `${URL}${path.startsWith('/') ? '' : '/'}${path}`;
  return `
    <url>
        <loc>${escapeXml(loc)}</loc>
        ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
        <changefreq>daily</changefreq>
        <priority>${path === '' ? '1.0' : '0.8'}</priority>
    </url>`;
}

function generateSiteMap(integrationsOrTemplates: IntegrationOrTemplate[]): string {
  const staticUrls = staticPages.map(page => generateUrlEntry(page));
  const dynamicUrls = integrationsOrTemplates.map(item => 
    generateUrlEntry(`${item.type}/${escapeXml(item.id)}`, item.lastmod)
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${staticUrls.join('')}
    ${dynamicUrls.join('')}
</urlset>`;
}

export async function GET(): Promise<Response> {
    try {
        const integrationsOrTemplates = await loadIntegrations();
        const body = generateSiteMap(integrationsOrTemplates);

        if (!body) {
            throw new Error('Failed to generate sitemap');
        }

        return new Response(body, {
            status: 200,
            headers: {
                "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
                "Content-Type": "application/xml",
            },
        });
    } catch (error) {
        console.error('Sitemap generation failed:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}