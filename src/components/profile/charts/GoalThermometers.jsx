import { motion } from 'framer-motion'

function formatINR(n) {
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`
  if (n >= 1000) return `₹${(n / 1000).toFixed(0)}k`
  return `₹${n}`
}

export default function GoalThermometers({ goals }) {
  return (
    <div className="-mx-2 overflow-x-auto px-2 pb-1 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
      <div className="flex min-w-[280px] items-end justify-center gap-3 sm:min-w-0 sm:gap-4 md:gap-6">
        {goals.map((goal, i) => {
          const pct = Math.round((goal.saved / goal.target) * 100)
          return (
            <motion.div
              key={goal.id}
              className="flex min-w-[72px] flex-1 flex-col items-center sm:min-w-0 sm:flex-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
            >
              <span className="mb-1.5 text-base sm:mb-2 sm:text-lg">{goal.icon}</span>
              <div className="relative h-28 w-8 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-inner sm:h-36 sm:w-10 md:h-44 md:w-12">
                <motion.div
                  className="absolute bottom-0 left-0 right-0 rounded-full"
                  style={{
                    background: `linear-gradient(0deg, ${goal.color} 0%, ${goal.color}cc 60%, ${goal.color}88 100%)`,
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${pct}%` }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
                />
                <div className="absolute inset-x-0 top-1.5 flex justify-center sm:top-2">
                  <span className="rounded-full bg-white/90 px-1 py-0.5 text-[8px] font-bold text-slate-700 shadow-sm sm:px-1.5 sm:text-[9px]">
                    {pct}%
                  </span>
                </div>
                {[25, 50, 75].map((tick) => (
                  <div
                    key={tick}
                    className="absolute left-0.5 right-0.5 border-t border-dashed border-slate-300/60 sm:left-1 sm:right-1"
                    style={{ bottom: `${tick}%` }}
                  />
                ))}
              </div>
              <p className="mt-1.5 max-w-[64px] text-center text-[9px] font-semibold leading-tight text-slate-800 sm:mt-2 sm:max-w-[72px] sm:text-[10px]">
                {goal.title}
              </p>
              <p className="text-center text-[8px] text-slate-500 sm:text-[9px]">
                {formatINR(goal.saved)} / {formatINR(goal.target)}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
