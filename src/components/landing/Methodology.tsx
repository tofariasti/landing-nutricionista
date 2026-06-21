import { AnimatedSection } from '../ui/AnimatedSection'

const STEPS = [
  {
    title: 'Anamnese completa',
    text: 'Conversamos sobre histórico, rotina, preferências e objetivos.',
  },
  {
    title: 'Avaliação corporal',
    text: 'Bioimpedância e medidas para entender sua composição corporal.',
  },
  {
    title: 'Plano personalizado',
    text: 'Cardápio flexível, receitas e substituições adaptadas à sua vida.',
  },
  {
    title: 'Acompanhamento',
    text: 'Consultas de retorno para ajustes e evolução contínua.',
  },
]

export function Methodology() {
  return (
    <AnimatedSection className="methodology" id="metodologia">
      <div className="container">
        <span className="section-label">Metodologia</span>
        <h2 className="section-title">Como funciona o acompanhamento</h2>
        <p className="section-lead">
          Um processo estruturado em 4 etapas para resultados reais e duradouros.
        </p>
        <div className="methodology__steps">
          {STEPS.map((step) => (
            <article key={step.title} className="methodology__step">
              <h3 className="card__title">{step.title}</h3>
              <p className="card__text">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
