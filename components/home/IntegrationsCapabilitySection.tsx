import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import LandingIconsGrid from '@/components/LandingIconsGrid';

const OPENCLAW_ICON =
  'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/openclaw-color.png';

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
            <h2 className="mx-auto max-w-4xl font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl xl:text-[2.75rem] xl:leading-[3rem]">
              <span className="inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 leading-tight sm:leading-[1.15]">
                <Image
                  src={OPENCLAW_ICON}
                  alt=""
                  width={36}
                  height={36}
                  className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
                />
                <span>Openclaw meets Support</span>
              </span>
              <span className="mt-3 block text-lg font-normal leading-snug text-slate-500 sm:mt-4 sm:text-xl xl:text-2xl">
                Automate everything about Support
              </span>
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
