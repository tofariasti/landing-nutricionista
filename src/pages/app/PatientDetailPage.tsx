import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { usePatientsContext } from '../../context/PatientsContext'
import type { Meal } from '../../types/patient'

const EMPTY_MEAL: Omit<Meal, 'id'> = {
  name: '',
  time: '08:00',
  items: '',
  calories: 0,
}

export function PatientDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { getPatient, updateMeal, deleteMeal } = usePatientsContext()
  const patient = id ? getPatient(id) : undefined

  const [showMealForm, setShowMealForm] = useState(false)
  const [editingMeal, setEditingMeal] = useState<Meal | null>(null)
  const [mealForm, setMealForm] = useState(EMPTY_MEAL)

  if (!patient) {
    return (
      <div className="panel">
        <p>Paciente não encontrado.</p>
        <Link to="/app/pacientes">← Voltar</Link>
      </div>
    )
  }

  const totalCalories = patient.meals.reduce((s, m) => s + m.calories, 0)

  function openMealForm(meal?: Meal) {
    setShowMealForm(true)
    if (meal) {
      setEditingMeal(meal)
      setMealForm({ name: meal.name, time: meal.time, items: meal.items, calories: meal.calories })
    } else {
      setEditingMeal(null)
      setMealForm(EMPTY_MEAL)
    }
  }

  function closeMealForm() {
    setShowMealForm(false)
    setEditingMeal(null)
    setMealForm(EMPTY_MEAL)
  }

  function saveMeal(e: React.FormEvent) {
    e.preventDefault()
    if (!mealForm.name.trim() || !patient) return

    const meal: Meal = editingMeal
      ? { ...editingMeal, ...mealForm }
      : { id: crypto.randomUUID(), ...mealForm }

    updateMeal(patient.id, meal)
    closeMealForm()
  }

  return (
    <>
      <header className="app-header">
        <div>
          <Link to="/app/pacientes" style={{ fontSize: '0.875rem' }}>
            ← Pacientes
          </Link>
          <h1 className="app-header__title">{patient.name}</h1>
          <p className="app-header__subtitle">{patient.goal}</p>
        </div>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-card__value">{patient.age}</div>
          <div className="stat-card__label">Anos</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">{patient.meals.length}</div>
          <div className="stat-card__label">Refeições</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">{totalCalories}</div>
          <div className="stat-card__label">kcal/dia (simulado)</div>
        </div>
      </div>

      <div className="panel">
        <div className="panel__header">
          <h2 className="panel__title">Dados do paciente</h2>
        </div>
        <p>
          <strong>E-mail:</strong> {patient.email || '—'}
        </p>
        <p>
          <strong>Telefone:</strong> {patient.phone || '—'}
        </p>
        <p>
          <strong>Observações:</strong> {patient.notes || '—'}
        </p>
        {patient.nextConsultation && (
          <p>
            <strong>Próxima consulta:</strong>{' '}
            {new Date(patient.nextConsultation).toLocaleDateString('pt-BR')}
          </p>
        )}
      </div>

      <div className="panel">
        <div className="panel__header">
          <h2 className="panel__title">Plano alimentar</h2>
          <button type="button" className="btn btn--primary btn--sm" onClick={() => openMealForm()}>
            + Refeição
          </button>
        </div>

        <div className="meal-list">
          {patient.meals.map((meal) => (
            <article key={meal.id} className="meal-card">
              <div className="meal-card__header">
                <strong>{meal.name}</strong>
                <span className="meal-card__time">{meal.time} · {meal.calories} kcal</span>
              </div>
              <p>{meal.items}</p>
              <div className="table-actions" style={{ marginTop: '0.75rem' }}>
                <button type="button" className="btn btn--outline btn--sm" onClick={() => openMealForm(meal)}>
                  Editar
                </button>
                <button
                  type="button"
                  className="btn btn--danger btn--sm"
                  onClick={() => deleteMeal(patient.id, meal.id)}
                >
                  Remover
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {showMealForm && (
        <div className="panel">
          <h3 className="panel__title">{editingMeal ? 'Editar refeição' : 'Nova refeição'}</h3>
          <form onSubmit={saveMeal}>
            <div className="meal-form-grid">
              <div className="form-group">
                <label htmlFor="m-name">Nome</label>
                <input
                  id="m-name"
                  value={mealForm.name}
                  onChange={(e) => setMealForm({ ...mealForm, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="m-time">Horário</label>
                <input
                  id="m-time"
                  type="time"
                  value={mealForm.time}
                  onChange={(e) => setMealForm({ ...mealForm, time: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="m-cal">Calorias</label>
                <input
                  id="m-cal"
                  type="number"
                  min={0}
                  value={mealForm.calories}
                  onChange={(e) => setMealForm({ ...mealForm, calories: parseInt(e.target.value, 10) || 0 })}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="m-items">Alimentos</label>
              <textarea
                id="m-items"
                rows={2}
                value={mealForm.items}
                onChange={(e) => setMealForm({ ...mealForm, items: e.target.value })}
              />
            </div>
            <div className="modal__actions">
              <button type="button" className="btn btn--outline" onClick={closeMealForm}>
                Cancelar
              </button>
              <button type="submit" className="btn btn--primary">
                Salvar refeição
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
