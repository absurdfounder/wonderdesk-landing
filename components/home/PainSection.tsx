const pains = [
  {
    title: 'You sent the link knowing it was wrong',
    body: 'The screenshot was two redesigns old. Fixing it meant an hour you didn\u2019t have — so you sent it anyway and hoped they wouldn\u2019t scroll far.',
  },
  {
    title: 'You\u2019ve answered this exact question 200 times',
    body: 'It should live in your help center. Instead it lives in your inbox, costing you ten minutes every week. Writing it up never reaches the top of the list.',
  },
  {
    title: 'A trial user got stuck and never came back',
    body: 'They wanted to help themselves. The doc they needed was missing or wrong, so they quietly gave up. You won\u2019t get a ticket — just a trial that never converted.',
  },
];

export default function PainSection() {
  return (
    <section className="bg-white">
      <div className="landing-grid-column">
        <div className="landing-grid-pad border-b border-slate-200 py-10 md:py-14">
          <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">Sound familiar?</p>
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-normal text-slate-800 sm:text-3xl md:text-4xl">
            Your help center has been next weekend&apos;s problem for six months.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            It&apos;s not that you don&apos;t care. You ship constantly, and every renamed button or reworked flow
            quietly makes a help article wrong. No test fails. Nothing flags it. You find out when a customer does.
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
