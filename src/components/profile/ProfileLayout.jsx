import { Outlet, useLocation } from 'react-router-dom'
import ProfileSidebar from './ProfileSidebar'
import ProfileMobileNav from './ProfileMobileNav'

const titles = {
  '/profile': 'Overview',
  '/profile/learn': 'Learn',
  '/profile/finance': 'Finance',
  '/profile/achievements': 'Achievements',
  '/profile/challenges': 'Challenges',
  '/profile/settings': 'Settings',
}

export default function ProfileLayout() {
  const { pathname } = useLocation()
  const title = titles[pathname] || 'Profile'

  return (
    <div className="relative pt-20 pb-24 sm:pt-24 lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 lg:mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">My Profile</p>
          <h1 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h1>
        </div>

        <div className="flex gap-6 lg:gap-8">
          <ProfileSidebar />
          <div className="min-w-0 flex-1">
            <Outlet />
          </div>
        </div>
      </div>
      <ProfileMobileNav />
    </div>
  )
}
