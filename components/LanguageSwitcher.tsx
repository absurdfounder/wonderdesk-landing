'use client'

import { useState } from 'react'

const languages = [
  { code: 'en', label: 'English', flag: 'us' },
  { code: 'ko', label: '한국어', flag: 'kr' },
  { code: 'hi', label: 'हिन्दी', flag: 'in' },
  { code: 'fr', label: 'Français', flag: 'fr' },
  { code: 'pt', label: 'Português', flag: 'br' },
  { code: 'de', label: 'Deutsch', flag: 'de' },
  { code: 'es', label: 'Español', flag: 'es' },
  { code: 'ar', label: 'العربية', flag: 'sa' },
  { code: 'zh-CN', label: '中文', flag: 'cn' },
]

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false)

  const handleLanguageChange = (langCode: string) => {
    const currentUrl = window.location.href
    const newUrl = `https://translate.google.com/translate?sl=en&tl=${langCode}&u=${encodeURIComponent(currentUrl)}`
    window.location.href = newUrl
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="px-4 py-2 bg-white text-sm font-medium text-slate-800 border border-slate-200 rounded-lg shadow-md hover:bg-slate-50 focus:outline-none"
        >
          🌐 Translate
        </button>

        {open && (
          <ul className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden z-50">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className="flex items-center gap-2 w-full px-4 py-2 text-left text-sm hover:bg-slate-100 transition-colors"
                >
                  <img
                    src={`https://flagcdn.com/w40/${lang.flag}.png`}
                    alt={`${lang.label} flag`}
                    className="w-5 h-4 rounded-sm object-cover"
                  />
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
