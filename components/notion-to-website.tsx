'use client'

import { useState, useEffect } from 'react';

export default function FeaturesBlocks() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const features = [
    'Helpdesk update ← support tickets', 
    'Blogs published ← using SEO Keywords', 
    'Changelogs sync ← GitHub releases'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes draw-check {
            from { stroke-dashoffset: 20; }
            to { stroke-dashoffset: 0; }
          }
          .animate-draw-check {
            animation: draw-check 0.8s ease-out;
          }
        `
      }} />
      
      <div className="max-w-4xl w-full text-left">

<span className='font-silkscreen text-blue-600 mb-4'>why wonder ?</span>

        <h1 className="text-4xl font-light text-gray-500 leading-relaxed mb-6 leading-tight font-funneldisplay tracking-loose mt-4">
          Wonder {' '}
          <span className="font-medium text-gray-900">AI agent</span>
          {' '} solves these
        </h1>
        
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div
              key={feature}
              className={`flex items-center space-x-4 transition-opacity duration-700 ${
                index === highlightedIndex ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <div className={`w-8 h-8 border-2 font-bold rounded flex items-center justify-center transition-colors duration-500 ${
                index === highlightedIndex 
                  ? 'bg-blue-50 border-blue-500' 
                  : 'bg-white border-gray-300'
              }`}>
                <svg width="22" height="22" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8l3 3 7-7"
                    stroke={index === highlightedIndex ? '#2889ffff' : 'transparent'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={index === highlightedIndex ? 'animate-draw-check' : ''}
                    style={{
                      strokeDasharray: '20',
                      strokeDashoffset: index === highlightedIndex ? '0' : '20',
                    }}
                  />
                </svg>
              </div>
              <span className={`text-4xl transition-colors duration-500 ${
                index === highlightedIndex 
                  ? 'text-gray-900 font-medium' 
                  : 'text-gray-500'
              }`}>
                {feature}
              </span>
            </div>
          ))}
        </div>
        
        <p className="text-4xl font-light text-gray-500">
          Set it once. Forget it forever.
        </p>
      </div>
    </div>
  );
}