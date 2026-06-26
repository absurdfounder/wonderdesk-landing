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
import ProductFeaturesBlocks from '@/components/ProductFeaturesBlocks'
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
import SimplePricing from '@/components/SimplePricing'
import FounderMessageSection from '@/components/FounderMessageSection'
import FAQ from '@/components/faq'

export default function Home() {
  return (
    <>
      <FloatingScrollIndicator />

        {/* Hero — unchanged banner background, full bleed */}
        <div
          style={{
            backgroundImage: "linear-gradient(rgb(254 254 255), rgb(255 255 255 / 89%), rgb(255 255 255 / 48%)), url(https://dazzling-cat.netlify.app/wondercollectivebanner.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <Header />
          <Hero />
        </div>

        <section className="homepage-grid-row bg-white">
          <div className="landing-grid-column">
            <div className="landing-grid-pad py-6 md:py-10">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-center">
              <span className="mt-1 text-base font-medium text-balance text-gray-400 md:text-left">
                Trusted by leading product-led companies
              </span>
              <div className="mx-auto flex flex-wrap place-items-center items-center justify-center gap-8">
                <div className="h-6 max-h-12 w-32 transition-all duration-300 hover:scale-110">
                  <img
                    className="h-full w-full origin-center object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    src="https://dazzling-cat.netlify.app/logos/zeroslistlogo.png"
                    alt="Zeroslist"
                  />
                </div>
                <div className="h-8 max-h-12 w-32 transition-all duration-300 hover:scale-110">
                  <img
                    className="h-full w-full origin-center object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    src="https://dazzling-cat.netlify.app/logos/marketingxlogo.png"
                    alt="MarketingX"
                  />
                </div>
                <div className="h-7 max-h-12 w-32 transition-all duration-300 hover:scale-110">
                  <img
                    className="h-full w-full origin-center object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    src="https://dazzling-cat.netlify.app/logos/dealflowlogo.png"
                    alt="Dealflow"
                  />
                </div>
                <div className="h-12 max-h-12 w-32 transition-all duration-300 hover:scale-110">
                  <img
                    className="h-full w-full origin-center object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                    src="https://dazzling-cat.netlify.app/logos/downtownlogo.png"
                    alt="Downtown"
                  />
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        <div className="homepage-grid-row">
          <NotionToWebsite />
        </div>

        <div className="homepage-grid-row">
          <ModalVideo />
        </div>

        <div className="homepage-grid-row">
          <CustomerStorySection />
        </div>

        <div className="homepage-grid-row">
          <FeaturesBlocks />
        </div>

        <div className="homepage-grid-row">
          <ProductFeaturesBlocks />
        </div>

        <div className="homepage-grid-row">
          <OldWays />
        </div>

        <div className="homepage-grid-row">
          <HowItWorksSection />
        </div>

        <div className="homepage-grid-row">
          <CustomerStorySection2 />
        </div>

        <div className="homepage-grid-row">
          <Showcases />
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

        <div className="homepage-grid-row bg-white">
          <section className="bg-white">
            <div className="landing-grid-column bg-white">
              <FounderMessageSection embedded />
            </div>
          </section>
        </div>

        <div className="homepage-grid-row">
          <section className="bg-canvas-warm">
            <div className="landing-grid-column bg-canvas-warm">
              <FAQ embedded />
            </div>
          </section>
        </div>

        <div className="homepage-grid-row">
          <AIAgentSection />
        </div>
    </>
  )
}
