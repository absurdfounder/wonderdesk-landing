import type { OgHeroContent } from '@/lib/og/types';
import { resolveOgPageUrl } from '@/lib/og/pageUrls';

function hub(
  slug: string,
  eyebrowLabel: string,
  headlinePrimary: string,
  headlineAccent: string | undefined,
  description: string,
): OgHeroContent {
  return {
    kind: 'hub',
    eyebrowIndex: '01',
    eyebrowLabel,
    headlinePrimary,
    headlineAccent,
    description,
    singleLineHeadline: true,
    pageUrl: resolveOgPageUrl('hub', slug),
    watermark: 'wonderdesk.',
  };
}

function page(
  slug: string,
  eyebrowLabel: string,
  headlinePrimary: string,
  headlineAccent: string | undefined,
  description: string,
): OgHeroContent {
  return {
    kind: 'page',
    eyebrowIndex: '01',
    eyebrowLabel,
    headlinePrimary,
    headlineAccent,
    description,
    singleLineHeadline: true,
    pageUrl: resolveOgPageUrl('page', slug),
    watermark: 'wonderdesk.',
  };
}

function feature(
  slug: string,
  eyebrowLabel: string,
  headlinePrimary: string,
  headlineAccent: string | undefined,
  description: string,
): OgHeroContent {
  return {
    kind: 'feature',
    eyebrowIndex: '01',
    eyebrowLabel,
    headlinePrimary,
    headlineAccent,
    description,
    singleLineHeadline: true,
    pageUrl: resolveOgPageUrl('feature', slug),
    watermark: 'wonderdesk.',
  };
}

export const HUB_OG_PAGES: Record<string, OgHeroContent> = {
  integration: hub(
    'integration',
    'Integrations',
    'Connect your',
    'stack',
    'Integrate Wonderdesk with your tools and extend your help center with community-built connections.',
  ),
  showcase: hub(
    'showcase',
    'Showcase',
    'Sites built',
    'on Wonderdesk',
    'Browse help centers, blogs, changelogs, and docs published with Wonderdesk.',
  ),
};

export const STATIC_OG_PAGES: Record<string, OgHeroContent> = {
  pricing: page(
    'pricing',
    'Pricing',
    'Simple,',
    'transparent plans',
    'Flexible Wonderdesk pricing from personal projects to enterprise help centers and docs.',
  ),
  affiliate: page(
    'affiliate',
    'Affiliate',
    'Earn with',
    'Wonderdesk',
    'Join the Wonderdesk affiliate program and earn by referring teams to AI-powered docs.',
  ),
  terms: page(
    'terms',
    'Legal',
    'Terms of',
    'service',
    'Terms governing use of Wonderdesk and related services.',
  ),
  privacy: page(
    'privacy',
    'Legal',
    'Privacy',
    'policy',
    'How Wonderdesk collects, uses, and protects your data.',
  ),
  agency: page(
    'agency',
    'Agencies',
    'Docs for',
    'clients',
    'Deploy Wonderdesk help centers and knowledge bases for agency clients.',
  ),
  'contact-us': page(
    'contact-us',
    'Contact',
    'Talk to',
    'the team',
    'Sales, support, and partnership inquiries for Wonderdesk.',
  ),
  'wonder-token': page(
    'wonder-token',
    'Wonder',
    'Token',
    'utility',
    'Wonder token utilities and ecosystem pages.',
  ),
  'watch-the-burn-wonder': page(
    'watch-the-burn-wonder',
    'Wonder',
    'Watch the',
    'burn',
    'Wonder burn tracker and ecosystem updates.',
  ),
  'migrating-to-wonder-sites': page(
    'migrating-to-wonder-sites',
    'Migration',
    'Move to',
    'Wonderdesk',
    'Migrate helpdesks, docs, and sites to Wonderdesk publishing.',
  ),
  'create-a-blog-notion': page(
    'create-a-blog-notion',
    'Notion CMS',
    'Blog from',
    'Notion',
    'Publish a professional blog powered by Notion as your CMS.',
  ),
  'create-a-changelog-notion': page(
    'create-a-changelog-notion',
    'Notion CMS',
    'Changelog',
    'from Notion',
    'Ship product updates with a Notion-backed changelog site.',
  ),
  'create-a-company-wiki-notion': page(
    'create-a-company-wiki-notion',
    'Notion CMS',
    'Company wiki',
    'from Notion',
    'Internal wiki and knowledge base publishing from Notion.',
  ),
  'create-a-directory-notion': page(
    'create-a-directory-notion',
    'Notion CMS',
    'Directory',
    'from Notion',
    'Launch a searchable directory site backed by Notion.',
  ),
  'create-a-documentation-notion': page(
    'create-a-documentation-notion',
    'Notion CMS',
    'Docs site',
    'from Notion',
    'Developer and product documentation powered by Notion.',
  ),
  'create-a-helpdesk-servicedesk-notion': page(
    'create-a-helpdesk-servicedesk-notion',
    'Notion CMS',
    'Helpdesk',
    'from Notion',
    'Customer helpdesk and service desk sites from Notion content.',
  ),
  'create-a-knowledge-base-notion': page(
    'create-a-knowledge-base-notion',
    'Notion CMS',
    'Knowledge base',
    'from Notion',
    'Self-serve support knowledge base publishing from Notion.',
  ),
  'create-a-marketplace-notion': page(
    'create-a-marketplace-notion',
    'Notion CMS',
    'Marketplace',
    'from Notion',
    'Two-sided marketplace sites with Notion as the content layer.',
  ),
  'create-a-chrome-extension': page(
    'create-a-chrome-extension',
    'Build',
    'Chrome',
    'extension',
    'Create and ship browser extensions with Wonderdesk workflows.',
  ),
};

