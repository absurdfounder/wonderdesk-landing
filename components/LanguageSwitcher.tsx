'use client'

import { useState } from 'react'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'ar', label: 'العربية' },
  { code: 'zh-CN', label: '中文' },
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
          <ul className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden z-50">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-slate-100 transition-colors"
                >
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
