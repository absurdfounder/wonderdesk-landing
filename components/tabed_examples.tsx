import React, { useState, useEffect, useRef } from 'react';
import { Info, BarChart3, Users, ArrowDownUp, FolderTree, ShoppingBag } from 'lucide-react';

// Define types for TypeScript
type Hotspot = {
  id: number;
  x: number;
  y: number;
  text: string;
};

type Tab = {
  title: string;
  image: string;
  hotspots: Hotspot[];
  icon: React.ReactNode;
  activeColor: string;
  inactiveColor: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
};

const TabImageHotspots = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [isTabHovered, setIsTabHovered] = useState(false);
  const autoSwitchTimerRef = useRef<NodeJS.Timeout | null>(null);

  const tabs: Tab[] = [
    {
      title: 'Product Docs',
      image: 'https://dazzling-cat.netlify.app/marketingai.png',
      icon: <BarChart3 size={20} />,
      activeColor: 'bg-purple-100',
      inactiveColor: 'bg-purple-50',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-500',
      hotspots: [
        { id: 1, x: 20, y: 30, text: 'Navigation menu - Access all main features from here' },
        { id: 2, x: 50, y: 50, text: 'Activity feed - See recent updates and changes' },
        { id: 3, x: 80, y: 20, text: 'User profile settings and notifications' }
      ]
    },
    {
      title: 'Helpdesk',
      image: 'https://dazzling-cat.netlify.app/marketingai.png',
      icon: <Users size={20} />,
      activeColor: 'bg-blue-100',
      inactiveColor: 'bg-blue-50',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-500',
      hotspots: [
        { id: 1, x: 30, y: 40, text: 'Create new project button - Start here to begin a new project' },
        { id: 2, x: 60, y: 60, text: 'Project templates - Choose from existing templates to save time' },
        { id: 3, x: 75, y: 25, text: 'Import options - Bring in existing projects from other systems' }
      ]
    },
    {
      title: 'Blog',
      image: 'https://dazzling-cat.netlify.app/airdropswork.png',
      icon: <ArrowDownUp size={20} />,
      activeColor: 'bg-green-100',
      inactiveColor: 'bg-green-50',
      bgColor: 'bg-green-100',
      textColor: 'text-green-800',
      borderColor: 'border-green-500',
      hotspots: [
        { id: 1, x: 25, y: 20, text: 'Formatting toolbar - Style your content with these tools' },
        { id: 2, x: 50, y: 70, text: 'Collaboration panel - See who else is editing and their changes' },
        { id: 3, x: 85, y: 40, text: 'Version history - Access previous versions of your document' }
      ]
    },
    {
      title: 'Directory',
      image: 'https://dazzling-cat.netlify.app/notionbear.png',
      icon: <FolderTree size={20} />,
      activeColor: 'bg-yellow-100',
      inactiveColor: 'bg-yellow-50',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-500',
      hotspots: [
        { id: 1, x: 25, y: 20, text: 'Formatting toolbar - Style your content with these tools' },
        { id: 2, x: 50, y: 70, text: 'Collaboration panel - See who else is editing and their changes' },
        { id: 3, x: 85, y: 40, text: 'Version history - Access previous versions of your document' }
      ]
    },
    {
      title: '2-sided Marketplace',
      image: 'https://dazzling-cat.netlify.app/remotejobs.png',
      icon: <ShoppingBag size={20} />,
      activeColor: 'bg-pink-100',
      inactiveColor: 'bg-pink-50',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-500',
      hotspots: [
        { id: 1, x: 25, y: 20, text: 'Formatting toolbar - Style your content with these tools' },
        { id: 2, x: 50, y: 70, text: 'Collaboration panel - See who else is editing and their changes' },
        { id: 3, x: 85, y: 40, text: 'Version history - Access previous versions of your document' }
      ]
    }
  ];

  // Auto-switching functionality
  useEffect(() => {
    const startAutoSwitchTimer = () => {
      if (autoSwitchTimerRef.current) {
        clearTimeout(autoSwitchTimerRef.current);
      }
      
      autoSwitchTimerRef.current = setTimeout(() => {
        if (!isTabHovered) {
          setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
        }
        startAutoSwitchTimer();
      }, 2000);
    };

    startAutoSwitchTimer();

    return () => {
      if (autoSwitchTimerRef.current) {
        clearTimeout(autoSwitchTimerRef.current);
      }
    };
  }, [isTabHovered, tabs.length]);

  useEffect(() => {
    setImagesLoaded(new Array(tabs.length).fill(false));
    tabs.forEach((tab, index) => {
      const img = new Image();
      img.src = tab.image;
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
    });
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleHotspotInteraction = (hotspotId: number) => {
    setActiveHotspot(activeHotspot === hotspotId ? null : hotspotId);
  };

  const changeTab = (index: number) => {
    setActiveTab(index);
    setActiveHotspot(null);
  };

  const calculateTooltipPosition = (x: number, y: number) => {
    if (windowWidth < 640) {
      return {
        left: '50%',
        top: '30px',
        transform: 'translateX(-50%)'
      };
    }
    return {
      left: x > 50 ? '-270px' : '30px',
      top: y > 50 ? '-80px' : '0px',
      transform: 'none'
    };
  };

  // Determine if we're in mobile view (only show icons)
  const isMobileView = windowWidth < 768;

  return (
    <div className="w-full max-w-5xl mx-auto rounded-lg px-2 sm:px-0">
      {/* Inline style for ::before pseudo-element */}
      <style>{`
        .active-tab::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: inherit;
          z-index: 20;
        }
      `}</style>

      <div 
        className="relative"
        onMouseEnter={() => setIsTabHovered(true)}
        onMouseLeave={() => setIsTabHovered(false)}
      >
        <div className="flex m-auto gap-1 w-full justify-center mt-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`
                px-4 py-2 
                flex items-center gap-2 border-b-transparent
                font-medium text-sm sm:text-base  
                whitespace-nowrap 
                transition-all duration-200 
                rounded-t-lg border-b-0 
                relative z-10
                ${index === 0 ? 'ml-2' : ''}
                ${activeTab === index
                  ? `active-tab ${tab.activeColor} border-t-2 border-r-2 border-l-2 ${tab.borderColor}`
                  : `${tab.inactiveColor} border border-gray-300 shadow-inner`
                }
                ${tab.textColor}
              `}
              onClick={() => changeTab(index)}
              style={{ marginBottom: '-1px' }}
            >
              <span className="p-1 rounded-md">
                {tab.icon}
              </span>
              {/* Show title only on desktop OR if it's the active tab on mobile */}
              {(!isMobileView || (isMobileView && activeTab === index)) && (
                <span className="truncate">{tab.title}</span>
              )}
            </button>
          ))}
        </div>

        {/* Content Container */}
        <div
          className={`
            relative w-full 
            ${tabs[activeTab].bgColor} 
            rounded-b-xl rounded-md 
            overflow-hidden p-6 
            shadow-md 
            transition-colors duration-300 
            border-2 
            ${tabs[activeTab].borderColor}
          `}
        >
          <div className="rounded-xl overflow-hidden bg-white shadow-2xl border border-gray-200">
            <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>

            <div className="relative">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`${activeTab === index ? 'block' : 'hidden'} relative`}
                >
                  {!imagesLoaded[index] && (
                    <div className="w-full aspect-video bg-gray-200 animate-pulse flex items-center justify-center">
                      <span className="text-gray-500">Loading...</span>
                    </div>
                  )}

                  <img
                    src={tab.image}
                    alt={`${tab.title} interface`}
                    className={`w-full h-auto ${imagesLoaded[index] ? 'block' : 'hidden'}`}
                    onLoad={() => {
                      setImagesLoaded(prev => {
                        const newState = [...prev];
                        newState[index] = true;
                        return newState;
                      });
                    }}
                  />

                  {imagesLoaded[index] && tab.hotspots.map((hotspot) => (
                    <div
                      key={hotspot.id}
                      className="absolute"
                      style={{
                        left: `${hotspot.x}%`,
                        top: `${hotspot.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <button
                        className={`cursor-pointer flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full transition-all duration-300 z-10 ${activeHotspot === hotspot.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-blue-600 hover:bg-blue-100 shadow-md'
                          }`}
                        onClick={() => handleHotspotInteraction(hotspot.id)}
                        onMouseEnter={() => handleHotspotInteraction(hotspot.id)}
                        onMouseLeave={() => setActiveHotspot(null)}
                      >
                        <Info size={windowWidth < 640 ? 12 : 16} />
                      </button>

                      {activeHotspot === hotspot.id && (
                        <div
                          className="absolute z-20 w-48 sm:w-64 p-2 sm:p-3 bg-white rounded-lg shadow-lg text-xs sm:text-sm text-gray-700 border border-gray-200 transition-opacity duration-300"
                          style={calculateTooltipPosition(hotspot.x, hotspot.y)}
                        >
                          {hotspot.text}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-xs sm:text-sm text-gray-900">
        Hover over or click the <Info size={16} className="inline" /> icons to see more information
      </div>
    </div>
  );
};

export default TabImageHotspots;