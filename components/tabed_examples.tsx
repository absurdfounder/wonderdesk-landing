import React, { useState } from 'react';
import { Info } from 'lucide-react';

const TabImageHotspots = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Define tabs with their images and hotspots
  const tabs = [
    {
      title: 'Dashboard Overview',
      image: '/api/placeholder/800/500',
      hotspots: [
        { id: 1, x: 20, y: 30, text: 'Navigation menu - Access all main features from here' },
        { id: 2, x: 50, y: 50, text: 'Activity feed - See recent updates and changes' },
        { id: 3, x: 80, y: 20, text: 'User profile settings and notifications' }
      ]
    },
    {
      title: 'Project Setup',
      image: '/api/placeholder/800/500',
      hotspots: [
        { id: 1, x: 30, y: 40, text: 'Create new project button - Start here to begin a new project' },
        { id: 2, x: 60, y: 60, text: 'Project templates - Choose from existing templates to save time' },
        { id: 3, x: 75, y: 25, text: 'Import options - Bring in existing projects from other systems' }
      ]
    },
    {
      title: 'Document Editor',
      image: '/api/placeholder/800/500',
      hotspots: [
        { id: 1, x: 25, y: 20, text: 'Formatting toolbar - Style your content with these tools' },
        { id: 2, x: 50, y: 70, text: 'Collaboration panel - See who else is editing and their changes' },
        { id: 3, x: 85, y: 40, text: 'Version history - Access previous versions of your document' }
      ]
    }
  ];

  // Handle hotspot click or hover
  const handleHotspotInteraction = (hotspotId) => {
    setActiveHotspot(activeHotspot === hotspotId ? null : hotspotId);
  };

  // Change active tab
  const changeTab = (index) => {
    setActiveTab(index);
    setActiveHotspot(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md my-12">
      {/* Tab Navigation */}
      <div className="flex border-b mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 font-medium text-sm transition-colors duration-200 mr-2 ${
              activeTab === index 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-blue-500'
            }`}
            onClick={() => changeTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Image with Hotspots */}
      <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden">
        <img 
          src={tabs[activeTab].image} 
          alt={`${tabs[activeTab].title} interface`} 
          className="w-full h-auto"
        />
        
        {/* Hotspots */}
        {tabs[activeTab].hotspots.map((hotspot) => (
          <div 
            key={hotspot.id}
            className="absolute"
            style={{ 
              left: `${hotspot.x}%`, 
              top: `${hotspot.y}%` 
            }}
          >
            {/* Hotspot Button */}
            <button
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 z-10 ${
                activeHotspot === hotspot.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              }`}
              onClick={() => handleHotspotInteraction(hotspot.id)}
              onMouseEnter={() => handleHotspotInteraction(hotspot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <Info size={16} />
            </button>
            
            {/* Tooltip */}
            {activeHotspot === hotspot.id && (
              <div className="absolute z-20 w-64 p-3 bg-white rounded-lg shadow-lg text-sm text-gray-700 border border-gray-200"
                style={{
                  left: hotspot.x > 50 ? '-270px' : '30px',
                  top: hotspot.y > 50 ? '-80px' : '0px'
                }}
              >
                {hotspot.text}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="mt-4 text-center text-sm text-gray-500">
        Hover over or click the <Info size={16} className="inline" /> icons to see more information
      </div>
    </div>
  );
};

export default TabImageHotspots;