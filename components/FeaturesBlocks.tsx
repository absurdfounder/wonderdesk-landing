import Image from 'next/image';

const blocks = [
  {
    tag: 'Custom domains',
    title: 'Use your own domain or a subpath',
    body: 'so your help site feels like a natural part of your main site.',
    image: 'https://dazzling-cat.netlify.app/wonderdomain.png',
    alt: 'Custom domain setup in Wonder',
  },
  {
    tag: 'SEO & AI search',
    title: 'Built for search from day one',
    body: 'so people discover your content on Google, ChatGPT, and other platforms.',
    image: 'https://dazzling-cat.netlify.app/analyticsseo.png',
    alt: 'SEO and analytics dashboard',
  },
  {
    tag: 'Performance',
    title: 'Lightning-fast article delivery',
    body: 'boosting search rankings and helping customers get answers in no time.',
    image: 'https://dazzling-cat.netlify.app/performancewebsite.png',
    alt: 'Fast help center performance scores',
  },
];

export default function FeaturesBlocks() {
  return (
    <section className="relative bg-white">
      <div className="landing-grid-column">
        <div className="border-b border-slate-200 landing-grid-pad py-10 md:py-12">
          <h2 className="font-display text-2xl font-normal text-slate-800 sm:text-3xl md:text-4xl">
            Get found on <b>Google</b>. Cited by <b>ChatGPT</b>.
          </h2>
          <p className="mt-3 max-w-3xl text-base text-slate-600 sm:text-lg md:mt-4">
            Busy teams need a simpler way to run marketing and support. Wonder automates both so you can focus on
            what matters.
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

              <div
                className="mt-auto border-t border-slate-100 p-4 md:p-5"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(248, 250, 252, 0.95) 0%, rgba(255, 255, 255, 1) 100%)',
                }}
              >
                <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
                  <Image
                    alt={block.alt}
                    src={block.image}
                    width={1200}
                    height={720}
                    className="h-auto w-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
