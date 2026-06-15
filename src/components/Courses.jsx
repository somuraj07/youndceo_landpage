import { motion } from 'framer-motion'
import {
  BookOpen,
  Star,
  Users,
  PlayCircle,
  GraduationCap,
  Wallet,
  Coins,
  Receipt,
  ArrowRight,
} from 'lucide-react'
import { FadeIn, HoverCard, StaggerContainer, StaggerItem, HoverButton } from './motion'

const courses = [
  {
    title: 'Stock Market Mastery',
    instructor: 'Arjun Mehta',
    price: '₹999',
    rating: 4.9,
    students: '12.4K',
    lessons: 24,
    level: 'Intermediate',
    tag: 'Bestseller',
    gradient: 'from-navy-400 via-brand-400 to-navy-300',
    icon: GraduationCap,
  },
  {
    title: 'Personal Budgeting 101',
    instructor: 'Priya Nair',
    price: '₹499',
    rating: 4.8,
    students: '8.2K',
    lessons: 12,
    level: 'Beginner',
    tag: 'Popular',
    gradient: 'from-brand-400 via-navy-300 to-brand-300',
    icon: Wallet,
  },
  {
    title: 'Crypto & Web3 Basics',
    instructor: 'Vikram Singh',
    price: '₹799',
    rating: 4.7,
    students: '6.1K',
    lessons: 18,
    level: 'Beginner',
    tag: 'New',
    gradient: 'from-gold-300 via-navy-300 to-brand-300',
    icon: Coins,
  },
  {
    title: 'Tax Planning for Students',
    instructor: 'Ananya Rao',
    price: '₹599',
    rating: 4.9,
    students: '4.8K',
    lessons: 10,
    level: 'All Levels',
    tag: 'Trending',
    gradient: 'from-navy-300 via-gold-300 to-brand-400',
    icon: Receipt,
  },
]

export default function Courses() {
  return (
    <section id="courses" className="section-alt py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end sm:gap-6">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-brand-600 uppercase sm:text-sm">
                <BookOpen className="h-4 w-4" />
                Course Marketplace
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Learn. Purchase. Grow.
              </h2>
              <p className="text-body mt-2 max-w-lg text-sm sm:mt-3 sm:text-base">
                Browse curated finance courses built for students. One-tap purchase,
                lifetime access, and certificates on completion.
              </p>
            </div>
            <HoverButton
              href="#download"
              className="btn-secondary inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-center text-sm font-semibold sm:w-auto"
            >
              View All Courses
              <ArrowRight className="h-4 w-4" />
            </HoverButton>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-8 grid grid-cols-1 gap-5 xs:grid-cols-2 sm:mt-12 lg:grid-cols-4 lg:gap-6">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <StaggerItem key={course.title}>
                <HoverCard className="h-full">
                  <div className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl">
                    <div className={`relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br ${course.gradient} sm:h-36`}>
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-navy-600 shadow-lg">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-navy-700 shadow-sm">
                        {course.tag}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <p className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-600">
                        <GraduationCap className="h-3 w-3" />
                        {course.level}
                      </p>
                      <h3 className="mt-1 font-display text-sm font-bold text-slate-900 sm:text-base">
                        {course.title}
                      </h3>
                      <p className="text-muted mt-1 text-xs">{course.instructor}</p>
                      <div className="text-muted mt-2 flex flex-wrap items-center gap-2 text-[11px] sm:mt-3 sm:gap-3 sm:text-xs">
                        <span className="inline-flex items-center gap-0.5">
                          <Star className="h-3 w-3 fill-gold-400 text-gold-400" />
                          {course.rating}
                        </span>
                        <span className="inline-flex items-center gap-0.5">
                          <Users className="h-3 w-3" />
                          {course.students}
                        </span>
                        <span className="inline-flex items-center gap-0.5">
                          <PlayCircle className="h-3 w-3" />
                          {course.lessons} lessons
                        </span>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-4">
                        <span className="font-display text-base font-bold text-navy-700 sm:text-lg">
                          {course.price}
                        </span>
                        <motion.button
                          type="button"
                          className="inline-flex items-center gap-1 rounded-full bg-brand-500 px-3 py-1.5 text-[11px] font-semibold text-white shadow-md shadow-brand-500/25 transition-all group-hover:bg-brand-600 sm:px-4 sm:text-xs"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <PlayCircle className="h-3 w-3" />
                          Enroll
                        </motion.button>
                      </div>
                    </div>
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
