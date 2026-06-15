import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, TrendingUp, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const homeNav = [
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Features', href: '/#features' },
  { label: 'Our Process', href: '/#process' },
  { label: 'Markets', href: '/#markets' },
  { label: 'Contact Us', href: '/#contact' },
]

const profileNav = [
  { label: 'Overview', href: '/profile' },
  { label: 'Learn', href: '/profile/learn' },
  { label: 'Finance', href: '/profile/finance' },
  { label: 'Home', href: '/' },
]

function scrollToHash(hash, offset = 100) {
  if (!hash) return
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const isProfile = pathname.startsWith('/profile')
  const links = isProfile ? profileNav : homeNav

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (pathname === '/' && hash) {
      requestAnimationFrame(() => scrollToHash(hash))
    }
  }, [pathname, hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNavClick = (e, href) => {
    setOpen(false)
    if (!href.includes('#')) return

    const hashPart = href.slice(href.indexOf('#'))
    const targetPath = href.split('#')[0] || '/'

    if (pathname === targetPath) {
      e.preventDefault()
      window.history.pushState(null, '', hashPart)
      scrollToHash(hashPart)
    } else {
      e.preventDefault()
      navigate({ pathname: targetPath, hash: hashPart.replace('#', '') })
    }
  }

  const isLinkActive = (href) => {
    if (isProfile) return pathname === href
    if (href.includes('#')) {
      const section = href.split('#')[1]
      return pathname === '/' && hash === `#${section}`
    }
    return pathname === href
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 transition-all duration-300 sm:rounded-full sm:px-4 sm:py-3 lg:px-5 ${
            scrolled
              ? 'border-white/80 bg-white/95 shadow-lg shadow-slate-900/8 backdrop-blur-xl'
              : 'border-white/60 bg-white/85 shadow-md shadow-navy-500/5 backdrop-blur-lg'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center gap-2 pl-1 sm:gap-2.5 sm:pl-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 via-navy-500 to-gold-400 shadow-sm sm:h-9 sm:w-9">
              <TrendingUp className="h-4 w-4 text-white sm:h-[18px] sm:w-[18px]" strokeWidth={2.5} />
            </div>
            <span className="font-display text-base font-bold tracking-tight text-slate-900 sm:text-lg">
              Young<span className="text-brand-600">CEO</span>
            </span>
          </Link>

          {/* Desktop links — Timelly-style center nav */}
          <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex xl:gap-2">
            {links.map((link) => {
              const active = isLinkActive(link.href)
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors xl:px-4 xl:text-sm ${
                      active
                        ? 'text-navy-700'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-navy-500"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA — Timelly "Book a Demo" style */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            {!isProfile && (
              <Link
                to="/profile"
                className="rounded-full px-4 py-2.5 text-[13px] font-semibold text-slate-700 transition-colors hover:bg-slate-100 xl:text-sm"
              >
                My Profile
              </Link>
            )}
            <Link
              to={isProfile ? '/#download' : '/#download'}
              onClick={(e) => handleNavClick(e, '/#download')}
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-[13px] font-semibold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg xl:px-5 xl:text-sm"
            >
              {isProfile ? 'Get the App' : 'Download Free'}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer — Timelly clean list */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-[4.5rem] right-3 left-3 z-50 overflow-hidden rounded-2xl border border-white/80 bg-white/98 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:right-4 sm:left-4 lg:hidden"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="p-2">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isLinkActive(link.href)
                          ? 'bg-navy-50 text-navy-700'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="space-y-2 border-t border-slate-100 p-3">
                {!isProfile && (
                  <Link
                    to="/profile"
                    onClick={() => setOpen(false)}
                    className="block w-full rounded-full border border-slate-200 py-3 text-center text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                  >
                    My Profile
                  </Link>
                )}
                <Link
                  to="/#download"
                  onClick={(e) => handleNavClick(e, '/#download')}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 py-3 text-sm font-semibold text-white shadow-md"
                >
                  Download Free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
