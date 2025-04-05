'use client'

import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";



export default function NotiontoWebsite() {

  return (
    <div>

<div className="justify-center mb-8 mt-12 max-w-7xl m-auto" data-aos="zoom-y-out" data-aos-delay="450">

<div className="max-w-3xl mx-auto text-center pt-4 mb-6 sm:mb-8">
  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
  Update once in Notion,
    <span className="font-source-serif-4 block font-normal text-orange-600">
    see changes instantly.
    </span>
  </h1>
</div>
  {/* Site transformation visualization - Removed transition animation */}
  <div className="w-full py-12 overflow-x-hidden">
    <div className="max-w-7xl mx-auto relative">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-8 gap-8 md:gap-4">
        {/* Notion Site Column */}
        <div className="w-full">
          <div className="">
            <div className="space-y-4">
              <motion.div
                className="relative overflow-hidden rounded-lg"
              >
                <img
                  src="https://dazzling-cat.netlify.app/notiondatabase.png"
                  alt="Notion site preview"
                  className="w-full rounded-lg object-cover"
                />
              </motion.div>
              <p className="text-gray-800 text-sm text-center font-bold">From Notion Table</p>
            </div>
          </div>
        </div>

        {/* Arrow Column */}
        <div className="rotate-90 md:rotate-0 flex-shrink-0">
          <div className="bg-gray-800  rounded-md p-2">
            <ArrowRight className="w-8 h-9 text-orange-400" />
          </div>
        </div>

        {/* Super Site Column */}
        <div className="w-full">
          <div>
            <div className="space-y-4">
              <motion.div
                className="relative overflow-hidden rounded-lg"
              >
                <img
                  src="https://dazzling-cat.netlify.app/Wondersite.png"
                  alt="Super site preview"
                  className="w-full rounded-lg object-cover"
                />
              </motion.div>
              <p className="text-gray-800 text-sm text-center font-bold">To Custom Website</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}
