import { Mail, Phone, MapPin, BadgeCheck, Shield, Crown } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn, HoverCard } from './motion'
import { user, contact } from '../data/profileData'

const credentials = [
  { label: 'AMFI Regn No', value: user.amfiRegNo, icon: BadgeCheck },
  { label: 'EUIN', value: user.euin, icon: Shield },
  { label: 'Role', value: user.role, icon: Crown },
]

export default function AboutUs() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-wide text-brand-600 uppercase sm:text-sm">
            About Us
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Meet the{' '}
            <span className="gradient-text">Founder</span>
          </h2>
          <p className="text-body mt-3 text-sm sm:mt-4 sm:text-base">
            YoungCEO was built by a certified finance professional who believes
            every student deserves the tools to master money early.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 sm:mt-12">
          <HoverCard className="glass-card overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="grid md:grid-cols-2 md:items-start">
              {/* Full founder photo — no crop */}
              <motion.div
                className="flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-navy-50/60 p-4 sm:p-6 md:sticky md:top-24 md:p-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-auto w-full max-w-sm object-contain sm:max-w-md md:max-w-full md:max-h-[85vh]"
                />
              </motion.div>

              {/* Founder details */}
              <div className="flex flex-col border-t border-navy-100/60 p-5 sm:p-8 md:border-t-0 md:border-l">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-100 px-3 py-1 text-[10px] font-bold text-gold-700 uppercase tracking-wide sm:text-xs">
                    <Crown className="h-3.5 w-3.5" />
                    Founder · YoungCEO
                  </span>
                  <h3 className="font-display mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {user.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-600">{user.tagline}</p>
                </div>

                <p className="text-body mt-5 text-sm leading-relaxed sm:mt-6 sm:text-base">
                  {user.displayName} is the founder of YoungCEO a AMFI registered
                  mutual fund distributor on a mission to make financial education
                  accessible for students and young investors. He built this platform
                  to combine learning, budgeting, and live market insights in one
                  place, backed by real industry credentials.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {credentials.map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.label}
                        className="rounded-xl border border-navy-100 bg-gradient-to-br from-white to-navy-50/50 p-3 sm:p-4"
                      >
                        <Icon className="h-4 w-4 text-brand-600" />
                        <p className="mt-2 text-[10px] font-medium uppercase tracking-wide text-slate-500">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-xs font-bold text-slate-900 sm:text-sm">
                          {item.value}
                        </p>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-5 flex-1 space-y-3">
                  <motion.a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 rounded-xl border border-navy-50 bg-white px-4 py-3 transition-colors hover:border-navy-200 hover:bg-navy-50/30"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-600">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-500">Email</p>
                      <p className="truncate text-sm font-semibold text-slate-900">{contact.email}</p>
                    </div>
                  </motion.a>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {contact.phones.map((phone, i) => (
                      <motion.a
                        key={phone}
                        href={`tel:+91${phone}`}
                        className="flex items-center gap-3 rounded-xl border border-navy-50 bg-white px-4 py-3 transition-colors hover:border-brand-200 hover:bg-brand-50/30"
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                          <Phone className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-500">{i === 0 ? 'Primary' : 'Alternate'}</p>
                          <p className="text-sm font-semibold text-slate-900">+91 {phone}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-navy-50 bg-white px-4 py-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-50 text-gold-600">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500">Address</p>
                      <p className="text-sm leading-relaxed text-slate-800">{user.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HoverCard>
        </FadeIn>
      </div>
    </section>
  )
}
