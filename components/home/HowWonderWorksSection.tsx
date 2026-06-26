import AIAgentSection from '@/components/AIAgentSection';
import { BookOpen, FilePen, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: 'Wonder reads your real sources',
    body: 'Your codebase, pull requests, support tickets, changelogs, and product videos — everywhere your product knowledge already lives.',
  },
  {
    icon: FilePen,
    title: 'Wonder drafts every update',
    body: 'When something ships, Wonder rewrites stale articles and refreshes screenshots the way a teammate would — ready for your review.',
  },
  {
    icon: ShieldCheck,
    title: 'You approve in one click',
    body: 'Every update lands as a draft. Publish it, edit it first, or dismiss it. Nothing goes live without you.',
  },
];

export default function HowWonderWorksSection() {
  return (
    <section className="bg-white">
      <div className="landing-grid-column">
        <div className="landing-grid-pad border-b border-slate-200 py-10 md:py-12">
          <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">Meet Wonder</p>
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-normal text-slate-800 sm:text-3xl md:text-4xl">
            You build the product. Wonder handles the docs.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Not a chatbot you prompt. An agent that watches your product, drafts doc updates, and queues them for
            approval — so your help center stays accurate as you ship.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title}>
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

      <AIAgentSection demoOnly />
    </section>
  );
}
