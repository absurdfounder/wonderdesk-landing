'use client'

import { usePathname } from 'next/navigation'
import Footer from '@/components/ui/footer'
import Newsletter from '@/components/newsletter'
import SectionShell from '@/components/ui/SectionShell'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideNewsletter = pathname === '/wonder-auth'

  return (
    <>
      <main className="grow bg-gray-50">{children}</main>
      {!hideNewsletter ? (
        <SectionShell eyebrow="Get started" eyebrowNumber="05" bgClass="bg-white" noBorderBottom={false}>
          <Newsletter />
        </SectionShell>
      ) : null}
      <Footer />
    </>
  )
}
