'use client'

import Image from 'next/image'
import Logo from '@/public/images/logonew-black.png'
import Link from 'next/link';
import { useState } from 'react';

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
<div className="text-xs md:text-sm text-slate-600 mb-8">
              <Link href="/terms" className="text-slate-600 hover:text-slate-900 hover:underline transition duration-150 ease-in-out">Terms</Link> · <Link href="/privacy" className="text-slate-600 hover:text-slate-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</Link>
            </div>
          </div>

          {/* Footer link sections - Collapsible on mobile */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Product section */}
            <FooterSection title="Product">
              <ul className="text-sm space-y-2 md:mt-4">
                <li>
                  <Link href="https://app.wondersites.co" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">WonderBuilder</Link>
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
                {/* Show limited links on mobile */}
                <li className="md:block">
                  <Link href="/migrating-to-wonder-sites" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Migrate to Wonder Sites</Link>
                </li>
                <li className="md:block">
                  <Link href="/agency" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Hire Experts</Link>
                </li>
                <li className="md:block">
                  <Link href="/create-a-chrome-extension" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Generate Chrome Extension</Link>
                </li>

                {/* View more button on mobile */}
                <li className="pt-2 md:hidden">
                  <Link href="#" className="text-orange-600 hover:text-orange-800 font-medium">
                    View all products →
                  </Link>
                </li>
              </ul>
            </FooterSection>

            {/* Resources section */}
            <FooterSection title="Resources">
              <ul className="text-sm space-y-2 md:mt-4">
                <li>
                  <Link href="/compare-against/WonderSites-vs-wix" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Wix</Link>
                </li>
                <li>
                  <Link href="/compare-against/WonderSites-vs-webflow" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Webflow</Link>
                </li>
                <li>
                  <Link href="/compare-against/WonderSites-vs-wordpress" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with WordPress</Link>
                </li>
                <li>
                  <Link href="/compare-against/WonderSites-vs-squarespace" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Squarespace</Link>
                </li>
                <li>
                  <Link href="/compare-against/WonderSites-vs-zendesk" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Zendesk</Link>
                </li>
                {/* Show limited links on mobile */}
                <li className="md:block">
                  <Link href="/compare-against/WonderSites-vs-ghost" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Compare with Ghost</Link>
                </li>
                {/* View more button on mobile */}
                <li className="pt-2 md:hidden">
                  <Link href="#" className="text-orange-600 hover:text-orange-800 font-medium">
                    View all resources →
                  </Link>
                </li>
              </ul>
            </FooterSection>

            {/* Sites by Bear section */}
            <FooterSection title="Sites by Bear 🐻">
              <ul className="text-sm space-y-2 md:mt-4">
                <li>
                  <Link href="https://blockchaingrants.org?ref=Wonder" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Blockchain Grants</Link>
                </li>
                <li>
                  <Link href="https://blockchaingrants.org?ref=Wonder" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Airdrops Work</Link>
                </li>
                <li>
                  <Link href="https://blockchaingrants.org?ref=Wonder" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Solo Story</Link>
                </li>
                <li>
                  <Link href="https://blockchaingrants.org?ref=Wonder" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Funded Startups</Link>
                </li>
                <li>
                  <Link href="https://blockchaingrants.org?ref=Wonder" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Remote Desk</Link>
                </li>
                <li>
                  <Link href="https://blockchaingrants.org?ref=Wonder" className="text-slate-600 hover:text-slate-900 transition duration-150 ease-in-out">Agency marketplace</Link>
                </li>
              </ul>
            </FooterSection>

          </div>
        </div>

        {/* Bottom area */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">
          {/* Copyrights note */}
          <div className="text-xs md:text-sm text-slate-600 mb-4 md:mb-0 order-2 md:order-1 flex xs:grid gap-4">
            &copy; Boring Sites LLC. All rights reserved.  <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
             
          </div>



          {/* Social links */}
          <ul className="flex flex-wrap mb-4 md:mb-0 order-1 md:order-2 gap-3">
          <img width="199" height="35" src="https://buildform.ai/wp-content/uploads/2024/09/Frame-2147225210.svg" className="attachment-large size-large wp-image-928" alt=""/>


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

      </div>
    </footer>
  )
}