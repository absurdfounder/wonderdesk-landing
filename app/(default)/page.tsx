export const metadata = {
  metadataBase: new URL('https://wondersites.co'),
  title: 'Boring: Notion to Blog, Helpdesk & Marketplace Sites (No-Code & SEO-friendly)',
  description: 'Create superfast websites with Notion as your CMS. Go from Notion to Blog, Helpdesk, Documentation, Marketplace or Directory in minutes. Build unlimited sites!',
  openGraph: { 
    images: [
      {
        url: "https://dazzling-cat.netlify.app/WonderSites_socialshare.png",
        width: 1200,
        height: 630,
        alt: "Get a Marketplace with Notion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "https://dazzling-cat.netlify.app/WonderSites_socialshare.png",
        alt: "Get a Marketplace with Notion",
      },
    ],
  },
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import OldWays from '@/components/old-ways'
import Testimonials from '@/components/testimonials'
import AboutMe from '@/components/aboutme'
import Showcases from '@/components/showcase'
import Newsletter from '@/components/newsletter'
import Marketplace_Type from '@/components/marketplaces_type'
import FAQ from '@/components/faq'
import ModalVideo from '@/components/modal-video'

export default function Home() {
  return (
    <>
      <Hero />
      <ModalVideo
      />
      <Marketplace_Type />
      {/* 
      <Testimonials />
      */}
      <FeaturesBlocks />
      <OldWays />

      <Showcases />

      <FAQ />
      <AboutMe />
      <Newsletter />
    </>
  )
}