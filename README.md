# mateusmattos1.github.io

Portfólio pessoal de **Mateus de Mattos Ferreira** — Desenvolvedor de Software e Analista de Dados.

🔗 **Acesse:** [mateusmattos1.github.io](https://mateusmattos1.github.io)

## Tecnologias

- Angular 22 (standalone components, novo control flow `@if`/`@for`)
- TypeScript
- CSS3 (Custom Properties, Grid, Flexbox, Glassmorphism)
- GitHub Actions (build e deploy automático no GitHub Pages)

## Estrutura

```
webapp/                          → Aplicação Angular (código-fonte do site)
  src/app/
    nav/                         → Menu de navegação (reaproveitado em todas as páginas)
    footer/                      → Rodapé (reaproveitado em todas as páginas)
    shared/fade-in.directive.ts  → Diretiva de animação de scroll
    data/                        → Conteúdo do site (projetos, currículo) separado da view
    pages/
      home/                      → Home
      portfolio/                 → Portfólio de projetos
      curriculo/                 → Currículo profissional
      contato/                   → Informações de contato
      project-detail/            → Página genérica de detalhe de projeto (dirigida por dados)
      not-found/                 → Página 404 dentro do app
  public/assets/                 → Imagens e PDF do currículo
  public/404.html                → Redirecionamento para suportar URLs limpas no GitHub Pages
assets/img/, assets/pdf/         → Cópia de origem dos assets (usada para repor public/assets se necessário)
.github/workflows/deploy.yml     → Build e publicação automática no GitHub Pages
```

## Funcionalidades

- Design moderno com tema dark e acento laranja
- Navegação com backdrop-blur e menu responsivo
- URLs limpas sem `.html`, mantidas via SPA routing (Angular Router + truque de 404 do GitHub Pages)
- Animações de scroll com fade-in
- Header e footer centralizados em componentes únicos, sem duplicação de HTML entre páginas

## Desenvolvimento local

```bash
cd webapp
npm install
npm start        # http://localhost:4200
npm run build    # gera webapp/dist/webapp/browser
npm test         # testes unitários
```

O deploy para o GitHub Pages é automático a cada push em `main` que altere a pasta `webapp/`, via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
- Layout responsivo para mobile e desktop
