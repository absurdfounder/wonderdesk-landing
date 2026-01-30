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
    <footer className="border-neutral-200 px-4 md:px-6">
      <div className="mx-auto max-w-7xl py-8 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Brand Section */}
          <div className="md:w-64">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="Wonder Sites"
                width={169}
                className="rounded-lg"
              />
            </div>
            <p className="mt-2 text-sm text-neutral-500">
            The AI agent that keeps your help center, blog, changelog, and documentation up to date.
            </p>
            <ul className="mt-3 space-y-1">
              <li>
                <a
                  className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/absurdfounder"
                >
                  <Twitter className="h-4 w-4 text-neutral-500" />
                  Twitter (X)
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/wondersites"
                >
                  <Linkedin className="h-4 w-4 text-neutral-500" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/@wondersites"
                >
                  <Youtube className="h-4 w-4 text-neutral-500" />
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Links Grid */}
          <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-3">
            {/* Features Column */}
            <div className="space-y-8">
              <div>
                <span className="text-sm font-semibold text-neutral-800">Features</span>
                <ul className="mt-3 space-y-1">
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <Sparkles className="h-4 w-4 text-sky-500" />
                      Notion Integration
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <Bot className="h-4 w-4 text-amber-500" />
                      AI-Agents
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <ImageIcon className="h-4 w-4 text-orange-500" />
                      Custom Themes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <MessageCircle className="h-4 w-4 text-rose-500" />
                      Forms & Widgets
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <Code className="h-4 w-4 text-violet-500" />
                      Custom Code
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <Globe className="h-4 w-4 text-teal-500" />
                      Custom Domains
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <Lock className="h-4 w-4 text-stone-500" />
                      SEO Ready
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <MessageSquare className="h-4 w-4 text-lime-600" />
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/integration"
                    >
                      <Plug className="h-4 w-4 text-emerald-500" />
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/create-a-chrome-extension"
                    >
                      <Chrome className="h-4 w-4 text-amber-800/30" />
                      Chrome Extension
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-sm font-semibold text-neutral-800">Get help</span>
                <ul className="mt-3 space-y-1">
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="mailto:support@wondersites.ai"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/privacy"
                    >
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/terms"
                    >
                      Terms of service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Product Column */}
            <div className="space-y-8">
              <div>
                <span className="text-sm font-semibold text-neutral-800">Product</span>
                <ul className="mt-3 space-y-1">
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/"
                    >
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/integration"
                    >
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/pricing"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/showcase"
                    >
                      Showcase
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      Changelog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="https://app.wonderdesk.ai"
                    >
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-sm font-semibold text-neutral-800">Resources</span>
                <ul className="mt-3 space-y-1">
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <BookOpen className="h-4 w-4 text-sky-500" />
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <Pen className="h-4 w-4 text-amber-500" />
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/showcase"
                    >
                      <Users className="h-4 w-4 text-violet-500" />
                      Case studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="#"
                    >
                      <Bell className="h-4 w-4 text-lime-500" />
                      Changelog
                    </Link>
                  </li>

                </ul>
              </div>
            </div>

            {/* Alternatives Column */}
            <div className="space-y-8">
              <div>
                <span className="text-sm font-semibold text-neutral-800">Alternatives</span>
                <ul className="mt-3 space-y-1">
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/helpdocs-io"
                    >
                      Helpdocs.io alternative
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/mintlify"
                    >
                      Mintlify alternative
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/zendesk-help-center"
                    >
                      Zendesk Help Center alternative
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/intercom-help-center"
                    >
                      Intercom Help Center alternative
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/docusaurus"
                    >
                      Docusaurus alternative
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/gitbook"
                    >
                      GitBook alternative
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/document360"
                    >
                      Document360 alternative
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/proprofs-kb"
                    >
                      ProProfs KB alternative
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/zoho-desk"
                    >
                      Zoho Desk alternative
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/help-scout"
                    >
                      Help Scout alternative
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/helpjuice"
                    >
                      Helpjuice alternative
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/knowledgeowl"
                    >
                      KnowledgeOwl alternative
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/archbee"
                    >
                      Archbee alternative
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-800"
                      href="/alternatives/stonly"
                    >
                      Stonly alternative
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-neutral-200 py-6">
        <p className="text-center text-sm text-neutral-600">
          © 2026 Wonder Sites by Boring Sites LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
