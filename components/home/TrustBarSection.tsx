const logos = [
  { src: 'https://dazzling-cat.netlify.app/logos/zeroslistlogo.png', alt: 'Zeroslist', className: 'h-6' },
  { src: 'https://dazzling-cat.netlify.app/logos/marketingxlogo.png', alt: 'MarketingX', className: 'h-8' },
  { src: 'https://dazzling-cat.netlify.app/logos/dealflowlogo.png', alt: 'Dealflow', className: 'h-7' },
  { src: 'https://dazzling-cat.netlify.app/logos/downtownlogo.png', alt: 'Downtown', className: 'h-12' },
];

export default function TrustBarSection() {
  return (
    <section className="bg-white">
      <div className="landing-grid-column">
        <div className="landing-grid-pad border-b border-slate-200 py-10 md:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="font-display text-xl font-medium leading-snug text-slate-800 sm:text-2xl md:text-[1.65rem]">
              &ldquo;We&apos;re saving at least 20 hours a month — updating docs used to be hell. Now Wonder
              makes it so easy I can just ship more.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-slate-500">
              <span className="font-medium text-slate-700">Alex Moreno</span> · Founder, HelpNest
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <span className="text-sm font-medium text-slate-500">Trusted by leading product-led companies</span>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {logos.map((logo) => (
                <div key={logo.alt} className={`${logo.className} max-h-12 w-32 opacity-50 grayscale transition-all duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0`}>
                  <img
                    className="h-full w-full origin-center object-contain"
                    src={logo.src}
                    alt={logo.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
