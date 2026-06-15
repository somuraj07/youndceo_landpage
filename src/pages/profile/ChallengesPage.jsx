import { motion } from 'framer-motion'
import {
  Target,
  Clock,
  AlertCircle,
  CheckCircle2,
  Zap,
  Swords,
} from 'lucide-react'
import { FadeIn } from '../../components/motion'
import SparkGauge from '../../components/profile/charts/SparkGauge'
import { challenges } from '../../data/profileData'

const statusConfig = {
  pending: { icon: Clock, bg: 'bg-navy-50 text-navy-600', border: 'border-navy-100' },
  urgent: { icon: AlertCircle, bg: 'bg-red-50 text-red-500', border: 'border-red-100' },
  done: { icon: CheckCircle2, bg: 'bg-brand-50 text-brand-600', border: 'border-brand-100' },
}

const typeColors = {
  Assignment: 'from-navy-500 to-navy-600',
  Test: 'from-gold-500 to-orange-500',
  Challenge: 'from-brand-500 to-brand-600',
}

export default function ChallengesPage() {
  const pending = challenges.filter((c) => c.status !== 'done')
  const done = challenges.filter((c) => c.status === 'done')
  const totalXp = challenges.reduce((s, c) => s + (c.status === 'done' ? c.xp : 0), 0)
  const availableXp = challenges.reduce((s, c) => s + c.xp, 0)

  return (
    <div className="space-y-5">
      <FadeIn>
        <div className="dash-card rounded-2xl p-5 sm:p-6">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div>
              <h2 className="flex items-center gap-2 font-display text-lg font-bold text-slate-900">
                <Swords className="h-5 w-5 text-gold-500" />
                Quest Board
              </h2>
              <p className="text-muted mt-1 text-xs">Complete tasks to earn XP and level up</p>
            </div>
            <SparkGauge value={totalXp} max={availableXp} label="XP collected" color="#22c55e" />
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: 'Active', value: pending.length, color: 'text-navy-600 bg-navy-50' },
            { label: 'Urgent', value: pending.filter((c) => c.status === 'urgent').length, color: 'text-red-600 bg-red-50' },
            { label: 'Completed', value: done.length, color: 'text-brand-600 bg-brand-50' },
          ].map((s) => (
            <div key={s.label} className={`dash-card rounded-xl p-4 text-center ${s.color}`}>
              <p className="font-display text-2xl font-bold">{s.value}</p>
              <p className="text-xs font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.08}>
        <h2 className="mb-3 font-display text-base font-bold text-slate-900">Active Quests</h2>
        <div className="space-y-3">
          {pending.map((ch, i) => {
            const cfg = statusConfig[ch.status]
            const Icon = cfg.icon
            return (
              <motion.div
                key={ch.id}
                className={`dash-card overflow-hidden rounded-2xl border ${cfg.border}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:p-5">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${cfg.bg}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-bold text-slate-900">{ch.title}</p>
                      <span className={`rounded-full bg-gradient-to-r ${typeColors[ch.type] || typeColors.Assignment} px-2 py-0.5 text-[9px] font-bold text-white`}>
                        {ch.type}
                      </span>
                    </div>
                    <p className="mt-0.5 flex items-center gap-2 text-xs text-slate-500">
                      <Target className="h-3 w-3" /> Due {ch.due}
                      <span className="flex items-center gap-0.5 text-gold-600">
                        <Zap className="h-3 w-3" /> +{ch.xp} XP
                      </span>
                    </p>
                    {ch.progress > 0 && (
                      <div className="mt-2">
                        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-navy-400 to-brand-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${ch.progress}%` }}
                          />
                        </div>
                        <p className="mt-0.5 text-[10px] text-slate-400">{ch.progress}% complete</p>
                      </div>
                    )}
                  </div>
                  <button type="button" className="shrink-0 rounded-full bg-gradient-to-r from-brand-500 to-navy-500 px-5 py-2 text-xs font-semibold text-white shadow-md">
                    {ch.progress > 0 ? 'Continue' : 'Start Quest'}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </FadeIn>

      {done.length > 0 && (
        <FadeIn delay={0.1}>
          <h2 className="mb-3 font-display text-base font-bold text-slate-900">Completed</h2>
          <div className="space-y-2">
            {done.map((ch) => (
              <div key={ch.id} className="dash-card flex items-center gap-3 rounded-xl p-4 opacity-80">
                <CheckCircle2 className="h-5 w-5 text-brand-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700 line-through decoration-brand-300">{ch.title}</p>
                  <p className="text-[10px] text-slate-400">+{ch.xp} XP earned</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      )}
    </div>
  )
}
