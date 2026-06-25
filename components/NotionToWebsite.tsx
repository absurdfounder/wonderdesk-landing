'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingMissionTag from './landing/LandingMissionTag';

export default function NotionToWebsite() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const features = [
    'Helpdesk update ← support tickets', 
    'Blogs published ← using SEO Keywords', 
    'Changelogs sync ← GitHub releases'
  ];

  const serviceIcons = [
    [
      { name: 'Intercom', src: 'https://cdn.simpleicons.org/intercom/0081FB' },
      { name: 'Crisp', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUV-x8v0lniCpZjePGZkYY9W6eWWlX5ri03g&s' },
      { name: 'GitHub', src: 'https://cdn.simpleicons.org/github/181717' }
    ],
    [
      { name: 'Ahrefs', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5vaywdFuG5z6bXCerIOhhQbX6oMilV-ypnvkGJkrqeHO5x_D9uXIROTpXKTRHQLXGB_s&usqp=CAU' },
      { name: 'Notion', src: 'https://cdn.simpleicons.org/notion/000000' }
    ],
    [
      { name: 'GitHub', src: 'https://cdn.simpleicons.org/github/181717' }
    ]
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="py-12 md:py-16">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes draw-check {
            from { stroke-dashoffset: 20; }
            to { stroke-dashoffset: 0; }
          }
          .animate-draw-check {
            animation: draw-check 0.8s ease-out;
          }
        `
      }} />
      
      <div className="max-w-6xl w-full text-left">
        <LandingMissionTag index="02" label="What's Wonder" className="mb-4" />

        <h2 className="landing-display mb-6 mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
          Wonder <img src="https://dazzling-cat.netlify.app/wonderbadge.png" className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm align-middle mx-1" alt="" />{' '}
          <span className="landing-accent-text">AI agent</span>
          {' '}solves these
        </h2>
        
        <div className="space-y-6 sm:space-y-4 mb-8">
          {features.map((feature, index) => (
            <div
              key={feature}
              className={`flex flex-wrap md:flex-nowrap items-center gap-3 sm:gap-4 transition-opacity duration-700 ${
                index === highlightedIndex ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <div className={`w-6 h-6 sm:w-8 sm:h-8 border-2 font-bold rounded-sm flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${
                index === highlightedIndex 
                  ? 'bg-sky-50 border-sky-500' 
                  : ' border-slate-200'
              }`}>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8l3 3 7-7"
                    stroke={index === highlightedIndex ? '#0284c7' : 'transparent'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={index === highlightedIndex ? 'animate-draw-check' : ''}
                    style={{
                      strokeDasharray: '20',
                      strokeDashoffset: index === highlightedIndex ? '0' : '20',
                    }}
                  />
                </svg>
              </div>
              
              <span className={`text-base sm:text-xl md:text-2xl lg:text-3xl transition-colors duration-500 break-words ${
                index === highlightedIndex 
                  ? 'text-slate-900 font-medium' 
                  : 'text-slate-500'
              }`}>
                {feature}
              </span>

              <div className="hidden md:flex gap-2 items-center">
                <AnimatePresence mode="wait">
                  {index === highlightedIndex && serviceIcons[index].map((service, idx) => (
                    <motion.div
                      key={`${index}-${idx}`}
                      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                      animate={{ opacity: 1, scale: 1, rotate: 70 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 0 }}
                      transition={{ 
                        duration: 0.5,
                        delay: idx * 0.1,
                        ease: "easeOut"
                      }}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-lg flex items-center justify-center p-2 sm:p-3"
                    >
                      <img 
                        src={service.src} 
                        alt={service.name}
                        className="w-full h-full object-contain"
                        style={{ transform: 'rotate(-70deg)' }}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
        
        <p className="landing-display mt-8 text-2xl font-semibold text-slate-500 sm:text-3xl">
          Set it. Forget it.
        </p>
      </div>
    </div>
  );
}