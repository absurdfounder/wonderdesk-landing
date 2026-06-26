'use client';

/**
 * OldWays visuals are responsive Tailwind components — they do NOT go through
 * FeatureVisualStage. They fill the PixelFramedVisual panel (bare=true) naturally
 * using h-full / flex, exactly as Trooper's non-scaled visuals do.
 */
import {
  AiSupportVisual,
  AnalyticsVisual,
  GatedContentVisual,
  IntegrationsHubVisual,
  NotionHostingVisual,
  SeoLighthouseVisual,
} from '../visuals/WonderVisualKit';

const OLD_WAYS_VISUALS = [
  NotionHostingVisual,   // Write on Notion → Wonder hosts it
  SeoLighthouseVisual,  // Performance + SEO Lighthouse scores
  GatedContentVisual,   // Membership / gated content paywall
  AnalyticsVisual,      // In-built analytics dashboard
  AiSupportVisual,      // AI support chat widget
  IntegrationsHubVisual, // Integrations hub with orbit
] as const;

export default function OldWaysVisual({ index }: { index: number }) {
  const Visual = OLD_WAYS_VISUALS[index] ?? NotionHostingVisual;
  return (
    <div className="h-full w-full">
      <Visual />
    </div>
  );
}
