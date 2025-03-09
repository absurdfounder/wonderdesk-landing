"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link'; 
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, ArrowRight, HelpCircle, BookOpen, ShoppingBag, FileText, Briefcase, FileCode, Tag } from 'lucide-react';
import templateData from '@/public/showcase_data.json';

// TypeScript interfaces remain the same
interface CallToAction {
  text: string;
  link: string;
}

interface viewDemo {
  text: string;
  link: string;
}

interface Product {
  name: string;
  logo: string;
  description: string;
  type: string;
  provider: string;
  callToCopy: CallToAction;
  viewDemo: viewDemo;
  tags?: string[]; // Add tags property
}

interface Template {
  id: string;
  product: Product;
  overview: {
    content: string;
  };
  howItWorks: {
    content: string;
  };
  configuration: {
    content: string;
  };
  proof: {
    screenshot: string;
    youtubevideo: string;
  };
}

interface ShowcaseData {
  template_library: Template[];
}

const truncateText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

interface TemplateLibraryProps {
  initialSelectedType?: string;
}

const TemplateLibrary = ({ initialSelectedType = 'all' }: TemplateLibraryProps) => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [displayedTemplates, setDisplayedTemplates] = useState<Template[]>([]);
  const [isTagMenuOpen, setIsTagMenuOpen] = useState(false);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [showAllTags, setShowAllTags] = useState(false);

  const types = ['all', 'helpdesk', 'blog', 'directory', 'marketplace', 'company wiki', 'documentation'];

  const typeIcons = {
    'all': HelpCircle,
    'helpdesk': HelpCircle,
    'blog': BookOpen,
    'directory': FileText,
    'marketplace': ShoppingBag,
    'company wiki': Briefcase,
    'documentation': FileCode
  };

  useEffect(() => {
    const allTemplates = templateData[0]?.template_library || [];
    setTemplates(allTemplates);
    
    // Extract all unique tags
    const tags = new Set<string>();
    allTemplates.forEach(template => {
      if (template?.product?.tags) {
        template.product.tags.forEach(tag => tags.add(tag));
      }
    });
    
    setAllTags(Array.from(tags).sort());
  }, []);

  // Removed selectedType effect

  useEffect(() => {
    if (!Array.isArray(templates)) {
      setDisplayedTemplates([]);
      return;
    }

    let filteredTemplates = templates;

    // Filter by selected tags if any
    if (selectedTags.length > 0) {
      filteredTemplates = filteredTemplates.filter(template => {
        if (!template?.product?.tags) return false;
        return selectedTags.some(tag => template.product.tags?.includes(tag));
      });
    }

    const templatesArray = Array.isArray(filteredTemplates) ? filteredTemplates : [];
    setDisplayedTemplates(templatesArray.slice(0, 6)); // Always limit to 6 templates
  }, [selectedTags, templates]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prevTags => 
      prevTags.includes(tag) 
        ? prevTags.filter(t => t !== tag) 
        : [...prevTags, tag]
    );
  };

  const clearTags = () => {
    setSelectedTags([]);
  };
  
  const toggleShowAllTags = () => {
    setShowAllTags(!showAllTags);
  };

  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' id="template-section">
      <motion.h1 
        className="text-center mb-4 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-source-serif-4 block font-normal text-orange-600 text-2xl sm:text-3xl lg:text-4xl">
          Beautiful websites
        </span> 
        <div className="flex flex-col sm:flex-row items-center justify-center m-auto">
          <span className="mr-2 font-normal text-xl sm:text-2xl lg:text-3xl">made with</span>
          <svg width="1886" height="240" viewBox="0 0 1886 240" className="h-8 sm:h-10 w-auto px-2 py-0">
            {/* SVG code omitted as per instruction */}
          </svg>
        </div>
      </motion.h1>

      <motion.p 
        className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Browse through examples of live Notion websites, built with BoringSites.
      </motion.p>

      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link 
          className="w-full sm:w-auto px-6 py-3 text-lg sm:text-xl bg-orange-600 text-black rounded-lg hover:bg-orange-700 transition-colors duration-300 text-center flex items-center justify-center"
          href="https://app.youform.com/forms/r3rvhjv4" 
          target='_blank'
        >
          <b className='mx-2 font-roboto-mono'>Ask Us</b> to Build 
        </Link>
        <Link 
          className="w-full sm:w-auto px-6 py-3 text-lg sm:text-xl border border-slate-900 text-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors duration-300 text-center"
          href="/showcase"
        >
          View all
        </Link>
      </motion.div>

      <motion.div 
        className="mt-24 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {/* Mobile dropdown for tags */}
        <div className="sm:hidden relative mb-4">
          <button
            onClick={() => setIsTagMenuOpen(!isTagMenuOpen)}
            className="w-full px-4 py-2 text-left bg-white border rounded-lg shadow-sm flex items-center justify-between"
          >
            <span>Tags {selectedTags.length > 0 ? `(${selectedTags.length} selected)` : ''}</span>
            <svg className={`w-5 h-5 transition-transform ${isTagMenuOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isTagMenuOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {/* Display first few tags */}
              {allTags.slice(0, showAllTags ? allTags.length : 5).map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`w-full px-4 py-2 text-left flex items-center ${selectedTags.includes(tag) ? 'bg-orange-600 text-white' : 'hover:bg-slate-100'}`}
                >
                  <Tag className="mr-2 h-4 w-4" />
                  {tag}
                </button>
              ))}
              
              {/* Show all/less button */}
              {allTags.length > 5 && (
                <button
                  onClick={() => setShowAllTags(!showAllTags)}
                  className="w-full px-4 py-2 text-left text-orange-600"
                >
                  {showAllTags ? "Show less" : `Show all (${allTags.length - 5} more)`}
                </button>
              )}
              
              {selectedTags.length > 0 && (
                <button
                  onClick={clearTags}
                  className="w-full px-4 py-2 text-left text-orange-600 border-t"
                >
                  Clear all tags
                </button>
              )}
            </div>
          )}
        </div>

        {/* Desktop tag filters */}
        <div className="hidden sm:flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {/* Display first few tags */}
            {allTags.slice(0, showAllTags ? allTags.length : 8).map(tag => (
              <motion.button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTags.includes(tag)
                    ? "bg-orange-500 text-white"
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
                {selectedTags.includes(tag) && (
                  <span className="ml-1.5">×</span>
                )}
              </motion.button>
            ))}
          </div>
          
          {/* Show all/less toggle */}
          {allTags.length > 8 && (
            <button
              onClick={toggleShowAllTags}
              className="text-sm text-orange-600 hover:text-orange-800 font-medium transition-colors duration-200 mt-2"
            >
              {showAllTags ? "Show less" : `Show all (${allTags.length - 8} more)`}
            </button>
          )}
          
          {/* Clear all button */}
          {selectedTags.length > 0 && (
            <button
              onClick={clearTags}
              className="text-sm text-orange-600 hover:text-orange-800 font-medium transition-colors duration-200 mt-2"
            >
              Clear all filters
            </button>
          )}
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {displayedTemplates.length > 0 ? (
          <motion.div 
            key="templates"
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {displayedTemplates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex h-full"
              >
                <Link
                  href={"/showcase/" + template.id}
                  className="relative flex flex-col w-full overflow-hidden bg-white rounded-2xl shadow-xl border hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="w-full p-4">
                    <div className="flex justify-center items-center">
                      <Image
                        className="w-full h-full object-cover"
                        width={100}
                        height={100}
                        src={template.product.logo}
                        unoptimized
                        alt={template.product.name}
                      />
                    </div>
                    <div className="p-4 text-start">
                      <Link href={"/showcase/" + template.id} className="group flex gap-2 items-center">
                        <span className="text-start font-bold group-hover:text-orange-600 transition-colors duration-300">
                          {template.product.name}
                        </span>
                        <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-600 transition-colors duration-300" />
                      </Link>
                      <p className="text-sm text-slate-400 mt-2 mb-3">
                        {truncateText(template.product.description, 76)}
                      </p>
                      
                      {/* Type and tags */}
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-block bg-slate-100 border-slate-200 border-dashed border-2 px-3 py-1 rounded-full text-sm">
                          {template.product.type}
                        </span>
                        
                        {/* Tags display */}
                        {template.product.tags && template.product.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className={`inline-block px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800`}
                          >
                            {tag}
                          </span>
                        ))}
                        {template.product.tags && template.product.tags.length > 2 && (
                          <span className="inline-block text-xs text-slate-400 self-center">
                            +{template.product.tags.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="empty"
            className="flex flex-col items-center justify-center mt-8 p-8 bg-slate-100 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <AlertCircle size={48} className="text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold mb-2">No templates found</h2>
            <p className="text-slate-600">Try adjusting your filters or check back later for more templates.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TemplateLibrary;