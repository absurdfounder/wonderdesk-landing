'use client';

import {
  AiChatWidgetVisual,
  AnalyticsDashboardVisual,
  IntegrationsGridVisual,
  MembershipPaywallVisual,
  NotionWorkspaceVignette,
  SiteWithLighthouse,
} from '../visuals/WonderVisualKit';

const OLD_WAYS_VISUALS = [
  NotionWorkspaceVignette,
  () => <SiteWithLighthouse siteTitle="AIRDROPS WORK" />,
  MembershipPaywallVisual,
  AnalyticsDashboardVisual,
  AiChatWidgetVisual,
  IntegrationsGridVisual,
] as const;

export default function OldWaysVisual({ index }: { index: number }) {
  const Visual = OLD_WAYS_VISUALS[index] ?? NotionWorkspaceVignette;
  return (
    <div className="relative h-full w-full">
      <Visual />
    </div>
  );
}
