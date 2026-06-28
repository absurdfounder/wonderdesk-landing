import { _loadFromJson, _loadFromJsonComparison } from '@/app/utils/helper';
import { HUB_OG_PAGES, STATIC_OG_PAGES, allFeatureSlugs } from '@/lib/og/staticPages';
import type { OgKind } from '@/lib/og/types';

export type OgImageTarget = {
  kind: OgKind;
  slug?: string;
};

function pushSlug(targets: OgImageTarget[], kind: OgKind, slug: string) {
  targets.push({ kind, slug });
}

/** Every OG card the site can reference — used by the prebuild generator. */
export async function listAllOgImageTargets(): Promise<OgImageTarget[]> {
  const targets: OgImageTarget[] = [{ kind: 'home' }];

  for (const slug of Object.keys(HUB_OG_PAGES)) pushSlug(targets, 'hub', slug);
  for (const slug of Object.keys(STATIC_OG_PAGES)) pushSlug(targets, 'page', slug);
  for (const slug of allFeatureSlugs()) pushSlug(targets, 'feature', slug);

  const comparisons = await _loadFromJsonComparison();
  for (const entry of comparisons) {
    if (entry.id) pushSlug(targets, 'compare', entry.id);
  }

  const showcase = await _loadFromJson(true);
  for (const entry of showcase) {
    if (entry.id) pushSlug(targets, 'showcase', entry.id);
  }

  const integrations = await _loadFromJson(false);
  for (const entry of integrations) {
    if (entry.id) pushSlug(targets, 'legacy-integration', entry.id);
  }

  return targets;
}
