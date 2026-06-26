import HomepageFeatureVisualRow from './features/HomepageFeatureVisualRow';
import {
  PRODUCT_ROW_W,
  PRODUCT_VISUAL_H,
  ProductFeaturesVisualRow,
} from './visuals/PrDocsProductCards';

const blocks = [
  {
    tag: 'Analytics',
    title: 'Advanced analytics',
    body: 'show you how your customers are using your help center, what articles are performing well, and where there\'s room for improvement.',
  },
  {
    tag: 'Editor',
    title: 'Our world-class editor',
    body: 'helps you create and edit content faster than any other platform.',
  },
  {
    tag: 'Feedback',
    title: 'Collect positive and negative feedback',
    body: 'from your customers, and use them to improve your help center over time.',
  },
];

export default function ProductFeaturesBlocks() {
  return (
    <section className="relative border-t border-slate-200 bg-white">
      <div className="landing-grid-column">
        <div className="border-b border-slate-200 landing-grid-pad py-10 md:py-12">
          <h2 className="font-display text-2xl font-normal text-slate-800 sm:text-3xl md:text-4xl">
            Optimize
          </h2>
          <p className="mt-3 max-w-3xl text-base text-slate-600 sm:text-lg md:mt-4">
            Continuously improve your help center. Wonder gives you the tools you need to optimize
            performance and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-slate-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {blocks.map((block) => (
            <article key={block.title} className="flex min-h-full flex-col bg-white">
              <div className="flex flex-1 flex-col px-6 py-8 md:px-8 md:py-10">
                <span className="font-silkscreen text-xs uppercase tracking-wide text-wonder">{block.tag}</span>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  <span className="font-semibold text-slate-900">{block.title}</span> {block.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <HomepageFeatureVisualRow stageWidth={PRODUCT_ROW_W} stageHeight={PRODUCT_VISUAL_H}>
          <ProductFeaturesVisualRow landscapeId="home-product-sky" />
        </HomepageFeatureVisualRow>
      </div>
    </section>
  );
}
