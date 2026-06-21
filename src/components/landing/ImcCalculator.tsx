import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { calculateImc, validateImcInput } from '../../utils/imc'
import type { ImcResult } from '../../utils/imc'

export function ImcCalculator() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<ImcResult | null>(null)

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault()
    const weightKg = parseFloat(weight)
    const heightCm = parseFloat(height)
    const validationError = validateImcInput(weightKg, heightCm)

    if (validationError) {
      setError(validationError)
      setResult(null)
      return
    }

    setError(null)
    setResult(calculateImc(weightKg, heightCm))
  }

  return (
    <AnimatedSection className="imc-section" id="imc">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">Calculadora</span>
          <h2 className="section-title">Calcule seu IMC</h2>
          <p className="section-lead" style={{ marginInline: 'auto' }}>
            Ferramenta educativa. Para diagnóstico completo, agende uma consulta
            personalizada.
          </p>
        </div>

        <form className="imc-calculator" onSubmit={handleCalculate} aria-labelledby="imc-title">
          <h3 id="imc-title" className="visually-hidden">
            Calculadora de IMC
          </h3>
          <div className="imc-calculator__fields">
            <div className="form-group">
              <label htmlFor="imc-weight">Peso (kg)</label>
              <input
                id="imc-weight"
                type="number"
                inputMode="decimal"
                min={20}
                max={300}
                step={0.1}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                aria-describedby={error ? 'imc-error' : undefined}
              />
            </div>
            <div className="form-group">
              <label htmlFor="imc-height">Altura (cm)</label>
              <input
                id="imc-height"
                type="number"
                inputMode="decimal"
                min={100}
                max={250}
                step={1}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
          </div>

          {error && (
            <p id="imc-error" className="form-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>
            Calcular IMC
          </button>

          <AnimatePresence>
            {result && (
              <motion.div
                className="imc-result"
                style={{ background: `${result.color}20`, borderLeft: `4px solid ${result.color}` }}
                role="status"
                aria-live="polite"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className="imc-result__value" style={{ color: result.color }}>
                  {result.value}
                </div>
                <div className="imc-result__class" style={{ color: result.color }}>
                  {result.classification}
                </div>
                <p>{result.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </AnimatedSection>
  )
}
