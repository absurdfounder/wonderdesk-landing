"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { StarIcon, ArrowUpRight, Check, ShoppingBag, BookOpen, FileText, FileQuestion, ExternalLink } from "lucide-react";

import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";

interface HeroProps {
  onCategorySelect?: (category: string) => void;
}

export default function Hero({ onCategorySelect }: HeroProps) {

  /*
    const words = [
      "helpdesk",
      "marketplace",
      "blog",
      "company wiki",
      "documentation",
    ];
    */

  const words = [
    "directory",
    "directory",
    "marketplace",
    "marketplace",
    "directory",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1800);
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
    >
      <div
        className="absolute bottom-0 pointer-events-none z-1 h-screen w-screen"
        aria-hidden="true"
        style={{ width: "-webkit-fill-available", opacity: 0.1 }}
      >
        <svg className="w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="100%"
              patternTransform="translate(0 -1)"
            >
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-18 md:pb-20 space-y-8 mt-8">
          <motion.div
            className="text-center px-4 sm:px-6 lg:px-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >

            <h1 className="h2 mb-8 text-center leading-tight font-comfortaa tracking-loose text-slate-700">
              Launch





              <span className="inline-block decoration-primary relative">
                <span className="relative z-10">
                  <motion.span
                    key={words[index]}
                    className="font-source-serif-4 h1 font-normal italic text-orange-600 px-4"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {words[index]}
                  </motion.span>
                </span>
                <span className="bottom-0 absolute bg-accent-pink h-4 md:h-6 md:-bottom-0.5 -inset-x-2 mx-4"></span>
              </span>

              in 4 hours, <b className="font-source-serif-4 h1 font-normal italic text-orange-600">not weeks</b>.{" "}
              <span className="font-bungee block font-normal text-orange-600 my-2">
                grow to millions in traffic
              </span>{" "}
              using Notion.
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-loose mb-4 hidden">
              <span className="">Easily create a </span> <br />
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  className="font-source-serif-4 font-normal italic text-orange-400"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
              <br />
              <span className="flex gap-4 justify-center items-center mt-2">
                <span className="">on </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="12 0.19 487.619 510.941"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain m-auto ml-0 mr-0"
                >
                  <path
                    d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934L358.186 335.22V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="">Notion.</span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-slate-600 mb-8 font-lato max-w-2xl m-auto">
              <span className="text-slate-600 block">Make your first $ right from your Notion App in a <u>few hours</u> setup </span> {" "}
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
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="btn text-dark text-2xl bg-orange-600 hover:bg-orange-600 hover:text-orange-100 w-full mb-4 sm:w-auto sm:mb-0 flex items-center justify-center"
                  href="https://app.BoringSites.com"
                >
                  Create your directory <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="btn text-slate-800 text-2xl border-slate-900 hover:bg-slate-800 hover:text-white w-full sm:w-auto sm:ml-4 flex items-center justify-center"
                  href="#template-section"
                >
                  View Examples <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center space-x-2 space-y-1 text-sm opacity-60 sm:flex-row sm:space-y-0 mt-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {["7-day trial", "Free Design Service", "Free Data Migration"].map((feature, index) => (
              <div key={index} className="flex items-center justify-start">
                <Check className="w-4 h-4 mr-2 text-orange-600" />
                {feature}
              </div>
            ))}
          </motion.div>

          <motion.div
            className="sm:flex gap-4 justify-center items-center mt-8 mb-8  flex-col sm:flex-row hidden"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {[
              { icon: FileQuestion, text: "Directory Site Demo", category: "helpdesk" },
              { icon: ShoppingBag, text: "Marketplace Site Demo", category: "marketplace" },
              { icon: BookOpen, text: "Membership Site Demo", category: "blog" },
              { icon: FileText, text: "Product Site Demo", category: "directory" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#"
                  className="flex items-center p-2 transition duration-150 ease-in-out border border-slate-600 text-slate-600 rounded-lg hover:bg-slate-900 hover:text-white"
                  onClick={() => handleCategoryClick(item.category)}
                >
                  <item.icon className="w-5 h-5 ml-2 text-slate-400" />
                  <div className="ml-4">
                    <p className="text-sm font-medium mr-2">{item.text}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>


          <div className="w-full py-12 overflow-x-hidden">
  <div className="max-w-7xl mx-auto relative">
    {/* Timeline line - positioned absolutely relative to container */}
    <div className="hidden lg:block absolute top-[192px] left-[10%] right-[10%] h-[2px] bg-primary z-10"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative">
          <img
            alt="Learn fundamentals"
            fetchPriority="high"
            width="192"
            height="192"
            decoding="async"
            data-nimg="1"
            className="w-48 scale-[0.60] translate-y-4"
            srcSet="https://codefa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgear.1c9850d2.png&w=256&q=75 1x, https://codefa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgear.1c9850d2.png&w=384&q=75 2x"
            src="https://codefa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgear.1c9850d2.png&w=384&q=75"
          />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
            <div className="w-4 h-4 bg-primary rounded-full hidden lg:block z-20 relative"></div>
          </div>
        </div>
        <div className="lg:pt-8">
          <div className="font-bold text-lg border-b-4 border border-0 w-full">Hour 1</div>
          <p className="text-base-content-secondary max-w-[20rem] mx-auto">Design the website.</p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative">
          <img
            alt="Build SaaS"
            fetchPriority="high"
            width="192"
            height="192"
            decoding="async"
            data-nimg="1"
            className="w-48"
            srcSet="https://codefa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fserver.41b0b400.png&w=256&q=75 1x, https://codefa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fserver.41b0b400.png&w=384&q=75 2x"
            src="https://codefa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fserver.41b0b400.png&w=384&q=75"
          />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
            <div className="w-4 h-4 bg-primary rounded-full hidden lg:block z-20 relative"></div>
          </div>
        </div>
        <div className="lg:pt-8">
          <div className="font-bold text-lg border-b-4 border border-0 w-full">Hour 3</div>
          <p className="text-base-content-secondary max-w-[20rem] mx-auto">Build a Database on Notion using FetchKitty.</p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative">
          <img
            alt="AI coding"
            fetchPriority="high"
            width="192"
            height="192"
            decoding="async"
            data-nimg="1"
            className="w-48 p-4 scale-75 translate-y-4"
            srcSet="https://codefa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcredit-card-reader.d1cc3127.png&w=256&q=75 1x, https://codefa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcredit-card-reader.d1cc3127.png&w=384&q=75 2x"
            src="https://codefa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcredit-card-reader.d1cc3127.png&w=384&q=75"
          />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
            <div className="w-4 h-4 bg-primary rounded-full hidden lg:block z-20 relative"></div>
          </div>
        </div>
        <div className="lg:pt-8">
          <div className="font-bold text-lg border-b-4 border border-0 w-full">Hour 4</div>
          <p className="text-base-content-secondary max-w-[20rem] mx-auto">Set up subscription payments</p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-4">
        <div className="relative">
          <img
            alt="Launch product"
            fetchPriority="high"
            width="192"
            height="192"
            decoding="async"
            data-nimg="1"
            className="w-48 p-4"
            srcSet="https://codefa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwizard.671ce364.png&w=256&q=75 1x, https://codefa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwizard.671ce364.png&w=384&q=75 2x"
            src="https://codefa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwizard.671ce364.png&w=384&q=75"
          />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
            <div className="w-4 h-4 bg-primary rounded-full hidden lg:block z-20 relative"></div>
          </div>
        </div>
        <div className="lg:pt-8">
          <div className="font-bold text-lg border-b-4 border border-0 w-full">In 4 hours</div>
          <p className="text-base-content-secondary max-w-[20rem] mx-auto">Launch your idea!</p>
        </div>
      </div>
    </div>
  </div>
</div>



        </div>
      </div>
    </motion.section>
  );
}