'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MarketingHeadline from '@/components/marketing/MarketingHeadline';
import PixelButton from '@/components/ui/PixelButton';
import { formatUsd, getPlanMonthlyPrice, PRICING_USD } from '@/lib/pricing';
import { Building2, Check, Minus, Plus, Sparkles, type LucideIcon } from 'lucide-react';

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

function AllowanceStepper({
  label,
  value,
  min,
  max = 150,
  onChange,
  helper,
  disableIncrease = false,
}: {
  label: string;
  value: number;
  min: number;
  max?: number;
  onChange: (value: number) => void;
  helper: string;
  disableIncrease?: boolean;
}) {
  const atMax = disableIncrease || value >= max;
  return (
    <div className="flex items-center justify-between gap-2 border border-slate-100 bg-white px-3 py-2.5">
      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-900">{label}</p>
        <p className="mt-0.5 text-[11px] leading-snug text-slate-500">{helper}</p>
      </div>
      <div className="flex shrink-0 items-center gap-1" role="group" aria-label={`${label} quantity`}>
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-slate-100 bg-white text-slate-700 transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-40"
          disabled={value <= min}
          onClick={() => onChange(Math.max(min, value - 1))}
          aria-label={`Decrease ${label.toLowerCase()}`}
        >
          <Minus className="h-3.5 w-3.5" aria-hidden />
        </button>
        <span className="w-8 text-center text-sm font-medium tabular-nums text-slate-900">{value}</span>
        <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-slate-100 bg-white text-slate-700 transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-40"
          disabled={atMax}
          onClick={() => onChange(Math.min(max, value + 1))}
          aria-label={`Increase ${label.toLowerCase()}`}
        >
          <Plus className="h-3.5 w-3.5" aria-hidden />
        </button>
      </div>
    </div>
  );
}

function TierRail({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full items-center lg:min-h-[4.5rem]">
      <div className="flex w-full items-center lg:py-2">{children}</div>
    </div>
  );
}

function BillingModePill({ label, selected = true }: { label: string; selected?: boolean }) {
  return (
    <TierRail>
      <div className="grid w-fit gap-1 rounded-sm border border-slate-100/90 bg-slate-50/60 p-1" role="radiogroup" aria-label="Billing mode">
        <button
          type="button"
          role="radio"
          aria-checked={selected}
          tabIndex={-1}
          className={[
            'h-8 cursor-default rounded-sm px-3 py-2 xl:px-3',
            selected ? 'bg-white text-slate-600 ring-1 ring-slate-200/80' : 'text-slate-400',
          ].join(' ')}
        >
          <span className="block text-center text-[10px] font-medium xl:text-[11px]">{label}</span>
        </button>
      </div>
    </TierRail>
  );
}

function BillingTabs({ value, onChange }: { value: 'Monthly' | 'Yearly'; onChange: (v: 'Monthly' | 'Yearly') => void }) {
  return (
    <TierRail>
      <div
        className="grid w-full grid-cols-2 gap-1 rounded-sm border border-slate-300 bg-slate-100 p-1 shadow-sm"
        role="radiogroup"
        aria-label="Billing cycle"
      >
        {(['Monthly', 'Yearly'] as const).map((cycle) => {
          const selected = value === cycle;
          const price =
            cycle === 'Monthly' ? formatUsd(PRICING_USD.personalMonthly) : formatUsd(PRICING_USD.personalYearly / 12);
          return (
            <button
              key={cycle}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-label={`${cycle} ${price} per month`}
              onClick={() => onChange(cycle)}
              className={[
                'flex h-8 items-center justify-center gap-1 rounded-sm px-2 transition-all duration-150 xl:gap-1.5 xl:px-2.5',
                selected
                  ? 'bg-wonder text-white shadow-sm ring-1 ring-wonder/40'
                  : 'text-slate-600 hover:bg-white hover:text-slate-900',
              ].join(' ')}
            >
              <span className="text-[10px] font-semibold leading-none xl:text-[11px]">{cycle}</span>
              <span
                className={[
                  'text-[10px] font-medium tabular-nums leading-none xl:text-[11px]',
                  selected ? 'text-white/90' : 'text-slate-500',
                ].join(' ')}
              >
                {price}/mo
              </span>
            </button>
          );
        })}
      </div>
    </TierRail>
  );
}

