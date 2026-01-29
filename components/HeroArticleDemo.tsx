'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

type Step = 'input' | 'processing' | 'article';

const processingSteps = [
  { icon: 'search', label: 'Searching your knowledge base' },
  { icon: 'intercom', label: 'Reading support tickets' },
  { icon: 'github', label: 'Browsing your codebase' },
  { icon: 'screenshot', label: 'Taking screenshots' },
  { icon: 'structure', label: 'Planning content structure' },
  { icon: 'link', label: 'Linking to other articles' },
  { icon: 'writing', label: 'Writing...', shimmer: true },
];

const stepTransition = {
  initial: { opacity: 0, scale: 0.96, y: 12 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.98, y: -8 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: i * 0.1 },
  }),
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 },
};

const fullPromptText =
  'Write help articles from our Notion docs and GitHub repo. Use our support tickets and Intercom for common questions.';

const TYPING_INTERVAL_MS = 58;
const CURSOR_BLINK_MS = 530;

export default function HeroArticleDemo() {
  const [step, setStep] = useState<Step>('input');
  const [processingIndex, setProcessingIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [published, setPublished] = useState(false);

  const fireConfetti = useCallback(() => {
    const count = 80;
    const defaults = { origin: { y: 0.7 }, zIndex: 9999 };
    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({ ...defaults, ...opts, particleCount: Math.floor(count * particleRatio) });
    }
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  // Typing animation when on input step
  useEffect(() => {
    if (step !== 'input') return;
    setTypedLength(0);
    let cancelled = false;
    let index = 0;
    const id = setInterval(() => {
      if (cancelled) return;
      index += 1;
      if (index > fullPromptText.length) {
        clearInterval(id);
        return;
      }
      setTypedLength(index);
    }, TYPING_INTERVAL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [step]);

  // Blinking cursor
  useEffect(() => {
    if (step !== 'input') return;
    const id = setInterval(() => setCursorVisible((v) => !v), CURSOR_BLINK_MS);
    return () => clearInterval(id);
  }, [step]);

  // Step 1 -> 2: auto after 5s or on "Write my docs" click
  useEffect(() => {
    if (step !== 'input') return;
    const t = setTimeout(() => setStep('processing'), 5000);
    return () => clearTimeout(t);
  }, [step]);

  // Step 2: animate processing rows, then go to article
  useEffect(() => {
    if (step !== 'processing') return;
    if (processingIndex < processingSteps.length) {
      const t = setTimeout(() => setProcessingIndex((i) => i + 1), 1100);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep('article'), 3500);
    return () => clearTimeout(t);
  }, [step, processingIndex]);

  const handleReplay = () => {
    setStep('input');
    setProcessingIndex(0);
    setPublished(false);
  };

  const handlePublish = () => {
    setPublished(true);
    fireConfetti();
  };

  return (
    <motion.div
      className="relative w-full overflow-hidden py-10 sm:py-12 lg:py-16"
      style={{ minHeight: 420, height: 'min(560px, 80vh)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col overflow-hidden rounded-t-2xl shadow-2xl px-1 pt-1 shadow-black/50 border border-neutral-200 bg-stone-50/70 backdrop-blur-sm shadow-stone-950/10">
          {/* Desktop title bar: traffic lights, URL, theme toggles */}
          <div className="relative hidden h-0 md:flex md:h-10 shrink-0 items-center gap-6 px-4 md:py-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="absolute md:flex hidden inset-y-0 inset-x-24 items-center">
              <div className="flex flex-1 items-center justify-center gap-1.5 truncate rounded-full bg-neutral-100/80 px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200/80">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" className="shrink-0 text-stone-500" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.26781 18.8447C4.49269 20.515 5.87613 21.8235 7.55966 21.9009C8.97627 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.879 17.7547 20 16.6376 20 15.5C20 14.3624 19.879 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97627 9.03397 7.55966 9.09909C5.87613 9.17649 4.49269 10.485 4.26781 12.1553C4.12104 13.2453 4 14.3624 4 15.5C4 16.6376 4.12104 17.7547 4.26781 18.8447Z" />
                  <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" />
                  <path d="M11.9961 15.5H12.0051" />
                </svg>
                <span className="truncate">yourcompany.com/help</span>
              </div>
            </div>
            <div className="ml-auto md:flex hidden items-center ml-4">
              <button
                type="button"
                onClick={handleReplay}
                className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-xs font-medium text-neutral-600 shadow-sm transition hover:bg-neutral-50 hover:border-neutral-300"
                aria-label="Restart demo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                  <path d="M1 4v6h6" />
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                </svg>
                Restart
              </button>
            </div>
          </div>
          {/* Browser content area - rectangular with generous whitespace */}
          <div className="relative overflow-hidden rounded-b-2xl rounded-t-xl border-x border-t border-neutral-200 bg-white/95 min-h-[400px] sm:min-h-[460px] lg:min-h-[500px]">
            <div className="relative flex min-h-[400px] sm:min-h-[460px] lg:min-h-[500px] items-center justify-center p-8 sm:p-4 lg:p-6">
              <div className="w-full max-w-5xl space-y-6">
                <AnimatePresence mode="wait" initial={false}>
            {/* Step 1: Input card */}
            {step === 'input' && (
              <motion.div
                key="input"
                {...stepTransition}
                className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-lime-950/40 p-1.5 ring-2 ring-white/10 backdrop-blur-lg"
              >
                <motion.div
                  className="flex items-center gap-3 px-5 py-3.5"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants} className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-md bg-emerald-500">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://dazzling-cat.netlify.app/wonderbadge.png" alt="Wonder" className="h-full w-full object-contain" />
                  </motion.div>
                  <motion.div variants={itemVariants} className="min-w-0 flex-1">
                    <h3 className="text-left text-base font-medium text-neutral-100">What can I help with?</h3>
                  </motion.div>
                  <motion.button
                    variants={itemVariants}
                    type="button"
                    className="ml-auto flex cursor-pointer items-center rounded-lg border border-dashed border-neutral-400/50 py-1 pl-2 pr-1"
                  >
                    <div className="relative mr-2">
                      <div className="size-2 rounded-full bg-green-500/60" />
                      <motion.div className="absolute inset-0 rounded-full bg-green-500" animate={{ scale: [1, 1.4], opacity: [0.5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
                    </div>
                    <span className="mr-3 hidden text-sm font-medium text-neutral-200 sm:inline">Connected to</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="-ml-1 size-5 rounded bg-white object-contain p-0.5 ring ring-gray-200/20" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://cdn.worldvectorlogo.com/logos/intercom-2.svg" alt="Intercom" className="-ml-1 size-5 rounded bg-white object-contain p-0.5 ring ring-gray-200/20" />
                    <div className="-ml-1 flex size-5 items-center justify-center rounded bg-neutral-100 ring ring-gray-200/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-gray-400" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                        <path d="M12 4V20M20 12H4" />
                      </svg>
                    </div>
                  </motion.button>
                </motion.div>
                <motion.div
                  className="rounded-xl bg-white"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <div
                    className="min-h-[8.5rem] w-full resize-none border-none bg-transparent px-6 py-5 pt-5 text-base text-neutral-700 focus:ring-0 focus:outline-none"
                    aria-label="Task description"
                  >
                    <span>{fullPromptText.slice(0, typedLength)}</span>
                    <motion.span
                      className="ml-0.5 inline-block h-4 w-0.5 align-middle bg-neutral-500"
                      animate={{ opacity: cursorVisible ? 1 : 0 }}
                      transition={{ duration: 0.1 }}
                      aria-hidden
                    />
                  </div>
                  <motion.div
                    className="flex justify-between border-t border-neutral-200 px-6 pt-5 pb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 }}
                  >
                    <div className="flex items-center gap-2">
                      <button type="button" disabled className="inline-flex size-10 cursor-not-allowed items-center justify-center rounded-full bg-neutral-200 text-neutral-600 opacity-50" aria-label="Attach">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                          <path d="M5.82 12L4.28 10.46C2.57 8.75 2.57 5.98 4.28 4.28C5.98 2.57 8.75 2.57 10.46 4.28L19.72 13.54C21.43 15.25 21.43 18.02 19.72 19.72C18.02 21.43 15.25 21.43 13.54 19.72L10.07 16.25C9 15.18 9 13.45 10.07 12.39C11.14 11.32 12.86 11.32 13.93 12.39L15.86 14.32" />
                        </svg>
                      </button>
                    </div>
                    <motion.button
                      type="button"
                      onClick={() => setStep('processing')}
                      className="relative flex cursor-pointer items-center gap-2 rounded-[10px] border border-white bg-gradient-to-b from-white via-white to-white p-0.5 font-bold ring-2 ring-black/8 text-gray-600"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="Write my docs / try it!"
                    >
                      <span className="flex h-full w-full items-center gap-2 rounded-[8px] border-none bg-transparent px-4 py-2.5 text-sm font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-lime-600">
                          <path d="M13.94 6.337C15.57 7.265 16.86 7.994 17.77 8.66C18.69 9.33 19.37 10.04 19.62 10.96C19.79 11.64 19.79 12.36 19.62 13.04C19.37 13.96 18.69 14.67 17.77 15.34C16.86 16 15.57 16.73 13.94 17.66C12.36 18.56 11.03 19.31 10.02 19.74C9 20.18 8.08 20.4 7.18 20.14C6.51 19.95 5.91 19.6 5.42 19.11C4.76 18.44 4.5 17.52 4.37 16.41C4.25 15.32 4.25 13.88 4.25 12.05V11.95C4.25 10.12 4.25 8.68 4.37 7.58C4.5 6.48 4.76 5.56 5.42 4.89C5.91 4.4 6.51 4.05 7.18 3.86C8.08 3.6 9 3.82 10.02 4.26C11.03 4.69 12.36 5.44 13.94 6.337Z" />
                        </svg>
                        Write my docs / try it!
                      </span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}

            {/* Step 2: Processing / activity list */}
            {step === 'processing' && (
              <motion.div
                key="processing"
                {...stepTransition}
                className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl bg-white/40 p-1.5 ring-2 ring-black/10 backdrop-blur-lg"
              >
                <div className="min-h-[280px] sm:min-h-[320px] space-y-2 rounded-xl bg-white px-5 py-5">
                  {processingSteps.slice(0, processingIndex + 1).map((item) => (
                    <motion.div
                      key={item.label}
                      layout
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                      className="flex flex-wrap items-center gap-2 rounded-md p-1"
                    >
                      <div className="flex items-center justify-center">
                        {item.icon === 'search' && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16" className="text-lime-700" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" strokeWidth={1.5} opacity={0.4} />
                            <path d="M18 18l4 4" strokeWidth={1.5} />
                          </svg>
                        )}
                        {item.icon === 'intercom' && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src="https://cdn.worldvectorlogo.com/logos/intercom-2.svg" alt="" className="size-5 rounded-sm bg-white object-contain p-0.5 ring ring-gray-200/20" />
                        )}
                        {item.icon === 'github' && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" className="size-5 rounded-sm bg-white object-contain p-0.5 ring ring-gray-200/20" />
                        )}
                        {item.icon === 'screenshot' && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16" className="text-lime-700" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9.5 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill="currentColor" />
                            <path d="M18.5 1.25l.46.49.22.7c.36.98.48 1.24.67 1.43.19.19.45.31 1.43.67l.7.22.49.46c.31.32.31.84 0 1.15l-.46.49-.7.22c-.98.36-1.24.48-1.43.67-.19.19-.31.45-.67 1.43l-.22.7-.49.46c-.32.31-.84.31-1.15 0l-.49-.46-.7-.22c-.98-.36-1.24-.48-1.43-.67-.19-.19-.31-.45-.67-1.43l-.22-.7-.49-.46c-.31-.32-.31-.84 0-1.15l.46-.49.22-.7c.36-.98.48-1.24.67-1.43.19-.19.45-.31 1.43-.67l.7-.22.49-.46c.31-.32.84-.32 1.15 0z" fill="currentColor" opacity={0.4} />
                            <path d="M11.5 2.25h-.07C9.3 2.25 7.61 2.25 6.28 2.43 4.91 2.61 3.78 3 2.89 3.89 2 4.78 1.61 5.91 1.43 7.28 1.25 8.61 1.25 12.43v.14c0 3.82.02 6.39.18 7.72.18 1.37.57 2.5 1.46 3.39.89.89 2.02 1.28 3.39 1.46 1.33.18 3.9.18 7.72.18h.14c3.82 0 6.39-.02 7.72-.18 1.37-.18 2.5-.57 3.39-1.46.89-.89 1.28-2.02 1.46-3.39.18-1.33.18-3.9.18-7.72V12.5c0-.52-.45-.94-.97-.94-.54 0-.98.44-.98.98 0 .5-.01.98-.01 1.5 0 2.22-.02 3.78-.18 4.96-.15 1.18-.44 2.31-.89 2.89-.47.47-1.12.76-2.27.91-1.22.16-2.78.16-4.99.16s-3.77-.16-4.96-.32c-1.18-.15-2.31-.44-2.89-.89-.47-.47-.76-1.12-.91-2.27-.16-1.22-.16-2.78-.16-4.99z" fill="currentColor" opacity={0.4} />
                          </svg>
                        )}
                        {item.icon === 'structure' && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16" className="text-lime-700" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 19.75c0-.55.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1z" fill="currentColor" />
                            <path d="M14.15 5.98L6.37 13.77c-.97.97-1.56 1.56-1.97 2.29-.23.41-.42 1.02-.6 1.63-.18.65-.36 1.4-.54 2.12l-.02.01c-.06.26.01.52.19.7.18.18.44.25.7.19l.01-.02c.72-.18 1.47-.36 2.12-.54.61-.18 1.22-.37 1.63-.6.73-.41 1.32-1 2.29-1.97L18.02 9.85 14.15 5.98z" fill="currentColor" opacity={0.4} />
                            <path d="M19.08 8.79l.87-.87c1.07-1.07 1.07-2.8 0-3.87-1.07-1.07-2.8-1.07-3.87 0l-.87.87 3.87 3.87z" fill="currentColor" />
                          </svg>
                        )}
                        {item.icon === 'link' && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16" className="text-lime-700" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16.81 4.19c-1.59-1.59-4.16-1.59-5.75 0l-2.87 2.87c-1.55 1.55-1.55 4.06 0 5.61 1.55 1.55 4.06 1.55 5.61 0l.46-.46c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-.46.46c-2.18 2.18-5.72 2.18-7.9 0-2.18-2.18-2.18-5.72 0-7.9l2.87-2.87c2.18-2.18 5.72-2.18 7.9 0 2.18 2.18 2.18 5.72 0 7.9l-.46.46c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l.46-.46c2.18-2.18 2.18-5.72 0-7.9z" fill="currentColor" opacity={0.4} />
                            <path d="M5.69 12.74c-2.28 2.37-2.25 6.11.09 8.45 2.37 2.37 6.11 2.37 8.45 0l2.45-2.45c2.37-2.37 2.37-6.11 0-8.45-2.21-2.21-5.52-2.25-7.79-.07l-.46.46c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41l.46-.46c2.59-2.59 6.82-2.59 9.41 0 2.59 2.59 2.59 6.82 0 9.41l-2.45 2.45c-2.59 2.59-6.82 2.59-9.41 0-2.59-2.59-2.59-6.82 0-9.41z" fill="currentColor" opacity={0.4} />
                          </svg>
                        )}
                        {item.icon === 'writing' && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16" className="text-lime-700" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5.12 17.75c.25-.01.5-.02.74-.03 3.58-.33 6.49-1.52 9.01-3.35l.05-.03c.55-.4 1.04-.75 1.4-1.12.41-.42.66-.89.73-1.51.11-.91-.34-1.67-.79-2.21-.12-.15-.24-.29-.37-.42C17.26 8.66 18.43 8.1 19.27 7.22 20.42 6.02 20.87 4.36 20.72 2.17c-.02-.35-.28-.63-.6-.68-3.68-.63-7.88-.04-11.05 2.41-3.06 2.36-5.04 6.36-4.77 12.31.01.28.03.57.05.86.03.41.38.73.8.71z" fill="currentColor" opacity={0.4} />
                            <path d="M4.27 16.2C3.64 17.77 3.25 19.6 3.25 21.75c0 .55.45 1 1 1s1-.45 1-1c0-1.47.23-2.81.61-4.06 1.12-3.46 3.57-5.57 5.52-7.18.43-.35.49-.98.14-1.41-.35-.43-.98-.49-1.41-.14-2.15 1.75-4.73 3.94-6.06 8z" fill="currentColor" />
                          </svg>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className={`text-base text-neutral-600 ${item.shimmer ? 'loading-shimmer' : ''}`}>
                          {item.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Article card */}
            {step === 'article' && (
              <motion.div
                key="article"
                {...stepTransition}
                className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl bg-stone-200/40 p-1.5 ring-2 ring-black/10 backdrop-blur-lg"
              >
                <motion.div
                  className="flex items-center gap-3 rounded-t-xl border-b border-neutral-200 bg-white px-5 py-3.5"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden rounded bg-emerald-500">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://dazzling-cat.netlify.app/wonderbadge.png" alt="Wonder" className="h-full w-full object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-neutral-500">I&apos;ve drafted this article!</div>
                  </div>
                  {published ? (
                    <span className="relative flex rounded-[10px] bg-[#3D870A]/20 p-0.5 text-green-950" aria-label="Published">
                      <span className="flex items-center gap-2 rounded-[8px] border border-lime-200/80 bg-[#8CC352] px-3 py-1.5 text-xs font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="16" height="16" className="text-current" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                          <path d="M5 14L8.5 17.5L19 6.5" />
                        </svg>
                        Published
                      </span>
                    </span>
                  ) : (
                    <motion.button
                      type="button"
                      onClick={handlePublish}
                      className="relative flex cursor-pointer items-center gap-2 rounded-[10px] border border-neutral-300 bg-white p-0.5 font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-50 hover:border-neutral-400"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="Publish"
                    >
                      <span className="flex items-center gap-2 rounded-[8px] border-none bg-transparent px-3 py-1.5 text-xs font-bold">
                        Publish
                      </span>
                    </motion.button>
                  )}
                </motion.div>
                <motion.div
                  className="max-h-[340px] sm:max-h-[380px] overflow-y-auto rounded-b-xl bg-white px-6 py-6 pt-10 sm:px-8 sm:py-7 sm:pt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                >
                  <motion.div
                    className="mx-auto max-w-4xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.1, delayChildren: 0.18 }}
                  >
                    <motion.h2 variants={itemVariants} className="mb-3 font-funneldisplay text-2xl font-medium text-neutral-800 text-balance sm:text-3xl">
                      How to export your Wonder help articles
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mb-4 text-base leading-relaxed text-neutral-500">
                      Wonder lets you sync your help center from Notion. This guide walks you through
                      exporting article data, backing up your content, and using the API for custom
                      workflows.
                    </motion.p>
                    <motion.div variants={itemVariants} className="mb-4 flex gap-3 rounded-xl border border-sky-600/20 bg-sky-600/10 p-4">
                      <div className="mt-0.5 flex-none text-sky-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20" height="20" className="text-current" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 16V11.5" />
                          <path d="M12 8.01V8" />
                        </svg>
                      </div>
                      <div className="flex-grow text-base">
                        <p className="text-sky-700">
                          For advanced export options, see our{' '}
                          <a className="font-medium underline" href="https://wonderdesk.ai/help">API docs</a>.
                        </p>
                      </div>
                    </motion.div>
                    <motion.h3 variants={itemVariants} className="mt-6 mb-2 font-funneldisplay text-xl font-medium text-neutral-800">Getting started</motion.h3>
                    <motion.p variants={itemVariants} className="mb-3 text-base leading-relaxed text-neutral-500">
                      Make sure your Notion workspace is connected to Wonder. Only workspace admins can
                      export data.
                    </motion.p>
                    <motion.h3 variants={itemVariants} className="mt-6 mb-2 font-funneldisplay text-xl font-medium text-neutral-800">Export steps</motion.h3>
                    <motion.ol variants={itemVariants} className="mb-4 list-decimal space-y-2 pl-5 text-base text-neutral-500">
                      <li>Open your Wonder dashboard and go to <span className="font-medium text-neutral-800">Settings</span></li>
                      <li>Select <span className="font-medium text-neutral-800">Export</span>, choose <span className="font-medium text-neutral-800">CSV</span> or <span className="font-medium text-neutral-800">JSON</span></li>
                      <li>Click <span className="font-medium text-neutral-800">Download</span> to get your file</li>
                    </motion.ol>
                    <motion.div variants={itemVariants} className="mb-4 flex gap-3 rounded-xl border border-amber-600/20 bg-amber-600/10 p-4">
                      <div className="mt-0.5 flex-none text-amber-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="20" height="20" className="text-current" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8V12.5" />
                          <path d="M12 16V16" />
                        </svg>
                      </div>
                      <div className="flex-grow text-base">
                        <p className="text-amber-700">Your live help center always reflects your current Notion content.</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
