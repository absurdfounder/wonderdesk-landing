'use client';

import type { ReactNode } from 'react';
import {
  ArrowRight,
  BarChart3,
  Folder,
  Github,
  Globe,
  Lock,
  MessageSquare,
  RefreshCw,
  Search,
  Sparkles,
  X,
} from 'lucide-react';

export const WONDER_CHAR = 'https://dazzling-cat.netlify.app/wondercharacter.png';

export function WonderBear({
  className = '',
  size = 72,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <img
      src={WONDER_CHAR}
      alt=""
      className={`pointer-events-none object-contain drop-shadow-md ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export function SkyBackdrop({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#7ec8e3] via-[#a8daf0] to-[#cceeff]">
      <div
        className="pointer-events-none absolute -left-8 top-6 h-16 w-28 rounded-full bg-white/55 blur-md"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-4 top-10 h-12 w-20 rounded-full bg-white/45 blur-md"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#e6f7fb]/90 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 flex h-full items-center justify-center p-4">{children}</div>
    </div>
  );
}

export function WindowChrome({
  title,
  children,
  className = '',
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-slate-200/90 bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.2)] ring-1 ring-black/[0.05] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-slate-100 bg-[#fafafa] px-3 py-2">
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        {title ? (
          <span className="truncate font-mono text-[9px] uppercase tracking-wide text-slate-400">{title}</span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

export function ScoreRing({
  score,
  label,
  size = 56,
}: {
  score: number;
  label: string;
  size?: number;
}) {
  const r = (size - 10) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;
  const stroke = score >= 90 ? '#009fbc' : score >= 50 ? '#f59e0b' : '#ef4444';

  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="h-full w-full -rotate-90" viewBox={`0 0 ${size} ${size}`} aria-hidden>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="4"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={stroke}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
          />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center font-semibold tabular-nums text-slate-800"
          style={{ fontSize: size * 0.28 }}
        >
          {score}
        </span>
      </div>
      <span className="max-w-[64px] text-center text-[8px] font-medium leading-tight text-slate-500">
        {label}
      </span>
    </div>
  );
}

export function BarChart({ className = '' }: { className?: string }) {
  const bars = [38, 55, 48, 72, 58, 85, 68, 92, 74, 88, 80, 94];
  return (
    <div className={`flex h-12 items-end gap-[2px] sm:h-14 ${className}`}>
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-wonder"
          style={{ height: `${h}%`, opacity: 0.45 + (i / bars.length) * 0.55 }}
        />
      ))}
    </div>
  );
}

export function MetricTiles({
  metrics,
}: {
  metrics: Array<{ v: string; l: string }>;
}) {
  return (
    <div className="grid grid-cols-4 gap-1.5">
      {metrics.map((m) => (
        <div
          key={m.l}
          className="rounded border border-slate-100 bg-slate-50/90 px-1.5 py-1 text-center"
        >
          <p className="text-[11px] font-semibold tabular-nums text-slate-900 sm:text-xs">{m.v}</p>
          <p className="text-[7px] uppercase tracking-wide text-slate-400 sm:text-[8px]">{m.l}</p>
        </div>
      ))}
    </div>
  );
}

/** Add Domain modal — matches wonderdomain reference */
export function DomainSetupModal({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`w-full overflow-hidden rounded-lg border border-white/80 bg-white shadow-xl ${
        compact ? 'max-w-[220px]' : 'max-w-[300px]'
      }`}
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5">
        <span className={`font-semibold text-slate-900 ${compact ? 'text-xs' : 'text-sm'}`}>
          Add Domain
        </span>
        <X size={compact ? 12 : 14} className="text-slate-400" />
      </div>
      <div className="space-y-2 p-3">
        <p className="text-[9px] font-medium uppercase tracking-wide text-slate-500">
          Choose setup type
        </p>
        <div className="rounded-md border-2 border-orange-500 bg-orange-50/50 p-2">
          <div className="flex items-start gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-orange-200 bg-white">
              <Globe size={14} className="text-orange-600" />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-slate-900">Domain or Subdomain</p>
              <p className="text-[8px] text-slate-500">help.yourcompany.com</p>
            </div>
          </div>
        </div>
        <div className="rounded-md border border-slate-200 p-2">
          <div className="flex items-start gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded border border-slate-200 bg-slate-50">
              <Folder size={14} className="text-slate-500" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <p className="text-[10px] font-semibold text-slate-900">Subdirectory</p>
                <span className="rounded-full bg-orange-100 px-1.5 py-px text-[7px] font-semibold text-orange-700">
                  Recommended
                </span>
              </div>
              <p className="text-[8px] text-slate-500">yourcompany.com/help</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end border-t border-slate-100 px-3 py-2">
        <span className="rounded bg-orange-600 px-3 py-1 text-[10px] font-semibold text-white">
          Proceed
        </span>
      </div>
    </div>
  );
}

/** Help center search + analytics stack */
export function HelpCenterAnalyticsStack({ showBear = true }: { showBear?: boolean }) {
  return (
    <div className="relative h-full w-full px-3 py-4 sm:px-4">
      <div className="overflow-hidden rounded-lg border border-slate-200/80 bg-white/95 shadow-sm">
        <div className="border-b border-slate-100 px-3 py-2">
          <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5">
            <Search size={12} className="text-slate-400" />
            <span className="text-[10px] text-slate-400">How can we help?</span>
          </div>
        </div>
        <div className="relative p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[9px] text-slate-500">help.notionbear.com</span>
            <span className="rounded-full bg-wonder/10 px-1.5 py-px text-[7px] font-semibold uppercase text-wonder-800">
              Indexed
            </span>
          </div>
          <MetricTiles
            metrics={[
              { v: '20k', l: 'Views' },
              { v: '11k', l: 'Searches' },
              { v: '64%', l: 'Resolved' },
              { v: '43s', l: 'Avg time' },
            ]}
          />
          <div className="mt-2 border-t border-slate-100 pt-2">
            <BarChart />
          </div>
        </div>
      </div>
      {showBear ? (
        <WonderBear
          className="absolute -bottom-1 right-1 sm:right-3"
          size={64}
        />
      ) : null}
    </div>
  );
}

/** Site preview + Lighthouse panel */
export function SiteWithLighthouse({
  siteTitle = 'AIRDROPS WORK',
  headerTint = 'from-rose-200/80 to-orange-100/70',
}: {
  siteTitle?: string;
  headerTint?: string;
}) {
  return (
    <div className="relative flex h-full w-full flex-col justify-end px-3 pb-3 pt-4 sm:px-4">
      <div className="pointer-events-none absolute inset-x-3 top-4 overflow-hidden rounded-md border border-slate-200/70 bg-white opacity-70 sm:inset-x-4">
        <div className={`bg-gradient-to-r px-3 py-2 ${headerTint}`}>
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-700">{siteTitle}</p>
        </div>
        <div className="space-y-1.5 px-3 py-3">
          <div className="h-1.5 w-3/4 rounded bg-slate-100" />
          <div className="h-1.5 w-full rounded bg-slate-100" />
          <div className="h-1.5 w-5/6 rounded bg-slate-100" />
        </div>
      </div>

      <div className="relative z-10 rounded-lg border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur-sm">
        <p className="mb-2 text-center text-[8px] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Lighthouse scores
        </p>
        <div className="flex items-start justify-between gap-0.5">
          <ScoreRing score={98} label="Performance" size={48} />
          <ScoreRing score={100} label="Accessibility" size={48} />
          <ScoreRing score={100} label="Best Practices" size={48} />
          <ScoreRing score={100} label="SEO" size={48} />
        </div>
      </div>

      <WonderBear className="absolute bottom-0 left-2 sm:left-4" size={56} />
    </div>
  );
}

/** Notion workspace vignette */
export function NotionWorkspaceVignette() {
  return (
    <div className="relative flex h-full w-full items-center justify-center gap-2 px-3 py-4 sm:gap-3 sm:px-5">
      <WindowChrome title="Notion" className="w-[58%] max-w-[260px] shrink-0">
        <div className="flex min-h-[140px]">
          <div className="w-[28%] border-r border-slate-100 bg-slate-50/80 p-2">
            <p className="text-[7px] font-semibold text-slate-500">Workspace</p>
            <div className="mt-2 space-y-1">
              {['Search', 'Home', 'Inbox'].map((item) => (
                <div key={item} className="h-1 w-full rounded bg-slate-200/80" />
              ))}
            </div>
          </div>
          <div className="flex-1 p-2.5">
            <p className="text-[11px] font-semibold text-slate-900">Vetted Applicants</p>
            <div className="mt-2 space-y-1">
              <div className="h-1 w-full rounded bg-slate-100" />
              <div className="h-1 w-4/5 rounded bg-slate-100" />
            </div>
            <div className="mt-3 rounded border border-slate-200 bg-white p-1.5 shadow-sm">
              <p className="text-[8px] font-medium text-slate-600">Basic blocks</p>
              <div className="mt-1 space-y-0.5">
                <div className="h-1 w-full rounded bg-slate-100" />
                <div className="h-1 w-3/4 rounded bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </WindowChrome>

      <div className="relative flex flex-col items-center">
        <WonderBear size={80} />
        <span className="mt-1 rounded bg-slate-900 px-2 py-0.5 text-[8px] font-bold text-white">Notion</span>
      </div>
    </div>
  );
}

/** Notion → Wonder sync flow */
export function NotionToWonderSync() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-3 px-4">
      <WindowChrome className="w-[38%] max-w-[150px]">
        <div className="p-2.5">
          <p className="text-[9px] font-semibold text-slate-800">Getting started</p>
          <div className="mt-2 space-y-1">
            <div className="h-1 w-full rounded bg-slate-100" />
            <div className="h-1 w-5/6 rounded bg-slate-100" />
          </div>
        </div>
      </WindowChrome>

      <div className="flex flex-col items-center text-wonder">
        <RefreshCw size={16} strokeWidth={2} className="animate-[spin_8s_linear_infinite]" />
        <span className="mt-0.5 font-mono text-[7px] uppercase tracking-wider">Sync</span>
      </div>

      <WindowChrome className="w-[38%] max-w-[150px]">
        <div className="border-b border-wonder/20 bg-wonder/5 px-2 py-1.5">
          <span className="font-mono text-[8px] text-wonder-800">help.co.com</span>
        </div>
        <div className="p-2.5">
          <div className="h-1.5 w-2/3 rounded bg-wonder/30" />
          <div className="mt-1.5 h-1 w-full rounded bg-slate-100" />
        </div>
      </WindowChrome>
    </div>
  );
}

export function MembershipPaywallVisual() {
  const tiers = [
    { name: 'Free', price: '$0', active: false },
    { name: 'Pro', price: '$12', active: true },
    { name: 'Team', price: '$49', active: false },
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-4 py-5">
      <div className="mb-3 flex w-full max-w-[300px] gap-1.5">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex-1 rounded-md border px-1.5 py-2 text-center ${
              tier.active ? 'border-orange-500 bg-orange-50' : 'border-slate-200 bg-white'
            }`}
          >
            <p className="text-[9px] font-semibold">{tier.name}</p>
            <p className="text-xs font-bold tabular-nums">{tier.price}</p>
          </div>
        ))}
      </div>
      <div className="relative w-full max-w-[300px] overflow-hidden rounded-lg border border-slate-200 bg-white">
        <div className="space-y-1.5 p-4 opacity-40 blur-[1px]">
          <div className="h-1.5 w-2/3 rounded bg-slate-200" />
          <div className="h-1 w-full rounded bg-slate-100" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/85">
          <Lock size={18} className="text-wonder" />
          <p className="mt-1.5 text-[10px] font-semibold">Members-only article</p>
          <span className="mt-1.5 rounded bg-orange-600 px-2.5 py-0.5 text-[9px] font-semibold text-white">
            Subscribe
          </span>
        </div>
      </div>
    </div>
  );
}

