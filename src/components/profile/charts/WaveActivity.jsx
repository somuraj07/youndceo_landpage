import { motion } from 'framer-motion'

function buildWavePath(data, width, height, padding = 8) {
  const max = Math.max(...data.map((d) => d.value), 1)
  const step = (width - padding * 2) / (data.length - 1)
  const points = data.map((d, i) => ({
    x: padding + i * step,
    y: height - padding - (d.value / max) * (height - padding * 2),
  }))

  let line = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]
    const curr = points[i]
    const cpx = (prev.x + curr.x) / 2
    line += ` C ${cpx} ${prev.y}, ${cpx} ${curr.y}, ${curr.x} ${curr.y}`
  }

  const area = `${line} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`
  return { line, area, points }
}

export default function WaveActivity({ data, height = 120 }) {
  const width = 320
  const { line, area, points } = buildWavePath(data, width, height)

  return (
    <div className="relative w-full overflow-hidden">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="waveStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
        </defs>
        <motion.path
          d={area}
          fill="url(#waveFill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.path
          d={line}
          fill="none"
          stroke="url(#waveStroke)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        {points.map((p, i) => (
          <motion.circle
            key={data[i].label}
            cx={p.x}
            cy={p.y}
            r="4"
            fill="white"
            stroke="#3b82f6"
            strokeWidth="2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + i * 0.08 }}
          />
        ))}
      </svg>
      <div className="mt-2 flex justify-between px-1">
        {data.map((d) => (
          <span key={d.label} className="text-[10px] font-medium text-slate-400">
            {d.label}
          </span>
        ))}
      </div>
    </div>
  )
}
