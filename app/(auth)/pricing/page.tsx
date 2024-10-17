"use client";

import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import Image from "next/image";
import notionfooterImage from "@/public/images/nb-herosec.png";
import MigrateFrom from "@/public/images/migratefrom.png";
import Testimonials from "@/components/testimonials";
import Rating from "../compare-against/Rating";
import Link from "next/link";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader, Users, MessageSquare, FileText } from 'lucide-react';

const pricingMap: Record<number, number> = {
  10000: 18,
  50000: 37,
  100000: 56,
  1000000: 92,
};

interface Feature {
  name: string;
  popup?: {
    image: string;
    headline: string;
    description: string;
  };
}

const features: Feature[] = [
  {
    name: "Unlimited articles & collections",
    popup: {
      image: "/path/to/image1.png",
      headline: "Unlimited Articles",
      description: "Create unlimited articles and collections effortlessly.",
    },
  },
  {
    name: "Unlimited languages",
    popup: {
      image: "/path/to/image_languages.png",
      headline: "Multiple Languages",
      description: "Support for multiple languages to cater to a global audience.",
    },
  },
  {
    name: "5 BoringSites Sites",
    popup: {
      image: "/path/to/image2.png",
      headline: "Multiple Sites",
      description: "Manage up to 5 different BoringSites sites.",
    },
  },
  {
    name: "Custom Domain / SSL",
    popup: {
      image: "/path/to/image_custom_domain.png",
      headline: "Custom Domain & SSL",
      description: "Use your custom domain with SSL encryption for added security.",
    },
  },
  {
    name: "Paywall Integration",
    popup: {
      image: "/path/to/image3.png",
      headline: "Paywall Integration",
      description: "Integrate paywall seamlessly with your content.",
    },
  },
  {
    name: "SEO Ready",
    popup: {
      image: "/path/to/image4.png",
      headline: "SEO Ready",
      description: "Optimize your content for search engines with built-in SEO tools.",
    },
  },
  {
    name: "Password Protection",
    popup: {
      image: "/path/to/image_password_protection.png",
      headline: "Password Protection",
      description: "Protect your content with secure password protection.",
    },
  },
  {
    name: "Integrations",
    popup: {
      image: "/path/to/image_integrations.png",
      headline: "Integrations",
      description: "Integrate with your existing apps like Slack, Intercom, and more.",
    },
  },
  {
    name: "Advanced Customization",
    popup: {
      image: "/path/to/image_advanced_customization.png",
      headline: "Advanced Customization",
      description: "Customize your site extensively with no-code themes and templates.",
    },
  },
  {
    name: "Article Suggester",
    popup: {
      image: "/path/to/image_article_suggester.png",
      headline: "Article Suggester",
      description: "Get intelligent article suggestions to enhance your content.",
    },
  },
  {
    name: "Advanced Article Search",
    popup: {
      image: "/path/to/image_advanced_search.png",
      headline: "Advanced Article Search",
      description: "Provide powerful search capabilities for your articles.",
    },
  },
  {
    name: "Content Rating",
    popup: {
      image: "/path/to/image_content_rating.png",
      headline: "Content Rating",
      description: "Allow users to rate your content for better feedback.",
    },
  },
  {
    name: "Auto Sync",
    popup: {
      image: "/path/to/image_auto_sync.png",
      headline: "Auto Sync",
      description: "Automatically sync your content with Notion.",
    },
  },
  {
    name: "Remove 'Powered by' badge",
    popup: {
      image: "/path/to/image_remove_badge.png",
      headline: "Remove Branding",
      description: "Remove the 'Powered by BoringSites' badge from your site.",
    },
  },
  {
    name: "Detailed Analytics",
    popup: {
      image: "/path/to/image_detailed_analytics.png",
      headline: "Detailed Analytics",
      description: "Access in-depth analytics to track your site's performance.",
    },
  },
];

