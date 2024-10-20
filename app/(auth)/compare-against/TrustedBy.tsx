import Image from 'next/image'

const imageData = [
  {
    src: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/3d6d8b9e-51b7-4733-8611-12babc56d8c3/Strapi/w=441.59999999999997,quality=90',
    alt: 'Strapi',
    width: 144,
    height: 42,
  },
  {
    src: 'https://dazzling-cat.netlify.app/tinystartups-gray.png',
    alt: 'Gumroad',
    width: 200,
    height: 34,
  },
  {
    src: 'https://dazzling-cat.netlify.app/remotedesk-gray.png',
    alt: 'Circle',
    width: 120,
    height: 35,
  },
  {
    src: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d4e13333-1551-4114-b1a6-d2a7041c58a4/spline/w=441.59999999999997,quality=90',
    alt: 'Spline',
    width: 144,
    height: 39,
  },
  {
    src: 'https://dazzling-cat.netlify.app/rightagency-gray.png',
    alt: 'Clubhouse',
    width: 192,
    height: 31,
  },
  {
    src: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/4f2d2e91-850a-49df-b099-c685aba7c766/browser-company/w=441.59999999999997,quality=90',
    alt: 'Browser Company',
    width: 144,
    height: 73,
  },
  {
    src: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/cba078a4-ecf1-4336-97d9-bffabc5fb432/Harmony/w=736,quality=90',
    alt: 'Harmony',
    width: 240,
    height: 48,
  },
];

export default function TrustedBy() {
  return (
    <div>



<div className="mt-8 text-center">
    <p className="text-lg font-semibold text-slate-700">Trusted by 100+ startups</p>
    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:mt-10 lg:gap-x-16 lg:gap-y-8">
    <img alt="Testimonial" src="https://dazzling-cat.netlify.app/dicordbots.png" className="h-10 w-auto object-contain lg:h-10" />
        <img alt="Xumm" src="https://dazzling-cat.netlify.app/remotedesk-gray.png" className="h-10 w-auto object-contain" />
        <img alt="Green Got" src="https://dazzling-cat.netlify.app/downtown.png" className="h-12 w-auto object-contain lg:h-20" />
        <img alt="GrowthX" src="https://dazzling-cat.netlify.app/saasboiler-gray.png" className="h-10 w-auto object-contain lg:h-8" />


        <img alt="Beyonk" src="https://dazzling-cat.netlify.app/vcdeal.png" className="h-10 w-auto object-contain lg:h-10" />
        <img alt="Taplio" src="https://dazzling-cat.netlify.app/tinystartups-gray.png" className="h-10 w-auto object-contain lg:h-10" />

        <img alt="Lal10" src="https://dazzling-cat.netlify.app/rightagency-gray.png" className="h-10 w-auto object-contain" />
        <img alt="Indie Worldwide" src="https://dazzling-cat.netlify.app/betterhealth.png" className="h-10 w-auto object-contain lg:h-8" />

    </div>
</div>



</div>

  );
}


