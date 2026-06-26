'use client';

import { useEffect, useRef, useState } from 'react';
import OldWaysVisual from './oldways/OldWaysVisuals';
import PixelFramedVisual from './ui/PixelFramedVisual';

const sectionXPadding = 'px-4 sm:px-6 lg:px-8';

interface Transform {
  scale: number;
  opacity: number;
  y: number;
}

const cards = [
  {
    tag: 'No Hosting Hassles',
    title: 'Your content',
    highlight: 'lives inside Notion or Github',
    description:
      'Your work stays in a place you control and love, while Wonder handles the technical parts of publishing it to your website. Focus on creating content — not configs, plugins, downtime, or security.',
  },
  {
    tag: 'Optimized for',
    title: 'Perfected for',
    highlight: 'SEO',
    description:
      'All you have to do is write good content that satisfies the needs of your readers. Wonder sets meta tags, canonical links, structured schema markup, and edge delivery — with easy overrides when you need them.',
  },
  {
    tag: 'Paid Subscribers',
    title: 'Membership for',
    highlight: 'paid subscribers.',
    description:
      'Style the look and feel of your site with no-code themes and designer templates. Gate premium articles, sell memberships, and customize everything inside Wonder without writing code.',
  },
  {
    tag: 'In-built',
    title: 'In-built',
    highlight: 'analytics',
    description:
      'See your page views, visitors, referrers, clicks, and much more for all of your websites. Wonder provides inbuilt analytics to help you find where readers discover your content and which posts perform best.',
  },
  {
    tag: 'AI support & suggestions',
    title: 'Intelligent assistance',
    highlight: 'for your users.',
    description:
      'Create AI agents for support, suggestions, sales, or anything else. Because it\'s 2025 and AI is cheap — let Wonder do the heavy lifting so you can focus on what matters.',
  },
  {
    tag: 'Integrates with',
    title: 'Integrates with',
    highlight: 'your existing apps',
    description:
      'Wonder integrates with the tools you already use. Connect Slack for notifications, embed live chat from Intercom, HubSpot, Crisp, and more. Need your app connected? We got you covered.',
  },
];

export default function OldWays() {
  const [cardTransforms, setCardTransforms] = useState<Transform[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const calculateTransforms = () => {
      const isMobile = window.innerWidth < 1024;
      const stickyTop = window.innerHeight * 0.14;
      const transforms: Transform[] = [];

      if (isMobile) {
        setCardTransforms(cards.map(() => ({ scale: 1, opacity: 1, y: 0 })));
        return;
      }

      let activeCardIndex = 0;
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        if (card.getBoundingClientRect().top <= stickyTop + 10) activeCardIndex = index;
      });

      cardRefs.current.forEach((card, index) => {
        if (!card) {
          transforms.push({ scale: 1, opacity: 1, y: 0 });
          return;
        }

        const cardsOnTop = Math.max(0, activeCardIndex - index);
        if (cardsOnTop > 0) {
          transforms.push({
            scale: Math.max(0.94, 1 - 0.02 * cardsOnTop),
            opacity: Math.max(0.55, 1 - 0.1 * cardsOnTop),
            y: -6 * cardsOnTop,
          });
        } else {
          transforms.push({ scale: 1, opacity: 1, y: 0 });
        }
      });

      setCardTransforms(transforms);
    };

    calculateTransforms();

    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(calculateTransforms);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateTransforms);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateTransforms);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="relative bg-white">
      <div className="landing-grid-column bg-white">
        <div className="relative pt-8 pb-6 sm:pt-12 sm:pb-10 md:pb-14">
          <div className="relative space-y-4 sm:space-y-5 md:space-y-6 p-6 px-6" style={{ perspective: '1000px' }}>
        {cards.map((card, index) => {
          const transform = cardTransforms[index] || { scale: 1, opacity: 1, y: 0 };

          return (
            <div
              key={card.tag}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="lg:sticky lg:top-[14vh] lg:pb-16"
              style={{ zIndex: cards.length + index }}
            >
              <article
                className="relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 will-change-transform"
                style={{
                  transform: `scale(${transform.scale}) translateY(${transform.y}px)`,
                  opacity: transform.opacity,
                  transformOrigin: 'center top',
                  transition:
                    'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                <div className="grid lg:grid-cols-2 lg:items-stretch">
                  <div
                    className={`${sectionXPadding} flex flex-col justify-center border-b border-slate-200 py-8 sm:py-10 md:py-12 lg:border-b-0 lg:py-14`}
                  >
                    <span className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">
                      {card.tag}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-medium leading-snug tracking-tight text-balance text-slate-900 sm:mt-5 sm:text-2xl lg:text-[1.75rem] lg:leading-[1.2]">
                      {card.title}{' '}
                      <span className="font-normal text-orange-600">{card.highlight}</span>
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-[15px] sm:leading-7">
                      {card.description}
                    </p>
                  </div>

                  <div className="relative min-h-[320px] border-slate-200 sm:min-h-[380px] lg:min-h-[500px] lg:border-l lg:rounded-r-xl">
                    <PixelFramedVisual bare>
                      <OldWaysVisual index={index} />
                    </PixelFramedVisual>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
          </div>
        </div>
      </div>
    </section>
  );
}
