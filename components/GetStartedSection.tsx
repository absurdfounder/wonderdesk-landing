'use client';

import Image from 'next/image';
import { Search, Palette, BarChart3, Globe, MessageSquare, UserPlus } from 'lucide-react';
import LandingMissionTag from './landing/LandingMissionTag';

const features = [
  { icon: Search, label: 'SEO-optimized', color: 'text-sky-500' },
  { icon: Palette, label: 'Fully customizable', color: 'text-blue-500' },
  { icon: BarChart3, label: 'Built-in analytics', color: 'text-sky-600' },
  { icon: Globe, label: 'Custom domains', color: 'text-blue-600' },
  { icon: MessageSquare, label: 'Collect customer feedback', color: 'text-sky-400' },
  { icon: UserPlus, label: 'Invite your team', color: 'text-blue-400' },
];

const integrations = [
  { name: 'Intercom', logo: 'https://dazzling-cat.netlify.app/intercom.png' },
  { name: 'Zendesk', logo: 'https://dazzling-cat.netlify.app/zendesk.jpg' },
  { name: 'Crisp', logo: 'https://dazzling-cat.netlify.app/crisp.png' },
  { name: 'Help Scout', logo: 'https://dazzling-cat.netlify.app/helpscout.png' },
  { name: 'Fernand', logo: 'https://dazzling-cat.netlify.app/fernand.png' },
];

type GetStartedSectionProps = {
  embedded?: boolean;
};

export default function GetStartedSection({ embedded = false }: GetStartedSectionProps) {
  const content = (
    <>
      <div className="border-b border-slate-200 py-8 md:py-10">
        <LandingMissionTag index="10" label="Get started" />
      </div>
      <div className="overflow-hidden border border-slate-200 bg-slate-200 lg:grid lg:grid-cols-2">
        <section className="border-b border-slate-200 bg-white lg:border-b-0 lg:border-r">
          <div className="px-5 py-10 sm:px-6 sm:py-14">
            <span className="font-roboto-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-600">Wonder-hosted</span>
            <h2 className="landing-display mt-4 text-balance text-3xl font-semibold text-slate-900 lg:text-4xl">
              Get started in minutes
            </h2>
            <p className="mt-6 text-base text-slate-700">
              Don&apos;t have a help center yet? Set up your help center and let our agent draft articles for you in minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.label} className="flex shrink-0 items-center gap-2">
                    <IconComponent className={feature.color} size={20} strokeWidth={1.5} />
                    <span className="whitespace-nowrap text-sm text-slate-600">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="px-5 py-10 sm:px-6 sm:py-14">
            <span className="font-roboto-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-600">One-click migration</span>
            <h2 className="landing-display mt-4 text-balance text-3xl font-semibold text-slate-900 lg:text-4xl">
              Zero-downtime migration
            </h2>
            <p className="mt-6 text-base text-slate-700">
              Migrate your existing help center to Wonder in one click without breaking links or hurting your SEO.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 pb-2">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="flex items-center gap-2 rounded-sm border border-slate-200 bg-white px-3 py-1.5 shadow-sm transition-colors hover:bg-sky-50"
                >
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    width={20}
                    height={20}
                    className="size-5 shrink-0 rounded object-cover"
                  />
                  <span className="whitespace-nowrap text-sm font-medium text-slate-800">{integration.name}</span>
                </div>
              ))}
              <a
                className="flex items-center rounded-sm border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-sky-700 shadow-sm transition-colors hover:bg-sky-50"
                href="/integration"
              >
                View all integrations →
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );

  if (embedded) return content;

  return (
    <div className="border border-gray-200 bg-white px-4 sm:px-6 lg:px-8">
      <div className="m-auto max-w-7xl">{content}</div>
    </div>
  );
}
