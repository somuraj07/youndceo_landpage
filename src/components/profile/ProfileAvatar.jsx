import { user } from '../../data/profileData'

const sizeMap = {
  sm: 'h-10 w-10 rounded-lg',
  md: 'h-11 w-11 rounded-xl',
  lg: 'h-12 w-12 rounded-xl',
  xl: 'h-16 w-16 rounded-2xl',
}

export default function ProfileAvatar({ size = 'md', className = '', showLevel = false }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <img
        src={user.avatar}
        alt={user.name}
        className={`${sizeMap[size]} object-cover ring-2 ring-white/30 shadow-md`}
      />
      {showLevel && (
        <span className="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold-400 text-[9px] font-bold text-navy-900 ring-2 ring-white">
          {user.level}
        </span>
      )}
    </div>
  )
}
