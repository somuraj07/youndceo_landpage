import { motion } from 'framer-motion'

export default function BubbleSpendMap({ segments, totalBudget }) {
  const total = segments.reduce((s, seg) => s + seg.value, 0)
  const maxVal = Math.max(...segments.map((s) => s.value))

  const positions = [
    { x: '28%', y: '35%', size: 1 },
    { x: '58%', y: '28%', size: 0.85 },
    { x: '72%', y: '55%', size: 0.7 },
    { x: '38%', y: '62%', size: 0.65 },
    { x: '18%', y: '58%', size: 0.55 },
  ]

  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[280px] sm:max-w-sm md:max-w-md">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-navy-50/80 via-white to-brand-50/60 sm:rounded-3xl" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-lg ring-4 ring-white/80 backdrop-blur-sm sm:h-20 sm:w-20 md:h-24 md:w-24"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <div className="flex h-full flex-col items-center justify-center">
          <p className="font-display text-base font-bold text-slate-900 sm:text-lg">
            {Math.round((total / totalBudget) * 100)}%
          </p>
          <p className="text-[8px] font-medium text-slate-500 sm:text-[9px]">spent</p>
        </div>
      </motion.div>

      {segments.map((seg, i) => {
        const pos = positions[i] || positions[0]
        const size = (36 + (seg.value / maxVal) * 44) * pos.size
        return (
          <motion.div
            key={seg.label}
            className="absolute flex items-center justify-center rounded-full text-center shadow-lg sm:shadow-xl"
            style={{
              left: pos.x,
              top: pos.y,
              width: `${size * 1.15}px`,
              height: `${size * 1.15}px`,
              background: `radial-gradient(circle at 30% 30%, ${seg.color}ee, ${seg.color}99)`,
              transform: 'translate(-50%, -50%)',
              boxShadow: `0 8px 24px ${seg.color}44`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.08, zIndex: 10 }}
          >
            <div className="px-0.5 sm:px-1">
              <p className="text-[7px] font-bold text-white drop-shadow-sm sm:text-[9px]">{seg.label}</p>
              <p className="text-[6px] text-white/90 sm:text-[8px]">₹{(seg.value / 1000).toFixed(1)}k</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
