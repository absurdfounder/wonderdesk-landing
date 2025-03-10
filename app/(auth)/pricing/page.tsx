"use client";

import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Loader, Users, MessageSquare, FileText, FolderGit2, DatabaseIcon,Gift, Lock } from 'lucide-react';
import confetti from "canvas-confetti";
import notionfooterImage from "@/public/images/nb-herosec.png";
import MigrateFrom from "@/public/images/migratefrom.png";
import Testimonials from "@/components/testimonials";
import Rating from "../compare-against/Rating";

const pricingMap: Record<number, number> = {
  10000: 9,
  50000: 24,
  100000: 43,
  1000000: 237,
};

interface Feature {
  name: string;
  description: string;
  imageUrl: string;
}

interface HobbyFeature extends Feature {
  included: boolean;
}

const hobbyFeatures: HobbyFeature[] = [
  { name: "1 website", included: true, description: "Set up one Boring Site of your choice: Helpdesk, Blog, or Directory.", imageUrl: "/api/placeholder/200/150" },
  { name: "Custom Domain / SSL", included: false, description: "Use your own domain and secure it with SSL (not included in Hobby plan).", imageUrl: "/api/placeholder/200/150" },
  { name: "50 articles & collections", included: true, description: "Create up to 50 articles and organize them into collections.", imageUrl: "/api/placeholder/200/150" },
  { name: "No Analytics", included: true, description: "Access fundamental analytics to track your site's performance.", imageUrl: "/api/placeholder/200/150" },
  { name: "Basic SEO", included: true, description: "Implement basic SEO practices to improve your site's visibility.", imageUrl: "/api/placeholder/200/150" },
  { name: "Customization", included: true, description: "Customize your site's appearance with basic options.", imageUrl: "/api/placeholder/200/150" },
  { name: "Auto Upgrades", included: true, description: "Receive automatic upgrades to keep your site up-to-date.", imageUrl: "/api/placeholder/200/150" },
  { name: "Custom Sections AI", included: false, description: "AI-powered custom section creation (not included in Hobby plan).", imageUrl: "/api/placeholder/200/150" },
  { name: "Custom Code & Integrations", included: false, description: "Add custom code and integrate with other services (not included in Hobby plan).", imageUrl: "/api/placeholder/200/150" },
  { name: "Paywall - Gumroad, LemonSqueezy, Stripe", included: false, description: "Set up paywalls with popular payment processors (not included in Hobby plan).", imageUrl: "/api/placeholder/200/150" },
  { name: "Tally Form Connection", included: false, description: "Connect and use Tally forms on your site (not included in Hobby plan).", imageUrl: "/api/placeholder/200/150" },
  { name: "Open AI Assistant ", included: false, description: "Integrate OpenAI assistant for enhanced functionality (not included in Hobby plan).", imageUrl: "/api/placeholder/200/150" },
  { name: "General Search", included: true, description: "Implement a general search feature on your site (not included in Hobby plan).", imageUrl: "/api/placeholder/200/150" },
  { name: "Remove 'Watermark' badge", included: false, description: "Remove the 'Powered by' badge from your site (not included in Hobby plan).", imageUrl: "/api/placeholder/200/150" },
];

