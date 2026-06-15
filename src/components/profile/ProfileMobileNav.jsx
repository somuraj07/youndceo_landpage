import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  GraduationCap,
  Wallet,
  Trophy,
  Target,
  Settings,
} from 'lucide-react'

const icons = {
  LayoutDashboard,
  GraduationCap,
  Wallet,
  Trophy,
  Target,
  Settings,
}

const links = [
  { label: 'Home', path: '/profile', icon: 'LayoutDashboard', end: true },
  { label: 'Learn', path: '/profile/learn', icon: 'GraduationCap' },
  { label: 'Finance', path: '/profile/finance', icon: 'Wallet' },
  { label: 'Badges', path: '/profile/achievements', icon: 'Trophy' },
  { label: 'Tasks', path: '/profile/challenges', icon: 'Target' },
  { label: 'Settings', path: '/profile/settings', icon: 'Settings' },
]

export default function ProfileMobileNav() {
  return (
    <nav className="profile-bottom-nav fixed bottom-0 left-0 right-0 z-40 border-t border-white/80 bg-white/95 backdrop-blur-xl lg:hidden">
      <ul className="scroll-tabs flex items-stretch justify-start gap-0 overflow-x-auto px-1 py-1.5 sm:justify-around sm:overflow-visible sm:px-2 sm:py-2">
        {links.map((link) => {
          const Icon = icons[link.icon]
          return (
            <li key={link.path} className="shrink-0 sm:flex-1">
              <NavLink
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `flex min-w-[3.75rem] flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 text-[8px] font-semibold transition-colors sm:min-w-0 sm:px-1 sm:text-[9px] ${
                    isActive
                      ? 'bg-brand-50 text-brand-600'
                      : 'text-slate-500 hover:text-slate-700'
                  }`
                }
              >
                <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={2} />
                <span className="truncate">{link.label}</span>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
