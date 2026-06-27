export const metadata = {
  metadataBase: new URL('https://wonderdesk.ai'),
  title: 'Wonderdesk | AI Help Center & Knowledge Base Software',
description: 'Wonderdesk is AI help center software that drafts and updates documentation from your product changes. Launch a searchable knowledge base with custom domains, SEO, and analytics.',
  openGraph: {
    images: [
      {
        url: "https://dazzling-cat.netlify.app/WonderSites_socialshare.png",
        width: 1200,
        height: 630,
        alt: "Wonderdesk AI help center and knowledge base software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "https://dazzling-cat.netlify.app/WonderSites_socialshare.png",
        alt: "AI Help Center, Blog, Changelog & Docs That Stay Up to Date",
      },
    ],
  },
}

import Hero from '@/components/hero'
import Header from '@/components/ui/header'
import TrustBarSection from '@/components/home/TrustBarSection'
import PainSection from '@/components/home/PainSection'
import HowWonderWorksSection from '@/components/home/HowWonderWorksSection'
import WonderdeskDashboardSection from '@/components/home/WonderdeskDashboardSection'
import PlatformFeaturesSection from '@/components/home/PlatformFeaturesSection'
import IntegrationsCapabilitySection from '@/components/home/IntegrationsCapabilitySection'
import TestimonialWallSection from '@/components/home/TestimonialWallSection'
import GetStartedSection from '@/components/GetStartedSection'
import FloatingScrollIndicator from '@/components/FloatingScrollIndicator'
import SimplePricing from '@/components/SimplePricing'
import FAQ from '@/components/faq'
import FinalCTASection from '@/components/home/FinalCTASection'

export default function Home() {
  return (
    <>
      <FloatingScrollIndicator />

        <div>
          <Header />
          <Hero />
        </div>

        <div className="homepage-grid-row">
          <TrustBarSection />
        </div>

        <div className="homepage-grid-row">
          <PainSection />
        </div>

        <div className="homepage-grid-row">
          <HowWonderWorksSection />
        </div>

        <div className="homepage-grid-row">
          <PlatformFeaturesSection />
        </div>

        <div className="homepage-grid-row">
          <IntegrationsCapabilitySection />
        </div>

        <div className="homepage-grid-row">
          <WonderdeskDashboardSection />
        </div>

        <div className="homepage-grid-row">
          <TestimonialWallSection />
        </div>

        <div className="homepage-grid-row">
          <GetStartedSection />
        </div>

        <div className="homepage-grid-row bg-white">
          <section className="bg-white">
            <div className="landing-grid-column bg-white">
              <SimplePricing showFullPricingLink embedded />
            </div>
          </section>
        </div>

        <div className="homepage-grid-row">
          <section className="bg-white">
            <div className="landing-grid-column">
              <FAQ embedded />
            </div>
          </section>
        </div>

        <div className="homepage-grid-row">
          <FinalCTASection />
        </div>
    </>
  )
}
