'use client';

import {
  PLATFORM_COL_W,
  PLATFORM_VISUAL_H,
  PlatformFeaturesVisualRow,
} from './PrDocsPlatformCards';

export const PR_DOCS_PLATFORM_W = 1119;
export const PR_DOCS_PLATFORM_H = 520;

const COL_W = PLATFORM_COL_W;
const TEXT_H = 168;
const VISUAL_H = PLATFORM_VISUAL_H;

const FONT = 'var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif';

const COLUMNS = [
  {
    boldLead: 'Use your own domain or subfolder',
    rest: 'so your help center looks and feels like part of your main website.',
  },
  {
    boldLead: 'SEO-ready pages',
    rest: 'with clean structure so customers can find answers on Google, ChatGPT, and other search tools.',
  },
  {
    boldLead: 'Fast article pages',
    rest: 'that load quickly, rank better, and keep users on your site.',
  },
];

export default function PrDocsPlatformFeaturesSection() {
  return (
    <div
      style={{
        width: PR_DOCS_PLATFORM_W,
        height: PR_DOCS_PLATFORM_H,
        position: 'relative',
        fontFamily: FONT,
        borderTop: '1px solid #ECECEC',
      }}
    >
      <div style={{ display: 'flex', height: TEXT_H }}>
        {COLUMNS.map((col, index) => (
          <div
            key={col.boldLead}
            style={{
              width: COL_W,
              height: TEXT_H,
              background: '#ffffff',
              padding: '28px 28px 24px',
              borderRight: index < COLUMNS.length - 1 ? '1px solid #F0F0F0' : 'none',
              flexShrink: 0,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.55,
                color: '#666666',
                fontFamily: FONT,
              }}
            >
              <strong style={{ fontWeight: 600, color: '#111111' }}>{col.boldLead}</strong> {col.rest}
            </p>
          </div>
        ))}
      </div>

      <PlatformFeaturesVisualRow landscapeId="platform-features-sky" />
    </div>
  );
}
