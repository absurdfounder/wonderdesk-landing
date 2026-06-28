import { FEATURE_OG_PAGES, HUB_OG_PAGES, STATIC_OG_PAGES } from '@/lib/og/staticPages';
import type { OgHeroContent, OgKind } from '@/lib/og/types';

const HOME_OG: OgHeroContent = {
  kind: 'home',
  eyebrowIndex: '01',
  eyebrowLabel: 'AI help center',
  headlinePrimary: 'Docs that stay',
  headlineAccent: 'up to date.',
  description:
    'Wonderdesk drafts and updates your help center, blog, changelog, and product docs from product changes — with custom domains, SEO, and analytics.',
  singleLineHeadline: false,
  pageUrl: 'https://wonderdesk.ai',
  watermark: 'wonderdesk.',
};

export function resolveOgContent(kind: OgKind, slug?: string): OgHeroContent | null {
  if (kind === 'home') return HOME_OG;

  if (kind === 'hub') {
    return slug ? HUB_OG_PAGES[slug] ?? null : null;
  }

  if (kind === 'page') {
    return slug ? STATIC_OG_PAGES[slug] ?? null : null;
  }

  if (kind === 'feature') {
    return slug ? FEATURE_OG_PAGES[slug] ?? null : null;
  }

  return null;
}
