'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Header from '@/components/ui/header';
import SectionShell from '@/components/ui/SectionShell';
import SimplePricing from '@/components/SimplePricing';
import PricingCompareTable from '@/components/PricingCompareTable';
import FounderMessageSection from '@/components/FounderMessageSection';
import FAQ from '@/components/faq';

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-start bg-black bg-opacity-70 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative mx-auto max-w-lg rounded-xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-md bg-slate-200 transition-colors hover:bg-slate-300"
            >
              <X size={16} />
            </button>
            <span className="rounded-full bg-orange-600 p-2 px-4 text-lg font-bold text-white">Psst.</span>
            <h2 className="mb-3 mt-2 text-2xl font-bold text-slate-900 md:text-3xl">Before you go...</h2>
            <p className="mx-auto mb-6 max-w-md text-slate-600">
              Did we mention that the trial is free, you can signup in seconds, and no credit card is required? Give us a
              try, we&apos;d love to show you what Wonder can do!
            </p>
            <Link
              href="https://app.wonderdesk.ai"
              className="block w-fit rounded-lg bg-orange-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-colors hover:bg-orange-700"
              onClick={() => onClose()}
            >
              OK Lets get started
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Pricing: React.FC = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const exitIntentShown = useRef(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentShown.current) {
        setShowExitPopup(true);
        exitIntentShown.current = true;
      }
    };
    document.addEventListener('mouseout', handleMouseLeave);
    return () => document.removeEventListener('mouseout', handleMouseLeave);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ExitIntentPopup isOpen={showExitPopup} onClose={() => setShowExitPopup(false)} />
      <Header />

      <SectionShell eyebrow="PRICING" eyebrowNumber="01" bgClass="bg-white" clearSiteHeader>
        <SimplePricing />
      </SectionShell>

      <SectionShell eyebrow="COMPARE PLANS" eyebrowNumber="02" bgClass="bg-slate-50">
        <PricingCompareTable />
      </SectionShell>

      <SectionShell eyebrow="Message from the founder" eyebrowNumber="03" bgClass="bg-white">
        <FounderMessageSection />
      </SectionShell>

      <SectionShell eyebrow="Intel Brief" eyebrowNumber="04" bgClass="bg-canvas-warm">
        <FAQ />
      </SectionShell>
    </div>
  );
};

export default Pricing;
