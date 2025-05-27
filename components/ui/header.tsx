'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, BookOpen, ShoppingBag, Lock, AlignLeft, ArrowRight, LucideIcon } from 'lucide-react';
import Logo from '@/public/images/logonew-black.png';
import MobileMenu from './mobile-menu';
import TabletMenu from './tablet-menu';
import TranslateButton from './TranslateButton';
import { getCalApi } from "@calcom/embed-react";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isBookHovered, setIsBookHovered] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // Initialize Cal.com booking widget
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "setup-call" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="w-full text-black text-center py-2 sm:py-2 px-2 sm:px-4 bg-green-400">
        <div className="max-w-7xl mx-auto flex items-center justify-center flex-col sm:flex-row flex-wrap gap-2 sm:gap-4">
          <div className="flex items-center flex-wrap justify-center gap-1 sm:gap-0">
            <span className="font-medium text-sm sm:text-base">We launched</span>
            <b className='bg-green-600 p-1 px-2 sm:px-4 text-white rounded-md mx-1 text-sm sm:text-base'>$WONDER</b>
            <span className="font-medium text-sm sm:text-base">on</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 256 300" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1 sm:mx-2 sm:w-5 sm:h-5"
            >
              <g clipPath="url(#clip0_106_4829)">
                <path 
                  fill="#333" 
                  d="M96.5403 1.10644C102.321 -1.89617 109.364 1.49336 110.627 7.88551L127.509 93.3285C128.819 99.9537 121.234 104.675 115.87 100.574L111.235 97.0292C104.245 91.6846 96.9687 86.7575 89.4446 82.2667L47.4096 174.235C43.8612 181.998 42.0246 190.435 42.0246 198.971C42.0246 231.827 68.6505 258.462 101.495 258.462H169.041C193.998 258.462 214.229 238.223 214.229 213.258C214.229 188.293 193.998 168.055 169.041 168.055H132.401C120.935 168.055 111.639 158.756 111.639 147.286C111.639 135.816 120.935 126.517 132.401 126.517H138.489C138.495 126.517 138.502 126.517 138.508 126.517H172.705C188.219 126.517 200.795 113.936 200.795 98.4174C200.795 82.8985 188.219 70.318 172.705 70.318H169.041C157.574 70.318 148.279 61.0193 148.279 49.5488C148.279 38.0783 157.574 28.7798 169.041 28.7798H172.705C211.152 28.7798 242.319 59.9576 242.319 98.4174C242.319 116.756 235.233 133.439 223.65 145.875C243.238 161.779 255.754 186.057 255.754 213.258C255.754 261.165 216.931 300 169.041 300H101.495C45.7171 300 0.5 254.768 0.5 198.971C0.5 184.475 3.61895 170.147 9.64502 156.963L52.0004 64.2935C44.3864 61.4541 36.6123 59.0156 28.7089 56.9929L20.6653 54.9343C14.1471 53.2661 13.1335 44.4287 19.1047 41.3272L96.5403 1.10644Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_106_4829">
                  <rect width="255.254" height="300" fill="#333" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-medium text-sm sm:text-base">Believe.</span>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <a 
              href="https://believe.app/coin/GEKjZKJZgQTCbi9evTW2GmhyamH3sq6Lid9dQMWqEcCY" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-black font-medium px-3 sm:px-4 py-1 rounded-md hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center text-sm sm:text-base group"
            >
              View it on Believe
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a 
              href="https://dexscreener.com/solana/GEKjZKJZgQTCbi9evTW2GmhyamH3sq6Lid9dQMWqEcCY" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-black font-medium px-3 sm:px-4 py-1 rounded-md hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center text-sm sm:text-base group"
            >
              DEX
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`w-full z-30 transition-all duration-300 ease-in-out ${!top ? 'bg-white shadow-md' : ''}`}
      >
        <div className="max-w-7xl mx-auto p-3 sm:p-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <div className='flex items-center'>
              <Link href="/" className="shrink-0 mr-2 sm:mr-4 relative group">
                <Image 
                  src={Logo} 
                  alt="Logo" 
                  width={260} 
                  height={200} 
                  className="relative w-40 h-auto sm:w-44 md:w-52 lg:w-64" 
                  priority
                />
              </Link>

              <TranslateButton />
            </div>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex lg:grow">
              <ul className="flex gap-4 items-center justify-end w-full">
                <li className="relative" ref={dropdownRef}>
                  <button
                    className="font-bold text-slate-800 hover:text-orange-600 py-3 flex items-center transition duration-150 ease-in-out relative group"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    aria-expanded={dropdownOpen}
                  >
                    <span className="relative overflow-hidden text-ellipsis max-w-[120px] block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 group-hover:after:w-full after:transition-all after:duration-300">Create a...</span>
                    <ChevronDown className={`w-5 h-5 ml-1 text-slate-400 transition-transform duration-200 flex-shrink-0 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1 }}
                        className="absolute z-50 w-screen max-w-lg px-2 transform -translate-x-1/2 left-1/4 mt-3 sm:px-0"
                      >
                        <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-white">
                          <div className="relative grid gap-6 px-1 py-6 sm:gap-8 sm:p-8">
                            <DropdownLink
                              href="/create-a-helpdesk-servicedesk-notion"
                              icon={HelpCircle}
                              title="Help Center"
                              description="Get a professional self-service help center with Notion and Wonder Sites"
                            />
                            <DropdownLink
                              href="/create-a-marketplace-notion"
                              icon={ShoppingBag}
                              title="Marketplace / Directories"
                              description="Get a self serving community marketplace that can handle millions in traffic on Notion."
                            />
                            <DropdownLink
                              href="/create-a-company-wiki-notion"
                              icon={Lock}
                              title="Company Wiki"
                              description="Create company wiki protected access and AI to answer queries on top of Notion as a database."
                            />
                            <DropdownLink
                              href="/create-a-documentation-notion"
                              icon={AlignLeft}
                              title="Product Docs"
                              description="Create documentation on top of notion and access AI to answer queries on top of Notion as a database."
                            />
                            <DropdownLink
                              href="/create-a-blog-notion"
                              icon={BookOpen}
                              title="Blog"
                              description="Get a beautiful blog for your startup or company with Notion and Wonder Sites."
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <NavLink href="/showcase" text="Examples" />
                <NavLink href="/pricing" text="Pricing" />
                <NavLink href="https://app.wondersites.co" text="Login" />

                <li>
                  <button
                    data-cal-namespace="setup-call"
                    data-cal-link="wondersites/setup-call"
                    data-cal-config='{"layout":"month_view"}'
                    className="btn-sm text-black border border-gray-600 bg-slate-100 hover:bg-slate-800 hover:text-white ml-3 flex items-center justify-between px-4 py-2 rounded-md transition duration-150 ease-in-out group overflow-hidden relative"
                    onMouseEnter={() => setIsBookHovered(true)}
                    onMouseLeave={() => setIsBookHovered(false)}
                  >
                    <div className="relative z-10 overflow-hidden w-full">
                      <div className="flex items-center justify-between">
                        <span className="truncate max-w-[120px]">Book a Demo</span>
                        <ArrowRight className="w-4 h-4 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </div>
                    </div>
                  </button>
                </li>

                <li>
                  <Link
                    href="https://app.wondersites.co"
                    target='_blank'
                    className="btn-sm text-white bg-slate-900 hover:bg-slate-800 ml-3 flex items-center justify-between px-4 py-2 rounded-md transition duration-150 ease-in-out group overflow-hidden relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="relative z-10 overflow-hidden w-full">
                      <div className="flex items-center justify-between">
                        <div className="transition-transform duration-300 transform truncate max-w-[120px]"
                          style={{
                            transform: isHovered ? 'translateY(-100%)' : 'translateY(0)'
                          }}>
                          Create a free site
                        </div>
                        <div className="transition-transform duration-300 transform absolute top-0 left-0 truncate max-w-[120px]"
                          style={{
                            transform: isHovered ? 'translateY(0)' : 'translateY(100%)'
                          }}>
                          Takes 15 mins
                        </div>
                        <ArrowRight className="w-4 h-4 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform flex-shrink-0" />
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Tablet menu */}
            <div className="hidden md:block lg:hidden">
              <TabletMenu />
            </div>

            {/* Mobile menu */}
            <div className="block md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

interface DropdownLinkProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

function DropdownLink({ href, icon: Icon, title, description }: DropdownLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-orange-50 group"
    >
      <div className="flex-shrink-0 p-2 rounded-md bg-orange-50 group-hover:bg-orange-100 transition-colors">
        <Icon className="w-6 h-6 text-orange-600" />
      </div>
      <div className="ml-4">
        <p className="text-base font-medium text-slate-900 group-hover:text-orange-600 transition-colors truncate max-w-[300px]">{title}</p>
        <p className="mt-1 text-sm text-slate-500 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}

interface NavLinkProps {
  href: string;
  text: string;
}

function NavLink({ href, text }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="font-medium text-slate-900 hover:text-orange-600 px-1 py-3 flex items-center transition duration-150 ease-in-out relative group"
    >
      <span className="relative truncate max-w-[120px] block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 group-hover:after:w-full after:transition-all after:duration-300">{text}</span>
    </Link>
  );
}