'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
      <Link
        href={primaryHref}
        className="flex min-h-[48px] w-full items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-700 sm:w-auto sm:text-base"
      >
        Get started for free
      </Link>

      <button
        type="button"
        data-cal-namespace="setup-call"
        data-cal-link="set-meeting/setup-call"
        data-cal-config='{"layout":"month_view"}'
        className="group flex min-h-[48px] w-full items-center justify-center rounded-md border border-gray-600 bg-white px-4 py-2.5 text-sm font-medium text-black transition duration-150 ease-in-out hover:bg-slate-800 hover:text-white sm:w-auto sm:text-base"
      >
        Book a demo
        <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}
