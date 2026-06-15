import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function StreakFlame({ count = 21, days = 21 }) {
  const streakDays = Array.from({ length: days }, (_, i) => ({
    day: i + 1,
    active: i < count,
    today: i === count - 1,
  }))

  return (
    <div className="dash-card overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5">
      <div className="flex items-center gap-4">
        <motion.div
          className="relative flex h-16 w-16 items-center justify-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400 to-gold-500 opacity-20 blur-md" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-gold-500 shadow-lg shadow-orange-300/50">
            <Flame className="h-7 w-7 text-white" />
          </div>
        </motion.div>
        <div>
          <p className="font-display text-3xl font-bold text-slate-900">{count}</p>
          <p className="text-sm font-medium text-orange-600">Day streak — keep it alive!</p>
        </div>
      </div>

      <div className="mt-5 flex gap-1 overflow-x-auto pb-1">
        {streakDays.map((d) => (
          <motion.div
            key={d.day}
            className={`h-8 w-8 shrink-0 rounded-lg ${
              d.today
                ? 'bg-gradient-to-t from-orange-500 to-gold-400 ring-2 ring-orange-300 ring-offset-1'
                : d.active
                  ? 'bg-gradient-to-t from-orange-400/80 to-gold-400/80'
                  : 'bg-slate-100'
            }`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: d.day * 0.02 }}
            style={{ transformOrigin: 'bottom' }}
            title={`Day ${d.day}`}
          />
        ))}
      </div>
    </div>
  )
}
