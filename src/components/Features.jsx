import {
  GraduationCap,
  Wallet,
  BarChart3,
  Bell,
  Award,
  Shield,
  Smartphone,
  Users,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn, HoverCard, StaggerContainer, StaggerItem } from './motion'

const features = [
  {
    icon: GraduationCap,
    title: 'Expert-Led Courses',
    description:
      'Purchase premium finance courses with video lessons, quizzes, and downloadable resources.',
    color: 'brand',
  },
  {
    icon: Wallet,
    title: 'Smart Expense Tracker',
    description:
      'Log expenses in seconds. Auto-categorize spending and stay within your monthly budget.',
    color: 'navy',
  },
  {
    icon: BarChart3,
    title: 'Live Market Prices',
    description:
      'Real-time NSE, BSE, and global index data. Build watchlists and get price alerts.',
    color: 'gold',
  },
  {
    icon: Bell,
    title: 'Instant Notifications',
    description:
      'Course updates, budget alerts, and market price movements — never miss what matters.',
    color: 'brand',
  },
  {
    icon: Award,
    title: 'Certificates & Badges',
    description:
      'Complete courses and earn shareable certificates to showcase your financial skills.',
    color: 'navy',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description:
      'Your data is encrypted and protected. We never share your financial information.',
    color: 'gold',
  },
  {
    icon: Smartphone,
    title: 'Offline Learning',
    description:
      'Download courses and study anywhere — even without an internet connection.',
    color: 'brand',
  },
  {
    icon: Users,
    title: 'Community Learning',
    description:
      'Join discussion forums, ask mentors questions, and learn alongside peers.',
    color: 'navy',
  },
]

const colorMap = {
  brand: 'bg-brand-50 text-brand-600 group-hover:bg-brand-100 group-hover:shadow-[0_4px_20px_rgba(34,197,94,0.2)]',
  navy: 'bg-navy-50 text-navy-600 group-hover:bg-navy-100 group-hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)]',
  gold: 'bg-yellow-50 text-gold-600 group-hover:bg-yellow-100 group-hover:shadow-[0_4px_20px_rgba(234,179,8,0.2)]',
}

export default function Features() {
  return (
    <section id="features" className="section-glass border-t border-navy-100/60 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Everything Your Financial Journey Needs
          </h2>
          <p className="text-body mt-3 text-sm sm:mt-4 sm:text-base">
            From your first budget to your first stock trade — YoungCEO has you
            covered every step of the way.
          </p>
        </FadeIn>

        <StaggerContainer
          className="mt-10 grid grid-cols-1 gap-4 xs:grid-cols-2 sm:mt-14 sm:gap-5 lg:grid-cols-4"
          stagger={0.07}
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <StaggerItem key={feature.title}>
                <HoverCard className="h-full">
                  <div className="glass-card group h-full rounded-2xl p-5 sm:p-6">
                    <motion.div
                      className={`mb-4 inline-flex rounded-xl p-3 transition-all duration-300 ${colorMap[feature.color]}`}
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <h3 className="font-display text-sm font-bold text-slate-900 sm:text-base">
                      {feature.title}
                    </h3>
                    <p className="text-muted mt-2 text-xs leading-relaxed sm:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </HoverCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
