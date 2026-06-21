import { describe, it, expect } from 'vitest'
import { calculateImc, validateImcInput } from '../utils/imc'

describe('calculateImc', () => {
  it('calculates IMC for normal weight', () => {
    const result = calculateImc(70, 175)
    expect(result).not.toBeNull()
    expect(result!.value).toBe(22.9)
    expect(result!.classification).toBe('Peso adequado')
  })

  it('classifies underweight', () => {
    const result = calculateImc(45, 170)
    expect(result!.classification).toBe('Baixo peso')
  })

  it('classifies obesity', () => {
    const result = calculateImc(100, 170)
    expect(result!.classification).toContain('Obesidade')
  })

  it('returns null for invalid input', () => {
    expect(calculateImc(0, 170)).toBeNull()
    expect(calculateImc(70, 0)).toBeNull()
  })
})

describe('validateImcInput', () => {
  it('returns null for valid input', () => {
    expect(validateImcInput(70, 175)).toBeNull()
  })

  it('returns error for out of range weight', () => {
    expect(validateImcInput(10, 175)).toMatch(/Peso/)
  })

  it('returns error for out of range height', () => {
    expect(validateImcInput(70, 50)).toMatch(/Altura/)
  })
})
