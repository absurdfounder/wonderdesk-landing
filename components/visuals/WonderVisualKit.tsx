'use client';

/**
 * Wonder Visual Kit — all visuals are designed for a 480×360 fixed canvas
 * inside FeatureVisualStage. Use pixel values only; no responsive breakpoints.
 */

import { BarChart3, Folder, Github, Globe, Lock, MessageSquare, Search, Sparkles, X } from 'lucide-react';

const BEAR = 'https://dazzling-cat.netlify.app/wondercharacter.png';

/* ─── Score ring (Lighthouse-style, teal) ─── */
function Ring({ score, label }: { score: number; label: string }) {
  const R = 30;
  const C = 2 * Math.PI * R;
  const dash = C - (score / 100) * C;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <div style={{ position: 'relative', width: 68, height: 68 }}>
        <svg width={68} height={68} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={34} cy={34} r={R} fill="none" stroke="#e2e8f0" strokeWidth={5} />
          <circle
            cx={34} cy={34} r={R} fill="none"
            stroke="#009fbc" strokeWidth={5} strokeLinecap="round"
            strokeDasharray={C} strokeDashoffset={dash}
          />
        </svg>
        <span style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 17, fontWeight: 700, color: '#0f172a', fontVariantNumeric: 'tabular-nums',
        }}>{score}</span>
      </div>
      <span style={{ fontSize: 9, color: '#64748b', textAlign: 'center', maxWidth: 60, lineHeight: 1.3 }}>{label}</span>
    </div>
  );
}

/* ─── Bar chart ─── */
function Bars({ color = '#009fbc' }: { color?: string }) {
  const vals = [38, 55, 48, 72, 58, 85, 68, 92, 74, 88, 80, 94];
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 52 }}>
      {vals.map((h, i) => (
        <div key={i} style={{
          flex: 1, borderRadius: '2px 2px 0 0',
          background: color, height: `${h}%`,
          opacity: 0.35 + (i / vals.length) * 0.65,
        }} />
      ))}
    </div>
  );
}

