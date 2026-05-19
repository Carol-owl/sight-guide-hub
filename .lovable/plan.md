## Objetivo

Substituir o logo atual do Instituto Bela Vista (SVG genérico "IBV") pelo logo oficial enviado no PDF — versão horizontal com ícone de olho + "Instituto Bela Vista / OFTALMOLOGIA" no verde sálvia da marca.

## Passos

1. **Gerar PNG transparente do logo**
   - Usar a página 3 do PDF (versão sálvia sobre branco) e remover o fundo, gerando `src/assets/logo-ibv.png` com transparência. Mantém as cores originais da marca (verde sálvia ~#8FA38F).

2. **Atualizar `src/data/site.ts`**
   - Trocar o import `logo-ibv.svg` → `logo-ibv.png`.

3. **Ajustar `src/components/Header.tsx` e `src/components/Footer.tsx`**
   - Remover o filtro `brightness-0 invert` aplicado ao logo IBV no hero/header e no footer, para preservar as cores originais (verde sálvia) conforme pedido.
   - Aumentar levemente a altura (`h-10` → `h-11/12`) se necessário para boa legibilidade, já que o novo logo inclui o lockup completo (ícone + texto + tagline).

4. **Adicionar token de cor da marca**
   - Em `src/styles.css`, registrar `--color-ibv-sage: oklch(...)` com o verde sálvia do logo, para uso futuro (ex.: detalhes UI alinhados à identidade do IBV). Não altera cores existentes do site.

5. **Fora do escopo**
   - Não troco o logo do Dr. Daniel.
   - Não altero a paleta global do site (azul/dourado permanece).
   - Não removo o SVG antigo do repositório (mantenho para histórico, mas não importado).

## Observação visual

O logo do PDF é horizontal e mais "alto" que o atual (tem ícone + duas linhas de texto). No header sobre o hero escuro, o verde sálvia tem contraste suficiente; caso fique fraco em telas pequenas, posso adicionar um leve `drop-shadow` sutil — confirme se quer essa proteção.
