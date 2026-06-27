'use client';

import HeroArticleDemo from '@/components/HeroArticleDemo';
import HeroMarquee from '@/components/HeroMarquee';
import PixelDitherGradient from '@/components/ui/PixelDitherGradient';

export default function WonderdeskDashboardSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="landing-grid-column bg-white">
        <div className="landing-grid-pad border-b border-slate-200 py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="font-silkscreen text-xs uppercase tracking-[0.22em] text-wonder sm:text-sm">
              See it in action
            </p>
            <h2 className="mt-3 font-display text-2xl font-normal leading-tight text-slate-900 sm:text-3xl md:text-4xl">
              Chat, tasks, and doc drafts in one workspace
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              When a PR ships, Wonderdesk drafts the missing article, refreshes related docs, and routes
              support follow-ups—so your team ships help content with the same rhythm as product releases.
            </p>
          </div>

          <div className="mt-8 max-w-4xl">
            <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-[11px]">
              Connects with
            </p>
            <HeroMarquee />
          </div>

          <div className="relative mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 md:mt-10">
            <PixelDitherGradient />
            <div className="relative z-10 p-2 sm:p-4 md:p-5">
              <HeroArticleDemo embedded scenarioId="docs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
