import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  GraduationCap,
  Wallet,
  Trophy,
  Target,
  Settings,
  ArrowLeft,
  Flame,
} from 'lucide-react'
import { user } from '../../data/profileData'
import ProfileAvatar from './ProfileAvatar'

const icons = {
  LayoutDashboard,
  GraduationCap,
  Wallet,
  Trophy,
  Target,
  Settings,
}

const links = [
  { label: 'Overview', path: '/profile', icon: 'LayoutDashboard', end: true },
  { label: 'Learn', path: '/profile/learn', icon: 'GraduationCap' },
  { label: 'Finance', path: '/profile/finance', icon: 'Wallet' },
  { label: 'Achievements', path: '/profile/achievements', icon: 'Trophy' },
  { label: 'Challenges', path: '/profile/challenges', icon: 'Target' },
  { label: 'Settings', path: '/profile/settings', icon: 'Settings' },
]

export default function ProfileSidebar() {
  return (
    <aside className="hidden lg:flex lg:w-64 lg:shrink-0 lg:flex-col">
      <div className="dash-card sticky top-24 rounded-2xl p-4">
        <NavLink
          to="/"
          className="mb-4 flex items-center gap-2 rounded-xl px-2 py-1.5 text-xs font-medium text-navy-600 transition-colors hover:bg-navy-50"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </NavLink>

        <div className="rounded-xl bg-gradient-to-br from-navy-500 via-brand-500 to-navy-600 p-4 text-white">
          <div className="flex items-center gap-3">
            <ProfileAvatar size="md" showLevel />
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-bold">{user.name}</p>
              <p className="line-clamp-2 text-[10px] text-white/75">{user.tagline}</p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-white/15 px-2.5 py-1.5">
            <Flame className="h-3.5 w-3.5 text-gold-300" />
            <span className="text-[11px] font-semibold">{user.streak} day streak</span>
          </div>
        </div>

        <nav className="mt-4 space-y-0.5">
          {links.map((link) => {
            const Icon = icons[link.icon]
            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-navy-500 to-brand-500 text-white shadow-md shadow-navy-500/20'
                      : 'text-slate-600 hover:bg-navy-50 hover:text-navy-700'
                  }`
                }
              >
                <Icon className="h-4 w-4 shrink-0" />
                {link.label}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
