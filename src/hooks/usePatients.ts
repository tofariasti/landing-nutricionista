import { useCallback, useEffect, useState } from 'react'
import { SEED_PATIENTS } from '../data/seedPatients'
import { STORAGE_KEYS } from '../config/constants'
import type { Meal, Patient, PatientInput } from '../types/patient'

function loadPatients(): Patient[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.patients)
    if (!raw) return SEED_PATIENTS
    const parsed = JSON.parse(raw) as Patient[]
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : SEED_PATIENTS
  } catch {
    return SEED_PATIENTS
  }
}

function persistPatients(patients: Patient[]) {
  localStorage.setItem(STORAGE_KEYS.patients, JSON.stringify(patients))
}

export function usePatients() {
  const [patients, setPatients] = useState<Patient[]>(() => loadPatients())

  useEffect(() => {
    persistPatients(patients)
  }, [patients])

  const addPatient = useCallback((input: PatientInput) => {
    const patient: Patient = {
      ...input,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      meals: input.meals ?? [],
    }
    setPatients((prev) => [...prev, patient])
    return patient
  }, [])

  const updatePatient = useCallback((id: string, updates: Partial<Patient>) => {
    setPatients((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p)),
    )
  }, [])

  const deletePatient = useCallback((id: string) => {
    setPatients((prev) => prev.filter((p) => p.id !== id))
  }, [])

  const getPatient = useCallback(
    (id: string) => patients.find((p) => p.id === id),
    [patients],
  )

  const updateMeal = useCallback((patientId: string, meal: Meal) => {
    setPatients((prev) =>
      prev.map((p) => {
        if (p.id !== patientId) return p
        const meals = p.meals.some((m) => m.id === meal.id)
          ? p.meals.map((m) => (m.id === meal.id ? meal : m))
          : [...p.meals, meal]
        return { ...p, meals }
      }),
    )
  }, [])

  const deleteMeal = useCallback((patientId: string, mealId: string) => {
    setPatients((prev) =>
      prev.map((p) =>
        p.id === patientId ? { ...p, meals: p.meals.filter((m) => m.id !== mealId) } : p,
      ),
    )
  }, [])

  const resetDemo = useCallback(() => {
    setPatients(SEED_PATIENTS)
  }, [])

  return {
    patients,
    addPatient,
    updatePatient,
    deletePatient,
    getPatient,
    updateMeal,
    deleteMeal,
    resetDemo,
  }
}

export type PatientsContextValue = ReturnType<typeof usePatients>
