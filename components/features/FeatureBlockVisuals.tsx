'use client';

import type { ReactElement } from 'react';
import FeatureVisualStage from '../ui/FeatureVisualStage';
import { DomainVisual, PerformanceVisual, SeoVisual } from '../visuals/WonderVisualKit';

export type FeatureVisualId = 'domain' | 'seo' | 'performance';

const VISUALS: Record<FeatureVisualId, () => ReactElement> = {
  domain: DomainVisual,
  seo: SeoVisual,
  performance: PerformanceVisual,
};

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
