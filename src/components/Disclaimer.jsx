import React from 'react'
import { ShieldAlert, Scale, CheckCircle2 } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Disclaimer() {
  const { isZh } = useLang()

  return (
    <section id="disclaimer" className="py-16 md:py-24 relative" aria-labelledby="section-disclaimer-title">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6">
        <div
          className="grid-locked glass-panel rounded-3xl p-6 md:p-10 border border-[#0071e3]/20 shadow-glass-card"
          data-grid-label="COL 1–12"
        >
          {/* Header Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0071e3]/10 border border-[#0071e3]/20 text-[#0071e3] text-xs font-bold tracking-wider uppercase mb-6">
            <Scale className="w-3.5 h-3.5" />
            <span>{isZh ? '法律声明与非侵权承诺' : 'LEGAL NOTICE & NON-INFRINGEMENT STATEMENT'}</span>
          </div>

          <h2 id="section-disclaimer-title" className="text-xl md:text-2xl font-black text-[#1d1d1f] tracking-tight mb-8">
            {isZh ? '独立教学致敬与前端技术演示声明' : 'Independent Educational Tribute & Demonstration'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed text-[#515154]">
            {/* English Column */}
            <div className="space-y-4" lang="en">
              <div className="p-4 rounded-2xl bg-white/60 border border-black/[0.04]">
                <strong className="text-[#1d1d1f] block mb-1">
                  1. Non-Commercial &amp; Educational Purpose:
                </strong>
                This webpage is an independent, non-commercial educational project created as a real-world demonstration of the open-source <em>Grid Design System</em> agent skill.
              </div>

              <div className="p-4 rounded-2xl bg-white/60 border border-black/[0.04]">
                <strong className="text-[#1d1d1f] block mb-1">
                  2. No Affiliation:
                </strong>
                This project is not affiliated with, endorsed by, authorized by, or in any way officially connected with the estate of Josef Müller-Brockmann, Verlag Arthur Niggli, Shanghai People's Fine Arts Publishing House (上海人民美术出版社), or the book’s translators.
              </div>

              <div className="p-4 rounded-2xl bg-white/60 border border-black/[0.04]">
                <strong className="text-[#1d1d1f] block mb-1">
                  3. Original Design &amp; Content:
                </strong>
                No copyrighted artwork, cover scans, photography, or verbatim textual content from <em>Grid Systems in Graphic Design</em> is reproduced or hosted on this site. The layout, visual styling, color palette, diagrams, and explanatory texts are entirely original creative works inspired by the principles of Swiss typographic theory.
              </div>

              <div className="p-4 rounded-2xl bg-white/60 border border-black/[0.04]">
                <strong className="text-[#1d1d1f] block mb-1">
                  4. Nominative Reference &amp; Trademark Notice:
                </strong>
                All references to book titles, authors, and publishing entities are made solely for identification, historical commentary, and educational analysis. All trademarks and copyrights belong to their respective owners.
              </div>
            </div>

            {/* Chinese Column */}
            <div className="space-y-4" lang="zh-CN">
              <div className="p-4 rounded-2xl bg-white/60 border border-black/[0.04]">
                <strong className="text-[#1d1d1f] block mb-1">
                  一、非商业教学性质：
                </strong>
                本页面为完全独立、非商业性质的开源技术与设计演示，旨在展示 <em>Grid Design System</em> 技能在现代前端环境下的实际落地效果。
              </div>

              <div className="p-4 rounded-2xl bg-white/60 border border-black/[0.04]">
                <strong className="text-[#1d1d1f] block mb-1">
                  二、无任何官方关联：
                </strong>
                本项目与约瑟夫·米勒-布罗克曼遗产机构、瑞士 Arthur Niggli 出版社、上海人民美术出版社及中文版翻译者之间没有任何雇佣、官方授权、赞助或商业合作关系。
              </div>

              <div className="p-4 rounded-2xl bg-white/60 border border-black/[0.04]">
                <strong className="text-[#1d1d1f] block mb-1">
                  三、原创设计与内容承诺：
                </strong>
                本页面严格杜绝侵权行为，未转录、扫描或复刻《平面设计中的网格系统》一书受版权保护的任何封面版画、摄影照片或原书正文片段。所有版面构图、配色体系、CSS 代码与 SVG 图例均为全新原创，旨在诠释网格设计系统的通用原理。
              </div>

              <div className="p-4 rounded-2xl bg-white/60 border border-black/[0.04]">
                <strong className="text-[#1d1d1f] block mb-1">
                  四、指称性引用声明：
                </strong>
                页面中对书名、作者名及出版机构的提及，仅用于学术评述、历史源流考证及文化识别目的。所有相关商标、著作权及合法权益均归各自权利人所有。
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-black/[0.06] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#86868b] gap-2">
            <span>OPEN SOURCE AGENT SKILL // GRID DESIGN SYSTEM</span>
            <span className="text-[#0071e3] font-bold">CLOUDFLARE PAGES READY · ZERO RUNTIME DEPENDENCIES</span>
          </div>
        </div>
      </div>
    </section>
  )
}
