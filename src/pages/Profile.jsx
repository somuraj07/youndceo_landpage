import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  BookOpen,
  Trophy,
  Wallet,
  Target,
  TrendingUp,
  PiggyBank,
  GraduationCap,
  ClipboardList,
  Clock,
  CheckCircle2,
  AlertCircle,
  PlayCircle,
  Zap,
  BarChart3,
} from 'lucide-react'
import { FadeIn } from '../components/motion'
import StreakWidget from '../components/profile/StreakWidget'
import DonutChart from '../components/profile/DonutChart'
import RingProgress from '../components/profile/RingProgress'
import MiniBarChart from '../components/profile/MiniBarChart'
import LineChart from '../components/profile/LineChart'

const kpis = [
  { label: 'Balance', value: '₹48,250', change: '+12.4%', icon: Wallet, bg: 'from-brand-500 to-brand-600' },
  { label: 'Budget Left', value: '₹7,520', change: '37% left', icon: PiggyBank, bg: 'from-navy-500 to-navy-600' },
  { label: 'Courses', value: '3', change: 'In progress', icon: BookOpen, bg: 'from-navy-400 to-navy-500' },
  { label: 'XP Earned', value: '2,450', change: 'Level 7', icon: Zap, bg: 'from-gold-500 to-orange-500' },
]

const goals = [
  { title: 'Emergency Fund', saved: '₹34,000', target: '₹50,000', progress: 68, color: '#22c55e' },
  { title: 'Europe Trip', saved: '₹48,000', target: '₹1,20,000', progress: 40, color: '#3b82f6' },
  { title: 'MBA Savings', saved: '₹1,25,000', target: '₹5,00,000', progress: 25, color: '#eab308' },
]

const budgetSegments = [
  { label: 'Food', value: 4200, color: '#22c55e' },
  { label: 'Transport', value: 1800, color: '#3b82f6' },
  { label: 'Entertainment', value: 2100, color: '#ef4444' },
  { label: 'Shopping', value: 1500, color: '#eab308' },
  { label: 'Education', value: 999, color: '#60a5fa' },
]

const courses = [
  { title: 'Stock Market Mastery', progress: 75, modules: '18/24', done: false },
  { title: 'Personal Budgeting 101', progress: 100, modules: '12/12', done: true },
  { title: 'Tax Planning', progress: 30, modules: '3/10', done: false },
]

const challenges = [
  { title: 'Budget Allocation Quiz', type: 'Assignment', due: '2 days', status: 'pending', xp: 150 },
  { title: 'Stock Market Final Test', type: 'Test', due: '5 days', status: 'pending', xp: 300 },
  { title: 'Expense Tracking Task', type: 'Assignment', due: 'Tomorrow', status: 'urgent', xp: 120 },
  { title: 'Weekly Savings Challenge', type: 'Challenge', due: 'Done', status: 'done', xp: 100 },
]

const statusIcon = {
  pending: Clock,
  urgent: AlertCircle,
  done: CheckCircle2,
}

