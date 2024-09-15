'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, HelpCircle, BookOpen, ShoppingBag, Lock, ArrowRight, LucideIcon } from 'lucide-react';
import Logo from '@/public/images/logonew-black.png';
import MobileMenu from './mobile-menu';

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleDropdownLinkClick = () => {
    setDropdownOpen(false);
  };

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? ' p-2' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 bg-white border border-gray-200 shadow-2xl rounded-full mt-4 backdrop-blur-sm shadow-3xl shadow-lg">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <Link href="/" className="shrink-0 mr-4">
            <Image src={Logo} unoptimized alt="Logo" width={220} height={200} />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="relative" ref={dropdownRef}>
                <button
                  className="font-bold text-gray-900 hover:text-gray-900 px-5 py-3 flex gap-2 items-center transition duration-150 ease-in-out hover:text-orange-500"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Create a..
                  <ChevronDown className="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500" />
                </button>
                {dropdownOpen && (
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white absolute z-10 w-screen max-w-lg px-2 transform -translate-x-1/2 left-1/2 sm:px-0">
                    <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                      <DropdownLink
                        href="/create-a-helpdesk-servicedesk-notion"
                        icon={<HelpCircle className="flex-shrink-0 w-6 h-6 stroke-orange-600" />}
                        title="Help Center"
                        description="Create your professional self-service help center with Notion and BoringSites"
                        onClick={handleDropdownLinkClick}
                      />
                      <DropdownLink
                        href="/create-a-marketplace-notion"
                        icon={<ShoppingBag className="flex-shrink-0 w-6 h-6 stroke-orange-600" />}
                        title="Marketplace / Directories"
                        description="Create a self serving community marketplace that can handle millions in traffic on Notion."
                        onClick={handleDropdownLinkClick}
                      />
                      <DropdownLink
                        href="/create-a-company-wiki-notion"
                        icon={<Lock className="flex-shrink-0 w-6 h-6 stroke-orange-600" />}
                        title="Company Wiki"
                        description="Create company wiki protected access and AI to answer queries on top of Notion as a database."
                        onClick={handleDropdownLinkClick}
                      />
                      <DropdownLink
                        href="/create-a-blog-notion"
                        icon={<BookOpen className="flex-shrink-0 w-6 h-6 stroke-orange-600" />}
                        title="Blog"
                        description="Create a beautiful blog for your startup or company with Notion and BoringSites."
                        onClick={handleDropdownLinkClick}
                      />
                    </div>
                    <div className="px-5 py-5 space-y-6 bg-gray-200 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 justify-between w-full pb-6">
                      <DemoLink
                        href="https://support.boringsites.com/"
                        imageSrc="https://dazzling-cat.netlify.app/helpdesk.png"
                        text="Help Center Demo"
                        onClick={handleDropdownLinkClick}
                      />
                      <DemoLink
                        href="https://docs.boringsites.com/"
                        imageSrc="https://dazzling-cat.netlify.app/documentation.png"
                        text="Directory Demo"
                        onClick={handleDropdownLinkClick}
                      />
                    </div>
                    <div className="px-5 py-5 space-y-6 bg-gray-200 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 justify-between w-full pb-8">
                      <DemoLink
                        href="https://support.boringsites.com/"
                        imageSrc="https://dazzling-cat.netlify.app/blog.png"
                        text="Blog Site Demo"
                        onClick={handleDropdownLinkClick}
                      />
                      <DemoLink
                        href="https://docs.boringsites.com/"
                        imageSrc="https://dazzling-cat.netlify.app/catalogue.png"
                        text="Marketplace Demo"
                        onClick={handleDropdownLinkClick}
                      />
                    </div>
                  </div>
                )}
              </li>
              <NavLink href="/affiliate" text="Earn $$$" />
              <NavLink href="/pricing" text="Pricing" />
              <NavLink href="/integration" text="Integrations" />
              <NavLink href="/showcase" text="Showcase" />
              <NavLink href="https://app.BoringSites.com" text="Login" />
              <li>
                <Link href="https://app.youform.com/forms/r3rvhjv4" target='_blank' className="btn-sm text-white bg-gray-900 hover:bg-gray-800 ml-3 w-full justify-between">
                  <span>Ask us to Help</span>
                  <ArrowRight className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" />
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
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

function DropdownLink({ href, icon, title, description, onClick }: DropdownLinkProps) {
  return (
    <Link href={href} className="flex items-start p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-200" onClick={onClick}>
      {icon}
      <div className="ml-4 -mt-0.5">
        <p className="text-base font-medium text-gray-700">{title}</p>
        <p className="mt-1 text-sm text-gray-400">{description}</p>
      </div>
    </Link>
  );
}

interface DemoLinkProps {
  href: string;
  imageSrc: string;
  text: string;
  onClick: () => void;
  Icon?: LucideIcon;
}

function DemoLink({ href, imageSrc, text, onClick, Icon }: DemoLinkProps) {
  return (
    <div className="flow-root font-medium w-full">
      <Link href={href} target="_blank" className="flex items-center text-base font-medium transition duration-150 ease-in-out rounded-full hover:shadow-xl p-2 px-4 -m-3 bg-gray-100 text-black" onClick={onClick}>
        <Image src={imageSrc} unoptimized className="shadow-md" alt="" width={30} height={30} />
        <span className="ml-3 text-sm">{text}</span>
        {Icon && <Icon className="w-5 h-5 ml-2 text-gray-400" />}
      </Link>
    </div>
  );
}

interface NavLinkProps {
  href: string;
  text: string;
}

function NavLink({ href, text }: NavLinkProps) {
  return (
    <li>
      <Link href={href} className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">{text}</Link>
    </li>
  );
}