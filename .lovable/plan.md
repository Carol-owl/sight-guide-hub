## Mudança
No setor "Procedimentos" (`src/components/sections/Procedures.tsx`), substituir todos os ícones `Stethoscope` (Lucide) pelo ícone anexado (olho com mão por baixo, estilo line-art azul).

## Passos

1. **Tratar o ícone anexado**
   - Copiar `user-uploads://eyecare.icon-2.jpg` e gerar uma versão limpa em PNG transparente usando `imagegen--edit_image`.
   - Prompt: limpar fundo, deixar linhas nítidas e bem definidas, manter o traço azul original, adicionar leve brilho/glow azul sutil ao redor para dar efeito premium, fundo sólido branco (depois removido para transparência).
   - Salvar em `src/assets/icon-eyecare.png` (transparent_background: true).

2. **Atualizar `Procedures.tsx`**
   - Importar o novo asset: `import iconEyecare from "@/assets/icon-eyecare.png"`.
   - Remover o import de `Stethoscope` do `lucide-react` (manter `ArrowRight`).
   - Substituir o `<Stethoscope />` dentro da lista por `<img src={iconEyecare} alt="" aria-hidden className="h-7 w-7 object-contain" />`.
   - Manter o container redondo `bg-accent/15` (o glow do ícone aparece sobre o fundo claro). Se necessário, ajustar levemente o padding do círculo para acomodar o ícone.

## QA
- Verificar visualmente os 6 procedimentos: o ícone deve aparecer nítido, com brilho sutil, alinhado verticalmente com o texto, em todos os itens.
- Nenhum `Stethoscope` remanescente no arquivo.

## Fora de escopo
- Outras seções/ícones do site (Specialties, Hero, Footer, etc.) — só o setor Procedimentos.
- Alterações de layout, cores ou textos da seção.
