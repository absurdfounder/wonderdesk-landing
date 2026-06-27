import AIAgentSection from '@/components/AIAgentSection';

const steps = [
  {
    number: '01',
    title: 'Connect sources',
    body: 'GitHub, support tools, changelogs, release notes.',
  },
  {
    number: '02',
    title: 'Get draft updates',
    body: 'Wonderdesk suggests edits and refreshed screenshots.',
  },
  {
    number: '03',
    title: 'Publish what you approve',
    body: 'Every change is a draft until your team ships it.',
  },
];

export default function HowWonderWorksSection() {
  return (
    <section className="bg-white">
      <div className="landing-grid-column bg-white">
        <div className="landing-grid-pad border-b border-slate-200 py-10 md:py-14 lg:py-16">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
            <div className="max-w-md lg:pt-2">
              <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">
                How it works
              </p>
              <h2 className="mt-3 font-display text-2xl font-normal text-slate-900 sm:text-3xl md:text-4xl">
                Docs that track your product
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
                Watch Wonderdesk turn a product change into reviewed help articles.
              </p>

              <ol className="mt-8 space-y-0 border-t border-slate-200">
                {steps.map((step) => (
                  <li
                    key={step.number}
                    className="grid grid-cols-[3.5rem_1fr] gap-3 border-b border-slate-200 py-5 sm:grid-cols-[4rem_1fr] sm:gap-4"
                  >
                    <span className="pt-0.5 font-mono text-xs font-semibold tracking-[0.14em] text-wonder">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium leading-snug text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="min-w-0 lg:sticky lg:top-[14vh]">
              <AIAgentSection demoOnly embedded />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
