import { Clock, CheckCircle2, AlertCircle, PlayCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const courses = [
  {
    title: 'Stock Market Mastery',
    progress: 75,
    modules: '18/24',
    status: 'in-progress',
  },
  {
    title: 'Personal Budgeting 101',
    progress: 100,
    modules: '12/12',
    status: 'completed',
  },
  {
    title: 'Tax Planning for Students',
    progress: 30,
    modules: '3/10',
    status: 'in-progress',
  },
]

const challenges = [
  {
    title: 'Budget Allocation Quiz',
    type: 'Assignment',
    due: 'Due in 2 days',
    questions: 10,
    status: 'pending',
    xp: 150,
  },
  {
    title: 'Stock Market Basics — Final Test',
    type: 'Test',
    due: 'Due in 5 days',
    questions: 25,
    status: 'pending',
    xp: 300,
  },
  {
    title: 'Weekly Savings Challenge',
    type: 'Challenge',
    due: 'Completed',
    questions: 5,
    status: 'done',
    xp: 100,
  },
  {
    title: 'Expense Tracking Task',
    type: 'Assignment',
    due: 'Due tomorrow',
    questions: 7,
    status: 'urgent',
    xp: 120,
  },
]

const statusStyle = {
  pending: { icon: Clock, badge: 'bg-navy-50 text-navy-700', label: 'Pending' },
  urgent: { icon: AlertCircle, badge: 'bg-red-50 text-red-600', label: 'Due Soon' },
  done: { icon: CheckCircle2, badge: 'bg-brand-50 text-brand-700', label: 'Completed' },
}

export default function LearnChallengesTab() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {/* Courses */}
      <div className="glass-card rounded-2xl p-5 sm:p-6">
        <h3 className="font-display text-base font-bold text-slate-900 sm:text-lg">
          My Courses
        </h3>
        <p className="text-muted mt-1 text-xs">Continue learning where you left off</p>
        <div className="mt-4 space-y-3">
          {courses.map((course) => (
            <motion.div
              key={course.title}
              className="rounded-xl border border-navy-100 bg-white p-4"
              whileHover={{ x: 4 }}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{course.title}</p>
                  <p className="text-xs text-slate-500">{course.modules} modules</p>
                </div>
                {course.status === 'completed' ? (
                  <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
                    ✓ Done
                  </span>
                ) : (
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-full bg-navy-500 px-2.5 py-1 text-[10px] font-semibold text-white"
                  >
                    <PlayCircle className="h-3 w-3" /> Resume
                  </button>
                )}
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${
                    course.progress === 100
                      ? 'bg-brand-500'
                      : 'bg-gradient-to-r from-navy-400 to-brand-500'
                  }`}
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <p className="mt-1 text-[10px] font-medium text-slate-500">{course.progress}% complete</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Challenges / Assignments / Tests */}
      <div className="glass-card rounded-2xl p-5 sm:p-6">
        <h3 className="font-display text-base font-bold text-slate-900 sm:text-lg">
          Assigned Challenges
        </h3>
        <p className="text-muted mt-1 text-xs">
          Assignments, tests & weekly challenges from your mentors
        </p>
        <div className="mt-4 space-y-3">
          {challenges.map((ch) => {
            const style = statusStyle[ch.status]
            const Icon = style.icon
            return (
              <motion.div
                key={ch.title}
                className="rounded-xl border border-navy-100 bg-white p-4"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${style.badge}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-semibold text-slate-900">{ch.title}</p>
                      <span className="rounded-full bg-yellow-50 px-2 py-0.5 text-[10px] font-bold text-gold-700">
                        {ch.type}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {ch.questions} questions · +{ch.xp} XP
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className={`text-[11px] font-semibold ${ch.status === 'urgent' ? 'text-red-500' : 'text-slate-500'}`}>
                        {ch.due}
                      </span>
                      {ch.status !== 'done' && (
                        <button
                          type="button"
                          className="rounded-full bg-gradient-to-r from-brand-500 to-navy-500 px-3 py-1 text-[10px] font-semibold text-white"
                        >
                          Start Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
