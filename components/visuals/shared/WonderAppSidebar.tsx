'use client';

import {
  BarChart3,
  BookOpen,
  CreditCard,
  FileText,
  HelpCircle,
  LayoutDashboard,
  ListTodo,
  Plug,
  ScrollText,
  Users,
} from 'lucide-react';

export const WONDER_SIDEBAR_W = 196;

const FONT = 'var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif';

type NavItem = {
  id: string;
  label: string;
  icon: typeof LayoutDashboard;
  section?: string;
};

const NAV: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'help-center', label: 'Help Center', icon: BookOpen },
  { id: 'audits', label: 'Audits', icon: BarChart3, section: 'Wonder' },
  { id: 'tasks', label: 'Tasks', icon: ListTodo },
  { id: 'integrations', label: 'Integrations', icon: Plug, section: 'Workspace' },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'get-help', label: 'Get help', icon: HelpCircle, section: 'Product' },
  { id: 'changelog', label: 'Changelog', icon: ScrollText },
];

export default function WonderAppSidebar({ activeId = 'audits' }: { activeId?: string }) {
  let lastSection = '';

  return (
    <aside
      style={{
        width: WONDER_SIDEBAR_W,
        height: '100%',
        background: '#F9FAFB',
        borderRight: '1px solid #E5E7EB',
        padding: '16px 12px',
        flexShrink: 0,
        fontFamily: FONT,
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 8px 18px' }}>
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 6,
            background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <span style={{ color: '#fff', fontSize: 11, fontWeight: 800, lineHeight: 1 }}>W</span>
        </div>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#111111', letterSpacing: '-0.02em' }}>
          Wonderdesk
        </span>
      </div>

      <nav>
        {NAV.map((item) => {
          const showSection = item.section && item.section !== lastSection;
          if (item.section) lastSection = item.section;
          const Icon = item.icon;
          const active = item.id === activeId;

          return (
            <div key={item.id}>
              {showSection ? (
                <p
                  style={{
                    margin: '14px 8px 6px',
                    fontSize: 11,
                    fontWeight: 500,
                    color: '#9CA3AF',
                    lineHeight: 1,
                  }}
                >
                  {item.section}
                </p>
              ) : null}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '7px 8px',
                  borderRadius: 8,
                  marginBottom: 2,
                  background: active ? '#ffffff' : 'transparent',
                  boxShadow: active ? '0 1px 2px rgba(0,0,0,0.04)' : 'none',
                }}
              >
                <Icon size={15} strokeWidth={2} color={active ? '#111111' : '#6B7280'} />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: active ? 600 : 400,
                    color: active ? '#111111' : '#4B5563',
                    lineHeight: 1.2,
                  }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
