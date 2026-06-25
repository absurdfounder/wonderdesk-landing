'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Check, Sparkles, type LucideIcon } from 'lucide-react';
import PixelButton from '@/components/ui/PixelButton';
import { formatUsd, PRICING_USD } from '@/lib/pricing';

const PRICING_GRID_TEMPLATE_ROWS =
  'auto minmax(4.5rem,auto) minmax(2.75rem,auto) minmax(2.5rem,auto) minmax(2.75rem,auto) minmax(11.5rem,auto) minmax(0px,1fr) auto';

function planCellClass() {
  return 'bg-white px-5 xl:px-6';
}

function PlanBadge({ children, featured = false }: { children: React.ReactNode; featured?: boolean }) {
  return (
    <span
      className={[
        'border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em]',
        featured ? 'border-wonder-200 bg-wonder-50 text-wonder-800' : 'border-slate-100 bg-slate-100 text-slate-600',
      ].join(' ')}
    >
      {children}
    </span>
  );
}

function PlanHeader({
  index,
  eyebrow,
  badge,
  title,
  icon: Icon,
  featured = false,
}: {
  index: string;
  eyebrow: string;
  badge: string;
  title: string;
  icon: LucideIcon;
  featured?: boolean;
}) {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
          <span className="text-slate-400">[{index}]</span> {eyebrow}
        </span>
        <PlanBadge featured={featured}>{badge}</PlanBadge>
      </div>
      <div className="mt-4 flex items-center gap-2.5">
        <Icon className="h-5 w-5 shrink-0 text-wonder" aria-hidden />
        <h3 className="font-funneldisplay text-xl font-medium tracking-tight text-slate-900">{title}</h3>
      </div>
    </>
  );
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm leading-5 text-slate-700/90">
      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-wonder" strokeWidth={2.5} aria-hidden />
      <span>{children}</span>
    </li>
  );
}

