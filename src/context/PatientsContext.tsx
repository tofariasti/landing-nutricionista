import { createContext, useContext } from 'react'
import type { PatientsContextValue } from '../hooks/usePatients'

export const PatientsContext = createContext<PatientsContextValue | null>(null)

export function usePatientsContext() {
  const ctx = useContext(PatientsContext)
  if (!ctx) throw new Error('usePatientsContext must be used within PatientsProvider')
  return ctx
}
