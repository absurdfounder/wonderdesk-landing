"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string;
}

type FAQCategories = {
  [key: string]: FAQ[];
}

const faqs: FAQCategories = {
  Website: [
    {
      question: "What is an online marketplace?",
      answer: "An online marketplace platform is a website (or sometimes a mobile app) that aggregates inventory from multiple suppliers (sellers) in one place. It also lets customers (buyers) engage in transactions with the suppliers. A transaction on a marketplace can mean a product purchase, a calendar booking, a message to request a quote, or anything else that leads to an exchange of value between the customer and the supplier. Airbnb, Uber, eBay, Amazon, and Upwork are examples of popular online marketplaces.",
    },
    {
      question: "Who is Wonder  for?",
      answer: "Wonderis for founders who have a marketplace idea. You and your team may be entrepreneurs looking to build the next marketplace unicorn. Or you might have a great idea for a side project. Perhaps you are an intrapreneur in a bigger organization. Maybe you want to start a non-profit or cooperative marketplace. In each case, Wonder Sites's online marketplace software is for you.",
    },
    {
      question: "Does Wonder  work for my idea?",
      answer: "If your business idea is an online marketplace for something, you can make it happen with Wonder Sites's marketplace software. Your platform can be about selling products, renting items, vehicles, or spaces, or selling services. And a host of other things.",
    },
    {
      question: "How does Wonder  work?",
      answer: "You start your marketplace project by answering a series of questions. Based on your answers, we'll create a test marketplace website for you. This only takes a few minutes. You can then customize the marketplace to your liking using Wonder Sites's intuitive no-code marketplace website builder. Once you're happy with your marketplace, you can make it live, connect it to your own custom domain, and start inviting people to use it. You can also customize and extend your marketplace with custom code. Add any unique features or designs with Wonder Sites's developer platform.",
    },
    {
      question: "Is it easy to create a marketplace with Wonder Sites?",
      answer: "Yes. With Wonder Sites's online marketplace builder, you can have a fully functional marketplace up and running in minutes. Customizing it to match your unique concept usually takes no more than a day. You don't need any coding skills. Comprehensive text and video tutorials will guide you through the setup process.",
    },
    {
      question: "Can I use my own design?",
      answer: "Yes. Wonder comes with a beautiful design template that is available out of the box. However, you have full freedom to modify or even replace it with your own unique design, thanks to Wonder Sites's headless approach. Wonder gives you full control over the user interface of your marketplace. Modifying template design requires custom development with HTML, CSS, and Javascript. You can either develop a new design yourself or hire a Wonder  Expert or another developer to help you.",
    },
    {
      question: "Can I add any features I want?",
      answer: "Yes. Wonder Sites's developer platform allows you to customize and extend your marketplace platform infinitely. You can add any features, integrate any third-party services, or change your design and workflows. Making these changes requires custom development with HTML, CSS, and Javascript.",
    },
    {
      question: "What should I do if I need help?",
      answer: "If you need help setting up your marketplace platform, Wonder Sites's free email support is available seven days a week. Just send us a message at hello@wondersites.co, and we'll get back to you in no time.",
    },
    {
      question: "Do I need to hire someone to build my marketplace?",
      answer: "No. You can build your marketplace yourself. No coding skills are required to create a marketplace with Wonder Sites. However, if you need a specific unique feature that is not available in Wonder Sites's marketplace builder out of the box, and you're not a developer, you might need to hire a developer to build the feature for you.",
    }
  ],
  Pricing: [
    {
      question: "How much does it cost to build a marketplace with Wonder Sites?",
      answer: "The Wonder Build plan is $39/month with a 14-day free trial. There are no upfront fees to create an account with Wonder Sites, and you can build the marketplace yourself. No coding skills are required. Once you're ready to set your marketplace live and invite actual users, you can subscribe to a live plan, which start at $99/month.",
    },
    {
      question: "How does free trial work?",
      answer: "You can start your free 14-day Wonder trial without any payment commitment. We only ask for payment once you're ready to go live or your trial period has passed. During the trial, you have all Build plan features at your disposal. You have access to a test marketplace, which will be the basis for your eventual live platform.",
    },
    {
      question: "Are there any additional fees?",
      answer: "Pricing is exclusive of taxes and additional local tax may be collected depending on your region. Some add-ons and advanced features might incur additional costs.",
    }
  ],
  Technical: [
    {
      question: "How do I host my Wonder Sites-powered marketplace?",
      answer: "You don't need to install or host anything to launch a marketplace with Wonder Sites. Wonder Sites's cloud hosting infrastructure takes care of hosting for you. You can either connect your own domain to your marketplace or use a default domain, [your-marketplace].mywondersites.co.",
    },
    {
      question: "Can I build a mobile app with Wonder Sites?",
      answer: "Yes. Wonder comes with a responsive marketplace website template that looks great on mobile browsers. You can also build a native mobile app. This requires custom development on top of Wonder Sites's APIs using the developer platform.",
    },
    {
      question: "Is Wonder secure?",
      answer: "Yes. Wonder Sites's marketplace software has been powering online marketplace businesses for over ten years. Over the years, we've built powerful safeguards against hacking attempts and DDoS attacks and follow best practices to ensure your data is safe.",
    }
  ]
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
            animate={{ height: "auto", opacity: 1 }}
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

const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Website");

  return (
    <div className="mx-auto mt-10">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center sm:max-w-2xl lg:mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-base font-normal text-slate-600 mt-4 sm:text-lg">
            Have a different question and can't find the answer you're looking for? Reach out to us by
            <a 
              href="mailto:vaibhav@wondersites.co" 
              className="text-orange-800 hover:text-blue-500 hover:underline px-2"
              target="_blank" 
              rel="noopener noreferrer"
            >
              sending us an email.
            </a>
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
                  activeTab === tab 
                    ? "bg-orange-700 text-orange-50" 
                    : "text-slate-700 hover:bg-orange-100"
                }`}
                onClick={() => setActiveTab(tab)}
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

export default FAQ;