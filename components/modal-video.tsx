'use client'

import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";



export default function ModalVideo() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      {/* Video Thumbnail */}
      <div className="justify-center mb-8 mt-12 max-w-7xl m-auto" data-aos="zoom-y-out" data-aos-delay="450">



        <div className="banner-bottom-wrapper relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full mx-auto rounded-2 object-cover border border-4 bg-black p-1"
            style={{ borderRadius: '0.3rem', imageRendering: 'auto' }}
            poster="https://web3summary.com/assets/videos/mainvid.jpg"
          >
            <source src="https://dazzling-cat.netlify.app/Wonder.mp4" type="video/mp4" />
          </video>

          {/* Play Button */}
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-32 md:w-56 lg:w-56 cursor-pointer transition-transform hover:scale-110"
            onClick={() => setModalOpen(true)}
          >
            <img
              src="https://dazzling-cat.netlify.app/sticky.png"
              alt="Play video"
              className="w-full h-auto"
            />
          </button>
        </div>
      </div>

      {/* Modal */}
      <Transition show={modalOpen} as={Fragment}>
        <Dialog onClose={() => setModalOpen(false)}>
          {/* Modal Backdrop */}
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

          {/* Modal Content */}
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
              {/* Hardcoded YouTube Video */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/IKvYliCFwxs?autoplay=1"
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
        </Dialog>
      </Transition>
    </div>
  )
}
