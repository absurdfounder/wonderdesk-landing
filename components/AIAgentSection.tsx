'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Eye,
  FileEdit,
  FileText,
  Lock,
  MessageSquare,
  Pause,
  Play,
  RotateCcw,
  Search,
  Send,
} from 'lucide-react';
import { HOME_FEATURE_PLAIN_BG } from '@/components/visuals/PrDocsPlatformCards';

const PROCESSING_STEPS = [
  { icon: 'search' as const, label: 'Scanning 47 help articles…' },
  { icon: 'file' as const, label: 'Found 12 articles with phone references' },
  { icon: 'edit' as const, label: 'Replacing with support portal links…' },
  { icon: 'image' as const, label: 'Updating screenshots…' },
  { icon: 'check' as const, label: 'Done! 12 articles updated' },
];

const DRAFT_ARTICLES = [
  {
    title: 'How to contact support',
    excerpt:
      'If you need help with your account, reach our support team through our support portal. Visit support.company.com to submit a ticket.',
    changes: 4,
    status: 'Updated',
  },
  {
    title: 'Account settings and preferences',
    excerpt:
      'Update your account information, change notification preferences, and manage your subscription through our support portal.',
    changes: 2,
    status: 'Updated',
  },
  {
    title: 'Billing and payment help',
    excerpt:
      'Questions about billing? Need to update your payment method? Our support team can help through our support portal.',
    changes: 3,
    status: 'Updated',
  },
];

type ChatMessage =
  | {
      type: 'user';
      sender: string;
      avatar: string;
      text: string;
      time: string;
      delay: number;
    }
  | { type: 'agent'; sender: string; text: string; time: string; delay: number };

type ChatScriptStep =
  | ChatMessage
  | { type: 'agent_typing'; delay: number }
  | { type: 'processing'; delay: number }
  | { type: 'drafts'; delay: number };

const CHAT_SCRIPT: ChatScriptStep[] = [
  {
    type: 'user',
    sender: 'Vaibhav',
    avatar: 'https://avatars.githubusercontent.com/u/25829699?v=4',
    text: 'Hey Wonder, can you remove all phone-number mentions and replace with our support portal link → support.company.com',
    time: '3:42 PM',
    delay: 200,
  },
  { type: 'agent_typing', delay: 800 },
  {
    type: 'agent',
    sender: 'Wonder',
    text: 'On it! Scanning your help center now…',
    time: '3:43 PM',
    delay: 1000,
  },
  { type: 'processing', delay: 400 },
  {
    type: 'agent',
    sender: 'Wonder',
    text: "All done! I found and updated 12 articles across your help center. Replaced all phone numbers with the support portal link and refreshed the screenshots. Here's a preview:",
    time: '3:44 PM',
    delay: 6500,
  },
  { type: 'drafts', delay: 600 },
];

const WONDER_CHAR = 'https://dazzling-cat.netlify.app/wondercharacter.png';

function WonderAvatar({ size = 40 }: { size?: number }) {
  return (
    <div
      className="shrink-0 overflow-hidden rounded-lg border border-wonder/20 bg-wonder-50"
      style={{ width: size, height: size }}
    >
      <img src={WONDER_CHAR} alt="Wonder" className="h-full w-full object-cover" />
    </div>
  );
}

function StepIcon({ icon }: { icon: (typeof PROCESSING_STEPS)[number]['icon'] }) {
  const props = { size: 14, strokeWidth: 1.75, className: 'text-slate-400' };
  if (icon === 'search') return <Search {...props} />;
  if (icon === 'file') return <FileText {...props} />;
  if (icon === 'edit') return <FileEdit {...props} />;
  if (icon === 'image') return <Camera {...props} />;
  return <CheckCircle2 size={14} strokeWidth={1.75} className="text-emerald-600" />;
}

