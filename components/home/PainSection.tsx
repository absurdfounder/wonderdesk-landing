import { Camera, MessageSquareQuote, UserMinus } from 'lucide-react';

const pains = [
  {
    number: '01',
    title: 'Stale screenshots',
    body: 'One UI change ages every tutorial image. Fixes keep getting pushed back.',
    icon: Camera,
  },
  {
    number: '02',
    title: 'Repeat tickets',
    body: 'Support answers the same workflow in chat every week instead of once in docs.',
    icon: MessageSquareQuote,
  },
  {
    number: '03',
    title: 'Quiet churn',
    body: 'Users self-serve first. Wrong or missing articles mean tickets—or they leave.',
    icon: UserMinus,
  },
];

export default function PainSection() {
  return (
    <section className="bg-neutral-50">
      <div className="landing-grid-column bg-neutral-50">
        <div className="landing-grid-pad border-b border-slate-200 py-10 md:py-12">
          <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">Sound familiar?</p>
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-normal text-slate-900 sm:text-3xl md:text-4xl">
            Your docs fall behind every release
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            You ship constantly. Help articles drift out of date—and customers notice before your team does.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
          {pains.map((pain) => {
            const Icon = pain.icon;

            return (
              <article
                key={pain.number}
                className="bg-white px-6 py-8 md:bg-transparent md:px-8 md:py-10 lg:px-10 lg:py-12"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-wonder/10 text-wonder">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-wonder">{pain.number}</p>
                    <h3 className="mt-2 font-display text-xl font-medium leading-snug text-slate-900 sm:text-[1.35rem]">
                      {pain.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{pain.body}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
