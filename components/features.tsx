"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, BookOpen, ShoppingBag, FileText, ChevronRight } from 'lucide-react';

const tabData = [
  { id: 'helpdesk', icon: HelpCircle, title: 'Helpdesk', color: 'bg-orange-100 text-orange-600' },
  { id: 'blog', icon: BookOpen, title: 'Blog', color: 'bg-blue-100 text-blue-600' },
  { id: 'marketplace', icon: ShoppingBag, title: 'Marketplace', color: 'bg-green-100 text-green-600' },
  { id: 'wiki', icon: FileText, title: 'Company Wiki', color: 'bg-purple-100 text-purple-600' },
];

const TabButton = ({ tab, isActive, onClick }) => {
  const Icon = tab.icon;
  return (
    <motion.button
      className={`flex items-center justify-between w-full p-4 rounded-lg transition-all ${
        isActive ? tab.color : 'bg-gray-100 text-gray-600'
      } hover:shadow-md`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center">
        <Icon className="w-6 h-6 mr-3" />
        <span className="font-semibold text-2xl">Notion to {tab.title}</span>
      </div>
      <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'rotate-90' : ''}`} />
    </motion.button>
  );
};

const TabContent = ({ id }) => {
  // Replace these with your actual image paths
  const imageSrc = `/images/${id}.png`;
  const alt1Src = `/images/${id}-alt1.png`;
  const alt2Src = `/images/${id}-alt2.png`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src={imageSrc} alt={`${id} preview`} className="w-full h-auto" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-2xl mb-4">A simpler alternative to</h3>
        <div className="flex items-center space-x-4">
          <img src={alt1Src} alt="Alternative 1" className="h-8" />
          <span className="text-gray-500">and</span>
          <img src={alt2Src} alt="Alternative 2" className="h-8" />
        </div>
      </div>
    </motion.div>
  );
};

export default function Features() {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Need Something Unique?</h2>
          <p className="text-2xl font-light text-orange-600">BoringSites can create it.</p>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            BoringSites is designed for all types from content curation to content creation. 
            Build company blogs, helpdesks, company wiki, documentations, and marketplaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {tabData.map((tab) => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <TabContent key={activeTab} id={activeTab} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}