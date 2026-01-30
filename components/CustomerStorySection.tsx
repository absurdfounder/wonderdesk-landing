'use client';

import Image from 'next/image';

const sectionXPadding = 'px-4 sm:px-6 lg:px-8';

export default function CustomerStorySection() {
  return (
    <section className="border border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center lg:grid-cols-2">
      <div className={`${sectionXPadding} flex flex-col gap-6 py-12`}>
        <div className="font-silkscreen text-xl text-blue-600">Customer Story</div>
        <blockquote className="font-funneldisplay text-2xl font-medium text-neutral-800 lg:text-3xl pr-4">
          &ldquo;I do in 5 minutes what used to take one hour. I think it easily saves me 20h a
          month.&rdquo;
        </blockquote>
        <div className="flex flex-col gap-1">
          <div className="font-medium text-neutral-800">Tristan Roth</div>
          <div className="text-sm text-neutral-500">Founder, ISMS Copilot</div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-stone-100">
        <div className="relative aspect-[5/3]">
          <Image
            src="https://cdn.senja.io/public/avatar/f25a441d-39c2-40ca-af8c-c58d68cc8cbf_tristan%20roth%20portrait%20-%20Copie.jpg"
            alt="Tristan Roth"
            fill
            className="object-cover"
            style={{
              filter: 'grayscale(100%) brightness(0.95) sepia(100%) hue-rotate(40deg) saturate(60%)',
            }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(0,0,0,0.3) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.3) 75%),
                linear-gradient(45deg, rgba(0,0,0,0.3) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.3) 75%)
              `,
              backgroundSize: '4px 4px',
              backgroundPosition: '0 0, 2px 2px',
              imageRendering: 'pixelated',
            }}
          />
        </div>
      </div>
      </div>
    </section>
  );
}
