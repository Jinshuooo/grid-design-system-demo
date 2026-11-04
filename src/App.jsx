import React, { useState, useEffect } from 'react'
import { LanguageProvider, useLang } from './context/LanguageContext'
import Header from './components/Header'
import GridOverlay from './components/GridOverlay'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import TheBook from './components/TheBook'
import Principles from './components/Principles'
import FieldSystems from './components/FieldSystems'
import PageAnatomy from './components/PageAnatomy'
import Specimen from './components/Specimen'
import FAQ from './components/FAQ'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'

function MainContent() {
  const [showGrid, setShowGrid] = useState(() => {
    try {
      return sessionStorage.getItem('grid_demo_overlay') === '1'
    } catch (e) {
      return false
    }
  })

  const { isZh, toggleLang } = useLang()

  const toggleGrid = () => {
    setShowGrid(prev => {
      const next = !prev
      try {
        sessionStorage.setItem('grid_demo_overlay', next ? '1' : '0')
      } catch (e) {
        // ignore
      }
      return next
    })
  }

  // Global Keyboard shortcuts: [G] for Grid, [L] for Language
  useEffect(() => {
    const handleKeyDown = e => {
      const target = e.target
      const tagName = target && target.tagName ? target.tagName.toUpperCase() : ''
      if (tagName === 'INPUT' || tagName === 'TEXTAREA' || (target && target.isContentEditable)) {
        return
      }

      if (e.key === 'g' || e.key === 'G') {
        if (!e.metaKey && !e.ctrlKey && !e.altKey) {
          e.preventDefault()
          toggleGrid()
        }
      } else if (e.key === 'l' || e.key === 'L') {
        if (!e.metaKey && !e.ctrlKey && !e.altKey) {
          e.preventDefault()
          toggleLang()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleLang])

  return (
    <div className={`min-h-screen relative ${showGrid ? 'grid-overlay-active' : ''}`}>
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-[#0071e3] focus:text-white focus:rounded-xl focus:shadow-lg focus:font-bold focus:outline-none"
      >
        {isZh ? '跳转至主要内容' : 'Skip to main content'}
      </a>

      {/* Grid Overlay Component */}
      <GridOverlay showGrid={showGrid} />

      {/* Sticky Header with Controls */}
      <Header showGrid={showGrid} toggleGrid={toggleGrid} />

      {/* Main Content Area */}
      <main id="main-content" tabIndex="-1" className="outline-none">
        <Hero showGrid={showGrid} toggleGrid={toggleGrid} />
        <Marquee />
        <TheBook />
        <Principles />
        <FieldSystems />
        <PageAnatomy />
        <Specimen />
        <FAQ />
        <Disclaimer />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  )
}
