import { VIRALHOOKS_FAVICON } from '@/lib/favicon';
import { a } from '@/lib/demoScenarioAssets/helpers';
import { i } from '@/lib/demoIntegrations';
import type { DemoScenario } from './types';

const ARTIFACTS = {
  'docs/pr-482-context.md': a({
    name: 'docs/pr-482-context.md',
    ext: 'md',
    kind: 'markdown',
    content: `# PR #482 — Two-factor authentication is live

**Status:** Merged · 2 hours ago
**Author:** Ren · **Reviewer:** Leo
**Customer-facing:** Yes — login flow changed

## Summary
- TOTP enrollment in account settings
- Backup codes on first setup
- Session re-auth for sensitive actions

## Docs gap
No help-center article for 2FA setup or recovery. Related articles on login troubleshooting and security FAQ are stale.`,
  }),
  'docs/2fa-setup-article.md': a({
    name: 'docs/2fa-setup-article.md',
    ext: 'md',
    kind: 'markdown',
    content: `# Set up two-factor authentication

Two-factor authentication (2FA) adds an extra layer of security to your Wonderdesk account.

## Before you begin
- Install an authenticator app (Google Authenticator, 1Password, or Authy)
- Keep backup codes in a safe place

## Enable 2FA
1. Go to **Settings → Security**
2. Click **Enable two-factor authentication**
3. Scan the QR code with your authenticator app
4. Enter the 6-digit code to confirm
5. Download and store your backup codes

## Sign in with 2FA
After entering your password, enter the code from your authenticator app.

## Lost access?
Use a backup code or contact support with account verification.

**Review gate:** Approve before publish.`,
  }),
  'docs/login-troubleshooting.md': a({
    name: 'docs/login-troubleshooting.md',
    ext: 'md',
    kind: 'markdown',
    content: `# Troubleshooting login issues

## Can't sign in after enabling 2FA?
- Ensure your device clock is synced
- Try a backup code from setup
- Clear browser cache and retry

## Invalid code errors
Authenticator codes expire every 30 seconds — wait for a fresh code.

*Updated for PR #482 — 2FA rollout*`,
  }),
  'docs/security-faq.md': a({
    name: 'docs/security-faq.md',
    ext: 'md',
    kind: 'markdown',
    content: `# Security FAQ

## Is two-factor authentication required?
Optional for all plans. Required for Enterprise SSO workspaces.

## What authenticator apps are supported?
Any TOTP-compatible app.

## Can admins enforce 2FA?
Yes — under **Settings → Security → Organization policy**.

*Refreshed for 2FA launch*`,
  }),
  'docs/prd-enterprise-sso.md': a({
    name: 'docs/prd-enterprise-sso.md',
    ext: 'md',
    kind: 'markdown',
    content: `# PRD — Enterprise SSO rollout

## Problem
Enterprise customers need SAML/OIDC SSO alongside the new 2FA flow.

## Goals
- SAML 2.0 + OIDC support
- IdP-initiated login
- SCIM provisioning (phase 2)

## Success metrics
- 3 pilot customers live in 6 weeks
- Zero SSO-related P1 tickets in first 30 days

## Open questions
- Enforce 2FA when SSO is enabled?
- JIT provisioning defaults`,
  }),
  'docs/changelog-2fa.md': a({
    name: 'docs/changelog-2fa.md',
    ext: 'md',
    kind: 'markdown',
    content: `# Changelog

## June 26, 2026

### Two-factor authentication is live
You can now enable TOTP-based 2FA on any Wonderdesk account. Find it under **Settings → Security**.

Related: updated login troubleshooting and security FAQ.`,
  }),
  'support/intercom-ticket-spike.md': a({
    name: 'support/intercom-ticket-spike.md',
    ext: 'md',
    kind: 'markdown',
    content: `# Intercom — 2FA login spike

**12 open conversations** in the last hour

## Top themes
1. "Can't log in after enabling 2FA" (5)
2. "Where do I find backup codes?" (4)
3. "Authenticator code not working" (3)

**Action:** Publish 2FA article + Zendesk macro before EOD.`,
  }),
};

const CANVAS_KEYS = [
  'docs/2fa-setup-article.md',
  'docs/prd-enterprise-sso.md',
  'docs/changelog-2fa.md',
  'support/intercom-ticket-spike.md',
];

