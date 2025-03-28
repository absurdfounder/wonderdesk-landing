"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { StarIcon, ArrowUpRight, ArrowRight, Check, ShoppingBag, BookOpen, FileText, FileQuestion, ExternalLink } from "lucide-react";
// Define site bundles directly in the component
// You can move this to a separate file later if needed
const siteBundles = [
  {
    id: 1,
    name: "Directory Site",
    notionImage: "https://dazzling-cat.netlify.app/notiondatabase.png",
    siteImage: "https://dazzling-cat.netlify.app/Wondersite.png",
    description: "Business Directory"
  },
  {
    id: 2,
    name: "Job Board",
    notionImage: "https://dazzling-cat.netlify.app/notiondatabase.png",
    siteImage: "https://dazzling-cat.netlify.app/Wondersite.png",
    description: "Job Listings Platform"
  },
  {
    id: 3,
    name: "Real Estate Listings",
    notionImage: "https://dazzling-cat.netlify.app/notiondatabase.png",
    siteImage: "https://dazzling-cat.netlify.app/Wondersite.png",
    description: "Property Marketplace"
  },
  {
    id: 4,
    name: "Event Directory",
    notionImage: "https://dazzling-cat.netlify.app/notiondatabase.png",
    siteImage: "https://dazzling-cat.netlify.app/Wondersite.png",
    description: "Event Listing Platform"
  },
  {
    id: 5,
    name: "Marketplace",
    notionImage: "https://dazzling-cat.netlify.app/notiondatabase.png",
    siteImage: "https://dazzling-cat.netlify.app/Wondersite.png",
    description: "Product Marketplace"
  }
];

// Input suggestion options
const suggestionOptions = [
  "Job website with location filters",
  "Real estate directory with Sales AI",
  "Marketplace for handmade products",
  "Event listing platform for local events",
  "Knowledge base for software documentation"
];

// Typing animation phrases
const typingPhrases = [
  "my blog...",
  "an internal tool that...",
  "a portfolio...",
  "a directory...",
  "a helpdesk...",
  "a marketplace where..."
];

interface HeroProps {
  onCategorySelect?: (category: string) => void;
}

