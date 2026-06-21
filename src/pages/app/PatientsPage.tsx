import { useState } from 'react'
import { Link } from 'react-router-dom'
import { usePatientsContext } from '../../context/PatientsContext'
import type { PatientInput } from '../../types/patient'

const EMPTY: PatientInput = {
  name: '',
  email: '',
  phone: '',
  age: 30,
  goal: '',
  notes: '',
}

export function PatientsPage() {
  const { patients, addPatient, deletePatient } = usePatientsContext()
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState<PatientInput>(EMPTY)
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.goal.trim()) {
      setError('Nome e objetivo são obrigatórios.')
      return
    }
    const patient = addPatient(form)
    setShowModal(false)
    setForm(EMPTY)
    setError('')
    window.location.hash = `#/app/pacientes/${patient.id}`
  }

  function handleDelete(id: string, name: string) {
    if (window.confirm(`Excluir paciente ${name}?`)) {
      deletePatient(id)
    }
  }

  return (
    <>
      <header className="app-header">
        <div>
          <h1 className="app-header__title">Pacientes</h1>
          <p className="app-header__subtitle">{patients.length} cadastrados</p>
        </div>
        <button type="button" className="btn btn--primary btn--sm" onClick={() => setShowModal(true)}>
          + Novo paciente
        </button>
      </header>

      <div className="panel">
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Objetivo</th>
                <th>Refeições</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.age}</td>
                  <td>{p.goal}</td>
                  <td>{p.meals.length}</td>
                  <td>
                    <div className="table-actions">
                      <Link to={`/app/pacientes/${p.id}`} className="btn btn--outline btn--sm">
                        Abrir
                      </Link>
                      <button
                        type="button"
                        className="btn btn--danger btn--sm"
                        onClick={() => handleDelete(p.id, p.name)}
                      >
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <form className="modal" onSubmit={handleSubmit}>
            <h2 id="modal-title" className="modal__title">
              Novo paciente
            </h2>
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <div className="form-group">
              <label htmlFor="p-name">Nome *</label>
              <input
                id="p-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="p-email">E-mail</label>
              <input
                id="p-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="p-phone">Telefone</label>
              <input
                id="p-phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="p-age">Idade</label>
              <input
                id="p-age"
                type="number"
                min={1}
                max={120}
                value={form.age}
                onChange={(e) => setForm({ ...form, age: parseInt(e.target.value, 10) || 0 })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="p-goal">Objetivo *</label>
              <input
                id="p-goal"
                value={form.goal}
                onChange={(e) => setForm({ ...form, goal: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="p-notes">Observações</label>
              <textarea
                id="p-notes"
                rows={2}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </div>
            <div className="modal__actions">
              <button type="button" className="btn btn--outline" onClick={() => setShowModal(false)}>
                Cancelar
              </button>
              <button type="submit" className="btn btn--primary">
                Salvar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
