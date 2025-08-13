'use client'

import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion } from "framer-motion";
import { ArrowRight, Check, Search, Eye, Settings } from "lucide-react";



export default function NotiontoWebsite() {

  return (
    <div>

      <div className="justify-center mb-8 mt-12 max-w-7xl m-auto" data-aos="zoom-y-out" data-aos-delay="450">

        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-lg p-12 max-w-2xl w-full">
            <h1 className="text-3xl font-semibold text-gray-900 mb-8 leading-tight">
              This week, dozens of your customers...
            </h1>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Search className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Searched your help center
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="w-4 h-4 text-yellow-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Found an outdated or irrelevant article
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Settings className="w-4 h-4 text-red-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  And sent you an angry email in support
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-900 font-medium">
                It's not your fault.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                That's the price of shipping quickly and constantly improving your product.
              </p>

              <p className="text-lg text-gray-900 font-medium italic">
                Your help center will inevitably go stale every week.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                You could do quarterly reviews and spend 30+ hours every month answering repeat tickets.
              </p>

              <p className="text-lg text-gray-900 font-medium italic">
                Or... you could just use Wonder...
              </p>
            </div>
          </div>
        </div>


        <div className="max-w-3xl mx-auto text-center pt-4 mb-6 sm:mb-8">
          <h2 className="font-funneldisplay text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Update once in Notion,
            <span className=" block font-normal text-orange-600">
              see changes instantly.
            </span>
          </h2>
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