function AllowanceBlock({
  websiteCount,
  memberCount,
  onWebsiteChange,
  onMemberChange,
  minWebsites,
  minMembers,
  maxWebsites,
  maxMembers,
  websiteHelper,
  memberHelper,
  disableWebsiteIncrease = false,
  disableMemberIncrease = false,
}: {
  websiteCount: number;
  memberCount: number;
  onWebsiteChange: (value: number) => void;
  onMemberChange: (value: number) => void;
  minWebsites: number;
  minMembers: number;
  maxWebsites: number;
  maxMembers: number;
  websiteHelper: string;
  memberHelper: string;
  disableWebsiteIncrease?: boolean;
  disableMemberIncrease?: boolean;
}) {
  return (
    <div className="space-y-2 lg:min-h-[11.5rem]">
      <AllowanceStepper
        label="Websites"
        value={websiteCount}
        min={minWebsites}
        max={maxWebsites}
        onChange={onWebsiteChange}
        helper={websiteHelper}
        disableIncrease={disableWebsiteIncrease}
      />
      <AllowanceStepper
        label="Team members"
        value={memberCount}
        min={minMembers}
        max={maxMembers}
        onChange={onMemberChange}
        helper={memberHelper}
        disableIncrease={disableMemberIncrease}
      />
    </div>
  );
}

function PricingAmount({ price, cadence }: { price: string; cadence?: string }) {
  return (
    <div className="flex items-end gap-1.5 lg:min-h-[2.75rem]">
      <span className="font-funneldisplay text-3xl font-medium tabular-nums tracking-tight text-slate-900 sm:text-4xl">
        {price}
      </span>
      {cadence ? <span className="pb-1 text-sm text-slate-500">{cadence}</span> : null}
    </div>
  );
}

function PricingSubline({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-medium leading-snug text-wonder-700 lg:min-h-[2.5rem]">{children}</p>;
}

function PricingNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs leading-5 text-slate-500 lg:min-h-[2.75rem]">
      {children ?? <span className="hidden lg:inline">&nbsp;</span>}
    </p>
  );
}

type DesktopPlanColumnProps = {
  index: string;
  eyebrow: string;
  badge: string;
  title: string;
  icon: LucideIcon;
  featured?: boolean;
  price: string;
  cadence?: string;
  subline: React.ReactNode;
  note: React.ReactNode;
  tierRail: React.ReactNode;
  allowance: React.ReactNode;
  features: React.ReactNode;
  cta: React.ReactNode;
  isLast?: boolean;
};

