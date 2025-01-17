'use client'


import React, { useState, useEffect } from 'react'; // Import React hooks
import Image from 'next/image'; // Import the Image component from Next.js
import notionfooterImage from '@/public/images/notionfooter.png';
import Link from 'next/link';

export default function Newsletter() {
  const words = ["Helpdesk", "Marketplaces", "Blog", "Company Wiki", "Documentation" ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change word every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-slate-900 py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden rounded-2xl" 
          >

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" >

             

            <Image alt="Logo" 
              width={400} 
              className="block" 
              src={notionfooterImage} />



            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Ready to turn your Notion pages into <span className=" -translate-y-full slideUp h-full w-full bg-clip-text text-transparent text-orange-600">{words[index]}</span> ?</h3>
                <p className="text-xl text-slate-400 mb-4">Join the BoringSites AI and discover the easiest way to manage your website.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row max-w-xs mx-auto sm:max-w-md lg:mx-0">
                  <Link href="app.BoringSites.com" className="btn text-dark text-2xl bg-orange-600 hover:bg-orange-600 hover:text-orange-100 w-full mb-4 sm:w-auto sm:mb-0 flex items-center justify-center" >Create</Link>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-slate-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-slate-400 mt-3">Phew! Hassle free life starts here.</p>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}