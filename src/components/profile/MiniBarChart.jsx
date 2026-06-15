import { motion } from 'framer-motion'

export default function MiniBarChart({ data }) {
  const max = Math.max(...data.map((d) => d.value))

  return (
    <div className="mt-5 flex items-end justify-between gap-2" style={{ height: 140 }}>
      {data.map((item, i) => (
        <div key={item.label} className="flex flex-1 flex-col items-center gap-1">
          <motion.div
            className={`w-full max-w-[32px] rounded-t-lg ${item.color}`}
            initial={{ height: 0 }}
            animate={{ height: `${(item.value / max) * 100}%` }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            style={{ minHeight: 4 }}
          />
          <span className="text-[10px] text-slate-500">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
