'use client';

import HeroArticleDemo from '@/components/HeroArticleDemo';
import HeroMarquee from '@/components/HeroMarquee';
import FernCircleCheckIcon from '@/components/ui/FernCircleCheckIcon';

const TRUST_ITEMS = ['7-day free trial', 'No credit card required', 'Import your existing docs'] as const;

export default function WonderdeskDashboardSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="landing-grid-column bg-white">
        <div className="landing-grid-pad border-b border-slate-200 pb-10 pt-8 md:pb-14 md:pt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className="font-silkscreen text-[10px] font-bold uppercase tracking-[0.18em] text-wonder sm:text-xs">
                Built for your stack
              </p>
              <div className="mt-3 max-w-3xl">
                <HeroMarquee />
              </div>
            </div>

            <ul className="wonder-trust-row shrink-0" aria-label="Product highlights">
              {TRUST_ITEMS.map((item) => (
                <li key={item} className="wonder-trust-row__item">
                  <FernCircleCheckIcon className="wonder-trust-row__check text-wonder" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-8 hidden min-w-0 overflow-hidden sm:mt-10 lg:block">
            <HeroArticleDemo />
          </div>

          <div className="relative mt-8 min-w-0 overflow-hidden lg:hidden">
            <p className="mb-4 text-center text-sm text-slate-500">
              Open on desktop for the full interactive workspace preview.
            </p>
            <HeroArticleDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
