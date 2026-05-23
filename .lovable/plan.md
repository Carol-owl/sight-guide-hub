## Objetivo
Dar maior destaque e contraste à logomarca "Dr. Daniel Campos" no rodapé do site, criando um efeito de relevo com vidro fosco ao fundo e brilho intenso na logo branca sobre o fundo azul escuro.

## Alterações no `src/components/Footer.tsx`

1. **Container glass ao redor da logo de Daniel Campos**
   - Envolver a tag `<img>` da logo (`ASSETS.logoDanielWhite`) em um `<div>` com efeito de vidro fosco.
   - Usar combinação de classes Tailwind para criar o glass sem adicionar novas classes CSS:
     - Fundo semi-transparente claro (`bg-white/15` ou `bg-primary-foreground/15`)
     - `backdrop-blur-xl` para fosco intenso
     - `border border-white/25` para delinear o vidro
     - `rounded-2xl` para suavizar
     - `p-4` (ou maior) para criar respiro e relevo
     - `shadow-lg` ou `shadow-xl` com cor para elevação
     - `shadow-[0_0_30px_rgba(...)]` para glow sutil no container

2. **Brilho intenso na própria logo**
   - Aumentar o `drop-shadow` existente da logo para algo mais intenso e dourado/accent.
   - Exemplo: `drop-shadow-[0_0_20px_color-mix(in_oklab,var(--color-gold)_60%,transparent)]` ou com `var(--color-accent)`.
   - Manter o tamanho atual (`h-16 md:h-20`) ou aumentar levemente se o container comportar.

3. **Reorganização visual opcional (se necessário)**
   - Manter a logo do IBV como está (já tem fundo branco próprio).
   - Garantir que a nova caixa de vidro da logo Daniel fique bem posicionada abaixo da IBV com espaçamento confortável.

## Resultado esperado
A logomarca "Dr. Daniel Campos" ganhará um "card" de vidro fosco (frosted glass) ao redor, com bordas sutis, blur no fundo e um glow/brilho mais forte na imagem branca, destacando-se elegantemente sobre o azul escuro do rodapé.