export default function Profile() {
  const totalSpent = budgetSegments.reduce((s, b) => s + b.value, 0)

  return (
    <main className="relative pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <Link
            to="/"
            className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-navy-600 hover:text-navy-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </FadeIn>

        {/* Dashboard header */}
        <FadeIn delay={0.05}>
          <div className="glass-card overflow-hidden rounded-3xl">
            <div className="bg-gradient-to-r from-navy-500 via-brand-500 to-navy-600 px-6 py-5 sm:px-8 sm:py-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-lg font-bold text-white backdrop-blur-sm ring-2 ring-white/30 sm:h-16 sm:w-16 sm:text-xl">
                      RS
                    </div>
                    <span className="absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold-400 text-[10px] font-bold text-navy-900 ring-2 ring-white">
                      7
                    </span>
                  </div>
                  <div>
                    <h1 className="font-display text-xl font-bold text-white sm:text-2xl">
                      Rahul Sharma
                    </h1>
                    <p className="text-sm text-white/80">Finance Learner · Level 7</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <RingProgress value={82} size={64} color="#ffffff" label="XP" />
                  <div className="text-right text-white">
                    <p className="text-xs text-white/70">Level Progress</p>
                    <p className="font-display text-lg font-bold">2,450 / 3,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-2 gap-px bg-navy-100 lg:grid-cols-4">
              {kpis.map((kpi) => {
                const Icon = kpi.icon
                return (
                  <motion.div
                    key={kpi.label}
                    className="bg-white p-4 sm:p-5"
                    whileHover={{ backgroundColor: '#f8fafc' }}
                  >
                    <div className="flex items-start justify-between">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${kpi.bg} text-white shadow-sm`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] font-semibold text-brand-600">{kpi.change}</span>
                    </div>
                    <p className="mt-3 font-display text-xl font-bold text-slate-900 sm:text-2xl">
                      {kpi.value}
                    </p>
                    <p className="text-xs text-slate-500">{kpi.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </FadeIn>

        {/* Streak + Activity */}
        <div className="mt-5 grid gap-5 lg:grid-cols-5 lg:mt-6">
          <FadeIn delay={0.1} className="lg:col-span-2">
            <StreakWidget count={21} />
          </FadeIn>
          <FadeIn delay={0.12} className="lg:col-span-3">
            <div className="glass-card h-full rounded-2xl p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="flex items-center gap-2 font-display text-base font-bold text-slate-900 sm:text-lg">
                    <BarChart3 className="h-5 w-5 text-navy-600" />
                    Weekly Activity
                  </h2>
                  <p className="text-muted mt-0.5 text-xs">Learning + budgeting combined score</p>
                </div>
                <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-bold text-brand-700">
                  +18% vs last week
                </span>
              </div>
              <MiniBarChart
                data={[
                  { label: 'Mon', value: 65, color: 'bg-navy-400' },
                  { label: 'Tue', value: 45, color: 'bg-brand-400' },
                  { label: 'Wed', value: 80, color: 'bg-navy-500' },
                  { label: 'Thu', value: 55, color: 'bg-gold-400' },
                  { label: 'Fri', value: 92, color: 'bg-brand-500' },
                  { label: 'Sat', value: 40, color: 'bg-navy-300' },
                  { label: 'Sun', value: 70, color: 'bg-brand-400' },
                ]}
              />
            </div>
          </FadeIn>
        </div>

        {/* Budget donut + Goals */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2 lg:mt-6">
          <FadeIn delay={0.15}>
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-slate-900 sm:text-lg">
                <Wallet className="h-5 w-5 text-brand-600" />
                Budget Planner
              </h2>
              <p className="text-muted text-xs">June 2026 · ₹{totalSpent.toLocaleString()} of ₹20,000 spent</p>
              <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <DonutChart segments={budgetSegments} size={140} centerValue="53%" centerLabel="spent" />
                <div className="w-full flex-1 space-y-2">
                  {budgetSegments.map((seg) => (
                    <div key={seg.label} className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ background: seg.color }} />
                        {seg.label}
                      </span>
                      <span className="font-semibold text-slate-700">₹{seg.value.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.17}>
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-slate-900 sm:text-lg">
                <Target className="h-5 w-5 text-navy-600" />
                Savings Goals
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {goals.map((goal) => (
                  <div key={goal.title} className="flex flex-col items-center rounded-xl border border-navy-50 bg-white p-4 text-center">
                    <RingProgress value={goal.progress} color={goal.color} size={68} />
                    <p className="mt-2 text-xs font-semibold text-slate-900">{goal.title}</p>
                    <p className="text-[10px] text-slate-500">{goal.saved}</p>
                    <p className="text-[10px] text-slate-400">of {goal.target}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Learn + Challenges */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2 lg:mt-6">
          <FadeIn delay={0.2}>
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-slate-900 sm:text-lg">
                <GraduationCap className="h-5 w-5 text-navy-600" />
                My Courses
              </h2>
              <div className="mt-4 space-y-3">
                {courses.map((c) => (
                  <div key={c.title} className="rounded-xl border border-navy-50 bg-white p-4">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{c.title}</p>
                        <p className="text-xs text-slate-500">{c.modules} modules</p>
                      </div>
                      {c.done ? (
                        <CheckCircle2 className="h-5 w-5 text-brand-500" />
                      ) : (
                        <button type="button" className="inline-flex items-center gap-1 rounded-full bg-navy-500 px-2.5 py-1 text-[10px] font-semibold text-white">
                          <PlayCircle className="h-3 w-3" /> Resume
                        </button>
                      )}
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-navy-400 to-brand-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${c.progress}%` }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-slate-900 sm:text-lg">
                <ClipboardList className="h-5 w-5 text-gold-600" />
                Assigned Challenges
              </h2>
              <p className="text-muted mt-0.5 text-xs">Tests, assignments & weekly tasks</p>
              <div className="mt-4 space-y-3">
                {challenges.map((ch) => {
                  const Icon = statusIcon[ch.status]
                  return (
                    <div key={ch.title} className="flex items-center gap-3 rounded-xl border border-navy-50 bg-white p-3">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        ch.status === 'done' ? 'bg-brand-50 text-brand-600' :
                        ch.status === 'urgent' ? 'bg-red-50 text-red-500' : 'bg-navy-50 text-navy-600'
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-slate-900">{ch.title}</p>
                        <p className="text-[10px] text-slate-500">{ch.type} · +{ch.xp} XP · {ch.due}</p>
                      </div>
                      {ch.status !== 'done' && (
                        <button type="button" className="shrink-0 rounded-full bg-brand-500 px-2.5 py-1 text-[10px] font-semibold text-white">
                          Start
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Records graphs */}
        <FadeIn delay={0.25}>
          <div className="mt-5 grid gap-5 lg:mt-6 lg:grid-cols-2">
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-slate-900">
                <TrendingUp className="h-5 w-5 text-brand-600" />
                Savings Growth
              </h2>
              <LineChart
                data={[
                  { label: 'Jan', value: 20 },
                  { label: 'Feb', value: 35 },
                  { label: 'Mar', value: 42 },
                  { label: 'Apr', value: 50 },
                  { label: 'May', value: 58 },
                  { label: 'Jun', value: 68 },
                ]}
                color="#22c55e"
                fill="rgba(34,197,94,0.12)"
                height={140}
              />
            </div>
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-slate-900">
                <Trophy className="h-5 w-5 text-navy-600" />
                Learning Progress
              </h2>
              <LineChart
                data={[
                  { label: 'W1', value: 30 },
                  { label: 'W2', value: 45 },
                  { label: 'W3', value: 55 },
                  { label: 'W4', value: 70 },
                  { label: 'W5', value: 78 },
                  { label: 'W6', value: 85 },
                ]}
                color="#3b82f6"
                fill="rgba(59,130,246,0.1)"
                height={140}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  )
}
