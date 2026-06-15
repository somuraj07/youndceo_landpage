import { Link } from 'react-router-dom'
import { ArrowRight, User, TrendingUp, Download, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import PhoneMockup from './PhoneMockup'
import { FadeIn, HoverButton } from './motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <FadeIn delay={0.1}>
              <motion.div
                className="badge-pill mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 sm:mb-6 sm:px-4"
                whileHover={{ scale: 1.03 }}
              >
                <Sparkles className="h-3.5 w-3.5 text-gold-500" />
                <span className="text-[10px] font-semibold tracking-wide text-navy-700 uppercase sm:text-xs">
                  #1 Finance App for Students
                </span>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-display text-[2rem] leading-[1.12] font-extrabold tracking-tight text-slate-900 xs:text-4xl sm:text-5xl lg:text-6xl">
                One App to{' '}
                <span className="gradient-text">Master Your Money</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-body mx-auto mt-5 max-w-lg text-base leading-relaxed sm:mt-6 sm:text-lg lg:mx-0">
                Courses, expense tracking, and live market prices — all in one
                powerful app built for the next generation of financial leaders.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-7 flex flex-col items-center gap-3 xs:flex-row xs:justify-center sm:mt-8 sm:gap-4 lg:justify-start">
                <HoverButton
                  href="#download"
                  className="btn-glow group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 sm:w-auto"
                >
                  <Download className="h-4 w-4" />
                  Download Free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </HoverButton>
                <Link to="/profile">
                  <HoverButton className="btn-secondary group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold sm:w-auto">
                    <User className="h-4 w-4 text-navy-600" />
                    View Profile Demo
                  </HoverButton>
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left" className="relative flex justify-center lg:justify-end">
            <motion.div
              className="animate-float"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <PhoneMockup variant="home" className="scale-[0.85] sm:scale-95 lg:scale-100" />
            </motion.div>

            <motion.div
              className="stat-card absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-2xl p-3 sm:-bottom-4 sm:left-4 sm:translate-x-0 sm:p-4 lg:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50">
                  <TrendingUp className="h-4 w-4 text-brand-600" />
                </div>
                <div>
                  <p className="text-muted text-[10px] sm:text-xs">Portfolio Today</p>
                  <p className="font-display text-base font-bold text-brand-600 sm:text-lg">
                    +₹2,450
                  </p>
                </div>
              </div>
              <p className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-gold-600 sm:text-xs">
                <TrendingUp className="h-3 w-3" />
                +12.4% this week
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
