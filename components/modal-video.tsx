'use client'

import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

//import BoringSites_character  from '../public/images/BoringSites-herosec.png';


interface ModalVideoProps {
  thumb: StaticImageData
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  video: string
  videoWidth: number
  videoHeight: number
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div>

      {/* Video thumbnail */}
      <div>
        <div className="justify-center mb-8 mt-8 aos-init aos-animate" data-aos="zoom-y-out" data-aos-delay="450">


          {/*
        <Image className="md:max-w-none mx-auto rounded" 
          src={BoringSites_character}
         width={750} height={462}
         unoptimized
          alt="Features bg" />
  */}

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


          <button className="relative top-full flex items-center transform -translate-y-1/2 rounded-full group p-4 shadow-lg border border-4 border-gray-100 bg-orange-400 text-black m-auto text-xl font-bold px-6 px-4" onClick={() => { setModalOpen(true) }}>
            <svg className="w-6 h-6 fill-current text-gray-900 group-hover:text-blue-600 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-10 12z" />
              <path d="M10 17l6-5-6-5z" />
            </svg>
            <span className="ml-3">Watch the full video (2 min)</span>
          </button>
        </div>




        <div>



        <div className="mt-8 text-center">
    <p className="text-lg font-semibold text-gray-700">Trusted by startups</p>
    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:mt-10 lg:gap-x-16 lg:gap-y-8">
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
            leave="ttransition ease-out duration-200"
            leaveFrom="oopacity-100 scale-100"
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