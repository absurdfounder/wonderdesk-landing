import React, { useState, useEffect } from 'react';
import { Info } from 'lucide-react';

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
};

const TabImageHotspots = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Define tabs with their images and hotspots
  const tabs: Tab[] = [
    {
      title: 'Product Docs',
      image: 'https://dazzling-cat.netlify.app/marketingai.png',
      hotspots: [
        { id: 1, x: 20, y: 30, text: 'Navigation menu - Access all main features from here' },
        { id: 2, x: 50, y: 50, text: 'Activity feed - See recent updates and changes' },
        { id: 3, x: 80, y: 20, text: 'User profile settings and notifications' }
      ]
    },
    {
      title: 'Helpdesk',
      image: 'https://dazzling-cat.netlify.app/marketingai.png',
      hotspots: [
        { id: 1, x: 30, y: 40, text: 'Create new project button - Start here to begin a new project' },
        { id: 2, x: 60, y: 60, text: 'Project templates - Choose from existing templates to save time' },
        { id: 3, x: 75, y: 25, text: 'Import options - Bring in existing projects from other systems' }
      ]
    },
    {
      title: 'Blog',
      image: 'https://dazzling-cat.netlify.app/airdropswork.png',
      hotspots: [
        { id: 1, x: 25, y: 20, text: 'Formatting toolbar - Style your content with these tools' },
        { id: 2, x: 50, y: 70, text: 'Collaboration panel - See who else is editing and their changes' },
        { id: 3, x: 85, y: 40, text: 'Version history - Access previous versions of your document' }
      ]
    },
    {
      title: 'Directory',
      image: 'https://dazzling-cat.netlify.app/notionbear.png',
      hotspots: [
        { id: 1, x: 25, y: 20, text: 'Formatting toolbar - Style your content with these tools' },
        { id: 2, x: 50, y: 70, text: 'Collaboration panel - See who else is editing and their changes' },
        { id: 3, x: 85, y: 40, text: 'Version history - Access previous versions of your document' }
      ]
    },
    {
      title: '2-sided Marketplace',
      image: 'https://dazzling-cat.netlify.app/remotejobs.png',
      hotspots: [
        { id: 1, x: 25, y: 20, text: 'Formatting toolbar - Style your content with these tools' },
        { id: 2, x: 50, y: 70, text: 'Collaboration panel - See who else is editing and their changes' },
        { id: 3, x: 85, y: 40, text: 'Version history - Access previous versions of your document' }
      ]
    }    
  ];

  // Initialize imagesLoaded array when component mounts
  useEffect(() => {
    // Set up initial loaded state for all images (false)
    setImagesLoaded(new Array(tabs.length).fill(false));
    
    // Preload all images
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

    // Setup responsive behavior
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle hotspot click or hover
  const handleHotspotInteraction = (hotspotId: number) => {
    setActiveHotspot(activeHotspot === hotspotId ? null : hotspotId);
  };

  // Change active tab and reset hotspot
  const changeTab = (index: number) => {
    setActiveTab(index);
    setActiveHotspot(null);
  };

  // Calculate tooltip position based on viewport width and hotspot position
  const calculateTooltipPosition = (x: number, y: number) => {
    // For small screens, always show tooltip centered below hotspot
    if (windowWidth < 640) {
      return {
        left: '50%',
        top: '30px',
        transform: 'translateX(-50%)'
      };
    }
    
    // For larger screens, position based on hotspot location
    return {
      left: x > 50 ? '-270px' : '30px',
      top: y > 50 ? '-80px' : '0px',
      transform: 'none'
    };
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-lg px-2 sm:px-0">
      {/* Tab Navigation - Scrollable on mobile */}
      <div className="flex overflow-x-auto border-b bg-white/50 rounded-md w-full sm:w-fit justify-start sm:justify-center m-auto mt-6 p-1 scrollbar-hide">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-3 sm:px-4 py-2 font-medium text-sm sm:text-lg whitespace-nowrap transition-colors duration-200 mr-2 ${
              activeTab === index 
                ? 'text-gray-900 border-b-2 bg-white rounded-md font-bold' 
                : 'text-gray-700 hover:text-gray-500'
            }`}
            onClick={() => changeTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Image with Hotspots */}
      <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden">
        {tabs.map((tab, index) => (
          <div 
            key={index} 
            className={`${activeTab === index ? 'block' : 'hidden'} relative`}
          >
            {/* Loading state */}
            {!imagesLoaded[index] && (
              <div className="w-full aspect-video bg-gray-200 animate-pulse flex items-center justify-center">
                <span className="text-gray-500">Loading...</span>
              </div>
            )}
            
            {/* Image */}
            <img 
              src={tab.image} 
              alt={`${tab.title} interface`} 
              className={`w-full h-auto ${imagesLoaded[index] ? 'block' : 'hidden'}`}
              onLoad={() => {
                // Backup onload handler in case the pre-loading doesn't work
                setImagesLoaded(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }}
            />
            
            {/* Hotspots - Only show if image is loaded */}
            {imagesLoaded[index] && tab.hotspots.map((hotspot) => (
              <div 
                key={hotspot.id}
                className="absolute"
                style={{ 
                  left: `${hotspot.x}%`, 
                  top: `${hotspot.y}%`,
                  transform: 'translate(-50%, -50%)' // Center the hotspot on its coordinates
                }}
              >
                {/* Hotspot Button */}
                <button
                  className={`cursor-pointer flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-md transition-all duration-300 z-10 ${
                    activeHotspot === hotspot.id 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  }`}
                  onClick={() => handleHotspotInteraction(hotspot.id)}
                  onMouseEnter={() => handleHotspotInteraction(hotspot.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                  <Info size={windowWidth < 640 ? 12 : 16} />
                </button>
                
                {/* Tooltip */}
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

      {/* Instructions */}
      <div className="mt-4 text-center text-xs sm:text-sm text-gray-900">
        Hover over or click the <Info size={16} className="inline" /> icons to see more information
      </div>
    </div>
  );
};

export default TabImageHotspots;