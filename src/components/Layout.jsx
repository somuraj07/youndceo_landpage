import { Outlet, useLocation } from 'react-router-dom'
import AIBackground from './AIBackground'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()
  const isProfile = pathname.startsWith('/profile')

  return (
    <div className="relative min-h-screen">
      <AIBackground />
      <Navbar />
      <Outlet />
      {!isProfile && <Footer />}
    </div>
  )
}
