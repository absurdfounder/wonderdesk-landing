'use client';

import Link from 'next/link';
import {
  Twitter,
  Linkedin,
  Youtube,
  Github,
  Sparkles,
  Bot,
  Globe,
  Chrome,
  Camera,
  MessageCircle,
  Code,
  BookOpen,
  ScrollText,
  HelpCircle,
  Zap,
} from 'lucide-react';
import WonderLogo from '@/components/ui/WonderLogo';
import PixelButton from '@/components/ui/PixelButton';

type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
  icon?: React.ReactNode;
};

type CellGroup = {
  heading: string;
  links: LinkItem[];
};

type FooterColumn = {
  eyebrow: string;
  groups: CellGroup[];
};

const featureColumn: FooterColumn = {
  eyebrow: 'Features',
  groups: [
    {
      heading: 'Features',
      links: [
        { label: 'Help Center', href: '/features/ai-help-center', icon: <Sparkles className="h-3.5 w-3.5 text-sky-500" /> },
        { label: 'AI Documentation', href: '/features/ai-documentation-agent', icon: <Bot className="h-3.5 w-3.5 text-amber-500" /> },
        { label: 'Automated screenshots', href: '/features/automated-screenshots-for-docs', icon: <Camera className="h-3.5 w-3.5 text-orange-500" /> },
        { label: 'Self-service widget', href: '/features/self-service-help-widget', icon: <MessageCircle className="h-3.5 w-3.5 text-rose-500" /> },
        { label: 'Blog', href: '/create-a-blog-notion', icon: <BookOpen className="h-3.5 w-3.5 text-blue-500" /> },
        { label: 'Changelog', href: '/create-a-changelog-notion', icon: <ScrollText className="h-3.5 w-3.5 text-indigo-500" /> },
        { label: 'Code to help docs', href: '/features/code-to-docs', icon: <Code className="h-3.5 w-3.5 text-violet-500" /> },
        { label: 'Multilingual', href: '/features/multilingual-knowledge-base', icon: <Globe className="h-3.5 w-3.5 text-teal-500" /> },
        { label: 'Internal knowledge base', href: '/features/internal-knowledge-base', icon: <HelpCircle className="h-3.5 w-3.5 text-stone-500" /> },
        { label: 'Chrome extension', href: '/features/chrome-extension-for-documentation', icon: <Chrome className="h-3.5 w-3.5 text-amber-700" /> },
        { label: 'AI answers', href: '/features/generative-ai-customer-service', icon: <Sparkles className="h-3.5 w-3.5 text-lime-600" /> },
        { label: 'Integrations', href: '/integration', icon: <Zap className="h-3.5 w-3.5 text-blue-500" /> },
      ],
    },
    {
      heading: 'Get help',
      links: [
        { label: 'Contact us', href: 'mailto:support@wonderdesk.ai' },
        { label: 'Privacy policy', href: '/privacy' },
        { label: 'Terms of service', href: '/terms' },
      ],
    },
  ],
};

