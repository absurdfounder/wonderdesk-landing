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

interface TagCount {
  tag: string;
  count: number;
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
  const [popularTags, setPopularTags] = useState<TagCount[]>([]);
  const [lesserTags, setLesserTags] = useState<TagCount[]>([]);
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

    // Count tag occurrences across all templates
    const tagCounts: Record<string, number> = {};

    allTemplates.forEach(template => {
      if (template?.product?.tags) {
        template.product.tags.forEach(tag => {
          tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
      }
    });

    // Convert to TagCount objects and sort alphabetically
    const tagCountArray = Object.entries(tagCounts).map(([tag, count]) => ({
      tag,
      count
    }));

    // Sort alphabetically first
    tagCountArray.sort((a, b) => a.tag.localeCompare(b.tag));

    // Then separate popular (2+ occurrences) from lesser tags (1 occurrence)
    const popular = tagCountArray.filter(tc => tc.count >= 2);
    const lesser = tagCountArray.filter(tc => tc.count < 2);

    setPopularTags(popular);
    setLesserTags(lesser);
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
            <svg width="1886" height="240" viewBox="0 0 1886 240" className="h-10 w-auto px-2 py-0" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M500.954 120.086C511.726 126.009 521.26 141.083 522.079 168.468C522.879 195.192 514.823 228.941 496.369 262.5C477.915 296.059 453.73 320.938 430.735 334.577C407.171 348.554 389.335 348.577 378.563 342.653C367.792 336.73 358.257 321.656 357.438 294.271C356.639 267.547 364.694 233.798 383.148 200.239C401.602 166.68 425.787 141.801 448.783 128.161C472.346 114.185 490.183 114.162 500.954 120.086Z" stroke="#C4C4C4" stroke-width="50"/>
<path d="M1297 111C1297 103.82 1302.82 98 1310 98H1399.08C1419.41 98 1437.01 101.044 1451.86 107.131C1466.83 113.218 1478.34 122.227 1486.37 134.158C1494.41 146.089 1498.43 160.82 1498.43 178.352C1498.43 192.961 1496.05 205.379 1491.3 215.605C1486.56 225.832 1479.86 234.293 1471.22 240.989C1462.93 247.501 1453.26 252.804 1442.21 256.898C1441.58 257.13 1440.97 257.403 1440.39 257.722L1424.83 266.238C1422.91 267.285 1420.77 267.834 1418.59 267.834H1347.88C1340.74 267.834 1334.94 262.076 1334.88 254.937L1334.72 234.735C1334.67 227.515 1340.5 221.632 1347.72 221.632H1399.27C1408.15 221.632 1415.52 220.049 1421.36 216.884C1427.21 213.718 1431.59 209.275 1434.51 203.553C1437.55 197.709 1439.08 190.891 1439.08 183.1C1439.08 175.064 1437.55 168.125 1434.51 162.281C1431.47 156.438 1426.96 151.994 1421 148.95C1415.15 145.785 1407.85 144.202 1399.08 144.202H1369.53C1362.35 144.202 1356.53 150.022 1356.53 157.202V350.891C1356.53 358.07 1350.71 363.891 1343.53 363.891H1310C1302.82 363.891 1297 358.07 1297 350.891V111ZM1452.19 363.891C1447.28 363.891 1442.79 361.131 1440.58 356.755L1393.98 264.54C1389.61 255.908 1395.87 245.704 1405.54 245.676L1439.41 245.578C1444.25 245.564 1448.71 248.247 1450.96 252.539L1507.67 360.672C1507.84 360.987 1507.92 361.337 1507.92 361.693C1507.92 362.907 1506.94 363.891 1505.72 363.891H1452.19Z" fill="#C4C4C4"/>
<path d="M1252.79 317.871C1259.97 317.871 1265.79 323.691 1265.79 330.871V350.891C1265.79 358.07 1259.97 363.891 1252.79 363.891H1137.26C1130.08 363.891 1124.26 358.07 1124.26 350.891V330.871C1124.26 323.691 1130.08 317.871 1137.26 317.871H1252.79ZM1131.53 98C1138.71 98 1144.53 103.82 1144.53 111V350.891C1144.53 358.07 1138.71 363.891 1131.53 363.891H1098C1090.82 363.891 1085 358.07 1085 350.891V111C1085 103.82 1090.82 98 1098 98H1131.53ZM1234.53 205.014C1241.71 205.014 1247.53 210.834 1247.53 218.014V236.572C1247.53 243.752 1241.71 249.572 1234.53 249.572H1137.26C1130.08 249.572 1124.26 243.752 1124.26 236.572V218.014C1124.26 210.834 1130.08 205.014 1137.26 205.014H1234.53ZM1252.97 98C1260.15 98 1265.97 103.82 1265.97 111V131.202C1265.97 138.382 1260.15 144.202 1252.97 144.202H1137.26C1130.08 144.202 1124.26 138.382 1124.26 131.202V111C1124.26 103.82 1130.08 98 1137.26 98H1252.97Z" fill="#C4C4C4"/>
<path d="M923.187 363.891H877.853C870.633 363.891 864.796 358.007 864.853 350.787L865.012 330.768C865.069 323.629 870.872 317.871 878.011 317.871H923.187C936.457 317.871 947.657 314.827 956.788 308.74C965.919 302.531 972.858 293.4 977.606 281.348C982.354 269.173 984.729 254.381 984.729 236.972V224.736C984.729 211.588 983.389 200.022 980.711 190.039C978.033 179.934 974.076 171.473 968.841 164.655C963.606 157.838 957.092 152.724 949.301 149.315C941.631 145.907 932.804 144.202 922.821 144.202H876.653C869.474 144.202 863.653 138.382 863.653 131.202V111C863.653 103.82 869.474 98 876.653 98H922.821C940.84 98 957.275 101.044 972.128 107.131C987.103 113.218 1000.01 121.923 1010.84 133.245C1021.8 144.567 1030.26 157.959 1036.23 173.421C1042.19 188.882 1045.17 206.109 1045.17 225.102V236.972C1045.17 255.842 1042.19 273.069 1036.23 288.652C1030.26 304.114 1021.8 317.506 1010.84 328.828C1000.01 340.029 987.163 348.673 972.311 354.76C957.458 360.847 941.083 363.891 923.187 363.891ZM885.533 98C892.713 98 898.533 103.82 898.533 111V350.891C898.533 358.07 892.713 363.891 885.533 363.891H852C844.82 363.891 839 358.07 839 350.891V111C839 103.82 844.82 98 852 98H885.533Z" fill="#C4C4C4"/>
<path d="M786.323 98C793.503 98 799.323 103.82 799.323 111V350.891C799.323 358.07 793.503 363.891 786.323 363.891H747.432C742.812 363.891 738.54 361.439 736.209 357.451L663.757 233.492C657.064 222.041 639.533 226.788 639.533 240.052V350.891C639.533 358.07 633.713 363.891 626.533 363.891H593C585.82 363.891 580 358.07 580 350.891V111C580 103.82 585.82 98 593 98H632.081C636.697 98 640.966 100.448 643.299 104.431L715.937 228.483C722.636 239.924 740.155 235.172 740.155 221.914V111C740.155 103.82 745.976 98 753.155 98H786.323Z" fill="#C4C4C4"/>
<path d="M80.0551 333.202C79.7686 331.52 79.816 329.798 80.1948 328.134L130.278 108.115C131.624 102.198 136.885 98 142.953 98H154.419C159.663 98 164.393 101.151 166.414 105.989L173.499 122.949C174.559 125.486 174.787 128.295 174.15 130.97L121.079 353.901C119.685 359.758 114.453 363.891 108.433 363.891H96.2552C89.9178 363.891 84.5039 359.321 83.4397 353.073L80.0551 333.202ZM48.2211 98C54.4658 98 59.8283 102.44 60.993 108.575L102.842 329.015C103.184 330.818 103.141 332.673 102.715 334.458L98.0736 353.908C96.6769 359.761 91.4459 363.891 85.4286 363.891H68.1883C62.0711 363.891 56.7814 359.626 55.484 353.648L3.41984 113.757C1.66149 105.655 7.83373 98 16.1241 98H48.2211ZM213.497 333.056C213.124 331.351 213.098 329.587 213.422 327.872L254.763 108.592C255.921 102.449 261.287 98 267.538 98H299.438C307.729 98 313.901 105.656 312.143 113.757L260.078 353.648C258.781 359.626 253.491 363.891 247.374 363.891H230.702C224.592 363.891 219.306 359.636 218.002 353.667L213.497 333.056ZM172.628 98C178.687 98 183.943 102.186 185.299 108.092L236.056 329.249C236.462 331.018 236.493 332.853 236.147 334.636L232.507 353.37C231.32 359.479 225.969 363.891 219.746 363.891H207.459C201.455 363.891 196.233 359.78 194.822 353.945L140.916 130.937C140.247 128.17 140.505 125.259 141.651 122.652L149.071 105.769C151.146 101.048 155.815 98 160.972 98H172.628Z" fill="#C4C4C4"/>
<path d="M411.187 104.807C414.503 96.3311 426.497 96.3311 429.813 104.807L437.547 124.579C438.55 127.143 440.566 129.181 443.12 130.21L462.999 138.226C471.346 141.591 471.346 153.409 462.999 156.774L443.12 164.79C440.566 165.819 438.55 167.857 437.547 170.421L429.813 190.193C426.497 198.669 414.503 198.669 411.187 190.193L403.453 170.421C402.45 167.857 400.434 165.819 397.88 164.79L378.001 156.774C369.654 153.409 369.654 141.591 378.001 138.226L397.88 130.21C400.434 129.181 402.45 127.143 403.453 124.579L411.187 104.807Z" fill="#FF7028"/>
<path d="M384.23 34.5583C389.172 32.087 394.545 37.0457 392.477 42.1703L387.206 55.231C386.589 56.7622 386.629 58.4802 387.318 59.9807L393.337 73.0852C395.563 77.9313 390.833 83.0558 385.825 81.2247L372.281 76.2734C370.73 75.7064 369.014 75.8036 367.537 76.542L354.94 82.8405C349.997 85.3118 344.625 80.3532 346.693 75.2286L351.963 62.1678C352.581 60.6367 352.541 58.9186 351.852 57.4182L345.833 44.3137C343.607 39.4676 348.336 34.3431 353.345 36.1741L366.889 41.1255C368.44 41.6924 370.156 41.5952 371.632 40.8569L384.23 34.5583Z" fill="#FF7028"/>
            </svg>
          </svg>




        </div>
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Browse through examples of live Notion websites, built with WonderSites.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          className="w-full sm:w-auto px-6 py-3 text-lg sm:text-xl bg-orange-300 text-black rounded-lg hover:bg-orange-700 transition-colors duration-300 text-center flex items-center justify-center"
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
        className="mt-8 mb-8 max-w-5xl m-auto"
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
              {/* Popular tags first (2+ templates) */}
              <div className="p-2 bg-slate-50 border-b">
                <p className="text-xs text-slate-500 font-medium">Popular Tags</p>
              </div>
              {popularTags.map(({ tag, count }) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`w-full px-4 py-2 text-left flex items-center justify-between ${selectedTags.includes(tag) ? 'bg-orange-700 text-white' : 'hover:bg-slate-100'}`}
                >
                  <span className="flex items-center">
                    <Tag className="mr-2 h-4 w-4" />
                    {tag}
                  </span>

                </button>
              ))}

