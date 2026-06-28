import React from 'react';
import { ImageResponse } from 'next/og';
import { mergeBadgeIcons } from '@/lib/og/agentIcons';
import { loadOgFonts } from '@/lib/og/fonts';
import { formatOgDisplayUrl } from '@/lib/og/pageUrls';
import type { OgHeroContent } from '@/lib/og/types';

export const OG_SIZE = { width: 1200, height: 630 };

const BRAND_ACCENT = '#0891b2';
const BRAND_ACCENT_TEXT = '#0e7490';
const SLATE_200 = '#e2e8f0';
const SLATE_400 = '#94a3b8';
const WONDERDESK_LOGOMARK_URL = 'https://wonderdesk.ai/images/logonew-black.png';
const OG_BACKGROUND_URL = 'https://wonderdesk.ai/og/share-background.png';

/** Scaled from site max-w-7xl + md:px-6 frame rhythm for 1200×630 OG canvas. */
const FRAME_INSET = 28;
const FRAME_PAD_X = 40;
const FRAME_PAD_Y = 36;

// Satori/@vercel/og does not support repeating-linear-gradient — use a subtle wash instead.
const PIXEL_GRID_BG =
  'linear-gradient(180deg, rgba(8, 145, 178, 0.05) 0%, rgba(15, 23, 42, 0.02) 100%)';

const CAMO_WASH_BG = [
  'radial-gradient(circle at 18% 28%, rgba(125, 211, 252, 0.18) 0%, transparent 48%)',
  'radial-gradient(circle at 82% 72%, rgba(8, 145, 178, 0.1) 0%, transparent 42%)',
  'linear-gradient(180deg, #f8fbfd 0%, #eef6fa 100%)',
].join(', ');

function WonderdeskBrandMark() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={WONDERDESK_LOGOMARK_URL} alt="" width={56} height={56} />
      <span
        style={{
          fontSize: 32,
          lineHeight: 1,
          fontFamily: 'Silkscreen',
          color: '#0f172a',
          letterSpacing: '-0.02em',
        }}
      >
        wonderdesk
      </span>
    </div>
  );
}

function MissionEyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        border: `1px solid rgba(8, 145, 178, 0.35)`,
        background: 'linear-gradient(180deg, #f8fbfd 0%, #eef8fc 100%)',
        padding: '8px 14px',
        boxShadow: '0 1px 0 rgba(255, 255, 255, 0.9)',
      }}
    >
      <span
        style={{
          fontSize: 13,
          fontFamily: 'Silkscreen',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: SLATE_400,
        }}
      >
        [{index}]
      </span>
      <div style={{ width: 1, height: 12, background: 'rgba(8, 145, 178, 0.25)' }} />
      <span
        style={{
          fontSize: 13,
          fontFamily: 'Silkscreen',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: BRAND_ACCENT_TEXT,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}…`;
}

function BadgeRow({ badges }: { badges: NonNullable<OgHeroContent['badgeIcons']> }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 20 }}>
      {badges.map((badge) => (
        <div
          key={badge.label}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            border: `1px solid ${SLATE_200}`,
            borderRadius: 999,
            padding: '8px 14px 8px 10px',
            background: '#ffffff',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={badge.iconUrl} alt="" width={22} height={22} style={{ borderRadius: 4 }} />
          <span style={{ fontSize: 18, color: '#334155', fontFamily: 'Inter' }}>{badge.label}</span>
        </div>
      ))}
    </div>
  );
}

function DecorativeGridPanel() {
  const cellStyle = {
    display: 'flex' as const,
    flex: 1,
    background: '#ffffff',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 340,
        flexShrink: 0,
        borderLeft: `1px solid ${SLATE_200}`,
        background: SLATE_200,
        gap: 1,
      }}
    >
      <div style={{ display: 'flex', flex: 1, gap: 1 }}>
        <div style={{ ...cellStyle, background: '#eef8fc' }} />
        <div style={cellStyle}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={OG_BACKGROUND_URL} alt="" width={170} height={130} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.85 }} /></div>
        <div style={{ ...cellStyle, background: '#fafaf8' }} />
      </div>
      <div style={{ display: 'flex', flex: 1, gap: 1 }}>
        <div style={cellStyle} />
        <div style={{ ...cellStyle, background: '#eef8fc' }} />
        <div style={cellStyle}><div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: BRAND_ACCENT, opacity: 0.08 }} /></div>
      </div>
      <div style={{ display: 'flex', height: 48, gap: 1 }}>
        <div style={{ ...cellStyle, background: '#fafaf8' }} />
        <div style={{ ...cellStyle, background: '#ffffff' }} />
        <div style={{ ...cellStyle, background: '#eef8fc' }} />
      </div>
    </div>
  );
}

export function OgHeroImage({ content }: { content: OgHeroContent }) {
  const singleLine = content.singleLineHeadline !== false;
  const badges = mergeBadgeIcons(content.badgeIcons, content.description);
  const displayUrl = formatOgDisplayUrl(content.pageUrl || 'https://wonderdesk.ai');

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f0f7fa',
        backgroundImage: CAMO_WASH_BG,
      }}
    >
      {/* Pixel grid overlay — matches .pixel-flicker-grid on site */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: PIXEL_GRID_BG,
          opacity: 0.55,
        }}
      />

      {/* SectionShell-style frame: max-w-7xl rail borders */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          margin: FRAME_INSET,
          border: `1px solid ${SLATE_200}`,
          background: 'rgba(255, 255, 255, 0.72)',
        }}
      >
        {/* Header band — eyebrow + wordmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: `${FRAME_PAD_Y}px ${FRAME_PAD_X}px 24px`,
            borderBottom: `1px solid ${SLATE_200}`,
          }}
        >
          <MissionEyebrow index={content.eyebrowIndex} label={content.eyebrowLabel} />
          <WonderdeskBrandMark />
        </div>

        {/* Main body — content column + decorative grid panel */}
        <div style={{ display: 'flex', flex: 1 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              padding: `28px ${FRAME_PAD_X}px 24px`,
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
                {content.iconUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={content.iconUrl}
                    alt=""
                    width={56}
                    height={56}
                    style={{ borderRadius: 12, marginTop: 6 }}
                  />
                ) : null}
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {singleLine ? (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'baseline',
                        maxWidth: 720,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 58,
                          lineHeight: 1.08,
                          fontWeight: 700,
                          color: '#0f172a',
                          letterSpacing: '-0.03em',
                          fontFamily: 'Erode',
                          marginRight: content.headlineAccent ? 14 : 0,
                        }}
                      >
                        {content.headlinePrimary}
                      </span>
                      {content.headlineAccent ? (
                        <span
                          style={{
                            fontSize: 58,
                            lineHeight: 1.08,
                            fontWeight: 700,
                            color: BRAND_ACCENT,
                            letterSpacing: '-0.03em',
                            fontFamily: 'Erode',
                          }}
                        >
                          {content.headlineAccent}
                        </span>
                      ) : null}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div
                        style={{
                          fontSize: 58,
                          lineHeight: 1.08,
                          fontWeight: 700,
                          color: '#0f172a',
                          letterSpacing: '-0.03em',
                          fontFamily: 'Erode',
                        }}
                      >
                        {content.headlinePrimary}
                      </div>
                      {content.headlineAccent ? (
                        <div
                          style={{
                            fontSize: 58,
                            lineHeight: 1.08,
                            fontWeight: 700,
                            color: BRAND_ACCENT,
                            letterSpacing: '-0.03em',
                            fontFamily: 'Erode',
                            marginTop: 4,
                          }}
                        >
                          {content.headlineAccent}
                        </div>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>

              {content.description ? (
                <p
                  style={{
                    marginTop: 18,
                    maxWidth: 680,
                    fontSize: 22,
                    lineHeight: 1.45,
                    color: '#475569',
                    fontFamily: 'Erode',
                  }}
                >
                  {truncate(content.description, 160)}
                </p>
              ) : null}

              {badges?.length ? <BadgeRow badges={badges} /> : null}
            </div>
          </div>

          <DecorativeGridPanel />
        </div>

        {/* Footer band — URL row with section divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: `16px ${FRAME_PAD_X}px`,
            borderTop: `1px solid ${SLATE_200}`,
            background: 'rgba(255, 255, 255, 0.85)',
          }}
        >
          <span style={{ fontSize: 18, color: '#64748b', fontFamily: 'Inter' }}>{displayUrl}</span>
        </div>
      </div>
    </div>
  );
}

export async function createOgImageResponse(content: OgHeroContent) {
  const fonts = await loadOgFonts();
  return new ImageResponse(<OgHeroImage content={content} />, {
    ...OG_SIZE,
    fonts,
  });
}
