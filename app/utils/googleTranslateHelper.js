// googleTranslateHelper.js

/**
 * Helper functions for Google Translate integration that use cookie-based approach
 * This avoids adding hash to URL and prevents page refresh
 */

// Function to get current language from cookie or localStorage
export function getCurrentLanguage() {
    // Check cookies first (Google Translate's native approach)
    const match = document.cookie.match(/(^|;)\s*googtrans=([^;]+)/);
    if (match) {
      const langCode = match[2].split('/')[2];
      return langCode || 'en';
    }
    
    // Fall back to localStorage
    return localStorage.getItem('selectedLanguageCode') || 'en';
  }
  
  // Function to set the language using cookie approach without URL hash
  export function setLanguageWithCookie(langCode) {
    if (!langCode) return false;
    
    try {
      // Remove previous cookies
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      
      // Set cookies at domain and root level
      const hostname = window.location.hostname;
      
      // Set domain-level cookie
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${hostname}`;
      
      // Set path-level cookie
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      
      // Save in localStorage for backup/persistence
      localStorage.setItem('selectedLanguageCode', langCode);
      
      // Direct manipulation of Google Translate without using URL hash
      if (window.google && window.google.translate) {
        // Apply the translation directly using Google's API
        applyTranslationWithoutRefresh(langCode);
      } else {
        // If Google Translate not loaded yet, wait and try again
        const checkInterval = setInterval(() => {
          if (window.google && window.google.translate) {
            clearInterval(checkInterval);
            applyTranslationWithoutRefresh(langCode);
          }
        }, 200);
        
        // Clear interval after 5 seconds to prevent infinite checking
        setTimeout(() => clearInterval(checkInterval), 5000);
      }
      
      return true;
    } catch (error) {
      console.error('Error setting language cookie:', error);
      return false;
    }
  }
  
  // Apply translation without refreshing or changing URL
  function applyTranslationWithoutRefresh(langCode) {
    try {
      // Try to find the Google Translate widget
      const googleTranslateElement = document.getElementById('google_translate_element');
      
      if (googleTranslateElement) {
        // Try multiple selectors to find the combobox
        const selectors = [
          '.goog-te-combo', 
          'select.goog-te-combo', 
          '[id*="goog-te-combo"]',
          'select',
          'select[class*="goog"]'
        ];
        
        let foundSelect = false;
        
        // First try: use the select element if available
        for (const selector of selectors) {
          const elements = document.querySelectorAll(selector);
          
          elements.forEach(element => {
            if (element instanceof HTMLSelectElement) {
              try {
                element.value = langCode;
                element.dispatchEvent(new Event('change'));
                foundSelect = true;
                return;
              } catch (e) {
                console.error('Error changing select value:', e);
              }
            }
          });
          
          if (foundSelect) break;
        }
        
        // Second try: use Google's internal APIs if available
        if (!foundSelect && window.google && window.google.translate) {
          // Try to use Google's internal API directly
          try {
            // This uses internal Google APIs which are subject to change
            if (window.google.translate.TranslateElement) {
              new window.google.translate.TranslateElement(
                {
                  pageLanguage: 'en',
                  includedLanguages: langCode,
                  autoDisplay: true,
                  multilanguagePage: true
                }, 
                'google_translate_element'
              );
            }
          } catch (e) {
            console.error('Error using Google TranslateElement API:', e);
          }
          
          // Third try: directly inject translated content markers
          try {
            document.body.classList.add('translated-' + langCode);
            
            // Force re-render of translated elements
            const googleCombo = document.querySelector('.goog-te-combo');
            if (googleCombo && googleCombo instanceof HTMLSelectElement) {
              googleCombo.value = langCode;
              googleCombo.dispatchEvent(new Event('change'));
            }
          } catch (e) {
            console.error('Error with direct content manipulation:', e);
          }
        }
      }
    } catch (error) {
      console.error('Error in applyTranslationWithoutRefresh:', error);
    }
  }
  
  // Function to initialize Google Translate with proper settings
  export function initGoogleTranslate() {
    // Don't do anything if Google Translate is already loaded
    if (window.google && window.google.translate) {
      return;
    }
    
    // Define the initialization function
    window.googleTranslateElementInit = function() {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        autoDisplay: false,
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
      
      // Hide Google Translate elements
      hideGoogleTranslateBar();
      
      // Check for stored language preference and apply it
      const storedLang = localStorage.getItem('selectedLanguageCode');
      if (storedLang && storedLang !== 'en') {
        // Set cookies without hash
        setLanguageWithCookie(storedLang);
      }
    };
    
    // Hide Google Translate UI elements
    function hideGoogleTranslateBar() {
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
    
    // Load the script if it's not already loaded
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.head.appendChild(script);
    }
  }
  
  // Function to check if the translation is working and force it if needed
  export function ensureTranslation() {
    const currentLang = getCurrentLanguage();
    if (currentLang !== 'en') {
      // Re-apply the translation without refresh
      setTimeout(() => {
        applyTranslationWithoutRefresh(currentLang);
      }, 200);
    }
  }