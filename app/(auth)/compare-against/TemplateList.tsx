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
      <motion.h2
        className="text-center mb-4 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className=" block font-normal text-orange-600 text-2xl sm:text-3xl lg:text-4xl">
          Beautiful websites
        </span>
        <div className="flex flex-col sm:flex-row items-center justify-center m-auto">
          <span className="mr-2 font-normal text-xl sm:text-2xl lg:text-3xl">made with</span>
          <svg width="300" height="100" viewBox="0 0 1087 195" className="h-16 w-auto px-2 py-0" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M419.444 85.4519C429.004 65.7472 441.527 51.1583 453.394 43.1809C465.726 34.8909 474.381 35.3753 479.007 38.2588C483.634 41.1425 488.63 49.1664 489.058 65.409C489.471 81.0394 485.309 100.839 475.748 120.544C466.188 140.248 453.665 154.837 441.799 162.814C429.467 171.104 420.813 170.62 416.186 167.737C411.56 164.853 406.563 156.829 406.134 140.586C405.722 124.956 409.884 105.156 419.444 85.4519Z" stroke="#0F0F0F" stroke-width="29"/>
<path d="M889.312 38.1133C889.312 30.9336 895.133 25.1133 902.312 25.1133H941.914C952.39 25.1133 961.455 26.8908 969.108 30.4458C976.824 34.0008 982.752 39.2622 986.893 46.23C991.033 53.1978 993.103 61.801 993.103 72.0394C993.103 80.5714 991.88 87.8236 989.433 93.796C986.987 99.7684 983.537 104.71 979.083 108.62C974.941 112.309 970.129 115.333 964.648 117.693C963.987 117.978 963.343 118.303 962.731 118.682L956.824 122.346C954.766 123.622 952.393 124.298 949.972 124.298H921.795C914.65 124.298 908.845 118.533 908.795 111.389L908.788 110.406C908.738 103.191 914.573 97.3155 921.788 97.3155H942.008C946.587 97.3155 950.383 96.3912 953.394 94.5426C956.405 92.694 958.663 90.0988 960.169 86.7571C961.737 83.3443 962.521 79.3627 962.521 74.8123C962.521 70.1197 961.737 66.067 960.169 62.6542C958.6 59.2414 956.279 56.6462 953.206 54.8687C950.194 53.0201 946.43 52.0958 941.914 52.0958H932.989C925.809 52.0958 919.989 57.9161 919.989 65.0958V167.396C919.989 174.576 914.168 180.396 906.989 180.396H902.313C895.133 180.396 889.312 174.576 889.312 167.396V38.1133ZM973.593 180.396C968.461 180.396 963.81 177.377 961.72 172.691L942.514 129.622C938.688 121.041 944.949 111.359 954.345 111.328L958.417 111.314C963.498 111.297 968.124 114.243 970.258 118.854L997.875 178.534C997.955 178.707 997.996 178.895 997.996 179.085V179.085C997.996 179.809 997.409 180.396 996.685 180.396H973.593Z" fill="#0F0F0F"/>
<path d="M860.236 153.52C867.416 153.52 873.236 159.34 873.236 166.52V167.396C873.236 174.576 867.416 180.396 860.236 180.396H800.309V166.52C800.309 159.34 806.13 153.52 813.309 153.52H860.236ZM810.754 25.1133V167.396C810.754 174.576 804.934 180.396 797.754 180.396H793.078C785.898 180.396 780.078 174.576 780.078 167.396V38.1133C780.078 30.9336 785.898 25.1133 793.078 25.1133H810.754ZM850.826 87.6103C858.006 87.6103 863.826 93.4419 863.826 100.622V100.622C863.826 107.801 858.006 113.633 850.826 113.633H813.309C806.13 113.633 800.309 107.801 800.309 100.622V100.622C800.309 93.4419 806.13 87.6103 813.309 87.6103H850.826ZM860.33 25.1133C867.51 25.1133 873.33 30.9336 873.33 38.1133V39.0958C873.33 46.2755 867.51 52.0958 860.33 52.0958H813.309C806.13 52.0958 800.309 46.2755 800.309 39.0958V38.1133C800.309 30.9336 806.13 25.1133 813.309 25.1133H860.33Z" fill="#0F0F0F"/>
<path d="M696.7 180.396H679.68C672.464 180.396 666.629 174.52 666.68 167.305L666.686 166.429C666.736 159.285 672.542 153.52 679.686 153.52H696.7C703.538 153.52 709.309 151.743 714.014 148.188C718.719 144.562 722.295 139.229 724.741 132.19C727.188 125.08 728.411 116.441 728.411 106.274V99.1285C728.411 91.4497 727.721 84.6952 726.341 78.865C724.961 72.9637 722.922 68.0222 720.224 64.0406C717.527 60.059 714.171 57.0728 710.156 55.082C706.204 53.0912 701.656 52.0958 696.512 52.0958H679.024C671.844 52.0958 666.024 46.2755 666.024 39.0958V38.1133C666.024 30.9336 671.844 25.1133 679.024 25.1133H696.512C705.796 25.1133 714.265 26.8908 721.918 30.4458C729.634 34.0008 736.284 39.0845 741.867 45.6968C747.513 52.3091 751.873 60.1301 754.947 69.1598C758.021 78.1895 759.558 88.2502 759.558 99.3418V106.274C759.558 117.295 758.021 127.355 754.947 136.456C751.873 145.486 747.513 153.307 741.867 159.919C736.284 166.46 729.666 171.508 722.012 175.063C714.359 178.618 705.921 180.396 696.7 180.396ZM670.996 25.1133C678.176 25.1133 683.996 30.9336 683.996 38.1133V167.396C683.996 174.576 678.176 180.396 670.996 180.396H666.32C659.141 180.396 653.32 174.576 653.32 167.396V38.1133C653.32 30.9336 659.141 25.1133 666.32 25.1133H670.996Z" fill="#0F0F0F"/>
<path d="M619.872 25.1133C627.052 25.1133 632.872 30.9336 632.872 38.1133V167.396C632.872 174.576 627.052 180.396 619.872 180.396H610.213C605.347 180.396 600.889 177.679 598.658 173.354L563.757 105.676C560.393 99.1531 550.536 101.545 550.536 108.885V167.396C550.536 174.576 544.715 180.396 537.536 180.396H532.859C525.68 180.396 519.859 174.576 519.859 167.396V38.1133C519.859 30.9336 525.68 25.1133 532.859 25.1133H542.619C547.482 25.1133 551.937 27.8266 554.169 32.1463L589.165 99.8843C592.532 106.402 602.384 104.008 602.384 96.6713V38.1133C602.384 30.9336 608.204 25.1133 615.384 25.1133H619.872Z" fill="#0F0F0F"/>
<path d="M262.366 163.241C262.142 161.749 262.179 160.229 262.476 158.749L287.644 33.4362C288.616 28.5959 292.868 25.1133 297.805 25.1133V25.1133C302.146 25.1133 306.027 27.8193 307.529 31.8929L309.948 38.4555C310.792 40.748 310.974 43.2323 310.472 45.6234L284.333 170.068C283.069 176.087 277.761 180.396 271.611 180.396H264.944L262.366 163.241ZM240.39 25.1133C246.741 25.1133 252.162 29.702 253.212 35.9657L273.854 159.203C274.122 160.804 274.088 162.441 273.754 164.029L270.308 180.396H261.482C255.245 180.396 249.887 175.967 248.714 169.841L223.958 40.5583C222.423 32.5437 228.565 25.1133 236.726 25.1133H240.39ZM331.161 163.171C330.869 161.655 330.849 160.099 331.102 158.576L351.495 35.9801C352.538 29.7098 357.962 25.1133 364.319 25.1133H367.877C376.037 25.1133 382.18 32.5437 380.645 40.5582L355.69 170.877C354.632 176.401 349.8 180.396 344.175 180.396V180.396H339.329V180.396C336.516 180.396 334.098 178.4 333.565 175.638L331.161 163.171ZM306.734 25.1133C311.71 25.1133 315.997 28.6191 316.984 33.4959L342.47 159.351C342.788 160.925 342.813 162.544 342.541 164.127L339.753 180.396H333.146C327.012 180.396 321.712 176.107 320.432 170.108L293.889 45.6517C293.361 43.1761 293.567 40.6002 294.482 38.2401L296.983 31.7905C298.544 27.7657 302.417 25.1133 306.734 25.1133V25.1133Z" fill="#0F0F0F"/>
<g filter="url(#filter0_f_5660_57)">
<path d="M50.1333 99.2344L2 102.32L46.222 104.792C49.1708 104.956 52.1033 105.341 54.9949 105.943L59.2067 106.819C62.2001 107.441 65.0837 108.508 67.7621 109.982C73.1722 112.961 77.5582 117.503 80.3469 123.013L80.6269 123.566C81.9376 126.156 82.8977 128.909 83.4818 131.753L84.9034 138.672C85.788 142.978 86.3395 147.346 86.5527 151.737L88.4108 190L91.3154 156.016C91.3154 148.791 92.1714 141.592 93.8657 134.569L95.7019 126.957C96.165 125.038 96.8252 123.171 97.6721 121.388L98.2582 120.153C98.9516 118.693 99.835 117.331 100.885 116.102C101.764 115.073 102.754 114.146 103.836 113.335L104.528 112.817C107.777 110.384 111.548 108.741 115.542 108.017L131.979 105.039L177 102.32L143.598 101.641L122.055 98.5384C117.581 97.8941 113.279 96.3718 109.396 94.0588C102.854 90.1621 97.7953 84.1983 95.018 77.1083L93.8572 74.1451C92.1733 69.8465 91.1833 65.3077 90.9241 60.6983L88.4108 16L83.9095 69.5698C83.5264 74.1282 82.1396 78.5455 79.8484 82.5048C76.0112 89.1356 69.8553 94.1113 62.5672 96.4727L59.6555 97.4161C56.5694 98.4161 53.3706 99.0269 50.1333 99.2344Z" fill="#FF7028"/>
</g>
<defs>
<filter id="filter0_f_5660_57" x="0" y="14" width="179" height="178" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_5660_57"/>
</filter>
</defs>
          </svg>




        </div>
      </motion.h2>

      <motion.p
        className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Browse through examples of live Notion websites, built with Wonder  Sites.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          className="w-full sm:w-auto px-6 py-3 text-lg sm:text-xl bg-orange-300 text-black rounded-lg hover:bg-orange-400 transition-colors duration-300 text-center flex items-center justify-center"
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
              <div className="p-2 bg-gray-50 border-b">
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
                  <div className="p-2 bg-gray-50 border-b border-t">
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
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${selectedTags.includes(tag)
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
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${selectedTags.includes(tag)
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

                        <span className="inline-block bg-slate-100 border-slate-200 border-dashed border-2 px-3 py-1 rounded-md text-sm">
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
                            className={`inline-block px-3 py-1 rounded-md text-sm bg-slate-100 text-slate-800`}
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
