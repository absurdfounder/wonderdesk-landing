'use client';

import {
  Folder,
  Globe,
  Image as ImageIcon,
  Map,
  Search,
  ShoppingBag,
  Video,
  X,
} from 'lucide-react';
import PixelLandscapeWide from './shared/PixelLandscapeWide';
import FeatureSkyBackground from './shared/FeatureSkyBackground';

export const PLATFORM_COL_W = 373;
export const PLATFORM_VISUAL_H = 352;
export const PLATFORM_ROW_W = PLATFORM_COL_W * 3;
/** Plain light blue for homepage feature columns — no landscape illustration. */
export const HOME_FEATURE_PLAIN_BG = '#D4E8FF';

const FONT = 'var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif';

export type PlatformCardId = 'domain' | 'seo' | 'performance';

export function DomainLiveCard() {
  return (
    <div
      style={{
        width: 302,
        background: '#ffffff',
        borderRadius: 12,
        border: '1px solid #E5E7EB',
        boxShadow: '0 10px 28px rgba(15, 23, 42, 0.08)',
        padding: '16px 16px 14px',
        fontFamily: FONT,
      }}
    >
      <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#111111' }}>
        How do you want to go live?
      </p>
      <p style={{ margin: '4px 0 14px', fontSize: 12, color: '#9CA3AF', lineHeight: 1.35 }}>
        Select how you want to publish your help center.
      </p>

      <div
        style={{
          border: '1px solid #E5E7EB',
          borderRadius: 10,
          padding: '11px 12px',
          marginBottom: 8,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 10,
        }}
      >
        <Globe size={16} strokeWidth={2} color="#3B82F6" style={{ marginTop: 1, flexShrink: 0 }} />
        <div>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#111111' }}>Custom domain</p>
          <p style={{ margin: '2px 0 0', fontSize: 12, color: '#9CA3AF' }}>help.yourcompany.com</p>
        </div>
      </div>

      <div
        style={{
          border: '2px solid #009fbc',
          borderRadius: 10,
          padding: '11px 12px',
          marginBottom: 8,
          display: 'flex',
          alignItems: 'flex-start',
          gap: 10,
          background: '#ffffff',
        }}
      >
        <Folder size={16} strokeWidth={2} color="#B45309" style={{ marginTop: 1, flexShrink: 0 }} />
        <div style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#111111' }}>Custom sub-folder</p>
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#166534',
                background: '#DCFCE7',
                borderRadius: 4,
                padding: '2px 6px',
                lineHeight: 1.2,
              }}
            >
              RECOMMENDED
            </span>
          </div>
          <p style={{ margin: '2px 0 0', fontSize: 12, color: '#9CA3AF' }}>yourcompany.com/help</p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2px 2px 0' }}>
        <span style={{ fontSize: 12, color: '#6B7280' }}>wonderdesk.ai/help</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#9CA3AF' }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#FACC15',
              display: 'inline-block',
            }}
          />
          Needs Setup
        </span>
      </div>
    </div>
  );
}

export function GoogleSerpCard() {
  const tabs = [
    { label: 'All', active: true, icon: null },
    { label: 'Images', active: false, icon: ImageIcon },
    { label: 'Video', active: false, icon: Video },
    { label: 'Shopping', active: false, icon: ShoppingBag },
    { label: 'Maps', active: false, icon: Map },
  ];

  return (
    <div
      style={{
        width: 314,
        background: '#ffffff',
        borderRadius: 12,
        border: '1px solid #E5E7EB',
        boxShadow: '0 10px 28px rgba(15, 23, 42, 0.08)',
        padding: '14px 14px 12px',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          border: '1px solid #DFE1E5',
          borderRadius: 999,
          padding: '7px 12px',
          marginBottom: 10,
          boxShadow: '0 1px 6px rgba(32, 33, 36, 0.08)',
        }}
      >
        <span
          style={{
            flex: 1,
            fontSize: 12,
            color: '#202124',
            lineHeight: 1.3,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          how do I delete my Acme account?
        </span>
        <X size={14} strokeWidth={2} color="#70757A" />
        <Search size={15} strokeWidth={2.25} color="#4285F4" />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          borderBottom: '1px solid #EBEBEB',
          paddingBottom: 0,
          marginBottom: 10,
        }}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <div
              key={tab.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontSize: 11,
                fontWeight: tab.active ? 500 : 400,
                color: tab.active ? '#1A73E8' : '#5F6368',
                borderBottom: tab.active ? '3px solid #1A73E8' : '3px solid transparent',
                padding: '0 2px 8px',
                whiteSpace: 'nowrap',
              }}
            >
              {Icon ? <Icon size={12} strokeWidth={2} color={tab.active ? '#1A73E8' : '#5F6368'} /> : null}
              {tab.label}
            </div>
          );
        })}
      </div>

      <p style={{ margin: '0 0 12px', fontSize: 11, color: '#70757A', lineHeight: 1.3 }}>
        Found 105,000,000 results (0.43 seconds)
      </p>

      <div style={{ marginBottom: 12 }}>
        <p style={{ margin: 0, fontSize: 10, color: '#188038', lineHeight: 1.35 }}>
          help.acme.com <span style={{ color: '#5F6368' }}>› articles › delete-account</span>
        </p>
        <p
          style={{
            margin: '2px 0 0',
            fontSize: 15,
            fontWeight: 400,
            color: '#1A0DAB',
            lineHeight: 1.2,
          }}
        >
          How to delete your account | Acme Help Center
        </p>
        <p style={{ margin: '3px 0 0', fontSize: 11, color: '#4D5156', lineHeight: 1.45 }}>
          If you want to delete your Acme account, all you have to do is follow these easy steps… 1.
          Navigate to the Accounts tab…
        </p>
      </div>

      <div>
        <p style={{ margin: 0, fontSize: 10, color: '#188038', lineHeight: 1.35 }}>
          help.acme.com <span style={{ color: '#5F6368' }}>› your-account</span>
          <span style={{ color: '#1A0DAB', marginLeft: 6 }}>· Traduire cette page</span>
        </p>
        <p
          style={{
            margin: '2px 0 0',
            fontSize: 15,
            fontWeight: 400,
            color: '#1A0DAB',
            lineHeight: 1.2,
          }}
        >
          Manage your account | Acme Help Center
        </p>
        <p style={{ margin: '3px 0 0', fontSize: 11, color: '#4D5156', lineHeight: 1.45 }}>
          Learn how to manage your account and billing. Account management, refunds, subscription
          updates and more.
        </p>
      </div>
    </div>
  );
}

