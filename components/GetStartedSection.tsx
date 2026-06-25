'use client';

import Image from 'next/image';
import { Search, Palette, BarChart3, Globe, MessageSquare, UserPlus } from 'lucide-react';

const sectionXPadding = 'px-4 sm:px-6 lg:px-8';

const features = [
  {
    icon: Search,
    label: 'SEO-optimized',
    color: 'text-lime-500',
  },
  {
    icon: Palette,
    label: 'Fully customizable',
    color: 'text-violet-500',
  },
  {
    icon: BarChart3,
    label: 'Built-in analytics',
    color: 'text-orange-500',
  },
  {
    icon: Globe,
    label: 'Custom domains',
    color: 'text-blue-500',
  },
  {
    icon: MessageSquare,
    label: 'Collect customer feedback',
    color: 'text-emerald-500',
  },
  {
    icon: UserPlus,
    label: 'Invite your team',
    color: 'text-pink-500',
  },
];

const integrations = [
  {
    name: 'Intercom',
    logo: 'https://dazzling-cat.netlify.app/intercom.png',
  },
  {
    name: 'Zendesk',
    logo: 'https://dazzling-cat.netlify.app/zendesk.jpg',
  },
  {
    name: 'Crisp',
    logo: 'https://dazzling-cat.netlify.app/crisp.png',
  },
  {
    name: 'Help Scout',
    logo: 'https://dazzling-cat.netlify.app/helpscout.png',
  },
  {
    name: 'Fernand',
    logo: 'https://dazzling-cat.netlify.app/fernand.png',
  },
];

export default function GetStartedSection() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 border border-gray-200 bg-white">
      <div className="grid grid-cols-1 divide-x divide-neutral-200 lg:grid-cols-2 max-w-7xl m-auto">
        {/* First Section: Get started in minutes */}
        <section className="overflow-hidden">
          <div className="pr-0 lg:pr-8">
            <div className="pt-12 pb-12 sm:pt-20">
              <span className="font-silkscreen text-lg text-blue-600">Wonder-hosted</span>
              <h2 className="mt-4 font-display text-balance text-neutral-800 text-3xl lg:text-4xl">
                Get started in minutes
              </h2>
              <div className="mt-6">
                <p className="text-base text-slate-700">
                  Don&apos;t have a help center yet? Set up your help center and let our agent draft articles
                  for you in minutes.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  {features.map((feature) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={feature.label} className="flex items-center gap-2 shrink-0">
                        <IconComponent className={feature.color} size={24} strokeWidth={1.5} />
                        <span className="text-neutral-600 whitespace-nowrap">{feature.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section: Zero-downtime migration */}
        <section className="overflow-hidden">
          <div className="pl-0 lg:pl-8">
            <div className="pt-12 pb-12 sm:pt-20">
              <span className="font-silkscreen text-lg text-blue-600">ONE-click migration</span>
              <h2 className="mt-4 font-display text-balance text-neutral-800 text-3xl lg:text-4xl">
                Zero-downtime migration
              </h2>
              <p className="mt-6 text-base text-slate-700">
                Migrate your existing help center to Wonder in one-click without breaking links, or hurting your SEO.
              </p>
            </div>
            <div className="pb-20">

              <div className="flex flex-wrap gap-2">
                {integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 shadow-sm transition-colors hover:bg-neutral-50"
                  >
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      width={20}
                      height={20}
                      className="size-5 shrink-0 rounded object-cover"
                    />
                    <span className="text-sm font-medium text-neutral-800 whitespace-nowrap">
                      {integration.name}
                    </span>
                  </div>
                ))}

                <a className="flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-600 shadow-sm transition-colors hover:bg-neutral-50 hover:text-neutral-900 whitespace-nowrap"
                href="/integration">
                View all integrations →
              </a>
            </div>


          </div>
      </div>
    </section>
      </div >
    </div >
  );
}
