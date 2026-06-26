'use client';

import {
  DomainLiveCard,
  GoogleSerpCard,
  LighthouseCard,
  PLATFORM_COL_W,
  PLATFORM_VISUAL_H,
} from './PrDocsPlatformCards';
import PixelLandscapeWide from './shared/PixelLandscapeWide';

export const PR_DOCS_PLATFORM_W = 1119;
export const PR_DOCS_PLATFORM_H = 520;

const COL_W = PLATFORM_COL_W;
const TEXT_H = 168;
const VISUAL_H = PLATFORM_VISUAL_H;

const FONT = 'var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif';

const COLUMNS = [
  {
    boldLead: 'Connect a custom domain or subfolder',
    rest: 'to Wonderdesk and make your help center feel like part of your main website.',
    visual: <DomainLiveCard />,
  },
  {
    boldLead: 'SEO and AEO optimized out of the box,',
    rest: 'so your customers can find answers to their questions on Google, ChatGPT and more.',
    visual: <GoogleSerpCard />,
  },
  {
    boldLead: 'Articles load in milliseconds,',
    rest: 'so your page rankings improve and your customers find answers faster.',
    visual: <LighthouseCard />,
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

      <div style={{ position: 'relative', height: VISUAL_H }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <PixelLandscapeWide
            width={PR_DOCS_PLATFORM_W}
            height={VISUAL_H}
            gradientId="platform-features-sky"
          />
        </div>
        <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
          {COLUMNS.map((col, index) => (
            <div
              key={col.boldLead}
              style={{
                width: COL_W,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '18px 22px',
                borderRight: index < COLUMNS.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
              }}
            >
              {col.visual}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
