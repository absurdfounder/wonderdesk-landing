'use client'

import Image from 'next/image'
import Logo from '@/public/images/logonew-black.png'
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, HelpCircle, BookOpen, ShoppingBag, Lock, AlignLeft, ArrowRight, LucideIcon } from 'lucide-react';


// Create collapsible section component for mobile
const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 md:border-none">
      <button
        className="flex w-full justify-between items-center py-3 md:py-0 md:cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h6 className="text-slate-800 font-medium text-left">{title}</h6>
        <span className="md:hidden">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
          )}
        </span>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        {children}
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="py-8 md:py-12 border-t border-slate-200">

          {/* Company info - Always visible */}
          <div className="mb-8 md:mb-0">
            <Link href={"/"} className="inline-block mb-4">
              <div className='flex gap-2'>
                <Image src={Logo} loading='eager' alt="Logo" width={160} height={160} className="w-auto h-fit m-auto max-w-[160px]" />
              </div>
            </Link>
            <p className="text-sm text-slate-600 mb-4">Wonder is an easy-to-use website builder for busy founders. Lead by <Link href="https://twitter.com/absurdfounder" className='text-orange-600 hover:underline'>@absurdfounder</Link>.</p>
            <p className='mb-3 text-xs text-slate-400'>Wonder is the biggest admirer of Notion™ , no-relation, just admiration.</p>


<div className="flex gap-2 sm:gap-4 my-4">
  <a
    href="https://bags.fm/FpTvUc2MuoeegL8Tw1QjY8wwBACv7sg5u7gN3yG2BAGS"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-zinc-900 text-green-500 border border-green-500/20 font-medium px-3 sm:px-4 py-2 rounded-md hover:bg-black hover:border-green-500 transition-all duration-300 flex items-center justify-center text-sm sm:text-base group"
  >
    View <b className="px-2">$WONDER</b> on
    
    <img 
      src="https://bags.fm/assets/images/bags-icon.png" 
      alt="Bags Logo"
      className="mx-1 sm:mx-2 w-5 h-5 sm:w-6 sm:h-6 object-contain"
    />

    Bags
    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
  </a>
</div>


          <div className="flex gap-2 sm:gap-4 my-4">
            <a 
              href="https://www.notion.com/integrations/wonder-sites" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-800 text-white font-medium px-3 sm:px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center text-sm sm:text-base group"
            >



 <svg xmlns="http://www.w3.org/2000/svg"               width="16" 
              height="16"  fill="#ffffff"  viewBox="12 0.19 487.619 510.941" className="w-5 h-5 mr-2 sm:w-5 sm:h-5"><path d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934L358.186 335.22V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z" fillRule="evenodd"></path></svg>


              Notion Certified  <b className="px-2">Partner</b>
                
            </a>

          </div>

            <div className="text-xs md:text-sm text-slate-600 mb-8">
              <Link href="/terms" className="text-slate-600 hover:text-slate-900 hover:underline transition duration-150 ease-in-out">Terms</Link> · <Link href="/privacy" className="text-slate-600 hover:text-slate-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</Link>
            </div>
          </div>

          {/* Footer link sections - Collapsible on mobile */}
          <div className="grid md:grid-cols-4 gap-8">

            {/* Product section */}
            <FooterSection title="Product">
              <ul className="text-sm space-y-2 md:mt-4">
                {/* --- NO CHANGES IN THIS SECTION --- */}
                <li>
                  <Link href="https://app.wonderdesk.ai" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">WonderBuilder</Link>
                </li>
                <li>
                  <Link href="/showcase" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Showcase</Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Blog</Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Changelog</Link>
                </li>
                <li>
                  <Link href="/integration" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Integrations</Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Pricing</Link>
                </li>
                <li className="md:block">
                  <Link href="/migrating-to-wonder-sites" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Migrate to Wonder Sites</Link>
                </li>
                <li className="md:block">
                  <Link href="/agency" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Hire Experts</Link>
                </li>
                <li className="md:block">
                  <Link href="/create-a-chrome-extension" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Generate Chrome Extension</Link>
                </li>
                <li className="pt-2 md:hidden">
                  <Link href="#" className="text-orange-600 hover:text-orange-800 font-medium">
                    View all products →
                  </Link>
                </li>
                {/* --- END NO CHANGES --- */}
              </ul>
            </FooterSection>


