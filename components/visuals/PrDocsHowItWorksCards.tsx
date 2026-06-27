'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import { BarChart3 } from 'lucide-react';

const WONDER_AVATAR = 'https://dazzling-cat.netlify.app/wondercharacter.png';

/** Verified logo sources used across homepage + pr-to-docs visuals */
const MEET_WONDER_LOGOS = {
  fernand: 'https://dazzling-cat.netlify.app/fernand.png',
  zendesk: 'https://dazzling-cat.netlify.app/zendesk.jpg',
  crisp: 'https://dazzling-cat.netlify.app/crisp.png',
  hubspot: 'https://cdn.simpleicons.org/hubspot/FF7A59',
  featurebase: 'https://featurebase.app/favicon.ico',
  plain: 'https://www.google.com/s2/favicons?domain=plain.com&sz=64',
} as const;

export const PR_DOCS_HOW_IT_WORKS_W = 1096;
export const PR_DOCS_HOW_IT_WORKS_H = 468;

const CARD_W = 352;
const CARD_H = 468;
const VISUAL_H = 240;
const GAP = 20;

const DOT_GRID_STYLE_LIGHT = {
  backgroundColor: '#F7F7F7',
  backgroundImage: 'radial-gradient(circle, rgba(186, 183, 195, 0.45) 0.65px, transparent 0.65px)',
  backgroundSize: '10px 10px',
} as const;

const DOT_GRID_CLASS_LIGHT =
  'bg-[#F7F7F7] [background-image:radial-gradient(circle,rgba(186,183,195,0.45)_0.65px,transparent_0.65px)] [background-size:10px_10px]';

const DOT_GRID_CLASS_DARK =
  'bg-[#141414] [background-image:radial-gradient(circle,rgba(148,163,184,0.22)_0.65px,transparent_0.65px)] [background-size:10px_10px]';

const INTEGRATION_ROW_ONE = [
  { name: 'Dashboard', logo: '', dashboard: true },
  { name: 'Fernand', logo: MEET_WONDER_LOGOS.fernand },
  { name: 'Zendesk', logo: MEET_WONDER_LOGOS.zendesk },
] as const;

const INTEGRATION_ROW_TWO = [
  { name: 'Crisp', logo: MEET_WONDER_LOGOS.crisp },
  { name: 'HubSpot', logo: MEET_WONDER_LOGOS.hubspot },
  { name: 'Featurebase', logo: MEET_WONDER_LOGOS.featurebase },
  { name: 'Plain', logo: MEET_WONDER_LOGOS.plain },
] as const;

const INTEGRATION_PILLS = [
  { name: 'Dashboard', logo: '', left: 24, top: 36, dashboard: true },
  { name: 'Fernand', logo: MEET_WONDER_LOGOS.fernand, left: 128, top: 24 },
  { name: 'Zendesk', logo: MEET_WONDER_LOGOS.zendesk, left: 232, top: 36 },
  { name: 'Crisp', logo: MEET_WONDER_LOGOS.crisp, left: 8, top: 108 },
  { name: 'HubSpot', logo: MEET_WONDER_LOGOS.hubspot, left: 108, top: 100 },
  { name: 'Featurebase', logo: MEET_WONDER_LOGOS.featurebase, left: 214, top: 108 },
  { name: 'Plain', logo: MEET_WONDER_LOGOS.plain, left: 118, top: 168 },
];

const CARDS = [
  {
    title: 'She reads your real sources',
    description:
      'Your codebase, pull requests, support tickets, changelogs and product videos. Everywhere your product knowledge already lives.',
  },
  {
    title: 'She drafts every update',
    description:
      'When something ships, Wonder rewrites the stale article and recaptures the screenshots, the way a teammate would.',
  },
  {
    title: 'You approve in one click',
    description:
      'Every update lands as a draft. Publish it, edit it first, or dismiss it. Nothing goes live without you.',
  },
] as const;

function IntegrationLogo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);

  if (failed || !logo) {
    return (
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-slate-100 text-[9px] font-bold uppercase text-slate-600">
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt=""
      width={16}
      height={16}
      loading="lazy"
      decoding="async"
      className="h-4 w-4 shrink-0 rounded-sm object-contain"
      onError={() => setFailed(true)}
    />
  );
}

