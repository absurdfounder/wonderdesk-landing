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
            <div className="max-w-3xl mx-auto text-center pt-12 mb-8 ">
              <h1 className="h2 mb-4">
              Built with features specific for <span className="font-source-serif-4 block font-normal text-orange-600">startups and solo-founders.</span>
            </h1>

              <p className="text-xl text-gray-600">We know you have too much on your plate, this is why Boring Sites exists to help you set and forget. <span className="font-source-serif-4 font-normal text-orange-600 border-b">Just focus on writing </span>.</p>
            </div>


            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              {/* 1st item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2" 
                width={150}
                height={150}
                src="/images/feature-aibots.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">AI-Powered</h4>
                  <p className="text-gray-600 text-center">Build a website or make changes with prompts.</p>
                </div>
              </div>

              {/* 2nd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2"
                width={150}
                height={150}
                src="/images/feature_lovespayment.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Accept Payments</h4>
                  <p className="text-gray-600 text-center">Accept payments with secure Stripe</p>
                </div>
              </div>

              {/* 3rd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2"
                width={150}
                height={150}
                src="/images/feature_handsfree.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">100% No Code</h4>
                  <p className="text-gray-600 text-center">No need to code to build a powerful website.</p>
                </div>
              </div>

              {/* 4th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" 
                width={150}
                height={150}
                className="mb-2" src="/images/feature_beautifuldesigns.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">UI & UX-Ready</h4>
                  <p className="text-gray-600 text-center">No need to be a designer.</p>
                </div>
              </div>

              {/* 5th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2" 
                width={150}
                height={150}
                src="/images/feature_customcode.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Custom Code</h4>
                  <p className="text-gray-600 text-center">If you need more, you can add custom code.</p>
                </div>
              </div>

              {/* 6th item */}


              {/* 7th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2" 
                width={150}
                height={150}
                src="/images/feature_customdomain.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Your Domain</h4>
                  <p className="text-gray-600 text-center">Your site your address.</p>
                </div>
              </div>

              {/* 8th item */}


              {/* 9th item */}



            </div>
          </section>

          <div className="max-w-xs mx-auto sm:max-w-none sm:flex aos-init aos-animate mt-6 justify-center py-12" data-aos="zoom-y-out" data-aos-delay="300">
              <div><Link className="btn text-dark text-2xl bg-orange-600 hover:bg-orange-600 hover:text-orange-100 w-full mb-4 sm:w-auto sm:mb-0 flex items-center justify-center" href="https://app.BoringSites.com">Create a Site</Link></div>
              <div><Link href="#template-section" className="btn text-black text-2xl border-gray-900 hover:bg-gray-800 hover:text-white w-full sm:w-auto sm:ml-4 flex items-center justify-center">Sites built on BoringSites</Link></div>
            </div>

            <section className="bg-white">
    <div className="">
        <div className="flex flex-col items-start space-y-6 lg:space-y-8 xl:space-y-10">
            <div className="bg-white shadow-sm ring-1 ring-inset ring-gray-200 rounded-3xl xl:sticky xl:top-20">
                <div className="grid grid-cols-1 items-center -space-y-12 lg:grid-cols-2 lg:space-y-0">
                    <div className="p-8 sm:p-12 lg:p-16">
                        <p className="text-sm font-bold uppercase tracking-wide text-orange-600">Your content</p>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">
                            Your content <span className="font-source-serif-4 font-normal text-orange-600">lives inside Notion</span>
                        </h3>
                        <p className="text-base font-normal text-gray-700 mt-4">
                            Your work stays in a place you control and love, while BoringSites handles the technical parts of publishing it to your website. This means you can focus what's actually important to you: creating content and building your brand without worrying about configurations, plugins, downtime, performance, or security.
                        </p>
                    </div>
                    <div>
                        <img className="w-full object-cover rounded" src="https://dazzling-cat.netlify.app/write%20on%20notion.png" alt="Write on Notion" />
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-sm ring-1 ring-inset ring-gray-200 rounded-3xl xl:sticky xl:top-20">
                <div className="grid grid-cols-1 items-center -space-y-12 lg:grid-cols-2 lg:space-y-0 min-h-96">
                    <div className="p-8 sm:p-12 lg:p-16">
                        <p className="text-sm font-bold uppercase tracking-wide text-orange-600">Easy customization</p>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">
                            Easy customization to <span className="font-source-serif-4 font-normal text-orange-600">your brand</span>
                        </h3>
                        <p className="text-base font-normal text-gray-700 mt-4">
                            Style the look and feel of your site with no-code themes and designer templates. Everything can be customized inside BoringSites without code to make you proud of the unique site you share with the world. Add custom-code only if you want to.
                        </p>
                    </div>
                    <div>
                        <img className="w-full object-cover rounded" src="https://dazzling-cat.netlify.app/notion%20to%20website.png" alt="Notion to Website" />
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-sm ring-1 ring-inset ring-gray-200 rounded-3xl xl:sticky xl:top-20">
                <div className="grid grid-cols-1 items-center -space-y-12 lg:grid-cols-2 lg:space-y-0">
                    <div className="p-8 sm:p-12 lg:p-16">
                        <p className="text-sm font-bold uppercase tracking-wide text-orange-600">In-built</p>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">
                            In-built <span className="font-source-serif-4 font-normal text-orange-600">analytics</span>
                        </h3>
                        <p className="text-base font-normal text-gray-700 mt-4">
                            See your page views, visitors, referrers, clicks, and much more for all of your websites. BoringSites provides Inbuilt analytics for all your sites to help you find out where people are finding your blog, which links people are clicking the most, which of your posts are popular.
                        </p>
                    </div>
                    <div>
                        <img className="w-full object-cover rounded" src="https://dazzling-cat.netlify.app/analyticsseo.png" alt="Analytics SEO" />
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-sm ring-1 ring-inset ring-gray-200 rounded-3xl xl:sticky xl:top-20">
                <div className="grid grid-cols-1 items-center -space-y-12 lg:grid-cols-2 lg:space-y-0">
                    <div className="p-8 sm:p-12 lg:p-16">
                        <p className="text-sm font-bold uppercase tracking-wide text-orange-600">Optimized for</p>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">
                            Optimized for <span className="font-source-serif-4 font-normal text-orange-600">SEO</span>
                        </h3>
                        <p className="text-base font-normal text-gray-700 mt-4">
                            All you have to do is to write good content that satisfies the needs of your readers. We take care of the rest. Set all the proper meta tags and canonical links, Structured Schema markup for all your posts, Served from the edge to make the blog super fast, Easy controls to override the SEO settings.
                        </p>
                    </div>
                    <div>
                        <img className="w-full object-cover rounded" src="https://dazzling-cat.netlify.app/performancewebsite.png" alt="Performance Website" />
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-sm ring-1 ring-inset ring-gray-200 rounded-3xl xl:sticky xl:top-20">
                <div className="grid grid-cols-1 items-center -space-y-12 lg:grid-cols-2 lg:space-y-0">
                    <div className="p-8 sm:p-12 lg:p-16">
                        <p className="text-sm font-bold uppercase tracking-wide text-orange-600">Integrates with</p>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">
                            Integrates with <span className="font-source-serif-4 font-normal text-orange-600">your existing apps</span>
                        </h3>
                        <p className="text-base font-normal text-gray-700 mt-4">
                            BoringSites integrates with the tools you already use. Connect to Slack for notifications, embed your live chat widget from Intercom, Hubspot, Crisp and more. Need your app connected to BoringSites? We got you covered.
                        </p>
                    </div>
                    <div>
                        <img className="w-full object-cover rounded" src="https://dazzling-cat.netlify.app/integrationsdb.png" alt="Integrations DB" />
                    </div>
                </div>
            </div>
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