function LighthouseRing({ label }: { label: string }) {
  const R = 26;
  const C = 2 * Math.PI * R;
  const green = '#0CCE6B';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{ position: 'relative', width: 64, height: 64 }}>
        <svg width={64} height={64} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={32} cy={32} r={R} fill="none" stroke="#E5E7EB" strokeWidth={4} />
          <circle
            cx={32}
            cy={32}
            r={R}
            fill="none"
            stroke={green}
            strokeWidth={4}
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={0}
          />
        </svg>
        <span
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            fontWeight: 700,
            color: '#111111',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          100
        </span>
      </div>
      <span style={{ fontSize: 11, fontWeight: 500, color: '#4B5563', textAlign: 'center', lineHeight: 1.2 }}>
        {label}
      </span>
    </div>
  );
}

export function LighthouseCard() {
  return (
    <div
      style={{
        width: 286,
        background: '#ffffff',
        borderRadius: 12,
        border: '1px solid #E5E7EB',
        boxShadow: '0 10px 28px rgba(15, 23, 42, 0.08)',
        padding: '20px 18px 18px',
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '18px 12px',
          justifyItems: 'center',
        }}
      >
        <LighthouseRing label="Performance" />
        <LighthouseRing label="Accessibility" />
        <LighthouseRing label="Best Practices" />
        <LighthouseRing label="SEO" />
      </div>
    </div>
  );
}

const CARD_BY_ID: Record<PlatformCardId, () => JSX.Element> = {
  domain: DomainLiveCard,
  seo: GoogleSerpCard,
  performance: LighthouseCard,
};

export function PlatformColumnVisual({
  id,
  landscapeId,
  variant = 'landscape',
}: {
  id: PlatformCardId;
  landscapeId?: string;
  variant?: 'landscape' | 'plain' | 'photo';
}) {
  const Card = CARD_BY_ID[id];

  return (
    <div
      className={variant === 'photo' ? 'platform-feature-visual-root' : undefined}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: variant === 'plain' ? HOME_FEATURE_PLAIN_BG : undefined,
      }}
    >
      {variant === 'landscape' ? (
        <div style={{ position: 'absolute', inset: 0 }}>
          <PixelLandscapeWide
            width={PLATFORM_COL_W}
            height={PLATFORM_VISUAL_H}
            gradientId={landscapeId ?? 'platform-column-sky'}
          />
        </div>
      ) : null}
      {variant === 'photo' ? <FeatureSkyBackground tinted /> : null}
      <div
        className={variant === 'photo' ? 'platform-feature-mockup-stage' : undefined}
        style={
          variant === 'photo'
            ? undefined
            : {
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '18px 22px',
              }
        }
      >
        {variant === 'photo' ? (
          <div className="platform-feature-mockup">
            <Card />
          </div>
        ) : (
          <Card />
        )}
      </div>
    </div>
  );
}

const PLATFORM_ROW_CARDS = [
  <DomainLiveCard key="domain" />,
  <GoogleSerpCard key="seo" />,
  <LighthouseCard key="performance" />,
];

export function PlatformFeaturesVisualRow({ landscapeId = 'platform-features-sky' }: { landscapeId?: string }) {
  return (
    <div
      style={{
        width: PLATFORM_ROW_W,
        height: PLATFORM_VISUAL_H,
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', inset: 0 }}>
        <PixelLandscapeWide width={PLATFORM_ROW_W} height={PLATFORM_VISUAL_H} gradientId={landscapeId} />
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
        {PLATFORM_ROW_CARDS.map((card, index) => (
          <div
            key={index}
            style={{
              width: PLATFORM_COL_W,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '18px 22px',
              borderRight: index < PLATFORM_ROW_CARDS.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
            }}
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  );
}
