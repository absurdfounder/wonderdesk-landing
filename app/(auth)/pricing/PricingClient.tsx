'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Header from '@/components/ui/header';
import SectionShell from '@/components/ui/SectionShell';
import SimplePricing from '@/components/SimplePricing';
import PricingCompareTable from '@/components/PricingCompareTable';

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

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: Record<string, FAQItem[]> = {
  Pricing: [
    {
      question: 'How does the free 7-day trial work?',
      answer:
        'Wonder offers a 7-day free trial to help you explore everything we offer. There’s zero cost to get started, and during the trial you’ll have full access to all features. After the trial, you can choose a subscription plan to continue.',
    },
    {
      question: 'What are the pricing plans?',
      answer:
        'Wonder offers Personal and Business plans based on traffic and team needs. Personal includes one site and 10,000 users/month. Business includes ten sites, unlimited team members, and 100,000 users/month.',
    },
    {
      question: 'Are there any additional fees?',
      answer:
        'Pricing is exclusive of taxes. Some add-ons and advanced features may have additional costs, which are clearly outlined when applicable.',
    },
    {
      question: 'Do I need to enter my credit card to start the trial?',
      answer:
        'No. You can start your free trial without providing payment details. Payment is only required when you are ready to upgrade.',
    },
    {
      question: 'What happens after my free trial ends?',
      answer:
        'Once your trial ends, you’ll be asked to choose a subscription plan. If you do not upgrade, your site will be paused, but your content will remain saved.',
    },
    {
      question: 'Can I cancel or switch plans anytime?',
      answer:
        'Yes, you can upgrade, downgrade, or cancel your plan at any time from your dashboard. Changes will take effect in your next billing cycle.',
    },
    {
      question: 'Are there discounts for students, startups, or nonprofits?',
      answer: 'Yes! We offer special discounts. Please contact support@wonderdesk.ai with proof of eligibility to apply.',
    },
    {
      question: 'Do you offer custom pricing for agencies or enterprises?',
      answer:
        'Yes, we offer custom plans tailored for agencies and larger teams managing multiple websites. Contact us for details.',
    },
    {
      question: 'Can I switch from monthly to annual billing?',
      answer:
        'Absolutely. You can switch to annual billing anytime and enjoy a discounted rate compared to monthly payments.',
    },
    {
      question: 'Will my site go offline if my payment fails?',
      answer:
        'We’ll notify you if there’s an issue with your payment and provide a grace period to update your billing info. Your site will not be taken down immediately.',
    },
  ],
  Features: [
    {
      question: 'What is Wonder?',
      answer:
        'Wonder is an AI-powered platform for help centers, documentation, changelogs, and blogs that stay up to date automatically.',
    },
    {
      question: 'What types of sites can I build?',
      answer:
        'You can create help centers, knowledge bases, changelogs, blogs, and marketing pages — all kept current with AI.',
    },
    {
      question: 'Do I need to know how to code?',
      answer:
        'No. Wonder is built for product and support teams. AI handles drafting, screenshots, and publishing workflows.',
    },
    {
      question: 'Can I use my own custom domain?',
      answer: 'Yes, Wonder lets you connect your own custom domain with automatic SSL.',
    },
    {
      question: 'Does Wonder support SEO?',
      answer:
        'Yes. Wonder offers built-in SEO tools like meta tags, custom URLs, fast loading speeds, and mobile-friendly design.',
    },
    {
      question: 'Can I customize my site design?',
      answer: 'Yes. Choose themes, adjust layout settings, or add custom code to match your brand.',
    },
    {
      question: 'Is Wonder mobile-friendly?',
      answer: 'Yes. Every Wonder site is fully responsive across desktop, tablet, and mobile.',
    },
    {
      question: 'Can I track analytics?',
      answer:
        'Yes. Wonder includes built-in privacy-friendly analytics, and you can connect external tools like Google Analytics.',
    },
    {
      question: 'Is it secure?',
      answer: 'Wonder follows best practices in security including HTTPS and regular data protection protocols.',
    },
  ],
};

const FAQAccordion: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-slate-900">{question}</span>
        <span className="ml-2 flex-shrink-0 text-slate-500">{isOpen ? <X size={16} /> : <span className="text-lg">+</span>}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-5 pb-4 text-slate-600"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Pricing');

  return (
    <div className="max-w-7xl">
      <div className="mb-10 text-start">
        <h2 className="mb-3 font-display text-2xl font-bold text-slate-900 md:text-3xl">Frequently Asked Questions</h2>
        <p className="max-w-2xl text-slate-600">
          Have a different question? Reach out to our support team by
          <a href="mailto:vaibhav@wonderdesk.ai" className="px-2 text-wonder hover:text-wonder-700 hover:underline">
            sending us an email
          </a>
          and we&apos;ll get back to you as soon as we can.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="flex justify-center border-b border-slate-200 p-4">
          {Object.keys(faqs).map((tab) => (
            <button
              key={tab}
              className={[
                'mx-1 rounded-md px-4 py-2 text-sm font-medium transition-colors md:text-base',
                activeTab === tab ? 'bg-wonder-100 text-wonder-800' : 'text-slate-600 hover:bg-slate-100',
              ].join(' ')}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="divide-y divide-slate-200">
          {faqs[activeTab].map((faq, index) => (
            <FAQAccordion key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
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

      <SectionShell eyebrow="FAQ" eyebrowNumber="03" bgClass="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-2 sm:px-6 lg:px-8">
          <FAQSection />
        </div>
      </SectionShell>
    </div>
  );
};

export default Pricing;
