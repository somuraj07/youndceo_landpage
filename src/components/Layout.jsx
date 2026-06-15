import { Outlet } from 'react-router-dom'
import AIBackground from './AIBackground'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <AIBackground />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
