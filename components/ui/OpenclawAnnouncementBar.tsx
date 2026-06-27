'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { OPENCLAW_ICON_URL, OPENCLAW_SITE_URL } from '@/lib/openclawBrand';

export default function OpenclawAnnouncementBar() {
  return (
    <div className="site-top-bar border-b border-wonder/25 bg-gradient-to-r from-wonder-50 via-wonder-50 to-wonder-100/70">
      <Link
        href={OPENCLAW_SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-10 w-full items-center justify-center gap-2 px-4 text-sm text-wonder-800 transition-colors hover:text-wonder-700 sm:gap-2.5"
      >
        <span className="shrink-0 rounded-md border border-wonder/30 bg-white/70 px-1.5 py-0.5 font-silkscreen text-[10px] font-bold uppercase tracking-[0.14em] text-wonder-800">
          New
        </span>
        <Image
          src={OPENCLAW_ICON_URL}
          alt=""
          width={18}
          height={18}
          className="h-[18px] w-[18px] shrink-0 object-contain"
        />
        <span className="min-w-0 truncate font-medium sm:hidden">Built on Openclaw</span>
        <span className="hidden min-w-0 truncate font-medium sm:inline">
          Wonderdesk is now built on top of Openclaw
        </span>
        <span className="ml-1 hidden shrink-0 items-center gap-1 text-wonder/70 transition-colors group-hover:text-wonder sm:inline-flex">
          <span aria-hidden className="mr-1">
            |
          </span>
          <span>Learn more</span>
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} aria-hidden />
        </span>
      </Link>
    </div>
  );
}
