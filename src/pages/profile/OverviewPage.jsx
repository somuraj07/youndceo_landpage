import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Wallet,
  PiggyBank,
  BookOpen,
  Zap,
  TrendingUp,
  ChevronRight,
  Sparkles,
} from 'lucide-react'
import { FadeIn } from '../../components/motion'
import WaveActivity from '../../components/profile/charts/WaveActivity'
import StreakFlame from '../../components/profile/charts/StreakFlame'
import SparkGauge from '../../components/profile/charts/SparkGauge'
import HeatmapCalendar from '../../components/profile/charts/HeatmapCalendar'
import PathConstellation from '../../components/profile/charts/PathConstellation'
import {
  user,
  kpis,
  weeklyActivity,
  heatmapData,
  learningPath,
  courses,
  challenges,
} from '../../data/profileData'

const kpiIcons = [Wallet, PiggyBank, BookOpen, Zap]
const kpiColors = [
  'from-brand-500 to-brand-600',
  'from-navy-500 to-navy-600',
  'from-navy-400 to-navy-500',
  'from-gold-500 to-orange-500',
]

const quickLinks = [
  { label: 'Continue Learning', path: '/profile/learn', desc: `${courses.filter((c) => !c.done).length} courses in progress`, color: 'bg-navy-50 text-navy-700' },
  { label: 'Budget & Goals', path: '/profile/finance', desc: '₹7,520 left this month', color: 'bg-brand-50 text-brand-700' },
  { label: 'Pending Tasks', path: '/profile/challenges', desc: `${challenges.filter((c) => c.status !== 'done').length} due soon`, color: 'bg-orange-50 text-orange-700' },
]

export default function OverviewPage() {
  return (
    <div className="space-y-5">
      {/* Hero stats strip */}
      <FadeIn>
        <div className="dash-card overflow-hidden rounded-2xl">
          <div className="grid grid-cols-2 divide-x divide-y divide-navy-100 md:grid-cols-4 md:divide-y-0">
            {kpis.map((kpi, i) => {
              const Icon = kpiIcons[i]
              return (
                <motion.div key={kpi.label} className="p-3 sm:p-4 md:p-5" whileHover={{ backgroundColor: '#f8fafc' }}>
                  <div className={`mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br sm:mb-3 sm:h-9 sm:w-9 ${kpiColors[i]} text-white shadow-sm`}>
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                  <p className="font-display text-lg font-bold text-slate-900 sm:text-xl md:text-2xl">{kpi.value}</p>
                  <div className="mt-0.5 flex flex-col gap-0.5 xs:flex-row xs:items-center xs:justify-between">
                    <p className="text-[11px] text-slate-500 sm:text-xs">{kpi.label}</p>
                    <span className="text-[10px] font-bold text-brand-600">{kpi.change}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </FadeIn>

      {/* Quick nav cards */}
      <FadeIn delay={0.05}>
        <div className="grid gap-3 sm:grid-cols-3">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="dash-card group flex items-center justify-between rounded-xl p-4 transition-all hover:border-navy-200"
            >
              <div>
                <p className={`inline-block rounded-lg px-2 py-0.5 text-[10px] font-bold ${link.color}`}>
                  {link.label}
                </p>
                <p className="mt-1 text-xs text-slate-500">{link.desc}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </FadeIn>

      <div className="grid gap-4 md:grid-cols-5 md:gap-5">
        <FadeIn delay={0.08} className="md:col-span-2">
          <StreakFlame count={user.streak} />
        </FadeIn>
        <FadeIn delay={0.1} className="md:col-span-3">
          <div className="dash-card h-full rounded-2xl p-4 sm:p-5">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="flex items-center gap-2 font-display text-sm font-bold text-slate-900 sm:text-base">
                  <TrendingUp className="h-4 w-4 shrink-0 text-navy-600" />
                  Activity Pulse
                </h2>
                <p className="text-muted text-xs">Learning + budgeting rhythm</p>
              </div>
              <span className="w-fit shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-bold text-brand-700">
                +18% this week
              </span>
            </div>
            <WaveActivity data={weeklyActivity} />
          </div>
        </FadeIn>
      </div>

      {/* XP gauge + heatmap */}
      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        <FadeIn delay={0.12}>
          <div className="dash-card rounded-2xl p-5 sm:p-6">
            <h2 className="flex items-center gap-2 font-display text-base font-bold text-slate-900">
              <Sparkles className="h-4 w-4 text-gold-500" />
              Level Progress
            </h2>
            <p className="text-muted mb-4 text-xs">Level {user.level} · {user.xpTarget - user.xp} XP to Level {user.level + 1}</p>
            <div className="flex justify-center">
              <SparkGauge value={user.xp} max={user.xpTarget} label="XP earned" color="#3b82f6" />
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.14}>
          <div className="dash-card rounded-2xl p-5 sm:p-6">
            <h2 className="font-display text-base font-bold text-slate-900">12-Week Activity</h2>
            <p className="text-muted mb-4 text-xs">Daily engagement heatmap</p>
            <HeatmapCalendar data={heatmapData} weeks={12} />
          </div>
        </FadeIn>
      </div>

      {/* Learning path preview */}
      <FadeIn delay={0.16}>
        <div className="dash-card rounded-2xl p-5 sm:p-6">
          <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-sm font-bold text-slate-900 sm:text-base">Learning Journey</h2>
              <p className="text-muted text-xs">Your constellation path to financial mastery</p>
            </div>
            <Link to="/profile/learn" className="shrink-0 text-xs font-semibold text-brand-600 hover:text-brand-700">
              View all →
            </Link>
          </div>
          <PathConstellation nodes={learningPath} />
        </div>
      </FadeIn>
    </div>
  )
}
