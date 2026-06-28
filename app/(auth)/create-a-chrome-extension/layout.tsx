import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/og/buildMetadata';

export const metadata: Metadata = buildPageMetadata({
  title: 'Create a Chrome Extension',
  description: 'Create and ship browser extensions with Wonderdesk workflows.',
  canonical: 'https://wonderdesk.ai/create-a-chrome-extension',
  ogKind: 'page',
  ogSlug: 'create-a-chrome-extension',
});

export default function CreateChromeExtensionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
