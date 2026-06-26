'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/** Canonical design canvas for capability / feature card visuals (4:3). */
export const FEATURE_VISUAL_STAGE_W = 480;
export const FEATURE_VISUAL_STAGE_H = 360;

type FeatureVisualStageProps = {
  children: ReactNode;
  stageWidth?: number;
  stageHeight?: number;
  className?: string;
  /** `contain` letterboxes (default). `width` scales to fill parent width edge-to-edge. */
  fit?: 'contain' | 'width';
};

/** Fixed-size visual stage that scales down to fit its parent box without overflowing. */
export default function FeatureVisualStage({
  children,
  stageWidth = FEATURE_VISUAL_STAGE_W,
  stageHeight = FEATURE_VISUAL_STAGE_H,
  className = '',
  fit = 'contain',
}: FeatureVisualStageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const update = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (!w || !h) return;
      const next =
        fit === 'width'
          ? w / stageWidth
          : Math.min(1, w / stageWidth, h / stageHeight);
      setScale((prev) => (Math.abs(prev - next) < 0.001 ? prev : next));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [stageWidth, stageHeight, fit]);

  if (fit === 'width') {
    return (
      <div ref={containerRef} className={`relative h-full w-full overflow-hidden ${className}`}>
        <div
          className="origin-top-left"
          style={{
            width: stageWidth,
            height: stageHeight,
            transform: `scale(${scale})`,
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative h-full w-full overflow-hidden ${className}`}>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: stageWidth * scale,
          height: stageHeight * scale,
        }}
      >
        <div
          className="origin-top-left overflow-hidden"
          style={{
            width: stageWidth,
            height: stageHeight,
            transform: `scale(${scale})`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