const scaleFeatures: Feature[] = [
  { name: "Unlimited Websites", description: "Set up and manage unlimited helpdesks, documentations, directories and blogs on BoringSites.", imageUrl: "/api/placeholder/200/150" },
  { name: "Unlimited Custom Domain / SSL", description: "Use your own domain name and benefit from included SSL encryption for enhanced security.", imageUrl: "/api/placeholder/200/150" }, 
  { name: "Unlimited articles & collections", description: "Create unlimited articles and collections without any restrictions.", imageUrl: "/api/placeholder/200/150" },
  { name: "Unlimited Analytics", description: "Access comprehensive analytics to gain deep insights into your site's performance and user behavior.", imageUrl: "/api/placeholder/200/150" },
  { name: "Full SEO Ready", description: "Utilize advanced SEO tools and features to maximize your site's search engine visibility.", imageUrl: "/api/placeholder/200/150" },
  { name: "Advanced Customization", description: "Enjoy extensive customization options to tailor your site's look and feel to your exact preferences.", imageUrl: "/api/placeholder/200/150" },
  { name: "Instant Upgrades", description: "Receive immediate upgrades and new features as soon as they're available.", imageUrl: "/api/placeholder/200/150" },
  { name: "Custom Sections AI", description: "Leverage AI technology to create unique, custom sections that match your site's theme and content.", imageUrl: "/api/placeholder/200/150" },
  { name: "Custom Code & Integrations", description: "Add your own custom code and integrate with a wide range of third-party services and APIs.", imageUrl: "/api/placeholder/200/150" },
  { name: "Paywall - Gumroad, LemonSqueezy, Stripe", description: "Implement paywalls using popular payment processors to monetize your content effectively.", imageUrl: "/api/placeholder/200/150" },
  { name: "Tally Form Connection", description: "Seamlessly connect and use Tally forms within your site for data collection and user interaction.", imageUrl: "/api/placeholder/200/150" },
  { name: "Open AI Assistant", description: "Access an advanced AI assistant to help with content creation, site management, and user engagement.", imageUrl: "/api/placeholder/200/150" },
  { name: "General Search", description: "Implement a powerful, site-wide search feature to help users find content quickly and easily.", imageUrl: "/api/placeholder/200/150" },
  { name: "Remove 'Watermark' badge", description: "Remove the 'Powered by BoringSites' badge for a fully branded, professional appearance.", imageUrl: "/api/placeholder/200/150" },
];

interface FAQ {
  question: string;
  answer: string;
}

const faqs: Record<string, FAQ[]> = {
  Website: [
    {
      question: "What is BoringSites?",
      answer: "BoringSites is the perfect tool for creating your knowledge base in the shortest possible time. It is powered by the best content management system in the world: Notion. You write your help articles in Notion and BoringSites takes care of the rest. It's as simple as that.",
    },
    {
      question: "Why do I need a knowledge base?",
      answer: "Unless you have built a flawless product (congratulations 🤩), your customers will always have questions and they demand immediate help. A knowledge base can provide all the information that users need in one place. It can range from FAQs about your product/service, common issues and their solutions, videos with tutorials on how to do things and more.",
    },
    {
      question: "Is my data safe with BoringSites?",
      answer: "BoringSites takes your privacy seriously and follows best practices to ensure that the confidentiality of personal information and customer data is protected and maintained. We do not disclose or share your data with outside parties. All your knowledge base content is hosted in your own Notion workspace.",
    },
  ],
  "AI Support Bot": [
    {
      question: "How does the AI Support Bot work?",
      answer: "The AI Support Bot integrates seamlessly with BoringSites to provide real-time assistance to your users, leveraging AI to answer common questions and provide guidance based on your knowledge base content.",
    },
    {
      question: "Can I customize the AI Support Bot?",
      answer: "Yes, you can customize the AI Support Bot to align with your brand's voice and style. Adjust the responses, add personalized greetings, and more to Get a cohesive user experience.",
    },
    {
      question: "Does the AI Support Bot support multiple languages?",
      answer: "The AI Support Bot supports multiple languages, allowing you to cater to a global audience and provide support in the preferred language of your users.",
    },
  ],
  Pricing: [
    {
      question: "How does the free 7 day trial work?",
      answer: "BoringSites offers a 7 day free trial to help you explore. Free Design Service. There's zero cost to get in the product and set things up. Within the trial period you will be able to use all available features. After the trial is over, you can choose to subscribe to one of our offered subscription plans.",
    },
    {
      question: "What are the pricing plans?",
      answer: "BoringSites offers various pricing plans based on the number of users and features required. Check our pricing page for detailed information on each plan.",
    },
    {
      question: "Are there any additional fees?",
      answer: "Pricing is exclusive of taxes and additional local tax may be collected depending on your region. Some add-ons and advanced features might incur additional costs.",
    },
  ],
};