export const docsScenario: DemoScenario = {
  id: 'docs',
  org: { name: 'Wonderdesk', domain: 'wonderdesk.ai', icon: VIRALHOOKS_FAVICON },
  channels: [
    { id: 'docs', name: 'docs', preview: 'Jordan: PR #482 — drafting 2FA article', time: 'now', system: false },
    { id: 'support', name: 'support', preview: 'Leo: Intercom spike — 2FA logins', time: '4m', system: false },
    { id: 'general', name: 'general', preview: 'Vaibhav: @Jordan PR #482 merged', time: '8m', system: false },
  ],
  defaultChannel: 'docs',
  defaultSidebarTab: 'channels',
  phase1Tasks: [
    { id: 1, title: 'Draft 2FA help article (PR #482)', col: 'inbox', tags: ['docs', '2fa'], watchers: ['Vaibhav', 'Jordan'], comments: 2 },
    { id: 2, title: 'Refresh login troubleshooting', col: 'in_progress', tags: ['docs', 'refresh'], watchers: ['Ren'], comments: 1 },
    { id: 3, title: 'Refresh security FAQ', col: 'in_progress', tags: ['docs', 'refresh'], watchers: ['Aria'], comments: 0 },
    { id: 4, title: 'PRD: Enterprise SSO rollout', col: 'inbox', tags: ['prd', 'enterprise'], watchers: ['Jordan'], comments: 0 },
    { id: 5, title: 'Capture 2FA setup screenshots', col: 'inbox', tags: ['screenshots', 'ui'], watchers: ['Ren'], comments: 0 },
    { id: 6, title: 'Triage Intercom spike — 2FA logins', col: 'in_progress', tags: ['support', 'intercom'], watchers: ['Leo'], comments: 4 },
  ],
  phase2Tasks: [
    { id: 7, title: 'Publish 2FA help article', col: 'review', tags: ['publish', 'review'], watchers: ['Jordan', 'Vaibhav'], comments: 1 },
    { id: 8, title: 'Zendesk macro for 2FA login issues', col: 'review', tags: ['zendesk', 'macro'], watchers: ['Leo'], comments: 2 },
    { id: 9, title: 'Changelog: Two-factor authentication is live', col: 'done', tags: ['changelog', 'shipped'], watchers: ['Aria'], comments: 0 },
  ],
  chatScript: [
    { type: 'mention_tab', text: 'Vaibhav: @Jordan PR #482 merged…', delay: 150 },
    {
      type: 'typing',
      text: '@Jordan PR #482 merged — 2FA is live. Update docs before support volume spikes.',
      delay: 200,
    },
    {
      type: 'send',
      sender: 'Vaibhav',
      role: 'Founder',
      text: '@Jordan PR #482 merged — 2FA is live. Update docs before support volume spikes.',
      delay: 300,
    },
    { type: 'nick_typing', delay: 800 },
    {
      type: 'response',
      sender: 'Jordan',
      role: 'Documentation Lead',
      text: 'On it — scanning the PR diff, help center gaps, and open Intercom tickets now…',
      time: '10:14',
      delay: 1400,
    },
    { type: 'nick_typing', delay: 1000 },
    {
      type: 'response',
      sender: 'Jordan',
      role: 'Documentation Lead',
      text: "Found no customer-facing 2FA article. I've drafted the guide, refreshed login troubleshooting + security FAQ, and queued the PRD and support tasks on the board.",
      time: '10:15',
      delay: 1500,
    },
    { type: 'addTasks', phase: 1, delay: 600 },
    { type: 'reaction', emoji: '✅', count: 2, delay: 500 },
    { type: 'addTasks', phase: 2, delay: 500 },
    {
      type: 'response',
      sender: 'Jordan',
      role: 'Documentation Lead',
      text: '2FA article is in Human Review — approve before we publish and push the Zendesk macro.',
      time: '10:16',
      delay: 1200,
    },
  ],
  spotlightTaskId: 1,
  spotlightAssignee: 'Ren',
  spotlightTaskTags: [
    { label: 'docs', type: 'channel' },
    { label: '2fa', type: 'topic' },
    { label: 'pr-482', type: 'topic' },
    { label: 'wonderdesk', type: 'site', domain: 'wonderdesk.ai' },
  ],
  initialSubtasks: [
    { id: 's1', title: 'Read PR #482 diff and merge context', agent: 'Jordan', status: 'pending' },
    { id: 's2', title: 'Scan help center for 2FA gaps', agent: 'Aria', status: 'pending' },
    { id: 's3', title: 'Read Intercom tickets — login spike', agent: 'Leo', status: 'pending' },
    { id: 's4', title: 'Draft 2FA setup article', agent: 'Ren', status: 'pending' },
    { id: 's5', title: 'Refresh related security articles', agent: 'Aria', status: 'pending' },
    { id: 's6', title: 'Queue for human review', agent: 'Jordan', status: 'pending' },
  ],
  artifacts: ARTIFACTS,
  canvasArtifacts: CANVAS_KEYS,
  deliverArtifactKey: 'docs/2fa-setup-article.md',
  taskExecScript: [
    { type: 'moveTask', taskId: 1, col: 'in_progress', delay: 700 },
    { type: 'openTaskModal', taskId: 1, delay: 500 },
    {
      type: 'modalMsg',
      sender: 'Jordan',
      text: 'PR #482 shipped 2FA — tracing diff, help center gaps, and support tickets.',
      tags: [{ label: 'docs', type: 'channel' }, { label: '2fa', type: 'topic' }],
      delay: 400,
    },
    { type: 'subtask', id: 's1', status: 'running', delay: 400 },
    {
      type: 'tool',
      log: i({ id: 't1', integration: 'github', label: 'github_read_pr', detail: 'PR #482 — two-factor authentication', agent: 'Jordan' }),
      delay: 550,
    },
    { type: 'toolDone', id: 't1', delay: 400 },
    { type: 'openArtifact', key: 'docs/pr-482-context.md', delay: 300 },
    { type: 'subtask', id: 's1', status: 'done', delay: 300 },
    { type: 'subtask', id: 's2', status: 'running', delay: 280 },
    {
      type: 'modalMsg',
      sender: 'Aria',
      text: 'No 2FA article in help center — login troubleshooting and security FAQ are stale.',
      tags: [{ label: 'wonderdesk', type: 'site', domain: 'wonderdesk.ai' }],
      delay: 450,
    },
    {
      type: 'tool',
      log: i({ id: 't2', integration: 'notion', label: 'notion_search', detail: 'Help center — 2FA, login, security', agent: 'Aria' }),
      delay: 520,
    },
    { type: 'toolDone', id: 't2', delay: 380 },
    { type: 'subtask', id: 's2', status: 'done', delay: 280 },
    { type: 'subtask', id: 's3', status: 'running', delay: 260 },
    {
      type: 'tool',
      log: i({ id: 't3', integration: 'intercom', label: 'intercom_search', detail: '12 tickets — can\'t log in after 2FA', agent: 'Leo' }),
      delay: 540,
    },
    { type: 'toolDone', id: 't3', delay: 380 },
    { type: 'openArtifact', key: 'support/intercom-ticket-spike.md', delay: 280 },
    { type: 'subtask', id: 's3', status: 'done', delay: 280 },
    { type: 'subtask', id: 's4', status: 'running', delay: 260 },
    {
      type: 'modalMsg',
      sender: 'Ren',
      text: 'Drafting 2FA setup guide from PR diff + settings screenshots.',
      delay: 450,
    },
    {
      type: 'tool',
      log: i({ id: 't4', integration: 'notion', label: 'notion_write', detail: 'docs/2fa-setup-article.md', agent: 'Ren' }),
      delay: 520,
    },
    { type: 'toolDone', id: 't4', delay: 400 },
    { type: 'openArtifact', key: 'docs/2fa-setup-article.md', delay: 300 },
    { type: 'subtask', id: 's4', status: 'done', delay: 300 },
    { type: 'subtask', id: 's5', status: 'running', delay: 280 },
    {
      type: 'tool',
      log: i({ id: 't5', integration: 'notion', label: 'notion_write', detail: 'Refresh login-troubleshooting + security-faq', agent: 'Aria' }),
      delay: 500,
    },
    { type: 'toolDone', id: 't5', delay: 380 },
    { type: 'openArtifact', key: 'docs/login-troubleshooting.md', delay: 260 },
    { type: 'openArtifact', key: 'docs/security-faq.md', delay: 220 },
    { type: 'subtask', id: 's5', status: 'done', delay: 280 },
    { type: 'subtask', id: 's6', status: 'running', delay: 260 },
    {
      type: 'tool',
      log: i({ id: 't6', integration: 'zendesk', label: 'zendesk_draft', detail: 'Macro — 2FA login troubleshooting', agent: 'Leo' }),
      delay: 500,
    },
    { type: 'toolDone', id: 't6', delay: 350 },
    { type: 'openCanvas', keys: CANVAS_KEYS, delay: 450 },
    { type: 'deliver', name: 'docs/2fa-setup-article.md', delay: 500 },
    { type: 'openArtifact', key: 'docs/2fa-setup-article.md', delay: 200 },
    { type: 'subtask', id: 's6', status: 'done', delay: 350 },
    {
      type: 'modalMsg',
      sender: 'Jordan',
      text: '2FA article + refreshed docs on Canvas — approve before publish.',
      time: '10:18',
      tags: [{ label: 'docs', type: 'channel' }, { label: 'review', type: 'topic' }],
      delay: 500,
    },
    { type: 'moveTask', taskId: 1, col: 'review', delay: 450 },
    {
      type: 'chatMsg',
      sender: 'Jordan',
      role: 'Documentation Lead',
      text: '2FA help article is in Human Review — drafts and support macro on the ticket Canvas.',
      time: '10:18',
      delay: 650,
    },
    { type: 'closeTaskModal', delay: 2200 },
  ],
};
