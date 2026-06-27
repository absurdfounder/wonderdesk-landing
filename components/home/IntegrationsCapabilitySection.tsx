import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import LandingIconsGrid from '@/components/LandingIconsGrid';
import { OPENCLAW_ICON_URL } from '@/lib/openclawBrand';

type IntegrationsCapabilitySectionProps = {
  /** Compact block embedded inside the dashboard section (homepage). */
  embedded?: boolean;
};

function OpenclawHeadline({ compact = false }: { compact?: boolean }) {
  return (
    <h2
      className={
        compact
          ? 'mx-auto max-w-3xl font-display text-2xl font-medium leading-tight tracking-tight text-slate-900 sm:text-3xl'
          : 'mx-auto max-w-4xl font-display text-3xl font-medium leading-9 tracking-tight text-ink sm:text-4xl sm:leading-11 xl:text-[2.75rem] xl:leading-[3rem]'
      }
    >
      <span className="inline-flex items-center justify-center gap-2.5">
        <Image
          src={OPENCLAW_ICON_URL}
          alt=""
          width={compact ? 28 : 32}
          height={compact ? 28 : 32}
          className={compact ? 'h-7 w-7 shrink-0 object-contain' : 'h-8 w-8 shrink-0 object-contain'}
        />
        <span>Built on Openclaw</span>
      </span>
      <span className="mt-1 block sm:mt-2">Connects to your whole stack</span>
      {!compact ? (
        <span className="mt-2 block text-xl font-normal leading-snug text-slate-500 sm:mt-3 sm:text-2xl xl:text-[1.75rem]">
          Draft and refresh docs from the tools your team already uses
        </span>
      ) : null}
    </h2>
  );
}

function IntegrationsBody({ className = '' }: { className?: string }) {
  return (
    <p
      className={`mx-auto max-w-2xl text-center text-[15px] leading-relaxed text-ink-muted sm:text-base sm:leading-7 ${className}`}
    >
      Wonderdesk reads GitHub pull requests, Intercom tickets, Notion pages, Zendesk threads, and product
      updates — then drafts and refreshes help articles automatically.
    </p>
  );
}

export default function IntegrationsCapabilitySection({
  embedded = false,
}: IntegrationsCapabilitySectionProps) {
  if (embedded) {
    return (
      <div className="mt-10 border-t border-slate-200 pt-10 md:mt-12 md:pt-12">
        <div className="text-center">
          <p className="mb-3">
            <Link
              href="/integration"
              className="inline-flex items-center gap-0.5 text-sm font-medium text-wonder decoration-wonder/50 underline-offset-4 decoration-dotted decoration-2 hover:underline"
            >
              Unlimited capability
              <ChevronRight className="size-4" aria-hidden />
            </Link>
          </p>
          <OpenclawHeadline compact />
        </div>

        <div>
          <LandingIconsGrid />
        </div>

        <IntegrationsBody className="mt-6" />
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-neutral-50 to-white">
      <div className="landing-grid-column">
        <div className="landing-grid-pad border-b border-slate-200 py-12 sm:py-14 md:py-16 lg:py-20">
          <div className="text-center">
            <p className="mb-3 lg:mb-5">
              <Link
                href="/integration"
                className="inline-flex items-center gap-0.5 text-sm font-medium text-wonder decoration-wonder/50 underline-offset-4 decoration-dotted decoration-2 hover:underline md:text-base"
              >
                Unlimited capability
                <ChevronRight className="size-4" aria-hidden />
              </Link>
            </p>
            <OpenclawHeadline />
          </div>
        </div>

        <div className="border-b border-slate-200">
          <LandingIconsGrid />
        </div>

        <div className="landing-grid-pad border-b border-slate-200 py-10 sm:py-12 md:py-14">
          <IntegrationsBody />
        </div>
      </div>
    </section>
  );
}
