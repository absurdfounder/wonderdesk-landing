import { MeetWonderFeatureCards } from '@/components/visuals/PrDocsHowItWorksCards';

const MEET_WONDER_CROSS_PATTERN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'%3E%3Cpath d='M12 0h4v28h-4zM0 12h28v4H0z' fill='%23009fbc' fill-opacity='0.14'/%3E%3C/svg%3E\")";

export default function HowWonderWorksSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(420px,55vw)]"
        style={{
          background:
            'radial-gradient(ellipse 85% 70% at 50% -15%, rgba(0, 159, 188, 0.12) 0%, rgba(0, 159, 188, 0.04) 42%, transparent 72%)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 top-0 h-36 w-36 opacity-90 sm:h-44 sm:w-44"
        style={{
          backgroundImage: MEET_WONDER_CROSS_PATTERN,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 0% 0%, black 20%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 0% 0%, black 20%, transparent 72%)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-36 w-36 opacity-90 sm:h-44 sm:w-44"
        style={{
          backgroundImage: MEET_WONDER_CROSS_PATTERN,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 90% 90% at 100% 0%, black 20%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 100% 0%, black 20%, transparent 72%)',
        }}
        aria-hidden
      />

      <div className="landing-grid-column relative bg-white">
        <div className="landing-grid-pad border-b border-slate-200 py-14 text-center md:py-20 lg:py-24">
          <p className="font-silkscreen text-xs uppercase tracking-[0.22em] text-wonder sm:text-sm">
            Meet Wonderdesk
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-[2rem] font-normal leading-[1.12] tracking-tight text-slate-900 sm:text-4xl md:text-[2.75rem]">
            You build the product.
            <br className="hidden sm:block" />
            {' '}Wonder handles the docs.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            She reads your codebase, your support tickets, and your releases, then drafts every update for you to
            approve. Not a chatbot you prompt. An agent that does the work.
          </p>
        </div>

        <div className="landing-grid-pad pb-16 pt-12 md:pb-24 md:pt-14">
          <MeetWonderFeatureCards />
        </div>
      </div>
    </section>
  );
}
