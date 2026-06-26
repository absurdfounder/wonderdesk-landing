'use client';

import {
  ArrowRight,
  BarChart3,
  Github,
  Lock,
  MessageSquare,
  RefreshCw,
  Search,
  Sparkles,
} from 'lucide-react';
import FeatureVisualStage from '../ui/FeatureVisualStage';

const WONDER_CHAR = 'https://dazzling-cat.netlify.app/wondercharacter.png';

function BarChart() {
  const bars = [38, 62, 48, 78, 55, 88, 72, 94, 68, 82, 76, 91];
  return (
    <div className="flex h-14 items-end gap-[3px]">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-wonder/75"
          style={{ height: `${h}%`, opacity: 0.5 + (i / bars.length) * 0.5 }}
        />
      ))}
    </div>
  );
}

export function NotionHostingVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-4 bg-gradient-to-br from-slate-50 to-white px-6 py-8">
      <div className="w-[42%] max-w-[180px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 bg-slate-50 px-3 py-2">
          <span className="font-mono text-[9px] uppercase tracking-wide text-slate-400">Notion</span>
        </div>
        <div className="space-y-2 p-3">
          <div className="h-2 w-2/3 rounded bg-slate-800" />
          <div className="h-1.5 w-full rounded bg-slate-100" />
          <div className="h-1.5 w-5/6 rounded bg-slate-100" />
          <div className="h-1.5 w-full rounded bg-slate-100" />
          <div className="mt-2 rounded border border-slate-100 bg-slate-50 px-2 py-1.5">
            <p className="text-[10px] font-medium text-slate-700">Getting started guide</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 text-wonder">
        <RefreshCw size={18} strokeWidth={2} />
        <span className="font-mono text-[8px] uppercase tracking-wider">Sync</span>
      </div>

      <div className="w-[42%] max-w-[180px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 bg-wonder/5 px-3 py-2">
          <span className="truncate font-mono text-[9px] text-slate-500">help.co.com</span>
          <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-700">
            <span className="h-1 w-1 rounded-full bg-emerald-500" />
            Live
          </span>
        </div>
        <div className="space-y-2 p-3">
          <div className="h-2 w-1/2 rounded bg-wonder/30" />
          <div className="h-1.5 w-full rounded bg-slate-100" />
          <div className="h-1.5 w-4/5 rounded bg-slate-100" />
        </div>
      </div>
    </div>
  );
}

