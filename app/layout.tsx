import './css/style.css'

import { Inter, Roboto_Mono, Source_Serif_4, Comfortaa, Josefin_Slab } from 'next/font/google'
import localFont from 'next/font/local'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap'
})

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif-4',
  display: 'swap'
})

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
  display: 'swap'
})

const josefinSlab = Josefin_Slab({
  subsets: ['latin'],
  variable: '--font-josefin-slab',
  display: 'swap'
})

// For Silkscreen and Bungee, which are not available in next/font/google
const silkscreen = localFont({
  src: [
    {
      path: './fonts/Silkscreen-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Silkscreen-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-silkscreen'
})

// For Bungee, which is also not available in next/font/google
const bungee = localFont({
  src: 'public/fonts/Bungee-Regular.ttf',
  variable: '--font-bungee'
})

export const metadata = {
  title: 'BoringSites',
  description: 'Turn your Notion docs quickly into a beautiful SaaS, Apps, Marketplaces, Blogs, Helpdesks – no code required.',
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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} ${sourceSerif4.variable} ${comfortaa.variable} ${josefinSlab.variable} ${silkscreen.variable} ${bungee.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Banner />
        </div>
      </body>
    </html>
  )
}










