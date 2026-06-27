'use client';

import { ArrowRight } from 'lucide-react';
import WonderButton from '@/components/ui/WonderButton';

type HeroCTAsProps = {
  className?: string;
  primaryHref?: string;
  align?: 'start' | 'center';
};

export default function HeroCTAs({
  className = '',
  primaryHref = 'https://app.wonderdesk.ai?ref=landing',
  align = 'start',
}: HeroCTAsProps) {
  const alignClass = align === 'center' ? 'items-center justify-center' : 'items-start justify-start';

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${alignClass} ${className}`}>
      <WonderButton href={primaryHref} external size="md" className="w-full sm:w-auto">
        Get started for free
      </WonderButton>

      <WonderButton
        type="button"
        variant="secondary"
        size="md"
        className="group w-full sm:w-auto"
        data-cal-namespace="setup-call"
        data-cal-link="set-meeting/setup-call"
        data-cal-config='{"layout":"month_view"}'
        icon={
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
        }
      >
        Book a demo
      </WonderButton>
    </div>
  );
}
