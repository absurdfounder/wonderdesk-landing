'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Search, 
  Github, 
  Camera, 
  FileEdit, 
  Link2, 
  Pencil, 
  Paperclip, 
  Play, 
  Check, 
  Lock,
  Plus,
  RotateCcw,
  Info,
  AlertCircle,
  Pause
} from 'lucide-react';

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
const AUTO_RESTART_DELAY = 5000;
const AUTO_PUBLISH_DELAY = 1000; // Delay before auto-publishing

export default function HeroArticleDemo() {
  const [step, setStep] = useState<Step>('input');
  const [processingIndex, setProcessingIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [published, setPublished] = useState(false);
  const [restartProgress, setRestartProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const publishButtonRef = useRef<HTMLButtonElement>(null);

  const fireConfetti = useCallback((buttonElement?: HTMLElement) => {
    const count = 80;
    let origin = { x: 0.5, y: 0.7 };
    
    if (buttonElement) {
      const rect = buttonElement.getBoundingClientRect();
      origin = {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight
      };
    }
    
    const defaults = { origin, zIndex: 9999 };
    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({ ...defaults, ...opts, particleCount: Math.floor(count * particleRatio) });
    }
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  useEffect(() => {
    if (step !== 'input' || isPaused) return;
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
  }, [step, isPaused]);

  useEffect(() => {
    if (step !== 'input' || isPaused) return;
    const id = setInterval(() => setCursorVisible((v) => !v), CURSOR_BLINK_MS);
    return () => clearInterval(id);
  }, [step, isPaused]);

  useEffect(() => {
    if (step !== 'input' || isPaused) return;
    const t = setTimeout(() => setStep('processing'), 5000);
    return () => clearTimeout(t);
  }, [step, isPaused]);

  useEffect(() => {
    if (step !== 'processing' || isPaused) return;
    if (processingIndex < processingSteps.length) {
      const t = setTimeout(() => setProcessingIndex((i) => i + 1), 1100);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep('article'), 3500);
    return () => clearTimeout(t);
  }, [step, processingIndex, isPaused]);

  // Auto-publish effect
  useEffect(() => {
    if (step === 'article' && !published && !isPaused) {
      const timer = setTimeout(() => {
        handlePublish();
      }, AUTO_PUBLISH_DELAY);
      return () => clearTimeout(timer);
    }
  }, [step, published, isPaused]);

  useEffect(() => {
    if (step !== 'article' || !published || isPaused) {
      setRestartProgress(0);
      return;
    }
    
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / AUTO_RESTART_DELAY) * 100, 100);
      setRestartProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        handleReplay();
      }
    }, 16);

    return () => clearInterval(interval);
  }, [step, published, isPaused]);

  const handleReplay = () => {
    setStep('input');
    setProcessingIndex(0);
    setPublished(false);
    setRestartProgress(0);
    setIsPaused(false);
  };

  const handlePublish = () => {
    setPublished(true);
    if (publishButtonRef.current) {
      fireConfetti(publishButtonRef.current);
    } else {
      fireConfetti();
    }
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .loading-shimmer {
          background: linear-gradient(90deg, rgb(115 115 115) 0%, rgba(115, 115, 115, .3) 50%, rgb(115 115 115) 100%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      <motion.div
        className="relative w-full pb-10 sm:pb-12 lg:by-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto w-full max-w-6xl px-1 sm:px-1">
          <div className=" flex flex-col rounded-2xl shadow-2xl px-1 py-1 shadow-black/50 border border-neutral-200 bg-stone-50/70 backdrop-blur-sm">
            {/* Desktop title bar */}
            <div className="relative hidden md:flex h-10 shrink-0 items-center gap-6 px-4 py-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="absolute flex inset-y-0 inset-x-24 items-center mr-3">
                <div className="flex flex-1 items-center justify-center gap-1.5 truncate rounded-full bg-neutral-100/80 px-3 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200/80">
                  <Lock className="shrink-0 text-stone-500" size={12} strokeWidth={2.5} />
                  <span className="truncate">yourcompany.com/help</span>
                </div>
              </div>
              <div className="ml-auto flex flex-col items-end gap-1">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePause}
                    className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-xs font-medium text-neutral-600 shadow-sm transition hover:bg-neutral-50 hover:border-neutral-300"
                    aria-label={isPaused ? "Play demo" : "Pause demo"}
                  >
                    {isPaused ? (
                      <Play size={14} strokeWidth={2} fill="currentColor" />
                    ) : (
                      <Pause size={14} strokeWidth={2} />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleReplay}
                    className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-xs font-medium text-neutral-600 shadow-sm transition hover:bg-neutral-50 hover:border-neutral-300"
                    aria-label="Restart demo"
                  >
                    <RotateCcw size={14} strokeWidth={2} />
                  </button>
                </div>
                {published && restartProgress > 0 && !isPaused && (
                  <div className="w-full h-0.5 bg-neutral-200 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gray-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${restartProgress}%` }}
                      transition={{ duration: 0.016, ease: 'linear' }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Browser content area with fixed height */}
            <div
              className="relative rounded-b-2xl rounded-t-xl border-x border-t border-neutral-200"
              style={{
                height: '600px',
                backgroundImage: "linear-gradient(rgb(255 255 255 / 59%), rgba(255, 255, 255, 0)), url(https://dazzling-cat.netlify.app/wondercollectivebanner.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed"
              }}
            >
              <div className="relative flex items-center justify-center h-full p-8 sm:p-4 lg:p-6">
                <div className="w-full max-w-5xl">
                  <AnimatePresence mode="wait" initial={false}>
                    {/* Step 1: Input card */}
                    {step === 'input' && (
                      <motion.div
                        key="input"
                        {...stepTransition}
                        className="mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-black/30 p-1.5 ring-2 ring-white/10 backdrop-blur-lg"
                      >
                        <motion.div
                          className="flex items-center gap-3 px-5 py-3.5"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.div variants={itemVariants} className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-blue-500">
                            <img src="https://dazzling-cat.netlify.app/wonderbadge.png" alt="Wonder" className="h-full w-full object-contain" />
                          </motion.div>
                          <motion.div variants={itemVariants} className="min-w-0 flex-1">
                            <h3 className="text-left text-base font-medium text-neutral-100">What can I help with?</h3>
                          </motion.div>
                          <motion.button
                            variants={itemVariants}
                            type="button"
                            className="ml-auto flex cursor-pointer items-center rounded-lg border border-dashed border-neutral-400/50 py-1 pl-2 pr-1 bg-black/50"
                          >
                            <div className="relative mr-2">
                              <div className="size-2 rounded-full bg-green-500/60" />
                              <motion.div className="absolute inset-0 rounded-full bg-green-500" animate={{ scale: [1, 1.4], opacity: [0.5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
                            </div>
                            <span className="mr-3 hidden text-sm font-medium text-neutral-200 sm:inline">Connected to</span>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="-ml-1 size-5 rounded bg-white object-contain p-0.5 ring ring-gray-200/20" />
                            <img src="https://cdn.worldvectorlogo.com/logos/intercom-2.svg" alt="Intercom" className="-ml-1 size-5 rounded bg-white object-contain p-0.5 ring ring-gray-200/20" />
                            <div className="-ml-1 flex size-5 items-center justify-center rounded bg-neutral-100 ring ring-gray-200/20">
                              <Plus className="text-gray-400" size={14} strokeWidth={1.5} />
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
                            className="w-full border-none bg-transparent px-6 py-5 text-base text-neutral-700 leading-relaxed"
                            style={{ height: '140px', overflow: 'hidden' }}
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
                                <Paperclip size={20} strokeWidth={1.5} />
                              </button>
                            </div>
                            <motion.button
                              type="button"
                              onClick={() => setStep('processing')}
                              className="relative flex cursor-pointer items-center gap-2 rounded-[10px] border border-white bg-orange-300 p-0.5 font-bold ring-2 ring-black/8 text-gray-600"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              aria-label="Write my docs"
                            >
                              <span className="flex h-full w-full items-center gap-2 rounded-[8px] border-none bg-transparent px-4 py-2.5 text-sm font-bold">
                                Write my docs / try it!
                              </span>
                            </motion.button>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Step 2: Processing */}
                    {step === 'processing' && (
                      <motion.div
                        key="processing"
                        {...stepTransition}
                        className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl bg-white/40 p-1.5 ring-2 ring-black/10 backdrop-blur-lg"
                      >
                        <div className="space-y-2 rounded-xl bg-white px-5 py-5" style={{ height: '360px' }}>
                          {processingSteps.slice(0, processingIndex + 1).map((item) => (
                            <motion.div
                              key={item.label}
                              layout
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ type: 'spring', stiffness: 220, damping: 28 }}
                              className="flex items-center gap-2 rounded-md py-1 px-2"
                            >
                              <div className="flex items-center justify-center">
                                {item.icon === 'search' && (
                                  <Search className="text-gray-700" size={16} strokeWidth={1.5} opacity={0.4} />
                                )}
                                {item.icon === 'intercom' && (
                                  <img src="https://cdn.worldvectorlogo.com/logos/intercom-2.svg" alt="" className="size-5 rounded-sm bg-white object-contain p-0.5 ring ring-gray-200/20" />
                                )}
                                {item.icon === 'github' && (
                                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" className="size-5 rounded-sm bg-white object-contain p-0.5 ring ring-gray-200/20" />
                                )}
                                {item.icon === 'screenshot' && (
                                  <Camera className="text-gray-700" size={16} strokeWidth={1.5} />
                                )}
                                {item.icon === 'structure' && (
                                  <FileEdit className="text-gray-700" size={16} strokeWidth={1.5} />
                                )}
                                {item.icon === 'link' && (
                                  <Link2 className="text-gray-700" size={16} strokeWidth={1.5} />
                                )}
                                {item.icon === 'writing' && (
                                  <Pencil className="text-gray-700" size={16} strokeWidth={1.5} />
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
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded bg-blue-500">
                            <img src="https://dazzling-cat.netlify.app/wonderbadge.png" alt="Wonder" className="h-full w-full object-contain" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm text-neutral-500">I&apos;ve drafted this article!</div>
                          </div>
                          {published ? (
                            <span className="relative flex rounded-[10px] bg-[#3D870A]/20 p-0.5 text-green-950" aria-label="Published">
                              <span className="flex items-center gap-2 rounded-[8px] border border-gray-200/80 bg-[#8CC352] px-3 py-1.5 text-xs font-bold">
                                <Check size={16} strokeWidth={1.5} />
                                Published
                              </span>
                            </span>
                          ) : (
                            <motion.button
                              ref={publishButtonRef}
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
                          className="overflow-y-auto rounded-b-xl bg-white px-6 py-6 sm:px-8 sm:py-7"
                          style={{ height: '440px' }}
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
                            <motion.h2 variants={itemVariants} className="mb-3 text-xl font-semibold text-neutral-800 sm:text-2xl">
                              How to export your Wonder help articles
                            </motion.h2>
                            <motion.p variants={itemVariants} className="mb-3 text-sm leading-relaxed text-neutral-600">
                              Wonder lets you sync your help center from Notion. This guide walks you through
                              exporting article data, backing up your content, and using the API for custom
                              workflows.
                            </motion.p>
                            <motion.div variants={itemVariants} className="mb-3 flex gap-2.5 rounded-lg border border-sky-600/20 bg-sky-600/10 p-3">
                              <div className="mt-0.5 flex-none text-sky-700">
                                <Info size={18} strokeWidth={1.5} />
                              </div>
                              <div className="flex-grow text-sm">
                                <p className="text-sky-700">
                                  For advanced export options, see our{' '}
                                  <a className="font-medium underline" href="https://wonderdesk.ai/help">API docs</a>.
                                </p>
                              </div>
                            </motion.div>
                            <motion.h3 variants={itemVariants} className="mt-4 mb-2 text-lg font-semibold text-neutral-800">Getting started</motion.h3>
                            <motion.p variants={itemVariants} className="mb-3 text-sm leading-relaxed text-neutral-600">
                              Make sure your Notion workspace is connected to Wonder. Only workspace admins can
                              export data.
                            </motion.p>
                            <motion.h3 variants={itemVariants} className="mt-4 mb-2 text-lg font-semibold text-neutral-800">Export steps</motion.h3>
                            <motion.ol variants={itemVariants} className="mb-3 list-decimal space-y-1.5 pl-5 text-sm text-neutral-600">
                              <li>Open your Wonder dashboard and go to <span className="font-medium text-neutral-800">Settings</span></li>
                              <li>Select <span className="font-medium text-neutral-800">Export</span>, choose <span className="font-medium text-neutral-800">CSV</span> or <span className="font-medium text-neutral-800">JSON</span></li>
                              <li>Click <span className="font-medium text-neutral-800">Download</span> to get your file</li>
                            </motion.ol>
                            <motion.div variants={itemVariants} className="mb-3 flex gap-2.5 rounded-lg border border-amber-600/20 bg-amber-600/10 p-3">
                              <div className="mt-0.5 flex-none text-amber-700">
                                <AlertCircle size={18} strokeWidth={1.5} />
                              </div>
                              <div className="flex-grow text-sm">
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
    </>
  );
}