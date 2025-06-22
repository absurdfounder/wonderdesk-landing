'use client';

import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // Use Next.js Image for optimization

// Lazy load the TabImageHotspots component
const TabImageHotspots = lazy(() => import('./tabed_examples'));

// Defer non-critical Cal.com widget import
const getCalApiImport = () => import("@calcom/embed-react").then(mod => mod.getCalApi);

// Optimized SVG components using Next.js Image for better loading
const ProductHuntBadge = () => (
  <div className="rounded flex items-center justify-center">
    <a href="https://www.producthunt.com/posts/wonder-1999?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-wonder-2" 
       target="_blank" 
       className="group justify-center grid mb-4 sm:mb-6 md:mb-8 w-full" 
       title="View Wonder Sites on Product Hunt">
      <Image 
        src="https://dazzling-cat.netlify.app/producthunt.svg" // Using the provided URL
        width={192}
        height={37}
        alt="Product Hunt Badge"
        priority // Mark as priority for immediate loading
        className="w-40 h-auto sm:w-44 md:w-48"
      />
    </a>
  </div>
);

const NotionLogo = () => (
  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mr-1 sm:mr-2 flex items-center justify-center rounded">
    <Image 
      src="https://dazzling-cat.netlify.app/notionicon.svg" // Using the provided URL
      width={48}
      height={48}
      alt="Notion Logo"
      priority // Mark as priority for immediate loading
      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
    />
  </div>
);

// Lightweight Features component
const Features = React.memo(() => (
  <div className="flex flex-col font-bold items-center justify-center space-y-2 sm:space-y-1 text-xs sm:text-sm opacity-60 sm:flex-row sm:space-x-2 sm:space-y-0 mt-4 sm:mt-6 px-4">
    {["7-day trial", "Free Design Service", "Free Data Migration"].map((feature, index) => (
      <div key={index} className="flex items-center justify-start">
        <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-slate-900 flex-shrink-0" />
        <span className="text-center sm:text-left">{feature}</span>
      </div>
    ))}
  </div>
));

interface HeroProps {
  onCategorySelect?: (category: string) => void;
}

