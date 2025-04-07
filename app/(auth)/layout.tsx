import Footer from "@/components/ui/footer"
import Newsletter from "@/components/newsletter"

import Image from 'next/image'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
  <>
    <main className="grow bg-gray-50">

{children}


</main>
<Newsletter />
<Footer />
  </>
  )
}
