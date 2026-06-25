'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, FileImage, Smile } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HeroArticleDemo from './HeroArticleDemo';
import LandingMissionTag from './landing/LandingMissionTag';

const getCalApiImport = () => import("@calcom/embed-react").then(mod => mod.getCalApi);

const ProductHuntBadge = () => (
  <div className="rounded flex items-center justify-center">
    <a
      href="https://www.producthunt.com/posts/wonder-1999?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-wonder-2"
      target="_blank"
      className="group mb-6 grid w-full justify-center sm:mb-8"
      title="View Wonder Sites on Product Hunt"
    >
      <Image
        src="https://dazzling-cat.netlify.app/producthunt.svg"
        width={192}
        height={37}
        alt="Product Hunt Badge"
        priority
        className="h-auto w-40 sm:w-44 md:w-48"
      />
    </a>
  </div>
);

const Features = React.memo(() => {
  const features = [
    { name: "Our AI agent writes your help docs", icon: <Sparkles className="h-5 w-5 text-sky-500" /> },
    { name: "takes annotated screenshots for you", icon: <FileImage className="h-5 w-5 text-blue-500" /> },
    { name: "and responds to your customers while you sleep", icon: <Smile className="h-5 w-5 text-sky-400" /> },
  ];

  return (
    <ul className="flex flex-col gap-3">
      {features.map((feature) => (
        <li key={feature.name} className="flex items-center gap-2 text-sm text-slate-600 sm:text-base">
          {feature.icon}
          <span className="underline decoration-dashed decoration-slate-200 underline-offset-4">
            {feature.name}
          </span>
        </li>
      ))}
    </ul>
  );
});

Features.displayName = 'HeroFeatures';

interface HeroProps {
  onCategorySelect?: (category: string) => void;
}

export default function Hero({ onCategorySelect }: HeroProps) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const loadCalApi = async () => {
        try {
          const getCalApi = await getCalApiImport();
          const cal = await getCalApi({ namespace: "setup-call" });
          cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
        } catch (error) {
          console.error("Failed to load Cal.com widget:", error);
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
    <section className="relative overflow-hidden landing-fade-up">
      <div className="pb-12 pt-2 sm:pb-16 md:pb-20">
        <div className="mb-6">
          <LandingMissionTag index="01" label="AI help center" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8 xl:gap-10">
          <div className="flex-1 text-left lg:max-w-[48%]">
            <ProductHuntBadge />

            <h1 className="landing-display mb-4 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl md:text-[2.75rem] lg:max-w-none">
              <span className="block text-lg font-normal text-slate-500 sm:text-xl md:text-2xl">
                Hello, I&apos;m <span className="text-slate-800">Wonder.</span>
              </span>
              <span className="mt-2 block">
                Automated way to keep your{' '}
                <b className="font-semibold">blog</b> &{' '}
                <b className="font-semibold">help center</b>{' '}
                <span className="landing-accent-text">up to date.</span>
              </span>
            </h1>

            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:gap-4">
              <Link
                href="https://app.wonderdesk.ai?ref=herolanding"
                className="landing-btn-primary w-full sm:w-auto"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative overflow-hidden">
                  {isHovered ? 'In just 15 mins' : 'Get started free'}
                </span>
              </Link>

              <button
                data-cal-namespace="setup-call"
                data-cal-link="set-meeting/setup-call"
                data-cal-config='{"layout":"month_view"}'
                className="landing-btn-secondary group w-full sm:w-auto"
              >
                Book a demo
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            <div className="mt-8">
              <Features />
            </div>
          </div>

          <div className="mt-10 w-full flex-1 lg:mt-0 lg:max-w-[52%] lg:pl-2">
            <div className="landing-card overflow-hidden shadow-[0_20px_50px_rgba(2,132,199,0.08)]">
              <HeroArticleDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
