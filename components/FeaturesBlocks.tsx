import Image from "next/image";
import LandingMissionTag from "./landing/LandingMissionTag";

const blocks = [
  {
    title: "Use your own domain or a subpath",
    body: "so your help site feels like a natural part of your main site.",
    image: "https://dazzling-cat.netlify.app/wonderdomain.png",
    alt: "Custom domain",
  },
  {
    title: "Built for search from day one",
    body: "so people discover your content on Google, ChatGPT, and other platforms.",
    image: "https://dazzling-cat.netlify.app/wonderdomain.png",
    alt: "SEO",
  },
  {
    title: "Lightning-fast article delivery",
    body: "boosting search rankings and helping customers get answers in no time.",
    image: "https://dazzling-cat.netlify.app/wonderdomain.png",
    alt: "Performance",
  }
];

type FeaturesBlocksProps = {
  embedded?: boolean;
};

export default function FeaturesBlocks({ embedded = false }: FeaturesBlocksProps) {
  const content = (
    <>
      <div className="pb-10 md:pb-12">
        <LandingMissionTag index="04" label="Discovery" className="mb-4" />
        <h2 className="landing-display text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
          Get found on <span className="landing-accent-text">Google</span>. Cited by <span className="landing-accent-text">ChatGPT</span>.
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Busy teams need a simpler way to run marketing and support. Wonder automates both so you can focus on what matters.
        </p>
      </div>

      <div className="overflow-hidden border border-slate-200 bg-slate-200 lg:grid lg:grid-cols-3">
        {blocks.map((block, idx) => (
          <section
            key={block.title}
            className={`flex flex-col bg-white ${idx < blocks.length - 1 ? 'lg:border-r lg:border-slate-200' : ''}`}
          >
            <div className="px-5 py-10 sm:px-6">
              <p className="text-base leading-relaxed text-slate-700">
                <b className="font-semibold text-slate-900">{block.title}</b> {block.body}
              </p>
            </div>
            <div className="mt-auto border-t border-slate-200">
              <Image
                alt={block.alt}
                src={block.image}
                width={1200}
                height={600}
                className="w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </section>
        ))}
      </div>
    </>
  );

  if (embedded) {
    return <div className="py-12 md:py-16">{content}</div>;
  }

  return (
    <section className="relative bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{content}</div>
    </section>
  );
}
