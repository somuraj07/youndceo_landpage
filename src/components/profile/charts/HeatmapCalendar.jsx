import { motion } from 'framer-motion'

const levelColors = [
  'bg-slate-100',
  'bg-navy-100',
  'bg-navy-200',
  'bg-brand-200',
  'bg-brand-400',
]

export default function HeatmapCalendar({ data, weeks = 12 }) {
  const cells = data.slice(0, weeks * 7)

  return (
    <div className="w-full">
      <div className="-mx-1 overflow-x-auto px-1 pb-1 sm:mx-0 sm:overflow-visible sm:px-0">
        <div
          className="inline-grid min-w-[280px] grid-flow-col grid-rows-7 gap-1 sm:min-w-0 sm:w-full"
          style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
        >
          {cells.map((cell, i) => (
            <motion.div
              key={cell.day}
              className={`aspect-square min-h-[10px] min-w-[10px] rounded-[3px] sm:min-h-0 sm:min-w-0 ${
                levelColors[cell.value] || levelColors[0]
              } ${cell.value >= 4 ? 'ring-1 ring-brand-400/40' : ''}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.008 }}
              title={`Activity level ${cell.value}`}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="shrink-0 text-[10px] text-slate-400">Less</span>
        <div className="flex gap-1">
          {levelColors.map((c, i) => (
            <div key={i} className={`h-2 w-2 rounded-sm sm:h-2.5 sm:w-2.5 ${c}`} />
          ))}
        </div>
        <span className="shrink-0 text-[10px] text-slate-400">More</span>
      </div>
    </div>
  )
}
