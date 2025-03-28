"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Loader, Users, MessageSquare, FileText, FolderGit2, DatabaseIcon, Gift, Lock, ArrowBigRight, ArrowRight } from 'lucide-react';
import confetti from "canvas-confetti";
import MigrateFrom from "@/public/images/migratefrom.png";
import Testimonials from "@/components/testimonials";
import Rating from "../compare-against/Rating";
import Header from "@/components/ui/header";

// Feature interfaces
interface Feature {
  name: string;
  description: string;
  imageUrl: string;
}

interface HobbyFeature extends Feature {
  included: boolean;
}

// Position interface for tooltip positioning
interface Position {
  top: number;
  left: number;
}

// FAQ data structure
interface FAQ {
  question: string;
  answer: string;
}

// Pricing tier interface
interface PricingTier {
  name: string;
  highlight: boolean;
  monthlyPrice: number;
  yearlyPrice: number;
  trafficLimit: string;
  features: string[];
}

// Features for Scale/Rocket plan
const scaleFeatures: Feature[] = [
  { name: "Unlimited Websites", description: "Set up and manage unlimited helpdesks, documentations, directories and blogs on WonderSites.", imageUrl: "/api/placeholder/200/150" },
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
  { name: "Remove 'Watermark' badge", description: "Remove the 'Powered by WonderSites' badge for a fully branded, professional appearance.", imageUrl: "/api/placeholder/200/150" },
];

const faqs: Record<string, FAQ[]> = {
  Website: [
    {
      question: "What is WonderSites?",
      answer: "WonderSites is the perfect tool for creating your knowledge base in the shortest possible time. It is powered by the best content management system in the world: Notion. You write your help articles in Notion and WonderSites takes care of the rest. It's as simple as that.",
    },
    {
      question: "Why do I need a knowledge base?",
      answer: "Unless you have built a flawless product (congratulations 🤩), your customers will always have questions and they demand immediate help. A knowledge base can provide all the information that users need in one place. It can range from FAQs about your product/service, common issues and their solutions, videos with tutorials on how to do things and more.",
    },
    {
      question: "Is my data safe with WonderSites?",
      answer: "WonderSites takes your privacy seriously and follows best practices to ensure that the confidentiality of personal information and customer data is protected and maintained. We do not disclose or share your data with outside parties. All your knowledge base content is hosted in your own Notion workspace.",
    },
  ],
  "AI Support Bot": [
    {
      question: "How does the AI Support Bot work?",
      answer: "The AI Support Bot integrates seamlessly with WonderSites to provide real-time assistance to your users, leveraging AI to answer common questions and provide guidance based on your knowledge base content.",
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
      answer: "WonderSites offers a 7 day free trial to help you explore. Free Design Service. There's zero cost to get in the product and set things up. Within the trial period you will be able to use all available features. After the trial is over, you can choose to subscribe to one of our offered subscription plans.",
    },
    {
      question: "What are the pricing plans?",
      answer: "WonderSites offers various pricing plans based on the number of users and features required. Check our pricing page for detailed information on each plan.",
    },
    {
      question: "Are there any additional fees?",
      answer: "Pricing is exclusive of taxes and additional local tax may be collected depending on your region. Some add-ons and advanced features might incur additional costs.",
    },
  ],
};

// Feature Tooltip Component
interface FeatureTooltipProps {
  feature: Feature;
  position: Position;
}

const FeatureTooltip: React.FC<FeatureTooltipProps> = ({ feature, position }) => {
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
      className="fixed z-50 p-4 bg-white shadow-lg rounded-lg max-w-xs"
      style={{ top: adjustedPosition.top, left: adjustedPosition.left }}
    >
      <Image src={feature.imageUrl} alt={feature.name} width={200} height={150} className="mb-2 rounded" />
      <h3 className="text-lg font-bold text-slate-900">{feature.name}</h3>
      <p className="text-sm text-slate-600">{feature.description}</p>
    </motion.div>
  );
};

// Feature Popup Component
interface FeaturePopupProps {
  feature: Feature;
  onClose: () => void;
}