              {/* Show less common tags when expanded */}
              {showAllTags && lesserTags.length > 0 && (
                <>
                  <div className="p-2 bg-slate-50 border-b border-t">
                    <p className="text-xs text-slate-500 font-medium">Other Tags</p>
                  </div>
                  {lesserTags.map(({ tag, count }) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`w-full px-4 py-2 text-left flex items-center justify-between ${selectedTags.includes(tag) ? 'bg-orange-700 text-white' : 'hover:bg-slate-100'}`}
                    >
                      <span className="flex items-center">
                        <Tag className="mr-2 h-4 w-4" />
                        {tag}
                      </span>
                      <span className={`text-xs ${selectedTags.includes(tag) ? 'text-white' : 'text-slate-400'}`}>
                        {count} template
                      </span>
                    </button>
                  ))}
                </>
              )}

              {/* Show/hide toggle */}
              {lesserTags.length > 0 && (
                <button
                  onClick={() => setShowAllTags(!showAllTags)}
                  className="w-full px-4 py-2 text-left text-orange-600 border-t"
                >
                  {showAllTags ? "Show less" : `Show all (${lesserTags.length} more)`}
                </button>
              )}

              {/* Clear button */}
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
          <div className="flex flex-wrap justify-center gap-2 mb-2 max-w-3xl">
            {/* Popular tags (2+ templates) */}
            {popularTags.map(({ tag, count }) => (
              <motion.button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${selectedTags.includes(tag)
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

            {/* Show less common tags when expanded */}
            {showAllTags && lesserTags.map(({ tag, count }) => (
              <motion.button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${selectedTags.includes(tag)
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

          {/* Show/hide toggle */}
          {lesserTags.length > 0 && (
            <button
              onClick={toggleShowAllTags}
              className="text-sm text-orange-600 hover:text-orange-800 font-medium transition-colors duration-200 mt-2"
            >
              {showAllTags ? "Show less" : `Show all (${lesserTags.length} more)`}
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

                      <div className='flex justify-between'>
                        <Link href={"/showcase/" + template.id} className="group flex gap-2 items-center">
                          <span className="text-start font-bold group-hover:text-orange-600 transition-colors duration-300">
                            {template.product.name}
                          </span>
                          <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-600 transition-colors duration-300" />
                        </Link>

                        <span className="inline-block bg-slate-100 border-slate-200 border-dashed border-2 px-3 py-1 rounded-full text-sm">
                          {template.product.type}
                        </span>
                      </div>

                      <p className="text-sm text-slate-400 mt-2 mb-3">
                        {truncateText(template.product.description, 76)}
                      </p>

                      {/* Type and tags */}
                      <div className="flex flex-wrap gap-2">


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
