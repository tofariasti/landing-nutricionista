export interface Meal {
  id: string
  name: string
  time: string
  items: string
  calories: number
}

export interface Patient {
  id: string
  name: string
  email: string
  phone: string
  age: number
  goal: string
  notes: string
  meals: Meal[]
  createdAt: string
  nextConsultation?: string
}

export type PatientInput = Omit<Patient, 'id' | 'createdAt' | 'meals'> & {
  meals?: Meal[]
}
