const testimonials = [
  {
    quote:
      'Wonderdesk cut the time we spend fixing docs after each release. Drafts are ready before support even notices the gap.',
    name: 'Ryan Patel',
    role: 'Co-founder, Flowstack',
  },
  {
    quote:
      'Our team finally publishes help articles on schedule. The AI suggestions are a strong starting point, not busywork.',
    name: 'Alex Moreno',
    role: 'Founder, HelpNest',
  },
  {
    quote:
      'Search analytics showed us which docs were failing users. We fixed the top gaps and ticket volume dropped.',
    name: 'Maya Chen',
    role: 'Head of Support, Northline',
  },
  {
    quote:
      'We imported from Zendesk in an afternoon. URLs stayed intact and the content looked better the same day.',
    name: 'Laura Brooks',
    role: 'Product Ops, Client Portal',
  },
  {
    quote:
      'Connecting GitHub gave us draft updates tied to real pull requests. Reviewing them is faster than writing from scratch.',
    name: 'Richie Park',
    role: 'Founder, Cap',
  },
  {
    quote:
      'The audit view helped us find missing onboarding docs quickly. New users stopped getting stuck on the same steps.',
    name: 'Emmett Shaw',
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
            Less doc overhead, more shipping
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Product and support teams use Wonderdesk to keep knowledge base content current, reduce repeat
            tickets, and launch help centers faster.
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
