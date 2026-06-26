import FeatureBlockVisual, { type FeatureVisualId } from '@/components/features/FeatureBlockVisuals';
import ProductFeatureBlockVisual, {
  type ProductFeatureVisualId,
} from '@/components/features/ProductFeatureBlockVisuals';

type PlatformBlock =
  | {
      tag: string;
      title: string;
      body: string;
      kind: 'platform';
      visual: FeatureVisualId;
    }
  | {
      tag: string;
      title: string;
      body: string;
      kind: 'product';
      visual: ProductFeatureVisualId;
    };

const blocks: PlatformBlock[] = [
  {
    tag: 'Custom domains',
    title: 'Use your own domain or a subpath',
    body: 'so your help site feels like a natural part of your main site.',
    kind: 'platform',
    visual: 'domain',
  },
  {
    tag: 'SEO & AI search',
    title: 'Built for search from day one',
    body: 'so people discover your content on Google, ChatGPT, and other platforms.',
    kind: 'platform',
    visual: 'seo',
  },
  {
    tag: 'Performance',
    title: 'Lightning-fast article delivery',
    body: 'boosting search rankings and helping customers get answers in no time.',
    kind: 'platform',
    visual: 'performance',
  },
  {
    tag: 'Analytics',
    title: 'Advanced analytics',
    body: 'show you how customers use your help center, what performs well, and where to improve.',
    kind: 'product',
    visual: 'analytics',
  },
  {
    tag: 'Editor',
    title: 'Our world-class editor',
    body: 'helps you create and edit content faster than any other platform.',
    kind: 'product',
    visual: 'editor',
  },
  {
    tag: 'Feedback',
    title: 'Collect customer feedback',
    body: 'from your users and use it to improve your help center over time.',
    kind: 'product',
    visual: 'feedback',
  },
];

export default function PlatformFeaturesSection() {
  return (
    <section className="relative bg-white">
      <div className="landing-grid-column">
        <div className="border-b border-slate-200 landing-grid-pad py-10 md:py-12">
          <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">
            Batteries included
          </p>
          <h2 className="mt-3 font-display text-2xl font-normal text-slate-800 sm:text-3xl md:text-4xl">
            Incredible docs, out of the box
          </h2>
          <p className="mt-3 max-w-3xl text-base text-slate-600 sm:text-lg md:mt-4">
            AI search, custom domains, analytics, and SEO — a complete help-center platform, and the only one
            that keeps every word accurate as you ship.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-slate-200/50 lg:grid-cols-3 lg:divide-x lg:divide-y-0 [&>*:nth-child(n+4)]:lg:border-t [&>*:nth-child(n+4)]:lg:border-slate-200/50">
          {blocks.map((block) => (
            <article key={block.title} className="flex min-h-full flex-col bg-white">
              <div className="flex flex-1 flex-col px-6 py-8 md:px-8 md:py-10 lg:min-h-[12rem]">
                <span className="font-silkscreen text-xs uppercase tracking-wide text-wonder">{block.tag}</span>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  <span className="font-semibold text-slate-900">{block.title}</span> {block.body}
                </p>
              </div>

              <div className="mt-auto border-t border-slate-200/50">
                {block.kind === 'platform' ? (
                  <FeatureBlockVisual id={block.visual} />
                ) : (
                  <ProductFeatureBlockVisual id={block.visual} />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
