export const metadata = {
  metadataBase: new URL('https://wonderdesk.ai'),
  title: 'Wonderdesk : AI Help Center, Blog, Changelog & Docs That Stay Up to Date',
description: 'Wonderdesk is the AI-powered platform that writes, updates, and maintains your help center, blog, changelog, and product documentation automatically. Set it up in minutes, keep it current forever.',
  openGraph: {
    images: [
      {
        url: "https://dazzling-cat.netlify.app/WonderSites_socialshare.png",
        width: 1200,
        height: 630,
        alt: "AI Help Center, Blog, Changelog & Docs That Stay Up to Date",
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
import FeaturesBlocks from '@/components/FeaturesBlocks'
import HowItWorksSection from '@/components/HowItWorksSection'
import AIAgentSection from '@/components/AIAgentSection'
import CustomerStorySection from '@/components/CustomerStorySection'
import CustomerStorySection2 from '@/components/CustomerStorySection2'
import GetStartedSection from '@/components/GetStartedSection'
import OldWays from '@/components/OldWays'
import Showcases from '@/components/showcase'
import ModalVideo from '@/components/ModalVideo'
import NotionToWebsite from '@/components/NotionToWebsite'
import FloatingScrollIndicator from '@/components/FloatingScrollIndicator'
import LandingBackdrop from '@/components/landing/LandingBackdrop'
import LandingSection from '@/components/landing/LandingSection'

export default function Home() {
  return (
    <>
      <FloatingScrollIndicator />
      <LandingBackdrop />

      <section className="relative border-b border-slate-200">
        <Header />
        <div className="landing-grid-frame pb-4 pt-24 sm:pt-28 md:pb-8">
          <Hero />
        </div>
      </section>

      <LandingSection innerClassName="py-6 md:py-8">
        <div className="flex flex-col items-center justify-between gap-6 py-4 md:flex-row md:items-center">
          <span className="font-roboto-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Trusted by leading product-led companies
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { src: 'https://dazzling-cat.netlify.app/logos/zeroslistlogo.png', alt: 'Zeroslist' },
              { src: 'https://dazzling-cat.netlify.app/logos/marketingxlogo.png', alt: 'MarketingX' },
              { src: 'https://dazzling-cat.netlify.app/logos/dealflowlogo.png', alt: 'Dealflow' },
              { src: 'https://dazzling-cat.netlify.app/logos/downtownlogo.png', alt: 'Downtown', tall: true },
            ].map((logo) => (
              <div
                key={logo.alt}
                className={`${logo.tall ? 'h-12' : 'h-7'} w-32 max-h-12 transition-all duration-300 hover:scale-105`}
              >
                <img
                  className="h-full w-full origin-center object-contain opacity-45 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  src={logo.src}
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </LandingSection>

      <LandingSection variant="sky-wash">
        <NotionToWebsite />
      </LandingSection>

      <LandingSection>
        <ModalVideo />
      </LandingSection>

      <LandingSection variant="rule-grid">
        <CustomerStorySection embedded />
      </LandingSection>

      <LandingSection>
        <FeaturesBlocks embedded />
      </LandingSection>

      <LandingSection variant="rule-grid">
        <OldWays embedded />
      </LandingSection>

      <LandingSection variant="dot-grid">
        <HowItWorksSection embedded />
      </LandingSection>

      <LandingSection variant="rule-grid">
        <CustomerStorySection2 embedded />
      </LandingSection>

      <LandingSection>
        <Showcases embedded />
      </LandingSection>

      <LandingSection>
        <GetStartedSection embedded />
      </LandingSection>

      <LandingSection variant="dot-grid" innerClassName="px-0 sm:px-0">
        <AIAgentSection embedded />
      </LandingSection>
    </>
  )
}