function DesktopPlanColumn({
  index,
  eyebrow,
  badge,
  title,
  icon,
  featured = false,
  price,
  cadence,
  subline,
  note,
  tierRail,
  allowance,
  features,
  cta,
  isLast = false,
}: DesktopPlanColumnProps) {
  return (
    <article
      className={[
        'relative grid grid-rows-subgrid bg-white [grid-row:1/-1]',
        !isLast ? 'border-r border-slate-100' : '',
        featured ? 'z-[1] shadow-[0_8px_28px_rgba(15,23,42,0.08)] ring-1 ring-wonder/25' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {featured ? <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-wonder" aria-hidden /> : null}

      <div className={`${planCellClass()} border-b border-slate-100 py-5`}>
        <PlanHeader index={index} eyebrow={eyebrow} badge={badge} title={title} icon={icon} featured={featured} />
      </div>
      <div className={`${planCellClass()} flex items-center py-2`}>{tierRail}</div>
      <div className={`${planCellClass()} py-1`}>
        <PricingAmount price={price} cadence={cadence} />
      </div>
      <div className={`${planCellClass()} flex items-start py-1`}>{subline}</div>
      <div className={`${planCellClass()} flex items-start py-1`}>{note}</div>
      <div className={`${planCellClass()} py-1`}>{allowance}</div>
      <div className={`${planCellClass()} py-4`}>
        <ul className="space-y-2.5">{features}</ul>
      </div>
      <div className={`${planCellClass()} flex items-center border-t border-slate-100 py-5`}>{cta}</div>
    </article>
  );
}

function MobilePlanCard(props: DesktopPlanColumnProps) {
  const { featured = false, isLast = false, tierRail, price, cadence, subline, note, allowance, features, cta, ...headerProps } =
    props;

  return (
    <section
      className={[
        'relative flex min-w-0 flex-col bg-white',
        !isLast ? 'border-b border-slate-100' : '',
        featured ? 'shadow-[0_8px_28px_rgba(15,23,42,0.08)] ring-1 ring-wonder/25' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {featured ? <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-wonder" aria-hidden /> : null}

      <div className="border-b border-slate-100 px-4 py-4 sm:px-5 sm:py-5">
        <PlanHeader {...headerProps} featured={featured} />
      </div>

      <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-6 xl:px-6">
        {tierRail}
        <div className="mt-2 sm:mt-4">
          <PricingAmount price={price} cadence={cadence} />
        </div>
        <div className="mt-1.5 sm:mt-2">{subline}</div>
        <div className="mt-1">{note}</div>
        <div className="mt-2.5 sm:mt-4">{allowance}</div>
        <div className="mt-5 border-y border-slate-100 py-4 sm:mt-6">{cta}</div>
        <ul className="mt-4 space-y-2.5 sm:mt-5">{features}</ul>
      </div>
    </section>
  );
}

const personalFeatures = [
  'Wonder AI',
  'AI Teams (Designer & Developer)',
  'Unlimited pages',
  'Privacy focused analytics',
  'No watermark',
  'Manual publishing',
  'Auto publish every hour',
];

const businessFeatures = [
  'Everything in Personal, plus',
  'Sub-directory domain',
  'Multi-lingual sites',
  'Unlimited team members',
  'Membership sites',
  'Instant auto publish',
];

export default function SimplePricing() {
  const [billingCycle, setBillingCycle] = useState<'Monthly' | 'Yearly'>('Monthly');
  const [personalWebsites, setPersonalWebsites] = useState<number>(PRICING_USD.personalIncludedWebsites);
  const [personalMembers, setPersonalMembers] = useState<number>(PRICING_USD.personalIncludedMembers);
  const [businessWebsites, setBusinessWebsites] = useState<number>(PRICING_USD.businessIncludedWebsites);
  const [businessMembers, setBusinessMembers] = useState<number>(PRICING_USD.businessIncludedMembers);

  const personalPrice = formatUsd(getPlanMonthlyPrice('personal', billingCycle));
  const businessPrice = formatUsd(getPlanMonthlyPrice('business', billingCycle));

  const plans = [
    {
      index: '01',
      eyebrow: 'For individuals',
      badge: 'Starter',
      title: 'Personal',
      icon: Sparkles,
      price: personalPrice,
      cadence: '/ month',
      subline: (
        <PricingSubline>
          {PRICING_USD.personalIncludedWebsites} website · 10,000 users / month included
        </PricingSubline>
      ),
      note: (
        <PricingNote>
          {billingCycle === 'Yearly'
            ? `Billed annually at ${formatUsd(PRICING_USD.personalYearly)}. Cancel anytime.`
            : '7-day free trial. No credit card required.'}
        </PricingNote>
      ),
      tierRail: <BillingTabs value={billingCycle} onChange={setBillingCycle} />,
      allowance: (
        <AllowanceBlock
          websiteCount={personalWebsites}
          memberCount={personalMembers}
          onWebsiteChange={setPersonalWebsites}
          onMemberChange={setPersonalMembers}
          minWebsites={PRICING_USD.personalIncludedWebsites}
          maxWebsites={PRICING_USD.personalIncludedWebsites}
          minMembers={PRICING_USD.personalIncludedMembers}
          maxMembers={PRICING_USD.personalIncludedMembers}
          websiteHelper={`${PRICING_USD.personalIncludedWebsites} included`}
          memberHelper={`${PRICING_USD.personalIncludedMembers} included`}
          disableWebsiteIncrease
          disableMemberIncrease
        />
      ),
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
      price: businessPrice,
      cadence: '/ month',
      subline: <PricingSubline>100,000 users / month included</PricingSubline>,
      note: (
        <PricingNote>
          {billingCycle === 'Yearly'
            ? `Billed annually at ${formatUsd(PRICING_USD.businessYearly)}. Additional sites available on request.`
            : 'Additional team members and sites available on request.'}
        </PricingNote>
      ),
      tierRail: <BillingModePill label={billingCycle === 'Yearly' ? 'Annual billing' : 'Monthly billing'} />,
      allowance: (
        <AllowanceBlock
          websiteCount={businessWebsites}
          memberCount={businessMembers}
          onWebsiteChange={setBusinessWebsites}
          onMemberChange={setBusinessMembers}
          minWebsites={PRICING_USD.businessIncludedWebsites}
          maxWebsites={PRICING_USD.businessIncludedWebsites}
          minMembers={PRICING_USD.businessIncludedMembers}
          maxMembers={PRICING_USD.businessIncludedMembers}
          websiteHelper={`${PRICING_USD.businessIncludedWebsites} included`}
          memberHelper="Unlimited on plan"
          disableWebsiteIncrease
          disableMemberIncrease
        />
      ),
      features: businessFeatures.map((f) => <FeatureItem key={f}>{f}</FeatureItem>),
      cta: (
        <PixelButton href="https://app.wonderdesk.ai" external size="md" tone="brand" className="w-full">
          Choose · {businessPrice}/month
        </PixelButton>
      ),
    },
  ] as const;

  return (
    <div className="w-full pb-8 md:pb-10">
      <div className="flex flex-col gap-6 pb-8 pt-2 max-md:gap-5 max-md:pb-6 md:pt-4">
        <MarketingHeadline
          as="h2"
          size="section"
          lines={[
            {
              parts: [
                { text: 'Simple pricing,', tone: 'default' },
                { text: 'built for growing teams.', tone: 'default' },
              ],
            },
            {
              parts: [{ text: 'Pay for the plan you need.', tone: 'brand' }],
            },
          ]}
          subline="Start free with a 7-day trial. Keep your help center, blog, changelog, and docs up to date automatically."
        />
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
            <DesktopPlanColumn key={plan.title} {...plan} isLast={idx === plans.length - 1} />
          ))}
        </motion.div>

        <div className="border-b border-slate-100 bg-white lg:hidden">
          {plans.map((plan, idx) => (
            <MobilePlanCard key={plan.title} {...plan} isLast={idx === plans.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
