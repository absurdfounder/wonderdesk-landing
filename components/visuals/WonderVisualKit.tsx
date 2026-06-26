'use client';

/**
 * Wonder Visual Kit
 *
 * OldWays visuals (6) — responsive Tailwind, fill the PixelFramedVisual panel naturally.
 * FeaturesBlocks visuals (3) — fixed 480×360 px canvas for FeatureVisualStage.
 */

import { BarChart3, MessageSquare, Search, Sparkles } from 'lucide-react';

const BEAR = 'https://dazzling-cat.netlify.app/wondercharacter.png';

/* ════════════════════════════════════════════════════
   OLDWAYS VISUALS — responsive Tailwind components
   ════════════════════════════════════════════════════ */

/* ─── 1. NOTION HOSTING ─── */
export function NotionHostingVisual() {
  const navItems = ['Search', 'Home', 'Updates', 'Settings & members', 'New page'];
  const blockTypes = [
    { icon: 'Aa', label: 'Text', desc: 'Just start writing with plain text.' },
    { icon: '□', label: 'Page', desc: 'Embed a sub-page inside this page.' },
    { icon: '☑', label: 'To-do list', desc: 'Track tasks with a to-do list.' },
    { icon: 'H1', label: 'Heading 1', desc: 'Big section heading.' },
    { icon: 'H2', label: 'Heading 2', desc: 'Medium section heading.' },
    { icon: 'H3', label: 'Heading 3', desc: 'Small section heading.' },
  ];

  return (
    <div className="flex h-full w-full items-center gap-3 overflow-hidden">
      {/* Notion window */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_20px_48px_-16px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.06]">
        {/* traffic lights */}
        <div className="flex shrink-0 items-center gap-1.5 border-b border-slate-100 bg-[#fafafa] px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-slate-400">Notion</span>
        </div>
        {/* body */}
        <div className="flex min-h-0 flex-1 overflow-hidden">
          {/* sidebar */}
          <div className="w-36 shrink-0 border-r border-slate-100 bg-[#f7f7f5] px-2 py-3">
            <div className="mb-1 flex items-center gap-1.5 px-1">
              <span className="h-4 w-4 rounded bg-slate-300 text-[8px] font-bold leading-4 text-center text-white">W</span>
              <span className="text-[11px] font-semibold text-slate-700">Workspace</span>
            </div>
            <div className="mt-2 space-y-0.5">
              {navItems.map((item) => (
                <div
                  key={item}
                  className={`rounded px-2 py-0.5 text-[10px] ${
                    item === 'Search' ? 'font-medium text-slate-800' : 'text-slate-500'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-3 border-t border-slate-200 pt-2">
              <p className="px-2 text-[9px] font-semibold uppercase tracking-widest text-slate-400">Favorites</p>
              <div className="mt-1 rounded bg-slate-200/80 px-2 py-0.5 text-[10px] font-medium text-slate-700">
                Vetted Applicants
              </div>
            </div>
          </div>
          {/* content */}
          <div className="flex min-w-0 flex-1 flex-col overflow-hidden px-4 py-4">
            <div className="mb-0.5 h-6 w-6 rounded-full bg-slate-100" />
            <h3 className="mt-1 text-xl font-bold text-slate-900">Vetted Applicants</h3>
            <p className="mt-0.5 text-[11px] text-slate-400">A hand picked collection of vetted talent to have a better work life balance.</p>
            {/* block selector */}
            <div className="mt-3 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <p className="border-b border-slate-100 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-widest text-slate-400">Basic blocks</p>
              <div className="divide-y divide-slate-50">
                {blockTypes.map((b) => (
                  <div key={b.label} className="flex items-center gap-2.5 px-3 py-1.5">
                    <span className="w-5 shrink-0 text-center text-[10px] font-bold text-slate-400">{b.icon}</span>
                    <div className="min-w-0">
                      <span className="text-[10px] font-semibold text-slate-700">{b.label}</span>
                      <span className="ml-1.5 text-[9px] text-slate-400">{b.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bear + flag */}
      <div className="flex shrink-0 flex-col items-center gap-1">
        <img src={BEAR} alt="" className="h-20 w-20 object-contain drop-shadow-md" />
        <div className="flex items-center gap-1 rounded bg-slate-900 px-2.5 py-1 text-[10px] font-bold text-white">
          <svg width={10} height={10} viewBox="0 0 24 24" fill="white"><rect x="3" y="3" width="18" height="18" rx="3"/></svg>
          Notion
        </div>
      </div>
    </div>
  );
}

/* ─── 2. SEO / PERFORMANCE (OLDWAYS) ─── */
export function SeoLighthouseVisual() {
  const rings = [
    { score: 98, label: 'Performance' },
    { score: 100, label: 'Accessibility' },
    { score: 100, label: 'Best Practices' },
    { score: 100, label: 'SEO' },
  ];

  return (
    <div className="flex h-full w-full flex-col justify-between overflow-hidden">
      {/* faded site preview */}
      <div className="shrink-0 overflow-hidden rounded-lg border border-slate-200/60 opacity-60">
        <div className="bg-gradient-to-r from-red-300 to-orange-200 px-3 py-2">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-red-900">Airdrops Work</p>
        </div>
        <div className="flex gap-3 bg-white px-3 py-2">
          <div className="flex flex-1 flex-col gap-1">
            <div className="h-1.5 w-2/3 rounded bg-slate-100" />
            <div className="h-1.5 w-full rounded bg-slate-100" />
            <div className="h-1.5 w-4/5 rounded bg-slate-100" />
          </div>
        </div>
      </div>

      {/* Lighthouse panel */}
      <div className="mt-3 flex-1 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_20px_40px_-12px_rgba(15,23,42,0.16)]">
        <p className="border-b border-slate-100 px-4 py-2 text-center text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
          Lighthouse scores
        </p>
        <div className="flex flex-1 items-center justify-around px-2 py-4">
          {rings.map((r) => {
            const R = 28;
            const C = 2 * Math.PI * R;
            const dash = C - (r.score / 100) * C;
            return (
              <div key={r.label} className="flex flex-col items-center gap-1">
                <div className="relative" style={{ width: 64, height: 64 }}>
                  <svg width={64} height={64} style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx={32} cy={32} r={R} fill="none" stroke="#e2e8f0" strokeWidth={5} />
                    <circle cx={32} cy={32} r={R} fill="none" stroke="#009fbc" strokeWidth={5} strokeLinecap="round"
                      strokeDasharray={C} strokeDashoffset={dash} />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-base font-bold tabular-nums text-slate-900">
                    {r.score}
                  </span>
                </div>
                <span className="max-w-[60px] text-center text-[9px] leading-tight text-slate-500">{r.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bear */}
      <div className="flex shrink-0 items-end justify-start pt-2">
        <img src={BEAR} alt="" className="h-14 w-14 object-contain drop-shadow-md" />
      </div>
    </div>
  );
}

/* ─── 3. GATED CONTENT ─── */
export function GatedContentVisual() {
  const fenceCount = 18;
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
      {/* blurred article */}
      <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
        {/* blurred content */}
        <div className="space-y-2 p-5 blur-[2px]">
          <div className="h-4 w-3/5 rounded bg-slate-300" />
          <div className="h-2.5 w-full rounded bg-slate-100" />
          <div className="h-2.5 w-5/6 rounded bg-slate-100" />
          <div className="h-2.5 w-full rounded bg-slate-100" />
          <div className="h-2.5 w-4/5 rounded bg-slate-100" />
        </div>

        {/* fence overlay */}
        <div className="absolute inset-0 overflow-hidden">
          {/* fence bars */}
          <div className="absolute inset-x-0 top-1/3 flex h-2/3 items-stretch justify-around">
            {Array.from({ length: fenceCount }).map((_, i) => (
              <div key={i} className="relative flex flex-col items-center" style={{ width: `${100 / fenceCount}%` }}>
                {/* spear tip */}
                <div className="h-2 w-1 bg-slate-600" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                <div className="flex-1 w-[3px] bg-slate-600" />
              </div>
            ))}
          </div>
          {/* horizontal rail */}
          <div className="absolute inset-x-0 h-[3px] bg-slate-600" style={{ top: 'calc(33% + 8px)' }} />
          <div className="absolute inset-x-0 h-[3px] bg-slate-600" style={{ top: 'calc(66%)' }} />

          {/* gradient dimmer */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent" />

          {/* lock badge */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-slate-200">
              <svg className="h-5 w-5 text-wonder" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-slate-900">Members only</p>
            <span className="rounded-md bg-orange-600 px-4 py-1.5 text-xs font-bold text-white">Subscribe to read</span>
          </div>
        </div>
      </div>

      {/* Bear paw at bottom */}
      <div className="-mt-4 flex items-end justify-end self-stretch pr-4">
        <img src={BEAR} alt="" className="h-16 w-16 object-contain drop-shadow-md" />
      </div>
    </div>
  );
}

/* ─── 4. ANALYTICS ─── */
export function AnalyticsVisual() {
  const vals = [32, 48, 42, 58, 52, 72, 64, 84, 70, 88, 78, 96];
  const metrics = [
    { v: '20k', l: 'Page views' },
    { v: '11k', l: 'Unique visitors' },
    { v: '64%', l: 'Search resolved' },
    { v: '43s', l: 'Avg time on page' },
  ];

  return (
    <div className="flex h-full w-full flex-col">
      {/* toolbar */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 size={16} className="text-wonder" />
          <span className="font-mono text-xs font-semibold text-slate-700">help.acme.com</span>
        </div>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-slate-500">Last 30 days</span>
      </div>

      {/* metric tiles */}
      <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.l} className="rounded-lg border border-slate-100 bg-white px-3 py-2.5 shadow-sm">
            <p className="text-lg font-bold tabular-nums text-slate-900 sm:text-xl">{m.v}</p>
            <p className="text-[9px] uppercase tracking-wide text-slate-400 sm:text-[10px]">{m.l}</p>
          </div>
        ))}
      </div>

      {/* bar chart */}
      <div className="relative flex-1">
        {/* upward arrow annotation */}
        <svg className="pointer-events-none absolute right-4 top-0 z-10 h-3/4 w-12" viewBox="0 0 48 120" fill="none">
          <path d="M44 115 C44 80, 12 40, 12 5" stroke="#009fbc" strokeWidth="2" strokeDasharray="4 3" />
          <path d="M6 10 L12 2 L18 10" stroke="#009fbc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <div className="flex h-full items-end gap-1">
          {vals.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background: '#009fbc',
                opacity: 0.35 + (i / vals.length) * 0.65,
              }}
            />
          ))}
        </div>
        <div className="mt-1.5 flex justify-between font-mono text-[8px] text-slate-300">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
        {/* bear */}
        <img src={BEAR} alt="" className="absolute -bottom-2 right-0 h-14 w-14 object-contain drop-shadow-md" />
      </div>
    </div>
  );
}

/* ─── 5. AI SUPPORT ─── */
export function AiSupportVisual() {
  return (
    <div className="flex h-full w-full flex-col">
      {/* faded help center bg */}
      <div className="mb-3 shrink-0 overflow-hidden rounded-lg border border-slate-200/60 bg-white/70 px-3 py-2 opacity-70">
        <div className="flex items-center gap-2">
          <Search size={11} className="text-slate-300" />
          <span className="text-[10px] text-slate-300">Search articles…</span>
        </div>
      </div>

      {/* chat widget */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18)]">
        {/* header */}
        <div className="flex shrink-0 items-center gap-2.5 border-b border-slate-100 bg-wonder/5 px-4 py-2.5">
          <img src={BEAR} alt="" className="h-7 w-7 rounded-lg object-cover" />
          <div>
            <p className="text-[12px] font-bold text-slate-900">Wonder AI</p>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[9px] text-slate-400">Online · replies instantly</span>
            </div>
          </div>
          <Sparkles size={14} className="ml-auto text-wonder" />
        </div>

        {/* messages */}
        <div className="flex flex-1 flex-col justify-end space-y-3 overflow-hidden px-4 py-3">
          {/* suggestion chips */}
          <div className="flex flex-wrap gap-1.5">
            {['Reset password', 'Billing help', 'API docs'].map((s) => (
              <span key={s} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] text-slate-600">
                {s}
              </span>
            ))}
          </div>
          {/* user */}
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-xl rounded-tr-sm bg-slate-100 px-3 py-2 text-[11px] leading-relaxed text-slate-700">
              That&apos;s great, thanks so much!
            </div>
          </div>
          {/* AI */}
          <div className="flex items-end gap-2">
            <img src={BEAR} alt="" className="h-6 w-6 shrink-0 rounded-md object-cover" />
            <div className="max-w-[85%] rounded-xl rounded-bl-sm bg-wonder/10 px-3 py-2 text-[11px] leading-relaxed text-slate-800">
              I found 3 articles about password resets. Want me to open the best match?
            </div>
          </div>
        </div>

        {/* input */}
        <div className="flex shrink-0 items-center gap-2 border-t border-slate-100 px-4 py-2.5">
          <MessageSquare size={14} className="shrink-0 text-slate-300" />
          <span className="flex-1 text-[11px] text-slate-300">Ask anything…</span>
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-wonder">
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 6. INTEGRATIONS HUB ─── */
export function IntegrationsHubVisual() {
  /* Apps placed around a circle at given angles */
  const apps = [
    { name: 'Slack', logo: 'https://cdn.simpleicons.org/slack/4A154B', angle: 90 },
    { name: 'WhatsApp', logo: 'https://cdn.simpleicons.org/whatsapp/25D366', angle: 150 },
    { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot/FF7A59', angle: 210 },
    { name: 'Zendesk', logo: 'https://dazzling-cat.netlify.app/zendesk.jpg', angle: 270 },
    { name: 'Intercom', logo: 'https://dazzling-cat.netlify.app/intercom.png', angle: 330 },
    { name: 'Crisp', logo: 'https://dazzling-cat.netlify.app/crisp.png', angle: 30 },
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* orbit rings */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute h-[75%] w-[75%] rounded-full border border-slate-200/80" />
        <div className="absolute h-[50%] w-[50%] rounded-full border border-slate-200/60" />
        <div className="absolute h-[25%] w-[25%] rounded-full border border-slate-100" />
      </div>

      {/* app icons on orbit */}
      <div className="relative h-full w-full">
        {apps.map((app) => {
          const angleRad = (app.angle * Math.PI) / 180;
          const r = 37; // % from center
          const x = 50 + r * Math.cos(angleRad);
          const y = 50 + r * Math.sin(angleRad);
          return (
            <div
              key={app.name}
              className="absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white shadow-md"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <img src={app.logo} alt={app.name} className="h-5 w-5 rounded object-contain" />
            </div>
          );
        })}
      </div>

      {/* bear in center */}
      <div className="absolute flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-orange-300 to-orange-400 shadow-lg">
        <img src={BEAR} alt="" className="h-16 w-16 object-contain" />
      </div>
    </div>
  );
}


/* ════════════════════════════════════════════════════
   FEATURESBLOCKS VISUALS — 480×360 fixed canvas
   Use px values only; no responsive Tailwind breakpoints.
   ════════════════════════════════════════════════════ */

/* ─── 7. DOMAIN VISUAL (FeaturesBlocks) ─── */
export function DomainFeatureVisual() {
  const articles = [
    'Getting started with your help center',
    'How to add custom branding',
    'Set up your first article',
  ];

  return (
    <div style={{
      width: 480, height: 360, position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(160deg, #5dbcd6 0%, #8dd4e8 28%, #c2eaf5 58%, #e8f7fb 100%)',
    }}>
      {/* clouds */}
      <div style={{ position: 'absolute', top: 18, left: 24, width: 100, height: 36, borderRadius: 40, background: 'rgba(255,255,255,0.5)', filter: 'blur(8px)' }} />
      <div style={{ position: 'absolute', top: 34, right: 36, width: 80, height: 28, borderRadius: 40, background: 'rgba(255,255,255,0.42)', filter: 'blur(7px)' }} />

      {/* browser + help center card */}
      <div style={{
        position: 'absolute', top: 48, left: 40, right: 40,
        background: '#fff', borderRadius: 14,
        boxShadow: '0 28px 72px -16px rgba(15,23,42,0.28)',
        overflow: 'hidden', border: '1px solid rgba(255,255,255,0.9)',
      }}>
        {/* browser chrome */}
        <div style={{ background: '#f8fafc', borderBottom: '1px solid #f1f5f9', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex', gap: 5 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
          </div>
          {/* URL bar */}
          <div style={{ flex: 1, background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '5px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#28c840" strokeWidth={2}/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#28c840" strokeWidth={1.5}/><path d="M2 12h20" stroke="#28c840" strokeWidth={1.5}/></svg>
            <span style={{ fontSize: 11, color: '#334155', fontWeight: 500 }}>help.<span style={{ color: '#009fbc', fontWeight: 700 }}>yoursite.com</span></span>
            <span style={{ marginLeft: 'auto', background: '#e6f7fb', color: '#007a94', fontSize: 9, fontWeight: 700, padding: '2px 8px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Connected</span>
          </div>
        </div>
        {/* help center content */}
        <div style={{ padding: '14px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <div style={{ flex: 1, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#94a3b8" strokeWidth={2}/><path d="m21 21-4.35-4.35" stroke="#94a3b8" strokeWidth={2} strokeLinecap="round"/></svg>
              <span style={{ fontSize: 11, color: '#94a3b8' }}>Search articles…</span>
            </div>
          </div>
          {articles.map((a, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderTop: i > 0 ? '1px solid #f8fafc' : 'none' }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: '#e6f7fb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width={13} height={13} viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#009fbc" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/><polyline points="14 2 14 8 20 8" stroke="#009fbc" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span style={{ fontSize: 11, color: '#334155' }}>{a}</span>
            </div>
          ))}
        </div>
      </div>

      {/* bear */}
      <img src={BEAR} alt="" style={{ position: 'absolute', bottom: 16, right: 18, width: 68, height: 68, objectFit: 'contain', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.16))' }} />
    </div>
  );
}

/* ─── 8. SEO VISUAL (FeaturesBlocks) ─── */
export function SeoFeatureVisual() {
  return (
    <div style={{
      width: 480, height: 360, position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(160deg, #f0fdf4 0%, #f8fafc 60%, #fff 100%)',
    }}>
      {/* ── left panel: Google SERP snippet ── */}
      <div style={{
        position: 'absolute', top: 28, left: 24, width: 216,
        background: '#fff', borderRadius: 12,
        border: '1px solid #e2e8f0',
        boxShadow: '0 12px 32px -8px rgba(15,23,42,0.12)',
        padding: '14px 16px', overflow: 'hidden',
      }}>
        {/* google logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 900, color: '#4285f4' }}>G</span>
          <span style={{ fontSize: 14, fontWeight: 900, color: '#ea4335' }}>o</span>
          <span style={{ fontSize: 14, fontWeight: 900, color: '#fbbc05' }}>o</span>
          <span style={{ fontSize: 14, fontWeight: 900, color: '#4285f4' }}>g</span>
          <span style={{ fontSize: 14, fontWeight: 900, color: '#34a853' }}>l</span>
          <span style={{ fontSize: 14, fontWeight: 900, color: '#ea4335' }}>e</span>
          <div style={{ flex: 1, height: 1, background: '#f1f5f9', marginLeft: 6 }} />
        </div>
        {/* result */}
        <div style={{ fontSize: 9, color: '#188038', marginBottom: 2, fontWeight: 500 }}>help.yoursite.com › articles</div>
        <div style={{ fontSize: 12, color: '#1a0dab', fontWeight: 600, marginBottom: 4, lineHeight: 1.3 }}>
          Getting Started — YourSite Help Center
        </div>
        <div style={{ fontSize: 10, color: '#4d5156', lineHeight: 1.5 }}>
          Find guides, tutorials and docs to set up your help center and get customers self-serving fast.
        </div>
        {/* cited by ai badge */}
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 5, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 6, padding: '4px 8px' }}>
          <span style={{ fontSize: 8, color: '#16a34a', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>AI Overview</span>
        </div>
      </div>

      {/* center divider */}
      <div style={{ position: 'absolute', top: 48, left: 258, bottom: 48, width: 1, background: '#e2e8f0' }} />

      {/* ── right panel: ChatGPT citation ── */}
      <div style={{
        position: 'absolute', top: 28, right: 24, width: 190,
        background: '#fff', borderRadius: 12,
        border: '1px solid #e2e8f0',
        boxShadow: '0 12px 32px -8px rgba(15,23,42,0.12)',
        padding: '12px 14px', overflow: 'hidden',
      }}>
        {/* chatgpt header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: '#10a37f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width={12} height={12} viewBox="0 0 24 24" fill="white"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.01.044.023.063a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#0f172a' }}>ChatGPT</span>
          <span style={{ marginLeft: 'auto', fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8' }}>AI Answer</span>
        </div>
        <div style={{ fontSize: 10, color: '#334155', lineHeight: 1.6, marginBottom: 10 }}>
          To set up your help center, you can use Wonder Sites which provides SEO-optimized publishing from Notion…
        </div>
        {/* citation card */}
        <div style={{ background: '#e6f7fb', borderRadius: 8, padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src={BEAR} alt="" style={{ width: 24, height: 24, objectFit: 'contain', borderRadius: 4, flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#007a94' }}>help.yoursite.com</div>
            <div style={{ fontSize: 9, color: '#64748b' }}>Source · Wonder Help</div>
          </div>
        </div>
      </div>

      {/* label */}
      <div style={{ position: 'absolute', bottom: 24, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#fff', border: '1px solid #e2e8f0', borderRadius: 99, padding: '4px 12px', boxShadow: '0 2px 8px rgba(15,23,42,0.06)' }}>
          <svg width={10} height={10} viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#4285f4" strokeWidth={2}/><path d="m21 21-4.35-4.35" stroke="#4285f4" strokeWidth={2} strokeLinecap="round"/></svg>
          <span style={{ fontSize: 9, fontWeight: 700, color: '#4285f4' }}>Google</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#fff', border: '1px solid #e2e8f0', borderRadius: 99, padding: '4px 12px', boxShadow: '0 2px 8px rgba(15,23,42,0.06)' }}>
          <div style={{ width: 10, height: 10, borderRadius: 3, background: '#10a37f' }} />
          <span style={{ fontSize: 9, fontWeight: 700, color: '#10a37f' }}>ChatGPT</span>
        </div>
      </div>
    </div>
  );
}

/* ─── 9. PERFORMANCE VISUAL (FeaturesBlocks) ─── */
export function PerformanceFeatureVisual() {
  const rings = [
    { score: 98, label: 'Performance' },
    { score: 100, label: 'Accessibility' },
    { score: 100, label: 'Best Practices' },
    { score: 100, label: 'SEO' },
  ];

  return (
    <div style={{
      width: 480, height: 360, position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(160deg, #fce8e2 0%, #fdf3ee 36%, #f8fafc 70%, #fff 100%)',
    }}>
      {/* faded site preview */}
      <div style={{ position: 'absolute', top: 14, left: 24, right: 24, borderRadius: 8, overflow: 'hidden', opacity: 0.55, border: '1px solid #e2e8f0' }}>
        <div style={{ background: 'linear-gradient(90deg, #fb923c 0%, #f97316 100%)', padding: '7px 12px' }}>
          <p style={{ margin: 0, fontSize: 9, fontWeight: 900, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#fff' }}>Airdrops Work</p>
        </div>
        <div style={{ background: '#fff', padding: '8px 12px', display: 'flex', gap: 3 }}>
          <div style={{ height: 5, borderRadius: 2, width: '50%', background: '#f1f5f9' }} />
          <div style={{ height: 5, borderRadius: 2, width: '20%', background: '#f1f5f9' }} />
        </div>
      </div>

      {/* Lighthouse panel */}
      <div style={{
        position: 'absolute', bottom: 28, left: 32, right: 32,
        background: '#fff', borderRadius: 14,
        border: '1px solid #e2e8f0',
        boxShadow: '0 24px 60px -16px rgba(15,23,42,0.2)',
        padding: '16px 20px',
      }}>
        <p style={{ margin: '0 0 14px', textAlign: 'center', fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#64748b' }}>
          Lighthouse scores
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {rings.map((r) => {
            const R = 32;
            const C = 2 * Math.PI * R;
            const dash = C - (r.score / 100) * C;
            return (
              <div key={r.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                <div style={{ position: 'relative', width: 72, height: 72 }}>
                  <svg width={72} height={72} style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx={36} cy={36} r={R} fill="none" stroke="#e2e8f0" strokeWidth={5} />
                    <circle cx={36} cy={36} r={R} fill="none" stroke="#009fbc" strokeWidth={5} strokeLinecap="round"
                      strokeDasharray={C} strokeDashoffset={dash} />
                  </svg>
                  <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, fontWeight: 800, color: '#0f172a', fontVariantNumeric: 'tabular-nums' }}>
                    {r.score}
                  </span>
                </div>
                <span style={{ fontSize: 9, color: '#64748b', textAlign: 'center', maxWidth: 64, lineHeight: 1.3 }}>{r.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* bear */}
      <img src={BEAR} alt="" style={{ position: 'absolute', bottom: 22, left: 12, width: 62, height: 62, objectFit: 'contain', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.15))' }} />
    </div>
  );
}
