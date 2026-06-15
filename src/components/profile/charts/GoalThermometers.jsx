import { motion } from 'framer-motion'

function formatINR(n) {
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`
  if (n >= 1000) return `₹${(n / 1000).toFixed(0)}k`
  return `₹${n}`
}

export default function GoalThermometers({ goals }) {
  return (
    <div className="flex items-end justify-center gap-4 sm:gap-6">
      {goals.map((goal, i) => {
        const pct = Math.round((goal.saved / goal.target) * 100)
        return (
          <motion.div
            key={goal.id}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
          >
            <span className="mb-2 text-lg">{goal.icon}</span>
            <div className="relative h-36 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-inner sm:h-44 sm:w-12">
              <motion.div
                className="absolute bottom-0 left-0 right-0 rounded-full"
                style={{
                  background: `linear-gradient(0deg, ${goal.color} 0%, ${goal.color}cc 60%, ${goal.color}88 100%)`,
                }}
                initial={{ height: 0 }}
                animate={{ height: `${pct}%` }}
                transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: 'easeOut' }}
              />
              <div className="absolute inset-x-0 top-2 flex justify-center">
                <span className="rounded-full bg-white/90 px-1.5 py-0.5 text-[9px] font-bold text-slate-700 shadow-sm">
                  {pct}%
                </span>
              </div>
              {[25, 50, 75].map((tick) => (
                <div
                  key={tick}
                  className="absolute left-1 right-1 border-t border-dashed border-slate-300/60"
                  style={{ bottom: `${tick}%` }}
                />
              ))}
            </div>
            <p className="mt-2 max-w-[72px] text-center text-[10px] font-semibold text-slate-800">
              {goal.title}
            </p>
            <p className="text-[9px] text-slate-500">
              {formatINR(goal.saved)} / {formatINR(goal.target)}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}
