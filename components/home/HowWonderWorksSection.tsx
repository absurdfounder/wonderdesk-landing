import AIAgentSection from '@/components/AIAgentSection';
import { BookOpen, FilePen, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: 'Connect your product sources',
    body: 'Link GitHub, support tools, changelogs, and release notes so Wonderdesk understands how your product works today.',
  },
  {
    icon: FilePen,
    title: 'Get suggested doc updates',
    body: 'When features change, Wonderdesk drafts new or revised help articles and can refresh screenshots for you to review.',
  },
  {
    icon: ShieldCheck,
    title: 'Publish what you approve',
    body: 'Every suggestion arrives as a draft. Edit it, publish it, or skip it. Your team stays in control.',
  },
];

export default function HowWonderWorksSection() {
  return (
    <section className="bg-white">
      <div className="landing-grid-column">
        <div className="landing-grid-pad border-b border-slate-200 py-10 md:py-12">
          <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">How it works</p>
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-normal text-slate-800 sm:text-3xl md:text-4xl">
            Docs that track your product
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Wonderdesk watches for changes, suggests documentation updates, and helps your team keep knowledge
            base content accurate without manual rewrites after every release.
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