const FeaturePopup: React.FC<FeaturePopupProps> = ({ feature, onClose }) => (
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
      className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md mx-auto relative"
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 bg-slate-200 hover:bg-slate-300 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
      >
        <X size={16} />
      </button>
      <div className="max-w-full overflow-hidden">
        <Image src={feature.imageUrl} alt={feature.name} width={400} height={300} className="mb-4 rounded-md w-full h-auto" />
      </div>
      <h2 className="text-xl md:text-2xl font-bold mt-4 text-slate-900">{feature.name}</h2>
      <p className="mt-2 text-slate-600">{feature.description}</p>
    </motion.div>
  </motion.div>
);

// FAQ Accordion Component
interface FAQAccordionProps {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full text-left py-4 px-5 flex justify-between items-center hover:bg-slate-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-slate-900">{question}</span>
        <span className="flex-shrink-0 ml-2 text-slate-500">
          {isOpen ? (
            <X size={16} />
          ) : (
            <span className="text-lg">+</span>
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-5 pb-4 text-slate-600"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// FAQ Section Component
const FAQSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Website");

  return (
    <div className="mx-auto mt-20 max-w-4xl">
      <div className="px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have a different question? Reach out to our support team by
            <a
              href="mailto:vaibhav@wondersites.co"
              className="text-orange-600 hover:text-orange-700 hover:underline px-2"
            >
              sending us an email
            </a>
            and we'll get back to you as soon as we can.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex justify-center p-4 border-b border-slate-200 bg-slate-50">
            {Object.keys(faqs).map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 mx-1 text-sm md:text-base font-medium rounded-full transition-colors ${activeTab === tab
                    ? "bg-orange-100 text-orange-800"
                    : "text-slate-600 hover:bg-slate-100"
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="divide-y divide-slate-200">
            {faqs[activeTab].map((faq, index) => (
              <FAQAccordion key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Pricing Component
const Pricing: React.FC = () => {
  // State variables
  const [activeTab, setActiveTab] = useState("Yearly");
  const [popupFeature, setPopupFeature] = useState<Feature | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<Feature | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<Position>({ top: 0, left: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdown, setCountdown] = useState(86400);
  const [isLifetimeDealVisible, setIsLifetimeDealVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Define the pricing tiers
  const pricingTiers: PricingTier[] = [
    {
      name: "Personal",
      highlight: false,
      monthlyPrice: 9,
      yearlyPrice: 90,
      trafficLimit: "10,000",
      features: [
        "Unlimited Pages",
        "All Type of Websites",
        "Automatic SSL(https)",
        "Custom domain",
        "Wonder AI",
        "AI Terms (Designer & Developer)",
        "Privacy focused analytics",
        "Remove \"Made with Wonder\"",
        "Manual Publishing",
        "Auto publish everyday"
      ]
    },
    {
      name: "Business",
      highlight: true,
      monthlyPrice: 43,
      yearlyPrice: 430,
      trafficLimit: "100,000",
      features: [
        "Everything in Personal, Plus",
        "Sub-directory Domain",
        "Multi-lingual sites",
        "Unlimited team members",
        "Membership sites",
        "Auto publish every hour"
      ]
    },
    {
      name: "Enterprise",
      highlight: false,
      monthlyPrice: 237,
      yearlyPrice: 2370,
      trafficLimit: "1,000,000",
      features: [
        "Everything in Business",
        "Dedicated support",
        "Custom integrations",
        "Premium CDN",
        "Advanced security",
        "Usage reports",
        "SLA guarantees"
      ]
    }
  ];

  // Check mobile status on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check if lifetime deal should be visible
  useEffect(() => {
    const today = new Date();
    const endDate = new Date("2024-06-30");
    if (today > endDate) {
      setIsLifetimeDealVisible(false);
    }
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Confetti effect on mount (smaller burst for better UX)
  useEffect(() => {
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.6 },
    });
  }, []);

  // Event handlers
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
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

  const handleFeatureHover = (feature: Feature, index: number) => {
    if (isMobile) return;

    setHoveredFeature(feature);
    const element = featureRefs.current[index];
    if (element) {
      const rect = element.getBoundingClientRect();
      setTooltipPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  };

  const handleFeatureLeave = () => {
    setHoveredFeature(null);
  };

  const handleUpgradeClick = async () => {
    setLoading(true);
    try {
      // Payment logic would go here
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Error during payment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">

      <Header />

      {/* Background grid pattern */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none opacity-5 z-0"
        aria-hidden="true"
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-inter">
            <span className="text-slate-800 block mb-2 font-bold">content-heavy websites </span>
            <div className="flex items-center justify-center gap-4">
              <span className="text-slate-800">with</span>
              <span className="text-orange-600 font-source-serif-4">Wonder</span>
              <span className="text-slate-900">+</span>
              <span className="text-slate-900">Notion</span>
            </div>
          </h1>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-white rounded-full border border-slate-200 p-1 shadow-sm mb-6 text-lg">
            <button
              className={`px-6 py-2 font-medium rounded-full transition-all ${activeTab === 'Yearly'
                  ? 'bg-slate-600 text-slate-100'
                  : 'text-slate-600 hover:text-slate-900'
                }`}
              onClick={() => handleTabClick('Yearly')}
            >
              Yearly <span className="text-orange-300 font-semibold ml-1">2 months free</span>
            </button>
            <button
              className={`px-6 py-2 font-medium rounded-full transition-all ${activeTab === 'Monthly'
                  ? 'bg-slate-600 text-slate-100'
                  : 'text-slate-600 hover:text-slate-900'
                }`}
              onClick={() => handleTabClick('Monthly')}
            >
              Monthly
            </button>
          </div>

          <div className="flex items-center justify-center text-sm text-slate-700">
            <Lock className="w-4 h-4 text-orange-600 mr-2" />
            <span>
              <span className="font-medium">Pricing is locked for early users</span>
              {' '}- secure your price now
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-xl shadow-lg border ${tier.highlight
                  ? 'border-orange-400 shadow-xl transform md:scale-105 z-10'
                  : 'border-slate-200'
                } overflow-hidden flex flex-col h-full`}
            >
              {tier.highlight && (
                <div className="bg-orange-500 text-white text-center py-1 text-sm font-medium">
                  MOST POPULAR
                </div>
              )}

              <div className="p-6 flex-grow">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-slate-700 mb-1">{tier.name}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-slate-900">
                      ${activeTab === 'Yearly' ? tier.yearlyPrice : tier.monthlyPrice}
                    </span>
                    <span className="text-slate-600 ml-1">
                      {activeTab === 'Yearly' ? '/year' : '/month'}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm mt-1">
                    {tier.trafficLimit} users/month
                  </p>
                </div>

                <div className="mt-6">
                  <div className="font-medium text-slate-800 mb-4">What's included:</div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 mt-4">
                <Link
                  href="https://app.wondersites.co"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${tier.highlight
                      ? 'bg-orange-600 hover:bg-orange-700 text-white focus:ring-orange-500'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 focus:ring-slate-500'
                    }`}
                >
                  Start 3-day trial
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expert Services Card */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <div className="text-blue-600 font-medium mb-1">Hire An Expert</div>
                  <div className="flex items-center md:items-start flex-col">
                    <span className="text-4xl font-bold text-slate-900">$499</span>
                    <span className="text-slate-600 ml-1">one time</span>
                  </div>
                  <p className="text-slate-500 mt-1">
                    DIFY expert services (w/o license)
                  </p>
                </div>

                <div className="space-y-3 md:w-1/2">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-slate-600">Custom development</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-slate-600">Custom notion template</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-slate-600">Custom design</span>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-slate-600">Platform migrations</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center md:text-right">
                <Link
                  href="https://app.youform.com/forms/r3rvhjv4"
                  target="_blank"
                  className="inline-block py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                >
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Add-ons Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h4 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Enhance Your Experience with Add-ons
          </h4>
          <div className="bg-white shadow-md rounded-xl overflow-hidden border border-slate-200">
            <div className="divide-y divide-slate-200">
              {/* SubDirectory Add-on */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <FolderGit2 className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        SubDirectory
                      </h3>
                      <p className="text-sm text-slate-600">yourdomain.com/blog</p>
                    </div>
                  </div>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-semibold text-slate-900">
                      $10
                    </p>
                    <p className="text-base text-slate-600 ml-1">/mo</p>
                  </div>
                </div>
              </div>

              {/* Collaboration Seats Add-on */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        Collaboration Seats
                      </h3>
                      <p className="text-sm text-slate-600">Account access for team members</p>
                    </div>
                  </div>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-semibold text-slate-900">
                      $5
                    </p>
                    <p className="text-base text-slate-600 ml-1">user/mo</p>
                  </div>
                </div>
              </div>

              {/* Fetch Kitty Add-on */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <DatabaseIcon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        Additonal Website
                      </h3>
                      <p className="text-sm text-slate-600">Every plan comes with 5 sites - you can get more.</p>
                    </div>
                  </div>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-semibold text-slate-900">
                      $2
                    </p>
                    <p className="text-base text-slate-600 ml-1">/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lifetime deal banner */}
        {isLifetimeDealVisible && (
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-slate-900 rounded-xl overflow-hidden relative">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 opacity-10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-600 opacity-10 rounded-full -ml-10 -mb-10"></div>

              <div className="relative p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-6 md:mb-0">
                    <div className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full mb-3">
                      Limited Time Offer
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Lifetime Deal
                    </h3>
                    <p className="text-slate-300 mb-2">
                      Get <span className="text-orange-400 font-semibold">unlimited</span> access forever with a one-time payment
                    </p>
                    <div className="flex items-center">
                      <span className="line-through text-slate-400 mr-2">$599</span>
                      <span className="text-3xl font-bold text-white">$99</span>
                    </div>
                    <div className="text-orange-400 text-sm mt-2">
                      Ending in <span className="font-semibold">{formatTime(countdown)}</span>
                    </div>
                  </div>

                  <button
                    className="bg-orange-600 hover:bg-orange-700 text-white text-lg py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                    onClick={toggleModal}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lifetime deal modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white p-6 rounded-xl shadow-2xl max-w-md mx-auto relative"
              >
                <button
                  onClick={toggleModal}
                  className="absolute top-3 right-3 bg-slate-200 hover:bg-slate-300 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                >
                  <X size={16} />
                </button>

                <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-4">Limited Lifetime Deal</h2>
                <p className="text-slate-600">
                  $99 for super early birds. <span className="font-medium text-slate-800">Due to high demand, the price will increase to $199 in {formatTime(countdown)}.</span> Secure lifetime access now before prices increase!
                </p>

                <div className="text-center mt-8">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    $99.00
                  </h3>
                  <Link
                    href="https://buy.stripe.com/5kAeV0b6K27w8BG6os"
                    className="bg-orange-600 text-white text-lg w-full py-3 px-6 rounded-lg block hover:bg-orange-700 transition-colors shadow-md font-medium"
                  >
                    Buy Now
                  </Link>
                </div>
                <div className="text-center text-slate-500 mt-6 mb-2">
                  Supported payment methods
                </div>
                <div className="flex justify-center">
                  <img
                    alt="Payment methods"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_e9xJ7ce6A2N49hHB1Woit1mj6b3o13Lt3Q1NT-tW&s"
                    className="h-12 object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Feature tooltips */}
        <AnimatePresence>
          {!isMobile && hoveredFeature && (
            <FeatureTooltip feature={hoveredFeature} position={tooltipPosition} />
          )}
        </AnimatePresence>

        {/* Feature popup */}
        <AnimatePresence>
          {popupFeature && (
            <FeaturePopup feature={popupFeature} onClose={closePopup} />
          )}
        </AnimatePresence>

        {/* Migration CTA */}
        <div className="max-w-4xl mx-auto my-20">
          <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl py-8 px-6 md:px-12 shadow-lg overflow-hidden">
            {/* Background illustration - hidden on mobile */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block opacity-20">
              <Image alt="Migrate From" width={300} height={300} src={MigrateFrom} />
            </div>

            <div className="relative flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left md:max-w-lg mb-6 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Planning to <span className="text-orange-400">migrate</span> to
                  WonderSites from another platform?
                </h3>
                <p className="text-slate-300 text-sm md:text-base">
                  Our expert team will handle the entire migration process for you - completely free of charge.
                  We'll ensure a smooth transition with zero downtime.
                </p>
              </div>
              <div>
                <Link
                  href="https://app.youform.com/forms/r3rvhjv4"
                  target="_blank"
                  className="bg-white text-slate-900 hover:bg-orange-50 px-8 py-3 rounded-lg inline-flex items-center transition-colors shadow-md font-medium"
                >
                  We'll do it for you <span className="ml-2">→</span>
                </Link>
                <p className="text-xs text-slate-400 mt-2 text-center">Free of charge</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection />

        {/* Testimonials and Rating */}
        <div className="mt-20">
          <Rating />
        </div>

        <div className="mt-20">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Pricing;