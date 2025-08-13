"use client";

import React from 'react';
import { Search, Eye, Settings } from 'lucide-react';
import Link from 'next/link';

export default function Helpdesk_Type() {
  return (

    <div>
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


      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 mb-4">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-funneldisplay text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tighter tracking-tighter mb-4 aos-init aos-animate">
            Turn
            <span className="text-3xl sm:text-4xl md:text-5xl relative">
              <span className="inline-flex items-center relative sm:bottom-0 bottom-[-1px] justify-center mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="12 0.19 487.619 510.941" className="w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 ml-3 max-w-full max-h-full">
                  <path
                    d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934L358.186 335.22V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
              Notion into a
            </span>
            <br className="block" />
            professional <span className="text-3xl sm:text-4xl md:text-5xl gradient-text-accent mx-4">changelog</span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-slate-500 sm:mb-0 sm:text-lg md:mt-5 md:text-lg md:max-w-2xl">
            Your support inbox is flooded with customers who want to self-serve, not spend hours talking to an agent.  But your help center is constantly out of date and your customers can’t find what they’re looking for. With Wonder, never again.
          </p>
        </div>


      </div>


    </div>
  );
}