const productColumn: FooterColumn = {
  eyebrow: 'Product',
  groups: [
    {
      heading: 'Product',
      links: [
        { label: 'How it works', href: '/' },
        { label: 'Examples', href: '/showcase' },
        { label: 'Integrations', href: '/integration' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Dashboard', href: 'https://app.wonderdesk.ai', external: true },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Blog templates', href: '/create-a-blog-notion' },
        { label: 'Agency', href: '/agency' },
        { label: 'Affiliate', href: '/affiliate' },
        { label: 'Compare', href: '/compare-against/helpjuice' },
      ],
    },
  ],
};

const alternativesColumn: FooterColumn = {
  eyebrow: 'Alternatives',
  groups: [
    {
      heading: 'Alternatives',
      links: [
        { label: 'Intercom alternative', href: '/compare-against/intercom-help-center' },
        { label: 'Helpjuice alternative', href: '/compare-against/helpjuice' },
        { label: 'KnowledgeOwl alternative', href: '/compare-against/knowledgeowl' },
        { label: 'Archbee alternative', href: '/compare-against/archbee' },
        { label: 'Stonly alternative', href: '/compare-against/stonly' },
      ],
    },
  ],
};

function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <ul className="space-y-1.5">
      {links.map((l) => {
        const className = 'group flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900';
        const content = (
          <>
            {l.icon ? <span className="shrink-0">{l.icon}</span> : null}
            <span>{l.label}</span>
          </>
        );
        if (l.external) {
          return (
            <li key={l.label}>
              <a className={className} href={l.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            </li>
          );
        }
        return (
          <li key={l.label}>
            <Link className={className} href={l.href}>
              {content}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function FooterColumnCell({ column, borderRight }: { column: FooterColumn; borderRight: boolean }) {
  return (
    <div
      className={[
        'flex flex-col gap-6 px-6 py-8 md:px-8 md:py-10',
        borderRight ? 'lg:border-r lg:border-slate-100' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {column.groups.map((group, gIdx) => (
        <div key={group.heading} className={gIdx > 0 ? 'border-t border-slate-100 pt-5' : ''}>
          <div className="mb-3 text-sm font-semibold text-slate-900">{group.heading}</div>
          <LinkList links={group.links} />
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  const linkColumns = [featureColumn, productColumn, alternativesColumn];

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl border-l border-r border-slate-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-5 border-b border-slate-100 px-6 py-8 sm:col-span-2 md:px-8 md:py-10 lg:col-span-1 lg:border-b-0 lg:border-r lg:border-slate-100">
            <WonderLogo characterClassName="h-10 w-10 sm:h-11 sm:w-11 rounded-md object-contain" textClassName="text-lg sm:text-xl" />
            <p className="text-sm leading-relaxed text-slate-600">
              The AI agent that keeps your help center, blog, changelog, and documentation up to date.
            </p>
            <p className="text-sm text-slate-600">
              Built by{' '}
              <a
                className="text-wonder hover:underline"
                href="https://twitter.com/absurdfounder"
                target="_blank"
                rel="noopener noreferrer"
              >
                @absurdfounder
              </a>
              .
            </p>
            <ul className="mt-auto space-y-1.5 pt-2">
              <li>
                <a
                  className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900"
                  href="https://twitter.com/absurdfounder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-3.5 w-3.5 text-slate-400" />
                  <span>Twitter (X)</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900"
                  href="https://www.linkedin.com/company/wondersites"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-3.5 w-3.5 text-slate-400" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-slate-900"
                  href="https://www.youtube.com/@wondersites"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="h-3.5 w-3.5 text-slate-400" />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>

          {linkColumns.map((col, idx) => {
            const isLast = idx === linkColumns.length - 1;
            const isMobileLast = idx === linkColumns.length - 1;
            return (
              <div
                key={col.eyebrow}
                className={[
                  !isMobileLast ? 'border-b border-slate-100 sm:border-b lg:border-b-0' : '',
                  idx % 2 === 0 ? 'sm:border-r sm:border-slate-100 lg:border-r-0' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <FooterColumnCell column={col} borderRight={!isLast} />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-100 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 md:text-sm">
            <span>© Boring Sites LLC. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <PixelButton
              href="https://github.com/absurdfounder"
              external
              size="sm"
              variant="outline"
              tone="dark"
              ariaLabel="Track my commits on GitHub"
              icon={<Github className="h-3.5 w-3.5" strokeWidth={2} />}
            >
              <span className="hidden md:inline">Track my commits</span>
              <span className="md:hidden">Commits</span>
            </PixelButton>
            <a
              href="https://www.notion.com/integrations/wonder-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-200 bg-white px-3 py-2 text-xs font-mono uppercase tracking-[0.12em] text-slate-600 transition-colors hover:text-slate-900 md:text-[11px]"
            >
              <span className="text-slate-400">Powered by</span>
              <img
                src="https://www.notion.com/front-static/favicon.ico"
                alt=""
                className="h-3.5 w-3.5 rounded-sm"
                loading="lazy"
              />
              <span className="font-semibold text-slate-700">Notion</span>
            </a>
          </div>
        </div>

        <div className="overflow-x-hidden border-t border-slate-100 pb-5 pt-3 sm:pb-6 sm:pt-4 md:pb-8">
          <p
            aria-hidden
            className="pointer-events-none select-none whitespace-nowrap text-center font-brand lowercase leading-none tracking-tight text-slate-200 text-[clamp(2.75rem,18vw,12rem)]"
          >
            wonder.
          </p>
        </div>
      </div>
    </footer>
  );
}
