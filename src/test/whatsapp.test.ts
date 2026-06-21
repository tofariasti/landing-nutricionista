import { describe, it, expect } from 'vitest'
import { buildWhatsAppMessage, buildWhatsAppUrl, validateContactForm } from '../utils/whatsapp'

const validForm = {
  nome: 'Maria Silva',
  telefone: '(51) 99999-9999',
  email: 'maria@email.com',
  objetivo: 'Emagrecimento',
  preferencia: 'Online',
  mensagem: 'Quero agendar',
}

describe('validateContactForm', () => {
  it('returns no errors for valid form', () => {
    expect(validateContactForm(validForm)).toEqual({})
  })

  it('requires nome and telefone', () => {
    const errors = validateContactForm({ ...validForm, nome: '', telefone: '' })
    expect(errors.nome).toBeDefined()
    expect(errors.telefone).toBeDefined()
  })

  it('validates email format', () => {
    const errors = validateContactForm({ ...validForm, email: 'invalid' })
    expect(errors.email).toBeDefined()
  })
})

describe('buildWhatsAppMessage', () => {
  it('includes all fields in message', () => {
    const message = buildWhatsAppMessage(validForm)
    expect(message).toContain('Maria Silva')
    expect(message).toContain('Emagrecimento')
    expect(message).toContain('Online')
    expect(message).toContain('Quero agendar')
  })
})

describe('buildWhatsAppUrl', () => {
  it('returns encoded wa.me url', () => {
    const url = buildWhatsAppUrl(validForm)
    expect(url).toMatch(/^https:\/\/wa\.me\//)
    expect(url).toContain(encodeURIComponent('Maria Silva'))
  })
})
