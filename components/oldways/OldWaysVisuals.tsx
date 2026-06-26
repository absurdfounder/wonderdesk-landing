'use client';

import Image from 'next/image';

const REFERENCE_ART = [
  {
    src: 'https://dazzling-cat.netlify.app/write%20on%20notion.png',
    alt: 'Write in Notion, publish with Wonder',
  },
  {
    src: 'https://dazzling-cat.netlify.app/performancewebsite.png',
    alt: 'SEO-optimized Wonder site',
  },
  {
    src: 'https://dazzling-cat.netlify.app/notion%20to%20website.png',
    alt: 'Notion to membership website',
  },
  {
    src: 'https://dazzling-cat.netlify.app/analyticsseo.png',
    alt: 'Built-in analytics and SEO',
  },
  {
    src: 'https://dazzling-cat.netlify.app/aisupportreco.png',
    alt: 'AI support and suggestions',
  },
  {
    src: 'https://dazzling-cat.netlify.app/integrationsdb.png',
    alt: 'Integrations with your stack',
  },
] as const;

function ReferenceArtVisual({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-b from-white/50 to-transparent p-2 sm:p-3">
      <div className="relative h-full w-full overflow-hidden rounded-md ring-1 ring-black/[0.05]">
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          className="object-contain object-center"
          sizes="(max-width: 768px) 90vw, 480px"
        />
      </div>
    </div>
  );
}

export default function OldWaysVisual({ index }: { index: number }) {
  const art = REFERENCE_ART[index] ?? REFERENCE_ART[0];
  return <ReferenceArtVisual src={art.src} alt={art.alt} />;
}