function BillingTabs({ value, onChange }: { value: 'Monthly' | 'Yearly'; onChange: (v: 'Monthly' | 'Yearly') => void }) {
  return (
    <div className="flex w-full items-center lg:min-h-[4.5rem]">
      <div className="grid w-full grid-cols-2 gap-1 rounded-sm border border-slate-300 bg-slate-100 p-1 shadow-sm" role="radiogroup" aria-label="Billing cycle">
        {(['Monthly', 'Yearly'] as const).map((cycle) => {
          const selected = value === cycle;
          return (
            <button
              key={cycle}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(cycle)}
              className={[
                'flex h-8 items-center justify-center rounded-sm px-2 text-[10px] font-semibold uppercase tracking-[0.08em] xl:text-[11px]',
                selected ? 'bg-wonder text-white shadow-sm ring-1 ring-wonder/40' : 'text-slate-600 hover:bg-white hover:text-slate-900',
              ].join(' ')}
            >
              {cycle}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function BillingPill({ label }: { label: string }) {
  return (
    <div className="flex w-full items-center lg:min-h-[4.5rem]">
      <div className="grid w-fit gap-1 rounded-sm border border-slate-100/90 bg-slate-50/60 p-1">
        <span className="block h-8 rounded-sm bg-white px-3 py-2 text-center text-[10px] font-medium text-slate-600 ring-1 ring-slate-200/80 xl:text-[11px]">
          {label}
        </span>
      </div>
    </div>
  );
}

function AllowanceBlock({ trafficLimit }: { trafficLimit: string }) {
  return (
    <div className="space-y-2 lg:min-h-[11.5rem]">
      <div className="flex items-center justify-between gap-2 border border-slate-100 bg-white px-3 py-2.5">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-900">Monthly traffic</p>
          <p className="mt-0.5 text-[11px] leading-snug text-slate-500">Unique visitors included</p>
        </div>
        <span className="shrink-0 text-sm font-medium tabular-nums text-slate-900">{trafficLimit}</span>
      </div>
      <div className="flex items-center justify-between gap-2 border border-slate-100 bg-white px-3 py-2.5">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-900">Free trial</p>
          <p className="mt-0.5 text-[11px] leading-snug text-slate-500">No credit card required</p>
        </div>
        <span className="shrink-0 text-sm font-medium text-slate-900">7 days</span>
      </div>
    </div>
  );
}

const personalFeatures = [
  '1 Website',
  'Unlimited Pages',
  'Wonder AI',
  'AI Teams (Designer & Developer)',
  'Privacy focused analytics',
  'No Watermark',
  'Manual Publishing',
  'Auto publish every hour',
];

const businessFeatures = [
  '10 Websites',
  'Everything in Personal, Plus',
  'Sub-directory Domain',
  'Multi-lingual sites',
  'Unlimited team members',
  'Membership sites',
  'Instant Auto Publish',
];

export default function SimplePricing() {
  const [billingCycle, setBillingCycle] = useState<'Monthly' | 'Yearly'>('Monthly');

  const personalMonthly =
    billingCycle === 'Yearly'
      ? (PRICING_USD.personalYearly / 12).toFixed(0)
      : String(PRICING_USD.personalMonthly);
  const businessMonthly =
    billingCycle === 'Yearly'
      ? (PRICING_USD.businessYearly / 12).toFixed(0)
      : String(PRICING_USD.businessMonthly);

  const plans = [
    {
      index: '01',
      eyebrow: 'For individuals',
      badge: 'Starter',
      title: 'Personal',
      icon: Sparkles,
      featured: false,
      price: formatUsd(Number(personalMonthly)),
      cadence: '/ month',
      subline: '10,000 users / month included',
      note:
        billingCycle === 'Yearly'
          ? `Billed annually at ${formatUsd(PRICING_USD.personalYearly)}.`
          : 'Billed monthly. Cancel anytime.',
      tierRail: <BillingTabs value={billingCycle} onChange={setBillingCycle} />,
      allowance: <AllowanceBlock trafficLimit="10,000" />,
      features: personalFeatures.map((f) => <FeatureItem key={f}>{f}</FeatureItem>),
      cta: (
        <PixelButton href="https://app.wonderdesk.ai" external size="md" tone="dark" className="w-full">
          Get started free
        </PixelButton>
      ),
    },
    {
      index: '02',
      eyebrow: 'For teams',
      badge: 'Most popular',
      title: 'Business',
      icon: Building2,
      featured: true,
      price: formatUsd(Number(businessMonthly)),
      cadence: '/ month',
      subline: '100,000 users / month included',
      note:
        billingCycle === 'Yearly'
          ? `Billed annually at ${formatUsd(PRICING_USD.businessYearly)}.`
          : 'Billed monthly. Cancel anytime.',
      tierRail: <BillingPill label={billingCycle === 'Yearly' ? 'Annual billing' : 'Monthly billing'} />,
      allowance: <AllowanceBlock trafficLimit="100,000" />,
      features: businessFeatures.map((f) => <FeatureItem key={f}>{f}</FeatureItem>),
      cta: (
        <PixelButton href="https://app.wonderdesk.ai" external size="md" tone="brand" className="w-full">
          Get started free
        </PixelButton>
      ),
    },
  ];

  return (
    <div className="w-full pb-8 md:pb-10">
      <div className="flex flex-col gap-6 pb-8 pt-2 max-md:gap-5 max-md:pb-6 md:pt-4">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Simple pricing,
            <span className="block text-wonder">built for growing teams.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Start free with a 7-day trial. Keep your help center, blog, changelog, and docs up to date automatically.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-100 sm:-mx-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="hidden overflow-hidden border-b border-slate-100 bg-slate-200 lg:grid lg:grid-cols-2"
          style={{ gridTemplateRows: PRICING_GRID_TEMPLATE_ROWS }}
        >
          {plans.map((plan, idx) => (
            <article
              key={plan.title}
              className={[
                'relative grid grid-rows-subgrid bg-white [grid-row:1/-1]',
                idx === 0 ? 'border-r border-slate-100' : '',
                plan.featured ? 'z-[1] shadow-[0_8px_28px_rgba(15,23,42,0.08)] ring-1 ring-wonder/25' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {plan.featured ? (
                <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-wonder" aria-hidden />
              ) : null}
              <div className={`${planCellClass()} border-b border-slate-100 py-5`}>
                <PlanHeader {...plan} icon={plan.icon} />
              </div>
              <div className={`${planCellClass()} flex items-center py-2`}>{plan.tierRail}</div>
              <div className={`${planCellClass()} py-1`}>
                <div className="flex items-end gap-1.5 lg:min-h-[2.75rem]">
                  <span className="font-funneldisplay text-3xl font-medium tabular-nums tracking-tight text-slate-900 sm:text-4xl">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-sm text-slate-500">{plan.cadence}</span>
                </div>
              </div>
              <div className={`${planCellClass()} flex items-start py-1`}>
                <p className="text-sm font-medium leading-snug text-wonder-700 lg:min-h-[2.5rem]">{plan.subline}</p>
              </div>
              <div className={`${planCellClass()} flex items-start py-1`}>
                <p className="text-xs leading-5 text-slate-500 lg:min-h-[2.75rem]">{plan.note}</p>
              </div>
              <div className={`${planCellClass()} py-1`}>{plan.allowance}</div>
              <div className={`${planCellClass()} py-4`}>
                <ul className="space-y-2.5">{plan.features}</ul>
              </div>
              <div className={`${planCellClass()} flex items-center border-t border-slate-100 py-5`}>{plan.cta}</div>
            </article>
          ))}
        </motion.div>

        <div className="border-b border-slate-100 bg-white lg:hidden">
          {plans.map((plan, idx) => (
            <section
              key={plan.title}
              className={[
                'relative flex min-w-0 flex-col bg-white px-5 py-6',
                idx === 0 ? 'border-b border-slate-100' : '',
                plan.featured ? 'shadow-[0_8px_28px_rgba(15,23,42,0.08)] ring-1 ring-wonder/25' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {plan.featured ? (
                <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-wonder" aria-hidden />
              ) : null}
              <PlanHeader {...plan} icon={plan.icon} />
              <div className="mt-4">{plan.tierRail}</div>
              <div className="mt-4 flex items-end gap-1.5">
                <span className="font-funneldisplay text-3xl font-medium tabular-nums text-slate-900">{plan.price}</span>
                <span className="pb-1 text-sm text-slate-500">{plan.cadence}</span>
              </div>
              <p className="mt-2 text-sm font-medium text-wonder-700">{plan.subline}</p>
              <p className="mt-1 text-xs text-slate-500">{plan.note}</p>
              <div className="mt-4">{plan.allowance}</div>
              <ul className="mt-5 space-y-2.5">{plan.features}</ul>
              <div className="mt-5 border-t border-slate-100 py-5">{plan.cta}</div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
