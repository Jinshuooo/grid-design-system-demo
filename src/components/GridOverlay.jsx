import React from 'react'

export default function GridOverlay({ showGrid }) {
  if (!showGrid) return null

  // Columns 1..12 with responsive visibility
  const columns = Array.from({ length: 12 }, (_, i) => i + 1)

  return (
    <div
      id="grid-overlay"
      className="fixed inset-0 z-[999] pointer-events-none grid-overlay-active"
      aria-hidden="true"
    >
      <div className="max-w-[1240px] mx-auto h-full px-4 md:px-6">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 h-full">
          {columns.map(col => {
            // cols 1..4: always visible
            // cols 5..8: hidden on mobile, visible on tablet+
            // cols 9..12: hidden on mobile & tablet, visible on desktop
            let visibilityClass = ''
            if (col >= 5 && col <= 8) {
              visibilityClass = 'hidden md:block'
            } else if (col >= 9) {
              visibilityClass = 'hidden lg:block'
            }

            return (
              <div
                key={col}
                className={`grid-overlay-col h-full bg-[#0071e3]/[0.05] border-x border-dashed border-[#0071e3]/30 relative ${visibilityClass}`}
              >
                <span className="absolute top-1 left-1 bg-[#0071e3] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm opacity-80">
                  {col}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
