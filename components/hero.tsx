'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, FileImage, Smile } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import HeroArticleDemo from './HeroArticleDemo';

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
        src="https://dazzling-cat.netlify.app/producthunt.svg"
        width={192}
        height={37}
        alt="Product Hunt Badge"
        priority
        className="w-40 h-auto sm:w-44 md:w-48"
      />
    </a>
  </div>
);

// Features component with Lucide icons
const Features = React.memo(() => {
  const features = [
    { 
      name: "Our AI agent writes your help docs", 
      icon: <Sparkles className="w-5 h-5 text-lime-500" />
    },
    { 
      name: "takes annotated screenshots for you", 
      icon: <FileImage className="w-5 h-5 text-sky-500" />
    },
    { 
      name: "and responds to your customers while you sleep", 
      icon: <Smile className="w-5 h-5 text-amber-500" />
    }
  ];

  return (
    <ul className="flex flex-col gap-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          {feature.icon}
          <span className="underline cursor-pointer decoration-dashed underline-offset-4 decoration-neutral-200">
            {feature.name}
          </span>
        </li>
      ))}
    </ul>
  );
});

Features.displayName = 'Features';

interface HeroProps {
  onCategorySelect?: (category: string) => void;
}

export default function Hero({ onCategorySelect }: HeroProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [revealStage, setRevealStage] = useState(0);

  // Staggered reveal timing
  useEffect(() => {
    const timings = [
      300,   // Stage 1: "Hello,"
      600,   // Stage 2: "I'm"
      900,   // Stage 3: "Wonder."
      1400,  // Stage 4: Headline + rest of content
    ];

    const timeouts: NodeJS.Timeout[] = [];
    
    timings.forEach((delay, index) => {
      const timeout = setTimeout(() => {
        setRevealStage(index + 1);
      }, delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Defer Cal.com widget loading
  useEffect(() => {
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

      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        window.requestIdleCallback(loadCalApi);
      } else {
        setTimeout(loadCalApi, 2000);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleCategoryClick = (category: string) => {
    if (onCategorySelect) {
      onCategorySelect(category);
    }

    const templateSection = document.getElementById('template-section');
    if (templateSection) {
      templateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants for words
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  // Animation for content sections
  const contentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="pt-2 sm:pt-1 md:pt-2 pb-12 sm:pb-16 md:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-4 xl:gap-6">
            {/* Left: text content */}
            <div className="flex-1 lg:max-w-[48%] text-left">
              <div className="px-2 sm:px-4 md:px-6 lg:px-0">
                {/* Product Hunt Badge - shows with headline */}
                <motion.div 
                  className="flex justify-start"
                  initial="hidden"
                  animate={revealStage >= 4 ? "visible" : "hidden"}
                  variants={contentVariants}
                >
                  <ProductHuntBadge />
                </motion.div>

                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl max-w-3xl lg:max-w-none mb-2 sm:mb-2 md:mb-2 leading-tight font-funneldisplay tracking-loose text-slate-700 font-normal">
                  {/* Hello, I'm Wonder. - word by word */}
                  <div className="block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    <motion.span 
                      className="inline-block opacity-50"
                      initial="hidden"
                      animate={revealStage >= 1 ? "visible" : "hidden"}
                      variants={wordVariants}
                    >
                      Hello,
                    </motion.span>{" "}
                    <motion.span 
                      className="inline-block opacity-50"
                      initial="hidden"
                      animate={revealStage >= 2 ? "visible" : "hidden"}
                      variants={wordVariants}
                    >
                      I&apos;m
                    </motion.span>{" "}
                    <motion.span 
                      className="inline-block opacity-50"
                      initial="hidden"
                      animate={revealStage >= 3 ? "visible" : "hidden"}
                      variants={wordVariants}
                    >
                      Wonder.
                    </motion.span>
                  </div>
                  
                  {/* Main headline - appears after greeting */}
                  <motion.span 
                    className="block mt-1 sm:mt-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                    initial="hidden"
                    animate={revealStage >= 4 ? "visible" : "hidden"}
                    variants={contentVariants}
                  >
                    Automated way to keep your <b>blog</b> & <b>help center</b> <span style={{ color: '#009fbc' }}>up to date.</span>
                  </motion.span>
                </h1>
              </div>

              {/* CTA Buttons - appear with headline */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 mb-2 sm:mb-2 items-start justify-start px-4 sm:px-0 lg:px-0"
                initial="hidden"
                animate={revealStage >= 4 ? "visible" : "hidden"}
                variants={contentVariants}
              >
                <Link
                  href="https://app.wonderdesk.ai?ref=herolanding"
                  className="flex items-center justify-start py-3 sm:py-3 px-6 sm:px-6 bg-orange-600 text-white rounded-md font-medium hover:bg-orange-700 transition-colors w-full sm:w-auto relative text-sm sm:text-base min-h-[48px] sm:min-h-auto"
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
                      Get Started for free
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
                  className="text-black border border-gray-600 bg-white hover:bg-slate-800 hover:text-white flex items-center justify-start px-4 py-2.5 sm:py-2.5 rounded-md transition duration-150 ease-in-out group w-full sm:w-auto text-sm sm:text-base min-h-[48px] sm:min-h-auto sm:ml-0"
                >
                  <div className="flex items-center justify-start w-full">
                    <span>Book a Demo</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </motion.div>

              {/* Features - appear with headline */}
              <motion.div 
                className="flex justify-start mt-6"
                initial="hidden"
                animate={revealStage >= 4 ? "visible" : "hidden"}
                variants={contentVariants}
              >
                <Features />
              </motion.div>
            </div>

            {/* Right: interactive article demo - always visible */}
            <div className="flex-1 lg:max-w-[52%] w-full mt-10 lg:mt-0 lg:pl-4">
              <HeroArticleDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}