/* ─── 1. DOMAIN VISUAL ─── */
export function DomainVisual() {
  return (
    <div style={{
      width: 480, height: 360, position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(180deg, #5bb8d4 0%, #82ccdf 35%, #b8e4f0 65%, #e6f7fb 100%)',
    }}>
      {/* clouds */}
      <div style={{ position: 'absolute', top: 22, left: 28, width: 90, height: 32, borderRadius: 40, background: 'rgba(255,255,255,0.48)', filter: 'blur(6px)' }} />
      <div style={{ position: 'absolute', top: 40, right: 40, width: 70, height: 24, borderRadius: 40, background: 'rgba(255,255,255,0.38)', filter: 'blur(5px)' }} />
      {/* modal */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 288, background: '#fff',
        borderRadius: 12, boxShadow: '0 24px 64px -12px rgba(15,23,42,0.28)',
        border: '1px solid rgba(255,255,255,0.9)',
        overflow: 'hidden',
      }}>
        {/* header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid #f1f5f9' }}>
          <span style={{ fontWeight: 600, fontSize: 14, color: '#0f172a' }}>Add Domain</span>
          <X size={14} color="#94a3b8" />
        </div>
        <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#64748b', margin: 0 }}>Choose setup type</p>
          {/* option 1 — selected */}
          <div style={{ border: '2px solid #f97316', borderRadius: 8, padding: 10, background: 'rgba(255,237,213,0.35)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: 6, border: '1px solid #fed7aa', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Globe size={14} color="#ea580c" />
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, color: '#0f172a', margin: 0 }}>Domain or Subdomain</p>
                <p style={{ fontSize: 10, color: '#64748b', margin: '2px 0 0' }}>help.yourcompany.com</p>
              </div>
            </div>
          </div>
          {/* option 2 */}
          <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 10, background: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <div style={{ width: 30, height: 30, borderRadius: 6, border: '1px solid #e2e8f0', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Folder size={14} color="#64748b" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <p style={{ fontSize: 11, fontWeight: 600, color: '#0f172a', margin: 0 }}>Subdirectory</p>
                  <span style={{ background: '#ffedd5', color: '#c2410c', fontSize: 8, fontWeight: 700, padding: '1px 6px', borderRadius: 999, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Recommended</span>
                </div>
                <p style={{ fontSize: 10, color: '#64748b', margin: '2px 0 0' }}>yourcompany.com/help</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 16px', borderTop: '1px solid #f1f5f9' }}>
          <span style={{ background: '#ea580c', color: '#fff', fontSize: 11, fontWeight: 600, padding: '6px 16px', borderRadius: 6 }}>Proceed</span>
        </div>
      </div>
    </div>
  );
}

/* ─── 2. SEO VISUAL ─── */
export function SeoVisual() {
  const metrics = [
    { v: '20k', l: 'Views' }, { v: '11k', l: 'Searches' },
    { v: '64%', l: 'Resolved' }, { v: '43s', l: 'Avg time' },
  ];
  return (
    <div style={{ width: 480, height: 360, position: 'relative', background: 'linear-gradient(180deg, #e6f7fb 0%, #f8fafc 60%, #fff 100%)' }}>
      {/* main card */}
      <div style={{
        position: 'absolute', top: 28, left: 28, right: 96,
        background: '#fff', borderRadius: 12,
        border: '1px solid #e2e8f0',
        boxShadow: '0 16px 40px -12px rgba(15,23,42,0.14)',
        overflow: 'hidden',
      }}>
        {/* search bar */}
        <div style={{ padding: '10px 14px', borderBottom: '1px solid #f1f5f9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '7px 12px' }}>
            <Search size={13} color="#94a3b8" />
            <span style={{ fontSize: 12, color: '#94a3b8' }}>How can we help?</span>
          </div>
        </div>
        <div style={{ padding: 14 }}>
          {/* domain row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontFamily: 'monospace', fontSize: 10, color: '#64748b' }}>help.notionbear.com</span>
            <span style={{ background: '#e6f7fb', color: '#007a94', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '2px 7px', borderRadius: 99 }}>Indexed</span>
          </div>
          {/* metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginBottom: 12 }}>
            {metrics.map(m => (
              <div key={m.l} style={{ background: '#f8fafc', border: '1px solid #f1f5f9', borderRadius: 6, padding: '6px 4px', textAlign: 'center' }}>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#0f172a', fontVariantNumeric: 'tabular-nums' }}>{m.v}</p>
                <p style={{ margin: '1px 0 0', fontSize: 8, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8' }}>{m.l}</p>
              </div>
            ))}
          </div>
          <Bars />
        </div>
      </div>
      {/* bear */}
      <img src={BEAR} alt="" style={{ position: 'absolute', bottom: 24, right: 20, width: 80, height: 80, objectFit: 'contain', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }} />
    </div>
  );
}

/* ─── 3. PERFORMANCE VISUAL ─── */
export function PerformanceVisual() {
  return (
    <div style={{ width: 480, height: 360, position: 'relative', background: 'linear-gradient(180deg, #fce7e0 0%, #fdf4ee 40%, #fff 100%)' }}>
      {/* faded site preview */}
      <div style={{ position: 'absolute', top: 16, left: 20, right: 20, borderRadius: 8, overflow: 'hidden', opacity: 0.6, border: '1px solid #e2e8f0', boxShadow: '0 4px 16px -4px rgba(15,23,42,0.1)' }}>
        <div style={{ background: 'linear-gradient(90deg, #fca5a5 0%, #fdba74 100%)', padding: '8px 12px' }}>
          <p style={{ margin: 0, fontSize: 9, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7c2d12' }}>Airdrops Work</p>
        </div>
        <div style={{ background: '#fff', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ height: 6, borderRadius: 3, width: '70%', background: '#f1f5f9' }} />
          <div style={{ height: 6, borderRadius: 3, width: '100%', background: '#f1f5f9' }} />
          <div style={{ height: 6, borderRadius: 3, width: '85%', background: '#f1f5f9' }} />
        </div>
      </div>
      {/* lighthouse panel */}
      <div style={{
        position: 'absolute', bottom: 28, left: 40, right: 40,
        background: '#fff', borderRadius: 12,
        border: '1px solid #e2e8f0',
        boxShadow: '0 20px 48px -16px rgba(15,23,42,0.18)',
        padding: '14px 20px',
      }}>
        <p style={{ margin: '0 0 12px', textAlign: 'center', fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#64748b' }}>Lighthouse scores</p>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Ring score={98} label="Performance" />
          <Ring score={100} label="Accessibility" />
          <Ring score={100} label="Best Practices" />
          <Ring score={100} label="SEO" />
        </div>
      </div>
      {/* bear */}
      <img src={BEAR} alt="" style={{ position: 'absolute', bottom: 24, left: 14, width: 64, height: 64, objectFit: 'contain', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }} />
    </div>
  );
}

/* ─── 4. NOTION HOSTING VISUAL ─── */
export function NotionHostingVisual() {
  return (
    <div style={{ width: 480, height: 360, position: 'relative', background: 'linear-gradient(180deg, #e6f7fb 0%, #f0fafd 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
      {/* notion window */}
      <div style={{ width: 260, background: '#fff', borderRadius: 10, boxShadow: '0 20px 50px -16px rgba(15,23,42,0.2)', border: '1px solid #e2e8f0', overflow: 'hidden', flexShrink: 0 }}>
        {/* chrome */}
        <div style={{ background: '#fafafa', borderBottom: '1px solid #f1f5f9', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57' }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e' }} />
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840' }} />
          <span style={{ fontFamily: 'monospace', fontSize: 9, color: '#94a3b8', marginLeft: 6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Notion</span>
        </div>
        {/* body */}
        <div style={{ display: 'flex', height: 165 }}>
          {/* sidebar */}
          <div style={{ width: 68, background: '#f8fafc', borderRight: '1px solid #f1f5f9', padding: '10px 8px', flexShrink: 0 }}>
            <p style={{ margin: '0 0 8px', fontSize: 8, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Workspace</p>
            {['Search', 'Home', 'Updates', 'Settings', 'New page'].map(item => (
              <div key={item} style={{ height: 6, borderRadius: 3, background: '#e2e8f0', marginBottom: 5 }} />
            ))}
          </div>
          {/* content */}
          <div style={{ flex: 1, padding: '12px 14px' }}>
            <p style={{ margin: '0 0 2px', fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Vetted Applicants</p>
            <p style={{ margin: '0 0 10px', fontSize: 9, color: '#94a3b8' }}>A curated collection of talent</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {['Aa Text', 'Page', 'To-do list', 'Heading 1', 'Heading 2', 'Heading 3'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#cbd5e1', flexShrink: 0 }} />
                  <div style={{ height: 5, borderRadius: 2, background: '#f1f5f9', width: `${60 + Math.random() * 30}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* bear + flag */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <img src={BEAR} alt="" style={{ width: 88, height: 88, objectFit: 'contain', filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.18))' }} />
        <div style={{ background: '#0f172a', color: '#fff', fontSize: 9, fontWeight: 700, padding: '3px 10px', borderRadius: 4, letterSpacing: '0.05em' }}>Notion</div>
      </div>
    </div>
  );
}

/* ─── 5. SEO (OLDWAYS) VISUAL ─── */
export function SeoOldWaysVisual() {
  return (
    <div style={{ width: 480, height: 360, position: 'relative', background: 'linear-gradient(180deg, #fce7e0 0%, #fdf4ee 40%, #f8fafc 100%)' }}>
      {/* faded site */}
      <div style={{ position: 'absolute', top: 20, left: 32, right: 32, borderRadius: 8, overflow: 'hidden', opacity: 0.65, border: '1px solid #e2e8f0' }}>
        <div style={{ background: 'linear-gradient(90deg, #fb923c 0%, #f97316 100%)', padding: '7px 12px' }}>
          <p style={{ margin: 0, fontSize: 9, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>Airdrops Work</p>
        </div>
        <div style={{ background: '#fff', padding: '8px 12px', display: 'flex', gap: 4 }}>
          <div style={{ height: 5, borderRadius: 2, width: '55%', background: '#f1f5f9' }} />
          <div style={{ height: 5, borderRadius: 2, width: '25%', background: '#f1f5f9' }} />
        </div>
      </div>
      {/* lighthouse */}
      <div style={{
        position: 'absolute', bottom: 32, left: 40, right: 40,
        background: '#fff', borderRadius: 12,
        border: '1px solid #e2e8f0',
        boxShadow: '0 20px 48px -16px rgba(15,23,42,0.18)',
        padding: '14px 20px',
      }}>
        <p style={{ margin: '0 0 12px', textAlign: 'center', fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#64748b' }}>Lighthouse scores</p>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Ring score={98} label="Performance" />
          <Ring score={100} label="Accessibility" />
          <Ring score={100} label="Best Practices" />
          <Ring score={100} label="SEO" />
        </div>
      </div>
      <img src={BEAR} alt="" style={{ position: 'absolute', bottom: 28, left: 12, width: 60, height: 60, objectFit: 'contain', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.14))' }} />
    </div>
  );
}

/* ─── 6. MEMBERSHIP VISUAL ─── */
export function MembershipVisual() {
  const tiers = [{ n: 'Free', p: '$0', a: false }, { n: 'Pro', p: '$12', a: true }, { n: 'Team', p: '$49', a: false }];
  return (
    <div style={{ width: 480, height: 360, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, background: 'linear-gradient(180deg, #fff7ed 0%, #fff 100%)', padding: '0 60px' }}>
      {/* tiers */}
      <div style={{ display: 'flex', gap: 8, width: '100%' }}>
        {tiers.map(t => (
          <div key={t.n} style={{
            flex: 1, border: t.a ? '2px solid #f97316' : '1px solid #e2e8f0',
            background: t.a ? '#fff7ed' : '#fff',
            borderRadius: 10, padding: '10px 8px', textAlign: 'center',
            boxShadow: t.a ? '0 4px 16px -4px rgba(249,115,22,0.2)' : 'none',
          }}>
            <p style={{ margin: 0, fontSize: 10, fontWeight: 600, color: '#0f172a' }}>{t.n}</p>
            <p style={{ margin: '2px 0 0', fontSize: 18, fontWeight: 700, color: '#0f172a', fontVariantNumeric: 'tabular-nums' }}>{t.p}</p>
            <p style={{ margin: 0, fontSize: 9, color: '#94a3b8' }}>/mo</p>
          </div>
        ))}
      </div>
      {/* locked article */}
      <div style={{ width: '100%', position: 'relative', overflow: 'hidden', borderRadius: 10, border: '1px solid #e2e8f0' }}>
        <div style={{ padding: '14px 16px', opacity: 0.35, filter: 'blur(1px)' }}>
          <div style={{ height: 10, borderRadius: 4, background: '#e2e8f0', width: '55%', marginBottom: 8 }} />
          <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', marginBottom: 5 }} />
          <div style={{ height: 6, borderRadius: 3, background: '#f1f5f9', width: '80%' }} />
        </div>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(255,255,255,0.88)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>
          <Lock size={20} color="#009fbc" />
          <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: '#0f172a' }}>Members-only article</p>
          <span style={{ background: '#ea580c', color: '#fff', fontSize: 10, fontWeight: 700, padding: '5px 14px', borderRadius: 6 }}>Subscribe to read</span>
        </div>
      </div>
    </div>
  );
}

/* ─── 7. ANALYTICS VISUAL ─── */
export function AnalyticsVisual() {
  const metrics = [
    { v: '20k', l: 'Views' }, { v: '11k', l: 'Visitors' },
    { v: '64%', l: 'Clicks' }, { v: '43s', l: 'Avg time' },
  ];
  return (
    <div style={{ width: 480, height: 360, position: 'relative', background: 'linear-gradient(180deg, #e6f7fb 0%, #f8fafc 60%, #fff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 40px' }}>
      <div style={{ width: '100%', background: '#fff', borderRadius: 14, border: '1px solid #e2e8f0', boxShadow: '0 20px 48px -16px rgba(15,23,42,0.14)', overflow: 'hidden' }}>
        {/* toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #f1f5f9', background: '#fafafa' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <BarChart3 size={14} color="#009fbc" />
            <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#475569' }}>help.acme.com</span>
          </div>
          <span style={{ fontFamily: 'monospace', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#94a3b8' }}>Last 30 days</span>
        </div>
        <div style={{ padding: '14px 16px' }}>
          {/* metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 14 }}>
            {metrics.map(m => (
              <div key={m.l} style={{ background: '#f8fafc', border: '1px solid #f1f5f9', borderRadius: 8, padding: '8px 6px', textAlign: 'center' }}>
                <p style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#0f172a', fontVariantNumeric: 'tabular-nums' }}>{m.v}</p>
                <p style={{ margin: '2px 0 0', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8' }}>{m.l}</p>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 12 }}>
            <Bars />
          </div>
        </div>
      </div>
      <img src={BEAR} alt="" style={{ position: 'absolute', bottom: 20, right: 24, width: 72, height: 72, objectFit: 'contain', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.14))' }} />
    </div>
  );
}

/* ─── 8. AI SUPPORT VISUAL ─── */
export function AiSupportVisual() {
  return (
    <div style={{ width: 480, height: 360, position: 'relative', background: 'linear-gradient(135deg, #f0f9ff 0%, #e6f7fb 40%, #f8fafc 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* faded help center bg */}
      <div style={{ position: 'absolute', top: 20, left: 28, right: 28, background: 'rgba(255,255,255,0.55)', borderRadius: 8, border: '1px solid rgba(226,232,240,0.6)', padding: '10px 14px' }}>
        <div style={{ height: 6, borderRadius: 3, background: '#e2e8f0', width: '40%', marginBottom: 5 }} />
        <div style={{ height: 5, borderRadius: 2, background: '#f1f5f9', width: '100%' }} />
      </div>
      {/* chat widget */}
      <div style={{
        width: 288, background: '#fff', borderRadius: 14,
        border: '1px solid #e2e8f0',
        boxShadow: '0 24px 60px -16px rgba(15,23,42,0.18)',
        overflow: 'hidden',
      }}>
        {/* header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderBottom: '1px solid #f1f5f9', background: 'rgba(0,159,188,0.06)' }}>
          <img src={BEAR} alt="" style={{ width: 26, height: 26, borderRadius: 8, objectFit: 'cover' }} />
          <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Wonder AI</span>
          <Sparkles size={13} color="#009fbc" style={{ marginLeft: 'auto' }} />
        </div>
        <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {/* suggestion chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {['Reset password', 'Billing help', 'API docs'].map(s => (
              <span key={s} style={{ border: '1px solid #e2e8f0', background: '#f8fafc', borderRadius: 999, padding: '3px 10px', fontSize: 10, color: '#475569' }}>{s}</span>
            ))}
          </div>
          {/* user bubble */}
          <div style={{ background: '#f1f5f9', borderRadius: '12px 12px 4px 12px', padding: '8px 12px', fontSize: 11, color: '#475569', alignSelf: 'flex-end', maxWidth: '85%' }}>
            That&apos;s great. Thanks so much!
          </div>
          {/* ai bubble */}
          <div style={{ background: 'rgba(0,159,188,0.08)', borderRadius: '4px 12px 12px 12px', padding: '8px 12px', fontSize: 11, color: '#0f172a', maxWidth: '88%', lineHeight: 1.5 }}>
            I found 3 articles about password resets. Want me to open the best match?
          </div>
        </div>
        {/* input bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderTop: '1px solid #f1f5f9' }}>
          <MessageSquare size={14} color="#cbd5e1" />
          <span style={{ flex: 1, fontSize: 11, color: '#cbd5e1' }}>Ask anything…</span>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: '#009fbc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 9. INTEGRATIONS VISUAL ─── */
export function IntegrationsVisual() {
  const apps = [
    { name: 'Slack', logo: 'https://cdn.simpleicons.org/slack/4A154B' },
    { name: 'Intercom', logo: 'https://dazzling-cat.netlify.app/intercom.png' },
    { name: 'Crisp', logo: 'https://dazzling-cat.netlify.app/crisp.png' },
    { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot/FF7A59' },
    { name: 'Zendesk', logo: 'https://dazzling-cat.netlify.app/zendesk.jpg' },
    { name: 'GitHub', logo: null },
  ];
  return (
    <div style={{ width: 480, height: 360, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)' }}>
      <div style={{
        border: '1.5px dashed #cbd5e1', borderRadius: 14,
        background: 'rgba(255,255,255,0.8)', padding: 16,
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8,
        width: 280,
      }}>
        {apps.map(app => (
          <div key={app.name} style={{
            border: '1px solid #e2e8f0', borderRadius: 10, background: '#fff',
            padding: '12px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
            boxShadow: '0 1px 4px rgba(15,23,42,0.05)',
          }}>
            {app.logo ? (
              <img src={app.logo} alt="" style={{ width: 24, height: 24, objectFit: 'contain', borderRadius: 4 }} />
            ) : (
              <Github size={24} color="#374151" />
            )}
            <span style={{ fontFamily: 'monospace', fontSize: 8, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b' }}>{app.name}</span>
          </div>
        ))}
      </div>
      {/* live badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(0,159,188,0.07)', border: '1px solid rgba(0,159,188,0.25)', borderRadius: 99, padding: '5px 12px' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#009fbc', display: 'inline-block', boxShadow: '0 0 0 2px rgba(0,159,188,0.25)' }} />
        <span style={{ fontFamily: 'monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#007a94', fontWeight: 700 }}>Connected</span>
      </div>
    </div>
  );
}
