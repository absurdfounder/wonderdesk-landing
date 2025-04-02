import Image from "next/image";
import TestimonialImage from "@/public/images/testimonial.jpg";
import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="relative bg-white">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              startups & founders love us
            </h2>
            <p className="text-xl text-gray-600">
              Our clients range from startups to enterprise companies across diverse industries.
            </p>
          </div>

          {/* Logos */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              <img alt="Xumm" src="https://dazzling-cat.netlify.app/remotedesk-gray.png" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              <img alt="Green Got" src="https://dazzling-cat.netlify.app/downtown.png" className="h-9 opacity-70 hover:opacity-100 transition-opacity" />
              <img alt="GrowthX" src="https://dazzling-cat.netlify.app/saasboiler-gray.png" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              <img alt="Beyonk" src="https://dazzling-cat.netlify.app/vcdeal.png" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              <img alt="Taplio" src="https://dazzling-cat.netlify.app/tinystartups-gray.png" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              <img alt="Lal10" src="https://dazzling-cat.netlify.app/rightagency-gray.png" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
              <img alt="Indie Worldwide" src="https://dazzling-cat.netlify.app/betterhealth.png" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl lg:max-w-none">
            {/* Testimonial 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Image
                  className="rounded-full mr-3"
                  src="https://d33wubrfki0l68.cloudfront.net/36ee27ca00ba110131c925e463c42c885e523d10/de5f0/assets/images/influencers/corey.png"
                  width={48}
                  height={48}
                  alt="Corey Haines"
                />
                <div>
                  <h4 className="font-bold text-lg">Corey Haines</h4>
                  <div className="text-sm text-gray-600">
                    CEO, <Link href="#" className="text-orange-600 hover:underline">Conversion Factory</Link>
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-800 mb-3">
                "I had a blog and use to struggle with markdown, recompiling, and overthinking. <span className="text-orange-600 font-medium">Now, I just write to @NotionHQ, with my website deployed on @Wondershowing always pin and proper</span>."
              </blockquote>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Image
                  className="rounded-full mr-3"
                  src="https://d33wubrfki0l68.cloudfront.net/c6f92e1ae2769f7cc13d3ece99c16d591564bf4a/7114a/assets/images/influencers/ayush.png"
                  width={48}
                  height={48}
                  alt="Ayush"
                />
                <div>
                  <h4 className="font-bold text-lg">Ayush</h4>
                  <div className="text-sm text-gray-600">
                    CEO, <Link href="#" className="text-orange-600 hover:underline">Indie Master Minds</Link>
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-800 mb-3">
                "Getting to build and manage my company helpdesk using notion as a content provider is really slick, it has got <span className="text-orange-600 font-medium">our writers focus on what is important</span>."
              </blockquote>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Image
                  className="rounded-full mr-3"
                  src="https://cdn.feather.blog/?src=https%3A%2F%2Ffeather.so%2Fimages%2Flanding%2Favatars%2Ftom.png&optimizer=image"
                  width={48}
                  height={48}
                  alt="Tom"
                />
                <div>
                  <h4 className="font-bold text-lg">Tom</h4>
                  <div className="text-sm text-gray-600">
                    CEO, <Link href="#" className="text-orange-600 hover:underline">TweetHunter</Link>
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-800 mb-3">
                "I've been trying to find a blogging solution that not only is <span className="text-orange-600 font-medium">easy to work with but also is SEO ready</span>, Wonder  is worth every penny."
              </blockquote>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Image
                  className="rounded-full mr-3"
                  src="https://d33wubrfki0l68.cloudfront.net/75af78aa9bf70a1c124768d0b60e37a5cd1bd9b7/11cb5/assets/images/influencers/alex.png"
                  width={48}
                  height={48}
                  alt="Alex MacCaw"
                />
                <div>
                  <h4 className="font-bold text-lg">Alex MacCaw</h4>
                  <div className="text-sm text-gray-600">
                    CEO, <Link href="#" className="text-orange-600 hover:underline">ClearBit</Link>
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-800 mb-3">
                "Since migrating to Wonder Sites, our recruitment marketing agency has bypassed the need to outsource web development, <span className="text-orange-600 font-medium">attracted bigger clients, and introduced a new revenue stream</span>."
              </blockquote>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Image
                  className="rounded-full mr-3"
                  src="https://twitter-avatars.s3.us-east-1.amazonaws.com/avatars/adamwathan"
                  width={48}
                  height={48}
                  alt="Adam Wathan"
                />
                <div>
                  <h4 className="font-bold text-lg">Adam Wathan</h4>
                  <div className="text-sm text-gray-600">
                    CEO, <Link href="#" className="text-orange-600 hover:underline">Tailwind</Link>
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-800 mb-3">
                "With limited resources and no in-house developers, <span className="text-orange-600 font-medium">our team can easily manage our blog, helpdesk and company wiki faster</span>."
              </blockquote>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Image
                  className="rounded-full mr-3"
                  src={TestimonialImage}
                  width={48}
                  height={48}
                  alt="Darya Finger"
                />
                <div>
                  <h4 className="font-bold text-lg">Darya Finger</h4>
                  <div className="text-sm text-gray-600">
                    CEO, <Link href="#" className="text-orange-600 hover:underline">Floosh</Link>
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-800 mb-3">
                "I needed <span className="text-orange-600 font-medium">a place for quick documentation and AI support that can help people who come looking for support</span>, Wonder solved that for me."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}