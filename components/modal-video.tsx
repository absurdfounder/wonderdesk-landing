'use client'

import { useState, useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

/**
 * @typedef {Object} ModalVideoProps
 * @property {string} video - The URL of the video to be played
 * @property {number} videoWidth - The width of the video player
 * @property {number} videoHeight - The height of the video player
 */

interface ModalVideoProps {
  video: string;
  videoWidth: number;
  videoHeight: number;
}

const BRAND_LOGOS = [
  { id: 'xumm', src: 'https://dazzling-cat.netlify.app/remotedesk-gray.png', alt: 'Xumm', className: 'h-10 w-auto object-contain' },
  { id: 'green-got', src: 'https://dazzling-cat.netlify.app/downtown.png', alt: 'Green Got', className: 'h-12 w-auto object-contain lg:h-20' },
  { id: 'growthx', src: 'https://dazzling-cat.netlify.app/saasboiler-gray.png', alt: 'GrowthX', className: 'h-10 w-auto object-contain lg:h-8' },
  { id: 'beyonk', src: 'https://dazzling-cat.netlify.app/vcdeal.png', alt: 'Beyonk', className: 'h-10 w-auto object-contain lg:h-10' },
  { id: 'taplio', src: 'https://dazzling-cat.netlify.app/tinystartups-gray.png', alt: 'Taplio', className: 'h-10 w-auto object-contain lg:h-10' },
  { id: 'lal10', src: 'https://dazzling-cat.netlify.app/rightagency-gray.png', alt: 'Lal10', className: 'h-10 w-auto object-contain' },
  { id: 'indie', src: 'https://dazzling-cat.netlify.app/betterhealth.png', alt: 'Indie Worldwide', className: 'h-10 w-auto object-contain lg:h-8' }
];

export default function ModalVideo({
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div>
      {/* Video thumbnail */}
      <div>
        <div className="justify-center mb-8 mt-8 aos-init aos-animate" data-aos="zoom-y-out" data-aos-delay="450">
          <div className="banner-bottom-wrapper">
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
              <source src="https://dazzling-cat.netlify.app/Effortless%20Website%20Creation.mp4" type="video/mp4" />
            </video>
          </div>

          <button 
            className="absolute -mt-64 flex items-center transform -translate-y-1/2 m-auto justify-center w-full" 
            onClick={() => { setModalOpen(true) }}
          >

<img src="https://dazzling-cat.netlify.app/sticky.webp"/>

          </button>
        </div>


      </div>
      {/* End: Video thumbnail */}

      <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
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
            <div className="max-w-6xl mx-auto h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full aspect-video bg-black overflow-hidden">
                <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
          {/* End: Modal dialog */}

        </Dialog>
      </Transition>
    </div>
  )
}