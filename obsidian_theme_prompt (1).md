# PROMPT — DESENVOLVIMENTO DE TEMA PREMIUM PARA OBSIDIAN

## ROLE

Você é um desenvolvedor especialista em Obsidian Themes, CSS moderno, UI/UX, design systems, acessibilidade, CSS variables, glassmorphism e desenvolvimento de temas para aplicações desktop/mobile.

Sua missão é transformar o tema existente fornecido neste projeto em um **tema premium, moderno, extremamente polido e pronto para distribuição na Obsidian Community Themes**.

---

# CONTEXTO

Dentro deste projeto já existe uma pasta contendo um **tema funcional que será usado como base visual e estrutural**.

IMPORTANTE:

- NÃO crie um tema completamente novo do zero.
- NÃO descarte a estrutura existente sem necessidade.
- Analise primeiro todos os arquivos existentes.
- Entenda como o tema atual funciona.
- Preserve as características visuais que fazem parte da identidade original.
- Evolua o tema existente.
- Faça alterações de forma organizada e sustentável.
- Se o tema utilizar CSS, SCSS ou outro sistema de build, preserve e melhore a arquitetura existente quando fizer sentido.

O objetivo é criar uma nova identidade visual baseada no tema existente.

---

# CONCEITO VISUAL

## Nome provisório

[DEFINIR NOME DO TEMA]

O nome deve ser moderno, memorável e adequado para publicação na Obsidian Community Themes.

## PRINCIPAL MUDANÇA

O background principal deve ser:

```css
#000000
```

O fundo deve ser **FULL BLACK / OLED BLACK**.

Não utilizar tons de cinza escuro como background principal.

Entretanto, não transforme toda a interface em preto absoluto.

Use diferentes níveis de superfície através de:

- transparência
- alpha channels
- bordas sutis
- blur
- sombras
- highlights
- glass layers

---

# ESTÉTICA

Criar uma estética inspirada conceitualmente em:

- interfaces modernas
- iOS recente
- macOS moderno
- glassmorphism
- OLED interfaces
- premium minimalism
- translucent UI
- soft shadows
- subtle depth
- modern productivity applications

IMPORTANTE:

Não copiar diretamente elementos proprietários da Apple.

A inspiração deve ser conceitual:

- transparência
- profundidade
- hierarquia visual
- superfícies elevadas
- blur
- suavidade
- espaçamento
- microinterações

O resultado final deve possuir identidade própria para Obsidian.

---

# GLASSMORPHISM

Implementar glassmorphism cuidadosamente.

Utilizar recursos como:

```css
backdrop-filter
-webkit-backdrop-filter
rgba()
opacity
box-shadow
border
```

Aplicar principalmente em:

- sidebars
- modals
- menus
- popovers
- command palette
- tab containers
- floating elements
- navigation surfaces
- status surfaces

NÃO aplicar blur indiscriminadamente em todos os elementos.

O editor de texto deve permanecer extremamente legível e performático.

---

# DESIGN SYSTEM

Antes de modificar os componentes, criar um sistema centralizado de variáveis CSS.

Exemplo conceitual:

```css
:root {
    --theme-bg: #000000;

    --theme-surface-1: ...;
    --theme-surface-2: ...;
    --theme-surface-3: ...;

    --theme-border: ...;
    --theme-border-active: ...;

    --theme-text-primary: ...;
    --theme-text-secondary: ...;
    --theme-text-muted: ...;

    --theme-accent: ...;

    --theme-radius-sm: ...;
    --theme-radius-md: ...;
    --theme-radius-lg: ...;

    --theme-blur-sm: ...;
    --theme-blur-md: ...;
    --theme-blur-lg: ...;

    --theme-shadow-sm: ...;
    --theme-shadow-md: ...;
    --theme-shadow-lg: ...;
}
```

Não espalhar valores arbitrários pelo CSS.

Sempre que possível, utilizar as variáveis do sistema de design.

---

# CORES

Criar uma paleta moderna.

O background base deve permanecer:

```text
#000000
```

Criar:

- primary accent
- secondary accent
- success
- warning
- error
- info
- text primary
- text secondary
- text muted
- border
- surface
- elevated surface

Garantir contraste suficiente para leitura.

---

# COMPONENTES DO OBSIDIAN

Revisar visualmente todos os componentes relevantes.

## Interface

- workspace
- main background
- sidebars
- ribbon
- status bar
- title bar
- tab bar
- tabs
- active tab
- inactive tabs
- tab close buttons
- navigation
- workspace splitters

## Editor

