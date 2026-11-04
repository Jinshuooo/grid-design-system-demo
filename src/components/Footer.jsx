import React from 'react'
import { LayoutGrid, ArrowUp } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { isZh } = useLang()

  const scrollToTop = e => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 border-t border-black/[0.06] bg-[#f5f5f7]/60 text-xs text-[#86868b]">
      <div className="max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-black/[0.06]">
          {/* Brand Info (7 cols) */}
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center space-x-2 text-[#1d1d1f] font-bold">
              <div className="w-5 h-5 rounded-md bg-[#0071e3] text-white flex items-center justify-center">
                <LayoutGrid className="w-3 h-3" />
              </div>
              <span className="text-sm tracking-tight">GRID DESIGN SYSTEM</span>
            </div>
            <p className="max-w-md text-[#515154] leading-relaxed">
              {isZh
                ? '熔铸中国古法朱丝栏刻版秩序与瑞士国际排版学派，连接现代 CSS Grid、Tailwind 及跨端组件工程。'
                : 'Bridging ancient Chinese ruled manuscripts and Swiss International Typographic Style with modern CSS Grid, Tailwind, and React.'}
            </p>
          </div>

          {/* Specs List (5 cols) */}
          <div className="md:col-span-5 space-y-2">
            <div className="text-[11px] font-bold text-[#1d1d1f] tracking-wider uppercase mb-2">
              {isZh ? '框架设计规格' : 'FRAMEWORK SPECIFICATIONS'}
            </div>
            <ul className="space-y-1.5 font-mono text-[11px]">
              <li className="flex justify-between">
                <span>Baseline Grid:</span>
                <strong className="text-[#1d1d1f]">8px / 4px sub-grid</strong>
              </li>
              <li className="flex justify-between">
                <span>Columns:</span>
                <strong className="text-[#1d1d1f]">4 (mobile) / 8 (tablet) / 12 (desktop)</strong>
              </li>
              <li className="flex justify-between">
                <span>Fluid Container:</span>
                <strong className="text-[#1d1d1f]">max 1240px (centered)</strong>
              </li>
              <li className="flex justify-between">
                <span>Stack:</span>
                <strong className="text-[#0071e3]">React 18 + Vite + Tailwind CSS</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026. Layout and demonstration code licensed under the MIT License.</p>
          <a
            href="#main-content"
            onClick={scrollToTop}
            className="flex items-center space-x-1 font-semibold text-[#0071e3] hover:underline"
          >
            <span>{isZh ? '返回顶部' : 'BACK TO TOP'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
