const pains = [
  {
    title: 'Screenshots no longer match the product',
    body: 'A small UI change can make a whole tutorial wrong. Fixing it takes time, so outdated images stay live longer than they should.',
  },
  {
    title: 'Support keeps answering the same questions',
    body: 'Your team explains the same workflow in chat every week. The answer belongs in your knowledge base, but writing it keeps getting pushed back.',
  },
  {
    title: 'Users leave when docs fail them',
    body: 'People try to self-serve first. If search returns old or missing articles, they give up, open a ticket, or churn quietly.',
  },
];

export default function PainSection() {
  return (
    <section className="bg-white">
      <div className="landing-grid-column">
        <div className="landing-grid-pad border-b border-slate-200 py-10 md:py-14">
          <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">The problem</p>
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-normal text-slate-800 sm:text-3xl md:text-4xl">
            Outdated docs, more support work
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Product teams ship fast. Documentation usually lags behind. That gap shows up as repeat tickets,
            slower onboarding, and lower trust in your help center.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {pains.map((pain) => (
              <article key={pain.title} className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
                <h3 className="font-display text-lg font-medium leading-snug text-slate-900">{pain.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{pain.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
