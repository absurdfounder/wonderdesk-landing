import Image from "next/image";
import TestimonialImage from "@/public/images/testimonial.jpg";
import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">
              Trusted by 100's of companies all over the world
            </h2>
            <p className="text-xl text-slate-600" data-aos="zoom-y-out">
              Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar
              mattis blandit libero cursus mattis.
            </p>
          </div>


          <div className="text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 mb-12 lg:gap-x-16 lg:gap-y-8">
              <img alt="Xumm" src="https://dazzling-cat.netlify.app/remotedesk-gray.png" className="h-10 w-auto object-contain" />
              <img alt="Green Got" src="https://dazzling-cat.netlify.app/downtown.png" className="h-12 w-auto object-contain lg:h-20" />
              <img alt="GrowthX" src="https://dazzling-cat.netlify.app/saasboiler-gray.png" className="h-10 w-auto object-contain lg:h-8" />


              <img alt="Beyonk" src="https://dazzling-cat.netlify.app/vcdeal.png" className="h-10 w-auto object-contain lg:h-10" />
              <img alt="Taplio" src="https://dazzling-cat.netlify.app/tinystartups-gray.png" className="h-10 w-auto object-contain lg:h-10" />

              <img alt="Lal10" src="https://dazzling-cat.netlify.app/rightagency-gray.png" className="h-10 w-auto object-contain" />
              <img alt="Indie Worldwide" src="https://dazzling-cat.netlify.app/betterhealth.png" className="h-10 w-auto object-contain lg:h-8" />

            </div>
          </div>


          {/* Testimonials */}
          <div
            className="max-w-3xl mx-auto mt-8 aos-init aos-animate max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none"
            data-aos="zoom-y-out"
          >
            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-xl h-full border">
              {/* Testimonial */}
              <div className="px-12 py-8 pt-12 mx-4 md:mx-0">
                <div className="mb-4">
                  <Image
                    className="relative rounded-full"
                    src="https://d33wubrfki0l68.cloudfront.net/36ee27ca00ba110131c925e463c42c885e523d10/de5f0/assets/images/influencers/corey.png"
                    unoptimized
                    width={50}
                    height={50}
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  I had a blog and use to struggle with markdown, recompiling,
                  and overthinking.{" "}
                  <b className="text-orange-600">
                    {" "}
                    Now, I just write to @NotionHQ, with my website deployed on
                    @BoringSites showing always pin and proper
                  </b>
                  .
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  Corey Haines
                </cite>
                <div className="text-slate-600">
                  <span>CEO & Co-Founder</span>{" "}
                  <Link href="#" className="text-orange-600 hover:underline" >
                    Conversion Factory
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-xl h-full border">
              {/* Testimonial */}
              <div className="px-12 py-8 pt-12 mx-4 md:mx-0">
                <div className="mb-4">
                  <Image
                    className="relative rounded-full"
                    src="https://d33wubrfki0l68.cloudfront.net/c6f92e1ae2769f7cc13d3ece99c16d591564bf4a/7114a/assets/images/influencers/ayush.png"
                    unoptimized
                    width={50}
                    height={50}
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “Getting to build and manage my company helpdesk using notion
                  as a content provider is really slick, it has got{" "}
                  <b className="text-orange-600">
                    our writers focus on what is important.
                  </b>
                  “
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  Ayush
                </cite>
                <div className="text-slate-600">
                  <span>CEO & Co-Founder</span>{" "}
                  <Link href="#" className="text-orange-600 hover:underline" >
                    Indie Master Minds
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-xl h-full border">
              {/* Testimonial */}
              <div className="px-12 py-8 pt-12 mx-4 md:mx-0">
                <div className="mb-4">
                  <Image
                    className="relative rounded-full"
                    src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Ftom.png&optimizer=image"
                    unoptimized
                    width={50}
                    height={50}
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ I've been trying to find a blogging solution that not only
                  is{" "}
                  <b className="text-orange-600">
                    easy to work with but also is SEO ready
                  </b>
                  , BoringSites is worth every penny.“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  Tom
                </cite>
                <div className="text-slate-600">
                  <span>CEO & Co-Founder</span>{" "}
                  <Link href="#" className="text-orange-600 hover:underline" >
                    TweetHunter
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-xl h-full border">
              {/* Testimonial */}
              <div className="px-12 py-8 pt-12 mx-4 md:mx-0">
                <div className="mb-4">
                  <Image
                    className="relative rounded-full"
                    src="https://d33wubrfki0l68.cloudfront.net/75af78aa9bf70a1c124768d0b60e37a5cd1bd9b7/11cb5/assets/images/influencers/alex.png"
                    unoptimized
                    width={50}
                    height={50}
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ Since migrating to BoringSites, our recruitment marketing
                  agency has bypassed the need to outsource web development,{" "}
                  <b className="text-orange-600">
                    attracted bigger clients, and introduced a new revenue
                    stream{" "}
                  </b>
                  .“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  Alex MacCaw
                </cite>
                <div className="text-slate-600">
                  <span>CEO & Co-Founder</span>{" "}
                  <Link href="#" className="text-orange-600 hover:underline" >
                    ClearBit
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-xl h-full border">
              {/* Testimonial */}
              <div className="px-12 py-8 pt-12 mx-4 md:mx-0">
                <div className="mb-4">
                  <Image
                    className="relative rounded-full"
                    src="https://twitter-avatars.s3.us-east-1.amazonaws.com/avatars/adamwathan"
                    unoptimized
                    width={50}
                    height={50}
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “ With limited resources and no in-house developers,{" "}
                  <b className="text-orange-600">
                    our team can easily manage our blog, helpdesk and company
                    wiki faster
                  </b>
                  .“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  Adam Wathan
                </cite>
                <div className="text-slate-600">
                  <span>CEO & Co-Founder</span>{" "}
                  <Link href="#" className="text-orange-600 hover:underline" >
                    Tailwind
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-xl h-full border">
              {/* Testimonial */}
              <div className="px-12 py-8 pt-12 mx-4 md:mx-0">
                <div className="mb-4">
                  <Image
                    className="relative rounded-full"
                    src={TestimonialImage}
                    unoptimized
                    width={50}
                    height={50}
                    alt="Testimonial 01"
                  />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  I needed{" "}
                  <b className="text-orange-600">
                    {" "}
                    a place for quick documentation and AI support that can help
                    people who come looking for support{" "}
                  </b>{" "}
                  , BoringSites solved that for me.
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  Darya Finger
                </cite>
                <div className="text-slate-600">
                  <span>CEO & Co-Founder</span>{" "}
                  <Link href="#" className="text-orange-600 hover:underline" >
                    Floosh
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
