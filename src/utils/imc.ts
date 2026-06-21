export interface ImcResult {
  value: number
  classification: string
  description: string
  color: string
}

export function calculateImc(weightKg: number, heightCm: number): ImcResult | null {
  if (weightKg <= 0 || heightCm <= 0) return null

  const heightM = heightCm / 100
  const value = Math.round((weightKg / (heightM * heightM)) * 10) / 10

  if (value < 18.5) {
    return {
      value,
      classification: 'Baixo peso',
      description: 'Consulte um nutricionista para avaliar suas necessidades calóricas.',
      color: '#457b9d',
    }
  }
  if (value < 25) {
    return {
      value,
      classification: 'Peso adequado',
      description: 'Parabéns! Mantenha hábitos saudáveis e acompanhamento regular.',
      color: '#2d6a4f',
    }
  }
  if (value < 30) {
    return {
      value,
      classification: 'Sobrepeso',
      description: 'Um plano alimentar personalizado pode ajudar a alcançar metas saudáveis.',
      color: '#e9c46a',
    }
  }
  if (value < 35) {
    return {
      value,
      classification: 'Obesidade grau I',
      description: 'Acompanhamento nutricional é recomendado para mudanças sustentáveis.',
      color: '#f4a261',
    }
  }
  if (value < 40) {
    return {
      value,
      classification: 'Obesidade grau II',
      description: 'Busque orientação profissional para um plano seguro e eficaz.',
      color: '#e76f51',
    }
  }
  return {
    value,
    classification: 'Obesidade grau III',
    description: 'Consulte um nutricionista para avaliação completa e plano individualizado.',
    color: '#c1121f',
  }
}

export function validateImcInput(weightKg: number, heightCm: number): string | null {
  if (Number.isNaN(weightKg) || Number.isNaN(heightCm)) return 'Informe valores numéricos válidos.'
  if (weightKg < 20 || weightKg > 300) return 'Peso deve estar entre 20 e 300 kg.'
  if (heightCm < 100 || heightCm > 250) return 'Altura deve estar entre 100 e 250 cm.'
  return null
}
