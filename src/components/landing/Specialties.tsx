import { motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const SPECIALTIES = [
  {
    icon: '🎯',
    title: 'Emagrecimento saudável',
    text: 'Perda de peso sustentável sem dietas restritivas ou efeito sanfona.',
  },
  {
    icon: '🏃',
    title: 'Nutrição esportiva',
    text: 'Performance, composição corporal e recuperação para atletas amadores e profissionais.',
  },
  {
    icon: '🤰',
    title: 'Gestante e puerpério',
    text: 'Acompanhamento nutricional em cada fase da maternidade com segurança.',
  },
  {
    icon: '👶',
    title: 'Nutrição infantil',
    text: 'Introdução alimentar, seletividade e hábitos saudáveis para crianças.',
  },
  {
    icon: '🩺',
    title: 'Doenças crônicas',
    text: 'Diabetes, hipertensão, dislipidemia e síndrome metabólica.',
  },
  {
    icon: '🧠',
    title: 'Transtornos alimentares',
    text: 'Abordagem multidisciplinar com foco em saúde mental e relação com comida.',
  },
]

export function Specialties() {
  const reducedMotion = useReducedMotion()

  return (
    <AnimatedSection className="specialties" id="especialidades">
      <div className="container">
        <span className="section-label">Especialidades</span>
        <h2 className="section-title">Cuidado personalizado para cada objetivo</h2>
        <p className="section-lead">
          Cada plano alimentar é único — construído a partir da sua história, preferências
          e metas de saúde.
        </p>
        <div className="cards-grid">
          {SPECIALTIES.map((item, i) => (
            <motion.article
              key={item.title}
              className="card"
              initial={reducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={reducedMotion ? {} : { y: -6 }}
            >
              <div className="card__icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