export function SeoVisual() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-4 bg-gradient-to-b from-slate-50 to-white px-6 py-6">
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-3 py-2">
          <span className="font-mono text-[9px] uppercase tracking-wide text-slate-400">SEO settings</span>
        </div>
        <div className="space-y-2.5 p-3">
          {[
            { label: 'Title', value: 'Help Center — Acme Co' },
            { label: 'Description', value: 'Answers, guides, and product docs…' },
            { label: 'Schema', value: 'FAQPage · Article · Breadcrumb' },
          ].map((row) => (
            <div key={row.label}>
              <p className="text-[9px] font-medium uppercase tracking-wide text-slate-400">{row.label}</p>
              <p className="mt-0.5 truncate text-[11px] text-slate-700">{row.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
        <div className="mb-1 flex items-center gap-1.5">
          <Search size={12} className="text-slate-400" />
          <span className="font-mono text-[10px] text-slate-400">google.com</span>
        </div>
        <p className="text-[12px] font-medium text-[#1a0dab]">Acme Help Center — Getting Started</p>
        <p className="mt-0.5 line-clamp-2 text-[10px] leading-snug text-slate-500">
          help.acme.com — Step-by-step guides, FAQs, and product documentation…
        </p>
      </div>
    </div>
  );
}

export function MembershipVisual() {
  const tiers = [
    { name: 'Free', price: '$0', active: false },
    { name: 'Pro', price: '$12', active: true },
    { name: 'Team', price: '$49', active: false },
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-orange-50/50 to-white px-6 py-6">
      <div className="mb-4 flex w-full max-w-[320px] gap-2">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex-1 rounded-lg border px-2 py-3 text-center ${
              tier.active
                ? 'border-orange-500 bg-orange-50 shadow-sm'
                : 'border-slate-200 bg-white'
            }`}
          >
            <p className="text-[10px] font-semibold text-slate-800">{tier.name}</p>
            <p className="mt-1 text-sm font-bold tabular-nums text-slate-900">{tier.price}</p>
            <p className="text-[9px] text-slate-400">/mo</p>
          </div>
        ))}
      </div>

      <div className="relative w-full max-w-[320px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="space-y-2 p-4 opacity-40 blur-[1px]">
          <div className="h-2 w-2/3 rounded bg-slate-200" />
          <div className="h-1.5 w-full rounded bg-slate-100" />
          <div className="h-1.5 w-5/6 rounded bg-slate-100" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80">
          <Lock size={20} className="text-orange-600" strokeWidth={1.75} />
          <p className="mt-2 text-xs font-semibold text-slate-800">Members-only article</p>
          <span className="mt-2 rounded-md bg-orange-600 px-3 py-1 text-[10px] font-semibold text-white">
            Subscribe to read
          </span>
        </div>
      </div>
    </div>
  );
}

export function AnalyticsVisual() {
  return (
    <div className="flex h-full w-full flex-col justify-center bg-gradient-to-b from-slate-50 to-white px-5 py-5">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <BarChart3 size={14} className="text-wonder" strokeWidth={2} />
            <span className="font-mono text-[10px] text-slate-600">help.acme.com</span>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-wide text-slate-400">Last 30 days</span>
        </div>

        <div className="grid grid-cols-4 gap-2 px-4 py-3">
          {[
            { v: '20k', l: 'Views' },
            { v: '11k', l: 'Visitors' },
            { v: '64%', l: 'Clicks' },
            { v: '43s', l: 'Avg time' },
          ].map((m) => (
            <div key={m.l} className="rounded-md border border-slate-100 bg-slate-50/80 px-2 py-1.5 text-center">
              <p className="text-[13px] font-semibold tabular-nums text-slate-900">{m.v}</p>
              <p className="text-[8px] uppercase tracking-wide text-slate-400">{m.l}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-100 px-4 py-3">
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export function AiSupportVisual() {
  const suggestions = ['Reset password', 'Billing help', 'API docs'];

  return (
    <div className="relative flex h-full w-full items-end justify-end bg-gradient-to-br from-violet-50/60 via-white to-slate-50 px-5 py-5">
      <div className="pointer-events-none absolute inset-x-5 top-5 overflow-hidden rounded-lg border border-slate-200/80 bg-white opacity-50">
        <div className="bg-slate-100 px-3 py-2">
          <p className="text-[10px] font-semibold text-slate-600">Help Center</p>
        </div>
        <div className="space-y-2 p-3">
          <div className="h-2 w-3/4 rounded bg-slate-100" />
          <div className="h-2 w-full rounded bg-slate-100" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[300px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_16px_40px_-12px_rgba(15,23,42,0.15)]">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-wonder/5 px-3 py-2.5">
          <img src={WONDER_CHAR} alt="" className="h-6 w-6 rounded-md object-cover" />
          <span className="text-[12px] font-semibold text-slate-900">Wonder AI</span>
          <Sparkles size={12} className="ml-auto text-wonder" />
        </div>

        <div className="space-y-2.5 p-3">
          <div className="flex flex-wrap gap-1.5">
            {suggestions.map((s) => (
              <span
                key={s}
                className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] text-slate-600"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="rounded-lg bg-slate-100 px-3 py-2 text-[11px] leading-relaxed text-slate-600">
            That&apos;s great. Thanks so much!
          </div>

          <div className="flex gap-2">
            <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-wonder/10 px-3 py-2 text-[11px] leading-relaxed text-slate-700">
              I found 3 articles about password resets. Want me to open the best match?
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-slate-100 px-3 py-2">
          <MessageSquare size={14} className="text-slate-400" />
          <span className="flex-1 text-[11px] text-slate-400">Ask anything…</span>
          <ArrowRight size={14} className="text-wonder" />
        </div>
      </div>
    </div>
  );
}

export function IntegrationsVisual() {
  const apps = [
    { name: 'Slack', logo: 'https://cdn.simpleicons.org/slack/4A154B' },
    { name: 'Intercom', logo: 'https://dazzling-cat.netlify.app/intercom.png' },
    { name: 'Crisp', logo: 'https://dazzling-cat.netlify.app/crisp.png' },
    { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot/FF7A59' },
    { name: 'Zendesk', logo: 'https://dazzling-cat.netlify.app/zendesk.jpg' },
    { name: 'GitHub', icon: Github },
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-white px-6 py-6">
      <div className="w-full max-w-[340px] rounded-xl border border-dashed border-slate-300 bg-white/70 p-4">
        <div className="grid grid-cols-3 gap-2">
          {apps.map((app) => (
            <div
              key={app.name}
              className="flex flex-col items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2 py-3"
            >
              {'logo' in app && app.logo ? (
                <img src={app.logo} alt="" className="h-6 w-6 rounded object-contain" />
              ) : (
                <Github size={22} className="text-slate-700" strokeWidth={1.75} />
              )}
              <span className="font-mono text-[8px] uppercase tracking-wide text-slate-500">{app.name}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center font-mono text-[10px] tracking-wide text-slate-400">
          Slack · chat · CRM · code
        </p>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-full border border-wonder/30 bg-wonder/5 px-3 py-1">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wonder opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-wonder" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-wonder-800">Connected</span>
      </div>
    </div>
  );
}

export const OLD_WAYS_VISUALS = [
  NotionHostingVisual,
  SeoVisual,
  MembershipVisual,
  AnalyticsVisual,
  AiSupportVisual,
  IntegrationsVisual,
] as const;

export default function OldWaysVisual({ index }: { index: number }) {
  const Visual = OLD_WAYS_VISUALS[index] ?? NotionHostingVisual;

  return (
    <div className="relative min-h-[240px] w-full flex-1 sm:min-h-[280px] lg:min-h-[320px]">
      <FeatureVisualStage>
        <Visual />
      </FeatureVisualStage>
    </div>
  );
}
