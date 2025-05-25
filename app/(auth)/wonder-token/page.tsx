import React, { useState, useEffect } from "react";

import ModalVideo from "@/components/modal-video";
import VideoThumb from "@/public/images/hero-image.png";

import Link from "next/link";
import Image from "next/image";

import TrustedBy from "../compare-against/TrustedBy";
import FeaturesBlocks from "@/components/features-blocks";
import Blog_Type from "@/components/blog_type";

import Testimonials from "@/components/testimonials";
import Header from "@/components/ui/header";

import Aos from "aos";
import 'aos/dist/aos.css'

// Believe Landing Page Component
const BelieveLandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseUrl = 'https://believe.app';

  return (
    <div className="bg-neutral-100 flex flex-col items-center bg-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-40 flex justify-between items-center transition-all duration-200 p-6 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent backdrop-blur-none'
      }`}>
        <div className="w-[134px] flex items-start flex-shrink-0">
          <a className="flex items-center justify-center w-12 h-12 rounded-xl scale-90 group transition-all duration-200 relative overflow-hidden cursor-pointer" href={baseUrl}>
            <img src={`${baseUrl}/images/logo-color.svg`} alt="logo" />
            <img 
              src={`${baseUrl}/images/logo-white.svg`} 
              alt="logo" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10" 
            />
            <div className="absolute inset-0 rounded-xl bg-blue-600 scale-75 group-hover:scale-100 rotate-12 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-200 z-0 pointer-events-none"></div>
          </a>
        </div>

        <div className="w-full flex justify-center hidden sm:flex">
          <a className="flex items-center justify-center font-semibold gap-2 py-2 px-4 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer mx-[-1px] text-neutral-400 hover:bg-black/5 hover:text-black" href={`${baseUrl}/playbook`}>
            Playbook
          </a>
          <a className="flex items-center justify-center font-semibold gap-2 py-2 px-4 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer mx-[-1px] text-neutral-400 hover:bg-black/5 hover:text-black" target="_blank" href="https://docs.believe.app/api-reference/introduction">
            Docs
          </a>
        </div>

        <a className="flex items-center justify-center font-semibold gap-2 py-2 px-4 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer mx-[-1px] bg-black/5 hover:bg-black/10 text-black hidden sm:flex" href={`${baseUrl}/launch`}>
          Launch Coin
        </a>

        <div className="relative inline-block">
          <button 
            className="flex items-center justify-center font-semibold gap-2 py-2 px-4 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer mx-[-1px] bg-black/5 hover:bg-black/10 rounded-xl !p-3 flex sm:hidden" 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <img src={`${baseUrl}/images/icons/nav.svg`} alt="nav" className="w-4 h-4" />
          </button>
          
          {mobileMenuOpen && (
            <div className="absolute right-0 z-20 min-w-[160px] bg-white rounded-2xl shadow-lg shadow-black/10 mt-2 p-2 transition-all duration-200 ease-out flex flex-col">
              <a className="flex items-center justify-center font-semibold gap-2 py-2 px-4 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer mx-[-1px] text-neutral-400 hover:bg-black/5 hover:text-black w-full rounded-md justify-start hover:bg-transparent !p-1.5" href={`${baseUrl}/playbook`}>
                Playbook
              </a>
              <a className="flex items-center justify-center font-semibold gap-2 py-2 px-4 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer mx-[-1px] text-neutral-400 hover:bg-black/5 hover:text-black w-full rounded-md justify-start hover:bg-transparent !p-1.5" target="_blank" href="https://docs.believe.app/api-reference/introduction">
                Docs
              </a>
              <a className="flex items-center justify-center font-semibold gap-2 py-2 px-4 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer mx-[-1px] bg-black/5 hover:bg-black/10 text-black w-full rounded-md justify-start bg-transparent hover:bg-transparent !p-1.5" href={`${baseUrl}/launch`}>
                Launch coin
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-[85%] w-[1024px] flex flex-col items-center gap-4 pt-36 sm:pt-48 pb-20 sm:pb-36 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          Find your<br/>first believers
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600">Launch a coin for your project</p>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <a 
            className="flex items-center justify-center font-semibold gap-2 py-2 px-4 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer mx-[-1px] bg-blue-600 hover:bg-blue-700 text-white" 
            target="_blank" 
            href="https://apps.apple.com/us/app/believe/id6737437664"
          >
            <img src={`${baseUrl}/images/icons/apple.svg`} alt="apple" className="w-4 h-4 -mt-0.5" />
            Download on iOS
          </a>
          
          <div className="relative inline-block">
            <button 
              className="flex items-center justify-center font-semibold gap-2 py-2 px-4 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer mx-[-1px] bg-black/5 hover:bg-black/10 text-black hidden sm:flex" 
              type="button"
              onClick={() => setQrModalOpen(!qrModalOpen)}
            >
              <img src={`${baseUrl}/images/icons/qr.svg`} alt="qr" className="w-4 h-4" />
              Scan QR Code
            </button>
          </div>
        </div>
      </div>

      {/* Hero Images */}
      <div className="w-full flex justify-center items-center flex-col relative pt-10 -mt-20 sm:-mt-24 -mb-12 overflow-hidden">
        <img 
          src={`${baseUrl}/images/hero-coin.png`} 
          alt="Believe Coin" 
          className="w-32 sm:w-56 relative z-20 animate-bounce -mb-8 sm:-mb-16" 
        />
        <img 
          src={`${baseUrl}/images/hero-shadow.png`} 
          alt="Shadow" 
          className="w-[400px] sm:w-[720px] max-w-[400px] sm:max-w-[720px] relative z-10 animate-pulse" 
        />
        <img 
          src={`${baseUrl}/images/hero-iphone.png`} 
          alt="iPhone Mockup" 
          className="w-[540px] max-w-[540px] sm:w-[960px] sm:max-w-[960px] z-0 -mt-44 sm:-mt-80" 
        />
      </div>

      {/* Features Section */}
      <div className="max-w-[85%] w-[1024px]">
        {/* Feature 1 */}
        <div className="w-full flex justify-center items-center flex-col sm:flex-row gap-10 sm:gap-20 my-20 sm:my-30">
          <img src={`${baseUrl}/images/feature-3.png`} alt="Instant revenue" className="w-full sm:w-1/2" />
          <div className="w-full flex flex-col items-start gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Instant revenue</h2>
            <p className="text-lg text-neutral-600">Earn 0.5% in Solana on every buy of your coin. Revenue starts as soon as your project graduates.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="w-full flex justify-center items-center flex-col sm:flex-row-reverse gap-10 sm:gap-20 my-20 sm:my-30">
          <img src={`${baseUrl}/images/feature-2.png`} alt="Find your first users" className="w-full sm:w-1/2" />
          <div className="w-full flex flex-col items-start gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Find your first users</h2>
            <p className="text-lg text-neutral-600">Reach early adopters and supporters directly through the Believe platform.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="w-full flex justify-center items-center flex-col sm:flex-row gap-10 sm:gap-20 my-20 sm:my-30">
          <img src={`${baseUrl}/images/feature-1.png`} alt="Give back" className="w-full sm:w-1/2" />
          <div className="w-full flex flex-col items-start gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Give back</h2>
            <p className="text-lg text-neutral-600">Give your holders utility by enabling features like airdrops, burns, and custom rewards.</p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="max-w-[85%] w-[448px] flex flex-col items-center gap-4 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Believe it or not</h2>
        <p className="text-lg text-neutral-600">Already hundreds of founders launched their coins on Believe and some raised up to $500k.</p>
      </div>

      {/* Revenue Cards */}
      <div className="max-w-[85%] w-[1024px] flex flex-col md:flex-row items-center justify-center relative mb-16 md:mb-28">
        <div className="w-full flex flex-col items-center p-4 sm:p-12 relative">
          <h1 className="text-4xl sm:text-6xl font-bold tabular-nums -mt-8 z-10">$420,069</h1>
          <p className="relative z-10 text-neutral-600 mt-2">Coin revenue since launch</p>
          <a 
            className="w-full bg-white rounded-3xl shadow-xl shadow-black/5 flex justify-center items-center gap-4 p-4 hover:-translate-y-1 transition-all duration-200 mt-8 z-10" 
            target="_blank" 
            href={`${baseUrl}/token/dupe`}
          >
            <img className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-neutral-100" src={`${baseUrl}/images/avatar-dupe.png`} alt="Dupe" />
            <div className="w-full flex flex-col items-start">
              <h5 className="text-black font-semibold">Dupe.com</h5>
              <p className="uppercase text-sm text-neutral-600">$dupe</p>
            </div>
          </a>
        </div>

        <div className="w-full md:w-[1px] h-[1px] my-12 md:my-0 md:h-auto top-0 bottom-0 bg-black/5 relative md:absolute left-auto md:left-1/2 translate-x-0 md:-translate-x-1/2"></div>

        <div className="w-full flex flex-col items-center p-4 sm:p-16 relative">
          <h1 className="text-4xl sm:text-6xl font-bold tabular-nums -mt-8 z-10">$420,069</h1>
          <p className="relative z-10 text-neutral-600 mt-2">Coin revenue since launch</p>
          <a 
            className="w-full bg-white rounded-3xl shadow-xl shadow-black/5 flex justify-center items-center gap-4 p-4 hover:-translate-y-1 transition-all duration-200 mt-8 z-10" 
            target="_blank" 
            href={`${baseUrl}/token/superfriend`}
          >
            <img className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-neutral-100" src={`${baseUrl}/images/avatar-sf.png`} alt="Superfriend" />
            <div className="w-full flex flex-col items-start">
              <h5 className="text-black font-semibold">Superfriend</h5>
              <p className="uppercase text-sm text-neutral-600">$superfriend</p>
            </div>
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full flex justify-center py-12 sm:py-16 bg-neutral-100 text-left">
        <div className="max-w-[85%] w-[1024px] flex items-center flex-col lg:flex-row gap-20">
          <div className="w-full flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
            <h2 className="w-full md:w-1/2 lg:w-full text-3xl sm:text-4xl font-bold leading-tight">The first step to greatness is belief</h2>
            <p className="mb-3 text-lg text-neutral-600">Let others believe in your next million dollar idea.</p>
            
            <a 
              target="_blank" 
              className="bg-white flex justify-center items-center gap-6 rounded-3xl p-4 shadow-lg shadow-black/5 hover:-translate-y-1 transition-all duration-200 w-80 hidden lg:flex" 
              href="https://apps.apple.com/us/app/believe/id6737437664"
            >
              <div className="w-20 flex-shrink-0">
                <img src={`${baseUrl}/images/qr.svg`} alt="QR Code" className="w-full h-auto" />
              </div>
              <div className="flex flex-col gap-1 text-left">
                <h4 className="text-black text-xl font-semibold">Available on iOS</h4>
                <p className="text-sm">Point your camera at the QR code to download.</p>
              </div>
            </a>
            
            <a 
              className="flex items-center justify-center font-semibold gap-2 py-2 px-4 rounded-full transition-all duration-200 flex-shrink-0 cursor-pointer mx-[-1px] bg-blue-600 hover:bg-blue-700 text-white flex lg:hidden" 
              target="_blank" 
              href="https://apps.apple.com/us/app/believe/id6737437664"
            >
              <img src={`${baseUrl}/images/icons/apple.svg`} alt="apple" className="w-4 h-4 -mt-0.5" />
              Download on iOS
            </a>
          </div>
          
          <div className="w-full max-w-full sm:w-[480px] sm:h-[360px] sm:min-w-[480px] sm:min-h-[360px] flex-shrink-0 relative flex justify-center">
            <img src={`${baseUrl}/images/graphic-chart-m.png`} className="w-full h-full block sm:hidden" alt="Chart Mobile" />
            <img src={`${baseUrl}/images/graphic-chart.png`} className="w-full h-full hidden sm:block" alt="Chart Desktop" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white w-full flex justify-center py-12 sm:pt-16 sm:pb-24">
        <div className="max-w-[85%] w-[1024px] grid grid-cols-1 gap-8 sm:gap-0 sm:grid-cols-5 items-start">
          <a className="flex items-center justify-center w-12 h-12 rounded-xl scale-90 group transition-all duration-200 relative overflow-hidden cursor-pointer -m-2" href={baseUrl}>
            <img src={`${baseUrl}/images/logo-color.svg`} alt="logo" />
            <img 
              src={`${baseUrl}/images/logo-white.svg`} 
              alt="logo" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10" 
            />
            <div className="absolute inset-0 rounded-xl bg-blue-600 scale-75 group-hover:scale-100 rotate-12 group-hover:rotate-0 opacity-0 group-hover:opacity-100 transition-all duration-200 z-0 pointer-events-none"></div>
          </a>
          
          <div className="flex flex-col items-start">
            <p className="text-black text-sm p-1 mb-0.5 font-semibold">Company</p>
            <a className="text-neutral-400 hover:text-black text-sm p-1" href={`${baseUrl}/playbook`}>Playbook</a>
            <a target="_blank" className="text-neutral-400 hover:text-black text-sm p-1" href="https://docs.believe.app/api-reference/introduction">Docs</a>
          </div>
          
          <div className="flex flex-col items-start">
            <p className="text-black text-sm p-1 mb-0.5 font-semibold">Legal</p>
            <a className="text-neutral-400 hover:text-black text-sm p-1" href={`${baseUrl}/privacy`}>Privacy</a>
            <a className="text-neutral-400 hover:text-black text-sm p-1" href={`${baseUrl}/terms`}>Terms</a>
          </div>
          
          <div className="flex flex-col items-start">
            <p className="text-black text-sm p-1 mb-0.5 font-semibold">Social</p>
            <a target="_blank" className="text-neutral-400 hover:text-black text-sm p-1" href="https://x.com/believeapp">@believeapp</a>
            <a target="_blank" className="text-neutral-400 hover:text-black text-sm p-1" href="https://x.com/launchcoin">@launchcoin</a>
          </div>
          
          <div className="flex flex-col items-start sm:items-end">
            <p className="text-black text-sm p-1 mb-0.5 font-semibold">© Believe</p>
            <button type="button" className="text-neutral-400 hover:text-black text-sm p-1 transition-all duration-300 cursor-pointer">Contact us</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const metadata = {
    title: "Get a blog with Notion (no-code and free)",
    description:
        "Build a blog in Notion, with our Notion blog maker. Go live in under a minute.  Build your free Wonder  blog website in a minute!",
        alternates: {
            canonical: "https://wondersites.co/create-a-blog-notion",
          },
    openGraph: {
        images: [
            {
                url: "https://dazzling-cat.netlify.app/notiontoblog_socialshare.png",
                width: 1200,
                height: 630,
                alt: "Get a blog with Notion",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        images: [
            {
                url: "https://dazzling-cat.netlify.app/notiontoblog_socialshare.png",
                alt: "Get a blog with Notion",
            },
        ],
    },
};

export default function PageDetail() {
    return (
        <div>
            {/* Believe Landing Page Section */}
            <BelieveLandingPage />
            
            {/* Original Content */}
            <section >
                <Header />

                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="pt-12 pb-6 md:pt-4 md:pb-6">
                        {/* Page header */}

                        <div className="max-w-4xl py-6 mx-auto lg:py-6">
                            <div className="text-center">

                                <div className="max-w-screen-xl px-4 mx-auto sm:px-6 mb-4">
                                    <div className="text-center px-4 sm:px-6 lg:px-8">
                                        <h1 className="font-funneldisplay text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tighter tracking-tighter mb-4 aos-init aos-animate">
                                            Turn
                                            <span className="text-3xl sm:text-4xl md:text-5xl relative">
                                                <span className="inline-flex items-center relative sm:bottom-0 bottom-[-1px] justify-center mx-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="12 0.19 487.619 510.941" className="w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 ml-3 max-w-full max-h-full">
                                                        <path
                                                            d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934L358.186 335.22V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z"
                                                            fillRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                Notion into a
                                            </span>
                                            <br className="block" />
                                            beautiful <span className="text-3xl sm:text-4xl md:text-5xl gradient-text-accent mx-4">blog</span>
                                        </h1>
                                        <p className="max-w-md mx-auto mt-3 text-base text-slate-500 sm:mb-0 sm:text-lg md:mt-5 md:text-lg md:max-w-2xl">
                                            Wonder  is the perfect tool for creating your blogs powered by Notion. You write your articles in Notion and Wonder  takes care of the rest. It's as simple as that.
                                        </p>
                                        <div className="flex flex-col-reverse justify-center w-full mt-10 sm:flex-row">
                                            <div className="mt-3 sm:mt-0">
                                                <Link href="/signup" className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out rounded-md shadow bg-orange-700 sm:w-auto">
                                                    <strong className="mr-1">Get a blog with Notion →</strong>
                                                </Link>
                                                <p className="mt-3 text-sm text-slate-700"><strong>Free</strong> 3 day trial. Free Design Service.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ModalVideo />
                    </div>
                </div>
            </section>

            <Blog_Type />

            <FeaturesBlocks />

            <section className="mb-20">
                <div className="px-6 pt-5 pb-10 bg-white lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-base font-semibold leading-7 text-orange-600">
                            EXPERTS CAN HELP
                        </p>
                        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            What can Wonder  Experts do for you?
                        </h2>
                        <p className="mt-6 text-slate-600 sm:text-lg sm:leading-8">
                            Experts can help with a wide range of design, development, and
                            marketing projects. Helping you reach your business goals as a
                            solo founder or small team.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl  container mx-auto">
                    <div className="mt-4">
                        <div
                            role="list"
                            className="project_type-list w-dyn-items grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                        >
                            <div
                                role="listitem"
                                className="project_type-item w-dyn-item bg-white shadow-lg p-6 rounded-lg"
                            >
                                <div className="grid gap-4 items-center">
                                    <Image
                                        loading="lazy"
                                        width={100} height={100}
                                        alt="Platform migrations"
                                        unoptimized
                                        src="https://assets-global.website-files.com/6320a2f3bd0b234991397e96/65316fc6b33cce40a33c2b1b_Migration.svg"
                                        className="project_type-image mr-4 p-2"
                                        style={{ filter: "hue-rotate(161deg)" }}
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Platform migrations
                                        </h3>
                                        <p>
                                            Move all (or just part of) your site from another
                                            platform to Webflow.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                role="listitem"
                                className="project_type-item w-dyn-item bg-white shadow-lg p-6 rounded-lg"
                            >
                                <div className="grid gap-4 items-center">
                                    <Image
                                        loading="lazy"
                                        width={100} height={100}
                                        alt="Custom code &amp; integrations"
                                        unoptimized
                                        src="https://assets-global.website-files.com/6320a2f3bd0b234991397e96/65316fb84aabe974ccc5e90a_Plugins.svg"
                                        className="project_type-image mr-4 p-2"
                                        style={{ filter: "hue-rotate(161deg)" }}
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Custom code &amp; integrations
                                        </h3>
                                        <p>
                                            Get help with integrations or other extensions that
                                            require development work.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                role="listitem"
                                className="project_type-item w-dyn-item bg-white shadow-lg p-6 rounded-lg"
                            >
                                <div className="grid gap-4 items-center">
                                    <Image
                                        loading="lazy"
                                        width={100} height={100}
                                        alt="Rebrands &amp; redesigns"
                                        unoptimized
                                        src="https://assets-global.website-files.com/6320a2f3bd0b234991397e96/65316f5a0c978936919bd6fe_SiteRefresh.svg"
                                        className="project_type-image mr-4 p-2"
                                        style={{ filter: "hue-rotate(161deg)" }}
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            Rebrands &amp; redesigns
                                        </h3>
                                        <p>
                                            Give your whole site a new look or work on a fresh new
                                            project with an Expert.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div>
    );
}
