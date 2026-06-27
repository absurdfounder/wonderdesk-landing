'use client';

import {
  BarChart3,
  BookOpen,
  Brain,
  Calendar,
  ChevronDown,
  ChevronRight,
  Eye,
  FileText,
  Folder,
  Globe,
  Plus,
  Rocket,
  Search,
  ThumbsDown,
  ThumbsUp,
  Unplug,
} from 'lucide-react';
import PixelLandscapeWide from './shared/PixelLandscapeWide';
import FeatureSkyBackground from './shared/FeatureSkyBackground';
import { HOME_FEATURE_PLAIN_BG } from './PrDocsPlatformCards';

export const PRODUCT_COL_W = 373;
export const PRODUCT_VISUAL_H = 416;
export const PRODUCT_ROW_W = PRODUCT_COL_W * 3;
export { HOME_FEATURE_PLAIN_BG } from './PrDocsPlatformCards';

const FONT = 'var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif';

const CARD_SHELL = {
  background: '#ffffff',
  borderRadius: 12,
  border: '1px solid #E5E7EB',
  boxShadow: '0 10px 28px rgba(15, 23, 42, 0.08)',
  fontFamily: FONT,
} as const;

const DAILY_BARS = [18, 28, 22, 34, 30, 42, 38, 48, 36, 52, 44, 40, 46, 34, 50, 42, 38, 44, 36, 40];

export type ProductCardId = 'analytics' | 'editor' | 'feedback';

