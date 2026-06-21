import { Link } from 'react-router-dom'
import { usePatientsContext } from '../../context/PatientsContext'

export function DashboardPage() {
  const { patients } = usePatientsContext()

  const upcoming = patients
    .filter((p) => p.nextConsultation)
    .sort((a, b) => (a.nextConsultation! > b.nextConsultation! ? 1 : -1))
    .slice(0, 5)

  const totalMeals = patients.reduce((sum, p) => sum + p.meals.length, 0)

  return (
    <>
      <header className="app-header">
        <div>
          <h1 className="app-header__title">Dashboard</h1>
          <p className="app-header__subtitle">Visão geral do consultório demo</p>
        </div>
        <Link to="/app/pacientes" className="btn btn--primary btn--sm">
          + Novo paciente
        </Link>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-card__value">{patients.length}</div>
          <div className="stat-card__label">Pacientes ativos</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">{upcoming.length}</div>
          <div className="stat-card__label">Consultas agendadas</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">{totalMeals}</div>
          <div className="stat-card__label">Refeições cadastradas</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">4.9</div>
          <div className="stat-card__label">Satisfação média</div>
        </div>
      </div>

      <div className="panel">
        <div className="panel__header">
          <h2 className="panel__title">Próximas consultas</h2>
        </div>
        {upcoming.length === 0 ? (
          <p>Nenhuma consulta agendada.</p>
        ) : (
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Paciente</th>
                  <th>Objetivo</th>
                  <th>Data</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {upcoming.map((p) => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.goal}</td>
                    <td>{new Date(p.nextConsultation!).toLocaleDateString('pt-BR')}</td>
                    <td>
                      <Link to={`/app/pacientes/${p.id}`} className="btn btn--outline btn--sm">
                        Ver ficha
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="panel">
        <div className="panel__header">
          <h2 className="panel__title">Alertas</h2>
        </div>
        <ul>
          <li>3 pacientes com retorno pendente esta semana</li>
          <li>1 plano alimentar aguardando revisão</li>
          <li>Lembrete: atualizar receitas sazonais de inverno</li>
        </ul>
      </div>
    </>
  )
}
