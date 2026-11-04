import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('grid_demo_lang')
      if (saved === 'en' || saved === 'zh') return saved
    } catch (e) {
      // ignore
    }
    const nav = (navigator.language || navigator.userLanguage || '').toLowerCase()
    return nav.startsWith('zh') ? 'zh' : 'en'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-current-lang', lang)
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en')
    try {
      localStorage.setItem('grid_demo_lang', lang)
    } catch (e) {
      // ignore
    }
  }, [lang])

  const toggleLang = () => setLang(prev => (prev === 'en' ? 'zh' : 'en'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isZh: lang === 'zh' }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
