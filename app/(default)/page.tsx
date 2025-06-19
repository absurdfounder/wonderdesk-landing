export const metadata = {
  metadataBase: new URL('https://wondersites.co'),
  title: 'Wonder: Notion to Blog, Helpdesk & Directory Sites (NoCode & SEO)',
  description: 'Create superfast websites with Notion as your CMS. Go from Notion to Blog, Helpdesk, Documentation, Marketplace or Directory in minutes. Build unlimited sites!',
  openGraph: {
    images: [
      {
        url: "https://dazzling-cat.netlify.app/WonderSites_socialshare.png",
        width: 1200,
        height: 630,
        alt: "Notion to Helpdesk , Notion to Directory , Notion to Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "https://dazzling-cat.netlify.app/WonderSites_socialshare.png",
        alt: "Notion to Helpdesk , Notion to Directory , Notion to Blog",
      },
    ],
  },
}

import Hero from '@/components/hero'
import Header from '@/components/ui/header'
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
import NotiontoWebsite from '@/components/notion-to-website'
import SimpleAnalyticsDashboard from '@/components/DashboardComponent'
import FloatingScrollIndicator from '@/components/FloatingScrollIndicator'
import WonderComparison from '@/components/comparision'

export default function Home() {
  return (
    <>
      <FloatingScrollIndicator />
      <div
        style={{
          backgroundImage: "linear-gradient(rgb(255 255 255 / 0%), rgba(255, 255, 255, 0)), url(https://dazzling-cat.netlify.app/cloudbackground.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <Header />
        <Hero />
        {/** 
        <WonderComparison/>
        */}
      </div>
      <br />
      <br />
      <ModalVideo />
      <NotiontoWebsite />
      <Marketplace_Type />
      {/* 
      <Testimonials />
      */}
      <FeaturesBlocks />
      <OldWays />
      <SimpleAnalyticsDashboard />
      <Showcases />
      <FAQ />
      <AboutMe />
      <Testimonials />
    </>
  )
}