export const FEATURE_OG_PAGES: Record<string, OgHeroContent> = {
  'ai-help-center': feature(
    'ai-help-center',
    'Feature',
    'AI Help Center',
    'that stays current',
    'Create a self-updating help center that drafts and updates articles automatically.',
  ),
  'ai-documentation-agent': feature(
    'ai-documentation-agent',
    'Feature',
    'AI docs agent',
    'writes for you',
    'Let AI create and maintain your documentation while you focus on building.',
  ),
  'automated-screenshots-for-docs': feature(
    'automated-screenshots-for-docs',
    'Feature',
    'Screenshots',
    'stay current',
    'Automatically refresh screenshots in docs when your product UI changes.',
  ),
  'chrome-extension-for-documentation': feature(
    'chrome-extension-for-documentation',
    'Feature',
    'Chrome extension',
    'for docs',
    'Update documentation from any tab with captures and quick edits.',
  ),
  'code-to-docs': feature(
    'code-to-docs',
    'Feature',
    'Code to',
    'help docs',
    'Sync documentation with your codebase and keep help articles accurate.',
  ),
  'generative-ai-customer-service': feature(
    'generative-ai-customer-service',
    'Feature',
    'AI answers',
    'for support',
    'Reduce tickets with an AI help desk chatbot grounded in your knowledge base.',
  ),
  'internal-knowledge-base': feature(
    'internal-knowledge-base',
    'Feature',
    'Internal',
    'knowledge base',
    'Private team docs with login required and secure access controls.',
  ),
  'multilingual-knowledge-base': feature(
    'multilingual-knowledge-base',
    'Feature',
    'Multilingual',
    'help center',
    'Translate your knowledge base and reach customers worldwide.',
  ),
  'pr-to-docs': feature(
    'pr-to-docs',
    'Feature',
    'PR to',
    'docs',
    'Draft help center articles when customer-facing features ship in pull requests.',
  ),
  'self-service-help-widget': feature(
    'self-service-help-widget',
    'Feature',
    'Help widget',
    'in your app',
    'Embed self-service help in your product and deflect support tickets.',
  ),
};

export function allFeatureSlugs(): string[] {
  return Object.keys(FEATURE_OG_PAGES);
}
