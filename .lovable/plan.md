# Destaque tipográfico com serif + gradiente arco-íris

Inspirado na referência (Portrait): palavras-chave dentro dos títulos ganham fonte serifada elegante em itálico + gradiente pastel arco-íris aplicado ao texto. Restante do título continua na fonte atual (DM Sans, sem mudanças globais).

## Tipografia
- **Fonte de destaque:** `Instrument Serif` itálico (Google Fonts) — serif contemporânea, leve, com presença editorial similar à referência. Carregada apenas para essa finalidade.
- **Fonte dos títulos:** permanece `DM Sans` (sem alterações).
- **Corpo:** permanece `Inter`.

## Estilo do destaque
- Gradiente suave pastel/arco-íris aplicado via `background-clip: text` (rosa → lilás → azul → verde-água → âmbar).
- Itálico, mesmo tamanho do título irmão, leve ajuste óptico (`line-height` e `letter-spacing` para encaixar bem ao lado do sans).
- Acessibilidade: cor sólida de fallback (cor primária) para navegadores sem `background-clip: text` e para `prefers-reduced-motion` o gradiente fica estático (sem animação).

## Implementação técnica
1. **`src/routes/__root.tsx`** — adicionar `Instrument Serif:ital@1` ao link do Google Fonts (mantém DM Sans e Inter).
2. **`src/styles.css`**
   - Nova variável `--font-accent: "Instrument Serif", Georgia, serif`.
   - Novo gradiente `--gradient-accent-text` com paleta pastel arco-íris.
   - Nova classe utilitária `.text-accent-script`:
     ```css
     .text-accent-script {
       font-family: var(--font-accent);
       font-style: italic;
       font-weight: 400;
       background: var(--gradient-accent-text);
       -webkit-background-clip: text;
       background-clip: text;
       color: transparent;
       letter-spacing: 0;
     }
     ```
   - Fallback `@supports not (background-clip: text)` → cor sólida `var(--secondary)`.
3. **Aplicar nos títulos** — envolver as palavras-chave em `<span className="text-accent-script">…</span>`:
   - **Hero** (`src/components/sections/Hero.tsx`): "Dr. Daniel Campos — sua *visão* merece o melhor *cuidado*."
   - **About** (`src/components/sections/About.tsx`): "Ciência, técnica e *escuta* atenta caminham juntas." (sugestão — confirmar palavra)
   - **Location** (`src/components/sections/Location.tsx`): destacar "Dr. Daniel" em "Onde encontrar o *Dr. Daniel*".
   - **Contact** (`src/components/sections/Contact.tsx`): destacar "Dr. Daniel" em "Fale com a equipe do *Dr. Daniel*".
   - **Specialties / Procedures / Testimonials / Media**: 1 palavra-chave por título, sempre coerente com o contexto (ex.: "*especialidades*", "*procedimentos*", "*pacientes*", "*mídia*"). Lista final ajustável.

## O que NÃO muda
- Fonte global dos títulos, cores semânticas, layout, espaçamentos, componentes.
- Apenas adição de uma classe utilitária + envoltórios `<span>` em palavras escolhidas.

## Resultado
Títulos ganham o mesmo charme editorial da referência ("Your *forever* space…") — uma palavra serifada itálica com gradiente arco-íris suave, contrastando com o sans-serif sóbrio do restante.
