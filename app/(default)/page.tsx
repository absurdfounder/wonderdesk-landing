export const metadata = {
  title: 'BoringSites : Notion to Blog, Notion to Helpdesk, Notion to marketplace and Notion to Company Wiki',
  description: 'Write your content on Notion and automatically publish it to your SEO-friendly blog, helpdesk, or marketplace with a single click. No coding or design skills required.',
  openGraph: {
    images: [
        {
            url: "https://dazzling-cat.netlify.app/BoringSites_socialshare.png",
            width: 1200,
            height: 630,
            alt: "Create a Marketplace with Notion",
        },
    ],
},
twitter: {
    card: "summary_large_image",
    images: [
        {
            url: "https://dazzling-cat.netlify.app/BoringSites_socialshare.png",
            alt: "Create a Marketplace with Notion",
        },
    ],
},
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import AboutMe from '@/components/aboutme'
import Showcases from '@/components/showcase'
import Newsletter from '@/components/newsletter'
import Marketplace_Type from '@/components/marketplaces_type'

export default function Home() {
  return (
    <>
      <Hero />
      {/* 
      <Testimonials />
      */}
      <FeaturesBlocks />
              <Marketplace_Type />
      <Showcases />
      <AboutMe />
      <Newsletter />
    </>
  )
}
