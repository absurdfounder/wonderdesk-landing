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

/** Matches Trooper onboarding landing pricing row template. */
const PRICING_GRID_TEMPLATE_ROWS =
  'auto minmax(4.5rem,auto) minmax(2.75rem,auto) minmax(2.5rem,auto) minmax(2.75rem,auto) minmax(11.5rem,auto) auto minmax(0px,1fr)';

const TIER_RAIL_MIN_H = 'min-h-[4.5rem]';
const PRICE_ROW_MIN_H = 'min-h-[2.75rem]';
const SUBLINE_ROW_MIN_H = 'min-h-[2.5rem]';
const NOTE_ROW_MIN_H = 'min-h-[2.75rem]';
const ALLOWANCE_ROW_MIN_H = 'min-h-[11.5rem]';

function planCellClass() {
  return 'bg-white px-5 xl:px-6';
}

function PlanBadge({ children, featured = false }: { children: ReactNode; featured?: boolean }) {
  return (
    <span
      className={
        featured
          ? 'border border-[rgba(0,159,188,0.25)] bg-[#e6f7fb] px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#006b80]'
          : 'border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600'
      }
    >
      {children}
    </span>
  );
}

function PlanHeader({
  eyebrow,
  badge,
  title,
  icon: Icon,
  featured = false,
}: {
  eyebrow: string;
  badge: string;
  title: string;
  icon: typeof Sparkles;
  featured?: boolean;
}) {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          {eyebrow}
        </span>
        <PlanBadge featured={featured}>{badge}</PlanBadge>
      </div>
      <div className="mt-4 flex items-center gap-2.5">
        <Icon className="h-5 w-5 shrink-0 text-[#009fbc]" aria-hidden />
        <h3 className="font-display text-xl font-medium tracking-tight text-slate-900">{title}</h3>
      </div>
    </>
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

function TierRail({ children }: { children: ReactNode }) {
  return (
    <div className={`flex w-full items-center ${TIER_RAIL_MIN_H}`}>
      <div className="flex items-center py-2">{children}</div>
    </div>
  );
}

function BillingModePill({ label }: { label: string }) {
  return (
    <TierRail>
      <div
        className="grid w-fit gap-1 rounded-sm border border-slate-200/90 bg-slate-50/60 p-1"
        role="group"
        aria-label="Billing mode"
      >
        <span className="block h-8 rounded-sm bg-white px-3 py-2 text-center text-[10px] font-medium text-slate-600 ring-1 ring-slate-200/80 xl:text-[11px]">
          {label}
        </span>
      </div>
    </TierRail>
  );
}

function BillingCycleTabs({
  value,
  onChange,
}: {
  value: 'Monthly' | 'Yearly';
  onChange: (cycle: 'Monthly' | 'Yearly') => void;
}) {
  const options = [
    { id: 'Monthly' as const, label: 'Monthly' },
    { id: 'Yearly' as const, label: 'Yearly' },
  ];

  return (
    <TierRail>
      <div
        className="grid w-full grid-cols-2 gap-1 rounded-sm border border-slate-300 bg-slate-100 p-1 shadow-sm"
        role="radiogroup"
        aria-label="Billing cycle"
      >
        {options.map((option) => {
          const selected = value === option.id;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(option.id)}
              className={
                selected
                  ? 'flex h-8 items-center justify-center rounded-sm bg-[#009fbc] px-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-white shadow-sm ring-1 ring-[#009fbc]/40 xl:text-[11px]'
                  : 'flex h-8 items-center justify-center rounded-sm px-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-600 transition hover:bg-white hover:text-slate-900 xl:text-[11px]'
              }
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </TierRail>
  );
}

function PricingAmount({ price, cadence }: { price: string; cadence?: string }) {
  return (
    <div className={`flex items-end gap-1.5 ${PRICE_ROW_MIN_H}`}>
      <span className="font-display text-4xl font-medium tabular-nums tracking-tight text-slate-900">
        {price}
      </span>
      {cadence ? <span className="pb-1 text-sm text-slate-500">{cadence}</span> : null}
    </div>
  );
}

function PricingSubline({ children }: { children: ReactNode }) {
  return (
    <p className={`text-sm font-medium leading-snug text-[#007a94] ${SUBLINE_ROW_MIN_H}`}>{children}</p>
  );
}

function PricingNote({ children }: { children: ReactNode }) {
  return <p className={`text-xs leading-5 text-slate-500 ${NOTE_ROW_MIN_H}`}>{children || '\u00a0'}</p>;
}

function TrafficAllowance({ trafficLimit }: { trafficLimit: string }) {
  return (
    <div className={`space-y-2 ${ALLOWANCE_ROW_MIN_H}`}>
      <div className="flex items-center justify-between gap-2 border border-slate-200 bg-white px-3 py-2.5">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-900">Monthly traffic</p>
          <p className="mt-0.5 text-[11px] leading-snug text-slate-500">Unique visitors included</p>
        </div>
        <span className="shrink-0 text-sm font-medium tabular-nums text-slate-900">{trafficLimit}</span>
      </div>
      <div className="flex items-center justify-between gap-2 border border-slate-200 bg-white px-3 py-2.5">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-900">Free trial</p>
          <p className="mt-0.5 text-[11px] leading-snug text-slate-500">No credit card required</p>
        </div>
        <span className="shrink-0 text-sm font-medium text-slate-900">7 days</span>
      </div>
    </div>
  );
}

function PlanCta({ featured = false, children }: { featured?: boolean; children: ReactNode }) {
  return (
    <Link
      href="https://app.wonderdesk.ai"
      className={featured ? 'wonder-plan-cta' : 'wonder-plan-cta wonder-plan-cta-neutral'}
    >
      {children}
    </Link>
  );
}

function DesktopPlanColumn({
  tier,
  billingCycle,
  isLast,
  showBillingToggle = false,
  onBillingCycleChange,
}: {
  tier: PricingTier;
  billingCycle: 'Monthly' | 'Yearly';
  isLast: boolean;
  showBillingToggle?: boolean;
  onBillingCycleChange: (cycle: 'Monthly' | 'Yearly') => void;
}) {
  const monthlyDisplay =
    billingCycle === 'Yearly' ? (tier.yearlyPrice / 12).toFixed(0) : String(tier.monthlyPrice);
  const Icon = tier.highlight ? Building2 : Sparkles;

  return (
    <article
      className={`relative grid grid-rows-subgrid bg-white [grid-row:1/-1] ${
        !isLast ? 'border-r border-slate-200' : ''
      } ${tier.highlight ? 'z-[1] shadow-[0_8px_28px_rgba(15,23,42,0.08)] ring-1 ring-[#009fbc]/25' : ''}`}
    >
      {tier.highlight ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-[#009fbc]" aria-hidden />
      ) : null}

      <div className={`${planCellClass()} border-b border-slate-200 py-5`}>
        <PlanHeader
          eyebrow={tier.highlight ? 'For teams' : 'For individuals'}
          badge={tier.highlight ? 'Most popular' : 'Starter'}
          title={tier.name}
          icon={Icon}
          featured={tier.highlight}
        />
      </div>

      <div className={`${planCellClass()} flex items-center py-2`}>
        {showBillingToggle ? (
          <BillingCycleTabs value={billingCycle} onChange={onBillingCycleChange} />
        ) : (
          <BillingModePill label={billingCycle === 'Yearly' ? 'Annual billing' : 'Monthly billing'} />
        )}
      </div>

      <div className={`${planCellClass()} py-1`}>
        <PricingAmount price={`$${monthlyDisplay}`} cadence="/ month" />
      </div>

      <div className={`${planCellClass()} flex items-start py-1`}>
        <PricingSubline>{tier.trafficLimit} users / month included</PricingSubline>
      </div>

      <div className={`${planCellClass()} flex items-start py-1`}>
        <PricingNote>
          {billingCycle === 'Yearly'
            ? `Billed annually at $${tier.yearlyPrice}.`
            : 'Billed monthly. Cancel anytime.'}
        </PricingNote>
      </div>

      <div className={`${planCellClass()} py-1`}>
        <TrafficAllowance trafficLimit={tier.trafficLimit} />
      </div>

      <div className={`${planCellClass()} flex items-center border-y border-slate-200 py-4`}>
        <PlanCta featured={tier.highlight}>Get started free</PlanCta>
      </div>

      <div className={`${planCellClass()} py-4`}>
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
  onBillingCycleChange,
  isLast,
}: {
  tier: PricingTier;
  billingCycle: 'Monthly' | 'Yearly';
  onBillingCycleChange: (cycle: 'Monthly' | 'Yearly') => void;
  isLast: boolean;
}) {
  const monthlyDisplay =
    billingCycle === 'Yearly' ? (tier.yearlyPrice / 12).toFixed(0) : String(tier.monthlyPrice);
  const Icon = tier.highlight ? Building2 : Sparkles;

  return (
    <section
      className={`relative flex min-w-0 flex-col bg-white ${
        !isLast ? 'border-b border-slate-200' : ''
      } ${tier.highlight ? 'shadow-[0_8px_28px_rgba(15,23,42,0.08)] ring-1 ring-[#009fbc]/25' : ''}`}
    >
      {tier.highlight ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-[#009fbc]" aria-hidden />
      ) : null}

      <div className="border-b border-slate-200 px-5 py-5">
        <PlanHeader
          eyebrow={tier.highlight ? 'For teams' : 'For individuals'}
          badge={tier.highlight ? 'Most popular' : 'Starter'}
          title={tier.name}
          icon={Icon}
          featured={tier.highlight}
        />
      </div>

      <div className="flex flex-1 flex-col px-5 py-6 xl:px-6">
        <BillingCycleTabs value={billingCycle} onChange={onBillingCycleChange} />
        <div className="mt-4">
          <PricingAmount price={`$${monthlyDisplay}`} cadence="/ month" />
        </div>
        <div className="mt-2">
          <PricingSubline>{tier.trafficLimit} users / month included</PricingSubline>
        </div>
        <div className="mt-1">
          <PricingNote>
            {billingCycle === 'Yearly'
              ? `Billed annually at $${tier.yearlyPrice}.`
              : 'Billed monthly. Cancel anytime.'}
          </PricingNote>
        </div>
        <div className="mt-4">
          <TrafficAllowance trafficLimit={tier.trafficLimit} />
        </div>
        <div className="mt-5 border-y border-slate-200 py-4">
          <PlanCta featured={tier.highlight}>Get started free</PlanCta>
        </div>
        <ul className="mt-5 space-y-2.5">
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
    <div className="wonder-landing-pricing w-full">
      <div className="overflow-hidden border border-slate-200 bg-slate-200">
        <div
          className="hidden overflow-hidden bg-slate-200 lg:grid lg:grid-cols-2"
          style={{ gridTemplateRows: PRICING_GRID_TEMPLATE_ROWS }}
        >
          {tiers.map((tier, idx) => (
            <DesktopPlanColumn
              key={tier.name}
              tier={tier}
              billingCycle={billingCycle}
              onBillingCycleChange={onBillingCycleChange}
              showBillingToggle={idx === 0}
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
              onBillingCycleChange={onBillingCycleChange}
              isLast={idx === tiers.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
