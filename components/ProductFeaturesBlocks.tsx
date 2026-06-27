import ProductFeatureBlockVisual, {
  type ProductFeatureVisualId,
} from './features/ProductFeatureBlockVisuals';

const blocks: Array<{
  tag: string;
  title: string;
  body: string;
  visual: ProductFeatureVisualId;
}> = [
  {
    tag: 'Analytics',
    title: 'Help center analytics',
    body: 'show which articles get traffic, which searches fail, and where your documentation needs work.',
    visual: 'analytics',
  },
  {
    tag: 'Editor',
    title: 'Built-in editor',
    body: 'for writing and updating help articles, changelogs, and guides in one place.',
    visual: 'editor',
  },
  {
    tag: 'Feedback',
    title: 'Reader feedback',
    body: 'helps you spot weak articles and improve your knowledge base over time.',
    visual: 'feedback',
  },
];

export default function ProductFeaturesBlocks() {
  return (
    <section className="relative border-t border-slate-200 bg-white">
      <div className="landing-grid-column">
        <div className="border-b border-slate-200 landing-grid-pad py-10 md:py-12">
          <h2 className="font-display text-2xl font-normal text-slate-800 sm:text-3xl md:text-4xl">
            Improve your documentation over time
          </h2>
          <p className="mt-3 max-w-3xl text-base text-slate-600 sm:text-lg md:mt-4">
            Wonderdesk gives you analytics, editing, and feedback tools so your help center gets better as
            your product grows.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-slate-200/50 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {blocks.map((block) => (
            <article key={block.title} className="flex min-h-full flex-col bg-white">
              <div className="flex flex-1 flex-col px-6 py-8 md:px-8 md:py-10 lg:min-h-[14rem]">
                <span className="font-silkscreen text-xs uppercase tracking-wide text-wonder">{block.tag}</span>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  <span className="font-semibold text-slate-900">{block.title}</span> {block.body}
                </p>
              </div>

              <div className="mt-auto border-t border-slate-200/50">
                <ProductFeatureBlockVisual id={block.visual} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