interface FAQ {
  question: string;
  answer: string;
}

const faqs: Record<string, FAQ[]> = {
  Website: [
    {
      question: "What is BoringSites?",
      answer:
        "BoringSites is the perfect tool for creating your knowledge base in the shortest possible time. It is powered by the best content management system in the world: Notion. You write your help articles in Notion and BoringSites takes care of the rest. It's as simple as that.",
    },
    {
      question: "Why do I need a knowledge base?",
      answer:
        "Unless you have built a flawless product (congratulations 🤩), your customers will always have questions and they demand immediate help. A knowledge base can provide all the information that users need in one place. It can range from FAQs about your product/service, common issues and their solutions, videos with tutorials on how to do things and more.",
    },
    {
      question: "Is my data safe with BoringSites?",
      answer:
        "BoringSites takes your privacy seriously and follows best practices to ensure that the confidentiality of personal information and customer data is protected and maintained. We do not disclose or share your data with outside parties. All your knowledge base content is hosted in your own Notion workspace.",
    },
  ],
  "AI Support Bot": [
    {
      question: "How does the AI Support Bot work?",
      answer:
        "The AI Support Bot integrates seamlessly with BoringSites to provide real-time assistance to your users, leveraging AI to answer common questions and provide guidance based on your knowledge base content.",
    },
    {
      question: "Can I customize the AI Support Bot?",
      answer:
        "Yes, you can customize the AI Support Bot to align with your brand's voice and style. Adjust the responses, add personalized greetings, and more to create a cohesive user experience.",
    },
    {
      question: "Does the AI Support Bot support multiple languages?",
      answer:
        "The AI Support Bot supports multiple languages, allowing you to cater to a global audience and provide support in the preferred language of your users.",
    },
  ],
  Pricing: [
    {
      question: "How does the free 7 day trial work?",
      answer:
        "BoringSites offers a 7 day free trial to help you explore. Free Design Service. There's zero cost to get in the product and set things up. Within the trial period you will be able to use all available features. After the trial is over, you can choose to subscribe to one of our offered subscription plans.",
    },
    {
      question: "What are the pricing plans?",
      answer:
        "BoringSites offers various pricing plans based on the number of users and features required. Check our pricing page for detailed information on each plan.",
    },
    {
      question: "Are there any additional fees?",
      answer:
        "Pricing is exclusive of taxes and additional local tax may be collected depending on your region. Some add-ons and advanced features might incur additional costs.",
    },
  ],
};

interface FAQAccordionProps {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2">
      <button
        className="w-full text-left p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900">{question}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4 text-gray-500"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof faqs>("Website");

