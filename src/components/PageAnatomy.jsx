import React from 'react'
import { Scale, Code2, Sparkles } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function PageAnatomy() {
  const { isZh } = useLang()

  return (
    <section id="anatomy" className="py-16 md:py-24 relative overflow-hidden" aria-labelledby="section-anatomy-title">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="grid-locked mb-12 flex items-start space-x-4" data-grid-label="COL 1–12">
          <span className="text-3xl md:text-4xl font-black text-[#0071e3] font-mono leading-none">
            04
          </span>
          <div>
            <h2 id="section-anatomy-title" className="text-2xl md:text-3xl font-black text-[#1d1d1f] tracking-tight">
              {isZh ? '比例跨页结构与版心解剖' : 'Anatomy of a Proportional Spread'}
            </h2>
            <p className="text-sm md:text-base text-[#86868b] mt-1">
              {isZh
                ? '古典边距比例（Van de Graaf 2:3:4:6 与 Rosarivo 9×9）在现代前端视口几何中的映射'
                : 'Classical margin ratios (Van de Graaf 2:3:4:6 & Rosarivo 9×9) translated into CSS viewport geometry'}
            </p>
          </div>
        </div>

        {/* Spread Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Interactive Mockup Canvas (8 cols on desktop) */}
          <div
            className="grid-locked lg:col-span-8 glass-panel rounded-3xl p-6 md:p-10 border border-white/80 shadow-glass-card hover:shadow-glass-hover transition-all duration-300 relative clip-shard-angle"
            data-grid-label="COL 1–8 (SPAN 8)"
          >
            {/* Two-page spread mockup */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#f5f5f7]/80 border border-black/[0.04]">
              <div className="grid grid-cols-2 gap-4 h-64 sm:h-72">
                {/* Verso (Left) */}
                <div className="rounded-xl bg-white/90 border border-black/[0.06] p-3 sm:p-4 flex flex-col justify-between shadow-sm relative overflow-hidden">
                  <div className="text-[10px] font-mono font-bold text-[#86868b] text-center border-b border-black/[0.04] pb-1">
                    TOP (3) · 24px
                  </div>

                  <div className="my-auto mx-auto w-4/5 h-3/5 rounded-lg bg-[#0071e3]/10 border border-[#0071e3]/30 p-2 sm:p-3 flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="h-1.5 w-1/2 bg-[#0071e3] rounded" />
                      <div className="h-1 w-full bg-black/10 rounded" />
                      <div className="h-1 w-4/5 bg-black/10 rounded" />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-[#0071e3] text-center">
                      TYPE AREA (SATZSPIEGEL)
                    </span>
                  </div>

                  <div className="flex justify-between text-[9px] font-mono text-[#86868b] px-1">
                    <span>OUTER (4) · 32px</span>
                    <span>INNER (2) · 16px</span>
                  </div>
                  <div className="text-[10px] font-mono font-bold text-[#86868b] text-center border-t border-black/[0.04] pt-1">
                    BOTTOM (6) · 48px
                  </div>
                </div>

                {/* Recto (Right) */}
                <div className="rounded-xl bg-white/90 border border-black/[0.06] p-3 sm:p-4 flex flex-col justify-between shadow-sm relative overflow-hidden">
                  <div className="text-[10px] font-mono font-bold text-[#86868b] text-center border-b border-black/[0.04] pb-1">
                    TOP (3) · 24px
                  </div>

                  <div className="my-auto mx-auto w-4/5 h-3/5 rounded-lg bg-gradient-to-br from-[#0071e3]/10 to-[#2997ff]/20 border border-[#0071e3]/30 p-2 sm:p-3 flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="h-1.5 w-2/3 bg-[#2997ff] rounded" />
                      <div className="h-1 w-full bg-black/10 rounded" />
                      <div className="h-1 w-3/4 bg-black/10 rounded" />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-[#0071e3] text-center">
                      6 / 9 OF PAGE (44.4%)
                    </span>
                  </div>

                  <div className="flex justify-between text-[9px] font-mono text-[#86868b] px-1">
                    <span>INNER (2) · 16px</span>
                    <span>OUTER (4) · 32px</span>
                  </div>
                  <div className="text-[10px] font-mono font-bold text-[#86868b] text-center border-t border-black/[0.04] pt-1">
                    BOTTOM (6) · 48px
                  </div>
                </div>
              </div>
            </div>

            {/* Formula Chip */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="px-3 py-1 rounded-full bg-[#0071e3]/10 text-[#0071e3] font-mono font-bold">
                INNER : TOP : OUTER : BOTTOM = 2 : 3 : 4 : 6
              </span>
              <p className="text-xs text-[#86868b]">
                {isZh
                  ? '两页相接的中缝边距相加（2 + 2 = 4）恰等于单侧外边距（4），形成绝对和谐的视觉平衡。'
                  : 'Combined inner spine margins (2 + 2 = 4) equal one outer margin (4). Perfect spread balance.'}
              </p>
            </div>
          </div>

          {/* Right Code Column (4 cols on desktop) */}
          <div
            className="grid-locked lg:col-span-4 glass-panel rounded-3xl p-6 md:p-8 border border-white/80 shadow-glass-card hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between relative clip-notch-tr"
            data-grid-label="COL 9–12 (SPAN 4)"
          >
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0071e3] tracking-wider uppercase mb-3">
                <Code2 className="w-3.5 h-3.5" />
                <span>{isZh ? '前端盒模型映射' : 'CSS IMPLEMENTATION'}</span>
              </div>

              <h3 className="text-lg font-black text-[#1d1d1f] tracking-tight mb-2">
                {isZh ? '从双页跨版到 CSS 盒模型' : 'From Print Spread to CSS Box Model'}
              </h3>

              <p className="text-xs text-[#515154] leading-relaxed mb-4">
                {isZh
                  ? '在经典装帧设计中，留白边距绝非被动残留的空白；它们是为读者拇指持握预留的物理空间，以精妙张力烘托正文版心。'
                  : 'In classical book design, margins were not accidental empty space; they provided resting zones for thumbs and framed the text block with dynamic tension.'}
              </p>

              {/* Code block */}
              <div className="p-3.5 rounded-2xl bg-[#1d1d1f] text-white text-[11px] font-mono leading-relaxed overflow-x-auto shadow-sm">
                <div className="text-[#86868b]">// 2:3:4:6 ratio mapped to 8px base</div>
                <div className="text-[#2997ff]">.reading-container &#123;</div>
                <div className="pl-3">max-width: <span className="text-[#34c759]">720px</span>;</div>
                <div className="pl-3">margin-inline: auto;</div>
                <div className="pl-3">padding-top: <span className="text-[#ff9f0a]">24px</span>; <span className="text-[#86868b]">/* 3 × 8px */</span></div>
                <div className="pl-3">padding-bottom: <span className="text-[#ff9f0a]">48px</span>; <span className="text-[#86868b]">/* 6 × 8px */</span></div>
                <div className="pl-3">padding-inline: <span className="text-[#ff9f0a]">32px</span>; <span className="text-[#86868b]">/* 4 × 8px */</span></div>
                <div className="text-[#2997ff]">&#125;</div>
              </div>
            </div>

            {/* Song Dynasty parallel note */}
            <div className="mt-6 pt-4 border-t border-black/[0.06] text-xs">
              <span className="font-bold text-[#1d1d1f] block mb-1">
                {isZh ? '东方印证：宋版书“天二地一”' : 'Eastern Parallel: Song Dynasty "Tian Er Di Yi"'}
              </span>
              <p className="text-[#86868b] text-[11px] leading-relaxed">
                {isZh
                  ? '早在欧洲经典比例定型数百年之前，中国宋版书便确立了“天二地一”（天头高出地脚约一倍）的版面准则，为历代读者题跋、眉批提供互动评注区。'
                  : 'Centuries before European canonization, Chinese Song Dynasty woodblock printers practiced “天二地一” (Head margin twice the foot margin) as an interactive annotation zone.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
