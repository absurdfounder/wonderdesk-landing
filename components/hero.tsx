'use client';

import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, PlayIcon } from 'lucide-react';
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

// Notion icon component for features section
const NotionIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.887l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.07-1.448-.14-1.962-.794l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
  </svg>
);

// Lightweight Features component with proper icons
const Features = React.memo(() => {
  const features = [
    { name: "Github", icon: <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" /> },
    { name: "Notion", icon: <NotionIcon /> }
  ];

  return (
    <div className="flex flex-col font-bold items-center justify-center space-y-2 sm:space-y-1 text-xs sm:text-sm opacity-60 sm:flex-row sm:space-x-4 sm:space-y-0 mt-4 sm:mt-6 px-4">
      <span className="text-slate-900">Works with</span>
      <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4 items-center">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-center">
            {feature.icon}
            <span className="text-center sm:text-left text-slate-900">{feature.name} as a Database</span>
          </div>
        ))}
      </div>
    </div>
  );
});

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
              SEO-Ready Content sites, Automated.
              {" "}
              <span className="hidden font-bungee block font-normal text-gray-800 my-1 sm:my-2">
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
              <span className="text-slate-900">Turn your <b>Notion or Github</b> into Content Sites in minutes - setup </span>{" "}
              <span className="inline-flex flex-wrap gap-x-1 gap-y-1 justify-center items-center">
                {["Listings", "SEO", "Custom Domains", "Memberships"].map((category, idx) => (
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
                  Get started - free
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
            </Link>

            <button
              data-cal-namespace="setup-call"
              data-cal-link="set-meeting/setup-call"
              data-cal-config='{"layout":"month_view"}'
              className="text-black border border-gray-600 bg-slate-100 hover:bg-slate-800 hover:text-white flex items-center justify-center px-4 py-2.5 sm:py-2.5 rounded-md transition duration-150 ease-in-out group w-full sm:w-auto text-sm sm:text-base min-h-[48px] sm:min-h-auto sm:ml-0"
            >
              <div className="flex items-center justify-center w-full">
                <span>What is Wonder ?</span>
                <PlayIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Features section - immediate rendering with proper icons */}
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