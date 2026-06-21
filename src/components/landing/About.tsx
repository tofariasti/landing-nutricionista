import { AnimatedSection } from '../ui/AnimatedSection'
import { NUTRITIONIST } from '../../config/constants'

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=1000&fit=crop&q=80'

export function About() {
  return (
    <AnimatedSection className="about" id="sobre">
      <div className="container about__grid">
        <div className="about__image">
          <img
            src={ABOUT_IMAGE}
            alt={`${NUTRITIONIST.name} em consultório, pronta para atender pacientes`}
            loading="lazy"
          />
        </div>
        <div>
          <span className="section-label">Sobre mim</span>
          <h2 className="section-title">{NUTRITIONIST.name}</h2>
          <p className="section-lead">
            Nutricionista clínica e esportiva com abordagem baseada em evidências e
            escuta ativa. Acredito que alimentação saudável deve ser prazerosa, prática e
            adaptada à sua rotina.
          </p>
          <p>
            Formada pela UFRGS, com especialização em Nutrição Esportiva e pós-graduação
            em Transtornos Alimentares. Atendo presencialmente em {NUTRITIONIST.city} e
            online para todo o Brasil.
          </p>
          <div className="about__credentials">
            <div className="about__credential">
              <strong>Registro</strong>
              {NUTRITIONIST.crn}
            </div>
            <div className="about__credential">
              <strong>Formação</strong>
              UFRGS · Nutrição
            </div>
            <div className="about__credential">
              <strong>Especialidade</strong>
              Nutrição Esportiva
            </div>
            <div className="about__credential">
              <strong>Atendimento</strong>
              Presencial e online
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
