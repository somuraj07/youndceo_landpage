import { Plus, PiggyBank, Plane, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const goals = [
  {
    icon: PiggyBank,
    title: 'Emergency Fund',
    target: '₹50,000',
    saved: '₹34,000',
    progress: 68,
    color: 'from-brand-400 to-brand-600',
  },
  {
    icon: Plane,
    title: 'Europe Trip',
    target: '₹1,20,000',
    saved: '₹48,000',
    progress: 40,
    color: 'from-navy-400 to-navy-600',
  },
  {
    icon: GraduationCap,
    title: 'MBA Savings',
    target: '₹5,00,000',
    saved: '₹1,25,000',
    progress: 25,
    color: 'from-gold-400 to-gold-600',
  },
]

const budgetCategories = [
  { name: 'Food & Dining', spent: 4200, limit: 5000, color: 'bg-brand-500' },
  { name: 'Transport', spent: 1800, limit: 2500, color: 'bg-navy-500' },
  { name: 'Entertainment', spent: 2100, limit: 2000, color: 'bg-red-400' },
  { name: 'Shopping', spent: 1500, limit: 3000, color: 'bg-gold-400' },
  { name: 'Education', spent: 999, limit: 2000, color: 'bg-navy-400' },
]

export default function GoalsBudgetTab() {
  const totalBudget = 20000
  const totalSpent = budgetCategories.reduce((s, c) => s + c.spent, 0)

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {/* Goals */}
      <div className="glass-card rounded-2xl p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-base font-bold text-slate-900 sm:text-lg">
            My Goals
          </h3>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 hover:bg-brand-100"
          >
            <Plus className="h-3 w-3" /> Add Goal
          </button>
        </div>
        <div className="space-y-4">
          {goals.map((goal) => {
            const Icon = goal.icon
            return (
              <motion.div
                key={goal.title}
                className="rounded-xl border border-navy-100 bg-white p-4"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${goal.color} text-white shadow-sm`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-slate-900">{goal.title}</p>
                      <span className="text-xs font-bold text-brand-600">{goal.progress}%</span>
                    </div>
                    <p className="text-xs text-slate-500">
                      {goal.saved} of {goal.target}
                    </p>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${goal.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.progress}%` }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Budget Planner */}
      <div className="glass-card rounded-2xl p-5 sm:p-6">
        <h3 className="font-display text-base font-bold text-slate-900 sm:text-lg">
          Budget Planner — June 2026
        </h3>

        <div className="mt-4 rounded-xl bg-gradient-to-r from-navy-500 to-brand-500 p-4 text-white shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/80">Monthly Budget</p>
              <p className="font-display text-2xl font-bold">₹{totalBudget.toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/80">Remaining</p>
              <p className="font-display text-xl font-bold">
                ₹{(totalBudget - totalSpent).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/25">
            <div
              className="h-full rounded-full bg-white"
              style={{ width: `${(totalSpent / totalBudget) * 100}%` }}
            />
          </div>
          <p className="mt-1.5 text-[10px] text-white/70">
            ₹{totalSpent.toLocaleString()} spent · {Math.round((totalSpent / totalBudget) * 100)}% used
          </p>
        </div>

        <div className="mt-5 space-y-3">
          {budgetCategories.map((cat) => {
            const pct = Math.min((cat.spent / cat.limit) * 100, 100)
            const over = cat.spent > cat.limit
            return (
              <div key={cat.name}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">{cat.name}</span>
                  <span className={over ? 'font-semibold text-red-500' : 'text-slate-500'}>
                    ₹{cat.spent.toLocaleString()} / ₹{cat.limit.toLocaleString()}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${over ? 'bg-red-400' : cat.color}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
