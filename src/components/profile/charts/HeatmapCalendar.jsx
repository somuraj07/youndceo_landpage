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
    <div>
      <div className="grid grid-flow-col grid-rows-7 gap-1" style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}>
        {cells.map((cell, i) => (
          <motion.div
            key={cell.day}
            className={`aspect-square rounded-[3px] ${levelColors[cell.value] || levelColors[0]} ${
              cell.value >= 4 ? 'ring-1 ring-brand-400/40' : ''
            }`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.008 }}
            title={`Activity level ${cell.value}`}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[10px] text-slate-400">Less</span>
        <div className="flex gap-1">
          {levelColors.map((c, i) => (
            <div key={i} className={`h-2.5 w-2.5 rounded-sm ${c}`} />
          ))}
        </div>
        <span className="text-[10px] text-slate-400">More</span>
      </div>
    </div>
  )
}
