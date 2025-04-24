'use client'

import { useEffect } from 'react'
import PlausibleProvider from 'next-plausible'
import Script from 'next/script'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '@/components/ui/footer'
import Newsletter from '@/components/newsletter'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <PlausibleProvider domain="wondersites.co">
      {/* Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FKXTBWH4RE" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FKXTBWH4RE');
        `}
      </Script>

      {/* Microsoft Clarity */}
      <Script id="clarity-script" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "mm5deyus4u");
        `}
      </Script>

      {/* Tailwind-styled Google Translate Switcher */}
      <LanguageSwitcher />

      {/* Main Content */}
      <main className="grow bg-gray-50">
        {children}
      </main>

      <Newsletter />
      <Footer />
    </PlausibleProvider>
  )
}
