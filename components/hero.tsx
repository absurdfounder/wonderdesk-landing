'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroCTAs from './ui/HeroCTAs';
import FlippingText from './ui/FlippingText';
import WonderDocsHeroDemo from './WonderDocsHeroDemo';

const HERO_FLIP_WORDS = [
  'help docs',
  'customer queries',
  'knowledge base',
  'changelogs',
  'support articles',
];

const getCalApiImport = () => import('@calcom/embed-react').then((mod) => mod.getCalApi);

interface HeroProps {
  onCategorySelect?: (category: string) => void;
}

export default function Hero(_props: HeroProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loadCalApi = async () => {
        try {
          const getCalApi = await getCalApiImport();
          const cal = await getCalApi({ namespace: 'setup-call' });
          cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
        } catch (error) {
          console.error('Failed to load Cal.com widget:', error);
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
    <section className="relative overflow-hidden site-header-clear">
      <div className="landing-grid-column">
        <div
          className="landing-grid-pad pb-12 sm:pb-16 md:pb-10 pt-2 sm:pt-1 md:pt-2"
          style={{
            backgroundImage:
              'linear-gradient(rgb(254 254 255), rgb(255 255 255 / 89%), rgb(255 255 255 / 48%)), url(https://dazzling-cat.netlify.app/wondercollectivebanner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-4 xl:gap-6">
            <div className="flex-1 text-left lg:max-w-[48%]">
              <div className="px-2 sm:px-4 md:px-6 lg:px-0">
                <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">
                  AI help center software
                </p>

                <h1 className="mt-3 max-w-3xl font-display text-3xl font-normal leading-[1.12] tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:max-w-none">
                  <span className="block">Self-updating</span>
                  <span className="mt-1 block sm:mt-2">
                    <FlippingText words={HERO_FLIP_WORDS} />
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Wonderdesk drafts and updates documentation when your product changes. Review, publish, done.
                </p>
              </div>

              <div className="mt-6 px-4 sm:px-0 lg:px-0">
                <HeroCTAs primaryHref="https://app.wonderdesk.ai?ref=herolanding" />
              </div>

              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 px-4 text-sm text-slate-500 sm:px-0 lg:px-0">
                <li>7-day free trial</li>
                <li>No credit card required</li>
                <li>Import your existing docs</li>
              </ul>

              <div className="mt-6 px-4 sm:px-0 lg:px-0">
                <Link
                  href="https://www.producthunt.com/posts/wonder-1999?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-wonder-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Wonder on Product Hunt"
                >
                  <Image
                    src="https://dazzling-cat.netlify.app/producthunt.svg"
                    width={160}
                    height={31}
                    alt="Product Hunt Badge"
                    className="h-auto w-36 opacity-80 transition-opacity hover:opacity-100"
                  />
                </Link>
              </div>
            </div>

            <div className="mt-10 w-full flex-1 lg:mt-0 lg:max-w-[52%] lg:pl-4">
              <WonderDocsHeroDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
