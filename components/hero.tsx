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
          className="landing-grid-pad border-b border-slate-200/60 pb-12 pt-2 sm:pb-14 sm:pt-1 md:pb-12 md:pt-2"
          style={{
            backgroundImage:
              'linear-gradient(rgb(254 254 255), rgb(255 255 255 / 92%), rgb(255 255 255 / 72%)), url(https://dazzling-cat.netlify.app/wondercollectivebanner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-12">
            <div className="min-w-0">
              <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">
                AI help center software
              </p>

              <h1 className="mt-3 font-display text-3xl font-normal leading-[1.12] tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                <span className="block">Self-updating</span>
                <span className="mt-1 block sm:mt-2">
                  <FlippingText words={HERO_FLIP_WORDS} />
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Wonderdesk drafts and updates documentation when your product changes. Review, publish, done.
              </p>

              <div className="mt-6">
                <HeroCTAs primaryHref="https://app.wonderdesk.ai?ref=herolanding" />
              </div>

              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                <li>7-day free trial</li>
                <li>No credit card required</li>
                <li>Import your existing docs</li>
              </ul>

              <div className="mt-6">
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

            <div className="min-w-0 lg:justify-self-end">
              <WonderDocsHeroDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
