import Image from "next/image";
import Link from "next/link";


export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div>
          <section className="mt-2">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pt-12 ">
              <h1 className="h2 mb-4">
              Built with features specific for <span className="font-source-serif-4 block font-normal text-orange-600">startups and solo-founders.</span>
            </h1>

              <p className="text-xl text-gray-600">We know you have too much on your plate, this is why Boring Sites exists to help you set and forget. <span className="font-source-serif-4 font-normal text-orange-600 border-b">Just focus on writing </span>.</p>
            </div>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex aos-init aos-animate mt-6 justify-center py-12" data-aos="zoom-y-out" data-aos-delay="300">
              <div><Link className="btn text-dark bg-orange-600 hover:bg-orange-200 hover:text-orange-800 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.BoringSites.com">Get Started</Link></div>
              <div><Link href="#template-section" className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4">Sites built on BoringSites</Link></div>
            </div>

            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              {/* 1st item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2" 
                width={100}
                height={100}
                src="/images/feature-aibots.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">AI-Powered</h4>
                  <p className="text-gray-600 text-center">Build a website or make changes with prompts.</p>
                </div>
              </div>

              {/* 2nd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2"
                width={100}
                height={100}
                src="/images/feature_lovespayment.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Accept Payments</h4>
                  <p className="text-gray-600 text-center">Accept payments with secure Stripe</p>
                </div>
              </div>

              {/* 3rd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2"
                width={100}
                height={100}
                src="/images/feature_handsfree.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">100% No Code</h4>
                  <p className="text-gray-600 text-center">No need to code to build a powerful website.</p>
                </div>
              </div>

              {/* 4th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" 
                width={100}
                height={100}
                className="mb-2" src="/images/feature_beautifuldesigns.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">UI & UX-Ready</h4>
                  <p className="text-gray-600 text-center">No need to be a designer.</p>
                </div>
              </div>

              {/* 5th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2" 
                width={100}
                height={100}
                src="/images/feature_customcode.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Custom Code</h4>
                  <p className="text-gray-600 text-center">If you need more, you can add custom code.</p>
                </div>
              </div>

              {/* 6th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" 
                width={100}
                height={100}
                className="mb-2" src="/images/feature_analytics.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Full Analytics</h4>
                  <p className="text-gray-600 text-center">Know how your website performs.</p>
                </div>
              </div>

              {/* 7th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2" 
                width={100}
                height={100}
                src="/images/feature_customdomain.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Your Domain</h4>
                  <p className="text-gray-600 text-center">Your site your address.</p>
                </div>
              </div>

              {/* 8th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2" 
                width={100}
                height={100}
                src="/images/feature_teams.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Perfect for Teams</h4>
                  <p className="text-gray-600 text-center">Collaborate together as a team.</p>
                </div>
              </div>

              {/* 9th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2" 
                width={100}
                height={100}
                src="/images/feature_gatedcontent.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Gated Content</h4>
                  <p className="text-gray-600 text-center">Protect your content behind a paywall.</p>
                </div>
              </div>


            </div>
          </section>

          <section className="py-12 mt-8 mb-8 md:flex sm:grid">

            <div className="md:w-1/2 sm:w-full">
              <div className="text-start mt-6 w-full p-4">
                <h2 className="h2 font-bold mb-4">Your content <span className="font-source-serif-4 font-normal text-orange-600">lives inside Notion</span></h2>
                <p className="text-gray-700">
                  Your work stays in a place you control and love, while BoringSites handles the technical parts of publishing it to your website. This means you can focus what’s actually important to you: creating content and building
                  your brand without worrying about configurations, plugins, downtime, performance, or security.
                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex aos-init aos-animate mt-6" data-aos="zoom-y-out" data-aos-delay="300">
                  <div><Link className="btn text-dark bg-orange-600 hover:bg-orange-200 hover:text-orange-800 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.BoringSites.com">Get Started</Link></div>
                </div>
              </div>
            </div>

            <div className="flex justify-start mt-6 md:w-1/2 sm:w-full rounded">
              <div >
                <Image
                  alt="image"
                  loading="lazy"
                  width={80}
                  height={100}
                  decoding="async"
                  className="w-full rounded"
                  src="https://dazzling-cat.netlify.app/write%20on%20notion.png"
                  unoptimized
                />
              </div>
            </div>
          </section>

          <section className="py-12 mt-8 mb-8 md:flex sm:grid">

            <div className="md:w-1/2 sm:w-full">
              <div className="text-start mt-6 w-full p-4">
                <h2 className="h2 font-bold mb-4">Customize to <span className="font-source-serif-4 font-normal text-orange-600">your brand</span></h2>
                <p className="text-gray-700">
                  Style the look and feel of your site with no-code themes and designer templates. Everything can be customized inside BoringSites without code to make you proud of the unique site you share with the world. Add
                  custom-code only if you want to.
                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex aos-init aos-animate mt-6" data-aos="zoom-y-out" data-aos-delay="300">
                  <div><Link className="btn text-dark bg-orange-600 hover:bg-orange-200 hover:text-orange-800 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.BoringSites.com">Get Started</Link></div>
                </div>
              </div>
            </div>

            <div className="flex justify-start mt-6 md:w-1/2 sm:w-full rounded">
              <div >
                <Image
                  alt="image"
                  loading="lazy"
                  decoding="async"
                  width={80}
                  height={100}
                  className="w-full rounded"
                  src="https://dazzling-cat.netlify.app/notion to website.png"
                  unoptimized
                />
              </div>
            </div>
          </section>

          <section className="py-12 mt-8 mb-8 md:flex sm:grid">
            <div className="md:w-1/2 sm:w-full">
              <div className="text-start mt-6 w-full p-4">
                <h2 className="h2 font-bold mb-4">World-class <span className="font-source-serif-4 font-normal text-orange-600">Performance</span></h2>
                <p className="text-gray-700">
                  Pages load instantly anywhere in the world giving your site visitors a pleasant and snappy experience—they’ll never close the page for taking too long to load. On average BoringSites sites perform better than any
                  industry leading website builder.
                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex aos-init aos-animate mt-6" data-aos="zoom-y-out" data-aos-delay="300">
                  <div><Link className="btn text-dark bg-orange-600 hover:bg-orange-200 hover:text-orange-800 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.BoringSites.com">Get Started</Link></div>
                </div>
              </div>
            </div>

            <div className="flex justify-start mt-6 md:w-1/2 sm:w-full rounded">
              <div >
                <Image
                  alt="image"
                  loading="lazy"
                  decoding="async"
                  width={80}
                  height={100}
                  className="w-full rounded"
                  src="https://dazzling-cat.netlify.app/performancewebsite.png"
                  unoptimized
                />
              </div>
            </div>
          </section>

          <section className="py-12 mt-8 mb-8 md:flex sm:grid">
            <div className="md:w-1/2 sm:w-full">
              <div className="text-start mt-6 w-full p-4">
                <h2 className="h2 font-bold mb-4">In-built <span className="font-source-serif-4 font-normal text-orange-600">analytics</span></h2>
                <p className="text-gray-700">
                  See your page views, visitors, referrers, clicks, and much more for all of your websites. BoringSites provides Inbuilt analytics for all your sites tp help ou find out where people are finding your blog, which links people are clicking the most, which of your posts are popular.
                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex aos-init aos-animate mt-6" data-aos="zoom-y-out" data-aos-delay="300">
                  <div><Link className="btn text-dark bg-orange-600 hover:bg-orange-200 hover:text-orange-800 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.BoringSites.com">Get Started</Link></div>
                </div>
              </div>
            </div>

            <div className="flex justify-start mt-6 md:w-1/2 sm:w-full rounded">
              <div >
                <Image
                  alt="image"
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded"
                  width={80} height={100}
                  src="https://dazzling-cat.netlify.app/analyticsseo.png"
                  unoptimized
                />
              </div>
            </div>
          </section>

          <section className="py-12 mt-8 mb-8 md:flex sm:grid">
            <div className="md:w-1/2 sm:w-full">
              <div className="text-start mt-6 w-full p-4">
                <h2 className="h2 font-bold mb-4">Optimized for <span className="font-source-serif-4 font-normal text-orange-600">SEO</span></h2>
                <p className="text-gray-700">


                  All you have to do is to write good content that satisfies the needs of your readers. We take care of the rest. Set all the proper meta tags and canonical links, Structured Schema markup for all your posts, Served from the edge to make the blog super fast, Easy controls to override the SEO settings.

                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex aos-init aos-animate mt-6" data-aos="zoom-y-out" data-aos-delay="300">
                  <div><Link className="btn text-dark bg-orange-600 hover:bg-orange-200 hover:text-orange-800 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.BoringSites.com">Get Started</Link></div>
                </div>
              </div>
            </div>
            <div className="flex justify-start mt-6 md:w-1/2 sm:w-full rounded">
              <div >
                <Image
                  alt="image"
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded"
                  width={80} height={100}
                  src="https://dazzling-cat.netlify.app/seograph.png"
                  unoptimized
                />
              </div>
            </div>
          </section>

          <section className="py-12 mt-8 mb-8 md:flex sm:grid">
            <div className="md:w-1/2 sm:w-full">
              <div className="text-start mt-6 w-full p-4">
                <h2 className="h2 font-bold mb-4">Integrates with  <span className="font-source-serif-4 font-normal text-orange-600">your existing apps</span></h2>
                <p className="text-gray-700">
                  BoringSites integrates with the tools you already use. Connect to Slack for notifications, embed your live chat widget from Intercom, Hubspot, Crisp and more. Need your app connected to BoringSites? We got you covered.
                </p>
                <div className="max-w-xs mx-auto sm:max-w-none sm:flex aos-init aos-animate mt-6" data-aos="zoom-y-out" data-aos-delay="300">
                  <div><Link className="btn text-dark bg-orange-600 hover:bg-orange-200 hover:text-orange-800 w-full mb-4 sm:w-auto sm:mb-0" href="https://app.BoringSites.com">Get Started</Link></div>
                </div>
              </div>
            </div>
            <div className="flex justify-start mt-6 md:w-1/2 sm:w-full rounded">
              <div >
                <Image
                  alt="image"
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded"
                  width={80} height={100}
                  src="https://dazzling-cat.netlify.app/integrationsdb.png"
                  unoptimized
                />
              </div>
            </div>
          </section>


        </div>
      </div>

      <br />
      <br />
    </section>

  )
}