// components/FloatingScrollIndicator.tsx
'use client';

import React, { useState, useEffect } from 'react';

const FloatingScrollIndicator: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = (): void => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
    setScrollPosition(scrollPercent);
  };

  const handleIndicatorClick = (index: number): void => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetPosition = (index / 19) * docHeight; // 19 because we have 20 lines (0-19)
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  useEffect((): (() => void) => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial position
    
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 w-12 bg-gray-900/80 backdrop-blur-sm rounded-full flex flex-col items-center py-8 z-50 border border-gray-700/30">
      {/* Scroll indicator lines */}
      <div className="space-y-1 w-8 flex flex-col items-center">
        {[...Array(20)].map((_, i: number) => {
          const distanceFromActive: number = Math.abs(i - scrollPosition * 19);
          const isCenter: boolean = distanceFromActive < 0.5;
          const isAdjacent: boolean = distanceFromActive >= 0.5 && distanceFromActive < 1.5;
          const isActive: boolean = distanceFromActive < 1.5;
          
          let width: string = '16px'; // default width
          if (isCenter) {
            width = '32px'; // largest - center line
          } else if (isAdjacent) {
            width = '24px'; // medium - adjacent lines
          }
          
          return (
            <div
              key={i}
              className={`h-0.5 rounded-full transition-all duration-200 cursor-pointer hover:opacity-100 ${
                isActive ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
              }`}
              style={{
                width: width,
                opacity: isActive ? 1 : 0.3
              }}
              onClick={(): void => handleIndicatorClick(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FloatingScrollIndicator;