export default function Hero({ onCategorySelect }: HeroProps) {
  // Original states
  const words = ["directory", "blog",  "job board", "helpdesk", "documentation"];
  const [index, setIndex] = useState(0);
  const [currentSiteBundle, setCurrentSiteBundle] = useState(siteBundles[0]);
  const [transitioning, setTransitioning] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  // Typing animation states
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedPhrase, setDisplayedPhrase] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);
  
  // Controls typing speed
  const typingSpeed = 100; // milliseconds per character
  const deletingSpeed = 50; // milliseconds per character
  const pauseBeforeDelete = 1500; // pause before deleting starts
  const pauseBeforeNewPhrase = 500; // pause before new phrase starts

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      
      // Start transition animation
      setTransitioning(true);
      
      // After a short delay, change the site bundle
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * siteBundles.length);
        setCurrentSiteBundle(siteBundles[randomIndex]);
        
        // End transition animation
        setTimeout(() => {
          setTransitioning(false);
        }, 300);
      }, 300);
      
    }, 3000); // Changed to 3 seconds for better user experience
    
    return () => clearInterval(interval);
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (!isAnimating) return;
    
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayedPhrase.length < typingPhrases[currentPhraseIndex].length) {
        // Still typing current phrase
        timeout = setTimeout(() => {
          setDisplayedPhrase(typingPhrases[currentPhraseIndex].substring(0, displayedPhrase.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing, pause before deleting
        setTypingComplete(true);
        timeout = setTimeout(() => {
          setIsTyping(false);
          setTypingComplete(false);
        }, pauseBeforeDelete);
      }
    } else {
      if (displayedPhrase.length > 0) {
        // Deleting
        timeout = setTimeout(() => {
          setDisplayedPhrase(displayedPhrase.substring(0, displayedPhrase.length - 1));
        }, deletingSpeed);
      } else {
        // Finished deleting, move to next phrase
        timeout = setTimeout(() => {
          setCurrentPhraseIndex((currentPhraseIndex + 1) % typingPhrases.length);
          setIsTyping(true);
        }, pauseBeforeNewPhrase);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayedPhrase, isTyping, currentPhraseIndex, isAnimating]);
  
  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
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

  // Handle input change - added React.ChangeEvent<HTMLTextAreaElement> type
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    if (isAnimating) {
      setIsAnimating(false);
    }
  };

  // Handle keypress (Enter) - added React.KeyboardEvent<HTMLTextAreaElement> type
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault();
      setShowLoginPopup(true);
    }
  };

  // Add suggestion to input
  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setIsAnimating(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Close login popup
  const closeLoginPopup = () => {
    setShowLoginPopup(false);
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

          {/* Input Section with Typing Animation - FIXED OVERLAY ISSUE */}
          <motion.div
            className="max-w-3xl mx-auto mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <div className="bg-white border border-slate-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-orange-300 focus-within:border-slate-600">
                <div className="relative">
                  <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    onClick={() => setIsAnimating(false)}
                    placeholder={isAnimating ? "" : "Ask Wonder to create a ..."}
                    className="w-full p-5 text-lg text-slate-700 outline-none resize-none min-h-[100px] placeholder:text-slate-400 font-lato border-transparent focus:outline-none focus:ring-0 focus:border-transparent"
                    rows={3}
                  />

                  {isAnimating && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent pointer-events-none p-5">
                      <div className="text-lg text-slate-400 font-lato">
                        Ask Wonder to create <span className="text-slate-400">{displayedPhrase}</span>
                        <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity text-orange-500`}>|</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-100 bg-slate-50 p-2 px-3">
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="flex gap-2 items-center">
                      <button
                        className="text-slate-900 hover:text-orange-600 transition-colors rounded-md flex items-center justify-center gap-1 px-2 py-1.5 text-sm font-medium hover:bg-slate-100"
                        type="button"
                        onClick={() => setShowLoginPopup(true)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960" className="shrink-0 h-4 w-4" fill="currentColor">
                          <path
                            d="M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h379q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5H180v600h600v-378q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v378q0 24.75-17.62 42.37Q804.75-120 780-120zm520-579h-51q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h51v-51q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v51h51q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5h-51v51q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37zM449-307l-82-108q-5-6-12-6t-12 6l-84 109q-6 8-1.5 16t13.5 8h419q8.5 0 12.75-8t-.75-16L588-458q-5-6-12-6t-12 6zm31-173"
                          ></path>
                        </svg>
                        <span>Attach</span>
                      </button>
                      <input
                        id="file-upload"
                        className="hidden"
                        accept="image/jpeg,.jpg,.jpeg,image/png,.png,image/webp,.webp"
                        type="file"
                        tabIndex={-1}
                      />
                      <button
                        className="text-slate-900 hover:text-orange-600 transition-colors rounded-md flex items-center justify-center gap-1 px-2 py-1.5 text-sm font-medium hover:bg-slate-100"
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        data-state="closed"
                        onClick={() => setShowLoginPopup(true)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="shrink-0 h-4 w-4">
                          <mask id="figma_logo_outline_svg__a" width="21" height="20" x="0" y="0" maskUnits="userSpaceOnUse" ><path fill="#D9D9D9" d="M.286 0h20v20h-20z"></path></mask>
                          <g mask="url(#figma_logo_outline_svg__a)">
                            <path
                              fill="currentColor"
                              stroke="currentColor"
                              strokeWidth="0.25"
                              d="M5.772 5.716c0 .872.419 1.647 1.065 2.134a2.67 2.67 0 0 0-1.065 2.135c0 .873.419 1.647 1.065 2.135a2.67 2.67 0 0 0-1.065 2.134 2.68 2.68 0 0 0 2.683 2.67 2.704 2.704 0 0 0 2.705-2.693v-2.106c.446.333 1 .53 1.599.53h.046a2.67 2.67 0 0 0 1.606-4.805 2.67 2.67 0 0 0-1.606-4.805H8.443a2.67 2.67 0 0 0-2.67 2.67Zm6.987 5.867a1.598 1.598 0 0 1 0-3.196h.046a1.598 1.598 0 1 1 0 3.196zM8.443 8.387h1.645v3.196h-1.65a1.598 1.598 0 0 1 .005-3.196Zm-.005 4.269h1.65v1.575c0 .892-.734 1.621-1.633 1.621-.887 0-1.61-.719-1.61-1.598s.712-1.595 1.592-1.598Zm1.65-5.342H8.443a1.598 1.598 0 1 1 0-3.196h1.645zm2.717 0H11.16V4.118h1.645a1.598 1.598 0 1 1 0 3.196Z"
                            ></path>
                          </g>
                        </svg>
                        <span>Import</span>
                      </button>
                    </div>
                    
                    <div className="flex items-center">

                      <button 
                        id="chatinput-send-message-button" 
                        type="submit" 
                        className={`flex gap-2 px-2 items-center justify-center rounded-full p-1 ${inputValue.trim() ? 'bg-slate-900 text-white hover:bg-orange-600' : 'bg-slate-200 text-slate-400'} transition-colors duration-150 ease-out`}
                        disabled={!inputValue.trim()}
                        onClick={() => inputValue.trim() && setShowLoginPopup(true)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 -960 960 960" className="shrink-0 h-5 w-5" fill="currentColor">
                          <path
                            d="M450-514v152q0 13 8.5 21.5T480-332t21.5-8.5T510-362v-152l53 53q9 9 21 9t21-9 9-21-9-21L501-607q-9-9-21-9t-21 9L355-503q-9 9-9 21t9 21 21 9 21-9zm30 434q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-83 31.5-156t86-127T325-848.5 480-880q83 0 156 31.5T763-763t85.5 127T880-480q0 82-31.5 155T763-197.5t-127 86T480-80"
                          ></path>
                        </svg>
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Suggestion buttons */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {suggestionOptions.map((suggestion, idx) => (
                  <motion.button
                    key={idx}
                    className="text-sm bg-slate-100 opacity-75 hover:bg-slate-800 hover:opacity-100 text-slate-900 hover:text-white px-3 py-1.5 rounded-full border border-transparent transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

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

          {/* Site transformation visualization */}
          <div className="w-full py-12 overflow-x-hidden">
            <div className="max-w-7xl mx-auto relative">
              <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-8 gap-8 md:gap-4">
                {/* Notion Site Column */}
                <div className="w-full">
                  <div className="">
                    <div className="space-y-4">
                      <motion.div
                        className="relative overflow-hidden rounded-lg"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: transitioning ? 0.5 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={currentSiteBundle.notionImage}
                          alt="Notion site preview"
                          className="w-full rounded-lg object-cover"
                        />
                      </motion.div>
                      <p className="text-gray-800 text-sm text-center font-bold">From Notion {currentSiteBundle.name}</p>
                    </div>
                  </div>
                </div>

                {/* Arrow Column */}
                <div className="rotate-90 md:rotate-0 flex-shrink-0">
                  <div className="bg-gray-100 rounded-full p-2">
                    <ArrowRight className="w-8 h-9 text-orange-400" />
                  </div>
                </div>

                {/* Super Site Column */}
                <div className="w-full">
                  <div>
                    <div className="space-y-4">
                      <motion.div
                        className="relative overflow-hidden rounded-lg"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: transitioning ? 0.5 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={currentSiteBundle.siteImage}
                          alt="Super site preview"
                          className="w-full rounded-lg object-cover"
                        />
                      </motion.div>
                      <p className="text-gray-800 text-sm text-center font-bold">To Custom {currentSiteBundle.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <motion.div 
            className="bg-slate-900 rounded-lg p-8 max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-white">Sign in to continue</h2>
              <button 
                onClick={closeLoginPopup}
                className="text-gray-500 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <p className="text-gray-300 mb-6 grid">Create an account or sign in to use AI Designer.</p>
            <a type="button" href="https://app.wondersites.co" className="w-full bg-white hover:bg-gray-100 text-slate-900 py-3 rounded block text-center">
              Sign up for free
            </a>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
} 