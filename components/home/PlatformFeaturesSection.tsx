import PlatformFeaturesVisual from '@/components/home/PlatformFeaturesVisual';
import type { FeatureVisualId } from '@/components/features/FeatureBlockVisuals';
import type { ProductFeatureVisualId } from '@/components/features/ProductFeatureBlockVisuals';

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
    tag: 'Analytics',
    title: 'See what users',
    highlight: 'read and search',
    description:
      'Track article views, search terms, and content gaps so you know what to improve in your help center.',
    kind: 'product',
    visual: 'analytics',
  },
  {
    tag: 'Editor & feedback',
    title: 'Write, update, and',
    highlight: 'improve docs',
    description:
      'Create help articles in one editor, collect reader feedback, and refine weak documentation over time.',
    kind: 'product',
    visual: 'editor',
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

        <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x">
          {blocks.map((block) => (
            <article key={block.tag} className="flex flex-col bg-white">
              <div className="platform-feature-visual-panel platform-feature-visual-panel--grid">
                {block.kind === 'platform' ? (
                  <PlatformFeaturesVisual kind="platform" visual={block.visual} variant="photo" />
                ) : (
                  <PlatformFeaturesVisual kind="product" visual={block.visual} variant="photo" />
                )}
              </div>

              <div className="flex flex-1 flex-col justify-center px-6 py-8 lg:px-9 lg:py-10">
                <span className="font-silkscreen text-[11px] uppercase tracking-[0.12em] text-wonder">
                  {block.tag}
                </span>
                <h3 className="mt-3 font-display text-xl font-medium leading-snug tracking-tight text-slate-900 sm:text-[1.35rem]">
                  {block.title}{' '}
                  <span className="font-normal text-wonder">{block.highlight}</span>
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 sm:text-[15px] sm:leading-6">
                  {block.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
