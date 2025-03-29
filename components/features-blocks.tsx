import Image from "next/image";
import Link from "next/link";


export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <section className="mt-2">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pt-12 mb-8 ">
              <h1 className="h2 mb-4">
                Ready for anything,
                <span className="font-source-serif-4 block font-normal text-orange-600">launch faster, make $ right now.</span>
              </h1>

              <p className="text-xl text-slate-600">We know you have too much on your plate, this is why Wonder exists to help you set and forget. <span className="font-source-serif-4 font-normal text-orange-600 border-b">Just focus on writing </span>.</p>
            </div>


            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
              {/* 1st item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2 rounded-full"
                  width={200}
                  height={150}
                  src="/images/feature-aibots.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">AI-Powered</h4>
                  <p className="text-slate-600 text-center w-3/4 m-auto">Build a website or make changes with prompts.</p>
                </div>
              </div>

              {/* 2nd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2 rounded-full"
                  width={200}
                  height={150}
                  src="/images/feature_lovespayment.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Accept Payments</h4>
                  <p className="text-slate-600 text-center w-3/4 m-auto">Accept payments with secure Stripe</p>
                </div>
              </div>

              {/* 3rd item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2 rounded-full"
                  width={200}
                  height={150}
                  src="/images/feature_handsfree.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">100% No Code</h4>
                  <p className="text-slate-600 text-center w-3/4 m-auto">No need to code to build a powerful website.</p>
                </div>
              </div>

              {/* 4th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async"
                  width={200}
                  height={150}
                  className="mb-2 rounded-full" src="/images/feature_beautifuldesigns.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">UI & UX-Ready</h4>
                  <p className="text-slate-600 text-center w-3/4 m-auto">No need to be a designer.</p>
                </div>
              </div>

              {/* 5th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2 rounded-full"
                  width={200}
                  height={150}
                  src="/images/feature_customcode.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Custom Code</h4>
                  <p className="text-slate-600 text-center w-3/4 m-auto">If you need more, you can add custom code.</p>
                </div>
              </div>

              {/* 6th item */}


              {/* 7th item */}
              <div className="relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl text-center h-full border">
                <Image alt="image" loading="lazy" decoding="async" className="mb-2 rounded-full"
                  width={200}
                  height={150}
                  src="/images/feature_customdomain.png" />
                <div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Your Domain</h4>
                  <p className="text-slate-600 text-center w-3/4 m-auto">Your site your address.</p>
                </div>
              </div>

              {/* 8th item */}


              {/* 9th item */}



            </div>
          </section>



        </div>
      </div>

      <br />
      <br />
    </section>

  )
}