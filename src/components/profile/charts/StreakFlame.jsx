import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function StreakFlame({ count = 21, days = 21 }) {
  const streakDays = Array.from({ length: days }, (_, i) => ({
    day: i + 1,
    active: i < count,
    today: i === count - 1,
  }))

  const weeks = Math.ceil(days / 7)

  return (
    <div className="dash-card h-full overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 p-4 sm:p-5">
      <div className="flex items-center gap-3 sm:gap-4">
        <motion.div
          className="relative flex h-12 w-12 shrink-0 items-center justify-center sm:h-16 sm:w-16"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400 to-gold-500 opacity-20 blur-md sm:rounded-2xl" />
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-gold-500 shadow-lg shadow-orange-300/50 sm:h-14 sm:w-14 sm:rounded-2xl">
            <Flame className="h-5 w-5 text-white sm:h-7 sm:w-7" />
          </div>
        </motion.div>
        <div className="min-w-0">
          <p className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">{count}</p>
          <p className="text-xs font-medium text-orange-600 sm:text-sm">Day streak — keep it alive!</p>
        </div>
      </div>

      {/* Mobile & tablet: 7-column week grid */}
      <div className="mt-4 grid grid-cols-7 gap-1 sm:gap-1.5 lg:hidden">
        {streakDays.map((d) => (
          <motion.div
            key={d.day}
            className={`aspect-square w-full rounded-md sm:rounded-lg ${
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

      {/* Desktop: horizontal streak bar */}
      <div className="mt-5 hidden gap-1 lg:flex">
        {streakDays.map((d) => (
          <motion.div
            key={d.day}
            className={`h-8 w-8 shrink-0 rounded-lg xl:h-9 xl:w-9 ${
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

      <p className="text-muted mt-3 text-center text-[10px] sm:text-xs">
        {weeks}-week streak calendar
      </p>
    </div>
  )
}
