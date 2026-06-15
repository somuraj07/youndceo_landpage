import { motion } from 'framer-motion'

export default function DonutChart({ segments, size = 160, centerValue, centerLabel = 'used' }) {
  const total = segments.reduce((s, seg) => s + seg.value, 0)
  let offset = 0
  const r = 15.9
  const circumference = 2 * Math.PI * r

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
        <circle cx="18" cy="18" r={r} fill="none" stroke="#f1f5f9" strokeWidth="3.5" />
        {segments.map((seg) => {
          const pct = seg.value / total
          const dash = pct * circumference
          const circle = (
            <motion.circle
              key={seg.label}
              cx="18"
              cy="18"
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth="3.5"
              strokeDasharray={`${dash} ${circumference}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              initial={{ strokeDasharray: `0 ${circumference}` }}
              animate={{ strokeDasharray: `${dash} ${circumference}` }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          )
          offset += dash
          return circle
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="font-display text-lg font-bold text-slate-900">{centerValue}</p>
        <p className="text-[10px] text-slate-500">{centerLabel}</p>
      </div>
    </div>
  )
}
