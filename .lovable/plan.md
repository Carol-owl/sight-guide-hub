# Plano — Glass escuro nos CTAs restantes e nitidez do "Voltar ao topo"

Aplicar o efeito de vidro nos botões que ficaram de fora, mas com **fundo escuro** (em vez do vidro claro usado no hero) para preservar contraste sobre fundos claros. Também aumentar a nitidez do botão flutuante "Voltar ao topo".

## 1. Nova variante escura em `src/styles.css`

Adicionar tokens para a variante escura no `:root` (e equivalente no `.dark`):

```css
--glass-dark-bg: rgba(10, 42, 74, 0.72);          /* baseado em --primary */
--glass-dark-bg-strong: rgba(10, 42, 74, 0.85);
--glass-dark-border: rgba(255, 255, 255, 0.18);
--glass-dark-shadow: 0 10px 30px rgba(10, 42, 74, 0.35);
```

Criar duas novas classes utilitárias em `@layer components`:

- `.glass-cta-dark` — vidro escuro para CTA principal (texto branco):
  - `background: var(--glass-dark-bg)` + `backdrop-filter: blur(14px) saturate(140%)`
  - `border: 1px solid var(--glass-dark-border)`
  - `box-shadow: var(--glass-dark-shadow), inset 0 1px 0 rgba(255,255,255,0.18)`
  - hover: `bg-strong` + `translateY(-1px) scale(1.02)`
  - inclui fallback `@supports not (backdrop-filter)` com fundo opaco `var(--primary)`.

- `.glass-cta-accent` — variação para botões com identidade verde (WhatsApp/accent):
  - mesma base, mas usando um `--glass-accent-bg: rgba(<accent rgb>, 0.78)` e texto `--accent-foreground`.

Ambas mantêm `text-shadow: 0 1px 2px rgba(0,0,0,0.25)` para legibilidade AA.

## 2. Refinar `.glass-icon` para o "Voltar ao topo"

Hoje o botão usa `.glass-icon` (vidro claro translúcido) sobre o fundo branco da página → fica quase invisível.

Criar `.glass-icon-dark` (mesma base do `.glass-cta-dark`, formato circular):
- `background: var(--glass-dark-bg)`, blur, borda translúcida, sombra mais forte
- ícone em branco com `drop-shadow`
- hover `scale(1.08)`

Aplicar `.glass-icon-dark` no `BackToTop.tsx` no lugar de `.glass-icon`.
Manter o WhatsApp flutuante como está (já é verde sólido + glass).

## 3. Aplicar nos botões listados

| Botão | Arquivo | Classe atual | Nova classe |
|---|---|---|---|
| "Quero agendar uma avaliação" | `src/components/sections/About.tsx` | `bg-primary text-primary-foreground` | `glass-cta-dark` |
| "Tire suas dúvidas no WhatsApp" | `src/components/sections/Procedures.tsx` | `bg-primary text-primary-foreground` | `glass-cta-dark` |
| "Falar no WhatsApp" (footer) | `src/components/Footer.tsx` | `bg-accent text-accent-foreground` | `glass-cta-accent` |
| "Ligar agora" (Location) | `src/components/sections/Location.tsx` | `border bg-background text-primary` | `glass-cta-dark` |
| "WhatsApp" (Location) | `src/components/sections/Location.tsx` | `bg-accent text-accent-foreground` | `glass-cta-accent` |
| "Voltar ao topo" | `src/components/BackToTop.tsx` | `glass-icon` | `glass-icon-dark` |

Nenhuma alteração em layout, tipografia, ícones internos, espaçamentos ou cópias — apenas troca de classes de aparência.

## 4. Contraste e acessibilidade

- Texto continua branco (`text-primary-foreground` / `text-accent-foreground`) sobre vidro escuro → contraste AA garantido mesmo em fundos claros.
- `text-shadow` sutil reforça leitura.
- Mantém `min-h-[44px]`/`min-h-[56px]` e foco visível existentes.
- Fallback opaco para navegadores sem `backdrop-filter`.

## Arquivos editados

- `src/styles.css` (tokens + 3 novas classes: `glass-cta-dark`, `glass-cta-accent`, `glass-icon-dark`)
- `src/components/sections/About.tsx`
- `src/components/sections/Procedures.tsx`
- `src/components/sections/Location.tsx`
- `src/components/Footer.tsx`
- `src/components/BackToTop.tsx`
