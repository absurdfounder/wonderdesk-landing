'use client';

import { useEffect, useRef, useState } from 'react';
import PlatformFeaturesVisual from '@/components/home/PlatformFeaturesVisual';
import type { FeatureVisualId } from '@/components/features/FeatureBlockVisuals';
import type { ProductFeatureVisualId } from '@/components/features/ProductFeatureBlockVisuals';

interface Transform {
  scale: number;
  opacity: number;
  y: number;
}

type PlatformBlock =
  | {
      tag: string;
      title: string;
      highlight: string;
      description: string;
      kind: 'platform';
      visual: FeatureVisualId;
    }
  | {
      tag: string;
      title: string;
      highlight: string;
      description: string;
      kind: 'product';
      visual: ProductFeatureVisualId;
    };

const blocks: PlatformBlock[] = [
  {
    tag: 'Custom domains',
    title: 'Host help docs on',
    highlight: 'your own domain',
    description: 'Use help.yourcompany.com or a /help path so your knowledge base matches your brand.',
    kind: 'platform',
    visual: 'domain',
  },
  {
    tag: 'SEO & AI search',
    title: 'Built for Google and',
    highlight: 'AI search',
    description: 'Clean URLs, metadata, and structure help customers find answers in search engines and AI tools.',
    kind: 'platform',
    visual: 'seo',
  },
  {
    tag: 'Performance',
    title: 'Fast-loading',
    highlight: 'help articles',
    description: 'Quick pages improve search rankings and make it easier for users to get answers.',
    kind: 'platform',
    visual: 'performance',
  },
  {
    tag: 'Analytics',
    title: 'See what users',
    highlight: 'read and search',
    description:
      'Track article views, search terms, and content gaps so you know what to improve in your help center.',
    kind: 'product',
    visual: 'analytics',
  },
  {
    tag: 'Editor',
    title: 'Write and update docs',
    highlight: 'in one editor',
    description: 'Create help articles, changelogs, and guides without switching between tools.',
    kind: 'product',
    visual: 'editor',
  },
  {
    tag: 'Feedback',
    title: 'Collect reader',
    highlight: 'feedback',
    description: 'Ask if articles were helpful and use responses to improve weak documentation over time.',
    kind: 'product',
    visual: 'feedback',
  },
];

export default function PlatformFeaturesSection() {
  const [cardTransforms, setCardTransforms] = useState<Transform[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const calculateTransforms = () => {
      const isMobile = window.innerWidth < 1024;
      const stickyTop = window.innerHeight * 0.14;
      const transforms: Transform[] = [];

      if (isMobile) {
        setCardTransforms(blocks.map(() => ({ scale: 1, opacity: 1, y: 0 })));
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
        <div className="border-b border-slate-200 landing-grid-pad py-10 md:py-12">
          <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">
            Platform features
          </p>
          <h2 className="mt-3 font-display text-2xl font-normal text-slate-800 sm:text-3xl md:text-4xl">
            One platform, fully featured
          </h2>
          <p className="mt-3 max-w-3xl text-base text-slate-600 sm:text-lg md:mt-4">
            Wonderdesk includes AI search, custom domains, analytics, SEO tools, editing, and feedback —
            everything you need to run a modern knowledge base that stays current.
          </p>
        </div>

        <div className="relative pt-8 pb-6 sm:pt-12 sm:pb-10 md:pb-14">
          <div
            className="relative space-y-4 p-6 px-6 sm:space-y-5 md:space-y-6"
            style={{ perspective: '1000px' }}
          >
            {blocks.map((block, index) => {
              const transform = cardTransforms[index] || { scale: 1, opacity: 1, y: 0 };

              return (
                <div
                  key={block.tag}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="lg:sticky lg:top-[14vh] lg:pb-16"
                  style={{ zIndex: blocks.length + index }}
                >
                  <article
                    className="relative overflow-hidden rounded-xl border border-slate-200/50 bg-white shadow-sm will-change-transform"
                    style={{
                      transform: `scale(${transform.scale}) translateY(${transform.y}px)`,
                      opacity: transform.opacity,
                      transformOrigin: 'center top',
                      transition:
                        'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    <div className="platform-feature-card-grid">
                      <div className="platform-feature-card-copy">
                        <span className="font-silkscreen text-[11px] uppercase tracking-[0.12em] text-wonder">
                          {block.tag}
                        </span>
                        <h3 className="mt-3.5 font-display text-[1.75rem] font-medium leading-[1.15] tracking-tight text-balance text-slate-900">
                          {block.title}{' '}
                          <span className="font-normal text-wonder">{block.highlight}</span>
                        </h3>
                        <p className="mt-3 max-w-[17.5rem] text-[15px] leading-6 text-slate-500">
                          {block.description}
                        </p>
                      </div>

                      <div className="relative w-full overflow-hidden lg:rounded-r-xl">
                        {block.kind === 'platform' ? (
                          <PlatformFeaturesVisual kind="platform" visual={block.visual} />
                        ) : (
                          <PlatformFeaturesVisual kind="product" visual={block.visual} />
                        )}
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
