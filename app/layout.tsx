import './css/style.css'
import { Inter, Roboto_Mono, Source_Serif_4, Comfortaa, Josefin_Slab } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '@/components/ui/header'
import Hero from '@/components/hero'
import Banner from '@/components/banner'
import SchemaMarkup from '@/components/SchemaMarkup'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono', display: 'swap' });
const sourceSerif4 = Source_Serif_4({ subsets: ['latin'], variable: '--font-source-serif-4', display: 'swap' });
const comfortaa = Comfortaa({ subsets: ['latin'], variable: '--font-comfortaa', display: 'swap' });
const josefinSlab = Josefin_Slab({ subsets: ['latin'], variable: '--font-josefin-slab', display: 'swap' });
const silkscreen = localFont({
  src: [{ path: '../public/fonts/Silkscreen-Regular.ttf', weight: '400', style: 'normal' }],
  variable: '--font-silkscreen'
});
const bungee = localFont({ src: '../public/fonts/Bungee-Regular.ttf', variable: '--font-bungee' });
const funneldisplay = localFont({ src: '../public/fonts/FunnelDisplay-VariableFont_wght.ttf', variable: '--font-funneldisplay' });

export const metadata = {
  metadataBase: new URL('https://wondersites.co'),
  title: 'Wonder: Notion to Blog, Helpdesk & Marketplace Sites (No-Code & SEO-friendly)',
  description: 'Create superfast websites with Notion as your CMS. Go from Notion to Blog, Helpdesk, Documentation, Marketplace or Directory in minutes. Build unlimited sites!',
  alternates: {
    canonical: 'https://wondersites.co',
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const canonicalUrl = 'https://wondersites.co';
  return (
    <html lang="en">
      <head>
        {/* Hardcoded canonical link for extra assurance */}
        <link rel="canonical" href={canonicalUrl} />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} ${sourceSerif4.variable} ${comfortaa.variable} ${josefinSlab.variable} ${silkscreen.variable} ${bungee.variable} ${funneldisplay.variable} bg-gray-50 font-inter antialiased text-slate-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {/* You might include a global header here if needed */}
          {children}
          <Banner />
          <SchemaMarkup />
        </div>
      </body>
    </html>
  )
}
