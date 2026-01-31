'use client'

import Image from 'next/image'
import Logo from '@/public/images/logonew-black.png'
import Link from 'next/link'
import {
  Twitter,
  Linkedin,
  Youtube,
  Sparkles,
  Bot,
  Image as ImageIcon,
  MessageCircle,
  Code,
  Globe,
  Lock,
  MessageSquare,
  Plug,
  Chrome,
  BookOpen,
  Pen,
  Users,
  Bell,
  Heart,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-neutral-200 px-4 sm:px-6 md:px-8 bg-white">
      <div className="mx-auto max-w-7xl py-6 sm:py-8 md:py-12">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:gap-12">
          {/* Brand Section */}
          <div className="w-full md:w-64">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="Wonder Sites"
                width={169}
                className="rounded-lg w-32 sm:w-40 md:w-auto"
              />
            </div>
            <p className="mt-2 text-xs sm:text-sm text-neutral-500 leading-relaxed">
            The AI agent that keeps your help center, blog, changelog, and documentation up to date.
            </p>
            <ul className="mt-3 space-y-1">
              <li>
                <a
                  className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/absurdfounder"
                >
                  <Twitter className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-500 flex-shrink-0" />
                  <span>Twitter (X)</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/wondersites"
                >
                  <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-500 flex-shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/@wondersites"
                >
                  <Youtube className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-500 flex-shrink-0" />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Links Grid */}
          <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:grid-cols-3">
            {/* Features Column */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-800">Features</span>
                <ul className="mt-2 sm:mt-3 space-y-1">
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-sky-500 flex-shrink-0" />
                      <span className="break-words">Notion Integration</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500 flex-shrink-0" />
                      <span className="break-words">AI-Agents</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <ImageIcon className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 flex-shrink-0" />
                      <span className="break-words">Custom Themes</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-rose-500 flex-shrink-0" />
                      <span className="break-words">Forms & Widgets</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <Code className="h-3 w-3 sm:h-4 sm:w-4 text-violet-500 flex-shrink-0" />
                      <span className="break-words">Custom Code</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-teal-500 flex-shrink-0" />
                      <span className="break-words">Custom Domains</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-stone-500 flex-shrink-0" />
                      <span className="break-words">SEO Ready</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-lime-600 flex-shrink-0" />
                      <span className="break-words">Analytics</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/integration"
                    >
                      <Plug className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 flex-shrink-0" />
                      <span className="break-words">Integrations</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/create-a-chrome-extension"
                    >
                      <Chrome className="h-3 w-3 sm:h-4 sm:w-4 text-amber-800/30 flex-shrink-0" />
                      <span className="break-words">Chrome Extension</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-800">Get help</span>
                <ul className="mt-2 sm:mt-3 space-y-1">
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="mailto:support@wondersites.ai"
                    >
                      <span className="break-words">Contact us</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/privacy"
                    >
                      <span className="break-words">Privacy policy</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/terms"
                    >
                      <span className="break-words">Terms of service</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Product Column */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-800">Product</span>
                <ul className="mt-2 sm:mt-3 space-y-1">
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/"
                    >
                      <span className="break-words">How it works</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/integration"
                    >
                      <span className="break-words">Integrations</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/pricing"
                    >
                      <span className="break-words">Pricing</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/showcase"
                    >
                      <span className="break-words">Showcase</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <span className="break-words">Changelog</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="https://app.wonderdesk.ai"
                    >
                      <span className="break-words">Dashboard</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-800">Resources</span>
                <ul className="mt-2 sm:mt-3 space-y-1">
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-sky-500 flex-shrink-0" />
                      <span className="break-words">Help Center</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <Pen className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500 flex-shrink-0" />
                      <span className="break-words">Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/showcase"
                    >
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 text-violet-500 flex-shrink-0" />
                      <span className="break-words">Case studies</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <Bell className="h-3 w-3 sm:h-4 sm:w-4 text-lime-500 flex-shrink-0" />
                      <span className="break-words">Changelog</span>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>

            {/* Alternatives Column */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-800">Alternatives</span>
                <ul className="mt-2 sm:mt-3 space-y-1">
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/helpdocs-io"
                    >
                      <span className="break-words">Helpdocs.io alternative</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/mintlify"
                    >
                      <span className="break-words">Mintlify alternative</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/zendesk-help-center"
                    >
                      <span className="break-words">Zendesk Help Center alternative</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/intercom-help-center"
                    >
                      <span className="break-words">Intercom Help Center alternative</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/docusaurus"
                    >
                      <span className="break-words">Docusaurus alternative</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/gitbook"
                    >
                      <span className="break-words">GitBook alternative</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/document360"
                    >
                      <span className="break-words">Document360 alternative</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/proprofs-kb"
                    >
                      <span className="break-words">ProProfs KB alternative</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/zoho-desk"
                    >
                      <span className="break-words">Zoho Desk alternative</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/help-scout"
                    >
                      <span className="break-words">Help Scout alternative</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/helpjuice"
                    >
                      <span className="break-words">Helpjuice alternative</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/knowledgeowl"
                    >
                      <span className="break-words">KnowledgeOwl alternative</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/archbee"
                    >
                      <span className="break-words">Archbee alternative</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-xs sm:text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/stonly"
                    >
                      <span className="break-words">Stonly alternative</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-neutral-200 py-4 sm:py-6">
        <p className="text-center text-xs sm:text-sm text-neutral-600 px-4">
          © 2026 Wonder Sites by Boring Sites LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