export function AnalyticsCard() {
  const tabs = ['Overview', 'Articles', 'Searches', 'Feedback'];
  const metrics = [
    {
      value: '805',
      label: 'Unique visitors',
      desc: 'Unique visitors to your help center and widgets',
      color: '#F59E0B',
      bg: '#FFFBEB',
      icon: BarChart3,
    },
    {
      value: '1,600',
      label: 'Article views',
      desc: 'Article views across your help center and widgets',
      color: '#3B82F6',
      bg: '#EFF6FF',
      icon: FileText,
    },
    {
      value: '115',
      label: 'Searches',
      desc: 'Searches across your help center and widgets',
      color: '#10B981',
      bg: '#ECFDF5',
      icon: Search,
    },
  ];

  return (
    <div style={{ ...CARD_SHELL, width: 318, padding: '14px 14px 12px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
        <div>
          <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: '#111111', lineHeight: 1.2 }}>Analytics</p>
          <p style={{ margin: '3px 0 0', fontSize: 10, color: '#9CA3AF', lineHeight: 1.35 }}>
            Monitor search performance and user feedback
          </p>
        </div>
        <button
          type="button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            padding: '5px 8px',
            border: '1px solid #E5E7EB',
            borderRadius: 8,
            background: '#ffffff',
            fontSize: 10,
            fontWeight: 500,
            color: '#374151',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          <Calendar size={11} strokeWidth={2} color="#6B7280" />
          Past 30 Days
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 14,
          marginTop: 12,
          borderBottom: '1px solid #E5E7EB',
          paddingBottom: 0,
        }}
      >
        {tabs.map((tab) => {
          const active = tab === 'Overview';
          return (
            <span
              key={tab}
              style={{
                fontSize: 11,
                fontWeight: active ? 600 : 400,
                color: active ? '#111111' : '#9CA3AF',
                borderBottom: active ? '2px solid #F59E0B' : '2px solid transparent',
                paddingBottom: 7,
                marginBottom: -1,
                whiteSpace: 'nowrap',
              }}
            >
              {tab}
            </span>
          );
        })}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1px 1fr 1px 1fr',
          gap: 0,
          marginTop: 12,
          alignItems: 'stretch',
        }}
      >
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} style={{ display: 'contents' }}>
              {index > 0 ? <div style={{ background: '#E5E7EB' }} /> : null}
              <div style={{ padding: index === 0 ? '0 8px 0 0' : index === 2 ? '0 0 0 8px' : '0 8px' }}>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: metric.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 6,
                  }}
                >
                  <Icon size={12} strokeWidth={2.25} color={metric.color} />
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 20,
                    fontWeight: 700,
                    color: '#111111',
                    lineHeight: 1,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {metric.value}
                </p>
                <p style={{ margin: '4px 0 0', fontSize: 11, fontWeight: 600, color: '#111111', lineHeight: 1.2 }}>
                  {metric.label}
                </p>
                <p style={{ margin: '3px 0 0', fontSize: 9, color: '#9CA3AF', lineHeight: 1.35 }}>
                  {metric.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <p style={{ margin: '14px 0 8px', fontSize: 11, fontWeight: 600, color: '#111111' }}>Daily visits</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: 3,
          height: 54,
          paddingTop: 4,
        }}
      >
        {DAILY_BARS.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h}px`,
              background: '#93C5FD',
              borderRadius: '2px 2px 0 0',
              opacity: 0.55 + (i / DAILY_BARS.length) * 0.45,
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 4,
          fontSize: 8,
          color: '#9CA3AF',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        <span>1</span>
        <span>10</span>
        <span>20</span>
        <span>30</span>
      </div>
    </div>
  );
}

function NavRow({
  icon: Icon,
  label,
  expanded,
  selected,
  indent = 0,
  muted,
  showChevron = true,
}: {
  icon: typeof Rocket;
  label: string;
  expanded?: boolean;
  selected?: boolean;
  indent?: number;
  muted?: boolean;
  showChevron?: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: `5px 8px 5px ${8 + indent}px`,
        borderRadius: 6,
        background: selected ? '#F3F4F6' : 'transparent',
        borderLeft: selected ? '2px solid #3B82F6' : '2px solid transparent',
        marginBottom: 1,
      }}
    >
      {showChevron ? (
        expanded ? (
          <ChevronDown size={11} strokeWidth={2} color="#9CA3AF" />
        ) : (
          <ChevronRight size={11} strokeWidth={2} color="#9CA3AF" />
        )
      ) : (
        <span style={{ width: 11 }} />
      )}
      <Icon size={12} strokeWidth={2} color={muted ? '#9CA3AF' : '#6B7280'} style={{ flexShrink: 0 }} />
      <span
        style={{
          fontSize: 11,
          fontWeight: selected ? 500 : 400,
          color: selected ? '#111111' : muted ? '#9CA3AF' : '#374151',
          lineHeight: 1.3,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function EditorSidebarCard() {
  return (
    <div style={{ ...CARD_SHELL, width: 304, padding: '12px 10px 10px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 8px 8px',
          borderBottom: '1px solid #F3F4F6',
          marginBottom: 6,
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: '#9CA3AF',
          }}
        >
          CONTENT
        </span>
        <Plus size={13} strokeWidth={2} color="#9CA3AF" />
      </div>

      <NavRow icon={Rocket} label="Getting started" expanded={false} />
      <NavRow icon={Brain} label="Wonder" expanded={false} />
      <NavRow icon={Eye} label="Audits" expanded={false} />
      <NavRow icon={Unplug} label="Integrations" expanded={false} />
      <NavRow icon={BookOpen} label="Help Center" expanded />
      <NavRow icon={Globe} label="Custom domains" expanded indent={12} />
      <NavRow
        icon={FileText}
        label="Connect a custom domain to your help center"
        indent={24}
        selected
        showChevron={false}
      />
      <NavRow icon={Folder} label="Custom sub-folders" indent={24} muted showChevron={false} />
      <NavRow icon={FileText} label="How to customize your help center" indent={12} muted showChevron={false} />
      <NavRow
        icon={FileText}
        label="Automatic Sitemap Generation for Your Help Ce..."
        indent={12}
        muted
        showChevron={false}
      />
    </div>
  );
}

export function FeedbackCard() {
  return (
    <div style={{ ...CARD_SHELL, width: 286, padding: '14px 14px 12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#111111' }}>Was this helpful?</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <ThumbsUp size={15} strokeWidth={2} color="#9CA3AF" />
          <ThumbsDown size={15} strokeWidth={2} color="#9CA3AF" />
        </div>
      </div>

      <div
        style={{
          border: '1px solid #E5E7EB',
          borderRadius: 8,
          padding: '10px 11px',
          minHeight: 72,
          marginBottom: 8,
        }}
      >
        <p style={{ margin: 0, fontSize: 12, color: '#374151', lineHeight: 1.45 }}>
          It didn&apos;t have the instructions I need
        </p>
      </div>

      <div
        style={{
          border: '1px solid #E5E7EB',
          borderRadius: 8,
          padding: '9px 11px',
          marginBottom: 12,
        }}
      >
        <span style={{ fontSize: 12, color: '#9CA3AF' }}>Your email (optional)</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          type="button"
          style={{
            padding: '8px 14px',
            background: '#111111',
            color: '#ffffff',
            border: 'none',
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1,
            cursor: 'default',
          }}
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
}

const CARD_BY_ID: Record<ProductCardId, () => JSX.Element> = {
  analytics: AnalyticsCard,
  editor: EditorSidebarCard,
  feedback: FeedbackCard,
};

export function ProductColumnVisual({
  id,
  landscapeId,
  variant = 'landscape',
}: {
  id: ProductCardId;
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
            width={PRODUCT_COL_W}
            height={PRODUCT_VISUAL_H}
            gradientId={landscapeId ?? 'product-column-sky'}
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
                padding: variant === 'plain' ? '18px 22px' : '16px 20px',
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

const PRODUCT_ROW_CARDS = [
  <AnalyticsCard key="analytics" />,
  <EditorSidebarCard key="editor" />,
  <FeedbackCard key="feedback" />,
];

export function ProductFeaturesVisualRow({ landscapeId = 'product-features-sky' }: { landscapeId?: string }) {
  return (
    <div
      style={{
        width: PRODUCT_ROW_W,
        height: PRODUCT_VISUAL_H,
        position: 'relative',
      }}
    >
      <div style={{ position: 'absolute', inset: 0 }}>
        <PixelLandscapeWide width={PRODUCT_ROW_W} height={PRODUCT_VISUAL_H} gradientId={landscapeId} />
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
        {PRODUCT_ROW_CARDS.map((card, index) => (
          <div
            key={index}
            style={{
              width: PRODUCT_COL_W,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px 20px',
              borderRight: index < PRODUCT_ROW_CARDS.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
            }}
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  );
}
