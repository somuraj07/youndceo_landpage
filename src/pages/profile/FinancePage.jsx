import { motion } from 'framer-motion'
import { Wallet, Target, TrendingUp, ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { FadeIn } from '../../components/motion'
import BubbleSpendMap from '../../components/profile/charts/BubbleSpendMap'
import GoalThermometers from '../../components/profile/charts/GoalThermometers'
import FluidSavings from '../../components/profile/charts/FluidSavings'
import SparkGauge from '../../components/profile/charts/SparkGauge'
import { budgetSegments, budgetTotal, goals, savingsHistory } from '../../data/profileData'

const transactions = [
  { label: 'Swiggy Order', amount: -420, cat: 'Food', time: '2h ago' },
  { label: 'Salary Credit', amount: 45000, cat: 'Income', time: 'Yesterday' },
  { label: 'Metro Pass', amount: -800, cat: 'Transport', time: 'Yesterday' },
  { label: 'SIP Investment', amount: -5000, cat: 'Savings', time: '3 days ago' },
  { label: 'Netflix', amount: -649, cat: 'Entertainment', time: '4 days ago' },
]

const totalSpent = budgetSegments.reduce((s, b) => s + b.value, 0)
const totalSaved = goals.reduce((s, g) => s + g.saved, 0)
const totalTarget = goals.reduce((s, g) => s + g.target, 0)

export default function FinancePage() {
  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
        {[
          { label: 'Total Balance', value: '₹48,250', change: '+12.4%', up: true },
          { label: 'Spent This Month', value: `₹${totalSpent.toLocaleString()}`, change: `${Math.round((totalSpent / budgetTotal) * 100)}% of budget`, up: false },
          { label: 'Total Saved', value: `₹${(totalSaved / 100000).toFixed(1)}L`, change: `${Math.round((totalSaved / totalTarget) * 100)}% of goals`, up: true },
        ].map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.04}>
            <div className="dash-card rounded-xl p-4">
              <p className="text-xs text-slate-500">{stat.label}</p>
              <p className="font-display mt-1 text-xl font-bold text-slate-900">{stat.value}</p>
              <p className={`mt-1 flex items-center gap-0.5 text-[10px] font-semibold ${stat.up ? 'text-brand-600' : 'text-navy-600'}`}>
                {stat.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {stat.change}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        <FadeIn delay={0.08}>
          <div className="dash-card rounded-2xl p-5 sm:p-6">
            <h2 className="flex items-center gap-2 font-display text-base font-bold text-slate-900">
              <Wallet className="h-5 w-5 text-brand-600" />
              Spending Bubbles
            </h2>
            <p className="text-muted mb-2 text-xs">June 2026 · Bubble size = spend amount</p>
            <BubbleSpendMap segments={budgetSegments} totalBudget={budgetTotal} />
            <div className="mt-4 grid grid-cols-2 gap-2">
              {budgetSegments.map((seg) => (
                <div key={seg.label} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-xs">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: seg.color }} />
                    {seg.label}
                  </span>
                  <span className="font-semibold">₹{seg.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="dash-card rounded-2xl p-5 sm:p-6">
            <h2 className="flex items-center gap-2 font-display text-base font-bold text-slate-900">
              <Target className="h-5 w-5 text-navy-600" />
              Goal Thermometers
            </h2>
            <p className="text-muted mb-6 text-xs">Fill the tubes to hit your targets</p>
            <GoalThermometers goals={goals} />
          </div>
        </FadeIn>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
        <FadeIn delay={0.12}>
          <div className="dash-card rounded-2xl p-5 sm:p-6">
            <h2 className="font-display text-base font-bold text-slate-900">Savings Tank</h2>
            <p className="text-muted mb-4 text-xs">Overall goal completion</p>
            <FluidSavings percent={Math.round((totalSaved / totalTarget) * 100)} label="of all goals" />
          </div>
        </FadeIn>

        <FadeIn delay={0.14}>
          <div className="dash-card rounded-2xl p-5 sm:p-6">
            <h2 className="flex items-center gap-2 font-display text-base font-bold text-slate-900">
              <TrendingUp className="h-4 w-4 text-brand-600" />
              Budget Health
            </h2>
            <p className="text-muted mb-4 text-xs">Remaining monthly allowance</p>
            <div className="flex justify-center">
              <SparkGauge
                value={budgetTotal - totalSpent}
                max={budgetTotal}
                label="budget left"
                color="#22c55e"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.16}>
          <div className="dash-card rounded-2xl p-5 sm:p-6">
            <h2 className="font-display text-base font-bold text-slate-900">Savings Arc</h2>
            <p className="text-muted mb-4 text-xs">6-month growth trajectory</p>
            <div className="flex justify-center">
              <SparkGauge
                value={savingsHistory[savingsHistory.length - 1].value}
                max={100}
                label={`${savingsHistory[savingsHistory.length - 1].label} index`}
                color="#3b82f6"
              />
            </div>
            <div className="mt-3 flex justify-between">
              {savingsHistory.map((m) => (
                <div key={m.label} className="text-center">
                  <div
                    className="mx-auto w-1 rounded-full bg-gradient-to-t from-brand-500 to-navy-400"
                    style={{ height: `${m.value * 0.6}px` }}
                  />
                  <span className="text-[9px] text-slate-400">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.18}>
        <div className="dash-card rounded-2xl p-5 sm:p-6">
          <h2 className="font-display text-base font-bold text-slate-900">Recent Transactions</h2>
          <div className="mt-4 divide-y divide-slate-100">
            {transactions.map((tx) => (
              <motion.div
                key={tx.label}
                className="flex items-center justify-between gap-3 py-3"
                whileHover={{ x: 4 }}
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-900">{tx.label}</p>
                  <p className="text-[10px] text-slate-500">{tx.cat} · {tx.time}</p>
                </div>
                <span className={`shrink-0 font-display text-sm font-bold ${tx.amount > 0 ? 'text-brand-600' : 'text-slate-800'}`}>
                  {tx.amount > 0 ? '+' : ''}₹{Math.abs(tx.amount).toLocaleString()}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
