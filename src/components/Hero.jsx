import React from 'react'
import { Sparkles, Grid3X3, ArrowRight, CornerDownRight } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Hero({ showGrid, toggleGrid }) {
  const { isZh } = useLang()

  return (
    <section className="relative pt-6 pb-14 md:pt-10 md:pb-20 overflow-hidden" aria-labelledby="hero-title">
      {/* Cupertino Ambient Background Light Blobs & Glass Shards */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-gradient-to-tr from-[#0071e3]/15 to-[#2997ff]/20 rounded-full blur-3xl opacity-70 animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-[#2997ff]/10 via-[#0071e3]/10 to-purple-500/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-[#34c759]/10 to-[#0071e3]/10 rounded-full blur-3xl opacity-50" />

        {/* Diagonal Frosted Glass Shards Floating in Background */}
        <div className="absolute top-20 right-1/4 w-72 h-96 bg-white/30 backdrop-blur-md rounded-3xl -rotate-6 border border-white/50 -z-10 shadow-glass" />
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-gradient-to-br from-white/40 to-[#0071e3]/5 backdrop-blur-md rounded-3xl rotate-12 border border-white/40 -z-10" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 md:px-6">
        {/* Top Floating Glass Metadata Tape */}
        <div
          className="grid-locked mb-6 glass-panel rounded-2xl px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-xs border border-white/90 shadow-glass"
          data-grid-label="COL 1–12"
        >
          <div className="flex items-center space-x-2 text-[#1d1d1f] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#0071e3] animate-ping" />
            <span className="tracking-wide">VOL. 1968</span>
            <span className="text-[#86868b] font-normal">/</span>
            <span className="text-[#86868b]">SWITZERLAND · VERLAG ARTHUR NIGGLI</span>
          </div>
          <div className="flex items-center space-x-4 text-[#86868b] font-medium">
            <span className="hidden sm:inline">CANON: 8PX RHYTHM</span>
            <span className="hidden sm:inline">/</span>
            <span className="text-[#0071e3] font-semibold">
              {isZh ? '表面看似随意 · 暗藏严密网格' : 'SURFACE CHAOS × HIDDEN ORDER'}
            </span>
          </div>
        </div>

        {/* Asymmetrical Hero Composition (Desktop 8 + 1 + 3 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative">
          {/* Main Typography Area (Columns 1–8 on desktop) — Open expressive layout with overlapping glass shards */}
          <div
            className="grid-locked lg:col-span-8 relative pt-2 pb-4"
            data-grid-label="COL 1–8"
          >
            {/* Expressive Layered Glass Shard Backdrop */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-white/60 via-white/40 to-[#0071e3]/[0.03] backdrop-blur-xl rounded-3xl -rotate-1 border border-white/70 -z-10 shadow-glass pointer-events-none" />

            {/* Top decorative glass ribbon */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0071e3]/10 border border-[#0071e3]/20 text-[#0071e3] text-xs font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                <span>01 // {isZh ? '理性主义的自由悖论' : 'THE RATIONAL PARADOX'}</span>
              </div>
              <div className="glass-pill px-3 py-1 rounded-full text-[11px] text-[#86868b] font-mono -rotate-2 hidden sm:inline-block shadow-sm">
                SWISS CANON · 1968
              </div>
            </div>

            {/* Title with decorative 8px accent bar */}
            <div className="relative pl-5 border-l-4 border-[#0071e3]">
              <h1 id="hero-title" className="tracking-tighter">
                <span className="block text-5xl sm:text-7xl lg:text-8xl font-black text-[#1d1d1f] leading-[0.92]">
                  GRID
                </span>
                <span className="block text-5xl sm:text-7xl lg:text-8xl font-black text-transparent [-webkit-text-stroke:2px_#0071e3] md:[-webkit-text-stroke:3px_#0071e3] leading-[0.92] mt-1 tracking-tight translate-x-3 sm:translate-x-6 filter drop-shadow-sm">
                  SYSTEMS
                </span>
              </h1>

              {/* Angled Glass Tape cutting across */}
              <div className="glass-tape px-4 py-1.5 rounded-xl inline-block mt-4 -rotate-2 border border-[#2997ff]/40 shadow-sm">
                <span className="text-sm sm:text-xl font-extrabold tracking-wider text-[#0071e3]">
                  IN GRAPHIC DESIGN
                </span>
              </div>
            </div>

            {/* Mobile/Tablet Horizontal Chinese Title Strip (< 1024px) */}
            <div className="lg:hidden mt-5 p-3.5 rounded-2xl glass-panel border border-[#0071e3]/20 flex items-center justify-between shadow-glass-sm -rotate-0.5">
              <div>
                <div className="text-base sm:text-lg font-black text-[#1d1d1f]">
                  平面设计中的网格系统
                </div>
                <div className="text-xs text-[#86868b]">
                  约瑟夫·米勒-布罗克曼 著 // 经典视觉传达设计理论
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-[#0071e3] text-white text-xs font-bold shadow-sm shadow-[#0071e3]/30">
                秩序
              </span>
            </div>

            {/* Floating Glass Quote Slab (overlapped) */}
            <div className="mt-6 glass-panel rounded-2xl p-5 md:p-6 border border-white/80 shadow-glass-sm relative max-w-2xl clip-notch-tr translate-y-1">
              <p className="text-sm sm:text-base text-[#515154] leading-relaxed">
                {isZh ? (
                  <>
                    平面设计、字体编排和空间设计的视觉传达设计手册。
                    <strong className="text-[#1d1d1f] font-semibold">
                      {' '}秩序并非能量的消弭，而是能量通过几何规则的精准释放。
                    </strong>
                  </>
                ) : (
                  <>
                    A visual communication manual for graphic designers, typographers, and three-dimensional designers.
                    <strong className="text-[#1d1d1f] font-semibold">
                      {' '}Order is not the absence of energy; it is energy channelled through geometry.
                    </strong>
                  </>
                )}
              </p>

              {/* Floating circular glass stamp */}
              <div className="absolute -top-4 -right-2 glass-stamp-circle w-14 h-14 rounded-full flex flex-col items-center justify-center rotate-12 pointer-events-none hidden sm:flex">
                <span className="text-[8px] font-mono font-bold text-[#0071e3]">SWISS</span>
                <span className="text-[10px] font-black text-[#1d1d1f]">1968</span>
              </div>
            </div>

            {/* Micro feature pills */}
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-[#86868b]">
              <span className="px-3 py-1 rounded-full glass-pill">4 · 8 · 12 Columns</span>
              <span className="px-3 py-1 rounded-full glass-pill">8px Spacing Base</span>
              <span className="px-3 py-1 rounded-full glass-pill">Classical Proportions</span>
              <span className="px-3 py-1 rounded-full bg-[#0071e3]/10 text-[#0071e3] font-semibold">
                Cupertino Glass
              </span>
            </div>
          </div>

          {/* Vertical Chinese Spine (Column 9 on desktop) — Angled translucent acrylic strip with visible overlap */}
          <div
            className="hidden lg:flex lg:col-span-1 glass-panel rounded-3xl p-4 flex-col items-center justify-between min-h-[490px] border border-white/80 shadow-glass-card hover:-translate-y-1 transition-all duration-300 grid-locked relative overflow-hidden -rotate-1.5 z-20 -mx-1"
            data-grid-label="COL 9"
          >
            <div className="w-2 h-2 rounded-full bg-[#0071e3] shadow-sm shadow-[#0071e3]/40" />
            <div className="writing-vertical text-xl font-black text-[#1d1d1f] tracking-[0.25em] select-none my-auto" style={{ writingMode: 'vertical-rl' }}>
              平面设计中的网格系统
            </div>
            <div className="flex flex-col items-center space-y-2.5">
              <span className="text-[10px] text-[#86868b] tracking-widest writing-vertical" style={{ writingMode: 'vertical-rl' }}>
                约瑟夫·米勒-布罗克曼 著
              </span>
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0071e3] to-[#2997ff] text-white flex items-center justify-center text-xs font-bold shadow-md shadow-[#0071e3]/30">
                秩序
              </div>
            </div>
          </div>

          {/* Right Staggered Card: Author & Formula (Columns 10–12 on desktop) */}
          <div
            className="grid-locked lg:col-span-3 glass-panel rounded-3xl p-6 border border-white/80 shadow-glass-card hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between relative clip-notch-bl lg:translate-y-6 rotate-0.5"
            data-grid-label="COL 10–12"
          >
            {/* Masking tape pin on top */}
            <div className="absolute -top-3 left-8 w-20 h-5 glass-tape rounded-sm -rotate-3" aria-hidden="true" />

            <div>
              <div className="flex items-center justify-between text-xs text-[#86868b] pb-3 border-b border-black/[0.06] mb-4 pt-1">
                <span className="font-mono text-[11px]">ZÜRICH // 1914–1996</span>
                <span className="px-1.5 py-0.5 rounded bg-[#0071e3]/10 text-[#0071e3] font-mono text-[10px] font-bold">CH-68</span>
              </div>

              <h2 className="text-xl font-black text-[#1d1d1f] tracking-tight mb-1">
                Josef Müller-Brockmann
              </h2>
              <p className="text-xs text-[#0071e3] font-semibold mb-4">
                {isZh ? '瑞士国际主义排版学派导师' : 'Master of Swiss Typographic Style'}
              </p>

              <div className="p-3.5 rounded-2xl bg-white/70 border border-black/[0.04] mb-4">
                <span className="text-[10px] font-bold text-[#86868b] uppercase tracking-wider block mb-1">
                  {isZh ? '核心设计思想阐释' : 'CORE METHODOLOGY'}
                </span>
                <p className="text-xs text-[#515154] leading-relaxed">
                  {isZh
                    ? '网格是一套理性的设计罗盘，而非禁锢创意的教条。它通过确立清晰的边界秩序，让信息传达的准确性与形式构图的自由度相辅相成。'
                    : 'The grid is an architectural compass, not a dogma. It establishes clear boundaries so that communicative freedom can achieve its highest precision.'}
                </p>
              </div>
            </div>

            {/* Column Equation Badge */}
            <div className="p-3.5 rounded-2xl bg-[#1d1d1f] text-white shadow-sm border border-white/10">
              <div className="font-mono text-xs text-[#2997ff] font-bold tracking-wider mb-0.5">
                W = n·c + (n - 1)·g
              </div>
              <div className="text-[10px] text-[#86868b] tracking-wider uppercase">
                {isZh ? '栏宽与间隙数学方程' : 'COLUMN & GUTTER EQUATION'}
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
             PROMINENT HERO CTA BANNER: REVEAL THE HIDDEN GRID
             ═══════════════════════════════════════════════════════════ */}
        <div className="mt-8 grid-locked" data-grid-label="COL 1–12">
          <button
            id="hero-reveal-btn"
            type="button"
            onClick={toggleGrid}
            aria-pressed={showGrid}
            className={`w-full p-4 sm:p-5 rounded-3xl transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-left group shadow-glass-card hover:shadow-glass-hover ${
              showGrid
                ? 'bg-gradient-to-r from-[#0071e3] to-[#2997ff] text-white border border-[#0071e3]'
                : 'glass-panel text-[#1d1d1f] hover:border-[#0071e3]/40'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                  showGrid
                    ? 'bg-white text-[#0071e3] shadow-md'
                    : 'bg-[#0071e3] text-white shadow-md shadow-[#0071e3]/30 group-hover:scale-105'
                }`}
              >
                <Grid3X3 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base sm:text-lg font-black tracking-tight flex items-center space-x-2">
                  <span>{isZh ? '打开隐形参考线标尺' : 'REVEAL THE HIDDEN GRID'}</span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                    showGrid ? 'bg-white/20 text-white' : 'bg-[#0071e3]/10 text-[#0071e3]'
                  }`}>
                    {showGrid ? (isZh ? '已激活' : 'ACTIVE') : (isZh ? '点击揭晓' : 'CLICK TO REVEAL')}
                  </span>
                </div>
                <p className={`text-xs sm:text-sm mt-0.5 ${showGrid ? 'text-white/80' : 'text-[#86868b]'}`}>
                  {isZh
                    ? '看似自由，实则精确 // 立即见证看似随意不对称的玻璃板面，如何严丝合缝咬合在 12 栏与 8px 基线上。'
                    : "Looks free. Isn't. // Click to see the 12 columns & 8px baseline snap to life."}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 self-end sm:self-auto">
              <span
                className={`text-xs font-mono font-bold px-3 py-1.5 rounded-xl border ${
                  showGrid
                    ? 'bg-white/10 text-white border-white/30'
                    : 'bg-black/[0.04] text-[#1d1d1f] border-black/[0.08] group-hover:bg-[#0071e3] group-hover:text-white group-hover:border-[#0071e3]'
                }`}
              >
                PRESS [G]
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
