'use client';

import { ArrowRight } from 'lucide-react';
import PixelButton from '@/components/ui/PixelButton';

export default function Newsletter() {
  return (
    <div className="pb-8 pt-2 md:pb-12">
      <div className="border border-slate-200 bg-white px-6 py-10 sm:px-10 sm:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl font-medium tracking-tight text-slate-900 leading-tight sm:text-3xl md:text-[2rem]">
              Stop living at your desk all day —{' '}
              <span className="text-wonder">automate it.</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Outdated posts waste time, money, and trust. Let Wonder run your help center and blog on
              automations that stay current.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:gap-4">
            <PixelButton
              href="https://app.wonderdesk.ai"
              external
              size="lg"
              tone="brand"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Get started free
            </PixelButton>
            <PixelButton href="/pricing" size="lg" variant="outline" tone="dark">
              View pricing
            </PixelButton>
          </div>
        </div>
      </div>
    </div>
  );
}
