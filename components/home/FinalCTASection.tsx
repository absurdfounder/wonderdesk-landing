'use client';

import { useEffect } from 'react';
import HeroCTAs from '@/components/ui/HeroCTAs';

const getCalApiImport = () => import('@calcom/embed-react').then((mod) => mod.getCalApi);

export default function FinalCTASection() {
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
    <section className="bg-white">
      <div className="landing-grid-column">
        <div className="landing-grid-pad py-14 text-center md:py-20">
          <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">
            The AI-native help center
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-2xl font-normal text-slate-800 sm:text-3xl md:text-4xl">
            Never write another help article.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            With Wonder, the help center that never goes out of date. Sign up today and let Wonder draft your
            first few articles.
          </p>
          <HeroCTAs className="mt-8" align="center" />
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <li>7-day free trial</li>
            <li>No credit card</li>
            <li>Migrate in one click</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
