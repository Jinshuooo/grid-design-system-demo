import React from 'react'
import { LayoutGrid, Grid3X3, Languages, ShieldCheck } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Header({ showGrid, toggleGrid }) {
  const { lang, toggleLang, isZh } = useLang()

  return (
    <header className="sticky top-0 z-[1100] px-4 md:px-6 py-3 transition-all duration-300">
      <div className="max-w-[1240px] mx-auto">
        <div className="glass-panel rounded-2xl px-4 py-2.5 flex items-center justify-between border border-white/80 shadow-glass">
          {/* Brand Tag */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0071e3] to-[#2997ff] flex items-center justify-center text-white shadow-sm shadow-[#0071e3]/30 shrink-0">
              <LayoutGrid className="w-4 h-4" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2">
              <span className="font-extrabold tracking-tight text-sm text-[#1d1d1f] whitespace-nowrap">
                GRID // 1968
              </span>
              <span className="hidden sm:inline-block text-[11px] font-medium text-[#86868b] tracking-wider uppercase">
                {isZh ? '自由表象 · 精确隐序' : 'CHAOS × ORDER'}
              </span>
            </div>
          </div>

          {/* Controls */}
          <nav className="flex items-center space-x-2 shrink-0" aria-label="Page Controls">
            {/* Language Switcher */}
            <button
              id="lang-toggle"
              type="button"
              onClick={toggleLang}
              aria-pressed={isZh}
              title={isZh ? 'Switch to English (Shortcut: L)' : '切换至中文 (快捷键: L)'}
              className="glass-pill px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold text-[#1d1d1f] hover:text-[#0071e3] hover:border-[#0071e3]/30 transition-all flex items-center space-x-1.5 active:scale-95 shrink-0 whitespace-nowrap"
            >
              <Languages className="w-3.5 h-3.5 text-[#86868b] shrink-0" />
              <span className="whitespace-nowrap">{isZh ? 'EN / 中' : '中 / EN'}</span>
            </button>

            {/* Grid Overlay Toggle */}
            <button
              id="grid-toggle"
              type="button"
              onClick={toggleGrid}
              aria-pressed={showGrid}
              title="Toggle Grid Overlay (Shortcut: G)"
              className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1.5 active:scale-95 shrink-0 whitespace-nowrap ${
                showGrid
                  ? 'bg-[#0071e3] text-white shadow-md shadow-[#0071e3]/30 border border-[#0071e3]'
                  : 'glass-pill text-[#1d1d1f] hover:text-[#0071e3] hover:border-[#0071e3]/30'
              }`}
            >
              <Grid3X3 className={`w-3.5 h-3.5 shrink-0 ${showGrid ? 'text-white' : 'text-[#86868b]'}`} />
              <span className="hidden sm:inline whitespace-nowrap">
                {isZh ? '网格标尺 [G]' : 'GRID OVERLAY [G]'}
              </span>
              <span className="sm:hidden whitespace-nowrap">
                {isZh ? '标尺 [G]' : 'GRID [G]'}
              </span>
            </button>

            {/* Legal Link */}
            <a
              href="#disclaimer"
              className="glass-pill px-2.5 py-1.5 rounded-xl text-xs font-medium text-[#86868b] hover:text-[#1d1d1f] hover:border-black/10 transition-all hidden md:flex items-center space-x-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isZh ? '声明' : 'NOTICE'}</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
