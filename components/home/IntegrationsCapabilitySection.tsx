import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import LandingIconsGrid from '@/components/LandingIconsGrid';

export default function IntegrationsCapabilitySection() {
  return (
    <section className="bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto max-w-7xl border border-[var(--color-line)] border-b-0">
        <div className="border-b border-[var(--color-line)] px-6 py-12 pb-6 sm:px-8 sm:py-16 md:px-14 md:py-24 xl:px-36">
          <div className="text-center">
            <p className="mb-2 lg:mb-6">
              <Link
                href="/integration"
                className="inline-flex items-center gap-0.5 text-sm font-medium text-wonder decoration-wonder/50 underline-offset-4 decoration-dotted decoration-2 hover:underline md:text-base"
              >
                Unlimited capability
                <ChevronRight className="size-4" aria-hidden />
              </Link>
            </p>
            <h2 className="font-display text-3xl font-medium leading-9 tracking-tight text-ink sm:text-4xl sm:leading-11 xl:text-[2.75rem] xl:leading-[3rem]">
              Anything your product touches,
              <br />
              Wonderdesk keeps documented.
            </h2>
          </div>
        </div>

        <div className="border-b border-[var(--color-line)] p-0">
          <LandingIconsGrid />
        </div>

        <div className="border-b border-[var(--color-line)] px-6 py-10 sm:px-8 sm:py-12 md:px-14 md:py-16 xl:px-36">
          <p className="mx-auto max-w-2xl text-center text-[15px] leading-relaxed text-ink-muted sm:text-base sm:leading-7">
            Unlike help centers that rely on brittle copy-paste, Wonderdesk connects to GitHub, Intercom,
            Notion, Zendesk, and the tools your team already uses — reading tickets, code changes, and
            product updates to draft and refresh docs automatically.
          </p>
        </div>
      </div>
    </section>
  );
}
