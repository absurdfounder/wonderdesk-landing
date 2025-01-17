import Link from 'next/link';
import Image from 'next/image'


export const metadata = {
  title: 'Migrate to BoringSites',
  description: 'Migrate your helpdesk, blog, or even marketplace to BoringSites. Start living a hassle free life just SET and FORGET.',
  openGraph: {
    images: [
        {
            url: "https://dazzling-cat.netlify.app/BoringSites_socialshare.png",
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
            url: "https://dazzling-cat.netlify.app/BoringSites_socialshare.png",
            alt: "Get a Marketplace with Notion",
        },
    ],
},
}

export default function PageDetail() {
  return (
    <section className="bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-18 md:pb-20">

          {/* Page header */}


          


        </div>
      </div>
    </section>
  )
}
