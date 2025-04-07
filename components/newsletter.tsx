'use client'

import React, { useState, useEffect } from 'react'; // Import React hooks
import Image from 'next/image'; // Import the Image component from Next.js
import notionfooterImage from '@/public/images/notionfooter.png';
import Link from 'next/link';

export default function Newsletter() {
  //  const words = ["Helpdesk", "Marketplaces", "Blog", "Company Wiki", "Documentation" ];
  const words = ["Directory", "Marketplaces", "Directory" ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change word every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div 
            className="relative py-10 px-8 md:py-16 md:px-12 overflow-hidden rounded-2xl my-8 border" 
            style={{
              backgroundImage: 'linear-gradient(rgb(207 244 255), rgb(106 199 255 / 62%)), url(https://dazzling-cat.netlify.app/backgroundthing.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
            }}
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
                <h3 className="h2 text-slate-800 my-2">Try Wonder</h3>
                <p className="h4 font-normal text-slate-800 my-2">Join thousands of other founders and creators creating awesome websites the easy way.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto mt-4">
                  <div className="flex flex-col sm:flex-row max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <Link href="https://app.wondersites.co" className="btn text-dark text-2xl bg-orange-300 hover:bg-orange-700 hover:text-orange-100 w-full mb-4 sm:w-auto sm:mb-0 flex items-center justify-center" >Create a free account</Link>
                  </div>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}