import React from 'react'
import { CheckCircle2, Compass, Ruler, Sparkles } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Principles() {
  const { isZh } = useLang()

  return (
    <section id="principles" className="py-16 md:py-24 bg-[#1d1d1f] text-white relative overflow-hidden" aria-labelledby="section-principles-title">
      {/* Background soft ambient glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#0071e3]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2997ff]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="grid-locked mb-12 flex items-start space-x-4" data-grid-label="COL 1–12">
          <span className="text-3xl md:text-4xl font-black text-[#2997ff] font-mono leading-none">
            02
          </span>
          <div>
            <h2 id="section-principles-title" className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {isZh ? '四大核心法则 // 非对称布局' : 'Four Foundational Principles'}
            </h2>
            <p className="text-sm md:text-base text-[#86868b] mt-1">
              {isZh
                ? '请观察各模块如何在错落生动的表象下，严密贴合 12 栏轨道的数学划分（7+5、4+8）'
                : 'Notice how each block appears staggered, but snaps strictly to the 12-column grid tracks (7+5, 4+8)'}
            </p>
          </div>
        </div>

        {/* Asymmetrical Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Principle 01: Spans 7 columns on desktop with notch clip */}
          <div
            className="grid-locked lg:col-span-7 glass-panel-dark rounded-3xl p-6 md:p-10 border border-white/10 hover:border-[#0071e3]/50 transition-all duration-300 relative clip-notch-tr"
            data-grid-label="COL 1–7 (SPAN 7)"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl md:text-5xl font-black text-[#2997ff] font-mono">01</span>
              <span className="text-[11px] font-bold tracking-wider text-[#86868b] uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {isZh ? '伦理与认知' : 'ETHICS & COGNITION'}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-3">
              {isZh ? '秩序先于装饰' : 'Order Before Decoration'}
            </h3>

            <p className="text-sm text-[#a1a1a6] leading-relaxed mb-6">
              {isZh
                ? '视觉的和谐不是靠堆砌多余的装饰，而是通过剔除无序与杂乱来实现。网格提供了一套严谨的逻辑构架，使界面中每一处元素的定位皆有据可循。'
                : 'Visual harmony is not achieved by adding arbitrary flourishes, but by subtracting inconsistency. A grid provides a logical architecture where every element’s placement has a demonstrable reason.'}
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center space-x-2 text-xs text-[#2997ff] font-medium">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>{isZh ? '彻底杜绝随意的“魔术数值”（如 13px、17px）' : 'Rule: Eliminates arbitrary magic numbers (13px, 17px)'}</span>
            </div>
          </div>

          {/* Principle 02: Spans 5 columns on desktop with amber tape accent */}
          <div
            className="grid-locked lg:col-span-5 glass-panel-dark rounded-3xl p-6 md:p-8 border border-white/10 hover:border-[#2997ff]/50 transition-all duration-300 lg:translate-y-6 relative"
            data-grid-label="COL 8–12 (SPAN 5)"
          >
            {/* Glass tape accent */}
            <div className="absolute -top-3 right-8 w-16 h-4 glass-tape-amber rounded-sm rotate-3 pointer-events-none" aria-hidden="true" />

            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl md:text-5xl font-black text-[#34c759] font-mono">02</span>
              <span className="text-[11px] font-bold tracking-wider text-[#86868b] uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {isZh ? '工程化方法' : 'METHODOLOGY'}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-3">
              {isZh ? '网格即决策引擎' : 'The Grid as a Decision Engine'}
            </h3>

            <p className="text-sm text-[#a1a1a6] leading-relaxed mb-6">
              {isZh
                ? '与其在每个屏幕尺寸前反复纠结宽度与对齐，网格在系统层一次性确立了规则边界。排版布局由无休止的主观争辩，转变为高效清晰的规则运算。'
                : 'Instead of renegotiating width and alignment for every screen, the grid establishes constraints once. Decisions become mechanical calculations rather than endless aesthetic debates.'}
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center space-x-2 text-xs text-[#34c759] font-medium">
              <Compass className="w-4 h-4 flex-shrink-0" />
              <span>{isZh ? '预设标准 4 / 8 / 12 栏响应式转换规则' : 'Rule: Pre-calculated 4 / 8 / 12 column shifts'}</span>
            </div>
          </div>

          {/* Principle 03: Spans 4 columns on desktop */}
          <div
            className="grid-locked lg:col-span-4 glass-panel-dark rounded-3xl p-6 md:p-8 border border-white/10 hover:border-[#ff9f0a]/50 transition-all duration-300 relative clip-notch-bl"
            data-grid-label="COL 1–4 (SPAN 4)"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl md:text-5xl font-black text-[#ff9f0a] font-mono">03</span>
              <span className="text-[11px] font-bold tracking-wider text-[#86868b] uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {isZh ? '层级构建' : 'HIERARCHY'}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-black text-white tracking-tight mb-3">
              {isZh ? '排版决定度量标尺' : 'Typography Sets the Measure'}
            </h3>

            <p className="text-xs md:text-sm text-[#a1a1a6] leading-relaxed mb-6">
              {isZh
                ? '网格是从排版由内而外推演出来的，绝非先画一个空容器再强行塞入文字。正文字号与行高构筑垂直节奏，舒适阅读行长决定分栏宽度。'
                : 'The grid is built from typography upward, not imposed as an empty container. Body font size and leading define the vertical rhythm; comfortable line length dictates column widths.'}
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center space-x-2 text-xs text-[#ff9f0a] font-medium">
              <Ruler className="w-4 h-4 flex-shrink-0" />
              <span>{isZh ? '16px 正文 · 24px 行高 · 8px 垂直基线' : 'Rule: 16px body · 24px line-height · 8px beat'}</span>
            </div>
          </div>

          {/* Principle 04: Panoramic (Spans 8 columns on desktop) */}
          <div
            className="grid-locked lg:col-span-8 glass-panel-dark rounded-3xl p-6 md:p-8 border border-white/10 hover:border-[#0071e3]/50 transition-all duration-300 relative"
            data-grid-label="COL 5–12 (SPAN 8)"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl md:text-5xl font-black text-[#0071e3] font-mono">04</span>
              <span className="text-[11px] font-bold tracking-wider text-[#86868b] uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {isZh ? '自由之源' : 'CREATIVE FREEDOM'}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-3">
              {isZh ? '严苛约束孕育自由' : 'Constraints Create Freedom'}
            </h3>

            <p className="text-sm text-[#a1a1a6] leading-relaxed mb-6">
              {isZh
                ? '严格的网格绝不意味着单调刻板。一套成熟的复合栅格能够支撑极其大胆的非对称版面：8 栏巨幅陈述与 4 栏紧凑侧边呼应，层次丰富而生动。'
                : 'Far from creating monotony, an exact compound grid allows asymmetrical, dynamic layouts: hero statements spanning 8 columns alongside 4-column sidebars, or fluid multi-row alignments.'}
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center space-x-2 text-xs text-[#2997ff] font-medium">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span>{isZh ? '支持非对称划分（66/33、75/25、黄金比例）' : 'Rule: Enables dynamic 66/33, 75/25 & golden ratio splits'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
