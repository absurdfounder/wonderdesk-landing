import Image from "next/image";

const sectionXPadding = "px-4 sm:px-6 lg:px-8";

const blocks = [
  {
    title: "Connect a custom domain or subfolder",
    body: "to Wonder and make your help center feel like part of your main website.",
    image: "https://dazzling-cat.netlify.app/wonderdomain.png",
    alt: "Custom domain",
  },
  {
    title: "SEO optimized out of the box",
    body: "so your customers can find answers on Google, ChatGPT and more.",
    image: "https://dazzling-cat.netlify.app/wonderdomain.png",
    alt: "SEO",
  },
  {
    title: "Articles load in milliseconds",
    body: "so your page rankings improve and your customers find answers faster.",
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
          Get discovered by humans and AI chatbots
          </h2>
          <p className="text-xl text-slate-600">
            We know you have too much on your plate, this is why Wonder exists to help you setup{" "}
            <span className="font-normal text-orange-600 border-b">marketing and support on automation</span>.
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
            <div className={`mx-auto w-full max-w-7xl ${sectionXPadding}`}>
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
