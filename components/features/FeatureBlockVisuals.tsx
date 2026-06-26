'use client';

import FeatureVisualStage from '../ui/FeatureVisualStage';
import {
  PLATFORM_COL_W,
  PLATFORM_VISUAL_H,
  PlatformColumnVisual,
  type PlatformCardId,
} from '../visuals/PrDocsPlatformCards';

export type FeatureVisualId = PlatformCardId;

export default function FeatureBlockVisual({ id }: { id: FeatureVisualId }) {
  return (
    <div className="relative min-h-[240px] w-full overflow-hidden sm:min-h-[280px] lg:min-h-[320px]">
      <FeatureVisualStage stageWidth={PLATFORM_COL_W} stageHeight={PLATFORM_VISUAL_H}>
        <PlatformColumnVisual id={id} landscapeId={`home-features-${id}`} />
      </FeatureVisualStage>
    </div>
  );
}
