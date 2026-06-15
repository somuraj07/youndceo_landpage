import { GraduationCap, Wallet, LineChart, Check, Sparkles } from 'lucide-react'
import { FadeIn, HoverCard, StaggerContainer, StaggerItem } from './motion'

const benefits = [
  {
    title: 'Learn Without the Overwhelm',
    icon: GraduationCap,
    iconBg: 'bg-navy-50 text-navy-600',
    points: [
      '120+ bite-sized finance courses',
      'From budgeting basics to stock trading',
      'Earn certificates as you progress',
    ],
    stat: '3x faster learning',
    accent: 'from-navy-500 to-navy-600',
  },
  {
    title: 'Track Every Rupee',
    icon: Wallet,
    iconBg: 'bg-brand-50 text-brand-600',
    points: [
      'Smart expense categorization',
      'Monthly budget alerts & insights',
      'Visual spending breakdown charts',
    ],
    stat: 'Save 25% monthly',
    accent: 'from-brand-500 to-brand-600',
  },
  {
    title: 'Trade Smarter, Not Harder',
    icon: LineChart,
    iconBg: 'bg-yellow-50 text-gold-600',
    points: [
      'Live NSE & BSE market prices',
      'Real-time stock & crypto tickers',
      'Watchlists with price alerts',
    ],
    stat: 'Live market data',
    accent: 'from-gold-500 to-gold-600',
  },
]

export default function WhyChoose() {
  return (
    <section className="section-alt border-y border-navy-100/80 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            <Sparkles className="h-3.5 w-3.5" />
            Why YoungCEO
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Why Students Choose{' '}
            <span className="gradient-text">YoungCEO</span>
          </h2>
          <p className="text-body mt-3 text-sm sm:mt-4 sm:text-base">
            Replace scattered YouTube videos, spreadsheets, and trading apps with
            one platform designed for your financial journey.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon
            return (
              <StaggerItem key={item.title}>
                <HoverCard>
                  <div className="glass-card card-glow group h-full rounded-2xl p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.iconBg}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className={`inline-block rounded-full bg-gradient-to-r ${item.accent} px-3 py-1 text-xs font-semibold text-white shadow-sm`}>
                        {item.stat}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-slate-900 sm:text-xl">
                      {item.title}
                    </h3>
                    <ul className="mt-4 space-y-2.5 sm:space-y-3">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="text-body flex items-start gap-2.5 text-sm"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" strokeWidth={2.5} />
                          {point}
                        </li>
                      ))}
                    </ul>
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
