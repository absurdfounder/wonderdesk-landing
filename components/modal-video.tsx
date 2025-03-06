'use client'

import { useState, useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

interface ModalVideoProps {
  youtubeId: string;
  videoWidth: number;
  videoHeight: number;
}

const BRAND_LOGOS = [
  { id: 'xumm', src: 'https://dazzling-cat.netlify.app/remotedesk-gray.png', alt: 'Xumm', className: 'h-8 md:h-10 w-auto object-contain' },
  { id: 'green-got', src: 'https://dazzling-cat.netlify.app/downtown.png', alt: 'Green Got', className: 'h-10 md:h-12 w-auto object-contain lg:h-20' },
  { id: 'growthx', src: 'https://dazzling-cat.netlify.app/saasboiler-gray.png', alt: 'GrowthX', className: 'h-8 md:h-10 w-auto object-contain lg:h-8' },
  { id: 'beyonk', src: 'https://dazzling-cat.netlify.app/vcdeal.png', alt: 'Beyonk', className: 'h-8 md:h-10 w-auto object-contain lg:h-10' },
  { id: 'taplio', src: 'https://dazzling-cat.netlify.app/tinystartups-gray.png', alt: 'Taplio', className: 'h-8 md:h-10 w-auto object-contain lg:h-10' },
  { id: 'lal10', src: 'https://dazzling-cat.netlify.app/rightagency-gray.png', alt: 'Lal10', className: 'h-8 md:h-10 w-auto object-contain' },
  { id: 'indie', src: 'https://dazzling-cat.netlify.app/betterhealth.png', alt: 'Indie Worldwide', className: 'h-8 md:h-10 w-auto object-contain lg:h-8' }
];

export default function ModalVideo({
  youtubeId,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      {/* Video thumbnail */}
      <div>
        <div className="justify-center mb-8 mt-8 aos-init aos-animate max-w-7xl m-auto" data-aos="zoom-y-out" data-aos-delay="450">
          <div className="banner-bottom-wrapper relative">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              preload="auto"
              className="w-full mx-auto rounded-2 object-cover border border-4 bg-black p-1" 
              style={{borderRadius: '0.3rem', imageRendering: 'auto' }} 
              poster="https://web3summary.com/assets/videos/mainvid.jpg"
            >
              <source src="https://dazzling-cat.netlify.app/boring.mp4" type="video/mp4" />
            </video>
            
            {/* Play button - placing it inside the banner wrapper for proper positioning */}
            <button 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-32 md:w-56 lg:w-56 cursor-pointer transition-transform hover:scale-110" 
              onClick={() => { setModalOpen(true) }}
            >
              <img 
                src="https://dazzling-cat.netlify.app/sticky.webp"
                alt="Play video"
                className="w-full h-auto"
              />
            </button>
          </div>
        </div>
      </div>
      {/* End: Video thumbnail */}

      <Transition show={modalOpen} as={Fragment}>
        <Dialog onClose={() => setModalOpen(false)}>
          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="max-w-[90vw] w-[1150px] h-auto aspect-video bg-black overflow-hidden">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/bs3LiGl7zQQ?si=9ISLE22f4ku3U1tR&autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
                style={{ aspectRatio: '16/9' }}
              ></iframe>
            </Dialog.Panel>
          </Transition.Child>
          {/* End: Modal dialog */}
        </Dialog>
      </Transition>
    </div>
  )
}