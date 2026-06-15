import { motion } from 'framer-motion'

export default function SparkGauge({ value, max = 3000, label, color = '#22c55e', size = 140 }) {
  const pct = Math.min(value / max, 1)
  const r = 52
  const cx = 60
  const cy = 60
  const startAngle = Math.PI
  const endAngle = 0
  const angle = startAngle + (endAngle - startAngle) * pct

  const arcX = cx + r * Math.cos(angle)
  const arcY = cy + r * Math.sin(angle)

  const bgPath = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`
  const fgPath = pct >= 1
    ? bgPath
    : `M ${cx - r} ${cy} A ${r} ${r} 0 ${pct > 0.5 ? 1 : 0} 1 ${arcX} ${arcY}`

  return (
    <div className="relative inline-flex flex-col items-center">
      <svg width={size} height={size * 0.65} viewBox="0 0 120 70">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path d={bgPath} fill="none" stroke="#e2e8f0" strokeWidth="8" strokeLinecap="round" />
        <motion.path
          d={fgPath}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
          const a = startAngle + (endAngle - startAngle) * t
          const x1 = cx + (r - 6) * Math.cos(a)
          const y1 = cy + (r - 6) * Math.sin(a)
          const x2 = cx + (r + 2) * Math.cos(a)
          const y2 = cy + (r + 2) * Math.sin(a)
          return (
            <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#cbd5e1" strokeWidth="1.5" />
          )
        })}
        <motion.circle
          cx={arcX}
          cy={arcY}
          r="5"
          fill="white"
          stroke={color}
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
        />
      </svg>
      <div className="-mt-2 text-center">
        <p className="font-display text-xl font-bold text-slate-900">{value.toLocaleString()}</p>
        {label && <p className="text-[10px] text-slate-500">{label}</p>}
      </div>
    </div>
  )
}
