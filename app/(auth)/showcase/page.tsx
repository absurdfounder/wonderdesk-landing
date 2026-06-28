import React from "react";
import ShowcaseClient from "./ShowcaseClient";
import { buildPageMetadata } from '@/lib/og/buildMetadata';

export const metadata = buildPageMetadata({
  title: "Websites built on Wonderdesk",
  description: "Explore help centers, blogs, changelogs, and docs published with Wonderdesk.",
  canonical: "https://wonderdesk.ai/showcase",
  ogKind: "hub",
  ogSlug: "showcase",
});

export default function ShowcasePage() {
  return <ShowcaseClient />;
}