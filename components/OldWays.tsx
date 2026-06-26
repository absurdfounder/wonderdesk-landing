'use client';

import { useEffect, useRef, useState } from 'react';
import OldWaysVisual from './oldways/OldWaysVisuals';

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
      'Write content that satisfies your readers. Wonder sets meta tags, canonical links, structured schema markup, and edge delivery — with easy overrides when you need them.',
  },
  {
    tag: 'Paid Subscribers',
    title: 'Membership for',
    highlight: 'paid subscribers.',
    description:
      'Style your site with no-code themes and designer templates. Gate premium articles, sell memberships, and customize everything inside Wonder without writing code.',
  },
  {
    tag: 'In-built',
    title: 'In-built',
    highlight: 'analytics',
    description:
      'See page views, visitors, referrers, and clicks across all your sites. Find out where readers discover your content, which links get clicked, and which posts perform best.',
  },
  {
    tag: 'AI support & suggestions',
    title: 'Intelligent assistance',
    highlight: 'for your users.',
    description:
      'Create AI agents for support, suggestions, sales, or anything else. Wonder answers from your docs, suggests next steps, and keeps humans in the loop.',
  },
  {
    tag: 'Integrates with',
    title: 'Integrates with',
    highlight: 'your existing apps',
    description:
      'Connect Slack for notifications, embed live chat from Intercom, HubSpot, Crisp, and more. Need a custom integration? Wonder has you covered.',
  },
];

export default function OldWays() {
  const [cardTransforms, setCardTransforms] = useState<Transform[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const calculateTransforms = () => {
      const isMobile = window.innerWidth < 1024;
      const stickyTop = window.innerHeight * 0.15;
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
      <div
        className="landing-grid-column bg-white"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(186, 183, 195, 0.06) 2px, rgba(186, 183, 195, 0.06) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(186, 183, 195, 0.06) 2px, rgba(186, 183, 195, 0.06) 4px)',
          backgroundSize: '100% 20px, 20px 100%',
        }}
      >
        <div className="landing-grid-pad py-12 md:py-20">
          <div className="relative space-y-5 md:space-y-6" style={{ perspective: '1000px' }}>
            {cards.map((card, index) => {
              const transform = cardTransforms[index] || { scale: 1, opacity: 1, y: 0 };

              return (
                <div
                  key={card.tag}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="lg:sticky lg:top-[14vh]"
                  style={{ zIndex: cards.length + index }}
                >
                  <article
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ring-1 ring-black/[0.03]"
                    style={{
                      transform: `scale(${transform.scale}) translateY(${transform.y}px)`,
                      opacity: transform.opacity,
                      transformOrigin: 'center top',
                      transition:
                        'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    <div className="grid lg:grid-cols-2 lg:items-stretch">
                      <div className="flex flex-col justify-center py-8 sm:py-10 lg:py-12 lg:pr-4">
                        <span className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">
                          {card.tag}
                        </span>
                        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
                          {card.title}{' '}
                          <span className="font-normal text-orange-600">{card.highlight}</span>
                        </h3>
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                          {card.description}
                        </p>
                      </div>

                      <div className="relative min-h-[240px] border-t border-slate-200 bg-gradient-to-br from-slate-50 to-white lg:min-h-[320px] lg:border-l lg:border-t-0">
                        <OldWaysVisual index={index} />
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
