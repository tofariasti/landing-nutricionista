import { useState } from 'react'
import { AnimatedSection } from '../ui/AnimatedSection'

const FAQ_ITEMS = [
  {
    q: 'Como funciona a primeira consulta?',
    a: 'A consulta inicial dura cerca de 60 minutos. Fazemos anamnese detalhada, avaliação corporal e definimos objetivos. Você recebe orientações iniciais e o plano alimentar completo em até 7 dias.',
  },
  {
    q: 'Atende por plano de saúde?',
    a: 'Consultas particulares com recibo para reembolso. Verifique com seu convênio a possibilidade de ressarcimento para consultas nutricionais.',
  },
  {
    q: 'Consulta online funciona bem?',
    a: 'Sim! A teleconsulta é tão eficaz quanto a presencial para acompanhamento nutricional. Você recebe o plano digitalmente e tem suporte via WhatsApp.',
  },
  {
    q: 'Preciso fazer exames antes?',
    a: 'Não é obrigatório, mas exames recentes (sangue, hormônios) ajudam a personalizar ainda mais seu plano. Posso solicitar se necessário.',
  },
  {
    q: 'Qual a frequência de retorno?',
    a: 'Geralmente a cada 15 a 30 dias, dependendo do objetivo. Pacientes em fase de ajuste podem retornar em 7–15 dias.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <AnimatedSection className="faq" id="faq">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Perguntas frequentes</h2>
        </div>
        <div className="faq__list">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            const panelId = `faq-panel-${i}`
            return (
              <div key={item.q} className={`faq__item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  {item.q}
                  <span className="faq__icon" aria-hidden="true">
                    +
                  </span>
                </button>
                {isOpen && (
                  <div id={panelId} className="faq__answer" role="region">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
