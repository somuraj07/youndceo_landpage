import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutDashboard, Target, BookOpen, BarChart3 } from 'lucide-react'
import OverviewTab from './OverviewTab'
import GoalsBudgetTab from './GoalsBudgetTab'
import LearnChallengesTab from './LearnChallengesTab'
import RecordsTab from './RecordsTab'

const tabs = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'goals', label: 'Goals & Budget', icon: Target },
  { id: 'learn', label: 'Learn + Challenges', icon: BookOpen },
  { id: 'records', label: 'Records & Graphs', icon: BarChart3 },
]

export default function ProfileTabs() {
  const [active, setActive] = useState('overview')

  const content = {
    overview: <OverviewTab />,
    goals: <GoalsBudgetTab />,
    learn: <LearnChallengesTab />,
    records: <RecordsTab />,
  }

  return (
    <div className="mt-8 sm:mt-10">
      <div className="scroll-tabs flex gap-2 overflow-x-auto pb-2">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = active === tab.id
          return (
            <motion.button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold sm:px-5 sm:text-sm ${
                isActive
                  ? 'bg-gradient-to-r from-brand-500 to-navy-500 text-white shadow-lg shadow-navy-500/20'
                  : 'glass-card text-slate-600 hover:text-navy-700'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
            </motion.button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="mt-6"
        >
          {content[active]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
