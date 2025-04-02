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
    <header
      className={`w-full z-30 transition-all duration-300 ease-in-out ${!top ? 'bg-white shadow-md' : ''}`}
      style={top ? {
        backgroundImage: "url('https://dazzling-cat.netlify.app/bg-gradient.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      } : {}}
    >
      <div className="max-w-7xl mx-auto p-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className='flex items-center'>
            <Link href="/" className="shrink-0 mr-4 relative group">
              <Image src={Logo} alt="Logo" width={260} height={200} className="relative" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">

            <li className="relative" ref={dropdownRef}>
                <button
                  className="font-bold text-slate-800 hover:text-orange-600 px-5 py-3 flex items-center transition duration-150 ease-in-out relative group"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 group-hover:after:w-full after:transition-all after:duration-300">Create a...</span>
                  <ChevronDown className={`w-5 h-5 ml-1 text-slate-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
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
                      <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-white">
                        <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
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

              <NavLink href="/showcase" text="Website Examples" />
              <NavLink href="https://boringsites.lemonsqueezy.com/affiliates" text="Affiliate (50%)" />
              <NavLink href="/pricing" text="Pricing" />
              
              <NavLink href="https://app.wondersites.co" text="Login" />
              <li>
                <Link
                  href="https://app.wondersites.co" 
                  target='_blank'
                  className="btn-sm text-white bg-slate-900 hover:bg-slate-800 ml-3 flex items-center justify-between px-4 py-2 rounded-full transition duration-150 ease-in-out group overflow-hidden relative"
                >
                  <span className="relative z-10">Create Website</span>
                  <div className="absolute bg-orange-500 w-0 h-full left-0 top-0 group-hover:w-full transition-all duration-300 ease-in-out -z-0"></div>
                  <ArrowRight className="w-4 h-4 ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
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
    <Link
      href={href}
      className="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-orange-50 group"
    >
      <div className="flex-shrink-0 p-2 rounded-full bg-orange-50 group-hover:bg-orange-100 transition-colors">
        <Icon className="w-6 h-6 text-orange-600" />
      </div>
      <div className="ml-4">
        <p className="text-base font-medium text-slate-900 group-hover:text-orange-600 transition-colors">{title}</p>
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
    <Link
      href={href}
      target="_blank"
      className="flex items-center p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-slate-100 group"
    >
      <div className="flex-shrink-0 overflow-hidden rounded-full border-2 border-transparent group-hover:border-orange-300 transition-all">
        <Image src={imageSrc} alt="" width={30} height={30} className="w-6 h-6 rounded-full" />
      </div>
      <div className="ml-4">
        <p className="text-base font-medium text-slate-900 group-hover:text-orange-600 transition-colors">{text}</p>
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
      className="font-medium text-slate-900 hover:text-orange-600 px-5 py-3 flex items-center transition duration-150 ease-in-out relative group"
    >
      <span className="relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 group-hover:after:w-full after:transition-all after:duration-300">{text}</span>
    </Link>
  );
}