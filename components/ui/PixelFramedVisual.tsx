'use client';

import type { ReactNode } from 'react';
import FeatureVisualStage from './FeatureVisualStage';
import PixelDitherGradient from './PixelDitherGradient';

type PixelFramedVisualProps = {
  children: ReactNode;
  /** Show illustration flush in the dither field (no inner white card). */
  bare?: boolean;
  /** Scale children inside FeatureVisualStage canvas. */
  scaled?: boolean;
};

export default function PixelFramedVisual({
  children,
  bare = false,
  scaled = true,
}: PixelFramedVisualProps) {
  const body = scaled ? (
    <div className="relative h-full w-full">
      <FeatureVisualStage>{children}</FeatureVisualStage>
    </div>
  ) : (
    children
  );

  return (
    <div className="absolute inset-0 flex flex-col">
      <PixelDitherGradient />
      {bare ? (
        <div className="absolute inset-0 z-10 overflow-hidden">
          {body}
        </div>
      ) : (
        <div className="relative z-10 flex flex-1 items-stretch justify-center p-6 sm:p-8 lg:p-10">
          <div className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-xl bg-white shadow-[0_24px_48px_-16px_rgba(15,23,42,0.16),0_8px_16px_-8px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.06]">
            <div className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden">
              {body}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
