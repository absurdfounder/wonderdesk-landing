'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { Check, Sparkles, Building2 } from 'lucide-react';

export type PricingTier = {
  name: string;
  highlight: boolean;
  monthlyPrice: number;
  yearlyPrice: number;
  trafficLimit: string;
  features: string[];
};

type WonderPricingGridProps = {
  tiers: PricingTier[];
  billingCycle: 'Monthly' | 'Yearly';
  onBillingCycleChange: (cycle: 'Monthly' | 'Yearly') => void;
};

const GRID_ROWS =
  'auto minmax(2.75rem,auto) minmax(2.5rem,auto) minmax(2.75rem,auto) auto minmax(0px,1fr)';

function PlanBadge({ children, featured = false }: { children: ReactNode; featured?: boolean }) {
  return (
    <span
      className={
        featured
          ? 'border border-sky-200 bg-sky-50 px-2 py-0.5 font-roboto-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-sky-800'
          : 'border border-slate-200 bg-slate-100 px-2 py-0.5 font-roboto-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600'
      }
    >
      {children}
    </span>
  );
}

function FeatureItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm leading-5 text-slate-700/90">
      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#009fbc]" strokeWidth={2.5} aria-hidden />
      <span>{children}</span>
    </li>
  );
}

function BillingToggle({
  value,
  onChange,
}: {
  value: 'Monthly' | 'Yearly';
  onChange: (cycle: 'Monthly' | 'Yearly') => void;
}) {
  return (
    <div
      className="mb-6 grid max-w-xs grid-cols-2 gap-1 rounded-sm border border-slate-200 bg-slate-50 p-1"
      role="tablist"
      aria-label="Billing cycle"
    >
      {(['Monthly', 'Yearly'] as const).map((cycle) => {
        const selected = value === cycle;
        return (
          <button
            key={cycle}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(cycle)}
            className={
              selected
                ? 'rounded-sm bg-[#009fbc] px-3 py-2 font-roboto-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm'
                : 'rounded-sm px-3 py-2 font-roboto-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600 transition hover:bg-white hover:text-slate-900'
            }
          >
            {cycle}
          </button>
        );
      })}
    </div>
  );
}

function PlanColumn({
  tier,
  billingCycle,
  isLast,
}: {
  tier: PricingTier;
  billingCycle: 'Monthly' | 'Yearly';
  isLast: boolean;
}) {
  const monthlyDisplay =
    billingCycle === 'Yearly' ? (tier.yearlyPrice / 12).toFixed(0) : tier.monthlyPrice;
  const Icon = tier.highlight ? Building2 : Sparkles;

  return (
    <article
      className={`relative grid grid-rows-subgrid bg-white [grid-row:1/-1] ${
        !isLast ? 'border-r border-slate-200' : ''
      } ${tier.highlight ? 'z-[1] shadow-[0_8px_28px_rgba(15,23,42,0.08)] ring-1 ring-sky-500/25' : ''}`}
    >
      {tier.highlight ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-[#009fbc]" aria-hidden />
      ) : null}

      <div className="border-b border-slate-200 px-5 py-5 xl:px-6">
        <div className="flex items-start justify-between gap-3">
          <span className="font-roboto-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            {tier.highlight ? 'For teams' : 'For individuals'}
          </span>
          <PlanBadge featured={tier.highlight}>
            {tier.highlight ? 'Most popular' : 'Starter'}
          </PlanBadge>
        </div>
        <div className="mt-4 flex items-center gap-2.5">
          <Icon className="h-5 w-5 shrink-0 text-[#009fbc]" aria-hidden />
          <h3 className="font-funneldisplay text-xl font-semibold tracking-tight text-slate-900">
            {tier.name}
          </h3>
        </div>
      </div>

      <div className="flex min-h-[2.75rem] items-end gap-1.5 px-5 py-2 xl:px-6">
        <span className="font-funneldisplay text-4xl font-semibold tabular-nums tracking-tight text-slate-900">
          ${monthlyDisplay}
        </span>
        <span className="pb-1 text-sm text-slate-500">/ month</span>
      </div>

      <div className="flex min-h-[2.5rem] items-start px-5 py-1 xl:px-6">
        <p className="text-sm font-medium leading-snug text-[#009fbc]">
          {tier.trafficLimit} users / month
        </p>
      </div>

      <div className="flex min-h-[2.75rem] items-start px-5 py-1 xl:px-6">
        <p className="text-xs leading-5 text-slate-500">
          {billingCycle === 'Yearly'
            ? `Billed annually at $${tier.yearlyPrice}`
            : 'Billed monthly · 7-day free trial'}
        </p>
      </div>

      <div className="flex items-center border-y border-slate-200 px-5 py-4 xl:px-6">
        <Link
          href="https://app.wonderdesk.ai"
          className={
            tier.highlight
              ? 'wonder-btn-primary w-full'
              : 'wonder-btn-secondary w-full'
          }
        >
          Get started free
        </Link>
      </div>

      <div className="px-5 py-4 xl:px-6">
        <p className="mb-3 font-roboto-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          What&apos;s included
        </p>
        <ul className="space-y-2.5">
          {tier.features.map((feature) => (
            <FeatureItem key={feature}>{feature}</FeatureItem>
          ))}
        </ul>
      </div>
    </article>
  );
}

