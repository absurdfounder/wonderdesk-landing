'use client'

import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'

export default function ModalVideo() {
  const [modalOpen, setModalOpen] = useState(false)

  // Log the modal state changes for debugging
  useEffect(() => {
    console.log("modalOpen state:", modalOpen)
  }, [modalOpen])

  return (
    <div>
      {/* Video Thumbnail */}
      <div className="justify-center mb-8 mt-12 max-w-4xl m-auto" data-aos="zoom-y-out" data-aos-delay="450">
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
            <source src="https://dazzling-cat.netlify.app/wonder.mp4" type="video/mp4" />
          </video>

          {/* Play Button */}
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-32 md:w-56 lg:w-56 cursor-pointer transition-transform hover:scale-110"
            onClick={() => {
              console.log("Play button clicked!")
              setModalOpen(true)
            }}
          >
            <img
              src="https://dazzling-cat.netlify.app/sticky.png"
              alt="Play video"
              className="w-full h-auto"
            />
          </button>
        </div>
      </div>

      {/* Simplified Modal */}
      {modalOpen && (
        <Dialog
          open={modalOpen}
          onClose={() => {
            console.log("Modal closed")
            setModalOpen(false)
          }}
          className="fixed inset-0 z-[100000] flex items-center justify-center"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-75"
            onClick={() => setModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <Dialog.Panel className="relative bg-black w-full max-w-[90vw] lg:max-w-[1150px] aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/MoQ4suV6lvU?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
              style={{ aspectRatio: '16/9' }}
            ></iframe>
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  )
}
