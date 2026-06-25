import Image from 'next/image'
import Link from 'next/link'
import TemplateList from '@/app/(auth)/compare-against/TemplateList'

export default function showcases() {
  return (
    <section
      className="relative bg-white"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(186, 183, 195, 0.6) 0.7px, transparent 0.7px)',
        backgroundSize: '10px 10px',
        backgroundColor: 'rgb(255, 255, 255)',
        backgroundPosition: '0px 0px',
      }}
    >
      <div className="landing-grid-column">
        <div className="landing-grid-pad py-12 md:py-20">
          <TemplateList />
        </div>
      </div>
    </section>
  )
}
