import { motion } from 'framer-motion'
import { Check, Lock } from 'lucide-react'

export default function PathConstellation({ nodes }) {
  const sorted = [...nodes].sort((a, b) => a.x - b.x)

  return (
    <div className="relative aspect-[5/2] w-full min-h-[140px]">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        {sorted.slice(0, -1).map((node, i) => {
          const next = sorted[i + 1]
          const x1 = `${node.x}%`
          const y1 = `${node.y}%`
          const x2 = `${next.x}%`
          const y2 = `${next.y}%`
          return (
            <motion.line
              key={`line-${node.id}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={node.done ? 'url(#pathGrad)' : '#e2e8f0'}
              strokeWidth="2"
              strokeDasharray={node.done ? '0' : '6 4'}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            />
          )
        })}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
        >
          <div
            className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 sm:h-11 sm:w-11 ${
              node.current
                ? 'border-gold-400 bg-gradient-to-br from-gold-300 to-gold-500 shadow-lg shadow-gold-400/40 ring-4 ring-gold-200/50'
                : node.done
                  ? 'border-brand-400 bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-md shadow-brand-400/30'
                  : 'border-slate-200 bg-white text-slate-400'
            }`}
          >
            {node.done ? (
              <Check className="h-4 w-4" strokeWidth={3} />
            ) : node.current ? (
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-white" />
            ) : (
              <Lock className="h-3.5 w-3.5" />
            )}
          </div>
          <p
            className={`absolute left-1/2 mt-1.5 w-16 -translate-x-1/2 text-center text-[9px] font-semibold sm:w-20 sm:text-[10px] ${
              node.current ? 'text-gold-600' : node.done ? 'text-brand-700' : 'text-slate-400'
            }`}
          >
            {node.title}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
