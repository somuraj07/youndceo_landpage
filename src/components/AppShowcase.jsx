import { Check } from 'lucide-react'
import { useState } from 'react'
import { BookOpen, PieChart, LineChart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PhoneMockup from './PhoneMockup'
import { FadeIn, ScaleIn } from './motion'

const tabs = [
  {
    id: 'courses',
    label: 'Courses',
    icon: BookOpen,
    title: 'Your Personal Finance Academy',
    description:
      'Browse expert-led courses on investing, budgeting, taxes, and entrepreneurship. Purchase once, learn forever with offline access.',
    bullets: [
      'Video lessons with quizzes',
      'One-tap course purchase',
      'Progress tracking & certificates',
      'Beginner to advanced paths',
    ],
    variant: 'courses',
  },
  {
    id: 'expenses',
    label: 'Expenses',
    icon: PieChart,
    title: 'Know Where Your Money Goes',
    description:
      'Log daily expenses in seconds. Get smart insights, set budgets, and build better money habits with beautiful visual reports.',
    bullets: [
      'Auto-categorize transactions',
      'Monthly budget limits',
      'Spending trend analytics',
      'Export reports anytime',
    ],
    variant: 'expenses',
  },
  {
    id: 'markets',
    label: 'Markets',
    icon: LineChart,
    title: 'Live Markets at Your Fingertips',
    description:
      'Track NSE, BSE, and global indices in real time. Build watchlists, set price alerts, and apply what you learn instantly.',
    bullets: [
      'Real-time stock prices',
      'Index & sector performance',
      'Custom watchlists',
      'Price alert notifications',
    ],
    variant: 'markets',
  },
]

export default function AppShowcase() {
  const [active, setActive] = useState('courses')
  const current = tabs.find((t) => t.id === active)

  return (
    <section id="solutions" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-wide text-brand-600 uppercase sm:text-sm">
            Three Apps. One Complete Solution.
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl">
            Everything Built Into One App
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="scroll-tabs mt-8 flex gap-2 overflow-x-auto pb-2 sm:mt-10 sm:justify-center sm:gap-3">
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
                      ? 'bg-gradient-to-r from-brand-500 to-navy-500 text-white shadow-lg shadow-navy-500/25'
                      : 'glass-card text-slate-600 hover:text-navy-700'
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  layout
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </motion.button>
              )
            })}
          </div>
        </FadeIn>

        <div className="mt-10 grid items-center gap-8 sm:mt-14 lg:grid-cols-2 lg:gap-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={active + '-text'}
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-center font-display text-xl font-bold text-slate-900 sm:text-2xl lg:text-left lg:text-3xl">
                {current.title}
              </h3>
              <p className="text-body mt-3 text-center text-sm leading-relaxed sm:mt-4 sm:text-base lg:text-left">
                {current.description}
              </p>
              <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                {current.bullets.map((bullet, i) => (
                  <motion.li
                    key={bullet}
                    className="flex items-center gap-3 text-sm text-slate-700"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-100 text-navy-600">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <ScaleIn className="order-1 flex justify-center lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active + '-phone'}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <PhoneMockup
                  variant={current.variant}
                  className="scale-[0.82] sm:scale-90 lg:scale-100"
                />
              </motion.div>
            </AnimatePresence>
          </ScaleIn>
        </div>
      </div>
    </section>
  )
}
