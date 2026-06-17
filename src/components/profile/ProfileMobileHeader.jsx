import { Link } from 'react-router-dom'
import { ArrowLeft, Flame } from 'lucide-react'
import { user } from '../../data/profileData'
import ProfileAvatar from './ProfileAvatar'

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
        <ProfileAvatar size="lg" showLevel />
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-base font-bold text-slate-900">{user.name}</p>
          <p className="line-clamp-2 text-xs text-slate-500">{user.tagline}</p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-1.5">
          <Flame className="h-3.5 w-3.5 text-orange-500" />
          <span className="text-xs font-bold text-orange-600">{user.streak}d</span>
        </div>
      </div>
    </div>
  )
}
