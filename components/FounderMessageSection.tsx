'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import PixelButton from '@/components/ui/PixelButton';

const getCalApiImport = () => import('@calcom/embed-react').then((mod) => mod.getCalApi);

type FounderMessageSectionProps = {
  embedded?: boolean;
};

export default function FounderMessageSection({ embedded = false }: FounderMessageSectionProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loadCalApi = async () => {
        try {
          const getCalApi = await getCalApiImport();
          const cal = await getCalApi({ namespace: 'setup-call' });
          cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
        } catch {
          // Cal.com widget failed to load silently
        }
      };

      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        window.requestIdleCallback(loadCalApi);
      } else {
        setTimeout(loadCalApi, 2000);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={embedded ? 'bg-white' : 'pb-8 pt-2 md:pb-16'}>
      <div
        className={
          embedded
            ? 'overflow-hidden border-b border-slate-200 bg-white'
            : 'overflow-hidden border border-slate-100 bg-white'
        }
      >
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div className="relative h-52 w-full shrink-0 overflow-hidden border-b border-slate-200 bg-[#009fbc] sm:h-60 lg:h-auto lg:w-48 lg:min-h-[280px] lg:border-b-0 lg:border-r xl:w-52">
            <Image
              src="/images/founder-portrait.png"
              alt="Vaibhav, founder of Wonder"
              fill
              className="object-cover object-top opacity-90 contrast-[1.12] brightness-[0.88] saturate-0"
              sizes="(max-width: 1024px) 100vw, 208px"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-[#009fbc] mix-blend-color" aria-hidden />
            <div
              className="pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply"
              style={{
                backgroundImage: 'radial-gradient(circle, #003344 0.55px, transparent 0.55px)',
                backgroundSize: '3px 3px',
              }}
              aria-hidden
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6 md:p-7 lg:p-9">
            <p className="font-display text-xl leading-[1.45] tracking-tight text-slate-900 sm:text-xl md:text-[1.65rem] md:leading-[1.35]">
              Every team deserves a{' '}
              <span className="font-semibold text-wonder">self-updating help center</span> that saves hours
              every week on support and docs. That shouldn&apos;t be limited to companies with big content
              teams — so we built Wonder for you, and you can{' '}
              <span className="font-semibold text-wonder">get started free</span>.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-4 md:mt-8">
              <div>
                <p className="font-display text-base font-bold text-slate-900 sm:text-base md:text-lg">
                  Vaibhav
                </p>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Founder, Wonder
                </p>
                <a
                  href="https://twitter.com/absurdfounder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-wonder transition-colors hover:text-wonder-700"
                >
                  @absurdfounder
                </a>
              </div>

              <PixelButton
                size="lg"
                variant="outline"
                tone="dark"
                className="w-full shrink-0 sm:w-auto"
                icon={<ArrowRight className="h-4 w-4" />}
                data-cal-namespace="setup-call"
                data-cal-link="set-meeting/setup-call"
                data-cal-config='{"layout":"month_view"}'
              >
                Talk to founder
              </PixelButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
