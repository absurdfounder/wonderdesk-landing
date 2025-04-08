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
          <svg width="1186" height="240" viewBox="0 0 2686 340" className="h-16 w-auto px-2 py-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1766.53 247.786C1766.53 240.19 1765.25 233.412 1762.68 227.452C1760.1 221.375 1755.84 215.999 1749.88 211.325C1744.04 206.533 1736.32 202.093 1726.74 198.002C1717.16 193.912 1705.35 189.939 1691.33 186.083C1678.48 182.577 1666.85 178.779 1656.45 174.688C1646.16 170.481 1637.34 165.69 1629.98 160.314C1622.73 154.939 1617.18 148.57 1613.33 141.208C1609.47 133.728 1607.54 124.905 1607.54 114.738C1607.54 104.922 1609.64 96.0988 1613.85 88.269C1618.06 80.4393 1623.96 73.7782 1631.56 68.2856C1639.27 62.6763 1648.27 58.4108 1658.55 55.4893C1668.95 52.4508 1680.29 50.9316 1692.56 50.9316C1709.74 50.9316 1724.75 54.2038 1737.61 60.748C1750.46 67.1755 1760.51 76.1154 1767.76 87.5679C1775 98.9035 1778.63 111.934 1778.63 126.658H1764.43C1764.43 114.621 1761.45 103.87 1755.49 94.4043C1749.65 84.9385 1741.35 77.5177 1730.6 72.1421C1719.96 66.6496 1707.28 63.9033 1692.56 63.9033C1677.37 63.9033 1664.45 66.2406 1653.82 70.915C1643.3 75.5895 1635.3 81.7832 1629.8 89.4961C1624.43 97.0921 1621.74 105.389 1621.74 114.388C1621.74 120.815 1622.91 126.833 1625.25 132.443C1627.7 138.052 1631.67 143.194 1637.17 147.869C1642.77 152.543 1650.31 156.984 1659.78 161.191C1669.36 165.281 1681.28 169.254 1695.54 173.111C1708.63 176.5 1720.37 180.356 1730.77 184.68C1741.29 188.887 1750.29 193.854 1757.77 199.58C1765.25 205.306 1770.97 212.084 1774.95 219.914C1778.92 227.744 1780.91 236.917 1780.91 247.435C1780.91 257.836 1778.69 267.126 1774.24 275.307C1769.8 283.37 1763.61 290.265 1755.66 295.991C1747.83 301.601 1738.6 305.866 1727.97 308.788C1717.45 311.709 1706.11 313.17 1693.96 313.17C1682.86 313.17 1671.7 311.826 1660.48 309.138C1649.38 306.45 1639.21 302.126 1629.98 296.167C1620.75 290.207 1613.33 282.377 1607.72 272.677C1602.11 262.978 1599.3 251.175 1599.3 237.268H1613.5C1613.5 249.188 1615.96 259.238 1620.86 267.418C1625.77 275.482 1632.2 281.909 1640.15 286.701C1648.09 291.492 1656.74 294.939 1666.09 297.043C1675.55 299.146 1684.85 300.198 1693.96 300.198C1708.22 300.198 1720.78 298.036 1731.65 293.712C1742.63 289.272 1751.16 283.136 1757.24 275.307C1763.43 267.36 1766.53 258.186 1766.53 247.786ZM1849.8 54.4375V309.664H1835.6V54.4375H1849.8ZM1998.79 54.4375V309.664H1984.77V54.4375H1998.79ZM2089.6 54.4375V67.4092H1893.97V54.4375H2089.6ZM2289.78 296.692V309.664H2140.96V296.692H2289.78ZM2147.27 54.4375V309.664H2133.07V54.4375H2147.27ZM2271.9 171.708V184.855H2140.96V171.708H2271.9ZM2289.43 54.4375V67.4092H2140.96V54.4375H2289.43ZM2486.99 247.786C2486.99 240.19 2485.7 233.412 2483.13 227.452C2480.56 221.375 2476.29 215.999 2470.33 211.325C2464.49 206.533 2456.78 202.093 2447.19 198.002C2437.61 193.912 2425.81 189.939 2411.79 186.083C2398.93 182.577 2387.3 178.779 2376.9 174.688C2366.62 170.481 2357.79 165.69 2350.43 160.314C2343.19 154.939 2337.64 148.57 2333.78 141.208C2329.92 133.728 2328 124.905 2328 114.738C2328 104.922 2330.1 96.0988 2334.31 88.269C2338.51 80.4393 2344.41 73.7782 2352.01 68.2856C2359.72 62.6763 2368.72 58.4108 2379.01 55.4893C2389.41 52.4508 2400.74 50.9316 2413.01 50.9316C2430.19 50.9316 2445.21 54.2038 2458.06 60.748C2470.92 67.1755 2480.97 76.1154 2488.21 87.5679C2495.46 98.9035 2499.08 111.934 2499.08 126.658H2484.88C2484.88 114.621 2481.9 103.87 2475.94 94.4043C2470.1 84.9385 2461.8 77.5177 2451.05 72.1421C2440.42 66.6496 2427.74 63.9033 2413.01 63.9033C2397.82 63.9033 2384.91 66.2406 2374.27 70.915C2363.75 75.5895 2355.75 81.7832 2350.26 89.4961C2344.88 97.0921 2342.19 105.389 2342.19 114.388C2342.19 120.815 2343.36 126.833 2345.7 132.443C2348.15 138.052 2352.13 143.194 2357.62 147.869C2363.23 152.543 2370.77 156.984 2380.23 161.191C2389.82 165.281 2401.74 169.254 2415.99 173.111C2429.08 176.5 2440.83 180.356 2451.23 184.68C2461.74 188.887 2470.74 193.854 2478.22 199.58C2485.7 205.306 2491.43 212.084 2495.4 219.914C2499.37 227.744 2501.36 236.917 2501.36 247.435C2501.36 257.836 2499.14 267.126 2494.7 275.307C2490.26 283.37 2484.06 290.265 2476.12 295.991C2468.29 301.601 2459.06 305.866 2448.42 308.788C2437.9 311.709 2426.57 313.17 2414.41 313.17C2403.31 313.17 2392.15 311.826 2380.93 309.138C2369.83 306.45 2359.66 302.126 2350.43 296.167C2341.2 290.207 2333.78 282.377 2328.17 272.677C2322.56 262.978 2319.76 251.175 2319.76 237.268H2333.96C2333.96 249.188 2336.41 259.238 2341.32 267.418C2346.23 275.482 2352.65 281.909 2360.6 286.701C2368.55 291.492 2377.19 294.939 2386.54 297.043C2396.01 299.146 2405.3 300.198 2414.41 300.198C2428.67 300.198 2441.23 298.036 2452.1 293.712C2463.09 289.272 2471.62 283.136 2477.7 275.307C2483.89 267.36 2486.99 258.186 2486.99 247.786Z" fill="#838383" />
            <path d="M500.954 65.7496C511.726 71.6729 521.26 86.7473 522.079 114.132C522.879 140.856 514.823 174.605 496.369 208.164C477.915 241.723 453.73 266.602 430.735 280.242C407.171 294.218 389.335 294.241 378.563 288.317C367.792 282.394 358.257 267.32 357.438 239.935C356.639 213.211 364.694 179.462 383.148 145.903C401.602 112.344 425.787 87.4649 448.783 73.8254C472.346 59.8491 490.183 59.8263 500.954 65.7496Z" stroke="black" stroke-width="50" />
            <path d="M1297 56.6641C1297 49.4844 1302.82 43.6641 1310 43.6641H1399.08C1419.41 43.6641 1437.01 46.7077 1451.86 52.7949C1466.83 58.8822 1478.34 67.8913 1486.37 79.8223C1494.41 91.7533 1498.43 106.484 1498.43 124.016C1498.43 138.625 1496.05 151.043 1491.3 161.27C1486.56 171.496 1479.86 179.957 1471.22 186.653C1462.93 193.165 1453.26 198.468 1442.21 202.562C1441.58 202.794 1440.97 203.067 1440.39 203.386L1424.83 211.902C1422.91 212.949 1420.77 213.498 1418.59 213.498H1347.88C1340.74 213.498 1334.94 207.74 1334.88 200.601L1334.72 180.399C1334.67 173.179 1340.5 167.296 1347.72 167.296H1399.27C1408.15 167.296 1415.52 165.713 1421.36 162.548C1427.21 159.382 1431.59 154.939 1434.51 149.217C1437.55 143.373 1439.08 136.555 1439.08 128.764C1439.08 120.729 1437.55 113.789 1434.51 107.945C1431.47 102.102 1426.96 97.6579 1421 94.6143C1415.15 91.4489 1407.85 89.8662 1399.08 89.8662H1369.53C1362.35 89.8662 1356.53 95.6865 1356.53 102.866V296.555C1356.53 303.734 1350.71 309.555 1343.53 309.555H1310C1302.82 309.555 1297 303.734 1297 296.555V56.6641ZM1452.19 309.555C1447.28 309.555 1442.79 306.795 1440.58 302.419L1393.98 210.204C1389.61 201.572 1395.87 191.368 1405.54 191.34L1439.41 191.242C1444.25 191.228 1448.71 193.911 1450.96 198.203L1507.67 306.336C1507.84 306.651 1507.92 307.001 1507.92 307.357V307.357C1507.92 308.571 1506.94 309.555 1505.72 309.555H1452.19Z" fill="black" />
            <path d="M1252.79 263.535C1259.97 263.535 1265.79 269.355 1265.79 276.535V296.555C1265.79 303.734 1259.97 309.555 1252.79 309.555H1137.26C1130.08 309.555 1124.26 303.734 1124.26 296.555V276.535C1124.26 269.355 1130.08 263.535 1137.26 263.535H1252.79ZM1131.53 43.6641C1138.71 43.6641 1144.53 49.4844 1144.53 56.6641V296.555C1144.53 303.734 1138.71 309.555 1131.53 309.555H1098C1090.82 309.555 1085 303.734 1085 296.555V56.6641C1085 49.4844 1090.82 43.6641 1098 43.6641H1131.53ZM1234.53 150.678C1241.71 150.678 1247.53 156.498 1247.53 163.678V182.236C1247.53 189.416 1241.71 195.236 1234.53 195.236H1137.26C1130.08 195.236 1124.26 189.416 1124.26 182.236V163.678C1124.26 156.498 1130.08 150.678 1137.26 150.678H1234.53ZM1252.97 43.6641C1260.15 43.6641 1265.97 49.4844 1265.97 56.6641V76.8662C1265.97 84.0459 1260.15 89.8662 1252.97 89.8662H1137.26C1130.08 89.8662 1124.26 84.0459 1124.26 76.8662V56.6641C1124.26 49.4844 1130.08 43.6641 1137.26 43.6641H1252.97Z" fill="black" />
            <path d="M923.187 309.555H877.853C870.633 309.555 864.796 303.671 864.853 296.452L865.012 276.432C865.069 269.293 870.872 263.535 878.011 263.535H923.187C936.457 263.535 947.657 260.492 956.788 254.404C965.919 248.195 972.858 239.064 977.606 227.012C982.354 214.837 984.729 200.045 984.729 182.636V170.4C984.729 157.252 983.389 145.686 980.711 135.703C978.033 125.598 974.076 117.137 968.841 110.319C963.606 103.502 957.092 98.3883 949.301 94.9795C941.631 91.5706 932.804 89.8662 922.821 89.8662H876.653C869.474 89.8662 863.653 84.0459 863.653 76.8662V56.6641C863.653 49.4844 869.474 43.6641 876.653 43.6641H922.821C940.84 43.6641 957.275 46.7077 972.128 52.7949C987.103 58.8822 1000.01 67.5869 1010.84 78.9092C1021.8 90.2314 1030.26 103.623 1036.23 119.085C1042.19 134.547 1045.17 151.773 1045.17 170.766V182.636C1045.17 201.506 1042.19 218.733 1036.23 234.316C1030.26 249.778 1021.8 263.17 1010.84 274.492C1000.01 285.693 987.163 294.337 972.311 300.424C957.458 306.511 941.083 309.555 923.187 309.555ZM885.533 43.6641C892.713 43.6641 898.533 49.4844 898.533 56.6641V296.555C898.533 303.734 892.713 309.555 885.533 309.555H852C844.82 309.555 839 303.734 839 296.555V56.6641C839 49.4844 844.82 43.6641 852 43.6641H885.533Z" fill="black" />
            <path d="M786.323 43.6641C793.503 43.6641 799.323 49.4844 799.323 56.6641V296.555C799.323 303.734 793.503 309.555 786.323 309.555H747.432C742.812 309.555 738.54 307.103 736.209 303.115L663.757 179.156C657.064 167.705 639.533 172.452 639.533 185.716V296.555C639.533 303.734 633.713 309.555 626.533 309.555H593C585.82 309.555 580 303.734 580 296.555V56.6641C580 49.4844 585.82 43.6641 593 43.6641H632.081C636.697 43.6641 640.966 46.1118 643.299 50.0952L715.937 174.147C722.636 185.588 740.155 180.836 740.155 167.578V56.6641C740.155 49.4844 745.976 43.6641 753.155 43.6641H786.323Z" fill="black" />
            <path d="M80.0551 278.866C79.7686 277.184 79.816 275.462 80.1948 273.798L130.278 53.7787C131.624 47.862 136.885 43.6641 142.953 43.6641H154.419C159.663 43.6641 164.393 46.8146 166.414 51.6533L173.499 68.6128C174.559 71.1505 174.787 73.9589 174.15 76.6343L121.079 299.565C119.685 305.422 114.453 309.555 108.433 309.555H96.2552C89.9178 309.555 84.5039 304.985 83.4397 298.738L80.0551 278.866ZM48.2211 43.6641C54.4658 43.6641 59.8283 48.1043 60.993 54.2394L102.842 274.679C103.184 276.482 103.141 278.337 102.715 280.122L98.0736 299.572C96.6769 305.425 91.4459 309.555 85.4286 309.555H68.1883C62.0711 309.555 56.7814 305.29 55.484 299.312L3.41984 59.4213C1.66149 51.3195 7.83373 43.6641 16.1241 43.6641H48.2211ZM213.497 278.72C213.124 277.015 213.098 275.252 213.422 273.536L254.763 54.2556C255.921 48.1129 261.287 43.6641 267.538 43.6641H299.438C307.729 43.6641 313.901 51.3196 312.143 59.4213L260.078 299.312C258.781 305.29 253.491 309.555 247.374 309.555H230.702C224.592 309.555 219.306 305.3 218.002 299.331L213.497 278.72ZM172.628 43.6641C178.687 43.6641 183.943 47.8503 185.299 53.7561L236.056 274.913C236.462 276.682 236.493 278.518 236.147 280.3L232.507 299.034C231.32 305.144 225.969 309.555 219.746 309.555H207.459C201.455 309.555 196.233 305.444 194.822 299.609L140.916 76.6015C140.247 73.8339 140.505 70.9232 141.651 68.3165L149.071 51.4335C151.146 46.7124 155.815 43.6641 160.972 43.6641H172.628Z" fill="black" />
            <path d="M411.187 50.4712C414.503 41.9952 426.497 41.9952 429.813 50.4713L437.547 70.2429C438.55 72.8074 440.566 74.8447 443.12 75.8744L462.999 83.8896C471.346 87.2553 471.346 99.0728 462.999 102.439L443.12 110.454C440.566 111.483 438.55 113.521 437.547 116.085L429.813 135.857C426.497 144.333 414.503 144.333 411.187 135.857L403.453 116.085C402.45 113.521 400.434 111.483 397.88 110.454L378.001 102.439C369.654 99.0728 369.654 87.2553 378.001 83.8896L397.88 75.8744C400.434 74.8447 402.45 72.8074 403.453 70.2429L411.187 50.4712Z" fill="#FF7028" />
            <path d="M381.927 35.5942C386.956 32.8763 392.577 38.0638 390.27 43.294L389.887 44.1627C389.225 45.6641 389.206 47.3712 389.836 48.8865L391.102 51.9333C393.068 56.6643 388.583 61.524 383.709 59.9428L380.571 58.9245C379.01 58.4181 377.31 58.573 375.867 59.3532L375.031 59.8047C370.002 62.5226 364.382 57.3351 366.689 52.1049L367.072 51.2361C367.734 49.7348 367.753 48.0277 367.123 46.5124L365.857 43.4655C363.891 38.7346 368.376 33.8749 373.249 35.456L376.388 36.4743C377.948 36.9808 379.649 36.8259 381.092 36.0456L381.927 35.5942Z" fill="#FF7028" />
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
                            className={`inline-block px-3 py-1 rounded-md text-sm bg-orange-100 text-orange-800`}
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
