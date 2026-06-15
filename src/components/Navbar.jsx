import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, TrendingUp, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { HoverButton } from './motion'

const homeLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Markets', href: '/#markets' },
  { label: 'How It Works', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isProfile = pathname === '/profile'

  const links = isProfile
    ? [{ label: 'Home', href: '/' }, { label: 'Profile', href: '/profile' }]
    : [...homeLinks, { label: 'Profile', href: '/profile' }]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/60 bg-white/75 shadow-sm shadow-navy-500/5 backdrop-blur-xl"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-2 sm:gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 via-navy-500 to-gold-400 shadow-md shadow-navy-500/20 sm:h-9 sm:w-9">
              <TrendingUp className="h-4 w-4 text-white sm:h-5 sm:w-5" strokeWidth={2.5} />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              Young<span className="text-brand-600">CEO</span>
            </span>
          </motion.div>
        </Link>

        <ul className="hidden items-center gap-5 lg:flex lg:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link to={link.href}>
                <motion.span
                  className={`relative block text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'text-navy-600'
                      : 'text-slate-600 hover:text-navy-600'
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/profile"
            className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-navy-50 px-4 py-2.5 text-sm font-semibold text-navy-700 transition-all hover:scale-105 hover:bg-navy-100"
          >
            <User className="h-4 w-4" />
            My Profile
          </Link>
          <Link
            to="/#download"
            className="btn-glow rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-500/30 transition-all hover:scale-105"
          >
            Get the App
          </Link>
        </div>

        <motion.button
          type="button"
          className="rounded-lg p-2 text-slate-600 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-navy-100 bg-white/95 px-4 py-5 shadow-lg backdrop-blur-xl lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-navy-50 hover:text-navy-700"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
                className="mt-2 space-y-2 px-3"
              >
                <Link to="/profile" onClick={() => setOpen(false)} className="block">
                  <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-navy-200 bg-navy-50 py-2.5 text-sm font-semibold text-navy-700">
                    <User className="h-4 w-4" /> My Profile
                  </span>
                </Link>
                <Link to="/#download" onClick={() => setOpen(false)} className="block">
                  <span className="btn-glow inline-block w-full rounded-full bg-brand-500 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-brand-500/30">
                    Get the App
                  </span>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
