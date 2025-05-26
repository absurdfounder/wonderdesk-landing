'use client'
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  TrendingUp, TrendingDown, BarChart3, Users, Globe, MessageSquare, Zap, Eye, Download, Share2, Activity, Clock, Server,
  Flame, Layers, HelpCircle, List, ExternalLink, ChevronDown, Briefcase, CalendarDays, BarChartHorizontalBig, ShieldCheck, Info, AlertTriangle
} from 'lucide-react';

// Ensure html2canvas is installed: npm install html2canvas
// import html2canvas from 'html2canvas'; // For screenshot functionality

// --- TYPE DEFINITIONS ---

interface MetricDisplayItem {
  icon: React.ElementType;
  iconColorClass: string; // e.g., 'text-emerald-500'
  bgColorClass: string; // e.g., 'bg-emerald-50'
  label: string;
  value: string | number;
  trend?: string;
  subText?: string;
}

interface Competitor {
  name: string;
  revenue: number;
  marketCap: number;
  users: number;
  category: string;
  emoji: string;
}

interface SolanaStatsData {
  avgGasFee: number;
  tps: number;
  activeValidators: number;
  currentEpoch: number;
  solPrice: number;
}

interface WondersitesMetricsData {
  wonderPrice: number;
  totalSupply: number;
  circulatingSupply: number;
  totalBurned: number;
  websitesCreated: number;
  totalUsers: number;
  dailyTraffic: number; // Added for completeness from original data
  aiMessages: number; // Added for completeness
  burnRate: number;
  marketCap: number;
  // burnCategories: Record<string, number>; // Simplified for this version to reduce complexity, can be added back
}

interface WONDERRealTimeBurnData {
  last7DaysWONDER: number;
  last7DaysUSD: number;
  totalBurnedWONDER: number;
  totalBurnedUSD: number;
}

interface WONDERQuarterlyBurnData {
  id: string;
  quarterInfo: string; // e.g., "Q1 2025, 31st Burn"
  WONDERAmount: number;
  usdValue: number;
  avgPrice: number;
  blocksProduced: number;
}

interface WONDERHistoryEntryData {
  id: string;
  block: number;
  age: string;
  txn: number;
  validator: string;
  gasUsed: string; // Format as string for display
  feesBurnedWONDER: number;
}

// --- HELPER FUNCTIONS ---

