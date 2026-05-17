# Plano — Glassmorphism em CTAs e ícones

Aplicar um efeito de vidro fosco (glassmorphism) reutilizável nos botões de chamada para ação (CTAs "Agende sua Consulta", "Conheça as áreas") e nos ícones flutuantes (WhatsApp e Voltar ao topo), mantendo contraste e legibilidade.

## 1. Tokens e utilitários globais (`src/styles.css`)

Adicionar tokens semânticos no `:root` e `.dark` para que o efeito se adapte ao modo claro/escuro:

```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.12);
  --glass-bg-strong: rgba(255, 255, 255, 0.22);
  --glass-border: rgba(255, 255, 255, 0.28);
  --glass-shadow: 0 8px 32px rgba(10, 42, 74, 0.18);
  --glass-blur: 14px;
}
.dark {
  --glass-bg: rgba(255, 255, 255, 0.08);
  --glass-bg-strong: rgba(255, 255, 255, 0.14);
  --glass-border: rgba(255, 255, 255, 0.18);
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
}
```

Criar três classes utilitárias modulares (em `@layer components`):

- `.glass` — base: fundo semi-transparente, blur, borda 1px translúcida, sombra suave, fallback para navegadores sem `backdrop-filter`.
- `.glass-cta` — variante para botões CTA: combina `.glass` com um overlay sutil da cor `--accent` (verde-água) para preservar a identidade da marca; inclui hover com aumento de opacidade.
- `.glass-icon` — variante para ícones circulares flutuantes: padding/raio para 44–56px, hover com leve scale.

Cada classe inclui `-webkit-backdrop-filter` (Safari) e `@supports not (backdrop-filter: blur(1px))` com fundo mais opaco como fallback.

## 2. Onde aplicar

| Elemento | Arquivo | Mudança |
|---|---|---|
| CTA principal "Agende sua Consulta" no Hero | `src/components/sections/Hero.tsx` | Trocar `bg-accent ... shadow-[...]` por `glass-cta` |
| Botão secundário "Conheça as áreas" | `src/components/sections/Hero.tsx` | Trocar `border ... bg-...` por `glass` |
| CTA no Header (desktop) | `src/components/Header.tsx` | Aplicar `glass-cta` |
| CTA no menu mobile | `src/components/Header.tsx` | Aplicar `glass-cta` |
| Botão hamburger / fechar | `src/components/Header.tsx` | Aplicar `glass-icon` quando sobre o hero |
| Botão flutuante WhatsApp | `src/components/FloatingWhatsApp.tsx` | Aplicar `glass-icon` mantendo cor verde da marca via overlay |
| Botão "Voltar ao topo" | `src/components/BackToTop.tsx` | Aplicar `glass-icon` |
| Cápsula "Instituto Bela Vista" no Hero | `src/components/sections/Hero.tsx` | Aplicar `glass` (já é translúcida — apenas refinar) |

Não alterar tipografia, layout, conteúdo nem componentes que não sejam CTA/ícone.

## 3. Contraste e acessibilidade

- Manter texto branco (`text-primary-foreground`) nos CTAs sobre fundo escuro do hero; em fundos claros, alternar para `text-primary` via classe condicional já existente no Header.
- Adicionar `text-shadow: 0 1px 2px rgba(0,0,0,0.25)` apenas no CTA principal do Hero para garantir leitura mínima AA mesmo com overlay translúcido.
- Manter `min-h-[44px]` (já presente) para área de toque.
- Preservar foco visível existente (`:focus-visible` já configurado globalmente).
- Respeitar `prefers-reduced-motion` (já configurado) — as classes não adicionam novas animações além de hover scale leve.

## 4. Responsividade e compatibilidade

- `backdrop-filter` funciona em todos os navegadores modernos; fallback opaco cobre o restante.
- Sem mudança de breakpoints — todas as variações usam classes Tailwind existentes (sm/lg).
- Sem novas dependências.

## Detalhes técnicos

Estrutura final das classes (resumo):

```text
.glass        → bg var(--glass-bg) + backdrop-blur(14px) + border 1px var(--glass-border) + shadow var(--glass-shadow)
.glass-cta    → .glass + tint accent (linear-gradient sutil) + hover:bg-strong + scale-[1.02]
.glass-icon   → .glass + rounded-full + grid place-items-center + hover:scale-110
```

Arquivos editados:
- `src/styles.css` (tokens + 3 classes utilitárias)
- `src/components/sections/Hero.tsx`
- `src/components/Header.tsx`
- `src/components/FloatingWhatsApp.tsx`
- `src/components/BackToTop.tsx`
