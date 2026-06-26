'use client';

import { Folder, Globe, Search, X } from 'lucide-react';
import FeatureVisualStage from '../ui/FeatureVisualStage';

const WONDER_CHAR = 'https://dazzling-cat.netlify.app/wondercharacter.png';

function ScoreRing({ score, label }: { score: number; label: string }) {
  const r = 28;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;
  const color = score >= 90 ? '#0cce6b' : score >= 50 ? '#ffa400' : '#ff4e42';

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative h-[68px] w-[68px]">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 64 64" aria-hidden>
          <circle cx="32" cy="32" r={r} fill="none" stroke="#e2e8f0" strokeWidth="5" />
          <circle
            cx="32"
            cy="32"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold tabular-nums text-slate-800">
          {score}
        </span>
      </div>
      <span className="max-w-[72px] text-center text-[9px] font-medium leading-tight text-slate-500">{label}</span>
    </div>
  );
}

function BarChart() {
  const bars = [42, 68, 55, 82, 48, 91, 74, 88, 62, 95, 78, 86];
  return (
    <div className="flex h-16 items-end gap-[3px] px-1">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-wonder/70"
          style={{ height: `${h}%`, opacity: i === bars.length - 1 ? 1 : 0.45 + (i / bars.length) * 0.4 }}
        />
      ))}
    </div>
  );
}

export function DomainVisual() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-sky-100 via-sky-50 to-white px-8">
      <div className="w-full max-w-[340px] overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18)]">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <span className="text-[15px] font-semibold text-slate-900">Add Domain</span>
          <X size={16} className="text-slate-400" strokeWidth={2} />
        </div>

        <div className="space-y-3 px-4 py-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">Choose setup type</p>

          <div className="rounded-lg border-2 border-orange-500 bg-orange-50/40 p-3">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-orange-200 bg-white">
                <Globe size={18} className="text-orange-600" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-slate-900">Domain or Subdomain</p>
                <p className="mt-0.5 text-[11px] leading-snug text-slate-500">help.yourcompany.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                <Folder size={18} className="text-slate-500" strokeWidth={1.75} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-[13px] font-semibold text-slate-900">Subdirectory</p>
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-orange-700">
                    Recommended
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] leading-snug text-slate-500">yourcompany.com/help</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end border-t border-slate-100 px-4 py-3">
          <span className="rounded-md bg-orange-600 px-4 py-1.5 text-[12px] font-semibold text-white">Proceed</span>
        </div>
      </div>
    </div>
  );
}

export function SearchSeoVisual() {
  return (
    <div className="relative flex h-full w-full flex-col bg-gradient-to-b from-slate-50 to-white px-5 py-5">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-4 py-2.5">
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
            <Search size={14} className="shrink-0 text-slate-400" strokeWidth={2} />
            <span className="text-[12px] text-slate-400">How can we help?</span>
          </div>
        </div>

        <div className="relative px-4 py-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="truncate font-mono text-[10px] text-slate-500">help.notionbear.com</span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-emerald-700">
              Indexed
            </span>
          </div>

          <div className="mb-3 grid grid-cols-4 gap-2">
            {[
              { v: '20k', l: 'Views' },
              { v: '11k', l: 'Searches' },
              { v: '64%', l: 'Resolved' },
              { v: '43s', l: 'Avg time' },
            ].map((m) => (
              <div key={m.l} className="rounded-md border border-slate-100 bg-slate-50/80 px-2 py-1.5 text-center">
                <p className="text-[13px] font-semibold tabular-nums text-slate-900">{m.v}</p>
                <p className="text-[8px] uppercase tracking-wide text-slate-400">{m.l}</p>
              </div>
            ))}
          </div>

          <BarChart />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-3 right-4 hidden sm:block">
        <img src={WONDER_CHAR} alt="" className="h-16 w-16 object-contain drop-shadow-md" />
      </div>
    </div>
  );
}

export function PerformanceVisual() {
  return (
    <div className="relative flex h-full w-full flex-col justify-end bg-gradient-to-b from-rose-50/80 via-white to-white px-4 py-4">
      <div className="pointer-events-none absolute inset-x-4 top-4 overflow-hidden rounded-lg border border-slate-200/70 bg-white opacity-60">
        <div className="bg-gradient-to-r from-rose-200/70 to-orange-100/60 px-3 py-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Airdrops Now</p>
        </div>
        <div className="space-y-2 px-3 py-3">
          <div className="h-2 w-3/4 rounded bg-slate-100" />
          <div className="h-2 w-full rounded bg-slate-100" />
          <div className="h-2 w-5/6 rounded bg-slate-100" />
        </div>
      </div>

      <div className="relative z-10 rounded-xl border border-slate-200 bg-white/95 p-4 shadow-[0_16px_40px_-12px_rgba(15,23,42,0.15)] backdrop-blur-sm">
        <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          Lighthouse scores
        </p>
        <div className="flex items-start justify-between gap-1">
          <ScoreRing score={98} label="Performance" />
          <ScoreRing score={100} label="Accessibility" />
          <ScoreRing score={100} label="Best Practices" />
          <ScoreRing score={100} label="SEO" />
        </div>
      </div>

      <img
        src={WONDER_CHAR}
        alt=""
        className="pointer-events-none absolute bottom-2 left-3 h-14 w-14 object-contain drop-shadow-md"
      />
    </div>
  );
}

const VISUALS = {
  domain: DomainVisual,
  seo: SearchSeoVisual,
  performance: PerformanceVisual,
} as const;

export type FeatureVisualId = keyof typeof VISUALS;

export default function FeatureBlockVisual({ id }: { id: FeatureVisualId }) {
  const Visual = VISUALS[id];

  return (
    <div className="relative aspect-[4/3] min-h-[200px] w-full">
      <FeatureVisualStage>
        <Visual />
      </FeatureVisualStage>
    </div>
  );
}
