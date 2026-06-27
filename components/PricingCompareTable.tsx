'use client';

import React from 'react';
import MarketingHeadline from '@/components/marketing/MarketingHeadline';
import WonderButton from '@/components/ui/WonderButton';
import { formatUsd, PRICING_USD } from '@/lib/pricing';
import { Check, Server, X } from 'lucide-react';

type ComparisonCell = boolean | { text: string; sub?: string };

type ComparisonRow = {
  feature: string;
  selfInstall: ComparisonCell;
  personal: ComparisonCell;
  business: ComparisonCell;
  enterprise: ComparisonCell;
};

type ComparisonCategory = {
  title: string;
  rows: ComparisonRow[];
};

const PLAN_COLUMNS = [
  { key: 'selfInstall' as const, label: 'Self Install' },
  { key: 'personal' as const, label: 'Personal' },
  { key: 'business' as const, label: 'Business', featured: true },
  { key: 'enterprise' as const, label: 'Enterprise' },
];

const comparisonCategories: ComparisonCategory[] = [
  {
    title: 'AI & Automation',
    rows: [
      { feature: 'Wonder AI', selfInstall: true, personal: true, business: true, enterprise: true },
      { feature: 'AI Teams (Designer & Developer)', selfInstall: true, personal: true, business: true, enterprise: true },
    ],
  },
  {
    title: 'Sites & Publishing',
    rows: [
      { feature: 'Websites', selfInstall: { text: '1' }, personal: { text: '1' }, business: { text: '10' }, enterprise: { text: '100+' } },
      { feature: 'Unlimited pages', selfInstall: true, personal: true, business: true, enterprise: true },
      { feature: 'Manual publishing', selfInstall: true, personal: true, business: true, enterprise: true },
      { feature: 'Auto publish every hour', selfInstall: false, personal: true, business: true, enterprise: true },
      { feature: 'Instant auto publish', selfInstall: false, personal: false, business: true, enterprise: true },
    ],
  },
  {
    title: 'Help Center & Docs',
    rows: [
      { feature: 'Public help center', selfInstall: true, personal: true, business: true, enterprise: true },
      { feature: 'Automatic SSL (HTTPS)', selfInstall: true, personal: true, business: true, enterprise: true },
      { feature: 'Custom domain', selfInstall: true, personal: true, business: true, enterprise: true },
      { feature: 'Sub-directory domain', selfInstall: false, personal: false, business: true, enterprise: true },
      { feature: 'Multi-lingual sites', selfInstall: false, personal: false, business: true, enterprise: true },
    ],
  },
  {
    title: 'Team & Collaboration',
    rows: [
      {
        feature: 'Team members',
        selfInstall: { text: '1' },
        personal: { text: '1' },
        business: { text: 'Unlimited' },
        enterprise: { text: '200+' },
      },
      { feature: 'Membership sites', selfInstall: false, personal: false, business: true, enterprise: true },
    ],
  },
  {
    title: 'Hosting & Limits',
    rows: [
      {
        feature: 'Traffic (users/month)',
        selfInstall: { text: '10,000' },
        personal: { text: '10,000' },
        business: { text: '100,000' },
        enterprise: { text: 'Custom' },
      },
      { feature: 'No watermark', selfInstall: true, personal: true, business: true, enterprise: true },
      { feature: 'Privacy-focused analytics', selfInstall: true, personal: true, business: true, enterprise: true },
    ],
  },
  {
    title: 'Deployment',
    rows: [
      { feature: 'Self-hosted install', selfInstall: true, personal: false, business: false, enterprise: true },
      { feature: 'Cloud hosted by Wonder', selfInstall: false, personal: true, business: true, enterprise: false },
      { feature: 'Private VPC / on-prem', selfInstall: false, personal: false, business: false, enterprise: true },
      { feature: 'SSO and custom agreements', selfInstall: false, personal: false, business: false, enterprise: true },
    ],
  },
  {
    title: 'Support',
    rows: [
      { feature: 'Email support', selfInstall: true, personal: true, business: true, enterprise: true },
      { feature: 'Priority support with SLA', selfInstall: false, personal: false, business: false, enterprise: true },
    ],
  },
];

const DESKTOP_GRID = 'grid grid-cols-[minmax(12rem,1.15fr)_repeat(4,minmax(0,1fr))] gap-px bg-slate-200';

function compareCellClass(featured = false) {
  return ['px-5 py-3 xl:px-6', featured ? 'bg-wonder-50/45' : 'bg-white'].join(' ');
}

function compareHeaderCellClass(featured = false) {
  return [
    'sticky top-16 z-10 px-5 py-4 xl:px-6',
    featured ? 'border-t-2 border-wonder bg-wonder-50/45' : 'bg-white',
  ].join(' ');
}

function CompareCell({ cell }: { cell: ComparisonCell }) {
  if (typeof cell === 'boolean') {
    return cell ? (
      <Check className="h-3.5 w-3.5 shrink-0 text-wonder" strokeWidth={2} aria-hidden />
    ) : (
      <X className="h-3.5 w-3.5 shrink-0 text-slate-300" strokeWidth={1.5} aria-hidden />
    );
  }
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-sm text-slate-700">{cell.text}</span>
      {cell.sub ? <span className="mt-0.5 text-[11px] leading-snug text-slate-500">{cell.sub}</span> : null}
    </div>
  );
}

