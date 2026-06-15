import { motion } from 'framer-motion'

export default function LineChart({ data, color = '#3b82f6', fill = 'rgba(59,130,246,0.1)', height = 120 }) {
  const max = Math.max(...data.map((d) => d.value))
  const min = Math.min(...data.map((d) => d.value))
  const range = max - min || 1
  const w = 100
  const h = 100
  const pad = 8

  const points = data.map((d, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2)
    const y = h - pad - ((d.value - min) / range) * (h - pad * 2)
    return `${x},${y}`
  })

  const linePath = `M ${points.join(' L ')}`
  const areaPath = `${linePath} L ${pad + ((data.length - 1) / (data.length - 1)) * (w - pad * 2)},${h - pad} L ${pad},${h - pad} Z`

  return (
    <div className="mt-5" style={{ height }}>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" preserveAspectRatio="none">
        <motion.path
          d={areaPath}
          fill={fill}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.path
          d={linePath}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        {data.map((d, i) => {
          const x = pad + (i / (data.length - 1)) * (w - pad * 2)
          const y = h - pad - ((d.value - min) / range) * (h - pad * 2)
          return (
            <motion.circle
              key={d.label}
              cx={x}
              cy={y}
              r="3"
              fill={color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            />
          )
        })}
      </svg>
      <div className="mt-2 flex justify-between">
        {data.map((d) => (
          <span key={d.label} className="text-[10px] text-slate-500">
            {d.label}
          </span>
        ))}
      </div>
    </div>
  )
}
