'use client';

import {
  ArrowLeft,
  Check,
  ChevronRight,
  Lightbulb,
  MessageSquare,
  Percent,
  Sparkles,
} from 'lucide-react';
import WonderAppSidebar, { WONDER_SIDEBAR_W } from './shared/WonderAppSidebar';

export const PR_DOCS_AUDIT_W = 1180;
export const PR_DOCS_AUDIT_H = 748;

const FONT = 'var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif';
const SERIF = 'Georgia, "Times New Roman", ui-serif, serif';
const MAIN_W = PR_DOCS_AUDIT_W - WONDER_SIDEBAR_W;

const METRICS = [
  {
    value: '140',
    label: 'Conversations analyzed',
    desc: 'Support conversations analyzed by Wonder',
    color: '#F97316',
    bg: '#FFF7ED',
    border: '#FDBA74',
    icon: MessageSquare,
  },
  {
    value: '79',
    label: 'Recommendations',
    desc: 'Suggestions from Wonder to review',
    color: '#A855F7',
    bg: '#FAF5FF',
    border: '#D8B4FE',
    icon: Sparkles,
  },
  {
    value: '11%',
    label: 'Coverage',
    desc: 'Questions covered by existing articles',
    color: '#22C55E',
    bg: '#F0FDF4',
    border: '#86EFAC',
    icon: Percent,
  },
];

const RECOMMENDATIONS = [
  {
    score: 5,
    text: "Expand 'Troubleshooting common testimonial import issues' with source-specific steps",
  },
  {
    score: 4,
    text: "Expand 'Troubleshooting common widget display issues' with platform-specific guidance",
  },
  {
    score: 3,
    text: "Create new article 'How to resolve CSV format errors during import'",
  },
  {
    score: 3,
    text: "Expand 'Troubleshooting widget display issues' with browser compatibility notes",
  },
];

function MetricCard({
  value,
  label,
  desc,
  color,
  bg,
  border,
  icon: Icon,
}: (typeof METRICS)[number]) {
  return (
    <div
      style={{
        flex: 1,
        background: '#ffffff',
        border: '1px solid #E5E7EB',
        borderRadius: 12,
        borderTop: `3px solid ${border}`,
        padding: '14px 16px 12px',
        minWidth: 0,
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 8,
          background: bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
        }}
      >
        <Icon size={15} strokeWidth={2.25} color={color} />
      </div>
      <p
        style={{
          margin: 0,
          fontFamily: SERIF,
          fontSize: 32,
          fontWeight: 700,
          color: '#111111',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {value}
      </p>
      <p style={{ margin: '6px 0 2px', fontSize: 13, fontWeight: 600, color: '#111111', lineHeight: 1.25 }}>
        {label}
      </p>
      <p style={{ margin: 0, fontSize: 11, color: '#9CA3AF', lineHeight: 1.35 }}>{desc}</p>
    </div>
  );
}

export default function PrDocsAuditResultsCard() {
  const tabs = ['Recommendations', 'Customer questions', 'Product releases'];

  return (
    <div
      style={{
        width: PR_DOCS_AUDIT_W,
        height: PR_DOCS_AUDIT_H,
        display: 'flex',
        background: '#ffffff',
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid #E5E7EB',
        boxShadow: '0 24px 60px -16px rgba(15, 23, 42, 0.18)',
        fontFamily: FONT,
      }}
    >
      <WonderAppSidebar activeId="audits" />

      <div style={{ width: MAIN_W, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 24px',
            borderBottom: '1px solid #F3F4F6',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ArrowLeft size={16} strokeWidth={2} color="#6B7280" />
            <span style={{ fontSize: 13, fontWeight: 500, color: '#6B7280' }}>Audit</span>
          </div>
          <button
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 14px',
              background: '#111111',
              color: '#ffffff',
              border: 'none',
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            <Check size={14} strokeWidth={2.5} />
            Mark as reviewed
          </button>
        </div>

        <div style={{ flex: 1, overflow: 'hidden', padding: '20px 24px 0' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 22, lineHeight: 1 }}>🦉</span>
            <h2
              style={{
                margin: 0,
                fontFamily: SERIF,
                fontSize: 28,
                fontWeight: 700,
                color: '#111111',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Audit results
            </h2>
          </div>
          <p style={{ margin: '0 0 20px', fontSize: 14, color: '#6B7280', lineHeight: 1.5, maxWidth: 640 }}>
            Hey Wilson! I analyzed <strong style={{ color: '#374151', fontWeight: 600 }}>140</strong> support
            conversations between Aug 22 – Aug 29, 2025 and found{' '}
            <strong style={{ color: '#374151', fontWeight: 600 }}>79</strong> opportunities to improve your help
            center.
          </p>

          <div style={{ display: 'flex', gap: 12, marginBottom: 22 }}>
            {METRICS.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              gap: 24,
              borderBottom: '1px solid #E5E7EB',
              marginBottom: 0,
            }}
          >
            {tabs.map((tab) => {
              const active = tab === 'Recommendations';
              return (
                <span
                  key={tab}
                  style={{
                    fontSize: 13,
                    fontWeight: active ? 600 : 400,
                    color: active ? '#111111' : '#9CA3AF',
                    paddingBottom: 10,
                    borderBottom: active ? '2px solid #111111' : '2px solid transparent',
                    marginBottom: -1,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tab}
                </span>
              );
            })}
          </div>

          <div style={{ paddingTop: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#111111' }}>High impact</span>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 14 }}>
                {[10, 14, 18].map((h) => (
                  <span
                    key={h}
                    style={{
                      width: 4,
                      height: h,
                      borderRadius: 1,
                      background: '#EF4444',
                      display: 'inline-block',
                    }}
                  />
                ))}
              </div>
            </div>
            <p style={{ margin: '0 0 14px', fontSize: 12, color: '#9CA3AF', lineHeight: 1.35 }}>
              Get up to 16 fewer tickets every week by implementing these
            </p>

            <div style={{ border: '1px solid #E5E7EB', borderRadius: 10, overflow: 'hidden' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 120px',
                  padding: '10px 14px',
                  background: '#F9FAFB',
                  borderBottom: '1px solid #E5E7EB',
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: '#9CA3AF',
                    textTransform: 'uppercase',
                  }}
                >
                  Recommendation
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: '#9CA3AF',
                    textTransform: 'uppercase',
                    textAlign: 'right',
                  }}
                >
                  Status
                </span>
              </div>
              {RECOMMENDATIONS.map((row, index) => (
                <div
                  key={row.text}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 120px 20px',
                    alignItems: 'center',
                    gap: 8,
                    padding: '12px 14px',
                    borderBottom: index < RECOMMENDATIONS.length - 1 ? '1px solid #F3F4F6' : 'none',
                    background: '#ffffff',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, minWidth: 0 }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 3,
                        minWidth: 22,
                        height: 22,
                        padding: '0 5px',
                        borderRadius: 6,
                        background: '#F3F4F6',
                        fontSize: 11,
                        fontWeight: 700,
                        color: '#374151',
                        flexShrink: 0,
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {row.score}
                      <Lightbulb size={10} strokeWidth={2.25} color="#9CA3AF" />
                    </span>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.4 }}>{row.text}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: '50%',
                        border: '2px dashed #D1D5DB',
                        display: 'inline-block',
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: 12, color: '#6B7280', whiteSpace: 'nowrap' }}>To review</span>
                  </div>
                  <ChevronRight size={16} strokeWidth={2} color="#D1D5DB" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