function IntegrationPill({
  name,
  logo,
  dashboard,
  dark = false,
}: {
  name: string;
  logo: string;
  dashboard?: boolean;
  dark?: boolean;
}) {
  return (
    <div
      className={
        dark
          ? 'inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-700 bg-slate-900 px-3.5 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.35)]'
          : 'inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.05)]'
      }
    >
      {dashboard ? (
        <span
          className={
            dark
              ? 'flex h-4 w-4 items-center justify-center rounded bg-slate-800 text-slate-300'
              : 'flex h-4 w-4 items-center justify-center rounded bg-slate-100 text-slate-600'
          }
        >
          <BarChart3 className="h-2.5 w-2.5" strokeWidth={2.25} />
        </span>
      ) : (
        <IntegrationLogo name={name} logo={logo} />
      )}
      <span className={`text-[13px] font-medium leading-none ${dark ? 'text-slate-200' : 'text-[#374151]'}`}>
        {name}
      </span>
    </div>
  );
}

function IntegrationPillFixed({
  name,
  logo,
  dashboard,
}: {
  name: string;
  logo: string;
  dashboard?: boolean;
}) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 14px',
        background: '#ffffff',
        border: '1px solid #E5E7EB',
        borderRadius: 999,
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)',
        whiteSpace: 'nowrap',
      }}
    >
      {dashboard ? (
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: 4,
            background: '#F3F4F6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#4B5563',
          }}
        >
          <BarChart3 style={{ width: 10, height: 10 }} strokeWidth={2.25} />
        </div>
      ) : (
        <IntegrationLogo name={name} logo={logo} />
      )}
      <span style={{ fontSize: 13, fontWeight: 500, color: '#374151', lineHeight: 1 }}>{name}</span>
    </div>
  );
}

