import Image from "next/image";
import Link from "next/link";


export default function OldWays() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div>


          <section className="bg-white">
            <div className="container mx-auto">
              <div className="flex flex-col items-start space-y-6 lg:space-y-8 xl:space-y-10">
                {/* Your content lives inside Notion */}
                <div className="bg-white rounded-3xl xl:sticky xl:top-20 border h-[600px] overflow-hidden">
                  <div className="grid grid-cols-1 items-center lg:grid-cols-2 m-auto h-full">
                    <div className="p-8 sm:p-12 lg:p-16">
                      <p className="text-sm font-bold uppercase tracking-wide text-orange-600">No Hosting Hassles</p>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">
                        Your content <span className="font-serif font-normal text-orange-600">lives inside Notion</span>
                      </h3>
                      <p className="text-base font-normal text-slate-700 mt-4">
                        Your work stays in a place you control and love, while BoringSites handles the technical parts of publishing it to your website. This means you can focus on what's actually important to you: creating content and building your brand without worrying about configurations, plugins, downtime, performance, or security.
                      </p>
                    </div>
                    <div className="align-content-center py-8">

                      <img className=" w-full h-fit m-auto p-2" src="https://dazzling-cat.netlify.app/write%20on%20notion.png" alt="Write on Notion" />
                    </div>
                  </div>
                </div>

                {/* Optimized for SEO */}
                <div className="bg-white rounded-3xl xl:sticky xl:top-20 border h-[600px] overflow-hidden">
                  <div className="grid grid-cols-1 items-center lg:grid-cols-2 m-auto h-full">
                    <div className="p-8 sm:p-12 lg:p-16">
                      <p className="text-sm font-bold uppercase tracking-wide text-orange-600">Optimized for</p>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">
                        Perfected for <span className="font-serif font-normal text-orange-600">SEO</span>
                      </h3>
                      <p className="text-base font-normal text-slate-700 mt-4">
                        All you have to do is to write good content that satisfies the needs of your readers. We take care of the rest. Set all the proper meta tags and canonical links, Structured Schema markup for all your posts, Served from the edge to make the blog super fast, Easy controls to override the SEO settings.
                      </p>
                    </div>
                    <div className="align-content-center py-8">

                      <img className=" w-full h-fit m-auto p-2" src="https://dazzling-cat.netlify.app/performancewebsite.png" alt="Performance Website" />
                    </div>
                  </div>
                </div>


                {/* Easy customization */}
                <div className="bg-white rounded-3xl xl:sticky xl:top-20 border h-[600px] overflow-hidden">
                  <div className="grid grid-cols-1 items-center lg:grid-cols-2 m-auto h-full">
                    <div className="p-8 sm:p-12 lg:p-16">
                      <p className="text-sm font-bold uppercase tracking-wide text-orange-600">Paid Subscribers</p>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">
                        Membership for <span className="font-serif font-normal text-orange-600">paid subscribers.</span>
                      </h3>
                      <p className="text-base font-normal text-slate-700 mt-4">
                        Style the look and feel of your site with no-code themes and designer templates. Everything can be customized inside BoringSites without code to make you proud of the unique site you share with the world. Add custom-code only if you want to.
                      </p>
                    </div>
                    <div className=" align-content-center py-8">

                      <img className=" w-full h-fit m-auto p-2" src="https://dazzling-cat.netlify.app/notion%20to%20website.png" alt="Notion to Website" />
                    </div>
                  </div>
                </div>

                {/* In-built analytics */}
                <div className="bg-white rounded-3xl xl:sticky xl:top-20 border h-[600px] overflow-hidden">
                  <div className="grid grid-cols-1 items-center lg:grid-cols-2 m-auto h-full">
                    <div className="p-8 sm:p-12 lg:p-16">
                      <p className="text-sm font-bold uppercase tracking-wide text-orange-600">In-built</p>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">
                        In-built <span className="font-serif font-normal text-orange-600">analytics</span>
                      </h3>
                      <p className="text-base font-normal text-slate-700 mt-4">
                        See your page views, visitors, referrers, clicks, and much more for all of your websites. BoringSites provides Inbuilt analytics for all your sites to help you find out where people are finding your blog, which links people are clicking the most, which of your posts are popular.
                      </p>
                    </div>
                    <div className="align-content-center py-8">

                      <img className=" w-full h-fit m-auto p-2" src="https://dazzling-cat.netlify.app/analyticsseo.png" alt="Analytics SEO" />
                    </div>
                  </div>
                </div>



                {/* Integrates with your existing apps */}
                <div className="bg-white rounded-3xl xl:sticky xl:top-20 border h-[600px] overflow-hidden">
                  <div className="grid grid-cols-1 items-center lg:grid-cols-2 m-auto h-full">
                    <div className="p-8 sm:p-12 lg:p-16">
                      <p className="text-sm font-bold uppercase tracking-wide text-orange-600">AI SUPPORT & SUGGESTIONS</p>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">
                        Create AI Agents powered <span className="font-serif font-normal text-orange-600">by your content. </span>
                      </h3>
                      <p className="text-base font-normal text-slate-700 mt-4">
                        Create AI Agents for support, suggestions or any other purposes you have in mind. Because it's 2025 and AI is cheap. Make AI do most of work so that you can focus on whats important, which is write on notion. 
                      </p>
                    </div>
                    <div className="align-content-center py-8">

                      <img className=" w-full h-fit m-auto p-2" src="https://dazzling-cat.netlify.app/aisupportreco.png" alt="Integrations DB" />
                    </div>
                  </div>
                </div>

                {/* Integrates with your existing apps */}
                <div className="bg-white rounded-3xl xl:sticky xl:top-20 border h-[600px] overflow-hidden">
                  <div className="grid grid-cols-1 items-center lg:grid-cols-2 m-auto h-full">
                    <div className="p-8 sm:p-12 lg:p-16">
                      <p className="text-sm font-bold uppercase tracking-wide text-orange-600">Integrates with</p>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 mt-4 sm:text-3xl sm:mt-6 lg:text-4xl">
                        Integrates with <span className="font-serif font-normal text-orange-600">your existing apps</span>
                      </h3>
                      <p className="text-base font-normal text-slate-700 mt-4">
                        BoringSites integrates with the tools you already use. Connect to Slack for notifications, embed your live chat widget from Intercom, Hubspot, Crisp and more. Need your app connected to BoringSites? We got you covered.
                      </p>
                    </div>
                    <div className="align-content-center py-8">

                      <img className=" w-full h-fit m-auto p-2" src="https://dazzling-cat.netlify.app/integrationsdb.png" alt="Integrations DB" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="mt-2 bg-slate-900 rounded-2xl pb-12 mb-12 ">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pt-12 mb-8 ">
              <h1 className="h2 mb-4 text-white">
              This Time, You'll Actually Launch
                <span className="font-source-serif-4 block font-normal text-orange-600">Skip the Setup Hell</span>
              </h1>

              <p className="text-xl text-slate-300">We know you have too much on your plate.</p>
            </div>

            <img src="https://dazzling-cat.netlify.app/marry.png" className="max-w-2xl m-auto" />


            <div className="max-w-xs mx-auto sm:max-w-none sm:flex aos-init aos-animate mt-6 justify-center py-12" data-aos="zoom-y-out" data-aos-delay="300">
              <div><Link className="btn text-dark text-2xl bg-orange-600 hover:bg-orange-600 hover:text-orange-100 w-full mb-4 sm:w-auto sm:mb-0 flex items-center justify-center" href="https://app.BoringSites.com">Start from 98% Ready</Link></div>
              <div><Link href="#template-section" className="btn text-white text-2xl border-white hover:bg-slate-800 hover:text-white w-full sm:w-auto sm:ml-4 flex items-center justify-center">Sites built on BoringSites</Link></div>
            </div>

          </section>



        </div>
      </div>

      <br />
      <br />
    </section>

  )
}
