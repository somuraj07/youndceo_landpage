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
    <nav className="scroll-tabs fixed bottom-0 left-0 right-0 z-40 border-t border-white/80 bg-white/90 px-2 py-2 backdrop-blur-xl lg:hidden">
      <ul className="flex justify-around">
        {links.map((link) => {
          const Icon = icons[link.icon]
          return (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-0.5 rounded-xl px-2 py-1.5 text-[9px] font-semibold transition-colors ${
                    isActive ? 'text-brand-600' : 'text-slate-500'
                  }`
                }
              >
                <Icon className="h-5 w-5" strokeWidth={2} />
                {link.label}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
