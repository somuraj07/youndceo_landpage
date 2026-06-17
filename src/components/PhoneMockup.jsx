import {
  BookOpen,
  Wallet,
  LineChart,
  Sun,
  Utensils,
  Bus,
  Tv,
  Banknote,
  TrendingUp,
  TrendingDown,
  Star,
  Coins,
} from 'lucide-react'
import { user } from '../data/profileData'

const quickActions = [
  { label: 'Courses', icon: BookOpen, bg: 'bg-brand-50 text-brand-700' },
  { label: 'Expenses', icon: Wallet, bg: 'bg-navy-50 text-navy-700' },
  { label: 'Markets', icon: LineChart, bg: 'bg-yellow-50 text-gold-600' },
]

const expenseIcons = {
  Swiggy: Utensils,
  'Metro Recharge': Bus,
  Netflix: Tv,
  Salary: Banknote,
}

export const phoneScreens = {
  home: (
    <div className="flex h-full flex-col bg-gradient-to-b from-navy-50 to-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="flex items-center gap-1 text-[10px] text-slate-500">
            <Sun className="h-3 w-3" /> Good morning
          </p>
          <p className="text-sm font-bold text-slate-900">{user.displayName}</p>
        </div>
        <img
          src={user.avatar}
          alt={user.name}
          className="h-8 w-8 rounded-full object-cover ring-2 ring-white shadow-sm"
        />
      </div>
      <div className="mb-4 rounded-xl bg-gradient-to-br from-brand-500 via-navy-500 to-navy-600 p-3 shadow-md shadow-navy-500/20">
        <p className="flex items-center gap-1 text-[10px] text-white/80">
          <Wallet className="h-3 w-3" /> Total Balance
        </p>
        <p className="text-lg font-bold text-white">₹48,250</p>
        <p className="flex items-center gap-1 text-[10px] text-gold-300">
          <TrendingUp className="h-3 w-3" /> +₹2,450 this month
        </p>
      </div>
      <p className="mb-2 text-[10px] font-semibold text-slate-500">Quick Actions</p>
      <div className="mb-4 grid grid-cols-3 gap-2">
        {quickActions.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.label}
              className={`flex flex-col items-center gap-1 rounded-lg p-2 shadow-sm ${item.bg}`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="text-[8px] font-semibold">{item.label}</span>
            </div>
          )
        })}
      </div>
      <p className="mb-2 flex items-center gap-1 text-[10px] font-semibold text-slate-500">
        <BookOpen className="h-3 w-3" /> Continue Learning
      </p>
      <div className="rounded-xl border border-navy-100 bg-white p-2.5 shadow-sm">
        <p className="text-[10px] font-semibold text-slate-900">Stock Market Basics</p>
        <div className="mt-1.5 h-1.5 rounded-full bg-navy-100">
          <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-brand-500 to-navy-500" />
        </div>
        <p className="mt-1 text-[9px] text-slate-500">60% complete</p>
      </div>
    </div>
  ),
  courses: (
    <div className="flex h-full flex-col bg-gradient-to-b from-white to-navy-50 p-4">
      <p className="mb-3 flex items-center gap-1.5 text-sm font-bold text-slate-900">
        <BookOpen className="h-4 w-4 text-navy-600" /> Courses
      </p>
      <div className="mb-3 flex gap-2">
        {['All', 'Investing', 'Budget'].map((tag, i) => (
          <span
            key={tag}
            className={`rounded-full px-2.5 py-0.5 text-[9px] font-semibold ${
              i === 0
                ? 'bg-brand-500 text-white shadow-sm'
                : 'border border-navy-100 bg-white text-slate-500 shadow-sm'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      {[
        { title: 'Stock Market Mastery', price: '₹999', rating: '4.9', lessons: 24, grad: 'from-navy-300 to-brand-300', icon: LineChart },
        { title: 'Personal Budgeting 101', price: '₹499', rating: '4.8', lessons: 12, grad: 'from-brand-300 to-navy-200', icon: Wallet },
        { title: 'Crypto Fundamentals', price: '₹799', rating: '4.7', lessons: 18, grad: 'from-gold-300 to-brand-200', icon: Coins },
      ].map((course) => {
        const Icon = course.icon
        return (
          <div
            key={course.title}
            className="mb-2 rounded-xl border border-navy-100 bg-white p-2.5 shadow-sm"
          >
            <div className={`mb-1.5 flex h-10 items-center justify-center rounded-lg bg-gradient-to-r ${course.grad}`}>
              <Icon className="h-4 w-4 text-white" />
            </div>
            <p className="text-[10px] font-semibold text-slate-900">{course.title}</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-[9px] font-bold text-brand-600">{course.price}</span>
              <span className="flex items-center gap-0.5 text-[9px] text-slate-500">
                <Star className="h-2.5 w-2.5 fill-gold-400 text-gold-400" />
                {course.rating} · {course.lessons} lessons
              </span>
            </div>
          </div>
        )
      })}
    </div>
  ),
  expenses: (
    <div className="flex h-full flex-col bg-gradient-to-b from-white to-brand-50/30 p-4">
      <p className="mb-1 flex items-center gap-1.5 text-sm font-bold text-slate-900">
        <Wallet className="h-4 w-4 text-brand-600" /> Expenses
      </p>
      <p className="mb-3 text-[10px] text-slate-500">June 2026</p>
      <div className="mb-4 rounded-xl border border-red-100 bg-white p-3 shadow-sm">
        <p className="text-[10px] text-slate-500">Monthly Spent</p>
        <p className="text-lg font-bold text-slate-900">₹12,480</p>
        <p className="flex items-center gap-1 text-[10px] font-semibold text-red-500">
          <TrendingUp className="h-3 w-3 rotate-180" /> ₹2,480 over budget
        </p>
        <div className="mt-2 h-2 rounded-full bg-red-100">
          <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-red-400 to-red-500" />
        </div>
      </div>
      <p className="mb-2 text-[10px] font-semibold text-slate-500">Recent</p>
      {[
        { name: 'Swiggy', cat: 'Food', amt: '-₹320' },
        { name: 'Metro Recharge', cat: 'Travel', amt: '-₹500' },
        { name: 'Netflix', cat: 'Entertainment', amt: '-₹649' },
        { name: 'Salary', cat: 'Income', amt: '+₹25,000' },
      ].map((tx) => {
        const Icon = expenseIcons[tx.name] || Wallet
        return (
          <div
            key={tx.name}
            className="mb-1.5 flex items-center justify-between rounded-lg border border-slate-100 bg-white px-2.5 py-2 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <div className={`flex h-6 w-6 items-center justify-center rounded-md ${tx.amt.startsWith('+') ? 'bg-brand-50 text-brand-600' : 'bg-slate-50 text-slate-600'}`}>
                <Icon className="h-3 w-3" />
              </div>
              <div>
                <p className="text-[10px] font-medium text-slate-900">{tx.name}</p>
                <p className="text-[9px] text-slate-500">{tx.cat}</p>
              </div>
            </div>
            <span
              className={`text-[10px] font-bold ${
                tx.amt.startsWith('+') ? 'text-brand-600' : 'text-slate-700'
              }`}
            >
              {tx.amt}
            </span>
          </div>
        )
      })}
    </div>
  ),
  markets: (
    <div className="flex h-full flex-col bg-gradient-to-b from-navy-50 to-white p-4">
      <p className="mb-3 flex items-center gap-1.5 text-sm font-bold text-slate-900">
        <LineChart className="h-4 w-4 text-navy-600" /> Markets
      </p>
      <div className="mb-3 grid grid-cols-2 gap-2">
        {[
          { name: 'NIFTY 50', val: '24,852', chg: '+0.84%' },
          { name: 'SENSEX', val: '81,456', chg: '+0.72%' },
        ].map((idx) => (
          <div key={idx.name} className="rounded-xl border border-navy-100 bg-white p-2 shadow-sm">
            <p className="text-[9px] text-slate-500">{idx.name}</p>
            <p className="text-[11px] font-bold text-slate-900">{idx.val}</p>
            <p className="flex items-center gap-0.5 text-[9px] font-semibold text-brand-600">
              <TrendingUp className="h-2.5 w-2.5" /> {idx.chg}
            </p>
          </div>
        ))}
      </div>
      <p className="mb-2 text-[10px] font-semibold text-slate-500">Watchlist</p>
      {[
        { sym: 'RELIANCE', price: '₹2,845', chg: '+1.2%', up: true },
        { sym: 'TCS', price: '₹4,120', chg: '-0.3%', up: false },
        { sym: 'INFY', price: '₹1,890', chg: '+0.8%', up: true },
        { sym: 'HDFCBANK', price: '₹1,720', chg: '+0.5%', up: true },
      ].map((stock) => (
        <div
          key={stock.sym}
          className="mb-1.5 flex items-center justify-between rounded-lg border border-slate-100 bg-white px-2.5 py-2 shadow-sm"
        >
          <span className="text-[10px] font-bold text-slate-900">{stock.sym}</span>
          <div className="text-right">
            <p className="text-[10px] text-slate-700">{stock.price}</p>
            <p className={`flex items-center justify-end gap-0.5 text-[9px] font-semibold ${stock.up ? 'text-brand-600' : 'text-red-500'}`}>
              {stock.up ? <TrendingUp className="h-2.5 w-2.5" /> : <TrendingDown className="h-2.5 w-2.5" />}
              {stock.chg}
            </p>
          </div>
        </div>
      ))}
    </div>
  ),
}

export default function PhoneMockup({ variant = 'home', className = '' }) {
  return (
    <div
      className={`phone-frame relative w-[220px] rounded-[2.5rem] p-2.5 sm:w-[240px] sm:p-3 lg:w-[260px] ${className}`}
    >
      <div className="absolute top-5 left-1/2 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900/80" />
      <div className="mt-6 overflow-hidden rounded-[2rem] border border-navy-100 bg-white shadow-inner">
        <div className="h-[380px] overflow-hidden sm:h-[420px]">{phoneScreens[variant]}</div>
      </div>
      <div className="absolute bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-slate-300" />
    </div>
  )
}
