import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProfileLayout from './components/profile/ProfileLayout'
import OverviewPage from './pages/profile/OverviewPage'
import LearnPage from './pages/profile/LearnPage'
import FinancePage from './pages/profile/FinancePage'
import AchievementsPage from './pages/profile/AchievementsPage'
import ChallengesPage from './pages/profile/ChallengesPage'
import SettingsPage from './pages/profile/SettingsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<OverviewPage />} />
            <Route path="learn" element={<LearnPage />} />
            <Route path="finance" element={<FinancePage />} />
            <Route path="achievements" element={<AchievementsPage />} />
            <Route path="challenges" element={<ChallengesPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
