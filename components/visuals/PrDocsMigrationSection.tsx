'use client';

import { Check } from 'lucide-react';

export const PR_DOCS_MIGRATION_W = 1120;
export const PR_DOCS_MIGRATION_H = 420;

const BG = '#F9FAFB';
const ACCENT_GREEN = '#84CC16';

const IMPORT_SOURCES = [
  { logo: 'https://dazzling-cat.netlify.app/intercom.png', alt: 'Intercom' },
  { logo: 'https://dazzling-cat.netlify.app/zendesk.jpg', alt: 'Zendesk' },
  { logo: 'https://dazzling-cat.netlify.app/helpscout.png', alt: 'Help Scout' },
  { logo: 'https://dazzling-cat.netlify.app/gitbook.png', alt: 'GitBook' },
  { logo: 'https://cdn.simpleicons.org/hubspot/FF7A59', alt: 'HubSpot' },
  { logo: 'https://dazzling-cat.netlify.app/fernand.png', alt: 'Fernand' },
];

const LOG_ITEMS = [
  'Original URLs preserved',
  '301 redirects created',
  'SEO metadata kept intact',
  'Images and embeds migrated',
];

function GreenCheck({ size = 16 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: '#ECFCCB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Check size={size - 6} strokeWidth={2.75} color={ACCENT_GREEN} />
    </div>
  );
}

function ZendeskMark() {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        background: '#111111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          color: '#ffffff',
          fontSize: 20,
          fontWeight: 700,
          lineHeight: 1,
          fontFamily: 'var(--font-inter), Inter, sans-serif',
        }}
      >
        Z
      </span>
    </div>
  );
}

export default function PrDocsMigrationSection() {
  return (
    <div
      style={{
        width: PR_DOCS_MIGRATION_W,
        height: PR_DOCS_MIGRATION_H,
        background: BG,
        display: 'flex',
        alignItems: 'center',
        gap: 72,
        padding: '0 8px',
        fontFamily: 'var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif',
      }}
    >
      {/* Left column */}
      <div style={{ width: 500, flexShrink: 0 }}>
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-silkscreen), monospace',
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: ACCENT_GREEN,
            lineHeight: 1,
          }}
        >
          ONE-CLICK MIGRATION
        </p>

        <h2
          style={{
            margin: '18px 0 0',
            fontFamily: 'var(--font-erode), var(--font-inter), ui-serif, Georgia, serif',
            fontSize: 34,
            fontWeight: 500,
            color: '#111111',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}
        >
          Switching is a click,
          <br />
          not a project
        </h2>

        <p
          style={{
            margin: '18px 0 0',
            fontSize: 16,
            fontWeight: 400,
            color: '#666666',
            lineHeight: 1.6,
            maxWidth: 460,
          }}
        >
          Already on Intercom, Zendesk, or GitBook? Bring your help center across in one click.
          Original URLs preserved, redirects handled, SEO intact. Wonder refines what you already
          have instead of making you rewrite from scratch.
        </p>

        <p
          style={{
            margin: '28px 0 12px',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#9CA3AF',
            lineHeight: 1,
          }}
        >
          IMPORTS FROM
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {IMPORT_SOURCES.map((source) => (
            <div
              key={source.alt}
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                border: '1px solid #E5E7EB',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 8,
                flexShrink: 0,
              }}
            >
              <img
                src={source.logo}
                alt={source.alt}
                width={24}
                height={24}
                style={{ width: 24, height: 24, objectFit: 'contain' }}
              />
            </div>
          ))}

          <button
            type="button"
            style={{
              marginLeft: 4,
              padding: '11px 16px',
              background: '#ffffff',
              border: '1px solid #E5E7EB',
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 500,
              color: '#374151',
              lineHeight: 1,
              cursor: 'default',
              whiteSpace: 'nowrap',
            }}
          >
            View all →
          </button>
        </div>
      </div>

      {/* Right column — migration card */}
      <div
        style={{
          width: 480,
          flexShrink: 0,
          background: '#ffffff',
          border: '1px solid #E8E8E8',
          borderRadius: 16,
          padding: '22px 22px 20px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <ZendeskMark />
          <div>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                fontWeight: 600,
                color: '#111111',
                lineHeight: 1.25,
              }}
            >
              Import from Zendesk
            </p>
            <p
              style={{
                margin: '2px 0 0',
                fontSize: 13,
                fontWeight: 400,
                color: '#9CA3AF',
                lineHeight: 1.25,
              }}
            >
              help.acme.com
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginTop: 16,
            marginBottom: 16,
          }}
        >
          <GreenCheck size={18} />
          <span style={{ fontSize: 14, color: '#4B5563', lineHeight: 1 }}>
            <strong style={{ fontWeight: 700, color: '#111111' }}>1,284</strong> articles migrated
          </span>
        </div>

        <div
          style={{
            border: '1px solid #E5E7EB',
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '11px 14px',
              background: '#F9FAFB',
              borderBottom: '1px solid #E5E7EB',
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 500, color: '#6B7280' }}>Import log</span>
            <span style={{ fontSize: 13, fontWeight: 400, color: '#9CA3AF' }}>3m 42s</span>
          </div>

          <div style={{ padding: '10px 14px 12px', background: '#ffffff' }}>
            {LOG_ITEMS.map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '7px 0',
                }}
              >
                <GreenCheck />
                <span style={{ fontSize: 14, fontWeight: 400, color: '#4B5563', lineHeight: 1.35 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
