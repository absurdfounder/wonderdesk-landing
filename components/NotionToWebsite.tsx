'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NotionToWebsite() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const features = [
    'Helpdesk update ← support tickets',
    'Blogs published ← using SEO Keywords',
    'Changelogs sync ← GitHub releases',
  ];

  const serviceIcons = [
    [
      { name: 'Intercom', src: 'https://cdn.simpleicons.org/intercom/0081FB' },
      { name: 'Crisp', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUV-x8v0lniCpZjePGZkYY9W6eWWlX5ri03g&s' },
      { name: 'GitHub', src: 'https://cdn.simpleicons.org/github/181717' },
    ],
    [
      { name: 'Ahrefs', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5vaywdFuG5z6bXCerIOhhQbX6oMilV-ypnvkGJkrqeHO5x_D9uXIROTpXKTRHQLXGB_s&usqp=CAU' },
      { name: 'Notion', src: 'https://cdn.simpleicons.org/notion/000000' },
    ],
    [{ name: 'GitHub', src: 'https://cdn.simpleicons.org/github/181717' }],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="bg-white">
      <div className="landing-grid-column">
        <div className="landing-grid-pad py-10 md:py-14">
          <style
            dangerouslySetInnerHTML={{
              __html: `
          @keyframes draw-check {
            from { stroke-dashoffset: 20; }
            to { stroke-dashoffset: 0; }
          }
          .animate-draw-check {
            animation: draw-check 0.8s ease-out;
          }
        `,
            }}
          />

          <span className="mb-2 block font-silkscreen text-xs uppercase tracking-wide text-wonder sm:mb-4 sm:text-sm">
            What&apos;s Wonder?
          </span>

          <h2 className="mt-2 font-display text-2xl font-light leading-tight tracking-loose text-slate-500 sm:text-3xl md:text-4xl">
            Wonder{' '}
            <img
              src="https://dazzling-cat.netlify.app/wonderbadge.png"
              alt=""
              className="inline-block h-8 w-8 align-middle rounded-md sm:h-10 sm:w-10 md:h-12 md:w-12"
            />{' '}
            <span className="font-medium text-slate-900">AI agent</span> solves these
          </h2>

          <div className="mb-8 mt-8 space-y-5 sm:space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature}
                className={`flex flex-wrap items-center gap-3 transition-opacity duration-700 md:flex-nowrap sm:gap-4 ${
                  index === highlightedIndex ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <div
                  className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded border-2 font-bold transition-colors duration-500 sm:h-8 sm:w-8 ${
                    index === highlightedIndex ? 'border-wonder bg-wonder/10' : 'border-slate-300'
                  }`}
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8l3 3 7-7"
                      stroke={index === highlightedIndex ? '#009fbc' : 'transparent'}
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

                <span
                  className={`break-words text-lg transition-colors duration-500 sm:text-xl md:text-2xl lg:text-3xl ${
                    index === highlightedIndex ? 'font-medium text-slate-900' : 'text-slate-500'
                  }`}
                >
                  {feature}
                </span>

                <div className="hidden items-center gap-2 md:flex">
                  <AnimatePresence mode="wait">
                    {index === highlightedIndex &&
                      serviceIcons[index].map((service, idx) => (
                        <motion.div
                          key={`${index}-${idx}`}
                          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                          animate={{ opacity: 1, scale: 1, rotate: 70 }}
                          exit={{ opacity: 0, scale: 0.5, rotate: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: idx * 0.1,
                            ease: 'easeOut',
                          }}
                          className="flex h-12 w-12 items-center justify-center rounded-lg p-2 sm:h-14 sm:w-14 md:h-16 md:w-16"
                        >
                          <img
                            src={service.src}
                            alt={service.name}
                            className="h-full w-full object-contain"
                            style={{ transform: 'rotate(-70deg)' }}
                          />
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          <p className="font-display text-2xl font-light text-slate-500 sm:text-3xl md:text-4xl">Set it. Forget it.</p>
        </div>
      </div>
    </section>
  );
}
