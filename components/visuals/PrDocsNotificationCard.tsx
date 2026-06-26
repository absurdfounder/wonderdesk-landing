'use client';

import {
  FileText,
  Github,
  Layers,
  Sparkles,
} from 'lucide-react';

const WONDER_AVATAR = 'https://dazzling-cat.netlify.app/wondercharacter.png';

/** Fixed canvas — matches reference artboard (680×760). */
export const PR_DOCS_CARD_W = 680;
export const PR_DOCS_CARD_H = 760;

const DOC_ITEMS = [
  { title: 'Set up two-factor authentication', tag: 'NEW' as const },
  { title: 'Signing in to your account', tag: 'UPDATED' as const },
  { title: 'Recovering a locked account', tag: 'UPDATED' as const },
];

function TagPill({ kind }: { kind: 'NEW' | 'UPDATED' }) {
  const color = kind === 'NEW' ? '#10B981' : '#F59E0B';
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.06em',
        color,
        textTransform: 'uppercase',
        flexShrink: 0,
      }}
    >
      {kind}
    </span>
  );
}

/**
 * Pixel-perfect PR → docs notification card (reference: Wonderdesk product UI).
 */
export default function PrDocsNotificationCard() {
  return (
    <div
      style={{
        width: PR_DOCS_CARD_W,
        height: PR_DOCS_CARD_H,
        position: 'relative',
        fontFamily: 'var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif',
      }}
    >
      {/* Floating status pill — overlaps card top-right */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 28,
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '14px 18px',
          background: '#ffffff',
          borderRadius: 20,
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06)',
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: '#A7F3D0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <FileText size={18} strokeWidth={2.25} color="#ffffff" />
        </div>
        <div>
          <p
            style={{
              margin: 0,
              fontSize: 15,
              fontWeight: 700,
              color: '#000000',
              lineHeight: 1.25,
            }}
          >
            3 docs refreshed
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
            Ready for your review
          </p>
        </div>
      </div>

      {/* Main card */}
      <div
        style={{
          position: 'absolute',
          top: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 640,
          background: '#ffffff',
          borderRadius: 32,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          padding: 48,
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            overflow: 'hidden',
            marginBottom: 20,
          }}
        >
          <img
            src={WONDER_AVATAR}
            alt="Wonder"
            width={44}
            height={44}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Title */}
        <h2
          style={{
            margin: '0 0 12px',
            fontSize: 28,
            fontWeight: 700,
            color: '#000000',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
          }}
        >
          Two-factor authentication is live
        </h2>

        {/* PR metadata */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            marginBottom: 20,
          }}
        >
          <Github size={14} strokeWidth={2} color="#9CA3AF" />
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: '#9CA3AF',
              lineHeight: 1,
            }}
          >
            PR #482 · Merged 2 hours ago
          </span>
        </div>

        {/* Body */}
        <p
          style={{
            margin: '0 0 28px',
            fontSize: 16,
            fontWeight: 400,
            color: '#4B5563',
            lineHeight: 1.55,
          }}
        >
          I found a customer-facing feature in this pull request with no documentation, so I
          drafted the missing article and refreshed two related ones.
        </p>

        {/* Review changes panel */}
        <div
          style={{
            border: '1px solid #E5E7EB',
            borderRadius: 16,
            background: '#F9FAFB',
            padding: '18px 20px 16px',
          }}
        >
          {/* Panel header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Sparkles size={15} strokeWidth={2} color="#6B7280" />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#6B7280',
                }}
              >
                Review changes
              </span>
            </div>
            <span
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: '#9CA3AF',
              }}
            >
              Preview structure
            </span>
          </div>

          {/* Category */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 10,
            }}
          >
            <Layers size={15} strokeWidth={2} color="#6B7280" />
            <span
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#6B7280',
              }}
            >
              Account &amp; security
            </span>
          </div>

          {/* Tree items */}
          <div style={{ position: 'relative', paddingLeft: 22 }}>
            {/* Vertical trunk */}
            <div
              style={{
                position: 'absolute',
                left: 7,
                top: 4,
                bottom: 14,
                width: 1,
                background: '#E5E7EB',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {DOC_ITEMS.map((item, index) => (
                <div
                  key={item.title}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 12,
                  }}
                >
                  {/* Branch */}
                  <div
                    style={{
                      position: 'absolute',
                      left: -15,
                      top: '50%',
                      width: 14,
                      height: 1,
                      background: '#E5E7EB',
                    }}
                  />
                  {index === DOC_ITEMS.length - 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        left: -15,
                        top: '50%',
                        width: 1,
                        height: '50%',
                        background: '#F9FAFB',
                      }}
                    />
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                    <FileText size={15} strokeWidth={2} color="#9CA3AF" style={{ flexShrink: 0 }} />
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: '#374151',
                        lineHeight: 1.35,
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <TagPill kind={item.tag} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          style={{
            marginTop: 32,
            padding: '12px 20px',
            background: '#000000',
            color: '#ffffff',
            border: 'none',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: 1,
            cursor: 'default',
          }}
        >
          Review &amp; edit changes
        </button>
      </div>
    </div>
  );
}
