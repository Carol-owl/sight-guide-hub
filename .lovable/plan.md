# Nova tipografia — elegante e editorial

## Direção visual
Inspirado nas referências enviadas: títulos em **serif** com presença editorial (estilo "Finally A Card That Powers *Your Growth*" e "founders like *you*"), e subtítulos/corpo em **sans-serif** discreta e moderna.

## Par de fontes proposto
- **Títulos (h1–h6):** `Instrument Serif` — serif contemporânea, elegante, com itálico expressivo (perfeito para destacar palavras como nas referências).
- **Subtítulos / corpo / UI:** `Inter` (já em uso) — mantém legibilidade e modernidade.

Alternativas equivalentes caso queira variar: `Fraunces`, `DM Serif Display` ou `Cormorant Garamond` para títulos.

## O que muda
1. **`index.html`** — adicionar `<link>` do Google Fonts para `Instrument Serif` (regular + italic).
2. **`src/styles.css`**
   - Atualizar `--font-display` para `"Instrument Serif", Georgia, serif`.
   - Manter `--font-sans` como `Inter`.
   - Ajustar `letter-spacing` dos `h1–h6` (serifs pedem tracking mais neutro, ~`-0.01em` em vez de `-0.02em`).
   - Pequeno ajuste de `font-weight` (serifs ficam melhores em 600 do que 700).
3. Os títulos das seções (Hero, Sobre, Especialidades, Procedimentos, Localização, Contato, etc.) automaticamente herdam a nova fonte — sem mexer em cada componente.
4. Os pequenos rótulos uppercase ("Localização", "Contato", etc.) continuam em `Inter` — contraste perfeito com o serif do título.

## O que NÃO muda
- Cores, layout, espaçamentos, componentes — apenas tipografia.
- Fonte do corpo e botões permanece `Inter`.

## Resultado esperado
Títulos como **"Onde encontrar o Dr. Daniel"** ganham peso editorial e sofisticação clínica, mantendo legibilidade. Visual mais próximo de um consultório premium do que de uma landing genérica.

---

Se quiser, posso depois aplicar o truque das referências: destacar **uma palavra do título em itálico** (ex: "Onde encontrar o *Dr. Daniel*") — me avise se quer incluir isso já neste passo.
