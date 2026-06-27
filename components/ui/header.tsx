'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Sparkles, Camera, MessageCircle, Code, Globe, Lock, Zap, Chrome, Bot, BookOpen, ScrollText } from 'lucide-react';
import Logo from '@/public/images/logonew-black.png';
import MobileMenu from './mobile-menu';
import TabletMenu from './tablet-menu';
import TranslateButton from './TranslateButton';
import PixelButton from '@/components/ui/PixelButton';

const featureNavItems = [
  { href: '/features/ai-help-center', title: 'Help Center', description: 'Self-updating knowledge base', icon: Sparkles, iconColor: 'text-sky-500', bgColor: 'bg-sky-50' },
  { href: '/features/ai-documentation-agent', title: 'AI agent', description: 'AI that writes your docs', icon: Bot, iconColor: 'text-amber-500', bgColor: 'bg-amber-50' },
  { href: '/features/automated-screenshots-for-docs', title: 'Automated screenshots', description: 'Screenshots that stay current', icon: Camera, iconColor: 'text-orange-500', bgColor: 'bg-orange-50' },
  { href: '/features/self-service-help-widget', title: 'Self-service widget', description: 'Embed help in your product', icon: MessageCircle, iconColor: 'text-rose-500', bgColor: 'bg-rose-50' },
  { href: '/create-a-blog-notion', title: 'Blog', description: 'Beautiful automated blog', icon: BookOpen, iconColor: 'text-blue-500', bgColor: 'bg-blue-50' },
  { href: '/create-a-changelog-notion', title: 'Changelog', description: 'Automated product updates', icon: ScrollText, iconColor: 'text-indigo-500', bgColor: 'bg-indigo-50' },
  { href: '/features/code-to-docs', title: 'Code to help docs', description: 'Sync docs with your code', icon: Code, iconColor: 'text-violet-500', bgColor: 'bg-violet-50' },
  { href: '/features/multilingual-knowledge-base', title: 'Multilingual', description: 'Translate your help center', icon: Globe, iconColor: 'text-teal-500', bgColor: 'bg-teal-50' },
  { href: '/features/internal-knowledge-base', title: 'Internal knowledge base', description: 'Private docs with login required', icon: Lock, iconColor: 'text-stone-500', bgColor: 'bg-stone-50' },
  { href: '/features/generative-ai-customer-service', title: 'AI answers', description: 'Help desk chatbot for support', icon: Sparkles, iconColor: 'text-lime-600', bgColor: 'bg-lime-50' },
  { href: '/integration', title: 'Integrations', description: 'Connect your favorite tools', icon: Zap, iconColor: 'text-blue-500', bgColor: 'bg-blue-50' },
  { href: '/features/chrome-extension-for-documentation', title: 'Chrome extension', description: 'Update docs from any tab', icon: Chrome, iconColor: 'text-amber-700', bgColor: 'bg-amber-50/50' },
];

const primaryNavLinks = [
  { href: '/showcase', label: 'Examples' },
  { href: '/pricing', label: 'Pricing' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpenDropdown(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!openDropdown) return;
    const onPointerDown = (event: PointerEvent) => {
      if (navRef.current?.contains(event.target as Node)) return;
      setOpenDropdown(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenDropdown(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [openDropdown]);

  return (
    <header translate="no" className="site-header notranslate fixed top-0 z-[200] w-full transition-all duration-200">
      <div
        className={`border-b border-[var(--color-line)] bg-white transition-colors duration-200 transition-shadow duration-200 ${
          scrolled ? 'shadow-sm' : ''
        }`}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 border-l border-r border-[var(--color-line)] px-3 sm:h-16 sm:gap-4 sm:px-6">
          <Link href="/" className="relative shrink-0">
            <Image src={Logo} alt="Wonder Sites" width={260} height={200} className="h-auto w-28 sm:w-32 lg:w-36" priority />
          </Link>

          <nav ref={navRef} className="hidden flex-1 items-center justify-center lg:flex" aria-label="Primary">
            <ul className="flex items-center gap-1">
              <li className="relative z-[210]">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(!openDropdown)}
                  aria-expanded={openDropdown}
                  className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    openDropdown ? 'bg-slate-100 text-ink' : 'text-ink-muted hover:bg-slate-100 hover:text-ink'
                  }`}
                >
                  Features
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown ? 'rotate-180 text-slate-600' : 'text-slate-400'}`} />
                </button>
                {openDropdown ? (
                  <div className="absolute left-1/2 top-full z-[205] mt-2 w-[min(46rem,calc(100vw-2rem))] -translate-x-1/2" role="menu">
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl ring-1 ring-black/5">
                      <div className="p-5">
                        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Features</div>
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                          {featureNavItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpenDropdown(false)}
                                role="menuitem"
                                className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-slate-50"
                              >
                                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.bgColor} transition-transform group-hover:scale-105`}>
                                  <Icon className={`h-4 w-4 ${item.iconColor}`} strokeWidth={2} />
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="block text-sm font-medium text-slate-900 group-hover:text-wonder">{item.title}</span>
                                  <span className="mt-0.5 block truncate text-xs text-slate-500">{item.description}</span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </li>
              {primaryNavLinks.map((link) => (
                <li key={link.href} className="relative z-[220]">
                  <Link
                    href={link.href}
                    className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-[220] ml-auto flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:block">
              <TranslateButton />
            </div>
            <PixelButton href="https://app.wonderdesk.ai" external size="sm" variant="outline" tone="dark" className="hidden lg:inline-flex">
              Sign in
            </PixelButton>
            <PixelButton
              href="https://app.wonderdesk.ai"
              external
              size="sm"
              tone="brand"
              className="hidden lg:inline-flex"
              icon={<ArrowRight className="h-3 w-3" strokeWidth={2.5} />}
            >
              Get started
            </PixelButton>
            <div className="hidden md:block lg:hidden">
              <TabletMenu />
            </div>
            <div className="block md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
