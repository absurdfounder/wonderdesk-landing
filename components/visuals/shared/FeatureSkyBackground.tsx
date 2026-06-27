'use client';

import Image from 'next/image';

export const PLATFORM_FEATURE_SKY_SRC = '/images/platform-feature-sky.png';

type FeatureSkyBackgroundProps = {
  className?: string;
  priority?: boolean;
  /** Soft white wash over the photo so mockups sit on a calm surface. */
  tinted?: boolean;
};

/** Full-bleed sky photo for platform feature card panels. */
export default function FeatureSkyBackground({
  className = '',
  priority = false,
  tinted = true,
}: FeatureSkyBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <Image
        src={PLATFORM_FEATURE_SKY_SRC}
        alt=""
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-[center_35%]"
        draggable={false}
      />
      {tinted ? <div className="platform-feature-sky-tint" /> : null}
    </div>
  );
}
