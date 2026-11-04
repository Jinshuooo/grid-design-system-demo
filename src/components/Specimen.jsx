import React from 'react'
import { Ruler, Type, ArrowUpRight } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Specimen() {
  const { isZh } = useLang()

  const spacingTokens = [
    { name: '--space-0-5', px: '4px', height: '4px', labelEn: '4px sub-grid', labelZh: '4px 微调步长' },
    { name: '--space-1', px: '8px', height: '8px', labelEn: 'Base module', labelZh: '基础单元' },
    { name: '--space-2', px: '16px', height: '16px', labelEn: 'Card padding', labelZh: '卡片常规内边距' },
    { name: '--space-3', px: '24px', height: '24px', labelEn: 'Default gutter', labelZh: '标准栏间隙' },
    { name: '--space-4', px: '32px', height: '32px', labelEn: 'Section pad', labelZh: '区块间距' },
    { name: '--space-6', px: '48px', height: '48px', labelEn: 'Major break', labelZh: '主要分隔' },
    { name: '--space-8', px: '64px', height: '64px', labelEn: 'Page section', labelZh: '大区段垂直留白' },
    { name: '--space-12', px: '96px', height: '96px', labelEn: 'Hero vertical', labelZh: '首屏宏观节奏' },
  ]

  const typeScales = [
    {
      level: 'DISPLAY // 3XL',
      specs: '40px / 48px leading (8×6)',
      textEn: 'Visual Order is Ethics',
      textZh: '视觉秩序即设计伦理',
      className: 'text-3xl sm:text-4xl font-black text-[#1d1d1f]',
    },
    {
      level: 'TITLE // 2XL',
      specs: '32px / 40px leading (8×5)',
      textEn: 'Subdividing the Type Area into Equal Fields',
      textZh: '将版心严密划分为均等模块单元',
      className: 'text-2xl sm:text-3xl font-extrabold text-[#1d1d1f]',
    },
    {
      level: 'SUBTITLE // XL',
      specs: '24px / 32px leading (8×4)',
      textEn: 'The 12-Column Grid Enables 2, 3, 4, and 6 Equal Divisions',
      textZh: '12 栏系统完美支持 2、3、4 与 6 栏等分划分',
      className: 'text-xl sm:text-2xl font-bold text-[#1d1d1f]',
    },
    {
      level: 'BODY DEFAULT // BASE',
      specs: '16px / 24px leading (8×3)',
      textEn:
        'Optimal reading length is 45 to 75 characters per line. By anchoring line-height to 24px, all components, cards, and sidebars snap to an identical vertical beat across breakpoints.',
      textZh:
        '正文最佳阅读行长为每行 45 至 75 个西文字符或 25 至 40 个中文字符。行高锚定为 24px，确保各类卡片、侧边栏及组件在跨端响应时皆能精准吸附在同一垂直节拍上。',
      className: 'text-sm sm:text-base font-normal text-[#515154] leading-relaxed',
    },
    {
      level: 'CAPTION // XS',
      specs: '12px / 16px leading (8×2)',
      textEn: 'FIG 1.0 — Josef Müller-Brockmann, Zurich School of Arts and Crafts (Kunstgewerbeschule Zürich).',
      textZh: '图 1.0 — 约瑟夫·米勒-布罗克曼，苏黎世应用艺术学院教学体系图例。',
      className: 'text-xs font-medium text-[#86868b]',
    },
  ]

  return (
    <section id="specimen" className="py-16 md:py-24 relative" aria-labelledby="section-specimen-title">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="grid-locked mb-12 flex items-start space-x-4" data-grid-label="COL 1–12">
          <span className="text-3xl md:text-4xl font-black text-[#0071e3] font-mono leading-none">
            05
          </span>
          <div>
            <h2 id="section-specimen-title" className="text-2xl md:text-3xl font-black text-[#1d1d1f] tracking-tight">
              {isZh ? '8px 基线节奏与字阶标尺' : 'The 8px Baseline & Type Specimen'}
            </h2>
            <p className="text-sm md:text-base text-[#86868b] mt-1">
              {isZh
                ? '基于 8px 严格倍数（辅以 4px 微调标尺）统驭的字号行高、内间距与组件标尺'
                : 'Strict multiples of 8px (with 4px sub-grid) governing line-heights, margins, paddings, and components'}
            </p>
          </div>
        </div>

        {/* Spacing Token Bar Section */}
        <div
          className="grid-locked glass-panel rounded-3xl p-6 md:p-8 border border-white/80 shadow-glass-card hover:shadow-glass-hover transition-all duration-300 mb-8"
          data-grid-label="COL 1–12"
        >
          <div className="flex items-center space-x-2 text-xs font-bold text-[#0071e3] uppercase tracking-wider mb-6">
            <Ruler className="w-4 h-4" />
            <span>{isZh ? '间距令牌标尺（8PX 基准倍数）' : 'SPACING TOKEN SCALE (MULTIPLES OF 8PX)'}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {spacingTokens.map((token, i) => (
              <div
                key={i}
                className="p-3 rounded-2xl bg-white/70 border border-black/[0.04] flex flex-col justify-between items-center text-center shadow-glass-sm hover:border-[#0071e3]/30 transition-all h-36"
              >
                <div className="w-full flex items-end justify-center h-20 pb-2">
                  <div
                    className="w-12 bg-gradient-to-t from-[#0071e3] to-[#2997ff] rounded-md transition-all shadow-sm"
                    style={{ height: token.height }}
                  />
                </div>
                <div className="w-full pt-2 border-t border-black/[0.04]">
                  <div className="text-[10px] font-mono font-bold text-[#1d1d1f]">{token.name}</div>
                  <div className="text-xs font-black text-[#0071e3]">{token.px}</div>
                  <div className="text-[9px] text-[#86868b] truncate">{isZh ? token.labelZh : token.labelEn}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typographic Scale Specimen */}
        <div
          className="grid-locked glass-panel rounded-3xl p-6 md:p-10 border border-white/80 shadow-glass-card hover:shadow-glass-hover transition-all duration-300"
          data-grid-label="COL 1–12"
        >
          <div className="flex items-center space-x-2 text-xs font-bold text-[#0071e3] uppercase tracking-wider mb-8">
            <Type className="w-4 h-4" />
            <span>{isZh ? '对齐 8/4PX 行高基线的排版字阶' : 'TYPOGRAPHY SCALE ALIGNED TO 8/4PX LEADING'}</span>
          </div>

          <div className="space-y-8 divide-y divide-black/[0.06]">
            {typeScales.map((item, i) => (
              <div key={i} className={i > 0 ? 'pt-8' : ''}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2 font-mono">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0071e3]/10 text-[#0071e3]">
                    {item.level}
                  </span>
                  <span className="text-xs text-[#86868b]">{item.specs}</span>
                </div>
                <div className={item.className}>
                  {isZh ? item.textZh : item.textEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
