'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, AnimatePresence, motion, useInView } from 'framer-motion';
import {
  BarChart3,
  Check,
  FileText,
  Folder,
  Globe,
  Loader2,
  Search,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  X,
} from 'lucide-react';

const FONT = 'var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif';
const WONDER = '#009fbc';

const CARD: React.CSSProperties = {
  width: '100%',
  background: '#ffffff',
  borderRadius: 14,
  border: '1px solid #E5E7EB',
  boxShadow: '0 1px 2px rgba(15,23,42,0.04), 0 18px 40px rgba(15,23,42,0.10)',
  fontFamily: FONT,
  overflow: 'hidden',
};

/* Drives a looping "cycle" counter, but only while the card is on screen. */
function useCycle(ref: React.RefObject<Element>, intervalMs: number) {
  const inView = useInView(ref, { amount: 0.4 });
  const [cycle, setCycle] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setCycle((c) => c + 1), intervalMs);
    return () => clearInterval(id);
  }, [inView, intervalMs]);
  return { cycle, inView };
}

function CountUp({ to, run, format }: { to: number; run: boolean; format?: (n: number) => string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    const controls = animate(0, to, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [run, to]);
  const n = Math.round(val);
  return <>{format ? format(n) : n.toLocaleString()}</>;
}

/* ─────────────────────────── 1. Custom domains ─────────────────────────── */

export function DomainPublishMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const { cycle, inView } = useCycle(ref, 5200);

  // phase: 0 idle → 1 select sub-folder → 2 publishing → 3 live
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (!inView) return;
    setPhase(0);
    const t1 = setTimeout(() => setPhase(1), 700);
    const t2 = setTimeout(() => setPhase(2), 1900);
    const t3 = setTimeout(() => setPhase(3), 3100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [cycle, inView]);

  const selected = phase >= 1;

  return (
    <div ref={ref} style={CARD}>
      <div style={{ padding: '18px 18px 16px' }}>
        <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: '#111827' }}>How do you want to go live?</p>
        <p style={{ margin: '5px 0 16px', fontSize: 12.5, color: '#9CA3AF', lineHeight: 1.4 }}>
          Select how you want to publish your help center.
        </p>

        <div
          style={{
            border: '1px solid #E5E7EB',
            borderRadius: 11,
            padding: '12px 13px',
            marginBottom: 9,
            display: 'flex',
            alignItems: 'center',
            gap: 11,
            background: '#fff',
          }}
        >
          <Globe size={17} strokeWidth={2} color="#3B82F6" style={{ flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontSize: 13.5, fontWeight: 600, color: '#111827' }}>Custom domain</p>
            <p style={{ margin: '2px 0 0', fontSize: 12, color: '#9CA3AF' }}>help.yourcompany.com</p>
          </div>
        </div>

        <motion.div
          animate={{
            borderColor: selected ? WONDER : '#E5E7EB',
            boxShadow: selected ? '0 0 0 3px rgba(0,159,188,0.14)' : '0 0 0 0px rgba(0,159,188,0)',
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{
            border: '2px solid #E5E7EB',
            borderRadius: 11,
            padding: '12px 13px',
            display: 'flex',
            alignItems: 'center',
            gap: 11,
            background: '#fff',
          }}
        >
          <Folder size={17} strokeWidth={2} color="#B45309" style={{ flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <p style={{ margin: 0, fontSize: 13.5, fontWeight: 600, color: '#111827' }}>Custom sub-folder</p>
              <span
                style={{
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  color: '#166534',
                  background: '#DCFCE7',
                  borderRadius: 4,
                  padding: '2px 6px',
                }}
              >
                RECOMMENDED
              </span>
            </div>
            <p style={{ margin: '2px 0 0', fontSize: 12, color: '#9CA3AF' }}>yourcompany.com/help</p>
          </div>
          <motion.span
            initial={false}
            animate={{ scale: selected ? 1 : 0, opacity: selected ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 24 }}
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: WONDER,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Check size={12} strokeWidth={3} color="#fff" />
          </motion.span>
        </motion.div>
      </div>

      <div
        style={{
          borderTop: '1px solid #F1F5F9',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#FBFCFE',
        }}
      >
        <span style={{ fontSize: 12.5, color: '#6B7280' }}>wonderdesk.ai/help</span>
        <AnimatePresence mode="wait">
          {phase < 2 ? (
            <motion.span
              key="needs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: '#9CA3AF' }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FACC15' }} />
              Needs setup
            </motion.span>
          ) : phase === 2 ? (
            <motion.span
              key="publishing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: '#6B7280' }}
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 0.8 }}
                style={{ display: 'flex' }}
              >
                <Loader2 size={12} strokeWidth={2.5} color={WONDER} />
              </motion.span>
              Publishing…
            </motion.span>
          ) : (
            <motion.span
              key="live"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 600, color: '#15803D' }}
            >
              <motion.span
                animate={{ scale: [1, 1.35, 1] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
                style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E' }}
              />
              Live
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─────────────────────────── 2. SEO & AI search ─────────────────────────── */

const SEO_QUERY = 'how do I delete my Acme account?';
const SEO_RESULTS = [
  {
    crumb: 'help.acme.com › articles › delete-account',
    title: 'How to delete your account | Acme Help Center',
    body: 'If you want to delete your Acme account, all you have to do is follow these easy steps… 1. Navigate to the Accounts tab…',
  },
  {
    crumb: 'help.acme.com › your-account',
    title: 'Manage your account | Acme Help Center',
    body: 'Learn how to manage your account and billing. Account management, refunds, subscription updates and more.',
  },
];

export function SeoSearchMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const { cycle, inView } = useCycle(ref, 6000);
  const [typed, setTyped] = useState('');
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (!inView) return;
    setTyped('');
    setShowResults(false);
    let i = 0;
    const typer = setInterval(() => {
      i += 1;
      setTyped(SEO_QUERY.slice(0, i));
      if (i >= SEO_QUERY.length) {
        clearInterval(typer);
        setTimeout(() => setShowResults(true), 320);
      }
    }, 55);
    return () => clearInterval(typer);
  }, [cycle, inView]);

  const typing = typed.length < SEO_QUERY.length;

  return (
    <div ref={ref} style={{ ...CARD, fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <div style={{ padding: '16px 16px 14px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            border: '1px solid #DFE1E5',
            borderRadius: 999,
            padding: '10px 14px',
            marginBottom: 14,
            boxShadow: '0 1px 6px rgba(32,33,36,0.10)',
          }}
        >
          <span style={{ flex: 1, fontSize: 13, color: '#202124', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            {typed}
            {typing ? (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
                style={{ display: 'inline-block', width: 1.5, height: 14, background: '#202124', marginLeft: 1, verticalAlign: 'middle' }}
              />
            ) : null}
          </span>
          <X size={15} strokeWidth={2} color="#70757A" />
          <Search size={16} strokeWidth={2.25} color="#4285F4" />
        </div>

        <div style={{ display: 'flex', gap: 18, borderBottom: '1px solid #EBEBEB', marginBottom: 12 }}>
          {['All', 'Images', 'Video', 'Shopping', 'Maps'].map((t, i) => (
            <span
              key={t}
              style={{
                fontSize: 12,
                fontWeight: i === 0 ? 500 : 400,
                color: i === 0 ? '#1A73E8' : '#5F6368',
                borderBottom: i === 0 ? '3px solid #1A73E8' : '3px solid transparent',
                padding: '0 1px 9px',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <AnimatePresence>
          {showResults ? (
            <motion.div key="res" initial="hide" animate="show" variants={{}}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ margin: '0 0 14px', fontSize: 12, color: '#70757A' }}
              >
                Found 105,000,000 results (0.43 seconds)
              </motion.p>
              {SEO_RESULTS.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.18, ease: 'easeOut', duration: 0.4 }}
                  style={{ marginBottom: i === 0 ? 14 : 0 }}
                >
                  <p style={{ margin: 0, fontSize: 11, color: '#202124' }}>{r.crumb}</p>
                  <p style={{ margin: '3px 0 0', fontSize: 16, color: '#1A0DAB', lineHeight: 1.25 }}>{r.title}</p>
                  <p style={{ margin: '3px 0 0', fontSize: 12, color: '#4D5156', lineHeight: 1.5 }}>{r.body}</p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div key="placeholder" exit={{ opacity: 0 }} style={{ height: 132 }} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─────────────────────────── 3. Analytics ─────────────────────────── */

const DAILY_BARS = [18, 28, 22, 34, 30, 42, 38, 48, 36, 52, 44, 40, 46, 34, 50, 42, 38, 44, 36, 40];

export function AnalyticsMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const { cycle, inView } = useCycle(ref, 5600);
  const run = inView;

  const metrics = [
    { to: 805, label: 'Unique visitors', color: '#F59E0B', bg: '#FFFBEB', icon: BarChart3, fmt: undefined },
    { to: 1600, label: 'Article views', color: '#3B82F6', bg: '#EFF6FF', icon: FileText, fmt: undefined },
    { to: 115, label: 'Searches', color: '#10B981', bg: '#ECFDF5', icon: Search, fmt: undefined },
  ];

  return (
    <div ref={ref} style={CARD}>
      <div style={{ padding: '16px 16px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
          <div>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: '#111827' }}>Analytics</p>
            <p style={{ margin: '3px 0 0', fontSize: 11, color: '#9CA3AF' }}>Monitor search performance and user feedback</p>
          </div>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              padding: '6px 9px',
              border: '1px solid #E5E7EB',
              borderRadius: 8,
              fontSize: 11,
              color: '#374151',
              whiteSpace: 'nowrap',
            }}
          >
            Past 30 Days
          </span>
        </div>

        <div style={{ display: 'flex', gap: 16, marginTop: 14, borderBottom: '1px solid #E5E7EB' }}>
          {['Overview', 'Articles', 'Searches', 'Feedback'].map((t, i) => (
            <span
              key={t}
              style={{
                fontSize: 11.5,
                fontWeight: i === 0 ? 600 : 400,
                color: i === 0 ? '#111827' : '#9CA3AF',
                borderBottom: i === 0 ? '2px solid #F59E0B' : '2px solid transparent',
                paddingBottom: 8,
                marginBottom: -1,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginTop: 14 }}>
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.label}>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: m.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 7,
                  }}
                >
                  <Icon size={13} strokeWidth={2.25} color={m.color} />
                </div>
                <p style={{ margin: 0, fontSize: 22, fontWeight: 700, color: '#111827', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                  <CountUp to={m.to} run={run} format={m.fmt} />
                </p>
                <p style={{ margin: '5px 0 0', fontSize: 11, fontWeight: 600, color: '#111827' }}>{m.label}</p>
              </div>
            );
          })}
        </div>

        <p style={{ margin: '16px 0 9px', fontSize: 11.5, fontWeight: 600, color: '#111827' }}>Daily visits</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 58 }}>
          {DAILY_BARS.map((h, i) => (
            <motion.div
              key={`${cycle}-${i}`}
              initial={{ height: 0 }}
              animate={{ height: h }}
              transition={{ delay: i * 0.025, ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
              style={{
                flex: 1,
                background: i === DAILY_BARS.length - 1 ? WONDER : '#93C5FD',
                borderRadius: '3px 3px 0 0',
                opacity: 0.55 + (i / DAILY_BARS.length) * 0.45,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── 4. Editor & feedback ─────────────────────────── */

const DRAFT_TITLE = 'Setting up two-factor authentication';
const DRAFT_BODY =
  'Protect your account with an extra layer of security. Open your security settings, choose an authenticator app, then scan the QR code to finish setup.';

export function EditorDraftMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const { cycle, inView } = useCycle(ref, 7200);
  const [body, setBody] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    setBody('');
    setDone(false);
    let i = 0;
    let typer: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      typer = setInterval(() => {
        i += 2;
        setBody(DRAFT_BODY.slice(0, i));
        if (i >= DRAFT_BODY.length) {
          clearInterval(typer);
          setTimeout(() => setDone(true), 400);
        }
      }, 28);
    }, 900);
    return () => {
      clearTimeout(start);
      clearInterval(typer);
    };
  }, [cycle, inView]);

  const writing = body.length < DRAFT_BODY.length;

  return (
    <div ref={ref} style={CARD}>
      {/* toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '11px 16px',
          borderBottom: '1px solid #F1F5F9',
          background: '#FBFCFE',
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#F87171' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FBBF24' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#34D399' }} />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            marginLeft: 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            fontSize: 10.5,
            fontWeight: 600,
            color: WONDER,
            background: 'rgba(0,159,188,0.10)',
            borderRadius: 999,
            padding: '4px 9px',
          }}
        >
          <Sparkles size={11} strokeWidth={2.25} />
          {writing ? 'Wonder is drafting…' : 'Draft ready'}
        </motion.span>
      </div>

      <div style={{ padding: '16px 18px 6px' }}>
        <p style={{ margin: 0, fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', color: '#9CA3AF' }}>
          ARTICLE
        </p>
        <p style={{ margin: '6px 0 12px', fontSize: 17, fontWeight: 700, color: '#111827', lineHeight: 1.25 }}>
          {DRAFT_TITLE}
        </p>
        <p style={{ margin: 0, fontSize: 13, color: '#374151', lineHeight: 1.6, minHeight: 62 }}>
          {body}
          {writing ? (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.55 }}
              style={{ display: 'inline-block', width: 2, height: 14, background: WONDER, marginLeft: 1, verticalAlign: 'middle' }}
            />
          ) : null}
        </p>
      </div>

      {/* feedback footer */}
      <div
        style={{
          margin: '6px 14px 14px',
          border: '1px solid #EEF2F6',
          borderRadius: 10,
          padding: '11px 13px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#FBFCFE',
        }}
      >
        <span style={{ fontSize: 12.5, fontWeight: 600, color: '#111827' }}>Was this helpful?</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <motion.span
            animate={done ? { scale: [1, 1.3, 1], color: '#15803D' } : { color: '#9CA3AF' }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex' }}
          >
            <ThumbsUp size={16} strokeWidth={2} />
          </motion.span>
          <ThumbsDown size={16} strokeWidth={2} color="#9CA3AF" />
        </div>
      </div>
    </div>
  );
}
