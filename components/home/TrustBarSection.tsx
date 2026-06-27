const logos = [
  {
    src: 'https://dazzling-cat.netlify.app/logos/zeroslistlogo.png',
    alt: 'Zeroslist',
    className: 'h-7',
  },
  {
    kind: 'marketing-x' as const,
    alt: 'Marketing X',
    className: 'h-6',
  },
  {
    src: 'https://dazzling-cat.netlify.app/logos/dealflowlogo.png',
    alt: 'Dealflow',
    className: 'h-8',
  },
  {
    src: 'https://dazzling-cat.netlify.app/logos/downtownlogo.png',
    alt: 'Downtown',
    className: 'h-11',
  },
];

function MarketingXWordmark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 132 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Marketing X"
    >
      <text
        x="0"
        y="16"
        fill="currentColor"
        fontFamily="var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="15"
        fontWeight="600"
        letterSpacing="-0.02em"
      >
        Marketing X
      </text>
    </svg>
  );
}

function TrustLogo({
  logo,
}: {
  logo: (typeof logos)[number];
}) {
  if ('kind' in logo && logo.kind === 'marketing-x') {
    return (
      <div
        className={`${logo.className} flex shrink-0 items-center text-white opacity-70 transition-opacity duration-300 hover:opacity-100`}
      >
        <MarketingXWordmark className="h-full w-auto" />
      </div>
    );
  }

  return (
    <div
      className={`${logo.className} flex max-h-12 shrink-0 items-center transition-transform duration-300 hover:scale-105`}
    >
      <img
        className="h-full w-auto max-w-[10rem] object-contain opacity-85 transition-opacity duration-300 hover:opacity-100"
        src={logo.src}
        alt={logo.alt}
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </div>
  );
}

export default function TrustBarSection() {
  return (
    <section className="bg-white">
      <div className="landing-grid-column landing-grid-column--dark bg-black">
        <div className="landing-grid-pad border-b border-slate-800 py-10 md:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="font-display text-xl font-medium leading-snug text-white sm:text-2xl md:text-[1.65rem]">
              &ldquo;We cut doc update time sharply. Wonderdesk flags stale articles and gives us drafts we
              can publish in minutes.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-gray-400">
              <span className="font-medium text-gray-200">Alex Moreno</span> · Founder, HelpNest
            </p>
          </div>
        </div>

        <div className="landing-grid-pad py-6 md:py-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
            <span className="text-center text-sm font-medium text-gray-400 md:text-left md:text-base">
              Trusted by growing SaaS teams
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:justify-end">
              {logos.map((logo) => (
                <TrustLogo key={logo.alt} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