function ProcessingSteps({ visibleCount }: { visibleCount: number }) {
  return (
    <div className="ml-0 mt-3 sm:ml-[54px]">
      <div className="rounded-lg border border-slate-200 bg-slate-50/80 p-3 sm:p-4">
        <ul className="flex flex-col gap-2">
          {PROCESSING_STEPS.map((step, i) => {
            if (i >= visibleCount) return null;
            const isDone = step.icon === 'check';
            const isActive = i === visibleCount - 1 && !isDone;

            return (
              <li
                key={step.label}
                className={`flex animate-[fadeSlide_0.35s_ease_both] items-center gap-2.5 text-sm ${
                  isDone ? 'font-medium text-emerald-700' : 'text-slate-500'
                } ${i < visibleCount - 1 ? 'opacity-50' : 'opacity-100'}`}
              >
                <StepIcon icon={step.icon} />
                <span>{step.label}</span>
                {isActive && (
                  <span className="ml-1 flex gap-1">
                    {[0, 150, 300].map((delay) => (
                      <span
                        key={delay}
                        className="h-1 w-1 animate-[dotBounce_1.2s_infinite_ease-in-out] rounded-full bg-slate-400"
                        style={{ animationDelay: `${delay}ms` }}
                      />
                    ))}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function renderMessageText(text: string) {
  return text.split(/(support\.company\.com)/g).map((part, j) =>
    part === 'support.company.com' ? (
      <span key={j} className="font-medium text-wonder underline decoration-wonder/30 underline-offset-2">
        {part}
      </span>
    ) : (
      <span key={j}>{part}</span>
    ),
  );
}

export default function AIAgentSection() {
  const [chatItems, setChatItems] = useState<ChatMessage[]>([]);
  const [scriptIdx, setScriptIdx] = useState(0);
  const [agentTyping, setAgentTyping] = useState(false);
  const [procVisible, setProcVisible] = useState(0);
  const [showDrafts, setShowDrafts] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const procRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chatItems, agentTyping, procVisible, showDrafts]);

  const cleanUp = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (procRef.current) clearInterval(procRef.current);
  }, []);

  const restart = useCallback(() => {
    cleanUp();
    setChatItems([]);
    setScriptIdx(0);
    setAgentTyping(false);
    setProcVisible(0);
    setShowDrafts(false);
    setIsRunning(true);
  }, [cleanUp]);

  const processStep = useCallback(
    (idx: number) => {
      if (idx >= CHAT_SCRIPT.length) {
        timerRef.current = setTimeout(restart, 4000);
        return;
      }

      const step = CHAT_SCRIPT[idx];
      timerRef.current = setTimeout(() => {
        if (step.type === 'user') {
          setChatItems((p) => [...p, step]);
          setScriptIdx(idx + 1);
          return;
        }
        if (step.type === 'agent_typing') {
          setAgentTyping(true);
          setScriptIdx(idx + 1);
          return;
        }
        if (step.type === 'agent') {
          setAgentTyping(false);
          setChatItems((p) => [...p, step]);
          setScriptIdx(idx + 1);
          return;
        }
        if (step.type === 'processing') {
          setProcVisible(1);
          let count = 1;
          procRef.current = setInterval(() => {
            count++;
            setProcVisible(count);
            if (count >= PROCESSING_STEPS.length) {
              if (procRef.current) clearInterval(procRef.current);
              procRef.current = null;
              setScriptIdx(idx + 1);
            }
          }, 1100);
          return;
        }
        if (step.type === 'drafts') {
          setShowDrafts(true);
          setScriptIdx(idx + 1);
        }
      }, step.delay);
    },
    [restart],
  );

  useEffect(() => {
    if (!isRunning) return;
    processStep(scriptIdx);
    return cleanUp;
  }, [scriptIdx, isRunning, processStep, cleanUp]);

  return (
    <section className="bg-white">
      <style>{`
        @keyframes fadeSlide { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        @keyframes dotBounce { 0%,80%,100%{transform:translateY(0);opacity:.35} 40%{transform:translateY(-3px);opacity:1} }
      `}</style>

      <div className="landing-grid-column bg-white">
        <div className="border-b border-slate-200 landing-grid-pad py-10 md:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">
                Just ask Wonder
              </span>
              <h2 className="mt-3 font-display text-2xl text-slate-800 sm:text-3xl md:text-4xl">
                The AI agent that writes and updates your help articles for you
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Tell Wonder what to change in plain English. It scans your help center, edits articles,
                refreshes screenshots, and queues updates for review — like a teammate who never forgets.
              </p>
            </div>

            <Link
              href="https://app.wonderdesk.ai/chat"
              className="wonder-btn-primary w-full shrink-0 sm:w-auto"
            >
              Try Wonder chat
            </Link>
          </div>
        </div>

        <div
          className="border-t border-slate-200 py-8 md:py-12"
          style={{ backgroundColor: HOME_FEATURE_PLAIN_BG }}
        >
          <div className="landing-grid-pad">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_24px_60px_-16px_rgba(15,23,42,0.18)] ring-1 ring-black/[0.04]">
            {/* Browser chrome */}
            <div className="flex items-center gap-3 border-b border-slate-200 bg-[#FDFCFB] px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>

              <div className="mx-auto flex max-w-sm flex-1 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 shadow-inner">
                <Lock size={11} className="shrink-0 text-slate-400" strokeWidth={2} />
                <span className="truncate font-mono text-[11px] text-slate-500">app.wonderdesk.ai/chat</span>
              </div>

              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setIsRunning((p) => !p)}
                  className="flex h-7 w-7 items-center justify-center rounded border border-slate-200 bg-white text-slate-500 transition-colors hover:bg-slate-50"
                  aria-label={isRunning ? 'Pause demo' : 'Play demo'}
                >
                  {isRunning ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
                </button>
                <button
                  type="button"
                  onClick={restart}
                  className="flex h-7 w-7 items-center justify-center rounded border border-slate-200 bg-white text-slate-500 transition-colors hover:bg-slate-50"
                  aria-label="Restart demo"
                >
                  <RotateCcw size={12} />
                </button>
              </div>
            </div>

            {/* Chat panel */}
            <div className="flex min-h-[480px] flex-col bg-white md:min-h-[540px]">
              <div
                ref={chatRef}
                className="flex-1 space-y-5 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6 [scrollbar-width:thin]"
              >
                {chatItems.map((item, i) => (
                  <div key={i} className="animate-[fadeSlide_0.4s_ease_both]">
                    <div className="flex items-start gap-3 sm:gap-4">
                      {item.type === 'user' ? (
                        <img
                          src={item.avatar}
                          alt={item.sender}
                          className="h-10 w-10 shrink-0 rounded-lg object-cover"
                        />
                      ) : (
                        <WonderAvatar />
                      )}

                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-baseline gap-2">
                          <span className="text-sm font-semibold text-slate-900">{item.sender}</span>
                          <span className="text-xs text-slate-400">{item.time}</span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-600">{renderMessageText(item.text)}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {agentTyping && (
                  <div className="flex animate-[fadeSlide_0.3s_ease_both] items-start gap-3 sm:gap-4">
                    <WonderAvatar />
                    <div className="flex gap-1 pt-3">
                      {[0, 150, 300].map((delay) => (
                        <span
                          key={delay}
                          className="h-1.5 w-1.5 animate-[dotBounce_1.2s_infinite_ease-in-out] rounded-full bg-slate-400"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {procVisible > 0 && <ProcessingSteps visibleCount={procVisible} />}

                {showDrafts && (
                  <div className="animate-[fadeSlide_0.5s_ease_both] sm:ml-[54px]">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                      >
                        <Eye size={14} strokeWidth={2} />
                        Review &amp; publish
                      </button>
                      <span className="font-mono text-[11px] uppercase tracking-wide text-slate-400">
                        12 articles updated
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {DRAFT_ARTICLES.map((article, idx) => (
                        <div
                          key={article.title}
                          className="group flex flex-col rounded-lg border border-slate-200 bg-gradient-to-b from-white to-slate-50/80 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                          style={{ animation: `fadeSlide 0.4s ease ${idx * 120}ms both` }}
                        >
                          <div className="mb-2 flex items-center justify-between gap-2">
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                              <CheckCircle2 size={10} strokeWidth={2.5} />
                              {article.status}
                            </span>
                            <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                              {article.changes} changes
                            </span>
                          </div>
                          <h4 className="text-sm font-semibold leading-snug text-slate-900">{article.title}</h4>
                          <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-500 [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]">
                            {article.excerpt}
                          </p>
                          <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-wonder opacity-0 transition-opacity group-hover:opacity-100">
                            View article <ArrowRight size={11} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input bar */}
              <div className="shrink-0 border-t border-slate-100 bg-white px-4 py-3 sm:px-6 sm:py-4">
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 sm:px-4">
                  <MessageSquare size={16} className="shrink-0 text-slate-400" strokeWidth={1.5} />
                  <span className="flex-1 text-sm text-slate-400">Ask Wonder anything…</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-wonder text-white">
                    <Send size={14} strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
