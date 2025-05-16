
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
       className="group justify-center grid mb-8 w-full" 
       title="View Wonder Sites on Product Hunt">
      <Image 
        src="/producthunt-badge.svg" // Move SVG to static file
        width={192}
        height={37}
        alt="Product Hunt Badge"
        priority // Mark as priority for immediate loading
      />
    </a>
  </div>
);

const NotionLogo = () => (
  <div className="w-14 h-14 mr-2 flex items-center justify-center rounded">
    <Image 
      src="/notion-logo.svg" // Move SVG to static file
      width={48}
      height={48}
      alt="Notion Logo"
      priority // Mark as priority for immediate loading
    />
  </div>
);

// Lightweight Features component
const Features = React.memo(() => (
  <div className="flex flex-col font-bold items-center justify-center space-x-2 space-y-1 text-sm opacity-60 sm:flex-row sm:space-y-0 mt-6">
    {["7-day trial", "Free Design Service", "Free Data Migration"].map((feature, index) => (
      <div key={index} className="flex items-center justify-start">
        <Check className="w-4 h-4 mr-2 text-slate-900" />
        {feature}
      </div>
    ))}
  </div>
));

interface HeroProps {
  onCategorySelect?: (category: string) => void;
}

export default function Hero({ onCategorySelect }: HeroProps) {
  // Simplified state management - only what's necessary for initial render
  const [index, setIndex] = useState(0); // For rotating words
  const [isHovered, setIsHovered] = useState(false);
  
  const words = ["directory", "blog", "job board", "helpdesk", "documentation"];

  // Rotating words effect - unchanged but isolated
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

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
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pb-12">
          {/* Critical path content - always render immediately */}
          <div className="text-center px-4 sm:px-6 lg:px-8 grid">
            <ProductHuntBadge />

            <h1 className="h1 mb-8 text-center leading-tight font-funneldisplay tracking-loose text-slate-700 font-normal">
              Build websites with just a
              {" "}
              <span className="font-bungee block font-normal text-gray-800 my-2">
                <div className="inline-flex items-center justify-center ml-1 px-4">
                  <NotionLogo />
                  <b className="text-gray-800">Notion Database</b>
                </div>
              </span>{" "}
              {/* Rotating word animation - simplified to render immediately with minimal animation */}
              <motion.span
                key={words[index]}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                className="text-orange-600 inline-block"
              >
                {words[index]}
              </motion.span>
            </h1>

            <p className="text-xl text-slate-900 mb-8 font-lato max-w-2xl m-auto">
              <span className="text-slate-900"><b>Build Production-ready</b> apps in hours setup </span>{" "}
              {["Listings", "SEO", "Custom Domains", "Payments"].map((category, idx) => (
                <React.Fragment key={category}>
                  {idx > 0 && ", "}
                  <button
                    className="text-slate-800 border-b border-orange-600 hover:text-orange-500 cursor-pointer font-bold"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </button>
                </React.Fragment>
              ))}
              {" "}
              – without any technical skills.
            </p>
          </div>

          {/* CTA Buttons - simplified animations for immediate rendering */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-8 items-center justify-center">
            <Link
              href="https://app.wondersites.co?ref=herolanding"
              className="flex items-center justify-center py-3 px-6 bg-orange-600 text-white rounded-md font-medium hover:bg-orange-700 transition-colors w-full sm:w-auto relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative overflow-hidden mr-2 h-5">
                <div
                  className="transition-transform duration-150"
                  style={{
                    transform: isHovered ? 'translateY(-100%)' : 'translateY(0)'
                  }}
                >
                  Create a free site
                </div>
                <div
                  className="absolute top-0 left-0 w-full text-center transition-transform duration-150"
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
              className="btn-sm text-black border border-gray-600 bg-slate-100 hover:bg-slate-800 hover:text-white ml-3 flex items-center justify-between px-4 py-2 rounded-md transition duration-150 ease-in-out group"
            >
              <div className="flex items-center justify-between w-full">
                Book a Demo
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Features section - immediate rendering */}
          <Features />

          {/* Deferred loading TabImageHotspots with improved fallback */}
          <div className="mt-12">
            <Suspense fallback={
              <div className="w-full max-w-4xl mx-auto space-y-6 py-8">
                {/* Static placeholder instead of animated skeleton */}
                <div className="flex space-x-4 justify-center">
                  <div className="px-4 py-2 bg-gray-200 rounded">Feature 1</div>
                  <div className="px-4 py-2 bg-gray-300 rounded font-medium">Feature 2</div>
                  <div className="px-4 py-2 bg-gray-200 rounded">Feature 3</div>
                </div>
                {/* Static image placeholder */}
                <div className="flex justify-center">
                  <Image 
                    src="/placeholder-screenshot.jpg" 
                    width={800} 
                    height={450} 
                    alt="Loading preview"
                  />
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
