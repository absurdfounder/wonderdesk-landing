'use client';

import { useState, useEffect, useRef } from 'react';
import languageMapping from '../CustomTranslator/languageMapping.js';

// Define TypeScript interfaces
interface LanguageData {
  code: string;
  name: string;
  flag: string;
  countryCode?: string;
}

type LanguageMappingType = {
  [countryCode: string]: LanguageData;
};

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: {
          InlineLayout?: {
            SIMPLE: string;
          };
        };
      };
    };
  }
}

// Process language data for dropdown - remove duplicates based on language name
const processLanguagesForDropdown = (): LanguageData[] => {
  // Create a map to store unique languages based on language code
  const uniqueLanguages = new Map<string, LanguageData>();
  
  // Process each language entry
  Object.entries(languageMapping as LanguageMappingType).forEach(([countryCode, language]) => {
    // Special case for English - always use US flag
    if (language.code === 'en') {
      language.flag = '🇺🇸';
      // Store country code for reference
      language.countryCode = countryCode;
      
      // Set English from US as the standard English
      if (countryCode === 'US') {
        uniqueLanguages.set(language.code, language);
      }
    } 
    // For all other languages
    else if (!uniqueLanguages.has(language.code)) {
      // Store country code for reference
      language.countryCode = countryCode;
      uniqueLanguages.set(language.code, language);
    }
  });
  
  // Convert map back to array and sort alphabetically by language name
  return Array.from(uniqueLanguages.values())
    .sort((a, b) => a.name.localeCompare(b.name));
};

// Get processed languages list
const allUniqueLanguages = processLanguagesForDropdown();

const TranslateButton = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageData>(
    (languageMapping as LanguageMappingType)['US'] || { code: 'en', name: 'English', flag: '🇺🇸', countryCode: 'US' }
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredLanguages, setFilteredLanguages] = useState<LanguageData[]>(allUniqueLanguages);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    // Close dropdown when clicking outside
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    
    // Hide Google Translate bar
    function hideGoogleTranslateBar() {
      // Add CSS to hide the Google Translate bar
      const style = document.createElement('style');
      style.textContent = `
        .VIpgJd-ZVi9od-ORHb-OEVmcd, 
        .VIpgJd-ZVi9od-aZ2wEe-wOHMyf, 
        .goog-te-banner-frame, 
        .skiptranslate {
          display: none !important; 
          visibility: hidden !important;
        }
        body {
          top: 0 !important;
        }
      `;
      document.head.appendChild(style);
    }
    
    // Check if we have a stored language preference
    const storedLang = localStorage.getItem('selectedLanguageCode');
    if (storedLang) {
      const langObj = allUniqueLanguages.find(lang => lang.code === storedLang);
      if (langObj) {
        setSelectedLanguage(langObj);
        // Apply the stored language immediately when component mounts
        setTimeout(() => {
          translatePage(langObj);
        }, 1000); // Small delay to ensure Google Translate has loaded
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    hideGoogleTranslateBar();
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter languages based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredLanguages(allUniqueLanguages);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = allUniqueLanguages.filter(lang => 
        lang.name.toLowerCase().includes(query) || 
        lang.code.toLowerCase().includes(query)
      );
      setFilteredLanguages(filtered);
    }
  }, [searchQuery]);

  const translatePage = (language: LanguageData) => {
    // Use the Google Translate API to translate the page
    if (typeof window !== 'undefined') {
      const googleTranslateElement = document.getElementById('google_translate_element');
      
      if (googleTranslateElement && window.google && window.google.translate) {
        // Directly access the combobox
        const combobox = googleTranslateElement.querySelector('.goog-te-combo');
        
        if (combobox instanceof HTMLSelectElement) {
          // Set the value and trigger change event
          combobox.value = language.code;
          combobox.dispatchEvent(new Event('change'));
          localStorage.setItem('selectedLanguageCode', language.code);
          setSelectedLanguage(language);
        } else {
          console.log("Google Translate combobox not found or not a select element");
          // Fallback method - wait for Google Translate to initialize
          const checkGoogleTranslate = setInterval(() => {
            const select = googleTranslateElement.querySelector('.goog-te-combo');
            if (select instanceof HTMLSelectElement) {
              clearInterval(checkGoogleTranslate);
              select.value = language.code;
              select.dispatchEvent(new Event('change'));
              localStorage.setItem('selectedLanguageCode', language.code);
              setSelectedLanguage(language);
            }
          }, 100);
          
          // Clear interval after 10 seconds to avoid infinite checking
          setTimeout(() => clearInterval(checkGoogleTranslate), 10000);
        }
      } else {
        console.warn("Google Translate not loaded yet");
        // Try to initialize manually
        if (typeof window !== 'undefined' && window.location) {
          // Force reload to trigger translation (last resort)
          localStorage.setItem('selectedLanguageCode', language.code);
          setSelectedLanguage(language);
          
          // Add a small delay before reload to ensure localStorage is updated
          setTimeout(() => {
            window.location.reload();
          }, 100);
        }
      }
    }
    
    setDropdownOpen(false);
    setSearchQuery('');
  };

  // This ensures that Google Translate doesn't translate our dropdown text
  const preventTranslation = (e: React.MouseEvent<HTMLDivElement>) => {
    // This attribute tells Google Translate to not translate this element
    e.currentTarget.setAttribute('translate', 'no');
    // These classes are also used by Google to identify what not to translate
    e.currentTarget.classList.add('notranslate');
  };

  return (
    <div className="relative notranslate" translate="no" ref={dropdownRef} onClick={preventTranslation}>
      <button 
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm"
        aria-label="Select language"
      >
        <span className="mr-1 opacity-80">{selectedLanguage.flag}</span>
        <span className="mr-1">{selectedLanguage.code.toUpperCase()}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 max-h-96 overflow-y-auto notranslate mt-5" translate="no">
          <div className="py-1">
            <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100 flex justify-between items-center">
              <span>Select language</span>
              <span className="text-xs text-gray-400">{filteredLanguages.length} languages</span>
            </div>

            {/* Search input */}
            <div className="px-3 py-2 border-b border-gray-100">
              <input
                type="text"
                className="w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search languages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Language list */}
            <div className="max-h-64 overflow-y-auto">
              {filteredLanguages.length === 0 ? (
                <div className="px-4 py-2 text-sm text-gray-500 italic">
                  No languages found
                </div>
              ) : (
                filteredLanguages.map((language) => (
                  <button 
                    key={language.code}
                    onClick={() => translatePage(language)}
                    className={`px-4 py-2 text-sm w-full text-left flex items-center ${
                      selectedLanguage.code === language.code 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <span className="mr-2 opacity-70">{language.flag}</span> 
                    <span>{language.name}</span>
                    <span className="ml-2 text-xs text-gray-400">
                      {language.code} {language.countryCode && `(${language.countryCode})`}
                    </span>
                    {selectedLanguage.code === language.code && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TranslateButton;