import { motion } from 'framer-motion'
import { Activity, TrendingUp, TrendingDown, BarChart3 } from 'lucide-react'

const stocks = [
  { sym: 'NIFTY 50', price: '24,852.30', chg: '+0.84%', up: true },
  { sym: 'SENSEX', price: '81,456.12', chg: '+0.72%', up: true },
  { sym: 'RELIANCE', price: '2,845.50', chg: '+1.24%', up: true },
  { sym: 'TCS', price: '4,120.75', chg: '-0.31%', up: false },
  { sym: 'INFY', price: '1,890.20', chg: '+0.88%', up: true },
  { sym: 'HDFCBANK', price: '1,720.40', chg: '+0.52%', up: true },
  { sym: 'BTC/USD', price: '67,420', chg: '+2.14%', up: true },
  { sym: 'ETH/USD', price: '3,512', chg: '+1.87%', up: true },
]

export default function MarketTicker() {
  const items = [...stocks, ...stocks]

  return (
    <section
      id="markets"
      className="border-y border-navy-100/80 bg-white/50 py-4 backdrop-blur-sm sm:py-6"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-3 flex flex-wrap items-center gap-2 sm:mb-4 sm:gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-50 text-navy-600">
            <BarChart3 className="h-4 w-4" />
          </div>
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
          </span>
          <p className="text-xs font-semibold text-slate-900 sm:text-sm">Live Market Prices</p>
          <span className="inline-flex items-center gap-1 text-[10px] text-slate-500 sm:text-xs">
            <Activity className="h-3 w-3" />
            Updated in real time
          </span>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="animate-ticker flex w-max gap-4 sm:gap-6">
          {items.map((stock, i) => (
            <motion.div
              key={`${stock.sym}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-xl border border-navy-100 bg-white px-4 py-2.5 shadow-sm shadow-navy-500/5 sm:gap-3 sm:px-5 sm:py-3"
              whileHover={{
                scale: 1.04,
                borderColor: 'rgba(147, 197, 253, 0.8)',
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.12)',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              {stock.up ? (
                <TrendingUp className="h-3.5 w-3.5 text-brand-600" />
              ) : (
                <TrendingDown className="h-3.5 w-3.5 text-red-500" />
              )}
              <span className="text-xs font-bold text-slate-900 sm:text-sm">{stock.sym}</span>
              <span className="text-xs text-slate-600 sm:text-sm">{stock.price}</span>
              <span
                className={`text-xs font-semibold sm:text-sm ${
                  stock.up ? 'text-brand-600' : 'text-red-500'
                }`}
              >
                {stock.chg}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
