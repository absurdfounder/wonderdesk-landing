import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Info } from 'lucide-react';

interface Hotspot {
  id: number;
  x: number;
  y: number;
  text: string;
}

interface Tab {
  title: string;
  image: string;
  color: string;
  hotspots: Hotspot[];
}

const TabImageHotspots: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [isHoveringHotspot, setIsHoveringHotspot] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mobile detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define tabs with their images and hotspots
  const tabs: Tab[] = [
    {
      title: 'Product Docs',
      image: 'https://framerusercontent.com/images/1VVkDoAMZIX2j47fttQXMgCFbQ.svg',
      color: '#4F46E5', // Indigo
      hotspots: [
        { id: 1, x: 20, y: 30, text: 'Navigation menu - Access all main features from here' },
        { id: 2, x: 50, y: 50, text: 'Activity feed - See recent updates and changes' },
        { id: 3, x: 80, y: 20, text: 'User profile settings and notifications' }
      ]
    },
    {
      title: 'Helpcenter',
      image: 'https://framerusercontent.com/images/1VVkDoAMZIX2j47fttQXMgCFbQ.svg',
      color: '#0EA5E9', // Sky blue
      hotspots: [
        { id: 1, x: 30, y: 40, text: 'Create new project button - Start here to begin a new project' },
        { id: 2, x: 60, y: 60, text: 'Project templates - Choose from existing templates to save time' },
        { id: 3, x: 75, y: 25, text: 'Import options - Bring in existing projects from other systems' }
      ]
    },
    {
      title: 'Blog',
      image: 'https://framerusercontent.com/images/1VVkDoAMZIX2j47fttQXMgCFbQ.svg',
      color: '#8B5CF6', // Purple
      hotspots: [
        { id: 1, x: 25, y: 35, text: 'Featured articles - Our most popular content' },
        { id: 2, x: 55, y: 65, text: 'Category filters - Browse content by topic' },
        { id: 3, x: 80, y: 30, text: 'Subscribe button - Stay updated with latest posts' }
      ]
    },
    {
      title: 'Directory',
      image: 'https://framerusercontent.com/images/1VVkDoAMZIX2j47fttQXMgCFbQ.svg',
      color: '#10B981', // Emerald
      hotspots: [
        { id: 1, x: 25, y: 20, text: 'Formatting toolbar - Style your content with these tools' },
        { id: 2, x: 50, y: 70, text: 'Collaboration panel - See who else is editing and their changes' },
        { id: 3, x: 85, y: 40, text: 'Version history - Access previous versions of your document' }
      ]
    },
    {
      title: '2-sided Marketplace',
      image: 'https://framerusercontent.com/images/1VVkDoAMZIX2j47fttQXMgCFbQ.svg',
      color: '#F59E0B', // Amber
      hotspots: [
        { id: 1, x: 20, y: 25, text: 'Seller dashboard - Manage your products and listings' },
        { id: 2, x: 45, y: 55, text: 'Buyer tools - Search, filter, and compare offerings' },
        { id: 3, x: 75, y: 35, text: 'Messaging system - Connect buyers and sellers directly' },
        { id: 4, x: 60, y: 20, text: 'Reviews and ratings - Build trust with verified feedback' }
      ]
    }
  ];

  // Auto-rotate tabs every 8 seconds unless user is interacting
  useEffect(() => {
    if (isHoveringHotspot) return;
    
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
      setActiveHotspot(null);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isHoveringHotspot, tabs.length]);

  // Get the active hotspot data for tooltip rendering
  const activeHotspotData = tabs[activeTab].hotspots.find(h => h.id === activeHotspot);

  // Compute tooltip style based on the hotspot's relative position and container position
  let tooltipStyle: React.CSSProperties = {};
  if (activeHotspotData && containerRef.current) {
    const rect = containerRef.current.getBoundingClientRect();
    const absoluteX = rect.left + (rect.width * activeHotspotData.x / 100);
    const absoluteY = rect.top + (rect.height * activeHotspotData.y / 100);
    const offsetX = activeHotspotData.x > 50 ? -270 : 30;
    const offsetY = activeHotspotData.y > 50 ? -90 : 0;
    tooltipStyle = {
      position: 'absolute',
      left: absoluteX + offsetX,
      top: absoluteY + offsetY,
      zIndex: 1000,
      width: '16rem',
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      borderTop: `4px solid ${tabs[activeTab].color}`,
      transform: 'scale(1)',
      transition: 'all 0.3s ease'
    };
  } else if (activeHotspotData) {
    // Fallback style if containerRef is not yet available
    tooltipStyle = {
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 1000,
      width: '16rem',
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      borderTop: `4px solid ${tabs[activeTab].color}`,
      transform: 'scale(1)',
      transition: 'all 0.3s ease'
    };
  }

  return (
    <div className="w-full max-w-5xl mx-auto rounded-xl shadow-lg my-12">
      
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center border-b bg-white/50 w-fit m-auto rounded-md">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-3 font-medium text-sm transition-all duration-300 mx-2 relative overflow-hidden ${
              activeTab === index 
                ? 'text-gray-900 font-semibold' 
                : 'text-gray-500 hover:text-gray-800'
            }`}
            onClick={() => {
              setActiveTab(index);
              setActiveHotspot(null);
            }}
            style={{ 
              borderBottom: activeTab === index ? `3px solid ${tab.color}` : '3px solid transparent'
            }}
          >
            {tab.title}
            {activeTab === index && (
              <span 
                className="absolute bottom-0 left-0 h-0.5 w-full transform transition-transform duration-300"
                style={{ backgroundColor: tab.color }}
              ></span>
            )}
          </button>
        ))}
      </div>

      {/* Image with Hotspots Container */}
      <div ref={containerRef} className="relative w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-inner">
        
        {/* Tab Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setActiveHotspot(null);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeTab === index ? 'w-6 bg-white' : 'bg-white/50 hover:bg-white/70'
              }`}
              style={{ backgroundColor: activeTab === index ? tab.color : undefined }}
            />
          ))}
        </div>
        
        {/* Main Image */}
        <img 
          src={tabs[activeTab].image} 
          alt={`${tabs[activeTab].title} interface`} 
          className="w-full h-auto object-cover"
        />
        
        {/* Overlay to create depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        
        {/* Hotspots (only show on non-mobile screens) */}
        {!isMobile && tabs[activeTab].hotspots.map((hotspot) => (
          <div 
            key={hotspot.id}
            className="absolute"
            style={{ 
              left: `${hotspot.x}%`, 
              top: `${hotspot.y}%` 
            }}
          >
            <button
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 z-10 transform ${
                activeHotspot === hotspot.id 
                  ? 'scale-125 shadow-lg' 
                  : 'hover:scale-110'
              }`}
              style={{ 
                backgroundColor: activeHotspot === hotspot.id 
                  ? tabs[activeTab].color
                  : 'rgba(255, 255, 255, 0.9)',
                color: activeHotspot === hotspot.id 
                  ? 'white'
                  : tabs[activeTab].color,
                boxShadow: activeHotspot === hotspot.id 
                  ? `0 0 0 4px rgba(255, 255, 255, 0.5), 0 4px 10px rgba(0, 0, 0, 0.2)` 
                  : `0 2px 5px rgba(0, 0, 0, 0.1)`
              }}
              onMouseEnter={() => {
                setActiveHotspot(hotspot.id);
                setIsHoveringHotspot(true);
              }}
              onMouseLeave={() => {
                setActiveHotspot(null);
                setIsHoveringHotspot(false);
              }}
              onClick={() => {
                setActiveHotspot(hotspot.id);
                setIsHoveringHotspot(true);
              }}
            >
              <Info size={16} />
            </button>
            
            {/* Hotspot Pulse Animation */}
            <div
              className={`absolute inset-0 rounded-full animate-ping opacity-70 ${
                activeHotspot === hotspot.id ? 'hidden' : 'block'
              }`}
              style={{ 
                backgroundColor: tabs[activeTab].color,
                animationDuration: '2s'
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Tooltip rendered in a portal to avoid clipping */}
      {activeHotspotData && ReactDOM.createPortal(
        <div style={tooltipStyle}>
          <p className="font-medium mb-1" style={{ color: tabs[activeTab].color }}>Feature Highlight</p>
          <p>{activeHotspotData.text}</p>
        </div>,
        document.body
      )}
    </div>
  );
};

export default TabImageHotspots;
