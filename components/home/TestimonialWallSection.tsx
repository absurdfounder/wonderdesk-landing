const testimonials = [
  {
    quote:
      'Wonder is by far the best support product I have ever used.',
    name: 'Ryan Patel',
    role: 'Co-founder, Flowstack',
  },
  {
    quote:
      'We\u2019re saving at least 20 hours a month which frees me up to work on more impactful tasks.',
    name: 'Alex Moreno',
    role: 'Founder, HelpNest',
  },
  {
    quote:
      'I used to never update my articles — they got stale from day one. Now my docs stay up to date automatically.',
    name: 'Fed',
    role: 'Founder, GummySearch',
  },
  {
    quote:
      'Being able to see what customers search for and can\u2019t find has been huge. Support requests dropped significantly.',
    name: 'Laura Elizabeth',
    role: 'Founder, Client Portal',
  },
  {
    quote:
      'I connected Discord, Intercom, and GitHub — within five minutes I had more than 20 tailor-made draft articles.',
    name: 'Richie McIlroy',
    role: 'Founder, Cap',
  },
  {
    quote:
      'Wonder audits help articles and surfaces gaps fast. We\u2019re already seeing a reduction in customer churn.',
    name: 'Emmett',
    role: 'Founder, PixelFlow',
  },
];

export default function TestimonialWallSection() {
  return (
    <section className="bg-white">
      <div className="landing-grid-column">
        <div className="landing-grid-pad border-b border-slate-200 py-10 md:py-12">
          <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">Customers</p>
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-normal text-slate-800 sm:text-3xl md:text-4xl">
            Wonder customers save 20 hours a month on average
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Founders who used to dread updating docs now ship features every week — and Wonder keeps every help
            article accurate.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3 lg:[&>*:nth-child(n+3)]:border-t lg:[&>*:nth-child(3n)]:border-r-0">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="flex flex-col justify-between px-6 py-8 md:px-8 md:py-10"
            >
              <p className="font-display text-lg font-medium leading-snug text-slate-800">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-medium text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
