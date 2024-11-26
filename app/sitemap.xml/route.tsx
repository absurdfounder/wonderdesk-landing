import { _loadFromJson, _loadFromJsonComparison } from "../utils/helper";

const URL = "https://BoringSites.com";

interface IntegrationOrTemplate {
  id: string;
  type: 'integration' | 'template' | 'compare-against';
}

interface SitemapURL {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
}

const STATIC_URLS: SitemapURL[] = [
  { loc: URL, priority: 1.0 },
  { loc: `${URL}/integration`, priority: 0.9 },
  { loc: `${URL}/pricing`, priority: 0.8 },
  { loc: `${URL}/affiliate`, priority: 0.7 },
  { loc: `${URL}/showcase`, priority: 0.7 }
];

async function loadIntegrations(): Promise<IntegrationOrTemplate[]> {
  const results: {
    integrations: IntegrationOrTemplate[];
    templates: IntegrationOrTemplate[];
    comparisons: IntegrationOrTemplate[];
    errors: string[];
  } = {
    integrations: [],
    templates: [],
    comparisons: [],
    errors: []
  };

  try {
    // Load integrations with error handling
    try {
      const integrationsFile = await _loadFromJson(false);
      if (Array.isArray(integrationsFile)) {
        results.integrations = integrationsFile.map(item => ({ 
          ...item, 
          type: 'integration' 
        }));
        console.log(`Loaded ${results.integrations.length} integrations`);
      } else {
        results.errors.push('Integrations file did not return an array');
      }
    } catch (error) {
      results.errors.push(`Failed to load integrations: ${error.message}`);
    }

    // Load templates with error handling
    try {
      const templatesFile = await _loadFromJson();
      if (Array.isArray(templatesFile)) {
        results.templates = templatesFile.map(item => ({ 
          ...item, 
          type: 'template' 
        }));
        console.log(`Loaded ${results.templates.length} templates`);
      } else {
        results.errors.push('Templates file did not return an array');
      }
    } catch (error) {
      results.errors.push(`Failed to load templates: ${error.message}`);
    }

    // Load comparisons with error handling
    try {
      const comparisonsFile = await _loadFromJsonComparison();
      if (Array.isArray(comparisonsFile)) {
        results.comparisons = comparisonsFile.map(item => ({ 
          ...item, 
          type: 'compare-against' 
        }));
        console.log(`Loaded ${results.comparisons.length} comparisons`);
      } else {
        results.errors.push('Comparisons file did not return an array');
      }
    } catch (error) {
      results.errors.push(`Failed to load comparisons: ${error.message}`);
    }

    // Log any errors that occurred
    if (results.errors.length > 0) {
      console.error('Errors occurred while loading data:', results.errors);
    }

    // Combine all results
    const allItems = [
      ...results.integrations,
      ...results.templates,
      ...results.comparisons
    ];

    // Validate IDs and remove invalid entries
    const validItems = allItems.filter(item => {
      if (!item.id || typeof item.id !== 'string') {
        console.warn(`Invalid item found:`, item);
        return false;
      }
      return true;
    });

    console.log(`Total valid items: ${validItems.length}`);
    return validItems;

  } catch (error) {
    console.error("Critical failure in loadIntegrations:", error);
    throw error; // Re-throw to be handled by the GET function
  }
}

function generateSiteMap(integrationsOrTemplates: IntegrationOrTemplate[]): string {
  const timestamp = new Date().toISOString();
  
  // Create dynamic URLs from the items
  const dynamicUrls: SitemapURL[] = integrationsOrTemplates.map(item => ({
    loc: `${URL}/${item.type}/${item.id}`,
    lastmod: timestamp,
    priority: item.type === 'integration' ? 0.6 : 0.5
  }));

  // Combine static and dynamic URLs
  const allUrls = [...STATIC_URLS, ...dynamicUrls];

  // Generate XML
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
${url.lastmod ? `    <lastmod>${url.lastmod}</lastmod>\n` : ''}${url.changefreq ? `    <changefreq>${url.changefreq}</changefreq>\n` : ''}${url.priority ? `    <priority>${url.priority}</priority>\n` : ''}  </url>`).join('\n')}
</urlset>`;

  return xmlContent;
}

export async function GET(): Promise<Response> {
  try {
    console.log('Starting sitemap generation...');
    
    const integrationsOrTemplates = await loadIntegrations();
    console.log(`Generated sitemap with ${integrationsOrTemplates.length} dynamic URLs`);
    
    const body = generateSiteMap(integrationsOrTemplates);
    
    // Validate XML structure
    if (!body.includes('<?xml') || !body.includes('</urlset>')) {
      throw new Error('Generated sitemap XML is invalid');
    }

    // Log the first few URLs for debugging
    const urlCount = (body.match(/<url>/g) || []).length;
    console.log(`Sitemap contains ${urlCount} total URLs`);

    return new Response(body, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
    
    // Return a 500 error with debug information
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Error generating full sitemap. Falling back to static URLs only. -->
  ${STATIC_URLS.map(url => `
  <url>
    <loc>${url.loc}</loc>
  </url>`).join('')}
</urlset>`,
      {
        status: 500,
        headers: {
          "Content-Type": "application/xml",
          "X-Error": error.message,
        },
      }
    );
  }
}