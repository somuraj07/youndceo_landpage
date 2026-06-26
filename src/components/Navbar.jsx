import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Home,
  Sparkles,
  LineChart,
  User,
  Download,
  LayoutDashboard,
  GraduationCap,
  Wallet,
  Trophy,
  Settings,
} from 'lucide-react'
import { motion } from 'framer-motion'

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

const mobileHomeLinks = [
  { label: 'Home', href: '/', icon: Home, exact: true },
  { label: 'Features', href: '/#features', icon: Sparkles },
  { label: 'Markets', href: '/#markets', icon: LineChart },
  { label: 'Profile', href: '/profile', icon: User },
  { label: 'App', href: '/#download', icon: Download },
]

const mobileProfileLinks = [
  { label: 'Overview', href: '/profile', icon: LayoutDashboard, exact: true },
  { label: 'Learn', href: '/profile/learn', icon: GraduationCap },
  { label: 'Finance', href: '/profile/finance', icon: Wallet },
  { label: 'Badges', href: '/profile/achievements', icon: Trophy },
  { label: 'Settings', href: '/profile/settings', icon: Settings },
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
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const isProfile = pathname.startsWith('/profile')
  const links = isProfile ? profileNav : homeNav
  const mobileLinks = isProfile ? mobileProfileLinks : mobileHomeLinks

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

  const handleNavClick = (e, href) => {
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

  const isLinkActive = (href, exact = false) => {
    if (href.includes('#')) {
      const section = href.split('#')[1]
      return pathname === '/' && hash === `#${section}`
    }
    if (exact) return pathname === href
    if (isProfile && href === '/profile') return pathname === '/profile'
    return pathname === href || (href !== '/' && pathname.startsWith(href))
  }

  return (
    <>
      {/* Top bar — logo only on mobile, full nav on desktop */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className={`mr-auto flex w-fit max-w-6xl items-center justify-between gap-3 rounded-2xl border px-2 py-2 transition-all duration-300 sm:rounded-full lg:mx-auto lg:w-full lg:px-5 lg:py-3 ${
            scrolled
              ? 'border-white/80 bg-white/95 shadow-lg shadow-slate-900/8 backdrop-blur-xl'
              : 'border-white/60 bg-white/85 shadow-md shadow-navy-500/5 backdrop-blur-lg'
          }`}
        >
          <Link to="/" className="flex shrink-0 items-center lg:pl-2" aria-label="YoungCEO home">
            <img
              src="/youngceo-logo.png"
              alt="YoungCEO"
              className="h-9 w-9 rounded-xl object-cover shadow-sm ring-1 ring-white/70 sm:h-10 sm:w-10"
            />
          </Link>

          {/* Desktop center links */}
          <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex xl:gap-2">
            {links.map((link) => {
              const active = isLinkActive(link.href)
              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors xl:px-4 xl:text-sm ${
                      active ? 'text-navy-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
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

          {/* Desktop CTAs */}
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
              to="/#download"
              onClick={(e) => handleNavClick(e, '/#download')}
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-[13px] font-semibold text-white shadow-md transition-all hover:bg-slate-800 xl:px-5 xl:text-sm"
            >
              {isProfile ? 'Get the App' : 'Download Free'}
            </Link>
          </div>

        </nav>
      </motion.header>

      {/* Mobile bottom tab bar */}
      <nav className="site-bottom-nav fixed bottom-0 left-0 right-0 z-50 border-t border-white/80 bg-white/95 backdrop-blur-xl lg:hidden">
        <ul className="mx-auto flex max-w-lg items-stretch justify-around px-1 py-1.5">
          {mobileLinks.map((link) => {
            const Icon = link.icon
            const active = isLinkActive(link.href, link.exact)
            return (
              <li key={link.href} className="flex-1">
                <Link
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex flex-col items-center gap-0.5 rounded-xl px-1 py-1.5 text-[9px] font-semibold transition-colors ${
                    active ? 'text-brand-600' : 'text-slate-500'
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors ${
                      active ? 'bg-brand-50 text-brand-600' : 'text-slate-500'
                    }`}
                  >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={active ? 2.5 : 2} />
                  </span>
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
