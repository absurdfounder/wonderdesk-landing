'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, BookOpen, ShoppingBag, Lock, ArrowRight, LucideIcon } from 'lucide-react';
import Logo from '@/public/images/logonew-black.png';
import MobileMenu from './mobile-menu';

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
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

  return (
    <header className={`w-full z-30 transition-all duration-300 ease-in-out ${!top ? 'bg-white' : ''}`}>
      <div className="max-w-7xl mx-auto p-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="shrink-0 mr-4">
            <Image src={Logo} alt="Logo" width={220} height={200} />
          </Link>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="relative" ref={dropdownRef}>
                <button
                  className="hidden font-bold text-slate-900 hover:text-orange-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Create a..
                  <ChevronDown className="w-5 h-5 ml-1 text-slate-400" />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-10 w-screen max-w-lg px-2 transform -translate-x-1/2 left-1/4 mt-3 sm:px-0"
                    >
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                        <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                          <DropdownLink
                            href="/create-a-helpdesk-servicedesk-notion"
                            icon={HelpCircle}
                            title="Help Center"
                            description="Get a professional self-service help center with Notion and BoringSites"
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
                            href="/create-a-blog-notion"
                            icon={BookOpen}
                            title="Blog"
                            description="Get a beautiful blog for your startup or company with Notion and BoringSites."
                          />
                        </div>
                        <div className="px-5 py-5 bg-slate-50 sm:px-8 sm:py-8">
                          <div className="grid grid-cols-2 gap-4">
                            <DemoLink
                              href="https://support.boringsites.com/"
                              imageSrc="https://dazzling-cat.netlify.app/helpdesk.png"
                              text="Help Center Demo"
                            />
                            <DemoLink
                              href="https://docs.boringsites.com/"
                              imageSrc="https://dazzling-cat.netlify.app/documentation.png"
                              text="Directory Demo"
                            />
                            <DemoLink
                              href="https://support.boringsites.com/"
                              imageSrc="https://dazzling-cat.netlify.app/blog.png"
                              text="Blog Site Demo"
                            />
                            <DemoLink
                              href="https://docs.boringsites.com/"
                              imageSrc="https://dazzling-cat.netlify.app/catalogue.png"
                              text="Marketplace Demo"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <NavLink href="/showcase" text="Showcase" />
              <NavLink href="https://boringsites.lemonsqueezy.com/affiliates" text="Affilate(50%)" />
              <NavLink href="/pricing" text="Pricing" />
              <NavLink href="https://boringsites.canny.io" text="Roadmap" />
              <NavLink href="https://app.boringsites.com" text="Login" />
              <li>
                <Link
                  href="https://app.youform.com/forms/r3rvhjv4"
                  target='_blank'
                  className="btn-sm text-white bg-slate-900 hover:bg-slate-800 ml-3 flex items-center justify-between px-4 py-2 rounded-full transition duration-150 ease-in-out"
                >
                  <span>Ask us to Build</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
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
    <Link href={href} className="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-orange-100">
      <Icon className="flex-shrink-0 w-6 h-6 text-orange-600" />
      <div className="ml-4">
        <p className="text-base font-medium text-slate-900">{title}</p>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
    </Link>
  );
}

interface DemoLinkProps {
  href: string;
  imageSrc: string;
  text: string;
}

function DemoLink({ href, imageSrc, text }: DemoLinkProps) {
  return (
    <Link href={href} target="_blank" className="flex items-center p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-slate-100">
      <Image src={imageSrc} alt="" width={30} height={30} className="flex-shrink-0 w-6 h-6 rounded-full" />
      <div className="ml-4">
        <p className="text-base font-medium text-slate-900">{text}</p>
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
    <li>
      <Link href={href} className="font-medium text-slate-600 hover:text-slate-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">
        {text}
      </Link>
    </li>
  );
}