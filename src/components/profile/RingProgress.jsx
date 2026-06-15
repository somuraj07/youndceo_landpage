import { motion } from 'framer-motion'

export default function RingProgress({ value, size = 72, stroke = 5, color = '#22c55e', label }) {
  const r = (size - stroke) / 2
  const circumference = 2 * Math.PI * r
  const dash = (value / 100) * circumference

  return (
    <div className="relative inline-flex flex-col items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - dash }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-sm font-bold text-slate-900">{value}%</span>
        {label && <span className="text-[8px] text-slate-500">{label}</span>}
      </div>
    </div>
  )
}
