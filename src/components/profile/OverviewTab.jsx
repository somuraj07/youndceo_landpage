import {
  Wallet,
  TrendingUp,
  BookOpen,
  Trophy,
  ClipboardCheck,
  Target,
  Receipt,
  GraduationCap,
} from 'lucide-react'
import MiniBarChart from './MiniBarChart'

const recentActivity = [
  { action: 'Completed Budget Quiz', time: '2 hours ago', type: 'challenge', icon: ClipboardCheck },
  { action: 'Saved ₹500 towards Emergency Fund', time: 'Yesterday', type: 'goal', icon: Target },
  { action: 'Finished Stock Market Basics — Module 3', time: '2 days ago', type: 'course', icon: GraduationCap },
  { action: 'Logged ₹320 food expense', time: '3 days ago', type: 'expense', icon: Receipt },
]

export default function OverviewTab() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="glass-card rounded-2xl p-5 sm:p-6">
        <h3 className="flex items-center gap-2 font-display text-base font-bold text-slate-900 sm:text-lg">
          <TrendingUp className="h-5 w-5 text-navy-600" />
          This Month at a Glance
        </h3>
        <MiniBarChart
          data={[
            { label: 'Mon', value: 65, color: 'bg-navy-400' },
            { label: 'Tue', value: 45, color: 'bg-brand-400' },
            { label: 'Wed', value: 80, color: 'bg-navy-500' },
            { label: 'Thu', value: 55, color: 'bg-gold-400' },
            { label: 'Fri', value: 90, color: 'bg-brand-500' },
            { label: 'Sat', value: 40, color: 'bg-navy-300' },
            { label: 'Sun', value: 70, color: 'bg-brand-400' },
          ]}
        />
        <p className="text-muted mt-3 text-xs">Daily activity score — learning + budgeting combined</p>
      </div>

      <div className="glass-card rounded-2xl p-5 sm:p-6">
        <h3 className="font-display text-base font-bold text-slate-900 sm:text-lg">
          Quick Summary
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            { icon: Wallet, label: 'Budget Left', value: '₹7,520', sub: 'of ₹20,000', color: 'text-brand-600 bg-brand-50' },
            { icon: TrendingUp, label: 'Portfolio', value: '+12.4%', sub: 'this month', color: 'text-navy-600 bg-navy-50' },
            { icon: BookOpen, label: 'In Progress', value: '3', sub: 'courses', color: 'text-navy-600 bg-navy-50' },
            { icon: Trophy, label: 'Pending', value: '2', sub: 'challenges', color: 'text-gold-600 bg-yellow-50' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="rounded-xl border border-navy-100 bg-white p-3">
                <div className={`mb-2 flex h-8 w-8 items-center justify-center rounded-lg ${item.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-[10px] text-slate-500">{item.label}</p>
                <p className={`font-display text-lg font-bold ${item.color.split(' ')[0]}`}>{item.value}</p>
                <p className="text-[10px] text-slate-400">{item.sub}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="glass-card rounded-2xl p-5 sm:p-6 lg:col-span-2">
        <h3 className="font-display text-base font-bold text-slate-900 sm:text-lg">
          Recent Activity
        </h3>
        <ul className="mt-4 space-y-3">
          {recentActivity.map((item) => {
            const Icon = item.icon
            return (
              <li
                key={item.action}
                className="flex items-center justify-between rounded-xl border border-navy-50 bg-white px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      item.type === 'challenge'
                        ? 'bg-yellow-50 text-gold-600'
                        : item.type === 'goal'
                          ? 'bg-brand-50 text-brand-600'
                          : item.type === 'course'
                            ? 'bg-navy-50 text-navy-600'
                            : 'bg-slate-50 text-slate-600'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-slate-800">{item.action}</span>
                </div>
                <span className="text-xs text-slate-400">{item.time}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
