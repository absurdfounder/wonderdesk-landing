"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* -------------------------------------------------------------------------- */
/*                              FAQ Data & Types                              */
/* -------------------------------------------------------------------------- */

interface FAQ {
  question: string;
  answer: string;
}

type FAQCategories = {
  [key: string]: FAQ[];
};

const faqs: FAQCategories = {
  Website: [
    {
      question: "What is an online marketplace?",
      answer:
        "An online marketplace platform is a website (or sometimes a mobile app) that aggregates inventory from multiple suppliers (sellers) in one place. It also lets customers (buyers) engage in transactions with the suppliers. A transaction on a marketplace can mean a product purchase, a calendar booking, a message to request a quote, or anything else that leads to an exchange of value between the customer and the supplier. Airbnb, Uber, eBay, Amazon, and Upwork are examples of popular online marketplaces.",
    },
    {
      question: "Who is Wonder for?",
      answer:
        "Wonder is for founders who have a marketplace idea. You and your team may be entrepreneurs looking to build the next marketplace unicorn. Or you might have a great idea for a side project. Perhaps you are an intrapreneur in a bigger organization. Maybe you want to start a non-profit or cooperative marketplace. In each case, Wonder Sites's online marketplace software is for you.",
    },
    {
      question: "Does Wonder  work for my idea?",
      answer:
        "If your business idea is an online marketplace for something, you can make it happen with Wonder Sites's marketplace software. Your platform can be about selling products, renting items, vehicles, or spaces, or selling services. And a host of other things.",
    },
    {
      question: "How does Wonder  work?",
      answer:
        "You start your marketplace project by answering a series of questions. Based on your answers, we'll create a test marketplace website for you. This only takes a few minutes. You can then customize the marketplace to your liking using Wonder Sites's intuitive no-code marketplace website builder. Once you're happy with your marketplace, you can make it live, connect it to your own custom domain, and start inviting people to use it. You can also customize and extend your marketplace with custom code.",
    },
    {
      question: "Is it easy to create a marketplace with Wonder Sites?",
      answer:
        "Yes. With Wonder Sites's online marketplace builder, you can have a fully functional marketplace up and running in minutes. Customizing it to match your unique concept usually takes no more than a day. You don't need any coding skills. Comprehensive text and video tutorials will guide you through the setup process.",
    },
    {
      question: "Can I use my own design?",
      answer:
        "Yes. Wonder  comes with a beautiful design template that is available out of the box. However, you have full freedom to modify or even replace it with your own unique design, thanks to Wonder Sites's headless approach. You have full control over the user interface of your marketplace. Modifying template design requires custom development with HTML, CSS, and Javascript. You can either develop a new design yourself or hire a Wonder  Expert or another developer to help you.",
    },
    {
      question: "Can I add any features I want?",
      answer:
        "Yes. Wonder Sites's developer platform allows you to customize and extend your marketplace platform infinitely. You can add any features, integrate any third-party services, or change your design and workflows. Making these changes requires custom development with HTML, CSS, and Javascript.",
    },
    {
      question: "What should I do if I need help?",
      answer:
        "If you need help setting up your marketplace platform, Wonder Sites's free email support is available seven days a week. Just send us a message at hello@wondersites.co, and we'll get back to you in no time.",
    },
    {
      question: "Do I need to hire someone to build my marketplace?",
      answer:
        "No. You can build your marketplace yourself. No coding skills are required to create a marketplace with Wonder Sites. However, if you need a specific unique feature that is not available out of the box and you're not a developer, you might need to hire a developer to build that feature.",
    },
  ],
  Pricing: [
    {
      question: "How much does it cost to build a marketplace with Wonder Sites?",
      answer:
        "The Wonder  build plan is $39/month with a 14-day free trial. There are no upfront fees to create an account with Wonder Sites, and you can build the marketplace yourself. No coding skills are required. Once you're ready to set your marketplace live and invite actual users, you can subscribe to a live plan, which starts at $99/month.",
    },
    {
      question: "How does free trial work?",
      answer:
        "You can start your free 14-day Wonder trial without any payment commitment. We only ask for payment once you're ready to go live or your trial period has passed. During the trial, you have all Build plan features at your disposal, including access to a test marketplace.",
    },
    {
      question: "Are there any additional fees?",
      answer:
        "Pricing is exclusive of taxes and additional local taxes may be collected depending on your region. Some add-ons and advanced features might incur additional costs.",
    },
  ],
  Technical: [
    {
      question: "How do I host my Wonder Sites-powered marketplace?",
      answer:
        "You don't need to install or host anything to launch a marketplace with Wonder Sites. Our cloud hosting infrastructure takes care of hosting for you. You can either connect your own domain to your marketplace or use a default domain provided by us.",
    },
    {
      question: "Can I build a mobile app with Wonder Sites?",
      answer:
        "Yes. Wonder  comes with a responsive marketplace website template that looks great on mobile browsers. You can also build a native mobile app. This requires custom development on top of Wonder Sites's APIs using our developer platform.",
    },
    {
      question: "Is Wonder  secure?",
      answer:
        "Yes. Wonder Sites's marketplace software has been powering online marketplace businesses for over ten years. Over the years, we've built robust safeguards against hacking attempts and DDoS attacks and follow best practices to ensure your data is safe.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                           FAQ Accordion Component                          */
/* -------------------------------------------------------------------------- */

interface FAQAccordionProps {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2">
      <button
        className="w-full text-left p-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-slate-900 text-lg">{question}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4 text-slate-500"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                            Landing Section Component                       */
/* -------------------------------------------------------------------------- */

const LandingSection: React.FC = () => {
  return (
    <section>
      <div className="max-w-3xl px-6 mx-auto text-center">
        <div className="relative mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:pt-20 mt-4">
          <div className="lg:flex-row-reverse relative lg:flex lg:items-center">
            <div className="hidden lg:block lg:flex-shrink-0">
              <img
                src="https://assets.simpleanalytics.com/images/people/rosie.png"
                className="h-44 w-44 xl:h-50 xl:w-50 rounded-full bg-blue-200 dark:bg-gray-700"
                alt="Image of Rosie Sherry"
                loading="lazy"
              />
            </div>
            <div className="lg:mr-10 relative">
              <svg
                className="fill-blue-200 dark:fill-gray-700 absolute top-0 left-0 transform -translate-x-4 -translate-y-10 h-24 w-24"
                viewBox="0 0 144 144"
                aria-hidden="true"
              >
                <path strokeWidth="2" d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742z" />
              </svg>
              <blockquote className="relative">
                <div className="text-2xl leading-9 font-normal italic">
                  <p className="leading-relaxed">
                    “My focus has been on using ethical tools. I said bye to Google Analytics and hello to Simple Analytics. In 1-2 clicks I can get all the information I need.”
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex justify-center">
                    <div className="flex-shrink-0 lg:hidden">
                      <img
                        src="https://assets.simpleanalytics.com/images/people/rosie.png"
                        className="h-12 w-12 rounded-full bg-blue-200 dark:bg-gray-700"
                        alt="Image of Rosie Sherry"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col items-start lg:items-center justify-center ml-4 sm:ml-2">
                      <div className="text-base font-medium text-blue-800">
                        Rosie Sherry
                      </div>
                      <a
                        className="text-base font-normal text-blue-500 underline"
                        href="https://indiehackers.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Community Manager at Indie Hackers
                      </a>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        <h3 className="text-2xl sm:text-4xl leading-normal max-w-md mx-auto mt-2 mb-4 sm:mt-4 sm:mb-8 font-medium">
          Simple.
        </h3>
        <p className="my-4 leading-loose max-w-xl mx-auto">
          Simple Analytics is a simple Google Analytics alternative. One dashboard to instantly see how many visitors are coming to your website, where they come from and what they do once they're there. Without cookies. Without stalking. Still lightweight.
        </p>
        <p>
          <a className="button primary">Start for free now</a>
        </p>
        <p className="mb-8 sm:mb-0 text-xs mt-4">
          <span className="block sm:inline my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="fill-green-500 ml-2 w-4 inline align-text-top"
            >
              <path d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" />
            </svg>{" "}
            Free forever
          </span>
          <span className="block sm:inline my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="fill-green-500 ml-2 w-4 inline align-text-top"
            >
              <path d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" />
            </svg>{" "}
            No credit card required
          </span>
          <span className="block sm:inline my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="fill-green-500 ml-2 w-4 inline align-text-top"
            >
              <path d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" />
            </svg>{" "}
            Cancel anytime
          </span>
        </p>
      </div>

      {/* Additional content (e.g., videos, stats, etc.) can be added here */}
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                           FAQ Section Component                            */
/* -------------------------------------------------------------------------- */

const FAQSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Website");

  return (
    <section>
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center sm:max-w-2xl lg:mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-base font-normal text-slate-600 mt-4 sm:text-lg">
            Have a different question and can't find the answer you're looking for? Reach out to us by{' '}
            <a
              href="mailto:vaibhav@wondersites.co"
              className="text-orange-800 hover:text-blue-500 hover:underline px-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              sending us an email
            </a>
            .
          </p>
        </div>

        <div className="mt-12">
          <div className="flex justify-center mb-8 flex-wrap">
            {Object.keys(faqs).map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 font-semibold text-lg rounded-full m-2 font-roboto-mono ${
                  activeTab === tab ? "bg-orange-700 text-orange-50" : "text-slate-700 hover:bg-orange-100"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          <div className="space-y-6">
            {faqs[activeTab].map((faq, index) => (
              <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                              Main Page Component                           */
/* -------------------------------------------------------------------------- */

const Page: React.FC = () => {
  return (
    <>
      <LandingSection />
      <FAQSection />
    </>
  );
};

export default Page;
