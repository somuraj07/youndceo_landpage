import { motion } from 'framer-motion'
import {
  GraduationCap,
  PlayCircle,
  CheckCircle2,
  Clock,
  BookMarked,
} from 'lucide-react'
import { FadeIn } from '../../components/motion'
import SkillPetals from '../../components/profile/charts/SkillPetals'
import PathConstellation from '../../components/profile/charts/PathConstellation'
import WaveActivity from '../../components/profile/charts/WaveActivity'
import { courses, skills, learningPath, learningHistory } from '../../data/profileData'

function MiniWave({ data, color }) {
  const max = Math.max(...data.map((d) => d.value))
  return (
    <div className="flex h-12 items-end gap-1">
      {data.map((d) => (
        <motion.div
          key={d.label}
          className="flex-1 rounded-t-md"
          style={{ background: color, opacity: 0.3 + (d.value / max) * 0.7 }}
          initial={{ height: 0 }}
          animate={{ height: `${(d.value / max) * 100}%` }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
      ))}
    </div>
  )
}

export default function LearnPage() {
  const inProgress = courses.filter((c) => !c.done)
  const completed = courses.filter((c) => c.done)

  return (
    <div className="space-y-5">
      <FadeIn>
        <div className="dash-card rounded-2xl p-5 sm:p-6">
          <h2 className="flex items-center gap-2 font-display text-base font-bold text-slate-900">
            <GraduationCap className="h-5 w-5 text-navy-600" />
            Skill Bloom
          </h2>
          <p className="text-muted mb-4 text-xs">Your knowledge petals across finance topics</p>
          <SkillPetals skills={skills} />
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className="dash-card rounded-2xl p-5 sm:p-6">
          <h2 className="font-display text-base font-bold text-slate-900">Learning Constellation</h2>
          <p className="text-muted mb-6 text-xs">Complete nodes to unlock the next milestone</p>
          <PathConstellation nodes={learningPath} />
        </div>
      </FadeIn>

      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        <FadeIn delay={0.08} className="md:col-span-2">
          <div className="dash-card rounded-2xl p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-base font-bold text-slate-900">In Progress</h2>
              <span className="rounded-full bg-navy-50 px-2.5 py-1 text-[10px] font-bold text-navy-700">
                {inProgress.length} active
              </span>
            </div>
            <div className="space-y-3">
              {inProgress.map((c) => (
                <motion.div
                  key={c.id}
                  className="rounded-xl border border-navy-50 bg-gradient-to-r from-white to-navy-50/30 p-4"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0 flex-1">
                      <span className="rounded-md bg-navy-100 px-2 py-0.5 text-[9px] font-bold text-navy-700">
                        {c.category}
                      </span>
                      <p className="mt-1.5 text-sm font-semibold text-slate-900">{c.title}</p>
                      <p className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="h-3 w-3 shrink-0" /> {c.hours}h · {c.modules} modules
                      </p>
                    </div>
                    <button type="button" className="inline-flex w-full shrink-0 items-center justify-center gap-1 rounded-full bg-gradient-to-r from-navy-500 to-brand-500 px-3 py-2 text-[10px] font-semibold text-white shadow-sm sm:w-auto sm:py-1.5">
                      <PlayCircle className="h-3 w-3" /> Resume
                    </button>
                  </div>
                  <div className="mt-3">
                    <div className="mb-1 flex justify-between text-[10px]">
                      <span className="text-slate-500">Progress</span>
                      <span className="font-bold text-brand-600">{c.progress}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-navy-400 via-brand-500 to-gold-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${c.progress}%` }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="dash-card rounded-2xl p-5 sm:p-6">
            <h2 className="font-display text-base font-bold text-slate-900">Weekly Growth</h2>
            <p className="text-muted mb-4 text-xs">Learning momentum</p>
            <MiniWave data={learningHistory} color="#3b82f6" />
            <div className="mt-4 flex justify-between">
              {learningHistory.map((d) => (
                <span key={d.label} className="text-[9px] text-slate-400">{d.label}</span>
              ))}
            </div>
            <div className="mt-6 border-t border-navy-50 pt-4">
              <p className="mb-2 text-xs font-semibold text-slate-700">Completed</p>
              {completed.map((c) => (
                <div key={c.id} className="mb-2 flex items-center gap-2 rounded-lg bg-brand-50/50 px-3 py-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-500" />
                  <span className="text-xs font-medium text-slate-800">{c.title}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.12}>
        <div className="dash-card rounded-2xl p-5 sm:p-6">
          <h2 className="flex items-center gap-2 font-display text-base font-bold text-slate-900">
            <BookMarked className="h-4 w-4 text-brand-600" />
            Study Rhythm
          </h2>
          <p className="text-muted mb-4 text-xs">Hours logged per day this week</p>
          <WaveActivity
            data={[
              { label: 'Mon', value: 45 },
              { label: 'Tue', value: 60 },
              { label: 'Wed', value: 35 },
              { label: 'Thu', value: 80 },
              { label: 'Fri', value: 55 },
              { label: 'Sat', value: 90 },
              { label: 'Sun', value: 40 },
            ]}
          />
        </div>
      </FadeIn>
    </div>
  )
}
