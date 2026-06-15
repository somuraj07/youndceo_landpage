import { Download, UserCircle, BookOpen, TrendingUp, Footprints } from 'lucide-react'
import { FadeIn, HoverCard, StaggerContainer, StaggerItem } from './motion'

const steps = [
  {
    num: '01',
    title: 'Download',
    description: 'Get YoungCEO free from the Google Play Store in seconds.',
    icon: Download,
    iconBg: 'bg-navy-50 text-navy-600',
    color: 'text-navy-500',
  },
  {
    num: '02',
    title: 'Set Up Profile',
    description: 'Create your account, set financial goals, and pick your learning path.',
    icon: UserCircle,
    iconBg: 'bg-brand-50 text-brand-600',
    color: 'text-brand-500',
  },
  {
    num: '03',
    title: 'Start Learning',
    description: 'Browse courses, track expenses, and explore live market data.',
    icon: BookOpen,
    iconBg: 'bg-yellow-50 text-gold-600',
    color: 'text-gold-500',
  },
  {
    num: '04',
    title: 'Build Wealth',
    description: 'Apply what you learn. Grow smarter with every rupee you manage.',
    icon: TrendingUp,
    iconBg: 'bg-navy-50 text-navy-700',
    color: 'text-navy-600',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
            <Footprints className="h-3.5 w-3.5" />
            Simple Steps
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Start Your Financial Journey in 4 Steps
          </h2>
          <p className="text-body mt-3 text-sm sm:mt-4 sm:text-base">
            We make it simple. Download, learn, track, and grow — all from your
            phone.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-4 xs:grid-cols-2 sm:mt-14 sm:gap-6 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <StaggerItem key={step.num}>
                <HoverCard className="h-full">
                  <div className="glass-card group relative h-full overflow-hidden rounded-2xl p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.iconBg}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className={`font-display text-3xl font-extrabold opacity-20 ${step.color}`}>
                        {step.num}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-slate-900 sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-muted mt-2 text-xs leading-relaxed sm:mt-3 sm:text-sm">
                      {step.description}
                    </p>
                    <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-navy-100 transition-transform duration-500 group-hover:scale-150" />
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
