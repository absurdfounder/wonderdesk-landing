'use client'

import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import LandingMissionTag from './landing/LandingMissionTag'

type ModalVideoProps = {
  embedded?: boolean;
};

export default function ModalVideo({ embedded = false }: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [modalOpen])

  const content = (
    <>
      <LandingMissionTag index="03" label="Product tour" className="mb-4" />
      <div className="landing-card relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 p-4 sm:p-6 md:p-8">
        <div
          className="relative w-full cursor-pointer overflow-hidden rounded-sm border border-slate-200 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(2,132,199,0.12)]"
          onClick={() => setModalOpen(true)}
        >
          <div className="aspect-video">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src="https://dazzling-cat.netlify.app/wonder.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-sky-950/15 transition-colors hover:bg-sky-950/25">
              <div className="flex items-center justify-center rounded-full bg-white/95 p-4 shadow-xl transition-all duration-300 hover:scale-110 md:p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600 md:h-12 md:w-12" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center px-2 md:px-4">
          <Dialog.Overlay className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm" />
          <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-sm bg-black">
            <button
              className="absolute right-2 top-2 z-20 rounded-full bg-black/60 p-1 text-white md:right-3 md:top-3 md:p-2"
              onClick={() => setModalOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/MoQ4suV6lvU?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )

  if (embedded) {
    return <div className="py-12 md:py-16">{content}</div>
  }

  return (
    <section className="border border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">{content}</div>
    </section>
  )
}
