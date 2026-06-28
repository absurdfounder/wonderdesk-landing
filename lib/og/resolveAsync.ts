import { _loadFromJson, _loadFromJsonComparison } from '@/app/utils/helper';
import { resolveOgPageUrl } from '@/lib/og/pageUrls';
import type { OgHeroContent } from '@/lib/og/types';

function productOg(
  kind: OgHeroContent['kind'],
  eyebrowLabel: string,
  name: string,
  description: string,
  iconUrl?: string,
  slug?: string,
): OgHeroContent {
  return {
    kind,
    eyebrowIndex: '01',
    eyebrowLabel,
    headlinePrimary: name,
    description,
    iconUrl,
    singleLineHeadline: true,
    pageUrl: slug ? resolveOgPageUrl(kind, slug) : undefined,
    watermark: 'wonderdesk.',
  };
}

export async function resolveAsyncOgContent(
  kind: 'compare' | 'showcase' | 'legacy-integration',
  slug?: string,
): Promise<OgHeroContent | null> {
  if (!slug) return null;

  if (kind === 'compare') {
    const content = await _loadFromJsonComparison();
    const item = content.find((entry: { id: string }) => entry.id === slug) as {
      product?: { name?: string; description?: string; heroimage?: string };
    } | undefined;
    if (!item?.product?.name) return null;
    return productOg(
      'compare',
      'Comparison',
      `Wonderdesk vs ${item.product.name}`,
      item.product.description || '',
      item.product.heroimage,
      slug,
    );
  }

  if (kind === 'showcase' || kind === 'legacy-integration') {
    const content = await _loadFromJson(kind === 'legacy-integration');
    const item = content.find((entry: { id: string }) => entry.id === slug) as {
      product?: { name?: string; description?: string; logo?: string };
      proof?: { screenshot?: string };
    } | undefined;
    if (!item?.product?.name) return null;
    return productOg(
      kind,
      kind === 'showcase' ? 'Template' : 'Integration',
      item.product.name,
      item.product.description || '',
      item.product.logo || item.proof?.screenshot,
      slug,
    );
  }

  return null;
}
