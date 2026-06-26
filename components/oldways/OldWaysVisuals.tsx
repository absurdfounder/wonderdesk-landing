'use client';

import {
  AiSupportVisual,
  AnalyticsVisual,
  IntegrationsVisual,
  MembershipVisual,
  NotionHostingVisual,
  SeoOldWaysVisual,
} from '../visuals/WonderVisualKit';

const OLD_WAYS_VISUALS = [
  NotionHostingVisual,   // Write on Notion → host with Wonder
  SeoOldWaysVisual,     // Performance / SEO scores
  MembershipVisual,     // Membership paywalls
  AnalyticsVisual,      // Analytics dashboard
  AiSupportVisual,      // AI support widget
  IntegrationsVisual,   // Integrations grid
] as const;

export default function OldWaysVisual({ index }: { index: number }) {
  const Visual = OLD_WAYS_VISUALS[index] ?? NotionHostingVisual;
  return (
    <div className="relative h-full w-full">
      <Visual />
    </div>
  );
}
