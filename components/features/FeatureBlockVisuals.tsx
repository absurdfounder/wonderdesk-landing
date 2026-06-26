'use client';

import Image from 'next/image';
import FeatureVisualStage from '../ui/FeatureVisualStage';

const FEATURE_REF = {
  domain: {
    src: 'https://dazzling-cat.netlify.app/wonderdomain.png',
    alt: 'Custom domain setup in Wonder',
  },
  seo: {
    src: 'https://dazzling-cat.netlify.app/analyticsseo.png',
    alt: 'SEO and analytics dashboard',
  },
  performance: {
    src: 'https://dazzling-cat.netlify.app/performancewebsite.png',
    alt: 'Fast help center performance scores',
  },
} as const;

export type FeatureVisualId = keyof typeof FEATURE_REF;

function ReferenceFeatureVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative flex h-full w-full items-end justify-center bg-gradient-to-b from-[#e6f7fb]/80 via-white to-white px-3 pb-2 pt-4">
      <div className="relative h-[92%] w-full overflow-hidden rounded-t-md shadow-[0_-8px_30px_-12px_rgba(0,159,188,0.15)] ring-1 ring-slate-200/80">
        <Image src={src} alt={alt} fill unoptimized className="object-cover object-top" sizes="400px" />
      </div>
    </div>
  );
}

export default function FeatureBlockVisual({ id }: { id: FeatureVisualId }) {
  const ref = FEATURE_REF[id];

  return (
    <div className="relative aspect-[4/3] min-h-[200px] w-full">
      <FeatureVisualStage>
        <ReferenceFeatureVisual src={ref.src} alt={ref.alt} />
      </FeatureVisualStage>
    </div>
  );
}
