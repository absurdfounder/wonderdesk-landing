import Image from 'next/image'
import showcaseImage from '@/public/images/showcase.jpg'
import Link from 'next/link'
import TemplateList from '@/app/(auth)/compare-against/TemplateList'

export default function showcases() {
  return (


    <section className="relative">



      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">




<TemplateList/>





        </div>
      </div>
    </section>


  )
}