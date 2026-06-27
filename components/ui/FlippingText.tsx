'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type FlippingTextProps = {
  words: string[];
  intervalMs?: number;
  className?: string;
};

export default function FlippingText({
  words,
  intervalMs = 2800,
  className = '',
}: FlippingTextProps) {
  const [index, setIndex] = useState(0);
  const longestWord = useMemo(
    () => words.reduce((a, b) => (a.length >= b.length ? a : b), words[0] ?? ''),
    [words],
  );

  useEffect(() => {
    if (words.length <= 1) return undefined;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [words.length, intervalMs]);

  if (words.length === 0) return null;

  return (
    <span className={`relative inline-grid align-bottom ${className}`}>
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap font-medium" aria-hidden>
        {longestWord}
      </span>
      <span className="relative col-start-1 row-start-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            className="block whitespace-nowrap font-medium text-wonder"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
