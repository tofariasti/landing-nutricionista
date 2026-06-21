import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeIn } from '../ui/AnimatedSection'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { NUTRITIONIST } from '../../config/constants'
import { handleSectionNav } from '../../utils/scroll'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&h=900&fit=crop&q=80'
const CARD_IMAGE =
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=80'

export function Hero() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <img src={HERO_IMAGE} alt="" loading="eager" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <FadeIn>
          <span className="hero__badge">✨ {NUTRITIONIST.crn}</span>
          <h1 className="hero__title" id="hero-title">
            Nutrição que transforma <em>seu corpo</em> e sua relação com a comida
          </h1>
          <p className="hero__subtitle">
            {NUTRITIONIST.name} — {NUTRITIONIST.title}. Planos personalizados com
            ciência, acolhimento e resultados sustentáveis.
          </p>
          <div className="hero__ctas">
            <a
              href="#contato"
              className="btn btn--primary"
              onClick={(e) => handleSectionNav(e, 'contato')}
            >
              Agendar consulta
            </a>
            <Link to="/app" className="btn btn--ghost">
              Área do profissional
            </Link>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">500+</span>
              <span className="hero__stat-label">Pacientes acompanhados</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">8+</span>
              <span className="hero__stat-label">Anos de experiência</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">4.9</span>
              <span className="hero__stat-label">Avaliação média</span>
            </div>
          </div>
        </FadeIn>

        <motion.div
          className="hero__visual"
          initial={reducedMotion ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero__card">
            <img
              src={CARD_IMAGE}
              alt="Prato colorido com vegetais frescos, grãos e proteína — alimentação equilibrada"
              loading="lazy"
            />
            <p>
              <strong>Consulta completa</strong> com anamnese, bioimpedância e plano alimentar
              personalizado em até 7 dias.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
