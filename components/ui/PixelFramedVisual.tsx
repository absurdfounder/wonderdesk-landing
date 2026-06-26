'use client';

import type { ReactNode } from 'react';
import FeatureVisualStage from './FeatureVisualStage';
import PixelDitherGradient from './PixelDitherGradient';

type PixelFramedVisualProps = {
  children: ReactNode;
  /** Show illustration flush in the dither field — no white card wrapper. */
  bare?: boolean;
  /** Scale children inside FeatureVisualStage canvas (only for dense pixel-layouts). */
  scaled?: boolean;
};

export default function PixelFramedVisual({
  children,
  bare = false,
  scaled = false,
}: PixelFramedVisualProps) {
  const body = scaled ? (
    <div className="relative min-h-[240px] flex-1 sm:min-h-[280px] lg:min-h-[320px]">
      <FeatureVisualStage>{children}</FeatureVisualStage>
    </div>
  ) : (
    children
  );

  return (
    <div className="relative flex min-h-[320px] flex-col sm:min-h-[380px] lg:min-h-[500px]">
      <PixelDitherGradient />
      <div className="relative z-10 flex flex-1 items-stretch justify-center p-5 sm:p-7 md:p-9 lg:p-10">
        {bare ? (
          <div className="flex min-h-0 w-full max-w-[min(100%,40rem)] flex-1 flex-col overflow-hidden">
            {body}
          </div>
        ) : (
          <div className="flex min-h-0 w-full max-w-[min(100%,40rem)] flex-1 flex-col overflow-hidden rounded-xl bg-white shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18),0_8px_16px_-8px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.06]">
            <div className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden px-5 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6">
              {body}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
