import { motion } from 'framer-motion'

export default function FluidSavings({ percent = 68, label = 'Total Savings' }) {
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <div className="relative h-40 overflow-hidden rounded-3xl border-2 border-white bg-gradient-to-b from-slate-50 to-navy-50 shadow-inner">
        <motion.div
          className="absolute -left-[10%] w-[120%]"
          style={{ bottom: `${percent - 8}%` }}
          animate={{ x: [0, -8, 0], y: [0, 3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 200 40" className="w-full" preserveAspectRatio="none">
            <path
              d="M0,20 Q25,5 50,20 T100,20 T150,20 T200,20 L200,40 L0,40 Z"
              fill="url(#fluidGrad)"
            />
            <defs>
              <linearGradient id="fluidGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-500/90 via-navy-500/80 to-navy-400/60"
          initial={{ height: 0 }}
          animate={{ height: `${percent}%` }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.p
            className="font-display text-3xl font-bold text-white drop-shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            {percent}%
          </motion.p>
          <p className="text-xs font-medium text-white/90">{label}</p>
        </div>
        {[20, 40, 60, 80].map((tick) => (
          <div
            key={tick}
            className="absolute left-2 right-2 border-t border-dashed border-white/25"
            style={{ bottom: `${tick}%` }}
          />
        ))}
      </div>
    </div>
  )
}
