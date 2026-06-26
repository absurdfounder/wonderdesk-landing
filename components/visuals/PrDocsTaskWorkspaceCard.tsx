'use client';

import { ArrowLeft, ExternalLink, Github, MoreHorizontal } from 'lucide-react';
import WonderAppSidebar, { WONDER_SIDEBAR_W } from './shared/WonderAppSidebar';

export const PR_DOCS_TASK_W = 1200;
export const PR_DOCS_TASK_H = 688;

const FONT = 'var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif';
const SERIF = 'Georgia, "Times New Roman", ui-serif, serif';
const CENTER_W = 378;
const RIGHT_W = PR_DOCS_TASK_W - WONDER_SIDEBAR_W - CENTER_W;

const TASK_BULLETS = [
  'Create a simple guide for each key integration',
  'Include steps to connect each tool',
  'Take screenshots of the integration flow where possible',
  'Link to any relevant features in the help center',
];

function GitHubHeroMock() {
  return (
    <div
      style={{
        borderRadius: 10,
        overflow: 'hidden',
        border: '1px solid #E5E7EB',
        background: '#0d1117',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 14px',
          borderBottom: '1px solid #21262d',
        }}
      >
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
            <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            marginLeft: 8,
            padding: '5px 10px',
            borderRadius: 6,
            background: '#161b22',
            border: '1px solid #30363d',
            fontSize: 10,
            color: '#8b949e',
          }}
        >
          github.com
        </div>
      </div>
      <div style={{ padding: '20px 18px 22px', background: 'linear-gradient(180deg, #0d1117 0%, #161b22 100%)' }}>
        <p
          style={{
            margin: 0,
            fontFamily: SERIF,
            fontSize: 18,
            fontWeight: 700,
            color: '#f0f6fc',
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
          }}
        >
          Build and ship software on a single, collaborative platform
        </p>
        <p style={{ margin: '8px 0 14px', fontSize: 11, color: '#8b949e', lineHeight: 1.45 }}>
          Join the world&apos;s most widely adopted AI-powered developer platform.
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          <span
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              background: '#f0f6fc',
              color: '#24292f',
              fontSize: 10,
              fontWeight: 600,
            }}
          >
            Sign up
          </span>
          <span
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              border: '1px solid #30363d',
              color: '#f0f6fc',
              fontSize: 10,
              fontWeight: 600,
            }}
          >
            Try GitHub Copilot
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PrDocsTaskWorkspaceCard() {
  return (
    <div
      style={{
        width: PR_DOCS_TASK_W,
        height: PR_DOCS_TASK_H,
        display: 'flex',
        background: '#ffffff',
        borderRadius: 14,
        overflow: 'hidden',
        border: '1px solid #E5E7EB',
        boxShadow: '0 24px 60px -16px rgba(15, 23, 42, 0.18)',
        fontFamily: FONT,
      }}
    >
      <WonderAppSidebar activeId="tasks" />

      <div
        style={{
          width: CENTER_W,
          borderRight: '1px solid #E5E7EB',
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          background: '#ffffff',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 8,
            padding: '14px 16px',
            borderBottom: '1px solid #F3F4F6',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, minWidth: 0 }}>
            <ArrowLeft size={16} strokeWidth={2} color="#6B7280" style={{ marginTop: 2, flexShrink: 0 }} />
            <p
              style={{
                margin: 0,
                fontSize: 13,
                fontWeight: 600,
                color: '#111111',
                lineHeight: 1.35,
              }}
            >
              Create Wonderdesk Integration Setup and Documentation Guides
            </p>
          </div>
          <MoreHorizontal size={18} strokeWidth={2} color="#9CA3AF" style={{ flexShrink: 0 }} />
        </div>

        <div style={{ flex: 1, padding: '16px', overflow: 'hidden' }}>
          <div
            style={{
              background: '#F3F4F6',
              borderRadius: 12,
              padding: '14px 14px 12px',
              marginBottom: 16,
            }}
          >
            <p style={{ margin: '0 0 10px', fontSize: 13, color: '#374151', lineHeight: 1.5 }}>
              Create integration setup and documentation guides for Wonderdesk:
            </p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12, color: '#4B5563', lineHeight: 1.55 }}>
              {TASK_BULLETS.map((item) => (
                <li key={item} style={{ marginBottom: 4 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p style={{ margin: '0 0 12px', fontSize: 13, color: '#374151', lineHeight: 1.55 }}>
            First, I need to identify all of Wonderdesk&apos;s integrations and check if existing articles need
            screenshots or updates.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Github size={16} strokeWidth={2} color="#6B7280" />
            <span style={{ fontSize: 12, color: '#9CA3AF', lineHeight: 1.4 }}>
              Finished browsing your codebase
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          width: RIGHT_W,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          background: '#ffffff',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            padding: '14px 20px',
            borderBottom: '1px solid #F3F4F6',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 13,
              fontWeight: 600,
              color: '#111111',
              lineHeight: 1.35,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            How to connect your GitHub account to Wonderdesk
          </p>
          <button
            type="button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              padding: '7px 10px',
              border: '1px solid #E5E7EB',
              borderRadius: 8,
              background: '#ffffff',
              fontSize: 11,
              fontWeight: 500,
              color: '#374151',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            View published version
            <ExternalLink size={12} strokeWidth={2} color="#6B7280" />
          </button>
        </div>

        <div style={{ flex: 1, padding: '18px 22px', overflow: 'hidden' }}>
          <p style={{ margin: '0 0 14px', fontSize: 11, color: '#9CA3AF', lineHeight: 1.3 }}>
            Help Center <span style={{ color: '#D1D5DB' }}>&gt;</span> Integrations
          </p>

          <h1
            style={{
              margin: '0 0 12px',
              fontFamily: SERIF,
              fontSize: 26,
              fontWeight: 700,
              color: '#111111',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            How to connect your GitHub account to Wonderdesk
          </h1>

          <p style={{ margin: '0 0 16px', fontSize: 13, color: '#4B5563', lineHeight: 1.55 }}>
            Connecting your GitHub account lets Wonderdesk watch pull requests and draft help center articles when
            customer-facing features ship — so your docs stay current without manual work.
          </p>

          <div style={{ marginBottom: 18 }}>
            <GitHubHeroMock />
          </div>

          <h2
            style={{
              margin: 0,
              fontFamily: SERIF,
              fontSize: 18,
              fontWeight: 700,
              color: '#111111',
              lineHeight: 1.25,
            }}
          >
            Before you begin
          </h2>
        </div>
      </div>
    </div>
  );
}