{/* Sites by Bear section */}
<FooterSection title="Features">

  {/* Additional features from WonderSites */}
  <ul className="text-sm space-y-2 mt-4">
    <li>
      <Link href="#" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Notion Integrations</Link>
    </li>
    <li>
      <Link href="#" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Blazing Fast Code</Link>
    </li>
    <li>
      <Link href="#" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">AI-Agents</Link>
    </li>
    <li>
      <Link href="#" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Analytics</Link>
    </li>
    <li>
      <Link href="#" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">SEO Ready</Link>
    </li>
    <li>
      <Link href="#" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Custom Domains</Link>
    </li>
    <li>
      <Link href="#" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Payment Integration</Link>
    </li>
    <li>
      <Link href="#" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Forms - Tally Forms</Link>
    </li>

  </ul>
</FooterSection>



            {/* Resources section - ONLY hrefs updated */}
            <FooterSection title="Resources">
              <ul className="text-sm space-y-2 md:mt-4">
                <li>
                  {/* Updated href */}
                  <Link href="/compare-against/WonderSites-vs-wix" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Wix</Link>
                </li>
                <li>
                  {/* Updated href */}
                  <Link href="/compare-against/WonderSites-vs-webflow" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Webflow</Link>
                </li>
                <li>
                  {/* Updated href */}
                  <Link href="/compare-against/WonderSites-vs-wordpress" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with WordPress</Link>
                </li>
                <li>
                  {/* Updated href */}
                  <Link href="/compare-against/WonderSites-vs-squarespace" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Squarespace</Link>
                </li>
                <li>
                  {/* Updated href */}
                  <Link href="/compare-against/WonderSites-vs-zendesk" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Zendesk</Link>
                </li>
                {/* Show limited links on mobile */}
                <li className="md:block">
                  {/* Updated href */}
                  <Link href="/compare-against/WonderSites-vs-ghost" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Ghost</Link>
                </li>
                {/* --- Add static links for the remaining IDs from your JSON --- */}
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-shopify" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Shopify</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-intercom" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Intercom</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-gitbook" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with GitBook</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-framer" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Framer</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-joomla" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Joomla</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-medium" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Medium</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-confluence" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Confluence</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-super" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Super.so</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-carrd" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Carrd</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-bubble" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Bubble</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-bigcommerce" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with BigCommerce</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-helpscout" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Help Scout</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-substack" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Substack</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-duda" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Duda</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-featurebase" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with FeatureBase</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-freshdesk" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Freshdesk</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-beehiiv" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Beehiiv</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-softr" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Softr</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-canny" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Canny</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-notion-sites" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Notion Sites</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-glide" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Glide</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-convertkit" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with ConvertKit</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-gorgias" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Gorgias</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-woocommerce" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with WooCommerce</Link> {/* Assuming text, update if needed */}
                </li>
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-slab" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Slab</Link> {/* Assuming text, update if needed */}
                </li>
                {/* --- End of added static links --- */}

                {/* View more button on mobile (kept original structure) */}
                <li className="pt-2 md:hidden">
                  <Link href="#" className="text-orange-600 hover:text-orange-800 font-medium">
                    View all resources →
                  </Link>
                </li>
              </ul>
            </FooterSection>

            {/* Sites by Bear section */}
            <FooterSection title="Create Sites">
              {/* --- NO CHANGES IN THIS SECTION --- */}
              <ul className="text-sm space-y-2 md:mt-4">
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-website-like-amazon" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create website like Amazon</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-website-like-apple" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create website like Apple</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-website-like-youtube" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create website like YouTube</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-website-like-facebook" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create website like Facebook</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-website-like-omegle" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create website like Omegle</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-website-like-w3schools" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create website like W3Schools</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-website-like-indiamart" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create website like IndiaMart</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-website-like-wikipedia" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create website like Wikipedia</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-website-like-9jaflaver" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create website like 9jaflaver</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-website-like-application" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create website like application</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-make-website-like-airbnb" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to make website like Airbnb</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-make-website-like-awwwards" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to make website like Awwwards</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-make-website-like-alibaba" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to make website like Alibaba</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-make-website-like-apkpure" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to make website like APKPure</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-make-website-like-ebay" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to make website like eBay</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-a-website-like-etsy" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create a website like Etsy</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-make-website-like-instagram" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to make website like Instagram</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-a-website-like-instagram" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create a website like Instagram</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-a-website-like-indeed" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create a website like Indeed</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-a-website-like-imdb" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create a website like IMDB</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-a-website-like-justdial" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create a website like Justdial</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-a-website-like-jumia" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create a website like Jumia</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-a-website-like-jiji" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create a website like Jiji</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-a-website-like-khan-academy" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create a website like Khan Academy</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-do-i-create-a-site-on-sharepoint" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How do I create a site on SharePoint</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-do-i-create-a-website-on-google" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How do I create a website on Google</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-make-website-like-vistaprint" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to make website like Vistaprint</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-a-website-like-vinted" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create a website like Vinted</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-make-a-website-like-wikipedia" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to make a website like Wikipedia</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-make-website-like-zomato" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to make website like Zomato</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-make-website-like-zoro" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to make website like Zoro</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-a-website-like-zillow" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create a website like Zillow</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-a-website-like-zomato" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create a website like Zomato</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-do-i-create-zoom-meeting-link" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How do I create Zoom meeting link</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-a-website-like-craigslist" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create a website like Craigslist</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-a-website-like-angies-list" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create a website like Angie's list</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-a-website-like-product-hunt" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create a website like Product Hunt</Link></li>
                <li><Link href="https://wonderdesk.ai/blog/how-to-create-a-website-like-fiverr" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">How to create a website like Fiverr</Link></li>
              </ul>
              {/* --- END NO CHANGES --- */}
            </FooterSection>

          </div>
        </div>

        {/* Bottom area */}
        {/* --- NO CHANGES IN THIS SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">
          {/* Copyrights note */}
          <div className="text-xs md:text-sm text-slate-600 mb-4 md:mb-0 order-2 md:order-1 flex xs:grid gap-4">
            &copy; Boring Sites LLC. All rights reserved.  <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>

          </div>

          {/* Social links */}
          <ul className="flex flex-wrap mb-4 md:mb-0 order-1 md:order-2 gap-3">
            <img width="199" height="35" src="https://buildform.ai/wp-content/uploads/2024/09/Frame-2147225210.svg" className="attachment-large size-large wp-image-928" alt="" />


            <li>
              <Link href="https://twitter.com/absurdfounder" className="flex justify-center items-center text-slate-600 hover:text-slate-900 bg-white hover:bg-white-100 rounded-md shadow transition duration-150 ease-in-out border px-3 py-1 md:px-4 md:py-1 text-sm" aria-label="Twitter">
                <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
                <span className='ml-2 hidden md:inline'>Let's connect on X</span>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/absurdfounder" className="flex justify-center items-center text-slate-600 hover:text-slate-900 bg-white hover:bg-white-100 rounded-md shadow transition duration-150 ease-in-out border px-3 py-1 md:px-4 md:py-1 text-sm" aria-label="Github">
                <svg className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
                <span className='ml-2 hidden md:inline'>Track my commits</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* --- END NO CHANGES --- */}

      </div>




    </footer>
  )
}