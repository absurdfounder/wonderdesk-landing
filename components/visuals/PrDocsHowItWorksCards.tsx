'use client';

import type { ReactNode } from 'react';

const WONDER_AVATAR = 'https://dazzling-cat.netlify.app/wondercharacter.png';

export const PR_DOCS_HOW_IT_WORKS_W = 1096;
export const PR_DOCS_HOW_IT_WORKS_H = 468;

const CARD_W = 352;
const CARD_H = 468;
const VISUAL_H = 240;
const GAP = 20;

const DOT_GRID = {
  backgroundColor: '#F7F7F7',
  backgroundImage:
    'radial-gradient(circle, rgba(186, 183, 195, 0.45) 0.65px, transparent 0.65px)',
  backgroundSize: '10px 10px',
};

const INTEGRATION_PILLS = [
  { name: 'Fernand', logo: 'https://dazzling-cat.netlify.app/fernand.png', left: -14, top: 30 },
  { name: 'Zendesk', logo: 'https://dazzling-cat.netlify.app/zendesk.jpg', left: 128, top: 20 },
  { name: 'Help Scout', logo: 'https://dazzling-cat.netlify.app/helpscout.png', left: 18, top: 94 },
  { name: 'Intercom', logo: 'https://dazzling-cat.netlify.app/intercom.png', left: 104, top: 84 },
  { name: 'Crisp', logo: 'https://dazzling-cat.netlify.app/crisp.png', left: 214, top: 98 },
  { name: 'BoldDesk', logo: '', left: -10, top: 160, customIcon: true },
  { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot/FF7A59', left: 108, top: 170 },
  { name: 'Front', logo: 'https://cdn.simpleicons.org/frontapp/001B38', left: 246, top: 164 },
];

function IntegrationPill({
  name,
  logo,
  customIcon,
}: {
  name: string;
  logo: string;
  customIcon?: boolean;
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
      {customIcon ? (
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: 4,
            background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 9,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1,
          }}
        >
          B
        </div>
      ) : (
        <img
          src={logo}
          alt=""
          width={16}
          height={16}
          style={{ width: 16, height: 16, borderRadius: 3, objectFit: 'contain' }}
        />
      )}
      <span
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: '#374151',
          lineHeight: 1,
        }}
      >
        {name}
      </span>
    </div>
  );
}

function FeatureCardShell({
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
          ...DOT_GRID,
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

function SourcesVisual() {
  return (
    <>
      {INTEGRATION_PILLS.map((pill) => (
        <div
          key={pill.name}
          style={{
            position: 'absolute',
            left: pill.left,
            top: pill.top,
          }}
        >
          <IntegrationPill
            name={pill.name}
            logo={pill.logo}
            customIcon={pill.customIcon}
          />
        </div>
      ))}
    </>
  );
}

function DraftVisual() {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 268,
        background: '#ffffff',
        border: '1px solid #E5E7EB',
        borderRadius: 12,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
        padding: '14px 14px 12px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <img
          src={WONDER_AVATAR}
          alt=""
          width={24}
          height={24}
          style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover' }}
        />
        <span style={{ fontSize: 13, fontWeight: 500, color: '#111111' }}>
          Wonder updated this article
        </span>
      </div>
      <div style={{ borderRadius: 8, overflow: 'hidden', fontSize: 12, lineHeight: 1.45 }}>
        <div
          style={{
            padding: '7px 10px',
            background: '#FFF5F5',
            color: '#AA0000',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          }}
        >
          - Open your workspace settings
        </div>
        <div
          style={{
            padding: '7px 10px',
            background: '#F0FFF4',
            color: '#008800',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          }}
        >
          + Open your <strong style={{ fontWeight: 700 }}>project</strong> settings
        </div>
      </div>
    </div>
  );
}

function ApproveVisual() {
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 286,
        background: '#ffffff',
        border: '1px solid #E5E7EB',
        borderRadius: 12,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
        padding: '16px 16px 14px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <img
          src={WONDER_AVATAR}
          alt=""
          width={24}
          height={24}
          style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover' }}
        />
        <span style={{ fontSize: 13, fontWeight: 600, color: '#111111' }}>
          Draft ready for review
        </span>
      </div>
      <p
        style={{
          margin: '0 0 14px',
          fontSize: 12,
          fontWeight: 400,
          color: '#888888',
          lineHeight: 1.3,
        }}
      >
        &ldquo;Inviting your teammates&rdquo; · 1 edit
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button
          type="button"
          style={{
            padding: '9px 14px',
            background: '#000000',
            color: '#ffffff',
            border: 'none',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            lineHeight: 1,
            cursor: 'default',
            whiteSpace: 'nowrap',
          }}
        >
          Approve &amp; publish
        </button>
        <button
          type="button"
          style={{
            padding: '9px 14px',
            background: '#ffffff',
            color: '#374151',
            border: '1px solid #E5E7EB',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            lineHeight: 1,
            cursor: 'default',
            whiteSpace: 'nowrap',
          }}
        >
          Review
        </button>
      </div>
    </div>
  );
}

const CARDS = [
  {
    title: 'She reads your real sources',
    description:
      'Your codebase, pull requests, support tickets, changelogs and product videos. Everywhere your product knowledge already lives.',
    visual: <SourcesVisual />,
  },
  {
    title: 'She drafts every update',
    description:
      'When something ships, Wonder rewrites the stale article and recaptures the screenshots, the way a teammate would.',
    visual: <DraftVisual />,
  },
  {
    title: 'You approve in one click',
    description:
      'Every update lands as a draft. Publish it, edit it first, or dismiss it. Nothing goes live without you.',
    visual: <ApproveVisual />,
  },
];

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
      {CARDS.map((card) => (
        <FeatureCardShell
          key={card.title}
          title={card.title}
          description={card.description}
          visual={card.visual}
        />
      ))}
    </div>
  );
}
