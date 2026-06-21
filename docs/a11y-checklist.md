# Checklist de Acessibilidade — Nutricionista Demo

## Navegação e estrutura

- [x] `lang="pt-BR"` no HTML
- [x] Skip link para conteúdo principal
- [x] Landmarks: `header`, `main`, `footer`, `nav`
- [x] Hierarquia de headings (h1 → h2 → h3)

## Teclado e foco

- [x] Todos os interativos acessíveis via Tab
- [x] Focus visible em botões, links e inputs
- [x] FAQ accordion com `aria-expanded`
- [x] Menu mobile com `aria-expanded`

## Formulários

- [x] Labels explícitos em todos os campos
- [x] Erros com `role="alert"`
- [x] Campos obrigatórios indicados
- [x] Font-size mínimo 16px em inputs mobile

## Imagens e mídia

- [x] Alt text descritivo em imagens de conteúdo
- [x] Imagens decorativas com `alt=""`

## Contraste e motion

- [x] Contraste WCAG AA (texto vs fundo)
- [x] `prefers-reduced-motion` desabilita animações Framer Motion
- [x] Pulse do WhatsApp desabilitado com reduced motion

## Responsividade testada

| Dispositivo | Resolução | Status |
|-------------|-----------|--------|
| iPhone SE | 375×667 | ✅ |
| iPhone 14 | 390×844 | ✅ |
| iPad | 768×1024 | ✅ |
| Desktop HD | 1280×720 | ✅ |
| Desktop FHD | 1920×1080 | ✅ |

## Testes automatizados

- Vitest: IMC, WhatsApp, CRUD localStorage
- Playwright + axe-core: landing e mini-app
- CI: testes rodam antes do deploy