  const handleTabClick = (tab: keyof typeof faqs) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white w-11/12 mx-auto mt-10">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center sm:max-w-2xl lg:mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="text-base font-normal text-gray-600 mt-4 sm:text-lg">
            Have a different question and can't find the answer you're looking for? Reach out to our support team by
            <a target="_blank" rel="noopener noreferrer" href="mailto:vaibhav@BoringSites.com" className="isomorphic-link isomorphic-link--external text-orange-800 hover:text-blue-500 hover:underline px-4">sending us an email</a>
            and we'll get back to you as soon as we can.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex justify-center mb-8 flex-wrap">
            {["Website", "AI Support Bot", "Pricing"].map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 font-semibold text-lg rounded-full m-2 ${activeTab === tab
                  ? "bg-orange-600 text-white"
                  : "text-gray-700"
                  }`}
                onClick={() => handleTabClick(tab as keyof typeof faqs)}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          <div className="space-y-6">
            {faqs[activeTab].map((faq, index) => (
              <FAQAccordion key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Monthly" | "Yearly">("Monthly");
  const [selectedUsers, setSelectedUsers] = useState<keyof typeof pricingMap>(10000);
  const [monthlyPrice, setMonthlyPrice] = useState(pricingMap[selectedUsers]);
  const [yearlyPrice, setYearlyPrice] = useState(monthlyPrice * 10);
  const [popupFeature, setPopupFeature] = useState<Feature | null>(null);
  const [tooltipFeature, setTooltipFeature] = useState<Feature | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number, left: number }>({ top: 0, left: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdown, setCountdown] = useState<number>(86400);
  const [isLifetimeDealVisible, setIsLifetimeDealVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const featureRefs = useRef<(HTMLLIElement | null)[]>([]);

  const startDate = new Date("2023-05-01");
  const endDate = new Date("2024-06-30");

  useEffect(() => {
    const today = new Date();
    if (today > endDate) {
      setIsLifetimeDealVisible(false);
    }
  }, []);

  useEffect(() => {
    const newMonthlyPrice = pricingMap[selectedUsers];
    setMonthlyPrice(newMonthlyPrice);
    setYearlyPrice(newMonthlyPrice * 10);
  }, [selectedUsers]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  const handleTabClick = (tabName: "Monthly" | "Yearly") => {
    setActiveTab(tabName);
  };

  const handleUserChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedUsers(Number(event.target.value) as keyof typeof pricingMap);
  };

  const handleFeatureClick = (feature: Feature) => {
    setPopupFeature(feature);
  };

  const closePopup = () => {
    setPopupFeature(null);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleMouseEnter = (feature: Feature, index: number) => {
    setTooltipFeature(feature);
    const element = featureRefs.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      setTooltipPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  };

  const handleMouseLeave = () => {
    setTooltipFeature(null);
  };

  const handleUpgradeClick = async () => {
    setLoading(true);
    try {
      // Implement payment logic here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating API call
    } catch (error) {
      console.error('Error during payment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <motion.div
        className="absolute bottom-0 pointer-events-none z-1 h-screen w-screen"
        aria-hidden="true"
        style={{ width: "-webkit-fill-available", opacity: 0.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
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
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-18 md:pb-20">

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-loose mb-4 justify-center text-center"
          >
            <span className="opacity-50 font-normal">Simplify your life with a</span>
            <br />
            <div className="flex gap-2 text-center w-full justify-center">
              <span className="flex gap-4 justify-center items-center mt-2 text-orange-600">
                <span className="">Boring Site</span>
              </span>
              <span className="flex gap-4 justify-center items-center mt-2">
                <span className="">+  </span>
                <span className="">Notion.</span>
              </span>
            </div>
          </h1>


          {/* Pricing Toggle */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="inline-flex rounded-full border border-gray-300 bg-white">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full ${activeTab === 'Yearly' ? 'bg-orange-200 text-orange-900' : 'text-gray-700'
                  }`}
                onClick={() => handleTabClick('Yearly')}
              >
                ANNUALLY ♥ 2 MONTHS FREE
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full ${activeTab === 'Monthly' ? 'bg-orange-200 text-orange-900' : 'text-gray-700'
                  }`}
                onClick={() => handleTabClick('Monthly')}
              >
                MONTHLY
              </motion.button>
            </div>
          </motion.div>

          <div className="justify-center m-auto">
            <div className="flex gap-4 max-w-4xl m-auto">
              {/* Free Plan */}
              <motion.div
                className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl flex flex-col w-1/2 h-fit mt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="px-8 py-10 text-start">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Hobby
                  </h2>
                  <div className="flex items-baseline mb-4">
                    <span className="text-6xl font-extrabold text-slate-800">
                      $0
                    </span>
                    <span className="text-xl font-medium text-slate-500 ml-2">/mo</span>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fixed upto
                    </label>
                    <p className="w-full p-3 border border-gray-300 rounded-md text-lg font-bold">1000 Users</p>

                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-4 rounded-full text-white font-semibold text-center text-xl bg-gray-600 hover:bg-orange-700 active:bg-orange-800 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
                  >
                    Get a Boring Site
                  </motion.button>
                  <p className="mt-4 text-sm text-slate-500">
                    BoringSites AI is an add-on feature compatible with all subscription plans.
                  </p>
                </div>
                <div className="px-8 pt-6 pb-8 bg-slate-50">
                <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                    <span className="bg-gray-600 w-1 h-8 mr-4"></span>
                    What's included
                  </h3>
                  <ul className="grid grid-cols-1 gap-1 text-left">
                    {features.slice(0, 6).map((feature, index) => (
                      <motion.li
                        key={index}
                        className="text-md flex items-start gap-2 leading-[32px] mb-2 items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Check className="flex-shrink-0 h-4 w-4 text-green-500 mr-2" />
                        <span>{feature.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Scale Plan */}
              <motion.div
                className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl flex flex-col w-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="px-8 py-10 text-start flex-grow">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Scale
                  </h2>
                  <div className="flex items-baseline mb-4">
                    <span className="text-6xl font-extrabold text-slate-800">
                      ${activeTab === 'Yearly' ? yearlyPrice : monthlyPrice}
                    </span>
                    <span className="text-2xl font-medium text-slate-500 ml-2">/{activeTab.toLowerCase()}</span>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Users Every Month - Transparent Pricing
                    </label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-md text-lg font-bold"
                      value={selectedUsers}
                      onChange={handleUserChange}
                    >
                      <option value="10000">10,000 Users</option>
                      <option value="50000">50,000 Users</option>
                      <option value="100000">100,000 Users</option>
                      <option value="1000000">1 Million Users</option>
                    </select>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleUpgradeClick}
                    disabled={loading}
                    className={`w-full px-6 py-4 rounded-full text-white font-semibold text-center text-xl ${loading
                      ? 'bg-orange-400 cursor-not-allowed'
                      : 'bg-orange-600 hover:bg-orange-700 active:bg-orange-800'
                      } transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-lg hover:shadow-xl`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <Loader className="mr-2 animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      "Upgrade Now"
                    )}
                  </motion.button>
                  <p className="mt-4 text-sm text-slate-500">
                    BoringSites AI is an add-on feature compatible with all subscription plans.
                  </p>
                </div>
                <div className="px-8 pt-8 pb-10 bg-slate-50">
                  <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                    <span className="bg-orange-600 w-1 h-8 mr-4"></span>
                    What's included
                  </h3>
                  <ul className="grid grid-cols-1 gap-1 text-left">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        ref={(el) => {
                          featureRefs.current[index] = el;
                        }}
                        className={`text-md flex items-start gap-2 leading-[32px] mb-2 items-center`}
                        onMouseEnter={() => handleMouseEnter(feature, index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => feature.popup && handleFeatureClick(feature)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Check className="flex-shrink-0 h-5 w-5 text-green-500 mt-1 mr-3" />
                        <span className="text-base text-slate-700">
                          {feature.name}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Tooltip */}
          <AnimatePresence>
            {tooltipFeature && tooltipFeature.popup && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute z-50 p-4 bg-white shadow-md rounded-md"
                style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
              >
                <h3 className="text-lg font-bold">{tooltipFeature.popup.headline}</h3>
                <p className="text-sm">{tooltipFeature.popup.description}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Feature Popup */}
          <AnimatePresence>
            {popupFeature && popupFeature.popup && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  className="bg-white p-8 px-12 rounded-lg shadow-lg max-w-md mx-auto relative"
                >
                  <button
                    onClick={closePopup}
                    className="absolute top-2 right-2 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    ✕
                  </button>
                  <Image
                    src={popupFeature.popup.image}
                    alt={popupFeature.popup.headline}
                    width={300}
                    height={200}
                  />
                  <h2 className="text-2xl font-bold mt-4">
                    {popupFeature.popup.headline}
                  </h2>
                  <p className="mt-2">{popupFeature.popup.description}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Lifetime Deal Section */}
          {isLifetimeDealVisible && (
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Limited Time Offer: Lifetime Deal
                </h3>
                <p className="text-xl mb-4">
                  Get <span className="text-orange-600 font-bold">Unlimited</span> at{" "}
                  <span className="line-through text-gray-400">$599</span>{" "}
                  <span className="font-bold">$99</span>
                </p>
                <p className="text-lg text-red-400 mb-4">
                  Ending in <b>{formatTime(countdown)}</b>
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-600 text-white text-xl py-3 px-8 rounded-lg inline-block hover:bg-orange-700 transition-colors"
                  onClick={toggleModal}
                >
                  Buy Now
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Modal */}
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              >
                <motion.div
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto relative"
                >
                  <button
                    onClick={toggleModal}
                    className="absolute top-2 right-2 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    ✕
                  </button>

                  <h2 className="text-2xl font-bold mt-4">Limited Lifetime Deal</h2>
                  <p className="mt-2">
                    $99 for super early birds. <span className="font-bold text-gray-500 border-b-2 border-gray-600">Due to the high demand, the lifetime deal price will be increased to $199 in {formatTime(countdown)}.</span> Timer is real $99 for super early birds. <span className="font-bold text-gray-500 border-b-2 border-gray-600">Due to the high demand, the lifetime deal price will be increased to $199 in {formatTime(countdown)}.</span> Timer is real; I'm not kidding :) We will launch our subscription plan soon! Grab our limited lifetime deal. You pay once, use forever with no limit!
                  </p>

                  <div className="text-center mt-4">
                    <h3 className="text-3xl font-bold mt-4 mb-4">$99.00</h3>
                    <Link
                      href="https://buy.stripe.com/5kAeV0b6K27w8BG6os"
                      className="bg-orange-700 text-white text-xl w-full py-4 px-16 rounded-lg block hover:bg-orange-600 transition-colors"
                    >
                      Buy
                    </Link>
                  </div>
                  <div className="text-center text-gray-500 mt-8">
                    Supported payment methods
                  </div>

                  <img alt="Xumm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_e9xJ7ce6A2N49hHB1Woit1mj6b3o13Lt3Q1NT-tW&s" className="h-20 w-full object-contain mt-4" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Add-ons Section */}
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <h4 className="font-display text-4xl font-bold tracking-tight text-gray-900 text-center">
              Add-ons
            </h4>
            <div className="max-w-xl bg-white shadow-sm ring-1 ring-inset ring-gray-200 mx-auto mt-6 rounded-2xl lg:max-w-2xl">
              <div className="space-y-6 px-8 py-6">
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-orange-600" />
                    <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                      Collaboration Seats for Teams
                    </h2>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <p className="text-3xl font-semibold tracking-tight text-gray-900">
                      $5
                    </p>
                    <p className="text-lg font-medium text-gray-500 ml-2">  user / mo</p>
                  </div>
                </div>
                <hr className="border-gray-200" />
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-orange-600" />
                    <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                      Extra 5 Websites
                    </h2>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <p className="text-3xl font-semibold tracking-tight text-gray-900">
                      +$10
                    </p>
                    <p className="text-lg font-medium text-gray-500">/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <FAQSection />

          <motion.div
            className="relative bg-gray-900 rounded-2xl py-6 px-4 md:py-8 md:px-12 shadow-2xl overflow-hidden mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block">
              <Image alt="Logo" width={400} className="block" src={MigrateFrom} />
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">
                  Planning to <b className="text-orange-600">migrate</b> to
                  BoringSites from another platform?
                </h3>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div>
                    <Link
                      href="/migrating-to-BoringSites"
                      className="btn bg-orange-600 hover:bg-orange-700 shadow px-12 inline-block text-white py-3 rounded-lg transition-colors"
                    >
                      We can do it for you →
                    </Link>
                  </div>
                  <p className="text-sm text-gray-400 mt-3">Free of charge</p>
                </form>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <Rating />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <Testimonials />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;