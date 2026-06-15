import {
  BarChart3,
  PiggyBank,
  GraduationCap,
  ClipboardCheck,
  Award,
  Zap,
  Utensils,
  Car,
  ShoppingBag,
  BookOpen,
} from 'lucide-react'
import MiniBarChart from './MiniBarChart'
import LineChart from './LineChart'

const spendingData = [
  { label: 'Jan', value: 55, color: 'bg-navy-400' },
  { label: 'Feb', value: 70, color: 'bg-navy-500' },
  { label: 'Mar', value: 45, color: 'bg-navy-400' },
  { label: 'Apr', value: 80, color: 'bg-navy-500' },
  { label: 'May', value: 65, color: 'bg-navy-400' },
  { label: 'Jun', value: 60, color: 'bg-navy-500' },
]

const savingsLine = [
  { label: 'Jan', value: 20 },
  { label: 'Feb', value: 35 },
  { label: 'Mar', value: 42 },
  { label: 'Apr', value: 50 },
  { label: 'May', value: 58 },
  { label: 'Jun', value: 68 },
]

const learningLine = [
  { label: 'W1', value: 30 },
  { label: 'W2', value: 45 },
  { label: 'W3', value: 55 },
  { label: 'W4', value: 70 },
  { label: 'W5', value: 78 },
  { label: 'W6', value: 85 },
]

export default function RecordsTab() {
  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="glass-card rounded-2xl p-5 sm:p-6">
          <h3 className="flex items-center gap-2 font-display text-base font-bold text-slate-900 sm:text-lg">
            <BarChart3 className="h-5 w-5 text-red-500" />
            Monthly Spending
          </h3>
          <p className="text-muted mt-1 text-xs">Track how your expenses change over time</p>
          <MiniBarChart data={spendingData} />
          <div className="mt-4 flex items-center justify-between rounded-xl bg-red-50 px-4 py-2.5">
            <span className="flex items-center gap-1.5 text-xs text-red-700">
              <BarChart3 className="h-3.5 w-3.5" /> Avg. monthly spend
            </span>
            <span className="font-display text-sm font-bold text-red-600">₹12,480</span>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5 sm:p-6">
          <h3 className="flex items-center gap-2 font-display text-base font-bold text-slate-900 sm:text-lg">
            <PiggyBank className="h-5 w-5 text-brand-600" />
            Savings Growth
          </h3>
          <p className="text-muted mt-1 text-xs">Your savings goal progress over 6 months</p>
          <LineChart data={savingsLine} color="#22c55e" fill="rgba(34,197,94,0.15)" />
          <div className="mt-4 flex items-center justify-between rounded-xl bg-brand-50 px-4 py-2.5">
            <span className="flex items-center gap-1.5 text-xs text-brand-700">
              <PiggyBank className="h-3.5 w-3.5" /> Total saved
            </span>
            <span className="font-display text-sm font-bold text-brand-600">₹2,07,000</span>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-2xl p-5 sm:p-6">
        <h3 className="flex items-center gap-2 font-display text-base font-bold text-slate-900 sm:text-lg">
          <GraduationCap className="h-5 w-5 text-navy-600" />
          Learning Progress
        </h3>
        <p className="text-muted mt-1 text-xs">Course completion & challenge scores over weeks</p>
        <LineChart data={learningLine} color="#3b82f6" fill="rgba(59,130,246,0.12)" height={160} />
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Courses Completed', value: '8', icon: BookOpen, color: 'text-navy-600 bg-navy-50' },
            { label: 'Tests Passed', value: '14', icon: ClipboardCheck, color: 'text-brand-600 bg-brand-50' },
            { label: 'Avg. Score', value: '87%', icon: Award, color: 'text-gold-600 bg-yellow-50' },
            { label: 'Total XP', value: '2,450', icon: Zap, color: 'text-navy-700 bg-navy-50' },
          ].map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="rounded-xl border border-navy-100 bg-white p-3 text-center">
                <div className={`mx-auto mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg ${stat.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <p className="font-display text-xl font-bold text-navy-700">{stat.value}</p>
                <p className="text-[10px] text-slate-500">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="glass-card rounded-2xl p-5 sm:p-6">
        <h3 className="flex items-center gap-2 font-display text-base font-bold text-slate-900 sm:text-lg">
          <BarChart3 className="h-5 w-5 text-navy-600" />
          Category Breakdown
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { cat: 'Food', pct: 34, stroke: '#22c55e', icon: Utensils },
            { cat: 'Transport', pct: 14, stroke: '#3b82f6', icon: Car },
            { cat: 'Shopping', pct: 22, stroke: '#eab308', icon: ShoppingBag },
            { cat: 'Education', pct: 18, stroke: '#60a5fa', icon: BookOpen },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.cat} className="text-center">
                <div className="relative mx-auto h-20 w-20">
                  <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.9"
                      fill="none"
                      stroke={item.stroke}
                      strokeWidth="3"
                      strokeDasharray={`${item.pct} 100`}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-slate-700" />
                  </span>
                </div>
                <p className="mt-2 text-xs font-medium text-slate-600">{item.cat}</p>
                <p className="text-[10px] font-bold text-slate-500">{item.pct}%</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
