// types.ts
export interface BaseItem {
  id: string;
}

export type ItemType = 'integration' | 'template' | 'compare-against';

export interface IntegrationOrTemplate extends BaseItem {
  id: string;
  type: ItemType;
}

export interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// sitemap.ts
import { IntegrationOrTemplate, SitemapURL, ItemType } from './types';
import { _loadFromJson, _loadFromJsonComparison } from "../utils/helper";

const URL = process.env.NEXT_PUBLIC_SITE_URL || "https://BoringSites.com";

const STATIC_URLS: SitemapURL[] = [
  { loc: URL, priority: 1.0, changefreq: 'weekly' },
  { loc: `${URL}/integration`, priority: 0.9, changefreq: 'daily' },
  { loc: `${URL}/pricing`, priority: 0.8, changefreq: 'weekly' },
  { loc: `${URL}/affiliate`, priority: 0.7, changefreq: 'weekly' },
  { loc: `${URL}/showcase`, priority: 0.7, changefreq: 'weekly' }
];

async function processJsonData<T extends BaseItem>(
  loader: () => Promise<T[]>,
  type: ItemType,
  label: string
): Promise<IntegrationOrTemplate[]> {
  try {
    const items = await loader();
    if (!Array.isArray(items)) {
      console.error(`${label} data is not an array`);
      return [];
    }
    const processed = items.map(item => ({
      ...item,
      type
    }));
    console.log(`Loaded ${processed.length} ${label}`);
    return processed;
  } catch (error) {
    console.error(`Error loading ${label}:`, error);
    return [];
  }
}

async function loadIntegrations(): Promise<IntegrationOrTemplate[]> {
  const [integrations, templates, comparisons] = await Promise.all([
    processJsonData(() => _loadFromJson(false), 'integration', 'integrations'),
    processJsonData(() => _loadFromJson(), 'template', 'templates'),
    processJsonData(_loadFromJsonComparison, 'compare-against', 'comparisons')
  ]);

  const allItems = [...integrations, ...templates, ...comparisons];
  
  // Filter out invalid items
  const validItems = allItems.filter(item => {
    if (!item?.id || typeof item.id !== 'string') {
      console.warn('Invalid item found:', item);
      return false;
    }
    return true;
  });

  console.log(`Total valid items: ${validItems.length}`);
  return validItems;
}

function generateSiteMap(items: IntegrationOrTemplate[]): string {
  try {
    const timestamp = new Date().toISOString();
    
    const dynamicUrls: SitemapURL[] = items.map(item => ({
      loc: `${URL}/${item.type}/${item.id}`,
      lastmod: timestamp,
      priority: 0.6,
      changefreq: 'weekly'
    }));

    const allUrls = [...STATIC_URLS, ...dynamicUrls];
    
    const urlsXml = allUrls
      .map(url => {
        const lastmodTag = url.lastmod ? `    <lastmod>${url.lastmod}</lastmod>\n` : '';
        const changefreqTag = url.changefreq ? `    <changefreq>${url.changefreq}</changefreq>\n` : '';
        const priorityTag = url.priority ? `    <priority>${url.priority.toFixed(1)}</priority>\n` : '';
        
        return `  <url>
    <loc>${url.loc}</loc>
${lastmodTag}${changefreqTag}${priorityTag}  </url>`;
      })
      .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;
  } catch (error) {
    console.error('Error generating sitemap XML:', error);
    throw error;
  }
}

export async function GET(): Promise<Response> {
  try {
    // Add request logging
    console.log('Starting sitemap generation...');
    console.log('Using base URL:', URL);

    const items = await loadIntegrations();
    console.log(`Loaded ${items.length} total items`);

    const xmlContent = generateSiteMap(items);
    const urlCount = (xmlContent.match(/<url>/g) || []).length;
    console.log(`Generated sitemap with ${urlCount} URLs`);

    // Debug output of the first few URLs
    const urls = xmlContent.match(/<loc>(.*?)<\/loc>/g)?.slice(0, 5);
    console.log('Sample URLs:', urls);

    return new Response(xmlContent, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'X-URL-Count': urlCount.toString(),
      },
    });
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
    
    // Generate a minimal sitemap with just static URLs
    const fallbackXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_URLS.map(url => `  <url>
    <loc>${url.loc}</loc>
  </url>`).join('\n')}
</urlset>`;

    return new Response(fallbackXml, {
      status: 200, // Still return 200 to keep the sitemap accessible
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'X-Error': error instanceof Error ? error.message : 'Unknown error',
        'X-Sitemap-Status': 'fallback',
      },
    });
  }
}