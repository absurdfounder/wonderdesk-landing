"use client";

import { useState, useEffect, ChangeEvent, useRef } from "react";
import Image from "next/image";
import notionfooterImage from "@/public/images/nb-herosec.png";
import MigrateFrom from "@/public/images/migratefrom.png";
import Testimonials from "@/components/testimonials";
import Rating from "../compare-against/Rating";
import Link from "next/link";
import confetti from "canvas-confetti"; // Importing the confetti library

const pricingMap: Record<number, number> = {
  3000: 5,
  10000: 15,
  50000: 30,
  100000: 50,
  1000000: 100,
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
    name: "Password Protection",
    popup: {
      image: "/path/to/image_password_protection.png",
      headline: "Password Protection",
      description: "Protect your content with secure password protection.",
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
        "BoringSites offers a 7 day free trial to help you explore. Free Design Service. There’s zero cost to get in the product and set things up. Within the trial period you will be able to use all available features. After the trial is over, you can choose to subscribe to one of our offered subscription plans.",
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
      {isOpen && (
        <div className="px-4 pb-4 text-gray-500">
          <p>{answer}</p>
        </div>
      )}
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
              <button
                key={tab}
                className={`px-4 py-2 font-semibold text-lg rounded-full m-2 ${activeTab === tab
                  ? "bg-orange-600 text-white"
                  : "text-gray-700"
                  }`}
                onClick={() => handleTabClick(tab as keyof typeof faqs)}
              >
                {tab}
              </button>
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
  const [activeTab, setActiveTab] = useState<"Monthly" | "Yearly">("Yearly");
  const [selectedUsers, setSelectedUsers] = useState<keyof typeof pricingMap>(3000);
  const [monthlyPrice, setMonthlyPrice] = useState(pricingMap[selectedUsers]);
  const [yearlyPrice, setYearlyPrice] = useState(monthlyPrice * 10);
  const [popupFeature, setPopupFeature] = useState<Feature | null>(null);
  const [tooltipFeature, setTooltipFeature] = useState<Feature | null>(null); // State for tooltip
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number, left: number }>({ top: 0, left: 0 }); // State for tooltip position
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdown, setCountdown] = useState<number>(86400); // 24 hours in seconds
  const [isLifetimeDealVisible, setIsLifetimeDealVisible] = useState(true);
  const featureRefs = useRef<(HTMLLIElement | null)[]>([]); // Ref to track feature elements

  const startDate = new Date("2023-05-01"); // Replace with your start date
  const endDate = new Date("2024-06-30"); // Replace with your end date

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

  // Confetti effect when the page is rendered
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []); // Empty dependency array to run only on initial render

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

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div
        className="absolute bottom-0 pointer-events-none z-1 h-screen w-screen"
        aria-hidden="true"
        style={{ width: "-webkit-fill-available", opacity: 0.1 }}
      >
        <svg className=" h-full w-full" xmlns="http://www.w3.org/2000/svg">
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
        <div className="pt-32 pb-12 md:pt-18 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate">
              Try BoringSites free for{" "}
              <span className="gradient-border-accent"> 7 days</span>
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-3xl m-auto">
            <div>
              <div className="w-full text-center ltr:mr-4 rtl:ml-4 md:block mb-8">
                <p className="mt-2 text-lg font-medium text-gray-400">
                  Join 50+ happy customers who set up fully functional
                  marketplaces, helpdesk and blogs in hours not days - All
                  powered by Notion.
                </p>
              </div>
              <div className="justify-center mb-4 w-full my-5">
                <div className="w-full"></div>
              </div>

              {isLifetimeDealVisible && (
                <div className="relative bg-gray-900 rounded-2xl py-6 px-4 md:py-8 md:px-12 shadow-2xl overflow-hidden hidden">

<span className="mt-4 mb-4  inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
        Lifetime Deal 🤯
      </span>

                  <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block ">
                    <Image
                      alt="Logo"
                      width={250}
                      className="block"
                      src={notionfooterImage}
                    />
                  </div>

                  <div className="relative flex flex-col lg:flex-row justify-between items-center">
                    {/* CTA content */}
                    
                    <div className="text-center lg:text-left lg:max-w-xl">
                    <h3 className="h3 text-white mb-2">
                        Get <b className="text-orange-600">Unlimited </b> at  
                        <span className="line-through text-gray-400 ml-2 mr-2 font-normal">$599</span>{" "}
                        <b className="text-white">$99</b>
                      </h3>

                      {/* CTA form */}
                      <form className="w-full lg:w-auto">
                        <button
                          className="btn bg-orange-600 hover:bg-orange-700 shadow px-12"
                          type="button"
                          onClick={toggleModal}
                        >
                          Buy Now
                        </button>

                        <p className="text-lg text-red-400 mt-3">
                          Ending in{" "}
                          <b className="text-lg text-red-400 mt-3">
                            {formatTime(countdown)}
                          </b>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              )}



{isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mt-4">Limited Lifetime Deal</h2>
            <p className="mt-2">
            $99 for super early birds. <span className="font-bold text-gray-500 border-b-2 border-gray-600">Due to the high demand, the lifetime deal price will be increased to $199 in {formatTime(countdown)}.</span> Timer is real; I'm not kidding :) We will launch our subscription plan soon! Grab our limited lifetime deal. You pay once, use forever with no limit!
            </p>

            <div className="text-center mt-4">
              <h3 className="text-3xl font-bold mt-4 mb-4">$99.00</h3>
              <Link
                className="bg-orange-700 text-white text-xl w-full py-4 px-16 rounded-lg block"
                href="https://buy.stripe.com/5kAeV0b6K27w8BG6os"
              >
                Buy
              </Link>
            </div>
            <div className="text-center text-gray-500 mt-8">
              Supported payment methods
            </div>

    <img alt="Xumm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_e9xJ7ce6A2N49hHB1Woit1mj6b3o13Lt3Q1NT-tW&s" className=" h-20 w-full object-contain mt-4" />

            
          </div>
        </div>
      )}



              <div
                dir="ltr"
                data-orientation="horizontal"
                className="mt-8 mb-4 w-fit lg:mb-13 border rounded-full m-auto border-gray-600"
              >
                <div
                  role="tablist"
                  aria-orientation="horizontal"
                  className="relative flex w-full rounded-full bg-gray-100 font-semibold z-0 border-1 border-gray-600"
                  data-orientation="horizontal"
                >
                  <span
                    className={`absolute inset-y-0 left-0 -z-10 rounded-full border-2 w-full h-14 transition-transform duration-300 ease-in-out white-space-nowrap ${
                      activeTab === "Monthly" ? "translate-x-full" : ""
                    }`}
                  ></span>
                  <button
                    className={`w-fit text-md h-14 flex items-center justify-center uppercase transition-colors duration-300 ease-in-out px-6 ${
                      activeTab === "Yearly"
                        ? "bg-orange-600 rounded-full border-2 border-dark"
                        : "bg-transparent text-gray-900"
                    }`}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "Yearly"}
                    onClick={() => handleTabClick("Yearly")}
                  >
                    ANNUALLY ♥ 2 MONTHS FREE
                  </button>
                  <button
                    className={`w-fit text-md h-14 flex items-center justify-center uppercase transition-colors duration-300 ease-in-out px-6 ${
                      activeTab === "Monthly"
                        ? "bg-orange-600 rounded-full border-2 border-dark"
                        : "bg-transparent text-gray-900"
                    }`}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "Monthly"}
                    onClick={() => handleTabClick("Monthly")}
                  >
                    MONTHLY
                  </button>
                </div>
              </div>

              <div className="sm:block hidden text-xs opacity-50 font-medium justify-center text-center mb-4">
                Save 2 months on yearly 🎁
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Number of Users Every Month
                </label>
                <select
                  className="relative bg-white border-1 rounded-full mt-2 w-full p-4 font-bold h3"
                  id="num-of-views"
                  value={selectedUsers}
                  onChange={handleUserChange}
                >
                  <option value="3000">3K Users</option>
                  <option value="10000">10K Users</option>
                  <option value="50000">50K Users</option>
                  <option value="100000">100K Users</option>
                  <option value="1000000">1 Million Users</option>
                </select>
              </div>
              <div>
                <article className="overflow-hidden rounded-lg border-2 pb-5 shadow-md gradient-border-accent">
                  <div className="relative bg-white border-b-2 border-dashed px-7 py-6 md:pt-7">
                    <h5 className="h2 flex gap-2">
                      <span>
                        <div className="font-bold">
                          {activeTab === "Yearly"
                            ? `$${yearlyPrice}`
                            : `$${monthlyPrice}`}
                        </div>
                      </span>
                      <span
                        className="relative text-3xl leading-8 text-neutral-500 m-auto"
                        style={{ marginLeft: "0" }}
                      >
                        / {activeTab}
                      </span>
                    </h5>
                    <div className="flex grow flex-col gap-2 md:flex-row md:items-end mt-6 mb-4">
                    <Link href="app.BoringSites.com" className="bg-orange-700 font-bold w-full p-4 rounded-lg text-center">
                        Coming Soon..
                      </Link>
                    </div>

                    <div className="relative overflow-hidden rounded-full border border-gray-200 bg-white">
                      <div className="p-6 md:px-10 md:py-4 justify-center bg-gray-200">
                        <div className="relative flex items-center">
                          <div className="flex h-5 items-center">
                            <input
                              type="checkbox"
                              id="addon"
                              checked
                              name="addon"
                              className="h-5 w-5 rounded-full border-gray-300 text-gray-900 focus:ring-gray-900"
                              aria-label="Sub-marketplace blogs addon"
                            />
                          </div>
                          <div className="ml-3 text-base">
                            <label className="font-normal text-gray-900">
                              <span>Including </span>
                              <span className="mr-3 inline-flex items-center rounded-full bg-gray-900 px-2.5 py-0.5 text-sm font-medium uppercase text-white">
                                Free Design Services
                              </span>
                              <span>limited time only.</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-md max-w-[482px] pt-6 text-gray-500 md:pt-4">
                      Extend your workflows with round-robin and collective
                      events and make advanced routing forms.
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4  p-8">
                      {features.map((feature, index) => (
                        <li
                          key={index}
                          ref={(el) => {
                            featureRefs.current[index] = el;
                          }}
                          className={`text-md flex items-start gap-2 leading-[32px] mb-2 items-center `}
                          onMouseEnter={() => handleMouseEnter(feature, index)}
                          onMouseLeave={handleMouseLeave}
                          onClick={() =>
                            feature.popup && handleFeatureClick(feature)
                          }
                        >
                          <figure className="border bg-orange-700 p-2 px-4 rounded-full font-bold text-white">
                            ✓
                          </figure>
                          <span
                            className={`p-0 px-1 ml-2 ${
                              feature.popup
                                ? "border-b-2 border-gray-600 border-dashed pointer hover:text-orange-600"
                                : ""
                            }`}
                          >
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        {tooltipFeature && tooltipFeature.popup && (
          <div
            className="absolute z-50 p-4 bg-white shadow-md rounded-md"
            style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
          >
            <h3 className="text-lg font-bold">{tooltipFeature.popup.headline}</h3>
            <p className="text-sm">{tooltipFeature.popup.description}</p>
          </div>
        )}

        {popupFeature && popupFeature.popup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 px-12 rounded-lg shadow-lg max-w-md mx-auto relative">
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
            </div>
          </div>
        )}

        <div className="text-center">
          <p className="text-sm font-medium text-gray-600">
            Pricing is exclusive of taxes and additional local tax may be
            collected depending on your region.
          </p>
        </div>

        <div className="mt-12 sm:mt-16">
          <h4 className="font-display text-4xl font-bold tracking-tight text-gray-900 text-center">
            Add-ons
          </h4>
          <div className="max-w-xl bg-white shadow-sm ring-1 ring-inset ring-gray-200 mx-auto mt-6 rounded-2xl lg:max-w-2xl">
            <div className="space-y-6 px-8 py-6">
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <svg
                    aria-hidden="true"
                    className="h-8 w-8 shrink-0 text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208,88H152V32Z" opacity="0.2"></path>
                    <path
                      d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-82.34L139.31,152l18.35,18.34a8,8,0,0,1-11.32,11.32L128,163.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L116.69,152,98.34,133.66a8,8,0,0,1,11.32-11.32L128,140.69l18.34-18.35a8,8,0,0,1,11.32,11.32Z"
                    ></path>
                  </svg>
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
                  <svg
                    aria-hidden="true"
                    className="h-8 w-8 shrink-0 text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,96V224l-39.58-32H88a8,8,0,0,1-8-8V144h88a8,8,0,0,0,8-8V88h40A8,8,0,0,1,224,96Z" opacity="0.2"></path>
                    <path
                      d="M216,80H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8V96A16,16,0,0,0,216,80ZM66.55,137.78,40,159.25V48H168v88H71.58A8,8,0,0,0,66.55,137.78ZM216,207.25l-26.55-21.47a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32Z"
                    ></path>
                  </svg>
                  <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                    Extra 5 Websites (Addon)
                  </h2>
                </div>
                <div className="flex items-center gap-0.5">
                  <p className="text-3xl font-semibold tracking-tight text-gray-900">
                    +$7
                  </p>
                  <p className="text-lg font-medium text-gray-500">/mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FAQSection />

        <div className="relative bg-gray-900 rounded-2xl py-6 px-4 md:py-8 md:px-12 shadow-2xl overflow-hidden">
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
                    className="btn bg-orange-600 hover:bg-orange-700 shadow px-12"
                    href="/migrating-to-BoringSites"
                  >
                    We can do it for you →
                  </Link>
                </div>
                {/* Success message */}
                {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                <p className="text-sm text-gray-400 mt-3">Free of charge</p>
              </form>
            </div>
          </div>
        </div>

        <Rating />

        <Testimonials />
      </div>
    </section>
  );
};

export default Pricing;
