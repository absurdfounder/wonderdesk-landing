'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { formatUsd, PRICING_USD } from '@/lib/pricing';

interface FAQ {
  question: string;
  answer: string;
}

type FAQCategories = {
  [key: string]: FAQ[];
};

const faqs: FAQCategories = {
  General: [
    {
      question: 'What is Wonder?',
      answer:
        'Wonder is an AI-powered platform for help centers, documentation, changelogs, and blogs that stay up to date automatically. Product and support teams use it to publish accurate docs without manual rewrites.',
    },
    {
      question: 'How is Wonder different from a static CMS?',
      answer:
        'Traditional CMS tools need someone to write and refresh every article. Wonder uses AI to draft, update, and publish help content, screenshots, and changelogs as your product changes — so your site stays current with less effort.',
    },
    {
      question: 'What types of sites can I build?',
      answer:
        'You can create help centers, knowledge bases, changelogs, blogs, and marketing pages — all kept current with AI-assisted publishing workflows.',
    },
    {
      question: 'Do I need to know how to code?',
      answer:
        'No. Wonder is built for product, support, and marketing teams. AI handles drafting, screenshots, and publishing; you review and ship.',
    },
    {
      question: 'Can I use my own custom domain?',
      answer: 'Yes. Wonder supports custom domains with automatic SSL on every plan.',
    },
    {
      question: 'Does Wonder support SEO?',
      answer:
        'Yes. Wonder includes meta tags, custom URLs, fast loading, and mobile-friendly layouts so your help content ranks and reads well.',
    },
  ],
  'AI Features': [
    {
      question: 'What does Wonder AI do?',
      answer:
        'Wonder AI drafts and updates help articles, docs, and changelogs from your product context. It can refresh screenshots, suggest improvements, and keep content aligned with what you ship.',
    },
    {
      question: 'What are AI Teams?',
      answer:
        'AI Teams include specialized agents — like Designer and Developer — that collaborate on content structure, visuals, and technical accuracy before you publish.',
    },
    {
      question: 'Can Wonder automate screenshots?',
      answer:
        'Yes. Wonder can capture and refresh product screenshots in your docs so UI walkthroughs stay accurate as your app changes.',
    },
    {
      question: 'Does Wonder support multilingual help centers?',
      answer:
        'Yes, on Business and Enterprise plans. Wonder can help you publish and maintain translated help content across languages.',
    },
    {
      question: 'Can Wonder sync with my codebase?',
      answer:
        'Wonder supports code-to-docs workflows so product changes can flow into your help center and API documentation automatically.',
    },
    {
      question: 'Is there a self-service widget?',
      answer:
        'Yes. Embed Wonder-powered help in your product so users find answers without leaving your app.',
    },
  ],
  Pricing: [
    {
      question: 'How does the free 7-day trial work?',
      answer:
        'Start with full access to cloud features for seven days. No credit card required. After the trial, choose a plan or pause your site — your content stays saved.',
    },
    {
      question: 'What is the difference between Self Install, Personal, Business, and Enterprise?',
      answer: `Self Install is ${formatUsd(PRICING_USD.selfInstallLifetime)} one-time for a self-hosted lifetime license. Personal is ${formatUsd(PRICING_USD.personalMonthly)}/mo for one cloud-hosted site. Business is ${formatUsd(PRICING_USD.businessMonthly)}/mo for ten sites, unlimited team members, and 100,000 users/month. Enterprise is custom pricing with private deployment, SSO, and dedicated support.`,
    },
    {
      question: 'Can I self-host Wonder?',
      answer:
        'Yes. The Self Install plan runs on your infrastructure. Enterprise adds private VPC, on-prem options, and custom agreements.',
    },
    {
      question: 'Are there discounts for startups or nonprofits?',
      answer: 'Yes. Contact support@wonderdesk.ai with proof of eligibility for special pricing.',
    },
    {
      question: 'Can I switch from monthly to annual billing?',
      answer:
        'Yes. Switch to annual billing anytime on Personal or Business and pay less per month versus monthly billing.',
    },
    {
      question: 'Will my site go offline if my payment fails?',
      answer:
        'We notify you and provide a grace period to update billing before any interruption.',
    },
  ],
  Technical: [
    {
      question: 'Do I need to manage hosting?',
      answer:
        'No on cloud plans — Wonder hosts and manages your sites. Self Install and Enterprise can run on your own infrastructure.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes. Wonder uses HTTPS, isolated workspaces, and follows standard data protection practices. Enterprise adds SSO, private VPC, and custom security reviews.',
    },
    {
      question: 'Can I integrate third-party tools?',
      answer:
        'Yes. Wonder connects with analytics, chat, payment, and workflow tools. See the integrations page for the full list.',
    },
    {
      question: 'Does Wonder support membership or gated content?',
      answer: 'Yes, on Business and Enterprise plans you can publish membership sites and gated help content.',
    },
    {
      question: 'Can I export my content?',
      answer: 'Yes. Your articles and site data can be exported. Enterprise self-hosted deployments retain full data ownership.',
    },
    {
      question: 'Is Wonder mobile-friendly?',
      answer: 'Yes. Every Wonder site is fully responsive across desktop, tablet, and mobile.',
    },
  ],
};

interface FAQCellProps {
  question: string;
  answer: string;
  index: number;
  totalRows: number;
  totalCount: number;
}

const FAQCell: React.FC<FAQCellProps> = ({ question, answer, index, totalRows, totalCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isLeftCol = index % 2 === 0;
  const rowIndex = Math.floor(index / 2);
  const isLastRowDesktop = rowIndex === totalRows - 1;
  const isLastMobile = index === totalCount - 1;

  const borderClasses = [
    !isLastMobile ? 'border-b border-slate-100' : '',
    'md:border-b',
    isLastRowDesktop ? 'md:border-b-0' : '',
    isLeftCol ? 'md:border-r md:border-slate-100' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`group relative bg-white ${borderClasses}`}>
      <button
        className="flex w-full items-start gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-6"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="flex-1 text-[14px] font-semibold leading-snug text-slate-900 sm:text-base">{question}</span>
        <span className="mt-0.5 select-none font-mono text-base leading-none text-slate-400" aria-hidden="true">
          {isOpen ? '[−]' : '[+]'}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('General');
  const activeFaqs = faqs[activeTab];
  const totalRows = Math.ceil(activeFaqs.length / 2);

  return (
    <div className="mx-auto max-w-7xl px-0 pb-12 pt-4 sm:pb-20 sm:pt-6">
      <div className="max-w-2xl">
        <h2 className="font-funneldisplay text-[1.65rem] tracking-tight text-slate-900 sm:text-4xl">Intel brief.</h2>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          Missing intel? Transmit your question to{' '}
          <a
            href="mailto:vaibhav@wonderdesk.ai"
            className="text-wonder-700 hover:text-wonder hover:underline"
            target="_blank"
            rel="noopener"
          >
            vaibhav@wonderdesk.ai
          </a>
          .
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-b border-slate-100 sm:mt-8 sm:gap-x-6">
        {Object.keys(faqs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`-mb-px pb-2.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors sm:pb-3 sm:text-[12px] sm:tracking-[0.15em] ${
              activeTab === tab
                ? 'border-b-2 border-wonder text-slate-900'
                : 'border-b-2 border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 border border-slate-100 bg-white md:grid-cols-2">
        {activeFaqs.map((faq, index) => (
          <FAQCell
            key={`${activeTab}-${index}`}
            question={faq.question}
            answer={faq.answer}
            index={index}
            totalRows={totalRows}
            totalCount={activeFaqs.length}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
