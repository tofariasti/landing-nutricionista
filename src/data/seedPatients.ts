import type { Patient } from '../types/patient'

function createMeal(name: string, time: string, items: string, calories: number) {
  return {
    id: crypto.randomUUID(),
    name,
    time,
    items,
    calories,
  }
}

export const SEED_PATIENTS: Patient[] = [
  {
    id: 'seed-1',
    name: 'Ana Paula Mendes',
    email: 'ana.paula@email.demo',
    phone: '(51) 99876-5432',
    age: 32,
    goal: 'Emagrecimento saudável',
    notes: 'Intolerância à lactose. Prefere refeições práticas.',
    nextConsultation: '2026-06-25',
    createdAt: '2026-05-10T10:00:00.000Z',
    meals: [
      createMeal('Café da manhã', '07:30', 'Omelete com espinafre, pão integral, café', 380),
      createMeal('Almoço', '12:30', 'Frango grelhado, arroz integral, salada verde', 520),
      createMeal('Lanche', '16:00', 'Iogurte vegetal, castanhas', 210),
      createMeal('Jantar', '19:30', 'Salmão, legumes assados, quinoa', 480),
    ],
  },
  {
    id: 'seed-2',
    name: 'Carlos Eduardo Lima',
    email: 'carlos.lima@email.demo',
    phone: '(51) 98765-4321',
    age: 28,
    goal: 'Performance esportiva',
    notes: 'Corredor amador. Treina 5x por semana.',
    nextConsultation: '2026-06-22',
    createdAt: '2026-05-15T14:00:00.000Z',
    meals: [
      createMeal('Pré-treino', '06:00', 'Banana com pasta de amendoim', 280),
      createMeal('Café da manhã', '08:30', 'Aveia, whey, frutas vermelhas', 420),
      createMeal('Almoço', '13:00', 'Carne magra, batata doce, brócolis', 610),
      createMeal('Pós-treino', '18:00', 'Shake proteico, tapioca com frango', 450),
    ],
  },
  {
    id: 'seed-3',
    name: 'Juliana Ferreira',
    email: 'juliana.f@email.demo',
    phone: '(51) 97654-3210',
    age: 35,
    goal: 'Gestante — 2º trimestre',
    notes: 'Gestação de baixo risco. Suplementação conforme obstetra.',
    nextConsultation: '2026-06-28',
    createdAt: '2026-06-01T09:00:00.000Z',
    meals: [
      createMeal('Café da manhã', '08:00', 'Vitamina de frutas, granola, leite', 400),
      createMeal('Almoço', '12:00', 'Peixe, legumes, arroz, feijão', 550),
      createMeal('Lanche', '15:30', 'Frutas, biscoito integral', 220),
      createMeal('Jantar', '19:00', 'Sopa de legumes, omelete', 420),
    ],
  },
]
