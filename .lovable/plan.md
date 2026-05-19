## Objetivo
Aumentar e destacar os logos do Instituto Bela Vista (IBV) e do Dr. Daniel Campos no rodapé, deixando-os mais nítidos e com efeito de brilho sutil.

## Alterações
Arquivo único: `src/components/Footer.tsx` (apenas a primeira coluna do grid).

### Logo IBV
- Tamanho: `h-14` → `h-20 md:h-24` (aumento ~50–70%)
- Manter fundo claro `bg-primary-foreground/95` para preservar contraste e nitidez do PNG
- Aumentar padding interno para `p-3` para respirar
- Renderização nítida: adicionar `image-rendering` crisp via classe utilitária inline `[image-rendering:auto]` + `loading="eager"` e `decoding="sync"`
- Brilho: `drop-shadow-[0_0_18px_color-mix(in_oklab,var(--color-accent)_55%,transparent)]` aplicado no wrapper (não no PNG diretamente, para que o halo envolva o cartão)

### Logo Dr. Daniel
- Tamanho: `h-12` → `h-16 md:h-20`
- Brilho: `drop-shadow-[0_0_14px_color-mix(in_oklab,var(--color-accent)_45%,transparent)]`
- `loading="eager"` e `decoding="sync"` para garantir render imediato e nítido

### Observações
- Sem mudanças em outras seções, dados, ou tokens do design system.
- Mantém tokens semânticos (`--color-accent`, `primary-foreground`) — sem cores hardcoded.
- Mantém acessibilidade (alts preservados) e responsividade (tamanhos com breakpoint `md`).

## Fora de escopo
- Substituir os arquivos de logo (PNG/SVG).
- Alterar logos no Header ou em outras áreas.
- Mudar paleta, tipografia ou layout do rodapé.
