'use client';

import Image from 'next/image';
import Link from 'next/link';

const integrations = [
  { name: 'Intercom', logo: 'https://dazzling-cat.netlify.app/intercom.png' },
  { name: 'Zendesk', logo: 'https://dazzling-cat.netlify.app/zendesk.jpg' },
  { name: 'Crisp', logo: 'https://dazzling-cat.netlify.app/crisp.png' },
  { name: 'Help Scout', logo: 'https://dazzling-cat.netlify.app/helpscout.png' },
  { name: 'Fernand', logo: 'https://dazzling-cat.netlify.app/fernand.png' },
];

export default function GetStartedSection() {
  return (
    <section className="bg-white">
      <div className="landing-grid-column">
        <div className="landing-grid-pad border-b border-slate-200 py-10 md:py-14">
          <p className="font-silkscreen text-xs uppercase tracking-wide text-wonder sm:text-sm">
            Easy migration
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-normal text-slate-800 sm:text-3xl md:text-4xl">
            Move your help center without rebuilding it
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Import content from Intercom, Zendesk, Help Scout, and other tools. Wonderdesk keeps your URLs,
            redirects, and SEO settings so the switch is low risk.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 shadow-sm"
              >
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={20}
                  height={20}
                  className="size-5 shrink-0 rounded object-cover"
                />
                <span className="whitespace-nowrap text-sm font-medium text-neutral-800">{integration.name}</span>
              </div>
            ))}

            <Link
              href="/integration"
              className="flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-600 shadow-sm transition-colors hover:bg-neutral-50 hover:text-neutral-900"
            >
              View all integrations →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
