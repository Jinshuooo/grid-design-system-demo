import React from 'react'
import { LayoutGrid, Sparkles } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function FieldSystems() {
  const { isZh } = useLang()

  return (
    <section id="fields" className="py-16 md:py-24 relative" aria-labelledby="section-fields-title">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="grid-locked mb-12 flex items-start space-x-4" data-grid-label="COL 1–12">
          <span className="text-3xl md:text-4xl font-black text-[#0071e3] font-mono leading-none">
            03
          </span>
          <div>
            <h2 id="section-fields-title" className="text-2xl md:text-3xl font-black text-[#1d1d1f] tracking-tight">
              {isZh ? '三大经典分幅分栏系统' : 'The Three Modular Field Systems'}
            </h2>
            <p className="text-sm md:text-base text-[#86868b] mt-1">
              {isZh
                ? '错落呈现的原创教学图解：解析米勒-布罗克曼提出的 8 幅、20 幅与 32 幅模块化网格划分'
                : 'Staggered original educational diagrams illustrating Müller-Brockmann’s 8, 20, and 32 modular divisions'}
            </p>
          </div>
        </div>

        {/* Asymmetrical Staggered Fields Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* 8-Field System: Spans 5 columns on desktop */}
          <div
            className="grid-locked lg:col-span-5 glass-panel rounded-3xl p-6 md:p-8 border border-white/80 shadow-glass-card hover:shadow-glass-hover transition-all duration-300 clip-notch-bl"
            data-grid-label="COL 1–5 (SPAN 5)"
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl font-black text-[#0071e3] font-mono">08</span>
              <div>
                <h3 className="text-base font-bold text-[#1d1d1f]">
                  {isZh ? '8 幅网格系统 (2 × 4)' : '8-Field Grid (2 × 4)'}
                </h3>
                <span className="text-xs text-[#86868b]">
                  {isZh ? '低密度 · 海报、画册与开篇页' : 'Low Density · Posters & Brochures'}
                </span>
              </div>
            </div>

            {/* Original 8-Cell Diagram */}
            <div className="p-4 rounded-2xl bg-black/[0.02] border border-black/[0.04] mb-6">
              <div className="grid grid-cols-2 gap-2 h-44">
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-white/80 border border-black/[0.06] flex items-center justify-center text-xs font-mono font-bold text-[#86868b] hover:border-[#0071e3] hover:text-[#0071e3] transition-colors"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs md:text-sm text-[#515154] leading-relaxed mb-4">
              {isZh
                ? '分为 2 栏与 4 个纵向层级。适用于需要大面积留白、醒目标题以及大幅视觉摄影的场景，赋予版面极高的呼吸感与开阔气质。'
                : 'Divided into 2 columns and 4 vertical tiers. Ideal when generous white space, large headlines, and monumental photography are prioritized.'}
            </p>

            <div className="text-[11px] font-semibold text-[#0071e3] pt-3 border-t border-black/[0.04]">
              {isZh ? '前端应用：品牌落地页首屏、案例展示页' : 'Web match: Marketing landing hero & case studies'}
            </div>
          </div>

          {/* 20-Field System: Spans 7 columns on desktop */}
          <div
            className="grid-locked lg:col-span-7 glass-panel rounded-3xl p-6 md:p-8 border border-[#0071e3]/30 shadow-glass-card hover:shadow-glass-hover transition-all duration-300 relative clip-notch-tr lg:-rotate-0.5"
            data-grid-label="COL 6–12 (SPAN 7)"
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl font-black text-[#2997ff] font-mono">20</span>
              <div>
                <h3 className="text-base font-bold text-[#1d1d1f]">
                  {isZh ? '20 幅网格系统 (4 × 5) — 期刊黄金标准' : '20-Field Grid (4 × 5) — Editorial Hero'}
                </h3>
                <span className="text-xs text-[#86868b]">
                  {isZh ? '中密度 · 杂志期刊与主流应用' : 'Medium Density · Magazine Standard'}
                </span>
              </div>
            </div>

            {/* Original 20-Cell Diagram with 2x2 Hero cell */}
            <div className="p-4 rounded-2xl bg-black/[0.02] border border-black/[0.04] mb-6">
              <div className="grid grid-cols-4 gap-2 h-44">
                <div className="col-span-2 row-span-2 rounded-lg bg-gradient-to-br from-[#0071e3] to-[#2997ff] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                  HERO 2×2
                </div>
                <div className="rounded-lg bg-white/80 border border-black/[0.06] flex items-center justify-center text-[10px] font-mono text-[#86868b]">3</div>
                <div className="rounded-lg bg-white/80 border border-black/[0.06] flex items-center justify-center text-[10px] font-mono text-[#86868b]">4</div>
                <div className="rounded-lg bg-white/80 border border-black/[0.06] flex items-center justify-center text-[10px] font-mono text-[#86868b]">7</div>
                <div className="rounded-lg bg-white/80 border border-black/[0.06] flex items-center justify-center text-[10px] font-mono text-[#86868b]">8</div>
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i + 9}
                    className="rounded-lg bg-white/80 border border-black/[0.06] flex items-center justify-center text-[10px] font-mono text-[#86868b]"
                  >
                    {i + 9}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs md:text-sm text-[#515154] leading-relaxed mb-4">
              {isZh
                ? '瑞士编辑排版的中流砥柱。4 栏 × 5 行允许单栏文稿、双栏卡片与通栏导语灵活组合，在多变的版式中始终维系统一严整的视线韵律。'
                : 'The workhorse of Swiss editorial design. 4 columns by 5 rows allow rich combinations of single-span articles, two-span cards, and four-span lead sections without breaking rhythm.'}
            </p>

            <div className="text-[11px] font-semibold text-[#0071e3] pt-3 border-t border-black/[0.04]">
              {isZh ? '前端应用：SaaS 控制台、内容门户、电商信息流' : 'Web match: SaaS dashboards & news publications'}
            </div>
          </div>

          {/* 32-Field System: Full Width Panoramic (Spans 12 columns) */}
          <div
            className="grid-locked lg:col-span-12 glass-panel rounded-3xl p-6 md:p-8 border border-white/80 shadow-glass-card hover:shadow-glass-hover transition-all duration-300"
            data-grid-label="COL 1–12 (FULL SPAN 12)"
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl font-black text-[#1d1d1f] font-mono">32</span>
              <div>
                <h3 className="text-base font-bold text-[#1d1d1f]">
                  {isZh
                    ? '32 幅网格系统 (4 × 8) — 全景高密度信息矩阵'
                    : '32-Field Grid (4 × 8) — Panoramic High Density Matrix'}
                </h3>
                <span className="text-xs text-[#86868b]">
                  {isZh ? '高密度 · 科技词典、零件手册与行情报表' : 'High Density · Catalogs & Financial Sheets'}
                </span>
              </div>
            </div>

            {/* 32-cell fine grid */}
            <div className="p-4 rounded-2xl bg-black/[0.02] border border-black/[0.04] mb-6">
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 h-32">
                {Array.from({ length: 32 }, (_, i) => (
                  <div
                    key={i}
                    className="rounded-md bg-white/90 border border-black/[0.04] flex items-center justify-center text-[9px] font-mono text-[#86868b] hover:bg-[#0071e3]/10 transition-colors"
                  >
                    •
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs md:text-sm text-[#515154] leading-relaxed mb-4">
              {isZh
                ? '专为高信息密度设计：科技词典、产品技术手册、财务报表以及精细数据可视化面板，每一像素的微对齐都具备明确的参考坐标。'
                : 'Designed for high-information density: technical dictionaries, parts catalogs, complex balance sheets, and fine-grained data visualizations where micro-alignment is vital.'}
            </p>

            <div className="text-[11px] font-semibold text-[#0071e3] pt-3 border-t border-black/[0.04]">
              {isZh ? '前端应用：金融终端、行情报表、复杂管理后台' : 'Web match: Financial terminals & analytics suites'}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-[#86868b]">
          <span className="text-[#0071e3] mr-1">※</span>
          {isZh
            ? '原创教学示意图，依据《平面设计中的网格系统》理论原理构建，非书中原始印刷图版之复刻。'
            : 'Original educational visualization based on principles from Grid Systems in Graphic Design. Not a direct reproduction of book plates.'}
        </div>
      </div>
    </section>
  )
}
