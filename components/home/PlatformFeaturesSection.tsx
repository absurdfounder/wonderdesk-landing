import {
  AnalyticsCard,
  EditorSidebarCard,
} from '@/components/visuals/PrDocsProductCards';
import {
  DomainLiveCard,
  GoogleSerpCard,
} from '@/components/visuals/PrDocsPlatformCards';
import type { ComponentType } from 'react';

type PlatformBlock = {
  tag: string;
  title: string;
  highlight: string;
  description: string;
  Visual: ComponentType;
};

const blocks: PlatformBlock[] = [
  {
    tag: 'Custom domains',
    title: 'Host help docs on',
    highlight: 'your own domain',
    description: 'Use help.yourcompany.com or a /help path so your knowledge base matches your brand.',
    Visual: DomainLiveCard,
  },
  {
    tag: 'SEO & AI search',
    title: 'Built for Google and',
    highlight: 'AI search',
    description: 'Clean URLs, metadata, and structure help customers find answers in search engines and AI tools.',
    Visual: GoogleSerpCard,
  },
  {
    tag: 'Analytics',
    title: 'See what users',
    highlight: 'read and search',
    description:
      'Track article views, search terms, and content gaps so you know what to improve in your help center.',
    Visual: AnalyticsCard,
  },
  {
    tag: 'Editor & feedback',
    title: 'Write, update, and',
    highlight: 'improve docs',
    description:
      'Create help articles in one editor, collect reader feedback, and refine weak documentation over time.',
    Visual: EditorSidebarCard,
  },
];

export default function PlatformFeaturesSection() {
  return (
    <section className="bg-white">
      <div className="landing-grid-column bg-white">
        <div className="landing-grid-pad border-b border-slate-200 py-10 md:py-12 lg:py-14">
          <p className="font-silkscreen text-xs uppercase tracking-[0.22em] text-wonder sm:text-sm">
            Platform features
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-normal leading-tight text-slate-900 sm:text-3xl md:text-4xl">
            One platform, fully featured
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Custom domains, SEO, analytics, and a modern editor — everything you need to run a knowledge
            base that stays current.
          </p>
        </div>

        <div className="divide-y divide-slate-200">
          {blocks.map((block, index) => {
            const { Visual } = block;
            const reverse = index % 2 === 1;

            return (
              <article
                key={block.tag}
                className={`platform-feature-row${reverse ? ' platform-feature-row--reverse' : ''}`}
              >
                <div className="platform-feature-row__copy landing-grid-pad">
                  <div className="platform-feature-row__copy-inner">
                    <span className="font-silkscreen text-[11px] uppercase tracking-[0.12em] text-wonder">
                      {block.tag}
                    </span>
                    <h3 className="mt-3 font-display text-[1.65rem] font-medium leading-[1.12] tracking-tight text-balance text-slate-900 sm:text-[1.8rem]">
                      {block.title}{' '}
                      <span className="font-normal text-wonder">{block.highlight}</span>
                    </h3>
                    <p className="mt-3 text-[15px] leading-6 text-slate-500">{block.description}</p>
                  </div>
                </div>

                <div className="platform-feature-row__visual">
                  <div className="platform-feature-row__mockup">
                    <Visual />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
