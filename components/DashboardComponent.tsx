"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

const SimpleAnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRef = useRef(null);

  const tabs = [
    { id: 'analytics', label: 'Analytics', icon: <Play size={16} /> },
    { id: 'memberships', label: 'Memberships & Paywall', icon: <Play size={16} /> },
    { id: 'content', label: 'Content Manager AI', icon: <Play size={16} /> },
    { id: 'forms', label: 'Forms', icon: <Play size={16} /> },
    { id: 'seo', label: 'SEO', icon: <Play size={16} /> },
    { id: 'integrations', label: 'Integrations', icon: <Play size={16} /> },
    { id: 'branding', label: 'Designer AI', icon: <Play size={16} /> },
    { id: 'component_generator', label: 'Developer AI', icon: <Play size={16} /> },
    { id: 'wonderai', label: 'AI Agents', icon: <Play size={16} /> },
    { id: 'conversion', label: 'Paywall', icon: <Play size={16} /> }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsVideoLoading(true);

    // Simulate video loading time
    setTimeout(() => {
      setIsVideoLoading(false);
    }, 1500);

    // Reset and play the video
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  useEffect(() => {
    // Simulate initial video load completing
    const timer = setTimeout(() => {
      setIsVideoLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-800 text-gray-100 p-8 w-full max-w-6xl mx-auto rounded-lg">

      <h1 className="h2 mb-4 m-auto text-center">
        Simplicity meets AI Teams
        <span className="font-source-serif-4 block font-normal text-orange-600">stop grinding all alone.</span>
      </h1>

      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-xl font-medium mb-4 max-w-4xl m-auto">
          Wonder Sites is a simple Wordpress alternative powered by Notion. Build and Forget about us focus on what is important the services that your business provides.
        </h1>
        <p className="text-xl">Nothing beats simplicity.</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center max-w-4xl m-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full border 
              ${tab.special
                ? 'bg-red-500 text-white border-red-500'
                : activeTab === tab.id
                  ? 'bg-orange-600 border-gray-600'
                  : 'bg-transparent border-gray-600 hover:bg-gray-700'
              }
            `}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Chart/Video Section */}
      <div className="relative w-full h-96 bg-slate-900/70 rounded-lg overflow-hidden">
        {isVideoLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-orange-600 text-white text-xl font-medium">
            Loading {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Data...
          </div>
        ) : (
          <>
            {/* Video placeholder - in a real implementation, you would use actual video sources */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
            >
              <source src="/api/placeholder/400/320" type="video/mp4" />
              Your browser does not support the video tag.
            </video>


          </>
        )}
      </div>


    </div>
  );
};

export default SimpleAnalyticsDashboard;