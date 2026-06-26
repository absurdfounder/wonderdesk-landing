'use client';

import type { ReactNode } from 'react';
import FeatureVisualStage from '../ui/FeatureVisualStage';

type HomepageFeatureVisualRowProps = {
  stageWidth: number;
  stageHeight: number;
  children: ReactNode;
};

export default function HomepageFeatureVisualRow({
  stageWidth,
  stageHeight,
  children,
}: HomepageFeatureVisualRowProps) {
  return (
    <div
      className="relative w-full overflow-hidden border-t border-slate-200"
      style={{ aspectRatio: `${stageWidth} / ${stageHeight}` }}
    >
      <FeatureVisualStage stageWidth={stageWidth} stageHeight={stageHeight} className="absolute inset-0">
        {children}
      </FeatureVisualStage>
    </div>
  );
}
