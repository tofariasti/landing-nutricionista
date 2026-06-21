import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { usePatients } from '../hooks/usePatients'
import { STORAGE_KEYS } from '../config/constants'

describe('usePatients', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('loads seed patients when storage is empty', () => {
    const { result } = renderHook(() => usePatients())
    expect(result.current.patients.length).toBeGreaterThanOrEqual(3)
  })

  it('adds a new patient', () => {
    const { result } = renderHook(() => usePatients())
    const initialCount = result.current.patients.length

    act(() => {
      result.current.addPatient({
        name: 'Test Patient',
        email: 'test@test.com',
        phone: '123',
        age: 25,
        goal: 'Test goal',
        notes: '',
      })
    })

    expect(result.current.patients.length).toBe(initialCount + 1)
    expect(result.current.patients.some((p) => p.name === 'Test Patient')).toBe(true)
  })

  it('deletes a patient', () => {
    const { result } = renderHook(() => usePatients())
    const id = result.current.patients[0].id

    act(() => {
      result.current.deletePatient(id)
    })

    expect(result.current.patients.find((p) => p.id === id)).toBeUndefined()
  })

  it('persists to localStorage', () => {
    const { result } = renderHook(() => usePatients())

    act(() => {
      result.current.addPatient({
        name: 'Persist Test',
        email: '',
        phone: '',
        age: 30,
        goal: 'Goal',
        notes: '',
      })
    })

    const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.patients)!)
    expect(stored.some((p: { name: string }) => p.name === 'Persist Test')).toBe(true)
  })

  it('resets to seed data', () => {
    const { result } = renderHook(() => usePatients())

    act(() => {
      result.current.deletePatient(result.current.patients[0].id)
      result.current.resetDemo()
    })

    expect(result.current.patients.length).toBeGreaterThanOrEqual(3)
  })
})
