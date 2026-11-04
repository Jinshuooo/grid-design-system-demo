import React from 'react'
import { Sparkles } from 'lucide-react'

export default function Marquee() {
  const items = [
    'SURFACE CHAOS // 自由表象',
    'HIDDEN ORDER // 精确隐序',
    '8PX BASELINE RHYTHM // 八像素基线',
    '4 · 8 · 12 RESPONSIVE CANON // 响应式法则',
    'CUPERTINO GLASS // 质感磨砂玻璃',
    'CSS GRID & SUBGRID // 网页栅格原语',
    'MÜLLER-BROCKMANN // 瑞士现代排版',
  ]

  return (
    <div className="w-full py-3 overflow-hidden glass-panel border-y border-white/60 relative z-10" aria-hidden="true">
      <div className="marquee-track flex items-center space-x-8 text-xs font-bold tracking-wider text-[#86868b] uppercase">
        {items.concat(items).map((text, idx) => (
          <React.Fragment key={idx}>
            <span className="flex-shrink-0 hover:text-[#0071e3] transition-colors">{text}</span>
            <Sparkles className="w-3 h-3 text-[#0071e3]/60 flex-shrink-0" />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
