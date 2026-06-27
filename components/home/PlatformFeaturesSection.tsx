import {
  AnalyticsCard,
  EditorSidebarCard,
} from '@/components/visuals/PrDocsProductCards';
import {
  DomainLiveCard,
  GoogleSerpCard,
} from '@/components/visuals/PrDocsPlatformCards';
import type { ReactNode } from 'react';

type PlatformBlock = {
  tag: string;
  title: string;
  highlight: string;
  description: string;
  visual: ReactNode;
};

const blocks: PlatformBlock[] = [
  {
    tag: 'Custom domains',
    title: 'Host help docs on',
    highlight: 'your own domain',
    description: 'Use help.yourcompany.com or a /help path so your knowledge base matches your brand.',
    visual: <DomainLiveCard />,
  },
  {
    tag: 'SEO & AI search',
    title: 'Built for Google and',
    highlight: 'AI search',
    description: 'Clean URLs, metadata, and structure help customers find answers in search engines and AI tools.',
    visual: <GoogleSerpCard />,
  },
  {
    tag: 'Analytics',
    title: 'See what users',
    highlight: 'read and search',
    description:
      'Track article views, search terms, and content gaps so you know what to improve in your help center.',
    visual: <AnalyticsCard />,
  },
  {
    tag: 'Editor & feedback',
    title: 'Write, update, and',
    highlight: 'improve docs',
    description:
      'Create help articles in one editor, collect reader feedback, and refine weak documentation over time.',
    visual: <EditorSidebarCard />,
  },
];

export default function PlatformFeaturesSection() {
  return (
    <section className="bg-white">
      <div className="landing-grid-column bg-white">
        <div className="landing-grid-pad border-b border-slate-200 py-10 md:py-12">
          <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">
            Platform features
          </p>
          <h2 className="mt-3 font-display text-2xl font-normal text-slate-800 sm:text-3xl md:text-4xl">
            One platform, fully featured
          </h2>
          <p className="mt-3 max-w-3xl text-base text-slate-600 sm:text-lg md:mt-4">
            Custom domains, SEO, analytics, and a modern editor — everything you need to run a knowledge
            base that stays current.
          </p>
        </div>

        <div className="divide-y divide-slate-200">
          {blocks.map((block) => (
            <article key={block.tag} className="platform-feature-row">
              <div className="platform-feature-row__copy landing-grid-pad">
                <span className="font-silkscreen text-[11px] uppercase tracking-[0.12em] text-wonder">
                  {block.tag}
                </span>
                <h3 className="mt-3 font-display text-[1.65rem] font-medium leading-[1.15] tracking-tight text-balance text-slate-900 sm:text-[1.75rem]">
                  {block.title}{' '}
                  <span className="font-normal text-wonder">{block.highlight}</span>
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-6 text-slate-500">{block.description}</p>
              </div>

              <div className="platform-feature-row__visual">
                <div className="platform-feature-row__mockup">{block.visual}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
