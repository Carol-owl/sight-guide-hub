## Objetivo
Deixar o ícone de olho do logo IBV branco quando exibido sobre o hero, mantendo a versão sage original no header scrolled e no footer.

## Passos

1. **Gerar variante branca do logo IBV**
   - Usar `imagegen--edit_image` sobre `src/assets/logo-ibv.png` para produzir `src/assets/logo-ibv-white.png` (PNG transparente) com olho + texto "Instituto Bela Vista / Oftalmologia" em branco puro, preservando proporções e composição.

2. **Expor a nova variante**
   - Em `src/data/site.ts`, adicionar import `logoIbvWhite` apontando para o novo asset e expor em `site.brand` (ex.: `ibvLogoWhite`).

3. **Trocar dinamicamente no Header**
   - Em `src/components/Header.tsx`, no `<img>` do logo IBV: usar `src={onHero ? ibvLogoWhite : ibvLogo}` e remover o `drop-shadow` pesado quando branco (sombra leve só para legibilidade).
   - Footer permanece inalterado (continua usando o logo sage sobre fundo claro).

## Detalhes técnicos
- Asset novo: `src/assets/logo-ibv-white.png`, fundo transparente, mesma proporção horizontal.
- Sem alterações de tokens em `styles.css` (o branco do hero já é `--primary-foreground`).
- Escopo restrito a frontend/apresentação; sem mudanças em rotas, dados ou backend.