export default function Hero({ onCategorySelect }: HeroProps) {
  // Simplified state - removed index since we no longer need rotating words
  const [isHovered, setIsHovered] = useState(false);
  
  // Removed words array and rotation effect since they're no longer needed

  // Defer Cal.com widget loading to well after initial render
  useEffect(() => {
    // Only load Cal.com after a delay to prioritize core content rendering
    const timer = setTimeout(() => {
      const loadCalApi = async () => {
        try {
          const getCalApi = await getCalApiImport();
          const cal = await getCalApi({ "namespace": "setup-call" });
          cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        } catch (error) {
          console.error("Failed to load Cal.com widget:", error);
        }
      };
      
      // Use requestIdleCallback for low-priority loading
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        window.requestIdleCallback(loadCalApi);
      } else {
        setTimeout(loadCalApi, 2000); // Longer fallback delay
      }
    }, 1500); // Delay initial load attempt
    
    return () => clearTimeout(timer);
  }, []);

  // Optimized category click handler
  const handleCategoryClick = (category: string) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }

    const templateSection = document.getElementById('template-section');
    if (templateSection) {
      templateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="pt-6 sm:pt-8 md:pt-12 pb-8 sm:pb-10 md:pb-12">
          {/* Critical path content - always render immediately */}
          <div className="text-center px-2 sm:px-4 md:px-6 lg:px-8 grid">
            <ProductHuntBadge />

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:h1 mb-2 sm:mb-2 md:mb-2 text-center leading-tight font-funneldisplay tracking-loose text-slate-700 font-normal">
              SEO-Ready Content sites using just a 
              {" "}
              <span className="font-bungee block font-normal text-gray-800 my-1 sm:my-2">
                <div className="inline-flex items-center justify-center ml-0 sm:ml-1 px-2 sm:px-4 flex-wrap sm:flex-nowrap">
                  <div className="hidden md:block">
                    <NotionLogo />
                  </div>
                  <b className="text-gray-800 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Notion Database</b>
                </div>
              </span>{" "}
              {/* Removed the rotating words animation as requested */}
            </h1>

            <p className="text-base sm:text-md md:text-lg text-slate-900 mb-2 sm:mb-2 font-lato max-w-2xl m-auto px-2 sm:px-0 leading-relaxed" style={{ textWrap: 'balance' }}>
              <span className="text-slate-900"><b>Build Production-ready</b> apps in hours setup </span>{" "}
              <span className="inline-flex flex-wrap gap-x-1 gap-y-1 justify-center items-center">
                {["Listings", "SEO", "Custom Domains", "Payments"].map((category, idx) => (
                  <React.Fragment key={category}>
                    {idx > 0 && <span className="hidden sm:inline">, </span>}
                    <button
                      className="text-slate-800 border-b border-orange-600 hover:text-orange-500 cursor-pointer font-bold transition-colors duration-200 px-1 py-0.5 sm:px-0 sm:py-0"
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </button>
                    {idx < 3 && <span className="sm:hidden">,</span>}
                  </React.Fragment>
                ))}
              </span>
              {" "}
              <span className="block sm:inline mt-1 sm:mt-0">– without any technical skills.</span>
            </p>
          </div>

          {/* CTA Buttons - simplified animations for immediate rendering */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 mb-2 sm:mb-2 items-center justify-center px-4 sm:px-0">
            <Link
              href="https://app.wondersites.co?ref=herolanding"
              className="flex items-center justify-center py-3 sm:py-3 px-6 sm:px-6 bg-orange-600 text-white rounded-md font-medium hover:bg-orange-700 transition-colors w-full sm:w-auto relative text-sm sm:text-base min-h-[48px] sm:min-h-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative overflow-hidden mr-2 h-5 sm:h-5">
                <div
                  className="transition-transform duration-150 whitespace-nowrap"
                  style={{
                    transform: isHovered ? 'translateY(-100%)' : 'translateY(0)'
                  }}
                >
                  Create a free site
                </div>
                <div
                  className="absolute top-0 left-0 w-full text-center transition-transform duration-150 whitespace-nowrap"
                  style={{
                    transform: isHovered ? 'translateY(0)' : 'translateY(100%)'
                  }}
                >
                  in just 15 mins.
                </div>
              </div>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>

            <button
              data-cal-namespace="setup-call"
              data-cal-link="wondersites/setup-call"
              data-cal-config='{"layout":"month_view"}'
              className="text-black border border-gray-600 bg-slate-100 hover:bg-slate-800 hover:text-white flex items-center justify-center px-4 py-2.5 sm:py-2.5 rounded-md transition duration-150 ease-in-out group w-full sm:w-auto text-sm sm:text-base min-h-[48px] sm:min-h-auto sm:ml-0"
            >
              <div className="flex items-center justify-center w-full">
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Features section - immediate rendering */}
          <Features />

          {/* Deferred loading TabImageHotspots with improved fallback */}
          <div className="mt-8 sm:mt-10 md:mt-12 px-2 sm:px-0">
            <Suspense fallback={
              <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6 py-6 sm:py-8">
                {/* Static placeholder instead of animated skeleton */}
                <div className="flex flex-wrap sm:flex-nowrap space-x-2 sm:space-x-4 justify-center gap-y-2 sm:gap-y-0">
                  <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-200 rounded text-sm">Feature 1</div>
                  <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-300 rounded font-medium text-sm">Feature 2</div>
                  <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-200 rounded text-sm">Feature 3</div>
                </div>
                {/* Static image placeholder */}
                <div className="flex justify-center">
                  <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                    <span className="text-gray-500 text-sm sm:text-base">Loading preview...</span>
                  </div>
                </div>
              </div>
            }>
              <TabImageHotspots />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