export function AiChatWidgetVisual() {
  return (
    <div className="relative flex h-full w-full items-end justify-end p-4">
      <div className="pointer-events-none absolute inset-x-4 top-5 rounded-md border border-slate-200/80 bg-white/60 p-3 opacity-60">
        <div className="h-1.5 w-3/4 rounded bg-slate-100" />
        <div className="mt-1 h-1.5 w-full rounded bg-slate-100" />
      </div>

      <div className="relative z-10 w-full max-w-[280px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-wonder/5 px-3 py-2">
          <img src={WONDER_CHAR} alt="" className="h-5 w-5 rounded object-cover" />
          <span className="text-[11px] font-semibold">Wonder AI</span>
          <Sparkles size={11} className="ml-auto text-wonder" />
        </div>
        <div className="space-y-2 p-3">
          <div className="flex flex-wrap gap-1">
            {['Reset password', 'Billing', 'API docs'].map((s) => (
              <span
                key={s}
                className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[9px] text-slate-600"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="rounded-lg bg-violet-50 px-2.5 py-1.5 text-[10px] text-violet-900">
            That&apos;s great. Thanks so much!
          </div>
          <div className="max-w-[90%] rounded-lg rounded-tl-sm bg-wonder/10 px-2.5 py-1.5 text-[10px] leading-relaxed text-slate-700">
            I found 3 articles about password resets. Open the best match?
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-slate-100 px-3 py-1.5">
          <MessageSquare size={12} className="text-slate-400" />
          <span className="flex-1 text-[10px] text-slate-400">Ask anything…</span>
          <ArrowRight size={12} className="text-wonder" />
        </div>
      </div>
    </div>
  );
}

export function IntegrationsGridVisual() {
  const apps = [
    { name: 'Slack', logo: 'https://cdn.simpleicons.org/slack/4A154B' },
    { name: 'Intercom', logo: 'https://dazzling-cat.netlify.app/intercom.png' },
    { name: 'Crisp', logo: 'https://dazzling-cat.netlify.app/crisp.png' },
    { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot/FF7A59' },
    { name: 'Zendesk', logo: 'https://dazzling-cat.netlify.app/zendesk.jpg' },
    { name: 'GitHub', icon: true },
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-4 py-5">
      <div className="w-full max-w-[320px] rounded-xl border border-dashed border-slate-300 bg-white/80 p-3">
        <div className="grid grid-cols-3 gap-1.5">
          {apps.map((app) => (
            <div
              key={app.name}
              className="flex flex-col items-center gap-1 rounded-lg border border-slate-200 bg-white px-1.5 py-2.5"
            >
              {app.icon ? (
                <Github size={20} className="text-slate-700" />
              ) : (
                <img src={app.logo} alt="" className="h-5 w-5 object-contain" />
              )}
              <span className="font-mono text-[7px] uppercase tracking-wide text-slate-500">{app.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 rounded-full border border-wonder/30 bg-wonder/5 px-2.5 py-0.5">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wonder opacity-50" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-wonder" />
        </span>
        <span className="font-mono text-[9px] uppercase tracking-wide text-wonder-800">Connected</span>
      </div>
    </div>
  );
}

export function AnalyticsDashboardVisual() {
  return (
    <div className="relative flex h-full w-full flex-col justify-center px-4 py-4">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <BarChart3 size={12} className="text-wonder" />
            <span className="font-mono text-[9px] text-slate-600">help.acme.com</span>
          </div>
          <span className="font-mono text-[8px] uppercase text-slate-400">30 days</span>
        </div>
        <div className="p-3">
          <MetricTiles
            metrics={[
              { v: '20k', l: 'Views' },
              { v: '11k', l: 'Visitors' },
              { v: '64%', l: 'Clicks' },
              { v: '43s', l: 'Avg' },
            ]}
          />
          <div className="mt-2 border-t border-slate-100 pt-2">
            <BarChart />
          </div>
        </div>
      </div>
      <WonderBear className="absolute bottom-3 right-4" size={56} />
    </div>
  );
}
