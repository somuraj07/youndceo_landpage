import { Link } from 'react-router-dom'
import { Share2, MessageCircle, PlayCircle, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn } from './motion'
import { contact } from '../data/profileData'

const footerLinks = {
  Product: ['Features', 'Markets', 'Download'],
  Company: ['About Us', 'Careers', 'Blog', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy'],
}

const whatsappHref = `https://wa.me/91${contact.phones[0]}?text=${encodeURIComponent('Hi YoungCEO, I would like to know more.')}`

export default function Footer() {
  return (
    <footer className="relative border-t border-navy-100 bg-white/70 pt-12 pb-6 backdrop-blur-md sm:pt-16 sm:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-5 lg:gap-12">
          <FadeIn className="col-span-2">
            <Link to="/" className="inline-flex items-center" aria-label="YoungCEO home">
              <img
                src="/youngceo-logo.png"
                alt="YoungCEO"
                className="h-12 w-12 rounded-2xl object-cover shadow-md ring-1 ring-white/70"
              />
            </Link>
            <p className="text-muted mt-3 max-w-sm text-xs leading-relaxed sm:mt-4 sm:text-sm">
              One unified platform for students to learn finance, track expenses,
              and watch live markets. From budgeting basics to stock trading —
              build your financial future today.
            </p>
            <div className="mt-5 flex gap-2.5 sm:mt-6 sm:gap-3">
              {[
                { Icon: Share2, href: '#' },
                { Icon: MessageCircle, href: whatsappHref },
                { Icon: PlayCircle, href: '#' },
                { Icon: Mail, href: `mailto:${contact.email}` },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-navy-100 bg-navy-50 text-navy-500"
                  whileHover={{
                    scale: 1.12,
                    backgroundColor: '#eff6ff',
                    borderColor: '#93c5fd',
                    color: '#2563eb',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </FadeIn>

          {Object.entries(footerLinks).map(([title, links]) => (
            <FadeIn key={title} delay={0.1}>
              <h4 className="text-xs font-semibold text-slate-900 sm:text-sm">{title}</h4>
              <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                {links.map((link) => {
                  const href =
                    link === 'Contact' ? '/#contact' :
                    link === 'Features' ? '/#features' :
                    link === 'Markets' ? '/#markets' :
                    link === 'Download' ? '/#download' :
                    link === 'About Us' ? '/#about' :
                    '/'

                  return (
                  <li key={link}>
                    <Link
                      to={href}
                      className="text-muted text-xs sm:text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                  )
                })}
              </ul>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-navy-100 pt-6 text-center sm:mt-12 sm:flex-row sm:gap-4 sm:pt-8 sm:text-left">
          <p className="text-muted text-[11px] sm:text-xs">
            © 2026 YoungCEO. All rights reserved.
          </p>
          <p className="text-muted text-[11px] sm:text-xs">
            Made with ❤️ for the next generation of financial leaders
          </p>
        </div>
      </div>
    </footer>
  )
}
