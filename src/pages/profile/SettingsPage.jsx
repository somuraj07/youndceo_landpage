import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Bell, Shield, Palette, LogOut, Camera } from 'lucide-react'
import { FadeIn } from '../../components/motion'
import { user } from '../../data/profileData'

const sections = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'privacy', label: 'Privacy', icon: Shield },
  { id: 'appearance', label: 'Appearance', icon: Palette },
]

export default function SettingsPage() {
  const [active, setActive] = useState('profile')
  const [notifications, setNotifications] = useState({
    streak: true,
    challenges: true,
    budget: false,
    markets: true,
  })

  return (
    <div className="grid gap-5 lg:grid-cols-4">
      <FadeIn className="lg:col-span-1">
        <div className="dash-card rounded-2xl p-2">
          {sections.map((s) => {
            const Icon = s.icon
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(s.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                  active === s.id
                    ? 'bg-navy-50 text-navy-700'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                {s.label}
              </button>
            )
          })}
          <button
            type="button"
            className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </FadeIn>

      <FadeIn delay={0.05} className="lg:col-span-3">
        <div className="dash-card rounded-2xl p-5 sm:p-6">
          {active === 'profile' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="font-display text-base font-bold text-slate-900">Profile Settings</h2>
              <p className="text-muted mb-6 text-xs">Manage your account details</p>

              <div className="mb-6 flex items-center gap-4">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-500 to-brand-500 text-lg font-bold text-white">
                    {user.initials}
                  </div>
                  <button type="button" className="absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-200">
                    <Camera className="h-3 w-3 text-slate-600" />
                  </button>
                </div>
                <div>
                  <p className="font-display font-bold text-slate-900">{user.name}</p>
                  <p className="text-xs text-slate-500">Member since {user.memberSince}</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Full Name', value: user.name },
                  { label: 'Email', value: user.email },
                  { label: 'Phone', value: '+91 98765 43210' },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="mb-1 block text-xs font-medium text-slate-600">{field.label}</label>
                    <input
                      type="text"
                      defaultValue={field.value}
                      className="w-full rounded-xl border border-navy-100 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-navy-300 focus:ring-2 focus:ring-navy-100"
                    />
                  </div>
                ))}
                <button type="button" className="rounded-full bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-500/25">
                  Save Changes
                </button>
              </div>
            </motion.div>
          )}

          {active === 'notifications' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="font-display text-base font-bold text-slate-900">Notifications</h2>
              <p className="text-muted mb-6 text-xs">Choose what you want to be notified about</p>
              <div className="space-y-3">
                {Object.entries(notifications).map(([key, on]) => (
                  <div key={key} className="flex items-center justify-between rounded-xl border border-navy-50 bg-slate-50/50 px-4 py-3">
                    <span className="text-sm font-medium capitalize text-slate-800">{key} alerts</span>
                    <button
                      type="button"
                      onClick={() => setNotifications((n) => ({ ...n, [key]: !on }))}
                      className={`relative h-6 w-11 rounded-full transition-colors ${on ? 'bg-brand-500' : 'bg-slate-300'}`}
                    >
                      <span
                        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${on ? 'left-5' : 'left-0.5'}`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {active === 'privacy' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="font-display text-base font-bold text-slate-900">Privacy & Security</h2>
              <p className="text-muted mb-6 text-xs">Control your data and account security</p>
              <div className="space-y-3">
                {['Two-factor authentication', 'Biometric login', 'Hide balance on home screen', 'Share progress with friends'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-xl border border-navy-50 px-4 py-3">
                    <span className="text-sm text-slate-800">{item}</span>
                    <button type="button" className="relative h-6 w-11 rounded-full bg-slate-300">
                      <span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {active === 'appearance' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="font-display text-base font-bold text-slate-900">Appearance</h2>
              <p className="text-muted mb-6 text-xs">Customize how YoungCEO looks</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { name: 'Light', active: true, bg: 'bg-white border-navy-200' },
                  { name: 'Ocean', active: false, bg: 'bg-navy-50 border-navy-300' },
                  { name: 'Forest', active: false, bg: 'bg-brand-50 border-brand-300' },
                ].map((theme) => (
                  <button
                    key={theme.name}
                    type="button"
                    className={`rounded-xl border-2 p-4 text-center transition-all ${theme.bg} ${
                      theme.active ? 'ring-2 ring-brand-500 ring-offset-2' : ''
                    }`}
                  >
                    <div className="mx-auto mb-2 h-8 w-8 rounded-lg bg-gradient-to-br from-brand-400 to-navy-500" />
                    <p className="text-sm font-semibold text-slate-800">{theme.name}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </FadeIn>
    </div>
  )
}
