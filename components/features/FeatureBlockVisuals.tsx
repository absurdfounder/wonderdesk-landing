'use client';

import type { ReactElement } from 'react';
import FeatureVisualStage from '../ui/FeatureVisualStage';
import {
  DomainSetupModal,
  HelpCenterAnalyticsStack,
  SiteWithLighthouse,
  SkyBackdrop,
} from '../visuals/WonderVisualKit';

export type FeatureVisualId = 'domain' | 'seo' | 'performance';

function DomainFeatureVisual() {
  return (
    <SkyBackdrop>
      <DomainSetupModal />
    </SkyBackdrop>
  );
}

function SeoFeatureVisual() {
  return (
    <div className="h-full w-full bg-gradient-to-b from-wonder-50/40 via-white to-white">
      <HelpCenterAnalyticsStack />
    </div>
  );
}

function PerformanceFeatureVisual() {
  return (
    <div className="h-full w-full bg-gradient-to-b from-wonder-50/30 to-white">
      <SiteWithLighthouse />
    </div>
  );
}

const VISUALS: Record<FeatureVisualId, () => ReactElement> = {
  domain: DomainFeatureVisual,
  seo: SeoFeatureVisual,
  performance: PerformanceFeatureVisual,
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
