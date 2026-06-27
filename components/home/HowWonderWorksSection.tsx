import AIAgentSection from '@/components/AIAgentSection';
import { BookOpen, FilePen, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: 'Wonder reads your sources',
    body: 'Codebase, pull requests, tickets, changelogs — wherever product knowledge already lives.',
  },
  {
    icon: FilePen,
    title: 'Wonder drafts the updates',
    body: 'Stale articles get rewritten and screenshots refresh, ready for your review.',
  },
  {
    icon: ShieldCheck,
    title: 'You approve in one click',
    body: 'Every update is a draft. Publish, edit, or skip. Nothing goes live without you.',
  },
];

export default function HowWonderWorksSection() {
  return (
    <section className="bg-white">
      <div className="landing-grid-column bg-white">
        <div className="landing-grid-pad border-b border-slate-200 py-10 md:py-12">
          <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">Meet Wonder</p>
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-normal text-slate-900 sm:text-3xl md:text-4xl">
            You build the product. Wonder handles the docs.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Not a chatbot you prompt. An agent that watches your product, drafts doc updates, and queues them for
            approval.
          </p>
        </div>

        <div className="border-b border-slate-200 bg-slate-50/80">
          <div className="landing-grid-pad py-8 md:py-10 lg:py-12">
            <AIAgentSection embedded />
          </div>
        </div>

        <div className="landing-grid-pad py-10 md:py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="md:border-l md:border-slate-200 md:pl-6 lg:pl-8 first:md:border-l-0 first:md:pl-0">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm">
                    <Icon className="h-5 w-5 text-wonder" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-medium text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