function DesktopCompareTable() {
  return (
    <div className="hidden overflow-hidden border-b border-slate-200 lg:block">
      <div className={DESKTOP_GRID}>
        <div className={compareHeaderCellClass()}>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Features</span>
        </div>
        {PLAN_COLUMNS.map((plan) => (
          <div key={plan.key} className={`${compareHeaderCellClass(plan.featured)} text-center`}>
            <span
              className={[
                'font-mono text-[10px] font-bold uppercase tracking-[0.14em]',
                plan.featured ? 'text-slate-900' : 'text-slate-600',
              ].join(' ')}
            >
              {plan.label}
            </span>
          </div>
        ))}

        {comparisonCategories.map((category) => (
          <React.Fragment key={category.title}>
            <div className="col-span-5 bg-[#FAFAF8] px-5 py-2.5 xl:px-6">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-wonder-800">
                {category.title}
              </span>
            </div>
            {category.rows.map((row) => (
              <React.Fragment key={row.feature}>
                <div className={`${compareCellClass()} flex items-center`}>
                  <span className="text-sm leading-snug text-slate-700">{row.feature}</span>
                </div>
                {PLAN_COLUMNS.map((plan) => (
                  <div key={plan.key} className={`${compareCellClass(plan.featured)} flex items-center justify-center`}>
                    <CompareCell cell={row[plan.key]} />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}

        <div className={`${compareCellClass()} flex items-center py-4`}>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-900">Price</span>
        </div>
        <div className={`${compareCellClass()} flex items-center justify-center py-4 text-center`}>
          <span className="text-sm font-medium tabular-nums text-slate-900">
            {formatUsd(PRICING_USD.selfInstallLifetime)} one-time
          </span>
        </div>
        <div className={`${compareCellClass()} flex items-center justify-center py-4 text-center`}>
          <span className="text-sm font-medium tabular-nums text-slate-900">
            {formatUsd(PRICING_USD.personalMonthly)}/mo
          </span>
        </div>
        <div className={`${compareCellClass(true)} flex items-center justify-center py-4 text-center`}>
          <span className="text-sm font-medium tabular-nums text-slate-900">
            {formatUsd(PRICING_USD.businessMonthly)}/mo · {formatUsd(PRICING_USD.businessYearly / 12)}/mo annual
          </span>
        </div>
        <div className={`${compareCellClass()} flex items-center justify-center py-4 text-center`}>
          <span className="font-display text-lg font-medium text-slate-900">Custom</span>
        </div>

        <div className={`${compareCellClass()} py-5`} />
        <div className={`${compareCellClass()} flex items-center justify-center px-3 py-5`}>
          <WonderButton href="https://app.wonderdesk.ai" external size="md" className="w-full">
            Install locally
          </WonderButton>
        </div>
        <div className={`${compareCellClass()} flex items-center justify-center px-3 py-5`}>
          <WonderButton href="https://app.wonderdesk.ai" external size="md" className="w-full">
            Get started free
          </WonderButton>
        </div>
        <div className={`${compareCellClass(true)} flex items-center justify-center px-3 py-5`}>
          <WonderButton href="https://app.wonderdesk.ai" external size="md" className="w-full">
            Start with business
          </WonderButton>
        </div>
        <div className={`${compareCellClass()} flex items-center justify-center px-3 py-5`}>
          <WonderButton
            href="/contact-us"
            size="md"
            variant="secondary"
            className="w-full"
            icon={<Server className="h-4 w-4" aria-hidden />}
          >
            Talk to sales
          </WonderButton>
        </div>
      </div>
    </div>
  );
}

function MobileCompareTable() {
  return (
    <div className="border-b border-slate-200 bg-white lg:hidden">
      {comparisonCategories.map((category) => (
        <div key={category.title} className="border-b border-slate-200">
          <div className="border-b border-slate-200 bg-[#FAFAF8] px-5 py-2.5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-wonder-800">
              {category.title}
            </span>
          </div>
          {category.rows.map((row) => (
            <div key={row.feature} className="border-b border-slate-200 px-5 py-4 last:border-b-0">
              <div className="text-sm font-medium leading-snug text-slate-800">{row.feature}</div>
              <div className="mt-3 grid grid-cols-2 gap-px border border-slate-200 bg-slate-200 sm:grid-cols-4">
                {PLAN_COLUMNS.map((plan) => (
                  <div
                    key={plan.key}
                    className={[
                      'flex flex-col items-center gap-1.5 px-2 py-3',
                      plan.featured ? 'bg-wonder-50/45' : 'bg-white',
                    ].join(' ')}
                  >
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-slate-400">{plan.label}</span>
                    <CompareCell cell={row[plan.key]} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function PricingCompareTable() {
  return (
    <div className="w-full pb-8 md:pb-10">
      <div className="flex flex-col gap-6 pb-8 pt-2 max-md:gap-5 max-md:pb-6 md:pt-4">
        <MarketingHeadline
          as="h2"
          size="section"
          lines={[
            { parts: [{ text: 'Compare plans', tone: 'default' }] },
            { parts: [{ text: 'feature by feature.', tone: 'brand' }] },
          ]}
          subline="Same grid rhythm as the cards above — every row aligned across Self Install, Personal, Business, and Enterprise."
        />
      </div>

      <div className="-mx-3 border-t border-slate-200 sm:-mx-4 md:-mx-6">
        <DesktopCompareTable />
        <MobileCompareTable />
      </div>
    </div>
  );
}
