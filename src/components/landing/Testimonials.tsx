import { AnimatedSection } from '../ui/AnimatedSection'

const TESTIMONIALS = [
  {
    text: 'Perdi 12 kg em 6 meses sem passar fome. A Dra. Marina me ensinou a comer de forma inteligente e prazerosa.',
    name: 'Fernanda R.',
    detail: 'Emagrecimento · 8 meses',
  },
  {
    text: 'Melhorei minha performance na maratona com o plano esportivo. Recuperação mais rápida e energia estável.',
    name: 'Roberto M.',
    detail: 'Nutrição esportiva · 1 ano',
  },
  {
    text: 'Acompanhamento perfeito durante a gestação. Me senti segura e bem nutrida em cada trimestre.',
    name: 'Camila S.',
    detail: 'Gestante · 5 meses',
  },
]

export function Testimonials() {
  return (
    <AnimatedSection className="testimonials" id="depoimentos">
      <div className="container">
        <span className="section-label">Depoimentos</span>
        <h2 className="section-title">O que dizem meus pacientes</h2>
        <p className="section-lead">
          Histórias reais de transformação — resultados variam conforme dedicação individual.
        </p>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="testimonial">
              <div className="testimonial__stars" aria-label="5 estrelas">
                ★★★★★
              </div>
              <p className="testimonial__text">&ldquo;{t.text}&rdquo;</p>
              <footer className="testimonial__author">
                <strong>{t.name}</strong>
                <span>{t.detail}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
