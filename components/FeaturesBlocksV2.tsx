import Image from "next/image";

const sectionXPadding = "px-4 sm:px-6 lg:px-8";

const blocks = [
  {
    title: "Help center analytics",
    body: "show which articles get traffic, which searches fail, and where your documentation needs work.",
    image: "https://dazzling-cat.netlify.app/wonderdomain.png",
    alt: "Analytics",
  },
  {
    title: "Built-in editor",
    body: "for writing and updating help articles without leaving Wonderdesk.",
    image: "https://dazzling-cat.netlify.app/wonderdomain.png",
    alt: "Editor",
  },
  {
    title: "Reader feedback",
    body: "helps you learn which articles help users and which ones need a rewrite.",
    image: "https://dazzling-cat.netlify.app/wonderdomain.png",
    alt: "Feedback",
  }
];

export default function FeaturesBlocks() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-12">
        <div className="text-start">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-4 text-slate-800">
            Improve your documentation
          </h2>
          <p className="text-xl text-slate-600 mb-2">
            Tools to grow a better knowledge base
          </p>
          <p className="text-lg text-slate-600">
            Wonderdesk includes analytics, editing, and feedback features so your help center improves over time.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {blocks.map((block) => (
          <section
            key={block.title}
            className="flex flex-col rounded-lg border border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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
