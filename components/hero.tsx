"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Github } from "lucide-react";
import TabImageHotspots from "./tabed_examples";
import ChatInput from "./chatinput";
// Define site bundles directly in the component
// You can move this to a separate file later if needed


interface HeroProps {
  onCategorySelect?: (category: string) => void;
}

export default function Hero({ onCategorySelect }: HeroProps) {
  // Original states
  const words = ["directory", "blog", "job board", "helpdesk", "documentation"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);



    }, 3000); // Changed to 3 seconds for better user experience

    return () => clearInterval(interval);
  }, []);

  const handleCategoryClick = (category: string) => {
    if (typeof onCategorySelect === 'function') {
      onCategorySelect(category);
    }
    const templateSection = document.getElementById('template-section');
    if (templateSection) {
      templateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pb-12">
          {/* Header section */}
          <motion.div
            className="text-center px-4 sm:px-6 lg:px-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="h2 mb-8 text-center leading-tight font-comfortaa tracking-loose text-slate-700">
              Easy to use
              Wordpress alternative
              {" "}
              <span className="font-bungee block font-normal text-gray-800 my-2">
                powered by

                <div className="inline-flex items-center justify-center ml-1 px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="12 0.19 487.619 510.941" className="w-7 h-7 mr-2 sm:w-9 sm:h-9"><path d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934L358.186 335.22V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z" fillRule="evenodd"></path></svg>
                  <b className="text-gray-800">Notion</b>
                </div>
              </span>{" "}
            </h1>

            <p className="text-xl text-slate-900 mb-8 font-lato max-w-2xl m-auto">
              <span className="text-slate-900 "><b>Build Production-ready</b> apps in a hours setup </span> {" "}
              {["Listings", "SEO", "Custom Domains", "Payments"].map((category, index) => (
                <>
                  {index > 0 && ", "}
                  <motion.b
                    key={category}
                    className="text-slate-800 border-b border-orange-600 hover:text-orange-500 cursor-pointer"
                    onClick={() => handleCategoryClick(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.b>
                </>
              ))}
              {" "}
              – without any technical skills.
            </p>
          </motion.div>

          {/* Chat Input Component 
          <ChatInput />
          */}


<div className="flex flex-col sm:flex-row gap-4 p-4 items-center m-auto justify-center rounded-lg">
      <button className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-800 border border-gray-200 rounded-md text-gray-200 font-medium hover:bg-gray-50 transition-colors">
        <Github size={24} />
        <span>Sign up with Notion</span>
      </button>
      
      <button className="flex items-center justify-center py-3 px-6 bg-orange-600 text-white rounded-md font-medium hover:bg-teal-700 transition-colors">
        <span>Start for free</span>
        <svg 
          className="ml-2 w-4 h-4" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
            clipRule="evenodd" 
          />
        </svg>
      </button>
    </div>


          {/* Features section */}
          <motion.div
            className="flex flex-col font-bold items-center justify-center space-x-2 space-y-1 text-sm opacity-60 sm:flex-row sm:space-y-0 mt-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {["7-day trial", "Free Design Service", "Free Data Migration"].map((feature, index) => (
              <div key={index} className="flex items-center justify-start">
                <Check className="w-4 h-4 mr-2 text-slate-900" />
                {feature}
              </div>
            ))}
          </motion.div>

          <TabImageHotspots />


        </div>
      </div>
    </motion.section>
  );
}