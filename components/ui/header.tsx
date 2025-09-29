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


      {/* Main Header */}
      <header
        className={`w-full z-30 transition-all duration-300 ease-in-out w-full fixed top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-4 md:px-6 ${!top ? 'bg-none shadow-md' : ''}`}
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
                  className="relative w-32 h-auto sm:w-44 md:w-32 lg:w-40"
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
                    <span className="relative overflow-hidden text-ellipsis max-w-[120px] block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 group-hover:after:w-full after:transition-all after:duration-300">Build</span>
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
                              description="Get a professional automated help center connected with Notion or Github."
                            />
                            <DropdownLink
                              href="/create-a-blog-notion"
                              icon={BookOpen}
                              title="Blog"
                              description="Get a beautiful blog automated for your startup or company connected to Notion."
                            />

                            <DropdownLink
                              href="/create-a-documentation-notion"
                              icon={AlignLeft}
                              title="Product Docs"
                              description="Create automated product docs on top of notion or github with integrated AI Agents."
                            />
                            <DropdownLink
                              href="/create-a-changelog-notion"
                              icon={Lock}
                              title="Changelogs"
                              description="Create automated changelogs connected to your Github or Notion account."
                            />

                            <DropdownLink
                              href="/create-a-marketplace-notion"
                              icon={ShoppingBag}
                              title="Marketplace / Directories"
                              description="Get a self serving community directory or marketplace that can handle millions in traffic."
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
                    data-cal-link="set-meeting/setup-call"
                    data-cal-config='{"layout":"month_view"}'
                    className=" btn-sm text-black border border-gray-600 bg-slate-100 hover:bg-slate-800 hover:text-white ml-3 flex items-center justify-between px-4 py-2 rounded-md transition duration-150 ease-in-out group overflow-hidden relative"
                    onMouseEnter={() => setIsBookHovered(true)}
                    onMouseLeave={() => setIsBookHovered(false)}
                  >
                    <div className="relative z-10 overflow-hidden w-full">
                      <div className="flex items-center justify-between">
                        <span className="truncate max-w-[120px]">Get a Demo</span>
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
                        <div className="transition-transform duration-300 transform truncate max-w-[150px]"
                          style={{
                            transform: isHovered ? 'translateY(-100%)' : 'translateY(0)'
                          }}>
                          Get Started
                        </div>
                        <div className="transition-transform duration-300 transform absolute top-0 left-0 truncate max-w-[150px]"
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