const formatNumber = (
  num?: number,
  decimals = 0,
  isCurrency = false,
  currencySymbol = '$'
): string => {
  if (num === undefined || num === null || isNaN(num)) {
    return isCurrency ? `${currencySymbol}0` : '0';
  }
  const absNum = Math.abs(num);
  const abbreviations = [
    { value: 1e12, symbol: 'T' },
    { value: 1e9, symbol: 'B' },
    { value: 1e6, symbol: 'M' },
    { value: 1e3, symbol: 'K' },
  ];
  for (const { value, symbol } of abbreviations) {
    if (absNum >= value) {
      return `${isCurrency ? currencySymbol : ''}${(num / value).toFixed(decimals)}${symbol}`;
    }
  }
  return `${isCurrency ? currencySymbol : ''}${num.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
};

const formatSolValue = (num?: number, decimals = 7): string => {
  if (num === undefined || num === null || isNaN(num)) return '0';
  return num.toFixed(decimals);
};


// --- FRAMER MOTION VARIANTS ---

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
};

// --- REUSABLE UI COMPONENTS ---

interface SectionTitleProps {
  emoji?: string;
  title: string | ReactNode;
  subtitle: string;
  className?: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ emoji, title, subtitle, className = '' }) => (
  <div className={`text-center mb-10 md:mb-14 ${className}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
      {emoji && <span className="mr-2">{emoji}</span>}{title}
    </h2>
    <p className="text-md md:text-lg text-slate-500 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

interface StatCardProps {
  item: MetricDisplayItem;
  className?: string;
}
const StatCard: React.FC<StatCardProps> = ({ item, className = '' }) => (
  <motion.div
    variants={cardVariants}
    className={`bg-white p-5 rounded-xl shadow-lg border border-slate-200/70 hover:shadow-xl transition-shadow duration-300 ${className}`}
  >
    <div className="flex items-center space-x-3 mb-3.5">
      <div className={`p-2.5 rounded-lg ${item.bgColorClass} ${item.iconColorClass}`}>
        <item.icon className="w-5 h-5" />
      </div>
      <h4 className="text-sm font-semibold text-slate-600 flex-1">{item.label}</h4>
    </div>
    <p className="text-2xl md:text-3xl font-bold text-slate-800 truncate" title={String(item.value)}>
      {item.value}
    </p>
    {item.trend && (
      <p className={`text-xs font-medium mt-1 ${item.trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
        {item.trend}
      </p>
    )}
    {item.subText && <p className="text-xs text-slate-400 mt-1">{item.subText}</p>}
  </motion.div>
);

interface InfoPillProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
  colorClasses: { text: string; bg: string; border: string; icon: string }; // e.g. {text: 'text-orange-700', bg:'bg-orange-50', border:'border-orange-200', icon:'text-orange-500'}
  className?: string;
}
const InfoPill: React.FC<InfoPillProps> = ({ label, value, icon: Icon, colorClasses, className = '' }) => (
  <motion.div
    variants={listItemVariants}
    className={`p-3.5 rounded-lg border ${colorClasses.bg} ${colorClasses.border} ${className}`}
  >
    <div className={`flex items-center text-sm ${colorClasses.text} mb-1`}>
      <Icon className={`w-4 h-4 mr-1.5 ${colorClasses.icon}`} />
      {label}
    </div>
    <p className={`text-xl font-bold ${colorClasses.text}`}>{value}</p>
  </motion.div>
);

interface ExpandableSectionProps {
  id: string;
  title: string;
  icon: React.ElementType;
  children: ReactNode;
  isOpen: boolean;
  onToggle: (id: string) => void;
  className?: string;
}
const ExpandableSection: React.FC<ExpandableSectionProps> = ({ id, title, icon: Icon, children, isOpen, onToggle, className='' }) => (
  <motion.div
    variants={cardVariants}
    className={`bg-white rounded-xl shadow-lg border border-slate-200/70 overflow-hidden ${className}`}
  >
    <button
      onClick={() => onToggle(id)}
      aria-expanded={isOpen}
      aria-controls={`content-${id}`}
      className="w-full flex justify-between items-center p-4 md:p-5 text-left hover:bg-slate-50/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-1"
    >
      <h3 className="text-md md:text-lg font-semibold text-slate-700 flex items-center">
        <Icon className="w-5 h-5 mr-2.5 text-sky-600" />
        {title}
      </h3>
      <motion.div animate={{ rotate: isOpen ? 0 : -90 }} transition={{ duration: 0.2 }}>
        <ChevronDown className="w-5 h-5 text-slate-500" />
      </motion.div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={`content-${id}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1, transition: { opacity: {delay: 0.1}}}}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="p-4 md:p-5 pt-0 text-sm text-slate-600/90 leading-relaxed border-t border-slate-200/70">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);


// --- MAIN DASHBOARD COMPONENT ---

const WondersitesDashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeSection, setActiveSection] = useState('overview');
  const [wondersitesMetrics, setWondersitesMetrics] = useState<WondersitesMetricsData>({
    wonderPrice: 0.000666,
    totalSupply: 1000000000,
    circulatingSupply: 978988043,
    totalBurned: 12500000,
    websitesCreated: 1256,
    totalUsers: 1567,
    dailyTraffic: 24567,
    aiMessages: 156789,
    burnRate: 847.5,
    marketCap: 87500000 * 0.245,
  });
  const [solanaStats, setSolanaStats] = useState<SolanaStatsData>({
    avgGasFee: 0.00000512,
    tps: 2850,
    activeValidators: 1875,
    currentEpoch: 452,
    solPrice: 155.20,
  });

  const [expandedWONDERSection, setExpandedWONDERSection] = useState<string | null>(null);

  const shareableRef = useRef<HTMLDivElement>(null); // For screenshot

  // --- Static Data ---
  const WONDERRealTimeBurn: WONDERRealTimeBurnData = {
    last7DaysWONDER: 523.67, last7DaysUSD: 351838.16,
    totalBurnedWONDER: 262474.22, totalBurnedUSD: 176348554.19,
  };
  const WONDERQuarterlyBurns: WONDERQuarterlyBurnData[] = [
    { id: 'q1-2025', quarterInfo: "Q1 2025, 31st Burn", WONDERAmount: 1579207.72, usdValue: 1012582283.943, avgPrice: 641.20, blocksProduced: 2591790 },
    { id: 'q2-2025', quarterInfo: "Q2 2025, 32nd Burn", WONDERAmount: 1617866.83, usdValue: 973923167.78, avgPrice: 601.98, blocksProduced: 2591790 },
  ];
  const WONDERHistory: WONDERHistoryEntryData[] = [
    { id: 'h1', block: 50349882, age: "12s ago", txn: 316, validator: "0xCa5...", gasUsed: "73.7M", feesBurnedWONDER: 0.00238 },
    { id: 'h2', block: 50349881, age: "14s ago", txn: 320, validator: "0xCa5...", gasUsed: "71.0M", feesBurnedWONDER: 0.00229 },
    { id: 'h3', block: 50349880, age: "15s ago", txn: 370, validator: "0xCa5...", gasUsed: "69.8M", feesBurnedWONDER: 0.00316 },
    { id: 'h4', block: 50349879, age: "17s ago", txn: 341, validator: "0xbdc...", gasUsed: "66.3M", feesBurnedWONDER: 0.00423 },
    { id: 'h5', block: 50349878, age: "18s ago", txn: 330, validator: "0xbdc...", gasUsed: "69.8M", feesBurnedWONDER: 0.00311 },
  ];

  // --- Effects for simulated data updates ---
  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const metricsTimer = setInterval(() => {
      setWondersitesMetrics(prev => ({
        ...prev,
        burnRate: Math.max(800, prev.burnRate + (Math.random() - 0.5) * 20),
        totalBurned: prev.totalBurned + (Math.random() * 2 + 0.5),
        websitesCreated: prev.websitesCreated + (Math.random() > 0.9 ? 1 : 0),
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 3 + 1),
        marketCap: prev.circulatingSupply * prev.wonderPrice, // Assuming price is static for now
      }));
      setSolanaStats(prev => ({
        ...prev,
        avgGasFee: Math.max(0.000003, prev.avgGasFee + (Math.random() - 0.5) * 0.000001),
        tps: Math.max(1500, prev.tps + Math.floor((Math.random() - 0.5) * 200)),
        solPrice: Math.max(100, prev.solPrice + (Math.random() - 0.5) * 2),
      }));
    }, 5000); // Update every 5 seconds
    return () => clearInterval(metricsTimer);
  }, []);

  // --- Scroll spy and navigation ---
  useEffect(() => {
    const navLinks = navItems.map(item => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px", threshold: 0.1 } // Adjust rootMargin for when section becomes active
    );

    navLinks.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => navLinks.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.unobserve(element);
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId); // Optional: update active state immediately
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  const downloadShareableImage = async () => {
    if (shareableRef.current) {
      try {
        const html2canvasModule = await import('html2canvas'); // Dynamic import
        const html2canvas = html2canvasModule.default;
        const canvas = await html2canvas(shareableRef.current, {
          backgroundColor: '#ffffff', // Or use a transparent BG if desired: null
          scale: 2,
          logging: process.env.NODE_ENV === 'development', // Only log in dev
          useCORS: true,
        });
        const link = document.createElement('a');
        link.download = 'wondersites-dashboard-snapshot.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (error) {
        console.error("Error generating image:", error);
        // You could add a user-facing notification here, e.g., using a toast library
        alert('Sorry, an error occurred while generating the image. Please try again.');
      }
    }
  };


  const navItems = [
    { id: 'overview', label: '✨ Wondersites', emoji: '✨' },
    { id: 'solana', label: '💜 Solana Eco', emoji: '💜' },
  ];

  return (
    <div className="min-h-screen bg-transparent text-slate-800 font-sans antialiased"> {/* Page background is transparent */}
      {/* Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="sticky top-0 left-0 right-0 bg-white rounded-md my-4 px-4 shadow-md"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between h-16 md:h-20">


            <nav className="hidden md:flex items-center space-x-1.5">
              {navItems.map(item => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 relative hover:bg-slate-100
                    ${activeSection === item.id ? 'text-sky-600 bg-sky-50/70' : 'text-slate-600 hover:text-slate-900'}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0, scale: 0.98 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-sky-500 rounded-t-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            <motion.button
              onClick={downloadShareableImage}
              className="flex items-center space-x-2 px-3.5 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 active:bg-sky-700 transition-colors text-sm font-medium shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </motion.button>
             {/* Mobile Nav Toggle - Placeholder */}
            <div className="md:hidden">
                <button className="p-2 rounded-md text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500">
                    <List className="w-6 h-6" />
                </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* --- MAIN CONTENT --- */}
      <main className='space-y-8'>


        {/* WONDER Burn Section */}
        <motion.section
          id="overview"
          className=" max-w-screen-xl mx-auto"
          variants={sectionVariants} initial="hidden" animate="visible"
        >

          <motion.div variants={cardVariants} className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-slate-200/70 mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-2.5 text-yellow-500" />Real-Time Burn
            </h3>
            <p className="text-sm text-slate-500 mb-5">Wonder Tokens are burned on use of the platform, from signup to website traffic as the users grow on the platform $wonder is burned. Incentivizing us to grow the platform and reflecting the returns on the price of the wonder token. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-slate-50/80 p-4 rounded-lg border border-slate-200/80">
                <p className="text-xs text-slate-500 mb-0.5">Burned in last 7 days</p>
                <p className="text-2xl font-bold text-yellow-600">{formatNumber(WONDERRealTimeBurn.last7DaysWONDER, 2)} <span className='opacity-50 font-normal'>WONDER</span></p>
                <p className="text-sm text-slate-500">{formatNumber(WONDERRealTimeBurn.last7DaysUSD, 2, true)}</p>
              </div>
              <div className="bg-slate-50/80 p-4 rounded-lg border border-slate-200/80">
                <p className="text-xs text-slate-500 mb-0.5">Total Burned</p>
                <p className="text-2xl font-bold text-yellow-600">{formatNumber(WONDERRealTimeBurn.totalBurnedWONDER, 2)} <span className='opacity-50 font-normal'>WONDER</span></p>
                <p className="text-sm text-slate-500">{formatNumber(WONDERRealTimeBurn.totalBurnedUSD, 2, true)}</p>
              </div>
            </div>
          </motion.div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 my-4">
            <StatCard item={{ icon: TrendingUp, label: '$WONDER Price', value: `$${wondersitesMetrics.wonderPrice.toFixed(4)}`, iconColorClass:'text-emerald-600', bgColorClass:'bg-emerald-50/70', trend:"+0.5% 24h" }} />
            <StatCard item={{ icon: BarChart3, label: 'Market Cap', value: formatNumber(wondersitesMetrics.marketCap, 0, true), subText: `${formatNumber(wondersitesMetrics.circulatingSupply)} Circ.`, iconColorClass:'text-sky-600', bgColorClass:'bg-sky-50/70' }} />
            <StatCard item={{ icon: Globe, label: 'Websites Created', value: wondersitesMetrics.websitesCreated.toLocaleString(), iconColorClass:'text-indigo-600', bgColorClass:'bg-indigo-50/70' }} />
            <StatCard item={{ icon: Users, label: 'Total Holders', value: wondersitesMetrics.totalUsers.toLocaleString(), iconColorClass:'text-violet-600', bgColorClass:'bg-violet-50/70' }} />
          </div>

          <motion.div variants={cardVariants} className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-slate-200/70 mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4 flex items-center">
              <CalendarDays className="w-6 h-6 mr-2.5 text-sky-500" /> Monthly Auto-Burn
            </h3>
            <p className="text-sm text-slate-500 mb-5">Auto-Burn adjusts based on WONDER price and blocks produced per month, following a monthly schedule.</p>
            <div className="space-y-5">
              {WONDERQuarterlyBurns.map(burn => (
                <motion.div key={burn.id} variants={listItemVariants} className="p-4 border border-slate-200/80 rounded-lg bg-slate-50/80 hover:bg-slate-100/70 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h4 className="text-md font-semibold text-sky-700">{burn.quarterInfo}</h4>
                    <span className="text-xs text-slate-500 mt-1 sm:mt-0">Value: {formatNumber(burn.usdValue, 0, true)}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5 text-sm">
                    <div><span className="text-slate-500">WONDER:</span> <strong className="text-slate-700">{formatNumber(burn.WONDERAmount, 0)}</strong></div>
                    <div><span className="text-slate-500">Avg Price:</span> <strong className="text-slate-700">{formatNumber(burn.avgPrice, 2, true)}</strong></div>
                    <div><span className="text-slate-500">Blocks:</span> <strong className="text-slate-700">{burn.blocksProduced.toLocaleString()}</strong></div>
                  </div>
                </motion.div>
              ))}
            </div>
             <p className="text-xs text-slate-400 mt-4">Note: K is a constant price anchor (initially 1000), modifiable via WONDER. <a href="#" className="text-sky-600 hover:underline">Learn more</a>.</p>
          </motion.div>
          
          <motion.div variants={cardVariants} className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-slate-200/70 mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-700 mb-4 flex items-center">
                <List className="w-6 h-6 mr-2.5 text-emerald-500"/> Real-Time Burn History <span className="text-xs ml-2 text-slate-400">(Recent 5)</span>
            </h3>
            <div className="overflow-x-auto rounded-lg border border-slate-200/80">
                <table className="min-w-full text-sm">
                    <thead className="bg-slate-50/80">
                        <tr>
                            {['Block', 'Age', 'Txn', 'Validator', 'Gas Used', 'Fees Burned'].map(h =>
                                <th key={h} scope="col" className="py-2.5 px-3 text-left font-medium text-slate-500 whitespace-nowrap">{h}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80">
                        {WONDERHistory.map(entry => (
                            <motion.tr key={entry.id} variants={listItemVariants} className="hover:bg-slate-50/50 transition-colors">
                                <td className="py-2.5 px-3 text-sky-600 font-medium">{entry.block}</td>
                                <td className="py-2.5 px-3 text-slate-500 whitespace-nowrap">{entry.age}</td>
                                <td className="py-2.5 px-3 text-slate-500">{entry.txn}</td>
                                <td className="py-2.5 px-3 text-slate-500 font-mono text-xs">{entry.validator}</td>
                                <td className="py-2.5 px-3 text-slate-500 whitespace-nowrap">{entry.gasUsed}</td>
                                <td className="py-2.5 px-3 text-red-600 font-medium whitespace-nowrap">{entry.feesBurnedWONDER.toFixed(5)} WONDER</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-5 text-center">
                <motion.a
                    href="#" // Replace with actual BscScan link
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-sky-600 hover:text-sky-700 font-medium group"
                    whileHover={{ gap: "6px" }}
                >
                    View all on SolScan <ExternalLink className="w-3.5 h-3.5 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
                </motion.a>
            </div>
          </motion.div>

          <div className="grid gap-5 md:gap-6">
            <ExpandableSection
              id="what-is-WONDER" title="What is WONDER?" icon={Briefcase}
              isOpen={expandedWONDERSection === 'what-is-WONDER'} onToggle={setExpandedWONDERSection}
            >
              WONDER powers the WONDER Chain ecosystem and is the native coin of the WONDER Smart Chain, opWONDER, and Greenfield. It's a popular utility token for trading and various applications.
            </ExpandableSection>
            <ExpandableSection
              id="how-burn-works" title="How does WONDER Burn work?" icon={ShieldCheck}
              isOpen={expandedWONDERSection === 'how-burn-works'} onToggle={setExpandedWONDERSection}
            >
              WONDER uses an Auto-Burn system to reduce its total supply to 100M WONDER, adjusting based on WONDER's price and quarterly BSC block generation for transparency. Lost WONDER can be reimbursed via the Pioneer Burn Program. Additionally, a real-time mechanism burns a fixed ratio of gas fees per block.
            </ExpandableSection>
          </div>
        </motion.section>

        {/* Solana Eco Section */}
        <motion.section
          id="solana"
          className="max-w-screen-xl mx-auto"
          variants={sectionVariants} initial="hidden" animate="visible"
        >
          <SectionTitle emoji="💜" title={<><span className="text-purple-600">Solana</span> Ecosystem</>} subtitle="Key real-time metrics from the Solana network." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 my-4">
            <StatCard item={{ icon: Zap, label: 'Avg. Gas Fee (SOL)', value: formatSolValue(solanaStats.avgGasFee), subText: `~${formatNumber(solanaStats.avgGasFee * solanaStats.solPrice, 5, true)}`, iconColorClass:'text-emerald-600', bgColorClass:'bg-emerald-50/70' }} />
            <StatCard item={{ icon: Activity, label: 'Transactions (TPS)', value: solanaStats.tps.toLocaleString(), subText: "Network Throughput", iconColorClass:'text-sky-600', bgColorClass:'bg-sky-50/70' }} />
            <StatCard item={{ icon: Server, label: 'Active Validators', value: solanaStats.activeValidators.toLocaleString(), subText: "Network Security", iconColorClass:'text-fuchsia-600', bgColorClass:'bg-fuchsia-50/70' }} />
            <StatCard item={{ icon: Clock, label: 'Current Epoch', value: solanaStats.currentEpoch.toLocaleString(), subText: `SOL: ${formatNumber(solanaStats.solPrice, 2, true)}`, iconColorClass:'text-amber-600', bgColorClass:'bg-amber-50/70' }} />
          </div>
        </motion.section>
      </main>

    </div>
  );
};

export default WondersitesDashboard;