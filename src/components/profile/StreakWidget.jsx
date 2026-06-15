import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

const streakDays = Array.from({ length: 21 }, (_, i) => ({
  day: i + 1,
  active: i < 21,
  today: i === 20,
}))

export default function StreakWidget({ count = 21 }) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-yellow-50 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-gold-500 shadow-md shadow-orange-200">
            <Flame className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-slate-900">{count}</p>
            <p className="text-xs font-medium text-orange-600">Day Streak</p>
          </div>
        </div>
        <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold text-orange-700 uppercase tracking-wide">
          On Fire
        </span>
      </div>

      <div className="mt-4 grid grid-cols-7 gap-1.5 sm:grid-cols-11 lg:grid-cols-7">
        {streakDays.map((d) => (
          <motion.div
            key={d.day}
            className={`flex aspect-square items-center justify-center rounded-lg text-[9px] font-bold ${
              d.today
                ? 'bg-gradient-to-br from-orange-400 to-gold-500 text-white ring-2 ring-orange-300 ring-offset-1'
                : d.active
                  ? 'bg-gradient-to-br from-orange-300 to-gold-400 text-white'
                  : 'bg-slate-100 text-slate-400'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: d.day * 0.02 }}
            title={`Day ${d.day}`}
          >
            {d.day}
          </motion.div>
        ))}
      </div>
      <p className="text-muted mt-3 text-center text-[10px]">
        Keep learning daily to maintain your streak
      </p>
    </div>
  )
}
