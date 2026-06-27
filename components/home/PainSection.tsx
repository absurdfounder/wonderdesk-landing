const pains = [
  {
    number: '01',
    title: 'Stale screenshots',
    body: 'One UI change ages every tutorial image. Fixes keep getting pushed back.',
  },
  {
    number: '02',
    title: 'Repeat tickets',
    body: 'Support answers the same workflow in chat every week instead of once in docs.',
  },
  {
    number: '03',
    title: 'Quiet churn',
    body: 'Users self-serve first. Wrong or missing articles mean tickets—or they leave.',
  },
];

export default function PainSection() {
  return (
    <section className="bg-white">
      <div className="landing-grid-column bg-white">
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
          {pains.map((pain) => (
            <article key={pain.number} className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-wonder">{pain.number}</p>
              <h3 className="mt-3 font-display text-xl font-medium leading-snug text-slate-900 sm:text-[1.35rem]">
                {pain.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{pain.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