- editor background
- editor text
- headings
- paragraphs
- lists
- blockquotes
- links
- internal links
- external links
- bold
- italic
- strikethrough
- highlights
- inline code
- code blocks
- horizontal rules

## Markdown

Estilizar:

- H1
- H2
- H3
- H4
- H5
- H6
- ordered lists
- unordered lists
- checkboxes
- task lists
- callouts
- tables
- footnotes

## Interface Components

- buttons
- toggles
- sliders
- dropdowns
- inputs
- search
- command palette
- modal
- notice
- tooltip
- menu
- context menu
- popover
- settings
- file explorer
- properties
- backlinks
- outline

---

# TABS

Criar uma experiência moderna de tabs.

Características:

- active tab claramente identificada
- inactive tabs discretas
- rounded corners
- subtle glass effect
- smooth transitions
- active indicator elegante
- hover state
- close button bem integrado

Evitar excesso de bordas.

---

# SIDEBARS

As sidebars devem possuir aparência de painel de vidro.

Características:

- transparência
- blur
- borda extremamente sutil
- separação visual do editor
- boa hierarquia
- ícones discretos
- hover states
- active states

O conteúdo principal deve continuar sendo o foco.

---

# MODAIS

Os modais devem parecer superfícies elevadas.

Utilizar:

- glass effect
- blur
- shadow
- border
- rounded corners
- hierarchy

Criar profundidade visual sem exagerar.

---

# COMMAND PALETTE

O Command Palette deve ser um dos componentes mais bonitos do tema.

Criar:

- glass background
- blur
- rounded corners
- shadow
- boa hierarquia
- search field elegante
- active result destacado
- keyboard shortcut visual
- hover state

---

# FILE EXPLORER

Criar:

- hierarquia clara
- indentação consistente
- hover suave
- item selecionado elegante
- ícones discretos
- folders visualmente diferenciadas
- estados active/selected bem definidos

---

# CALLOUTS

Criar um sistema moderno de callouts.

Os callouts devem possuir:

- glass surface
- accent lateral
- border sutil
- ícone
- título
- espaçamento correto

Exemplos:

```markdown
> [!NOTE]

> [!TIP]

> [!WARNING]

> [!IMPORTANT]

> [!INFO]

> [!SUCCESS]

> [!ERROR]
```

---

# CODE BLOCKS

Criar blocos de código com estética premium.

Características:

- background separado do editor
- glass/dark surface
- border sutil
- rounded corners
- boa legibilidade
- syntax highlighting preservado
- copy button estilizado
- linguagem identificável

Não comprometer acessibilidade ou legibilidade.

---

# MICROINTERAÇÕES

Adicionar microinterações CSS onde fizer sentido.

Exemplo:

```css
transition:
    background-color
    border-color
    box-shadow
    opacity
    transform;
```

Usar animações rápidas e discretas.

Evitar:

- animações exageradas
- elementos pulando
- efeitos chamativos
- animações constantes

O tema deve continuar sendo uma ferramenta de produtividade.

---

# REDUZIR MOTION

Respeitar:

```css
@media (prefers-reduced-motion: reduce)
```

Quando o usuário preferir reduzir movimento:

- diminuir transições
- remover transformações desnecessárias
- desativar animações

---

# RESPONSIVIDADE

O tema deve funcionar corretamente em:

- Desktop
- Tablet
- Mobile

Não assumir apenas uma resolução.

Testar diferentes tamanhos de viewport.

---

# MOBILE

Dar atenção especial ao Obsidian Mobile.

Revisar:

- mobile navigation
- tabs
- sidebars
- modals
- menus
- touch targets
- editor
- settings

Os elementos interativos devem possuir áreas de toque confortáveis.

---

# PERFORMANCE

Não criar um tema visualmente bonito sacrificando performance.

Evitar:

- seletores CSS excessivamente complexos
- animações constantes
- blur aplicado em centenas de elementos simultaneamente
- efeitos caros em listas enormes
- `backdrop-filter` indiscriminado
- sombras gigantes
- regras redundantes

O tema deve funcionar bem em vaults grandes.

---

# COMPATIBILIDADE

Preservar compatibilidade com o Obsidian atual.

Não depender de APIs internas ou hacks frágeis quando houver alternativas CSS oficiais.

Não alterar funcionalidades do Obsidian.

Este projeto é um:

**THEME**

e não um:

**PLUGIN**

Não adicionar JavaScript desnecessário.

---

# STYLE SETTINGS

Avaliar suporte ao plugin **Style Settings**.

Caso faça sentido, preparar o tema para permitir personalização de:

- accent color
- intensidade do glass
- intensidade do blur
- arredondamento
- intensidade das bordas
- intensidade das sombras
- densidade da interface
- tamanho da fonte
- largura do editor
- estilo dos callouts

Não transformar o tema em uma configuração infinita.

Oferecer somente opções que realmente agreguem valor.

---

# ACESSIBILIDADE

Garantir:

- contraste adequado
- foco visível
- estados hover claros
- estados active claros
- keyboard navigation
- readable typography
- não depender apenas de cor para indicar estado

Não sacrificar usabilidade em nome da estética.

---

# TIPOGRAFIA

Escolher uma tipografia moderna e altamente legível.

Priorizar:

- excelente leitura longa
- boa aparência em headings
- boa leitura de código
- diferenciação clara entre níveis hierárquicos

Evitar fontes extravagantes.

Preferir fontes disponíveis localmente/system fonts quando possível.

---

# ARQUITETURA

Primeiro ANALISE o projeto existente.

Descubra:

- arquivos
- estrutura
- CSS
- SCSS
- variáveis
- build system
- assets
- screenshots
- manifest
- README
- licença

Depois faça um relatório curto explicando:

1. Como o tema atual funciona.
2. Quais partes serão preservadas.
3. Quais partes serão modificadas.
4. Quais partes precisam ser refatoradas.
5. Quais novos componentes serão adicionados.

Somente depois execute as alterações.

---

# FEATURES EXTRAS PARA AVALIAR

Além da transformação visual, avaliar:

## 1. OLED Mode

Base:

```text
#000000
```

com superfícies elevadas extremamente sutis.

## 2. Dynamic Accent

Estruturar o CSS para que uma única variável controle o accent principal:

```css
--theme-accent
```

## 3. Glass Intensity

Se Style Settings for utilizado:

```text
Low
Medium
High
```

## 4. Compact / Comfortable

Duas opções de densidade:

```text
Compact
Comfortable
```

## 5. Focus Mode

Quando o editor estiver em foco:

- sidebars visualmente mais discretas
- elementos secundários com menor contraste
- editor com prioridade visual

Não esconder funcionalidades importantes.

## 6. Minimal Status Bar

Criar aparência mais limpa para a status bar.

## 7. Premium Selection

Criar seleção de texto elegante.

## 8. Better Checkboxes

Criar checkboxes modernos mantendo acessibilidade e compatibilidade.

## 9. Better Tags

Criar tags com aparência de pequenas pills.

## 10. Better Properties

Criar aparência moderna para Properties/frontmatter.

---

# SCREENSHOTS

Criar screenshots profissionais para divulgação.

A principal screenshot deve:

- mostrar o tema em uso
- mostrar editor
- mostrar sidebar
- mostrar tabs
- mostrar callouts
- mostrar código
- mostrar elementos glass
- demonstrar claramente a identidade visual

Criar screenshot em:

```text
16:9
```

Preferencialmente:

```text
512x288
```

para a thumbnail oficial.

Se necessário, criar screenshots maiores para README.

---

# README

Criar um README profissional contendo:

- nome do tema
- descrição
- preview
- features
- instalação
- screenshots
- customização
- Style Settings
- compatibilidade
- limitações
- roadmap
- contribuição
- licença
- créditos

Não escrever um README genérico.

Ele deve vender visualmente a proposta do tema.

---

# MANIFEST

Verificar e configurar corretamente:

```text
manifest.json
```

com os campos necessários para um Obsidian Theme.

Não inventar campos inexistentes.

Validar o JSON.

---

# VERSIONAMENTO

Utilizar Semantic Versioning:

```text
MAJOR.MINOR.PATCH
```

Exemplo inicial:

```text
1.0.0
```

Alterações futuras devem atualizar a versão corretamente.

Criar e manter:

```text
versions.json
```

quando necessário para compatibilidade entre versões do Obsidian.

---

# GIT

Se o projeto ainda não possuir Git:

1. Inicializar Git.
2. Criar `.gitignore`.
3. Criar commits organizados.
4. Criar histórico compreensível.

Exemplos:

```text
feat: create OLED glass design system
feat: redesign workspace surfaces
feat: redesign tabs
feat: redesign sidebars
feat: improve editor components
feat: improve mobile styles
fix: improve modal contrast
fix: improve mobile navigation
docs: update README
release: v1.0.0
```

Não fazer um único commit gigante.

---

# GITHUB

Preparar o projeto para um repositório público.

Estrutura esperada:

```text
theme-repository/
├── theme.css
├── manifest.json
├── README.md
├── LICENSE
├── screenshot.png
├── versions.json
└── assets/
```

Se houver SCSS/build:

