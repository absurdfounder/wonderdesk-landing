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
      answer: "Yes, you can customize the AI Support Bot to align with your brand's voice and style. Adjust the responses, add personalized greetings, and more to get a cohesive user experience.",
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
            Have a different question and can't find the answer you're looking for? Reach out to our support team by
            <a 
              href="mailto:vaibhav@BoringSites.com" 
              className="text-orange-800 hover:text-blue-500 hover:underline px-2"
              target="_blank" 
              rel="noopener noreferrer"
            >
              sending us an email
            </a>
            and we'll get back to you as soon as we can.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex justify-center mb-8 flex-wrap">
            {Object.keys(faqs).map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 font-semibold text-lg rounded-full m-2 ${
                  activeTab === tab 
                    ? "bg-orange-600 text-white" 
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