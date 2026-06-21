import { HashRouter, Routes, Route } from 'react-router-dom'
import { usePatients } from './hooks/usePatients'
import { PatientsContext } from './context/PatientsContext'
import { LandingPage } from './pages/LandingPage'
import { AppLayout } from './components/app/AppLayout'
import { DashboardPage } from './pages/app/DashboardPage'
import { PatientsPage } from './pages/app/PatientsPage'
import { PatientDetailPage } from './pages/app/PatientDetailPage'
import { SettingsPage } from './pages/app/SettingsPage'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const patientsState = usePatients()
  useTheme()

  return (
    <PatientsContext.Provider value={patientsState}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="pacientes" element={<PatientsPage />} />
            <Route path="pacientes/:id" element={<PatientDetailPage />} />
            <Route path="configuracoes" element={<SettingsPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </PatientsContext.Provider>
  )
}