function MobilePlanCard({
  tier,
  billingCycle,
  isLast,
}: {
  tier: PricingTier;
  billingCycle: 'Monthly' | 'Yearly';
  isLast: boolean;
}) {
  const monthlyDisplay =
    billingCycle === 'Yearly' ? (tier.yearlyPrice / 12).toFixed(0) : tier.monthlyPrice;
  const Icon = tier.highlight ? Building2 : Sparkles;

  return (
    <section
      className={`relative flex min-w-0 flex-col bg-white ${
        !isLast ? 'border-b border-slate-200' : ''
      } ${tier.highlight ? 'shadow-[0_8px_28px_rgba(15,23,42,0.08)] ring-1 ring-sky-500/25' : ''}`}
    >
      {tier.highlight ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-[#009fbc]" aria-hidden />
      ) : null}

      <div className="border-b border-slate-200 px-5 py-5">
        <div className="flex items-start justify-between gap-3">
          <span className="font-roboto-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
            {tier.highlight ? 'For teams' : 'For individuals'}
          </span>
          <PlanBadge featured={tier.highlight}>
            {tier.highlight ? 'Most popular' : 'Starter'}
          </PlanBadge>
        </div>
        <div className="mt-4 flex items-center gap-2.5">
          <Icon className="h-5 w-5 shrink-0 text-[#009fbc]" aria-hidden />
          <h3 className="font-funneldisplay text-xl font-semibold tracking-tight text-slate-900">
            {tier.name}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 py-6">
        <div className="flex items-end gap-1.5">
          <span className="font-funneldisplay text-4xl font-semibold tabular-nums tracking-tight text-slate-900">
            ${monthlyDisplay}
          </span>
          <span className="pb-1 text-sm text-slate-500">/ month</span>
        </div>
        <p className="mt-2 text-sm font-medium text-[#009fbc]">{tier.trafficLimit} users / month</p>
        <p className="mt-1 text-xs text-slate-500">
          {billingCycle === 'Yearly'
            ? `Billed annually at $${tier.yearlyPrice}`
            : 'Billed monthly · 7-day free trial'}
        </p>
        <div className="mt-5 border-y border-slate-200 py-4">
          <Link
            href="https://app.wonderdesk.ai"
            className={tier.highlight ? 'wonder-btn-primary w-full' : 'wonder-btn-secondary w-full'}
          >
            Get started free
          </Link>
        </div>
        <p className="mt-5 mb-3 font-roboto-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          What&apos;s included
        </p>
        <ul className="space-y-2.5">
          {tier.features.map((feature) => (
            <FeatureItem key={feature}>{feature}</FeatureItem>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function WonderPricingGrid({
  tiers,
  billingCycle,
  onBillingCycleChange,
}: WonderPricingGridProps) {
  return (
    <div className="w-full">
      <BillingToggle value={billingCycle} onChange={onBillingCycleChange} />

      <div className="overflow-hidden border border-slate-200 bg-slate-200">
        <div
          className="hidden overflow-hidden bg-slate-200 lg:grid lg:grid-cols-2"
          style={{ gridTemplateRows: GRID_ROWS }}
        >
          {tiers.map((tier, idx) => (
            <PlanColumn
              key={tier.name}
              tier={tier}
              billingCycle={billingCycle}
              isLast={idx === tiers.length - 1}
            />
          ))}
        </div>

        <div className="bg-white lg:hidden">
          {tiers.map((tier, idx) => (
            <MobilePlanCard
              key={tier.name}
              tier={tier}
              billingCycle={billingCycle}
              isLast={idx === tiers.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
