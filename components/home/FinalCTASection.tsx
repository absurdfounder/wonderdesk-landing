'use client';

import { useEffect } from 'react';
import Image from 'next/image';
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
        <div
          className="landing-grid-pad relative overflow-hidden py-12 md:py-16 lg:py-20"
          style={{
            backgroundImage:
              'linear-gradient(rgb(255 255 255 / 87%), rgb(187 229 255 / 76%)), url(https://dazzling-cat.netlify.app/wondercollectivebanner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className="pointer-events-none absolute bottom-0 right-0 hidden translate-x-6 translate-y-4 lg:block xl:translate-x-0 xl:translate-y-8">
            <Image
              alt="Wonder desk illustration"
              width={560}
              height={560}
              className="h-auto w-[min(42vw,34rem)] max-w-none"
              src="https://dazzling-cat.netlify.app/wonderdesktop.png"
              priority={false}
            />
          </div>

          <div className="relative z-10 max-w-xl">
            <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">
              Start with Wonderdesk
            </p>
            <h2 className="mt-3 font-display text-2xl font-normal leading-tight text-slate-900 sm:text-3xl md:text-4xl">
              Launch a help center that stays up to date
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              Try Wonderdesk free for 7 days. Connect your product, review AI-drafted documentation, and publish
              a knowledge base your customers can trust.
            </p>

            <HeroCTAs className="mt-8" align="start" primaryHref="https://app.wonderdesk.ai?ref=final-cta" />

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
              <li>7-day free trial</li>
              <li>No credit card required</li>
              <li>Import your existing docs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
