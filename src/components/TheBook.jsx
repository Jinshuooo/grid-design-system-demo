import React from 'react'
import { BookOpen, Layers, Sparkles } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function TheBook() {
  const { isZh } = useLang()

  return (
    <section id="the-book" className="py-16 md:py-24 relative" aria-labelledby="section-book-title">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="grid-locked mb-10 flex items-start space-x-4" data-grid-label="COL 1–12">
          <span className="text-3xl md:text-4xl font-black text-[#0071e3] font-mono leading-none">
            01
          </span>
          <div>
            <h2 id="section-book-title" className="text-2xl md:text-3xl font-black text-[#1d1d1f] tracking-tight">
              {isZh ? '著作本源与数字演进' : 'The Origin & The Digital Shift'}
            </h2>
            <p className="text-sm md:text-base text-[#86868b] mt-1">
              {isZh
                ? '为何一本出版于 1968 年的瑞士排版专著，至今仍是现代设计系统的底层蓝图'
                : 'Why a 1968 Swiss typography manual remains the foundational blueprint for modern design systems'}
            </p>
          </div>
        </div>

        {/* Asymmetrical 7/5 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Lead Glass Slab (7 columns on desktop) */}
          <div
            className="grid-locked lg:col-span-7 glass-panel rounded-3xl p-6 md:p-10 border border-white/80 shadow-glass-card hover:shadow-glass-hover transition-all duration-300 relative clip-notch-tr"
            data-grid-label="COL 1–7 (SPAN 7)"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0071e3]/10 border border-[#0071e3]/20 text-[#0071e3] text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isZh ? '历史文献与哲学' : 'HISTORICAL DOCUMENT'}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-black text-[#1d1d1f] tracking-tight mb-4">
              {isZh ? '让个人主观退后，让认知秩序前行' : 'Subordinating Vanity to Cognitive Clarity'}
            </h3>

            <p className="text-sm md:text-base text-[#1d1d1f] font-medium leading-relaxed mb-4">
              {isZh
                ? '1968 年由瑞士 Arthur Niggli 出版社推出的《平面设计中的网格系统》（Raster Systeme für die visuelle Gestaltung），将现代主义排版实验升华为一套严密、可量化的数学工作体系。'
                : 'Published in 1968 in Switzerland by Arthur Niggli, Josef Müller-Brockmann’s Grid Systems in Graphic Design codified decades of modernist typographic experimentation into an actionable, mathematical framework.'}
            </p>

            <p className="text-sm text-[#515154] leading-relaxed mb-4">
              {isZh
                ? '米勒-布罗克曼指出：网格不是冰冷的风格枷锁，而是一种设计伦理工具。通过将版面置于客观而理性的框架内，设计者克制自我炫技，将读者的阅读便利与信息层级置于首位。'
                : 'Müller-Brockmann argued that the grid is not a stylistic constraint, but an ethical instrument. By committing to an objective structural framework, the designer subordinates personal vanity to the reader’s need for fast, effortless comprehension.'}
            </p>

            <p className="text-sm text-[#515154] leading-relaxed">
              {isZh
                ? '在当今的前端工程中，书中的每一项核心思想都能与现代 Web 原生能力精准映射：版心边距对应容器内边距、栏间隙对应 CSS gap、分幅网格对应响应式组件槽位，而行高基线则演化为业界通行的 8px 间距规范。'
                : 'In modern digital engineering, every concept in the book maps 1:1 to frontend primitives: page margins become container paddings, gutters become CSS gap, modular fields become component containers, and the baseline grid becomes the universal 8px spacing scale.'}
            </p>

            <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center space-x-2 text-xs font-mono font-bold text-[#0071e3]">
              <Sparkles className="w-4 h-4" />
              <span>“ORDER GENERATES TRUST // 秩序孕育信任”</span>
            </div>
          </div>

          {/* Right Archival Record Card (5 columns on desktop, staggered with rotation) */}
          <div
            className="grid-locked lg:col-span-5 glass-panel rounded-3xl p-6 md:p-8 border border-white/80 shadow-glass-card hover:shadow-glass-hover transition-all duration-300 lg:translate-y-6 lg:rotate-1 relative"
            data-grid-label="COL 8–12 (SPAN 5)"
          >
            {/* Masking tape pin on top */}
            <div className="absolute -top-3 right-10 w-20 h-5 glass-tape rounded-sm rotate-2" aria-hidden="true" />
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-6">
              <div className="flex items-center space-x-2">
                <Layers className="w-4 h-4 text-[#0071e3]" />
                <span className="text-xs font-bold text-[#1d1d1f] tracking-wider uppercase">
                  {isZh ? '著作出版档案' : 'SYSTEM RECORD // 1968'}
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#0071e3]/10 text-[#0071e3] font-mono text-[11px] font-bold">
                CANON
              </span>
            </div>

            <dl className="space-y-4 text-xs">
              <div className="p-3 rounded-2xl bg-white/60 border border-black/[0.03]">
                <dt className="text-[#86868b] font-medium mb-1">
                  {isZh ? '原著德英题名' : 'Original Title'}
                </dt>
                <dd className="font-semibold text-[#1d1d1f]">
                  Raster Systeme für die visuelle Gestaltung / Grid Systems in Graphic Design
                </dd>
              </div>

              <div className="p-3 rounded-2xl bg-white/60 border border-black/[0.03]">
                <dt className="text-[#86868b] font-medium mb-1">
                  {isZh ? '中文引进版' : 'Chinese Edition'}
                </dt>
                <dd className="font-semibold text-[#1d1d1f]">
                  《平面设计中的网格系统》（上海人民美术出版社）
                </dd>
              </div>

              <div className="p-3 rounded-2xl bg-white/60 border border-black/[0.03]">
                <dt className="text-[#86868b] font-medium mb-1">
                  {isZh ? '著作者' : 'Author'}
                </dt>
                <dd className="font-semibold text-[#1d1d1f]">
                  Josef Müller-Brockmann (1914–1996)
                </dd>
              </div>

              <div className="p-3 rounded-2xl bg-white/60 border border-black/[0.03]">
                <dt className="text-[#86868b] font-medium mb-1">
                  {isZh ? '代表学派' : 'Design Movement'}
                </dt>
                <dd className="font-semibold text-[#1d1d1f]">
                  Swiss Style / International Typographic Style (国际主义平面设计风格)
                </dd>
              </div>

              <div className="p-3 rounded-2xl bg-[#0071e3]/5 border border-[#0071e3]/10">
                <dt className="text-[#0071e3] font-bold mb-1">
                  {isZh ? '现代前端映射' : 'Frontend Mirror'}
                </dt>
                <dd className="font-medium text-[#1d1d1f]">
                  CSS Grid Level 2 (Subgrid), Flexbox, 8pt Rhythm, Responsive Breakpoints
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
