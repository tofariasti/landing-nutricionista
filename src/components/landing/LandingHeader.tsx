import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NUTRITIONIST } from '../../config/constants'
import { handleSectionNav } from '../../utils/scroll'

const NAV_LINKS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'especialidades', label: 'Especialidades' },
  { id: 'metodologia', label: 'Metodologia' },
  { id: 'imc', label: 'IMC' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contato', label: 'Contato' },
]

export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className={`landing-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container landing-header__inner">
        <a
          href="/"
          className="landing-header__logo"
          onClick={(e) => {
            e.preventDefault()
            handleSectionNav(e, 'home')
          }}
        >
          {NUTRITIONIST.name.split(' ').slice(-1)[0]} <span>Nutri</span>
        </a>

        <nav className="landing-header__nav" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleSectionNav(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="landing-header__actions">
          <Link to="/app" className="btn btn--outline btn--sm">
            Área do profissional
          </Link>
          <button
            type="button"
            className="landing-header__toggle"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`landing-header__mobile${mobileOpen ? ' is-open' : ''}`}
        aria-label="Menu mobile"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              handleSectionNav(e, link.id)
              closeMobile()
            }}
          >
            {link.label}
          </a>
        ))}
        <Link to="/app" className="btn btn--primary" onClick={closeMobile}>
          Área do profissional
        </Link>
      </nav>
    </header>
  )
}
