'use client';

import type { ReactElement } from 'react';
import FeatureVisualStage from '../ui/FeatureVisualStage';
import { DomainFeatureVisual, SeoFeatureVisual, PerformanceFeatureVisual } from '../visuals/WonderVisualKit';

export type FeatureVisualId = 'domain' | 'seo' | 'performance';

const VISUALS: Record<FeatureVisualId, () => ReactElement> = {
  domain: DomainFeatureVisual,
  seo: SeoFeatureVisual,
  performance: PerformanceFeatureVisual,
};

/**
 * FeaturesBlocks cards have a fixed 4:3 aspect ratio, so FeatureVisualStage
 * is correct here — it scales the 480×360 canvas to fit whatever column width.
 */
export default function FeatureBlockVisual({ id }: { id: FeatureVisualId }) {
  const Visual = VISUALS[id];
  return (
    <div className="relative aspect-[4/3] min-h-[200px] w-full overflow-hidden">
      <FeatureVisualStage>
        <Visual />
      </FeatureVisualStage>
    </div>
  );
}
