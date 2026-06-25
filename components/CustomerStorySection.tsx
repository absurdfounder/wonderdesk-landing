'use client';

import Image from 'next/image';
import LandingMissionTag from './landing/LandingMissionTag';

type CustomerStorySectionProps = {
  embedded?: boolean;
};

export default function CustomerStorySection({ embedded = false }: CustomerStorySectionProps) {
  const content = (
    <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
      <div className="flex flex-col justify-center gap-6 border-b border-slate-200 py-12 lg:border-b-0 lg:border-r lg:py-16 lg:pr-8">
        <LandingMissionTag index="05" label="Customer story" />
        <blockquote className="landing-display text-2xl font-semibold leading-snug text-slate-900 lg:text-3xl">
          &ldquo;Wonder is by far the best support product I have ever used.&rdquo;
        </blockquote>
        <div className="flex flex-col gap-1">
          <div className="font-medium text-slate-900">Ryan Patel</div>
          <div className="text-sm text-slate-500">Co-founder, Flowstack</div>
        </div>
      </div>
      <div className="relative min-h-[280px] overflow-hidden bg-sky-50 lg:min-h-0">
        <div className="relative aspect-[5/3] lg:aspect-auto lg:h-full lg:min-h-[360px]">
          <Image
            src="https://dazzling-cat.netlify.app/TimBl-Cust.png"
            alt="Ryan Patel"
            fill
            className="object-cover"
            style={{
              filter: 'grayscale(100%) brightness(0.95) sepia(100%) hue-rotate(185deg) saturate(55%)',
            }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 mix-blend-multiply opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(2,132,199,0.15) 25%, transparent 25%, transparent 75%, rgba(2,132,199,0.15) 75%),
                linear-gradient(45deg, rgba(2,132,199,0.15) 25%, transparent 25%, transparent 75%, rgba(2,132,199,0.15) 75%)
              `,
              backgroundSize: '4px 4px',
              backgroundPosition: '0 0, 2px 2px',
            }}
          />
        </div>
      </div>
    </div>
  );

  if (embedded) return content;

  return (
    <section className="border border-neutral-200 bg-white landing-rule-grid">
      <div className="mx-auto max-w-7xl">{content}</div>
    </section>
  );
}
