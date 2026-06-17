export const user = {
  name: 'Mr. Gowtham Kumar',
  displayName: 'Gowtham Kumar',
  initials: 'GK',
  avatar: '/profile/gowtham-kumar.png',
  level: 7,
  xp: 2450,
  xpTarget: 3000,
  xpPercent: 82,
  streak: 21,
  tagline: 'AMFI Registered Mutual Fund Distributor',
  role: 'Founder',
  memberSince: 'Jan 2025',
  email: 'gowthamtv.in@gmail.com',
  phones: ['9492041246', '9124549333'],
  phone: '9492041246',
  amfiRegNo: 'ARN-345215',
  euin: 'E656737',
  address: 'H No 10-3, Geetanjali College Street, Bhimadolu Mandal, Polasanipalli, West Godavari — 534425',
}

export const contact = {
  email: user.email,
  phones: user.phones,
  phoneDisplay: user.phones.map((p) => `+91 ${p}`),
}

export const kpis = [
  { label: 'Balance', value: '₹48,250', change: '+12.4%', trend: 'up' },
  { label: 'Budget Left', value: '₹7,520', change: '37% left', trend: 'neutral' },
  { label: 'Courses', value: '3', change: 'In progress', trend: 'neutral' },
  { label: 'XP Earned', value: '2,450', change: 'Level 7', trend: 'up' },
]

export const weeklyActivity = [
  { label: 'Mon', value: 65 },
  { label: 'Tue', value: 45 },
  { label: 'Wed', value: 80 },
  { label: 'Thu', value: 55 },
  { label: 'Fri', value: 92 },
  { label: 'Sat', value: 40 },
  { label: 'Sun', value: 70 },
]

export const budgetSegments = [
  { label: 'Food', value: 4200, color: '#22c55e' },
  { label: 'Transport', value: 1800, color: '#3b82f6' },
  { label: 'Entertainment', value: 2100, color: '#f472b6' },
  { label: 'Shopping', value: 1500, color: '#eab308' },
  { label: 'Education', value: 999, color: '#8b5cf6' },
]

export const budgetTotal = 20000

export const goals = [
  { id: 'emergency', title: 'Emergency Fund', saved: 34000, target: 50000, color: '#22c55e', icon: '🛡️' },
  { id: 'trip', title: 'Europe Trip', saved: 48000, target: 120000, color: '#3b82f6', icon: '✈️' },
  { id: 'mba', title: 'MBA Savings', saved: 125000, target: 500000, color: '#eab308', icon: '🎓' },
]

export const skills = [
  { name: 'Budgeting', value: 88, color: '#22c55e' },
  { name: 'Investing', value: 72, color: '#3b82f6' },
  { name: 'Taxes', value: 45, color: '#eab308' },
  { name: 'Markets', value: 78, color: '#8b5cf6' },
  { name: 'Savings', value: 91, color: '#f472b6' },
  { name: 'Credit', value: 60, color: '#06b6d4' },
]

export const courses = [
  { id: 1, title: 'Stock Market Mastery', progress: 75, modules: '18/24', done: false, category: 'Investing', hours: 12 },
  { id: 2, title: 'Personal Budgeting 101', progress: 100, modules: '12/12', done: true, category: 'Budgeting', hours: 8 },
  { id: 3, title: 'Tax Planning Basics', progress: 30, modules: '3/10', done: false, category: 'Taxes', hours: 4 },
  { id: 4, title: 'Crypto Fundamentals', progress: 10, modules: '1/8', done: false, category: 'Markets', hours: 1 },
]

export const challenges = [
  { id: 1, title: 'Budget Allocation Quiz', type: 'Assignment', due: '2 days', status: 'pending', xp: 150, progress: 0 },
  { id: 2, title: 'Stock Market Final Test', type: 'Test', due: '5 days', status: 'pending', xp: 300, progress: 40 },
  { id: 3, title: 'Expense Tracking Task', type: 'Assignment', due: 'Tomorrow', status: 'urgent', xp: 120, progress: 65 },
  { id: 4, title: 'Weekly Savings Challenge', type: 'Challenge', due: 'Done', status: 'done', xp: 100, progress: 100 },
]

export const badges = [
  { id: 1, name: 'First Save', desc: 'Created your first savings goal', earned: true, rarity: 'common', icon: '💰' },
  { id: 2, name: 'Week Warrior', desc: '7-day learning streak', earned: true, rarity: 'rare', icon: '🔥' },
  { id: 3, name: 'Budget Boss', desc: 'Stayed under budget for a month', earned: true, rarity: 'epic', icon: '📊' },
  { id: 4, name: 'Market Maven', desc: 'Complete 5 investing modules', earned: false, rarity: 'epic', icon: '📈' },
  { id: 5, name: 'Tax Titan', desc: 'Finish Tax Planning course', earned: false, rarity: 'legendary', icon: '🏆' },
  { id: 6, name: 'CEO Mindset', desc: 'Reach Level 10', earned: false, rarity: 'legendary', icon: '👑' },
]

export const savingsHistory = [
  { label: 'Jan', value: 20 },
  { label: 'Feb', value: 35 },
  { label: 'Mar', value: 42 },
  { label: 'Apr', value: 50 },
  { label: 'May', value: 58 },
  { label: 'Jun', value: 68 },
]

export const learningHistory = [
  { label: 'W1', value: 30 },
  { label: 'W2', value: 45 },
  { label: 'W3', value: 55 },
  { label: 'W4', value: 70 },
  { label: 'W5', value: 78 },
  { label: 'W6', value: 85 },
]

export const heatmapData = [
  0,1,2,3,2,1,0, 1,2,3,4,3,2,1, 2,3,4,4,3,2,2, 1,2,3,3,4,3,1,
  2,3,4,4,4,3,2, 3,4,4,3,4,4,3, 2,3,4,4,3,3,2, 1,2,3,4,3,2,1,
  2,3,4,4,4,3,2, 3,4,4,4,4,4,3, 2,3,4,4,3,3,2, 1,1,2,3,2,1,0,
].map((value, day) => ({ day, value }))

export const learningPath = [
  { id: 1, title: 'Money Basics', done: true, x: 10, y: 50 },
  { id: 2, title: 'Budgeting', done: true, x: 28, y: 30 },
  { id: 3, title: 'Saving', done: true, x: 45, y: 55 },
  { id: 4, title: 'Investing', done: false, current: true, x: 62, y: 35 },
  { id: 5, title: 'Taxes', done: false, x: 78, y: 50 },
  { id: 6, title: 'Wealth', done: false, x: 92, y: 28 },
]

export const navItems = [
  { label: 'Overview', path: '/profile', icon: 'LayoutDashboard', end: true },
  { label: 'Learn', path: '/profile/learn', icon: 'GraduationCap' },
  { label: 'Finance', path: '/profile/finance', icon: 'Wallet' },
  { label: 'Achievements', path: '/profile/achievements', icon: 'Trophy' },
  { label: 'Challenges', path: '/profile/challenges', icon: 'Target' },
  { label: 'Settings', path: '/profile/settings', icon: 'Settings' },
]
