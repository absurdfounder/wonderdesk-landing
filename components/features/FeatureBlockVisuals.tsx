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
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${PLATFORM_COL_W} / ${PLATFORM_VISUAL_H}` }}
    >
      <FeatureVisualStage
        stageWidth={PLATFORM_COL_W}
        stageHeight={PLATFORM_VISUAL_H}
        className="absolute inset-0"
      >
        <PlatformColumnVisual id={id} variant="plain" />
      </FeatureVisualStage>
    </div>
  );
}
