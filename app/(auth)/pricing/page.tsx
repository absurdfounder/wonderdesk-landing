import { buildPageMetadata } from '@/lib/og/buildMetadata';
import PricingClient from "./PricingClient";

export const metadata = buildPageMetadata({
  title: "Wonderdesk Pricing – Simple, Transparent, and Scalable Plans",
  description: "Explore Wonderdesk's flexible pricing plans. From personal projects to enterprise-scale help centers, unlock AI-powered docs, custom domains, analytics, SEO tools, and more.",
  canonical: "https://wonderdesk.ai/pricing",
  ogKind: "page",
  ogSlug: "pricing",
});

// app/(auth)/pricing/page.tsx (Server Component)

export default function PricingPage() {
  return <PricingClient />;
}
