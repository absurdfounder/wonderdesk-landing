import Link from 'next/link';
import Image from 'next/image'


export const metadata = {
  title: 'Wonder Sites Privacy',
  description: 'Wonder Sites Privacy',
  alternates: {
    canonical: "https://wondersites.co/privacy",
  },
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

export default function PageDetail() {
  return (
    <section >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pb-6 md:pt-4 md:pb-6">

          {/* Page header */}


          


        </div>
      </div>
    </section>
  )
}
