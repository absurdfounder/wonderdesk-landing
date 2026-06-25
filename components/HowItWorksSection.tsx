'use client';

import React, { lazy, Suspense } from 'react';
import Link from 'next/link';
import { Play } from 'lucide-react';
import LandingMissionTag from './landing/LandingMissionTag';

const TabImageHotspots = lazy(() => import('./tabbed_examples'));

type HowItWorksSectionProps = {
  embedded?: boolean;
};

export default function HowItWorksSection({ embedded = false }: HowItWorksSectionProps) {
  const content = (
    <div className="flex flex-col gap-8 md:gap-12">
      <div className="pt-4 pb-2 text-center lg:text-left sm:pt-8">
        <LandingMissionTag index="07" label="How it works" className="mb-4" />
        <h2 className="landing-display text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
          One home for all product knowledge
        </h2>
        <p className="mt-6 max-w-4xl text-base leading-relaxed text-slate-600">
          Your current help center, blog, changelog, and documentation is a constant struggle to maintain. Wonder gives you a fully customizable, SEO-optimized help center that our AI agent automatically keeps in sync with your product.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
          <Link href="https://app.wonderdesk.ai" target="_blank" rel="noopener noreferrer" className="landing-btn-primary">
            Deploy Wonder
          </Link>
          <Link
            href="https://app.wonderdesk.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-btn-secondary"
          >
            <Play className="h-4 w-4" />
            See it live
          </Link>
        </div>
      </div>

      <div className="w-full pb-4 sm:pb-8">
        <Suspense
          fallback={
            <div className="mx-auto w-full max-w-4xl space-y-4 py-6 sm:space-y-6 sm:py-8">
              <div className="flex flex-wrap justify-center gap-2 sm:flex-nowrap sm:space-x-4">
                <div className="rounded-sm bg-slate-100 px-3 py-2 text-sm">Feature 1</div>
                <div className="rounded-sm bg-sky-100 px-3 py-2 text-sm font-medium">Feature 2</div>
                <div className="rounded-sm bg-slate-100 px-3 py-2 text-sm">Feature 3</div>
              </div>
              <div className="flex justify-center">
                <div className="flex aspect-video w-full max-w-xs items-center justify-center rounded-sm border border-slate-200 bg-slate-100 sm:max-w-md md:max-w-2xl lg:max-w-full">
                  <span className="text-sm text-slate-500 sm:text-base">Loading preview...</span>
                </div>
              </div>
            </div>
          }
        >
          <TabImageHotspots />
        </Suspense>
      </div>
    </div>
  );

  if (embedded) {
    return <div className="py-12 md:py-16">{content}</div>;
  }

  return (
    <section className="relative border border-neutral-200 bg-white landing-dot-grid">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{content}</div>
    </section>
  );
}
