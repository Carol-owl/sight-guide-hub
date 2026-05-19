## Mudanças

### 1. Remover os 4 ícones de Áreas de atuação

**`src/components/sections/Specialties.tsx`**
- Remover imports `Eye, Scan, Brain, Focus` de `lucide-react` (manter `Plus, Minus`).
- Remover o `iconMap` e a linha `const Icon = iconMap[s.icon]`.
- Remover o `<div>` do badge no canto superior esquerdo da imagem (linhas 28-30) — o `<Icon />` e seu contêiner saem completamente. A foto da especialidade fica limpa, sem overlay.

Não vou mexer no campo `icon` em `src/data/site.ts` nem no tipo `Specialty.icon` — fica como dado não utilizado, sem custo. (Se preferir limpar também, me avise.)

### 2. Ampliar a foto do Glaucoma (nervo óptico mais aparente)

**`src/assets/specialty-glaucoma.jpg`**
- Reenquadrar a imagem atual com zoom no nervo óptico (disco óptico central) usando `imagegen--edit_image` — mesmo arquivo, recorte mais fechado mantendo qualidade. Aspect ratio `16:9` para casar com o `aspect-[16/10]` do card.

Nenhuma outra mudança de layout ou código necessária — o `<img className="object-cover">` já se ajusta ao novo enquadramento.

## Fora de escopo
- Outras fotos de especialidades, layout dos cards, textos.
