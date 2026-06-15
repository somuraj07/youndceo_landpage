import { Link } from 'react-router-dom'
import { ArrowLeft, Flame } from 'lucide-react'
import { user } from '../../data/profileData'

export default function ProfileMobileHeader() {
  return (
    <div className="dash-card mb-4 rounded-2xl p-4 lg:hidden">
      <Link
        to="/"
        className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium text-navy-600 hover:text-navy-700"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Home
      </Link>
      <div className="flex items-center gap-3">
        <div className="relative shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-500 to-brand-500 text-sm font-bold text-white shadow-md">
            {user.initials}
          </div>
          <span className="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold-400 text-[9px] font-bold text-navy-900 ring-2 ring-white">
            {user.level}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-base font-bold text-slate-900">{user.name}</p>
          <p className="text-xs text-slate-500">{user.tagline}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-1.5">
          <Flame className="h-3.5 w-3.5 text-orange-500" />
          <span className="text-xs font-bold text-orange-600">{user.streak}d</span>
        </div>
      </div>
    </div>
  )
}
