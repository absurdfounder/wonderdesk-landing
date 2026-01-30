import Image from "next/image";

const sectionXPadding = "px-4 sm:px-6 lg:px-8";

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

export default function FeaturesBlocks() {
  return (
    <section className="relative py-12 md:py-16">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-12">
        <div className=" text-start">
          <h2 className="font-funneldisplay h2 mb-4">
          Be found by real users and AI assistants
          </h2>
          <p className="text-xl text-slate-600">
            Busy teams need a simpler way to run marketing and support. Wonder automates both so you can focus on what matters.
          </p>
        </div>
      </div>

      {/* 3-column grid with dividers - max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-slate-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
        {blocks.map((block) => (
          <section
            key={block.title}
            className="flex flex-col"
          >
            <div className={sectionXPadding}>
              <div className="grid items-start gap-8 md:grid-cols-1 md:gap-12">
                <div className="md:order-1 pt-12 pb-12">
                  <p className="body-text mt-6 max-w-4xl text-base text-slate-700">
                    <b className="font-semibold text-slate-900">{block.title}</b> {block.body}
                  </p>
                </div>
              </div>
            </div>
            <div className="md:order-2 mt-auto">
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
      </div>
    </section>
  );
}
