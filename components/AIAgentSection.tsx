'use client';

import Image from 'next/image';

const sectionXPadding = 'px-4 sm:px-6 lg:px-8';

const draftArticles = [
  {
    title: 'How to contact support',
    excerpt:
      'If you need help with your account, you can reach our support team through our support portal. Visit support.company.com to submit a ticket or browse our knowledge base for instant answers.',
  },
  {
    title: 'Account settings and preferences',
    excerpt:
      'Update your account information, change notification preferences, and manage your subscription through our support portal. Access your settings by logging into support.company.com.',
  },
  {
    title: 'Billing and payment help',
    excerpt:
      'Questions about billing? Need to update your payment method? Our support team can help you with all billing-related inquiries through our support portal.',
  },
];

export default function AIAgentSection() {
  return (
    <section className="bg-white">
      <div className={`${sectionXPadding} mx-auto max-w-7xl`}>
        {/* Headline section */}
        <div className="pt-12 pb-8 sm:pt-20 sm:pb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 sm:text-sm">
            Just ask Wonder
          </span>
          <h2 className="mt-4 max-w-2xl font-funneldisplay text-2xl font-bold leading-tight text-neutral-800 text-balance sm:text-3xl">
            The AI agent that writes and updates your help articles for you
          </h2>
          <p className="body-text mt-6 max-w-4xl text-base leading-relaxed text-neutral-600">
            Our AI agent reads your codebase, support tickets, changelogs and product videos, and
            uses them to make changes to your help center as a human would.
          </p>
        </div>

        {/* Chat card under the headline */}
        <div className="max-w-4xl pb-12 sm:pb-16">
            <div className="bg-white">
              <div className="space-y-6 p-6">
                {/* User message */}
                <div className="flex items-start gap-4">
                  <div className="relative mt-0.5 h-12 w-12 shrink-0 overflow-hidden rounded-full bg-neutral-200">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop"
                      alt="Alex"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg font-semibold text-neutral-800">Alex</span>
                      <span className="text-sm text-neutral-500">3:42 PM</span>
                    </div>
                    <p className="body-text mt-0.5 leading-relaxed text-neutral-700">
                      Hey Wonder, can you remove all phone-number mentions and replace with our
                      support portal link →{' '}
                      <span className="text-neutral-800 underline decoration-neutral-300 underline-offset-2">
                        wonderdesk.ai/help
                      </span>
                    </p>
                  </div>
                </div>

                {/* Agent reply 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-500 text-lg font-semibold text-white">
                    W
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg font-semibold text-neutral-800">Wonder</span>
                      <span className="text-sm text-neutral-500">3:43 PM</span>
                    </div>
                    <p className="body-text mt-0.5 leading-relaxed text-neutral-700">
                      On it! Will let you know when they&apos;re ready to review.
                    </p>
                  </div>
                </div>

                {/* Agent reply 2 with CTA and draft cards */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-500 text-lg font-semibold text-white">
                    W
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg font-semibold text-neutral-800">Wonder</span>
                      <span className="text-sm text-neutral-500">3:43 PM</span>
                    </div>
                    <p className="body-text mt-0.5 leading-relaxed text-neutral-700">
                      Hey Alex, I&apos;ve updated 12 articles across your help center. Let me know if
                      they look good!
                    </p>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-2.5 text-sm font-bold text-neutral-800 shadow-sm transition hover:bg-neutral-200"
                        aria-label="Review and publish"
                      >
                        Review and publish
                      </button>
                    </div>
                    {/* Draft article cards */}
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {draftArticles.map((article) => (
                        <div
                          key={article.title}
                          className="flex cursor-pointer flex-col gap-2 rounded-xl bg-gradient-to-b from-white to-neutral-50 p-4 pb-3 text-left shadow-sm ring-1 ring-neutral-200"
                        >
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-medium text-amber-700">
                              <span className="size-1.5 rounded-full bg-amber-500" />
                              Draft
                            </span>
                          </div>
                          <h3 className="line-clamp-1 text-base font-semibold text-neutral-800">
                            {article.title}
                          </h3>
                          <p className="line-clamp-4 text-sm font-normal leading-snug text-neutral-600 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
                            {article.excerpt}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
