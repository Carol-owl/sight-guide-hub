## Problema

O `Header` é transparente até o usuário rolar 32px. Como o `Hero` tem fundo azul-marinho escuro (`primary`), e os elementos do header usam `text-primary` (o mesmo azul) e a logo do Instituto Bela Vista é desenhada em azul escuro, tudo fica invisível sobre o hero. Só aparece depois da rolagem, quando o header ganha fundo branco (`bg-background/95`).

Isso afeta:
- Logo do Instituto Bela Vista (SVG navy)
- Logo "DC" do Dr. Daniel (SVG navy)
- Links de navegação: Sobre, Formação, Áreas, Procedimentos, Depoimentos, Localização (texto navy)
- Botão hambúrguer mobile (ícone navy)

O botão "Agende sua Consulta" (verde menta) já tem contraste suficiente.

## Solução proposta

Aplicar variantes claras nos elementos do header **apenas enquanto `scrolled === false`**, mantendo o visual escuro atual depois da rolagem:

1. **Logos** — usar `filter: brightness(0) invert(1)` (ou classe `brightness-0 invert`) nos `<img>` das duas logos quando `!scrolled`, deixando-as brancas sobre o hero. Após rolar, voltam ao SVG original colorido.
2. **Links de navegação** — trocar `text-primary` por `text-primary-foreground` (branco) quando `!scrolled`; hover passa a usar `hover:text-accent` (menta) em vez de `hover:text-secondary` para manter visibilidade.
3. **Divisor vertical** entre as logos — usar `bg-primary-foreground/30` quando `!scrolled`.
4. **Botão hambúrguer mobile** — `text-primary-foreground` quando `!scrolled`.
5. **Drawer mobile** — manter como está (já abre com fundo claro), só garantir que ao abrir sobre o hero o conteúdo permaneça legível (já está, pois usa `bg-background/98`).

Alternativa descartada: tornar o header sempre sólido desde o topo. Perderia o efeito "imersivo" sobre o hero que a versão atual busca.

## Detalhes técnicos

Arquivo único: `src/components/Header.tsx`.

- Computar uma variável `onHero = !scrolled` e aplicar classes condicionais com template strings (mesmo padrão já usado no `className` do `<header>`).
- Para as logos SVG, aplicar `className={onHero ? "... brightness-0 invert" : "..."}` — funciona porque ambos os SVGs são monocromáticos navy; `brightness-0 invert` os torna brancos puros.
- Garantir transição suave: adicionar `transition-colors` nos links e `transition-[filter]` nas imagens para acompanhar a transição de 300ms já existente no header.
- Não mexer em `Hero.tsx`, `site.ts`, nem nos SVGs.

## Validação

Após a alteração, abrir o preview no topo da página (sem rolar) e confirmar que as duas logos e os 6 links de navegação aparecem em branco sobre o gradiente azul do hero, e que ao rolar mais de 32px o header volta ao visual claro com texto navy.