```text
src/
dist/
package.json
```

somente se realmente necessário.

Não adicionar complexidade artificial.

---

# RELEASE

Preparar uma GitHub Release:

```text
v1.0.0
```

A release deve conter os arquivos necessários para instalação/distribuição do tema.

Verificar consistência entre:

```text
manifest.json
versions.json
GitHub Release
```

---

# TESTES

Criar e executar um checklist de testes.

## Desktop

- [ ] Windows
- [ ] Linux
- [ ] macOS, se disponível

## Mobile

- [ ] Android, se disponível
- [ ] iOS, se disponível

## Obsidian

- [ ] Live Preview
- [ ] Reading View
- [ ] Source mode
- [ ] Canvas
- [ ] Graph View
- [ ] Settings
- [ ] Command Palette
- [ ] Search
- [ ] File Explorer
- [ ] Backlinks
- [ ] Properties
- [ ] Tables
- [ ] Callouts
- [ ] Code blocks
- [ ] Embeds
- [ ] Images
- [ ] PDFs
- [ ] Modals
- [ ] Menus
- [ ] Tooltips

Também verificar:

- [ ] light/dark mode behavior
- [ ] keyboard navigation
- [ ] focus states
- [ ] accessibility
- [ ] reduced motion
- [ ] performance
- [ ] long notes
- [ ] large vaults

---

# VALIDATION

Antes de finalizar:

1. Validar `manifest.json`.
2. Validar `versions.json`.
3. Verificar CSS.
4. Procurar regras duplicadas.
5. Procurar cores hardcoded desnecessárias.
6. Procurar seletores excessivamente agressivos.
7. Verificar conflitos com Obsidian.
8. Verificar mobile.
9. Verificar performance.
10. Verificar screenshot.
11. Verificar README.
12. Verificar licença.
13. Verificar estrutura do GitHub.
14. Verificar se o projeto está pronto para Pull Request no repositório oficial.

---

# COMMUNITY THEMES

O objetivo final é disponibilizar o tema na **Obsidian Community Themes**.

Seguir os requisitos atuais da documentação oficial do Obsidian e do repositório oficial de releases.

Não inventar regras.

Se alguma informação estiver desatualizada ou houver dúvida, consultar a documentação/repositório oficial antes de tomar uma decisão.

Fluxo esperado:

```text
Desenvolvimento
    ↓
Teste local
    ↓
GitHub Repository
    ↓
GitHub Release
    ↓
Pull Request
obsidianmd/obsidian-releases
    ↓
Review
    ↓
Community Themes
```

---

# LICENÇA E CRÉDITOS

O projeto possui um tema-base fornecido dentro desta pasta.

Antes de publicar:

1. Identificar a licença do tema-base.
2. Verificar se a licença permite modificação e redistribuição.
3. Preservar créditos obrigatórios.
4. Não remover copyright existente quando a licença exigir sua preservação.
5. Não copiar assets de terceiros sem verificar licença.
6. Não apresentar código de terceiros como criação original.

Se a licença do tema-base não permitir claramente a redistribuição modificada, **NÃO preparar o projeto para publicação** até resolver essa questão.

---

# RESULTADO FINAL ESPERADO

O resultado deve ser um:

**Obsidian Theme completo, moderno, premium, OLED black, glassmorphism, inspirado conceitualmente em interfaces modernas como iOS/macOS, altamente legível, performático, responsivo e preparado para publicação na Obsidian Community Themes.**

Prioridade:

```text
1. Funcionalidade
2. Legibilidade
3. Performance
4. Consistência
5. Acessibilidade
6. Estética
7. Customização
```

Não sacrificar os itens superiores para melhorar os inferiores.

---

# EXECUTION MODE

Não apenas descreva o que deve ser feito.

Execute o trabalho no projeto.

Primeiro:

```text
INSPECT
```

Depois:

```text
PLAN
```

Depois:

```text
IMPLEMENT
```

Depois:

```text
TEST
```

Depois:

```text
REVIEW
```

Depois:

```text
POLISH
```

Depois:

```text
PACKAGE
```

Por fim:

```text
RELEASE READY
```

Ao final, apresente:

1. Arquitetura final.
2. Arquivos modificados.
3. Features implementadas.
4. Features opcionais adicionadas.
5. Testes realizados.
6. Problemas encontrados.
7. Problemas corrigidos.
8. Dependências.
9. Como instalar localmente.
10. Como criar a GitHub Release.
11. Como submeter à Community Themes.
12. Próximos passos recomendados.

Não considere o projeto concluído enquanto os itens críticos não estiverem validados.
