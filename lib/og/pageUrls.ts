import type { OgKind } from '@/lib/og/types';

const ORIGIN = 'https://wonderdesk.ai';

const HUB_PATHS: Record<string, string> = {
  integration: '/integration',
  showcase: '/showcase',
};

export function resolveOgPageUrl(kind: OgKind, slug?: string): string {
  if (kind === 'home') return ORIGIN;
  if (kind === 'hub' && slug) return `${ORIGIN}${HUB_PATHS[slug] || `/${slug}`}`;
  if (kind === 'page' && slug) return `${ORIGIN}/${slug}`;
  if (kind === 'feature' && slug) return `${ORIGIN}/features/${slug}`;
  if (kind === 'compare' && slug) return `${ORIGIN}/compare-against/${slug}`;
  if (kind === 'showcase' && slug) return `${ORIGIN}/showcase/${slug}`;
  if (kind === 'legacy-integration' && slug) return `${ORIGIN}/integration/${slug}`;
  return ORIGIN;
}

/** Display URL without scheme — e.g. wonderdesk.ai/pricing */
export function formatOgDisplayUrl(pageUrl: string): string {
  return pageUrl.replace(/^https?:\/\//, '');
}
