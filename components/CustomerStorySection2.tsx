'use client';

import Image from 'next/image';
import LandingMissionTag from './landing/LandingMissionTag';

type CustomerStorySection2Props = {
  embedded?: boolean;
};

export default function CustomerStorySection2({ embedded = false }: CustomerStorySection2Props) {
  const content = (
    <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
      <div className="flex flex-col justify-center gap-6 border-b border-slate-200 py-12 lg:order-2 lg:border-b-0 lg:border-l lg:py-16 lg:pl-8">
        <LandingMissionTag index="08" label="Customer story" />
        <blockquote className="landing-display text-2xl font-semibold leading-snug text-slate-900 lg:text-3xl">
          &ldquo;We&apos;re saving at least 20 hours/mo which frees me up to work on more impactful tasks.&rdquo;
        </blockquote>
        <div className="flex flex-col gap-1">
          <div className="font-medium text-slate-900">Alex Moreno</div>
          <div className="text-sm text-slate-500">Founder, HelpNest</div>
        </div>
      </div>
      <div className="relative min-h-[280px] overflow-hidden bg-sky-50 lg:order-1 lg:min-h-0">
        <div className="relative aspect-[5/3] lg:aspect-auto lg:h-full lg:min-h-[360px]">
          <Image
            src="https://dazzling-cat.netlify.app/AlexB-Cust.png"
            alt="Alex Moreno"
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
