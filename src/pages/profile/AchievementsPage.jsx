import { motion } from 'framer-motion'
import { Trophy, Star, Lock, Crown, Medal } from 'lucide-react'
import { FadeIn } from '../../components/motion'
import SparkGauge from '../../components/profile/charts/SparkGauge'
import HeatmapCalendar from '../../components/profile/charts/HeatmapCalendar'
import StreakFlame from '../../components/profile/charts/StreakFlame'
import { badges, user, heatmapData } from '../../data/profileData'

const rarityStyles = {
  common: 'border-slate-200 bg-slate-50',
  rare: 'border-navy-200 bg-navy-50',
  epic: 'border-brand-200 bg-brand-50',
  legendary: 'border-gold-300 bg-gradient-to-br from-gold-50 to-orange-50',
}

const rarityLabel = {
  common: 'text-slate-500',
  rare: 'text-navy-600',
  epic: 'text-brand-600',
  legendary: 'text-gold-600',
}

export default function AchievementsPage() {
  const earned = badges.filter((b) => b.earned)
  const locked = badges.filter((b) => !b.earned)

  return (
    <div className="space-y-5">
      <FadeIn>
        <div className="dash-card overflow-hidden rounded-2xl">
          <div className="bg-gradient-to-r from-gold-400 via-gold-300 to-brand-400 px-6 py-8 text-center">
            <Crown className="mx-auto h-10 w-10 text-white drop-shadow-md" />
            <p className="font-display mt-2 text-2xl font-bold text-white">{earned.length} / {badges.length}</p>
            <p className="text-sm text-white/90">Badges Unlocked</p>
          </div>
          <div className="grid grid-cols-3 divide-x divide-navy-100">
            {[
              { label: 'Level', value: user.level, icon: Star },
              { label: 'XP Total', value: user.xp.toLocaleString(), icon: Medal },
              { label: 'Streak', value: `${user.streak}d`, icon: Trophy },
            ].map((s) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="p-4 text-center">
                  <Icon className="mx-auto h-4 w-4 text-gold-500" />
                  <p className="font-display mt-1 text-lg font-bold text-slate-900">{s.value}</p>
                  <p className="text-[10px] text-slate-500">{s.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </FadeIn>

      <div className="grid gap-5 lg:grid-cols-2">
        <FadeIn delay={0.05}>
          <div className="dash-card rounded-2xl p-5 sm:p-6">
            <h2 className="font-display text-base font-bold text-slate-900">XP Mastery Arc</h2>
            <p className="text-muted mb-4 text-xs">Progress to next level</p>
            <div className="flex justify-center">
              <SparkGauge value={user.xp} max={user.xpTarget} label={`Level ${user.level}`} color="#eab308" />
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.07}>
          <StreakFlame count={user.streak} days={14} />
        </FadeIn>
      </div>

      <FadeIn delay={0.09}>
        <div className="dash-card rounded-2xl p-5 sm:p-6">
          <h2 className="font-display text-base font-bold text-slate-900">Engagement Heatmap</h2>
          <p className="text-muted mb-4 text-xs">Your consistency over 12 weeks</p>
          <HeatmapCalendar data={heatmapData} weeks={12} />
        </div>
      </FadeIn>

      <FadeIn delay={0.11}>
        <div>
          <h2 className="mb-3 font-display text-base font-bold text-slate-900">Unlocked Badges</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {earned.map((badge, i) => (
              <motion.div
                key={badge.id}
                className={`dash-card rounded-xl border-2 p-4 ${rarityStyles[badge.rarity]}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{badge.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{badge.name}</p>
                    <p className="text-[10px] text-slate-500">{badge.desc}</p>
                    <span className={`mt-1 inline-block text-[9px] font-bold uppercase ${rarityLabel[badge.rarity]}`}>
                      {badge.rarity}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.13}>
        <div>
          <h2 className="mb-3 flex items-center gap-2 font-display text-base font-bold text-slate-900">
            <Lock className="h-4 w-4 text-slate-400" />
            Locked Badges
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {locked.map((badge) => (
              <div
                key={badge.id}
                className="dash-card rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-4 opacity-70"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl grayscale">{badge.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-slate-600">{badge.name}</p>
                    <p className="text-[10px] text-slate-400">{badge.desc}</p>
                    <span className={`mt-1 inline-block text-[9px] font-bold uppercase ${rarityLabel[badge.rarity]}`}>
                      {badge.rarity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
