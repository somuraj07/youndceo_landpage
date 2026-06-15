import { Outlet, useLocation } from 'react-router-dom'
import ProfileSidebar from './ProfileSidebar'
import ProfileMobileNav from './ProfileMobileNav'
import ProfileMobileHeader from './ProfileMobileHeader'

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
    <div className="profile-shell relative overflow-x-hidden pt-[4.75rem] pb-[calc(4.75rem+env(safe-area-inset-bottom,0px))] sm:pt-[5.25rem] md:pt-24 lg:pb-16 lg:pt-24">
      <div className="mx-auto max-w-7xl px-3 sm:px-5 md:px-6 lg:px-8">
        <div className="mb-4 sm:mb-5 lg:mb-6">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-600 sm:text-xs">
            My Profile
          </p>
          <h1 className="font-display text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">
            {title}
          </h1>
        </div>

        <ProfileMobileHeader />

        <div className="flex gap-5 md:gap-6 lg:gap-8">
          <ProfileSidebar />
          <div className="min-w-0 flex-1 overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
      <ProfileMobileNav />
    </div>
  )
}