function SourcesVisualResponsive({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 px-4 py-6">
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {INTEGRATION_ROW_ONE.map((pill) => (
          <IntegrationPill key={pill.name} {...pill} dark={dark} />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {INTEGRATION_ROW_TWO.map((pill) => (
          <IntegrationPill key={pill.name} {...pill} dark={dark} />
        ))}
      </div>
    </div>
  );
}

function SourcesVisualFixed() {
  return (
    <>
      {INTEGRATION_PILLS.map((pill) => (
        <div key={pill.name} style={{ position: 'absolute', left: pill.left, top: pill.top }}>
          <IntegrationPillFixed name={pill.name} logo={pill.logo} dashboard={pill.dashboard} />
        </div>
      ))}
    </>
  );
}

function DraftVisual() {
  return (
    <div className="absolute left-1/2 top-1/2 w-[min(268px,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[#E5E7EB] bg-white p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:p-4">
      <div className="mb-3 flex items-center gap-2">
        <img src={WONDER_AVATAR} alt="" width={24} height={24} className="h-6 w-6 rounded-full object-cover" />
        <span className="text-[13px] font-medium text-[#111111]">Wonder updated this article</span>
      </div>
      <div className="overflow-hidden rounded-lg font-mono text-xs leading-snug">
        <div className="bg-[#FFF5F5] px-2.5 py-1.5 text-[#AA0000]">- Open your workspace settings</div>
        <div className="bg-[#F0FFF4] px-2.5 py-1.5 text-[#008800]">
          + Open your <strong className="font-bold">project</strong> settings
        </div>
      </div>
    </div>
  );
}

function ApproveVisual() {
  return (
    <div className="absolute left-1/2 top-1/2 w-[min(286px,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
      <div className="mb-1.5 flex items-center gap-2">
        <img src={WONDER_AVATAR} alt="" width={24} height={24} className="h-6 w-6 rounded-full object-cover" />
        <span className="text-[13px] font-semibold text-[#111111]">Draft ready for review</span>
      </div>
      <p className="mb-3.5 text-xs leading-snug text-[#888888]">&ldquo;Inviting your teammates&rdquo; · 1 edit</p>
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex rounded-lg bg-black px-3.5 py-2 text-[13px] font-semibold leading-none text-white">
          Approve &amp; publish
        </span>
        <span className="inline-flex rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-2 text-[13px] font-medium leading-none text-[#374151]">
          Review
        </span>
      </div>
    </div>
  );
}

const RESPONSIVE_VISUALS_LIGHT = [
  <SourcesVisualResponsive key="sources" />,
  <DraftVisual key="draft" />,
  <ApproveVisual key="approve" />,
];

const RESPONSIVE_VISUALS_DARK = [
  <SourcesVisualResponsive dark key="sources" />,
  <DraftVisual key="draft" />,
  <ApproveVisual key="approve" />,
];

const FIXED_VISUALS = [<SourcesVisualFixed key="sources" />, <DraftVisual key="draft" />, <ApproveVisual key="approve" />];

function FeatureCardShellResponsive({
  visual,
  title,
  description,
  dark = false,
}: {
  visual: ReactNode;
  title: string;
  description: string;
  dark?: boolean;
}) {
  const dotGridClass = dark ? DOT_GRID_CLASS_DARK : DOT_GRID_CLASS_LIGHT;

  return (
    <article
      className={
        dark
          ? 'flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#0f0f0f]'
          : 'flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]'
      }
    >
      <div className={`relative h-[240px] shrink-0 overflow-hidden ${dotGridClass}`}>{visual}</div>
      <div
        className={
          dark
            ? 'flex flex-1 flex-col justify-center bg-[#0f0f0f] px-6 py-8 text-center sm:px-7 sm:py-9'
            : 'flex flex-1 flex-col justify-center px-6 py-8 text-center sm:px-8 sm:py-10'
        }
      >
        <h3
          className={
            dark
              ? 'font-sans text-[17px] font-semibold leading-snug tracking-[-0.01em] text-white'
              : 'font-sans text-[17px] font-semibold leading-snug tracking-[-0.02em] text-slate-900 sm:text-lg'
          }
        >
          {title}
        </h3>
        <p
          className={
            dark
              ? 'mx-auto mt-2.5 max-w-[30ch] text-sm font-normal leading-[1.55] text-slate-400'
              : 'mx-auto mt-3 max-w-[32ch] text-sm font-normal leading-[1.6] text-slate-600'
          }
        >
          {description}
        </p>
      </div>
    </article>
  );
}

function FeatureCardShellFixed({
  visual,
  title,
  description,
}: {
  visual: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        width: CARD_W,
        height: CARD_H,
        border: '1px solid #E8E8E8',
        borderRadius: 16,
        overflow: 'hidden',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          ...DOT_GRID_STYLE_LIGHT,
          height: VISUAL_H,
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {visual}
      </div>
      <div
        style={{
          flex: 1,
          background: '#ffffff',
          padding: '32px 28px 36px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 17,
            fontWeight: 600,
            color: '#111111',
            letterSpacing: '-0.01em',
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            margin: '10px 0 0',
            fontSize: 14,
            fontWeight: 400,
            color: '#666666',
            lineHeight: 1.55,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function MeetWonderFeatureCards({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const dark = variant === 'dark';
  const visuals = dark ? RESPONSIVE_VISUALS_DARK : RESPONSIVE_VISUALS_LIGHT;

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-5 lg:gap-6">
      {CARDS.map((card, index) => (
        <FeatureCardShellResponsive
          key={card.title}
          title={card.title}
          description={card.description}
          visual={visuals[index]}
          dark={dark}
        />
      ))}
    </div>
  );
}

export default function PrDocsHowItWorksCards() {
  return (
    <div
      style={{
        width: PR_DOCS_HOW_IT_WORKS_W,
        height: PR_DOCS_HOW_IT_WORKS_H,
        display: 'flex',
        gap: GAP,
        fontFamily: 'var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif',
      }}
    >
      {CARDS.map((card, index) => (
        <FeatureCardShellFixed
          key={card.title}
          title={card.title}
          description={card.description}
          visual={FIXED_VISUALS[index]}
        />
      ))}
    </div>
  );
}
