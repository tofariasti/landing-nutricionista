import { usePatientsContext } from '../../context/PatientsContext'
import { useTheme } from '../../hooks/useTheme'

export function SettingsPage() {
  const { theme, setTheme, toggleTheme } = useTheme()
  const { resetDemo, patients } = usePatientsContext()

  function handleReset() {
    if (window.confirm('Restaurar dados demo originais? Isso apagará alterações locais.')) {
      resetDemo()
    }
  }

  return (
    <>
      <header className="app-header">
        <div>
          <h1 className="app-header__title">Configurações</h1>
          <p className="app-header__subtitle">Preferências do modo demonstração</p>
        </div>
      </header>

      <div className="panel settings-group">
        <h3>Tema</h3>
        <div className="theme-toggle" role="group" aria-label="Selecionar tema">
          <button
            type="button"
            className={theme === 'light' ? 'is-active' : ''}
            onClick={() => setTheme('light')}
          >
            Claro
          </button>
          <button
            type="button"
            className={theme === 'dark' ? 'is-active' : ''}
            onClick={() => setTheme('dark')}
          >
            Escuro
          </button>
          <button type="button" onClick={toggleTheme}>
            Alternar
          </button>
        </div>
      </div>

      <div className="panel settings-group">
        <h3>Dados demo</h3>
        <p>Pacientes atuais: {patients.length}</p>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>
          Todos os dados são salvos apenas no localStorage deste navegador.
        </p>
        <button type="button" className="btn btn--danger" onClick={handleReset} style={{ marginTop: '1rem' }}>
          Restaurar dados originais
        </button>
      </div>
    </>
  )
}
