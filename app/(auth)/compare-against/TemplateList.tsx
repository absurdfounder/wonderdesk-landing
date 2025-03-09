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
            <path d="M21 19.2H87.9C107.3 19.2 122.6 23.9 133.8 33.3C145.2 42.5 150.9 55.1 150.9 71.1C150.9 89.3 143 103.3 127.2 113.1C148.2 121.5 158.7 136.3 158.7 157.5C158.7 169.5 155.7 180.2 149.7 189.6C143.7 198.8 135.3 206 124.5 211.2C113.9 216.4 101.9 219 88.5 219H21V19.2ZM77.7 100.5C87.7 100.5 95.4 98.2 100.8 93.6C106.4 89 109.2 82.6 109.2 74.4C109.2 59.6 100 52.2 81.6 52.2H62.7V100.5H77.7ZM81.9 185.7C92.7 185.7 101.1 183.2 107.1 178.2C113.3 173.2 116.4 166.5 116.4 158.1C116.4 150.5 113.8 144.6 108.6 140.4C103.4 136.2 95.9 134.1 86.1 134.1H62.7V185.7H81.9ZM442.777 19.2C448.777 19 459.977 18.9 476.377 18.9C492.977 18.9 504.277 19 510.277 19.2C533.077 20 550.077 25.6 561.277 36C572.477 46.2 578.077 60 578.077 77.4C578.077 92.2 574.277 104.8 566.677 115.2C559.277 125.4 548.877 132.1 535.477 135.3C539.677 138.7 543.977 143.4 548.377 149.4C552.777 155.2 558.877 164.3 566.677 176.7C574.877 189.7 583.177 203.8 591.577 219H541.177L507.277 156C503.677 149.4 500.377 145.3 497.377 143.7C494.577 141.9 490.277 141 484.477 141V219H442.777V19.2ZM503.077 107.7C513.277 107.7 521.277 105.1 527.077 99.9C533.077 94.7 536.077 87.7 536.077 78.9C536.077 70.9 533.477 64.8 528.277 60.6C523.077 56.4 515.477 54.3 505.477 54.3H484.477V107.7H503.077ZM632.248 19.2H675.748V219H632.248V19.2ZM738.082 19.2H789.082L871.882 159.3V19.2H911.782V219H861.382L777.982 78V219H738.082V19.2ZM1071.61 223.5C1049.41 223.5 1030.21 219.6 1014.01 211.8C998.007 203.8 985.707 192.4 977.107 177.6C968.507 162.8 964.207 145.2 964.207 124.8C964.207 103.4 968.707 84.5 977.707 68.1C986.907 51.7 999.707 39 1016.11 30C1032.71 21 1051.81 16.5 1073.41 16.5C1085.81 16.5 1097.51 17.9 1108.51 20.7C1119.71 23.5 1129.61 27.5 1138.21 32.7L1127.71 68.7C1119.91 63.9 1111.21 60.2 1101.61 57.6C1092.01 54.8 1082.61 53.4 1073.41 53.4C1060.21 53.4 1048.51 56.3 1038.31 62.1C1028.31 67.7 1020.51 75.7 1014.91 86.1C1009.51 96.3 1006.81 108.2 1006.81 121.8C1006.81 141.8 1012.81 157.6 1024.81 169.2C1037.01 180.6 1053.61 186.3 1074.61 186.3C1083.01 186.3 1090.81 185.7 1098.01 184.5V143.1H1072.81V108H1137.91V211.8C1117.31 219.6 1095.21 223.5 1071.61 223.5Z" fill="#181818" />
            <path d="M1293.7 222.6C1279.3 222.6 1266.5 219.8 1255.3 214.2C1244.1 208.6 1234.6 201.5 1226.8 192.9L1235.8 183.3C1243 191.3 1251.6 197.8 1261.6 202.8C1271.6 207.6 1282.3 210 1293.7 210C1308.9 210 1320.9 206.3 1329.7 198.9C1338.5 191.5 1342.9 182 1342.9 170.4C1342.9 162.2 1341.3 155.6 1338.1 150.6C1334.9 145.6 1330.6 141.5 1325.2 138.3C1320 134.9 1314.1 131.8 1307.5 129L1277.5 115.5C1271.9 112.9 1265.9 109.7 1259.5 105.9C1253.3 101.9 1248 96.8 1243.6 90.6C1239.4 84.2 1237.3 76.1 1237.3 66.3C1237.3 56.7 1239.8 48.3 1244.8 41.1C1249.8 33.7 1256.6 28 1265.2 24C1274 19.8 1283.9 17.7 1294.9 17.7C1306.7 17.7 1317.3 20.1 1326.7 24.9C1336.1 29.5 1343.8 35 1349.8 41.4L1342 50.4C1336.2 44.4 1329.4 39.6 1321.6 36C1313.8 32.2 1304.9 30.3 1294.9 30.3C1281.9 30.3 1271.3 33.5 1263.1 39.9C1255.1 46.3 1251.1 54.9 1251.1 65.7C1251.1 73.3 1252.9 79.5 1256.5 84.3C1260.3 89.1 1264.8 93 1270 96C1275.4 99 1280.5 101.6 1285.3 103.8L1315.3 117C1322.7 120.2 1329.5 124 1335.7 128.4C1342.1 132.6 1347.2 138 1351 144.6C1355 151 1357 159.3 1357 169.5C1357 179.5 1354.4 188.6 1349.2 196.8C1344 204.8 1336.6 211.1 1327 215.7C1317.6 220.3 1306.5 222.6 1293.7 222.6ZM1392.55 219V21.3H1406.35V219H1392.55ZM1501.22 219V33.3H1438.22V21.3H1578.02V33.3H1515.02V219H1501.22ZM1609.94 219V21.3H1718.24V33.3H1623.74V108H1702.94V120H1623.74V207H1721.24V219H1609.94ZM1809.93 222.6C1795.53 222.6 1782.73 219.8 1771.53 214.2C1760.33 208.6 1750.83 201.5 1743.03 192.9L1752.03 183.3C1759.23 191.3 1767.83 197.8 1777.83 202.8C1787.83 207.6 1798.53 210 1809.93 210C1825.13 210 1837.13 206.3 1845.93 198.9C1854.73 191.5 1859.13 182 1859.13 170.4C1859.13 162.2 1857.53 155.6 1854.33 150.6C1851.13 145.6 1846.83 141.5 1841.43 138.3C1836.23 134.9 1830.33 131.8 1823.73 129L1793.73 115.5C1788.13 112.9 1782.13 109.7 1775.73 105.9C1769.53 101.9 1764.23 96.8 1759.83 90.6C1755.63 84.2 1753.53 76.1 1753.53 66.3C1753.53 56.7 1756.03 48.3 1761.03 41.1C1766.03 33.7 1772.83 28 1781.43 24C1790.23 19.8 1800.13 17.7 1811.13 17.7C1822.93 17.7 1833.53 20.1 1842.93 24.9C1852.33 29.5 1860.03 35 1866.03 41.4L1858.23 50.4C1852.43 44.4 1845.63 39.6 1837.83 36C1830.03 32.2 1821.13 30.3 1811.13 30.3C1798.13 30.3 1787.53 33.5 1779.33 39.9C1771.33 46.3 1767.33 54.9 1767.33 65.7C1767.33 73.3 1769.13 79.5 1772.73 84.3C1776.53 89.1 1781.03 93 1786.23 96C1791.63 99 1796.73 101.6 1801.53 103.8L1831.53 117C1838.93 120.2 1845.73 124 1851.93 128.4C1858.33 132.6 1863.43 138 1867.23 144.6C1871.23 151 1873.23 159.3 1873.23 169.5C1873.23 179.5 1870.63 188.6 1865.43 196.8C1860.23 204.8 1852.83211.1 1843.23 215.7C1833.83 220.3 1822.73 222.6 1809.93 222.6Z" fill="#181818" />
            <g clipPath="url(#clip0_1948_2160)">
              <circle cx="285" cy="128" r="200" fill="url(#paint0_linear_1948_2160)" />
              <path d="M135.557 260.801C135.557 260.801 138.262 248.405 147.492 240.767C147.492 240.767 196.803 205.533 204.888 194.212C204.888 194.212 217.996 183.559 219.928 157.66L221.917 125.85V102.649C221.917 102.649 223.534 77.4619 234.867 65.0807C234.867 65.0807 227.269 39.2119 242.294 36.4235C242.294 36.4235 249.349 35.0141 256.361 47.7136C256.361 47.7136 285.753 28.831 331.959 45.7889L333.92 46.5921C333.92 46.5921 342.663 31.9074 352.065 38.2875C361.466 44.6675 354.912 65.0958 354.912 65.0958C354.912 65.0958 369.208 78.4621 367.834 104.225C367.834 104.225 366.99 145.445 370.882 161.024C370.882 161.024 374.145 194.591 407.057 208.003C407.057 208.003 450.172 226.067 501.416 215.08C501.416 215.08 532.067 211.61 540.968 232.523C540.968 232.523 553.818 263.332 508.499 285.412C508.499 285.412 465.284 305.886 401.018 290.08C401.018 290.08 416.759 338.923 413.325 373.445C409.89 407.967 406.342 438.064 392.232 465.372L357.445 540.614C357.445 540.614 373.057 539.205 373.658 555.269H216.579C216.579 555.269 214.576 539.084 232.792 540.614C232.792 540.614 197.261 465.372 189.792 444.474L135.543 260.801H135.557Z" fill="white" />
              <path d="M215.693 458.674C275.751 430.82 298.632 382.841 304.184 309.872C305.129 297.415 306.116 274.986 306.102 258.346C306.102 253.664 301.451 250.527 297.502 252.618C288.744 257.255 278.971 259.847 268.653 259.847C249.421 259.847 230.546 250.845 217.896 236.433C215.678 233.917 211.929 233.917 209.783 236.494C197.762 250.89 181.95 259.862 162.746 259.862C152.601 259.862 141.453 257.831 132.009 253.603C127.458 251.557 122.436 255.164 122.45 260.407C122.479 276.759 123.437 297.536 124.067 309.902C127.816 383.053 152.014 425.925 215.707 458.704L215.693 458.674Z" fill="#E6E7EB" />
              <path d="M237.63 184.271L236.17 197.394" stroke="#D5D6D9" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M268.739 206.245V223.93" stroke="#D5D6D9" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M239.246 232.538C238.245 236.66 237.73 240.903 237.715 245.147" stroke="#D5D6D9" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M332.661 226.462V236.57" stroke="#D5D6D9" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M311.196 190.591V202.957" stroke="#D5D6D9" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M360.307 198.242L364.371 214.261" stroke="#D5D6D9" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M398.787 225.734L408.804 229.705" stroke="#D5D6D9" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M219.442 456.221C240.735 449.296 297.874 414.061 304.184 309.889C304.943 297.296 305.129 274.609 304.785 257.924C304.384 237.92 261.212 285.96 218.597 236.784C209.181 225.918 202.599 259.849 161.301 259.849C123.723 259.849 119.702 225.13 124.053 309.889C127.759 382.085 149.982 424.776 211.757 457.388" stroke="#232323" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M256.447 46.7899C246.602 29.5744 227.341 32.6962 234.854 65.1118C213.031 93.4507 227.298 116.455 218.841 164.571C212.502 206.458 161.53 222.022 141.067 248.027" stroke="#232323" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M336.41 42.3646C346.642 30.438 361.696 35.833 354.913 65.1116C376.12 92.6473 362.697 107.468 371.24 163.389C374.088 182.711 386.151 199.29 403.323 206.503C428.78 217.218 459.532 220.461 487.15 217.293C494.977 216.399 503.148 215.338 511.018 215.657" stroke="#232323" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M308.775 133.118C308.775 133.118 304.61 133.118 301.04 133.118C297.47 133.118 295.09 127.118 295.09 127.118C295.09 127.118 292.71 132.518 290.33 133.118C287.95 133.718 282 133.118 282 133.118" stroke="#232323" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M288.544 82.8589C269.597 88.4207 286.14 106.015 295.441 106.015C304.742 106.015 321.37 88.451 302.338 82.8589C297.831 81.5405 293.051 81.5405 288.544 82.8589Z" fill="#232323" />
              <path d="M338.986 48.9399C326.279 42.6205 311.354 38.9834 295.398 38.9834C279.443 38.9834 264.532 42.6205 251.811 48.9399" stroke="#232323" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M310.509 74.5384C300.664 70.5679 290.203 70.5679 280.358 74.5384" stroke="#D5D6D9" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M257.792 89.3258C260.526 89.3258 262.743 86.9782 262.743 84.0823C262.743 81.1864 260.526 78.8389 257.792 78.8389C255.057 78.8389 252.84 81.1864 252.84 84.0823C252.84 86.9782 255.057 89.3258 257.792 89.3258Z" fill="#232323" />
              <path d="M333.147 89.3258C335.881 89.3258 338.098 86.9782 338.098 84.0823C338.098 81.1864 335.881 78.8389 333.147 78.8389C330.412 78.8389 328.196 81.1864 328.196 84.0823C328.196 86.9782 330.412 89.3258 333.147 89.3258Z" fill="#232323" />
              <path d="M295 104V129" stroke="black" strokeWidth="3" />
            </g>
            <rect x="179" y="3" width="232" height="234" rx="116" stroke="black" strokeWidth="6" />
            <defs>
              <linearGradient id="paint0_linear_1948_2160" x1="222" y1="55" x2="311" y2="184" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFBA73" />
                <stop offset="0.630991" stopColor="#F0993D" />
              </linearGradient>
              <clipPath id="clip0_1948_2160">
                <rect x="176" width="238" height="240" rx="119" fill="white" />
              </clipPath>
            </defs>
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
              {/* Popular tags first (2+ templates) */}
              <div className="p-2 bg-slate-50 border-b">
                <p className="text-xs text-slate-500 font-medium">Popular Tags</p>
              </div>
              {popularTags.map(({ tag, count }) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`w-full px-4 py-2 text-left flex items-center justify-between ${selectedTags.includes(tag) ? 'bg-orange-600 text-white' : 'hover:bg-slate-100'}`}
                >
                  <span className="flex items-center">
                    <Tag className="mr-2 h-4 w-4" />
                    {tag}
                  </span>
                  <span className={`text-xs ${selectedTags.includes(tag) ? 'text-white' : 'text-slate-400'}`}>
                    {count} templates
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
                      className={`w-full px-4 py-2 text-left flex items-center justify-between ${selectedTags.includes(tag) ? 'bg-orange-600 text-white' : 'hover:bg-slate-100'}`}
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
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {/* Popular tags (2+ templates) */}
            {popularTags.map(({ tag, count }) => (
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
                {tag} ({count})
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
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTags.includes(tag)
                    ? "bg-orange-500 text-white"
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag} ({count})
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