const FeatureTooltip: React.FC<{ feature: Feature; position: { top: number; left: number } }> = ({ feature, position }) => {
  // Calculate adjusted position to ensure tooltip stays in viewport
  const adjustedPosition = {
    top: Math.min(position.top, window.innerHeight - 200),
    left: Math.min(position.left, window.innerWidth - 300)
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="fixed z-50 p-4 bg-white shadow-md rounded-md max-w-xs"
      style={{ top: adjustedPosition.top, left: adjustedPosition.left }}
    >
      <Image src={feature.imageUrl} alt={feature.name} width={200} height={150} className="mb-2 rounded" />
      <h3 className="text-lg font-bold">{feature.name}</h3>
      <p className="text-sm">{feature.description}</p>
    </motion.div>
  );
};

const FeaturePopup: React.FC<{ feature: Feature; onClose: () => void }> = ({ feature, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md mx-auto relative"
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 bg-slate-200 rounded-full w-8 h-8 flex items-center justify-center"
      >
        ✕
      </button>
      <div className="max-w-full overflow-hidden">
        <Image src={feature.imageUrl} alt={feature.name} width={400} height={300} className="mb-4 rounded w-full h-auto" />
      </div>
      <h2 className="text-xl md:text-2xl font-bold mt-4">{feature.name}</h2>
      <p className="mt-2">{feature.description}</p>
    </motion.div>
  </motion.div>
);

const FAQAccordion: React.FC<FAQ> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2">
      <button
        className="w-full text-left p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-slate-900 h4 text-sm md:text-base">{question}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4 text-slate-500 text-sm md:text-base"
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
    <div className="mx-auto mt-10">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center sm:max-w-2xl lg:mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-base font-normal text-slate-600 mt-4 sm:text-lg">
            Have a different question and can't find the answer you're looking for? Reach out to our support team by
            <a target="_blank" rel="noopener noreferrer" href="mailto:vaibhav@boringsites.com" className="isomorphic-link isomorphic-link--external text-orange-800 hover:text-blue-500 hover:underline px-2">sending us an email</a>
            and we'll get back to you as soon as we can.
          </p>
        </div>
        <div className="mt-12">
        <div className="flex justify-center mb-6 md:mb-8 flex-wrap">
  {["Website", "AI Support Bot", "Pricing"].map((tab) => (
    <motion.button
      key={tab}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-3 md:px-4 py-2 font-semibold text-sm md:text-lg rounded-full m-1 md:m-2 ${activeTab === tab ? "bg-orange-300 text-slate-800" : "text-slate-700"}`}
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
  const [hoveredHobbyFeature, setHoveredHobbyFeature] = useState<HobbyFeature | null>(null);
  const [hoveredScaleFeature, setHoveredScaleFeature] = useState<Feature | null>(null);
  const [hobbyTooltipPosition, setHobbyTooltipPosition] = useState<{ top: number, left: number }>({ top: 0, left: 0 });
  const [scaleTooltipPosition, setScaleTooltipPosition] = useState<{ top: number, left: number }>({ top: 0, left: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdown, setCountdown] = useState<number>(86400);
  const [isLifetimeDealVisible, setIsLifetimeDealVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const hobbyFeatureRefs = useRef<(HTMLLIElement | null)[]>([]);
  const scaleFeatureRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    // Check if we're on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Set up event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


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

  const handleHobbyFeatureHover = (feature: HobbyFeature, index: number) => {
    if (isMobile) return; // Don't show tooltips on mobile
    
    setHoveredHobbyFeature(feature);
    const element = hobbyFeatureRefs.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      setHobbyTooltipPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  };
  
  const handleScaleFeatureHover = (feature: Feature, index: number) => {
    if (isMobile) return; // Don't show tooltips on mobile
    
    setHoveredScaleFeature(feature);
    const element = scaleFeatureRefs.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      setScaleTooltipPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  };

  const handleHobbyFeatureLeave = () => {
    setHoveredHobbyFeature(null);
  };

  const handleScaleFeatureLeave = () => {
    setHoveredScaleFeature(null);
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
    <section >
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
        <div className="pt-12 pb-12 md:pt-18 md:pb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight tracking-loose mb-4 justify-center text-center">
            <span className="opacity-50  font-roboto-mono">Build anything with</span>
            <br />
            <div className="flex gap-2 text-center w-full justify-center">
              <span className="flex gap-4 justify-center items-center mt-2 text-orange-600">
                <span className="font-bungee">BORING  </span>
              </span>
              <span className="flex gap-4 justify-center items-center mt-2">
                <span className="font-bungee ml-2"> +  </span>
                <span className="font-bungee">Notion</span>
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
            <div className="inline-flex rounded-full border border-slate-300 bg-white">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full ${activeTab === 'Yearly' ? 'bg-orange-200 text-orange-900' : 'text-slate-700'}`}
                onClick={() => handleTabClick('Yearly')}
              >
                ANNUALLY ♥ 2 MONTHS FREE
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full ${activeTab === 'Monthly' ? 'bg-orange-200 text-orange-900' : 'text-slate-700'}`}
                onClick={() => handleTabClick('Monthly')}
              >
                MONTHLY
              </motion.button>
            </div>
          </motion.div>

          <p className="text-sm md:text-base flex items-center justify-center gap-3 pb-4">
  <Lock className="w-5 h-5 text-accent animate-pulse text-orange-600" />
  <span>
    <span className="text-accent font-medium font-bold">Pricing is locked for early users</span>
    {' '}-  secure your price.{' '}
  </span>
</p>


<div className="justify-center m-auto">
  <div className="flex flex-col md:flex-row gap-4 max-w-4xl m-auto">
    {/* Hobby Plan */}
    <motion.div
      className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl flex flex-col w-full md:w-1/2 h-fit mt-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
                <div className="px-8 py-10 text-start">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4 font-josefin-slab">
                    Hobby
                  </h2>
                  <div className="flex items-baseline mb-4">
                    <span className="text-6xl font-extrabold text-slate-800">
                      $0
                    </span>
                    <span className="text-xl font-medium text-slate-500 ml-2">/mo</span>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Fixed up to
                    </label>
                    <p className="w-full p-3 border border-slate-300 rounded-md text-lg font-bold">1000 Users</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-4 rounded-full text-white font-semibold text-center text-xl bg-slate-600 hover:bg-orange-700 active:bg-orange-800 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
                  >
                    Get a Boring Site
                  </motion.button>
                  <p className="mt-4 text-sm text-slate-500">
                    For open-source softwares feel free to reach out for a free plan with no strings attached.
                  </p>
                </div>
                <div className="px-8 pt-6 pb-10 bg-slate-50">
                  <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                    <span className="bg-slate-600 w-1 h-8 mr-4"></span>
                    What's included
                  </h3>
                  <ul className="grid grid-cols-1 gap-1 text-left">
                    {hobbyFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        ref={(el: HTMLLIElement | null) => {
                          hobbyFeatureRefs.current[index] = el;
                        }}
                        className={`text-md flex items-start gap-2 leading-[32px] mb-2 items-center cursor-pointer ${feature.included ? 'text-slate-700' : 'text-slate-400 line-through'
                          }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleFeatureClick(feature)}
                        onMouseEnter={() => handleHobbyFeatureHover(feature, index)}
                        onMouseLeave={handleHobbyFeatureLeave}
                      >
                        {feature.included ? (
                          <Check className="flex-shrink-0 h-4 w-4 text-green-500 mr-2" />
                        ) : (
                          <X className="flex-shrink-0 h-4 w-4 text-red-500 mr-2" />
                        )}
                        <span>{feature.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Scale Plan */}
              <motion.div
  className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl flex flex-col w-full md:w-1/2 mt-6 md:mt-0"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.8 }}
>
                <div className="px-8 py-10 text-start flex-grow">
                  <h2 className="text-4xl font-bold text-slate-900 mb-4 font-josefin-slab">
                    Rocket
                  </h2>
                  <div className="flex items-baseline mb-4">
                    <span className="text-6xl font-extrabold text-slate-800">
                      ${activeTab === 'Yearly' ? yearlyPrice : monthlyPrice}
                    </span>
                    <span className="text-2xl font-medium text-slate-500 ml-2">/{activeTab.toLowerCase()}</span>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Number of Users Every Month - Transparent Pricing
                    </label>
                    <select
                      className="w-full p-3 border border-slate-300 rounded-md text-lg font-bold"
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
                    className={`w-full px-6 py-4 rounded-full text-slate-800 font-semibold text-center text-xl ${loading
                        ? 'bg-orange-400 cursor-not-allowed'
                        : 'bg-orange-400 hover:bg-orange-700 active:bg-orange-800'
                      } transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-lg hover:shadow-xl`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <Loader className="mr-2 animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      "Ship Today"
                    )}
                  </motion.button>
                  <p className="mt-4 text-sm text-slate-500">
                    Prices are about to change sometime soon, get the low prices while they last.
                  </p>
                </div>
                <div className="px-8 pt-8 pb-10 bg-slate-50">
                  <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                    <span className="bg-orange-700 w-1 h-8 mr-4"></span>
                    What's included
                  </h3>
                  <ul className="grid grid-cols-1 gap-1 text-left">
                    {scaleFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        ref={(el: HTMLLIElement | null) => {
                          scaleFeatureRefs.current[index] = el;
                        }}
                        className="text-md flex items-start gap-2 leading-[32px] mb-2 items-center cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleFeatureClick(feature)}
                        onMouseEnter={() => handleScaleFeatureHover(feature, index)}
                        onMouseLeave={handleScaleFeatureLeave}
                      >
                        <Check className="flex-shrink-0 h-4 w-4 text-green-500 mr-2" />
                        <span>{feature.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Tooltips */}
{/* Tooltips - Only show on non-mobile */}
<AnimatePresence>
  {!isMobile && hoveredHobbyFeature && (
    <FeatureTooltip feature={hoveredHobbyFeature} position={hobbyTooltipPosition} />
  )}
  {!isMobile && hoveredScaleFeature && (
    <FeatureTooltip feature={hoveredScaleFeature} position={scaleTooltipPosition} />
  )}
</AnimatePresence>

          {/* Feature Popup */}
          <AnimatePresence>
            {popupFeature && (
              <FeaturePopup feature={popupFeature} onClose={closePopup} />
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
              <div className="bg-slate-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Limited Time Offer: Lifetime Deal
                </h3>
                <p className="text-xl mb-4">
                  Get <span className="text-orange-600 font-bold">Unlimited</span> at{" "}
                  <span className="line-through text-slate-400">$599</span>{" "}
                  <span className="font-bold">$99</span>
                </p>
                <p className="text-lg text-red-400 mb-4">
                  Ending in <b>{formatTime(countdown)}</b>
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-700 text-white text-xl py-3 px-8 rounded-lg inline-block hover:bg-orange-700 transition-colors"
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
                    className="absolute top-2 right-2 bg-slate-200 rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    ✕
                  </button>

                  <h2 className="text-2xl font-bold mt-4">Limited Lifetime Deal</h2>
                  <p className="mt-2">
                    $99 for super early birds. <span className="font-bold text-slate-500 border-b-2 border-slate-600">Due to the high demand, the lifetime deal price will be increased to $199 in {formatTime(countdown)}.</span> Timer is real $99 for super early birds. <span className="font-bold text-slate-500 border-b-2 border-slate-600">Due to the high demand, the lifetime deal price will be increased to $199 in {formatTime(countdown)}.</span> Timer is real; I'm not kidding :) We will launch our subscription plan soon! Grab our limited lifetime deal. You pay once, use forever with no limit!
                  </p>

                  <div className="text-center mt-4">
                    <h3 className="text-3xl font-bold mt-4 mb-4">$99.00</h3>
                    <Link
                      href="https://buy.stripe.com/5kAeV0b6K27w8BG6os"
                      className="bg-orange-700 text-white text-xl w-full py-4 px-16 rounded-lg block hover:bg-orange-700 transition-colors"
                    >
                      Buy
                    </Link>
                  </div>
                  <div className="text-center text-slate-500 mt-8">
                    Supported payment methods
                  </div>

                  <img alt="Xumm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_e9xJ7ce6A2N49hHB1Woit1mj6b3o13Lt3Q1NT-tW&s" className="h-20 w-full object-contain mt-4" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Add-ons Section */}
{/* Add-ons Section */}
<motion.div
  className="mt-8 md:mt-12 lg:mt-16 px-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1.2 }}
>
  <h4 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 text-center">
    Add-ons
  </h4>
  <div className="bg-white shadow-sm ring-1 ring-inset ring-slate-200 mx-auto mt-4 md:mt-6 rounded-2xl max-w-xl lg:max-w-2xl">
    <div className="space-y-4 md:space-y-6 px-4 md:px-8 py-4 md:py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6">
        <div className="flex items-center gap-2 md:gap-3">
          <FolderGit2 className="h-6 w-6 md:h-8 md:w-8 text-orange-600 flex-shrink-0" />
          <div>
            <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">
              SubDirectory
            </h2>
            <p className="text-xs md:text-sm text-slate-600">youdomain.com/blog</p>
          </div>
        </div>
        <div className="flex items-center gap-0.5 mt-2 md:mt-0">
          <p className="text-xl md:text-3xl font-semibold tracking-tight text-slate-900">
            $10
          </p>
          <p className="text-base md:text-lg font-medium text-slate-500 ml-1 md:ml-2"> / mo</p>
        </div>
      </div>
      <hr className="border-slate-200" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6">
        <div className="flex items-center gap-2 md:gap-3">
          <Users className="h-6 w-6 md:h-8 md:w-8 text-orange-600 flex-shrink-0" />
          <div>
            <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">
              Collaboration Seats
            </h2>
            <p className="text-xs md:text-sm text-slate-600">Account access for each team member.</p>
          </div>
        </div>
        <div className="flex items-center gap-0.5 mt-2 md:mt-0">
          <p className="text-xl md:text-3xl font-semibold tracking-tight text-slate-900">
            $5
          </p>
          <p className="text-base md:text-lg font-medium text-slate-500 ml-1 md:ml-2">user / mo</p>
        </div>
      </div>

      <hr className="border-slate-200" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6">
        <div className="flex items-center gap-2 md:gap-3">
          <DatabaseIcon className="h-6 w-6 md:h-8 md:w-8 text-orange-600 flex-shrink-0" />
          <div>
            <h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">
              Fetch Kitty - Data Entry AI
            </h2>
            <p className="text-xs md:text-sm text-slate-600">AI web scraper and publisher.</p>
          </div>
        </div>
        <div className="flex items-center gap-0.5 mt-2 md:mt-0">
          <p className="text-xl md:text-3xl font-semibold tracking-tight text-slate-900">
            $20
          </p>
          <p className="text-base md:text-lg font-medium text-slate-500 ml-1 md:ml-2"> / mo</p>
        </div>
      </div>
    </div>
  </div>
</motion.div>

          <FAQSection />

          <motion.div
            className="relative bg-slate-900 rounded-2xl py-6 px-4 md:py-8 md:px-12 shadow-2xl overflow-hidden mt-12"
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
                      href="https://app.youform.com/forms/r3rvhjv4"
                      target="_blank"
                      className="btn bg-orange-700 hover:bg-orange-700 shadow px-12 inline-block text-slate-900 py-3 rounded-lg transition-colors"
                    >
                      We can do it for you →
                    </Link>
                  </div>
                  <p className="text-sm text-slate-400 mt-3">Free of charge</p>
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
