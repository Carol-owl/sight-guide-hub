## Objetivo

Aplicar ao logo "Dr. Daniel Campos" o mesmo comportamento do logo IBV: versão **branca** sobre o hero (fundo escuro) e versão **colorida original** quando o header fica sólido após rolar.

## Mudanças

1. **Adicionar assets**
   - Copiar `user-uploads://LOGO.COR2.PNG` → `src/assets/logo-daniel-color.png` (logo colorido oficial fornecido).
   - Gerar `src/assets/logo-daniel-white.png` — versão branca (olho + "Daniel Campos / Oftalmologista") sobre fundo transparente, mantendo a tipografia/proporção do original.

2. **`src/data/site.ts`**
   - Importar `logoDanielColor` e `logoDanielWhite`.
   - Expor ambos em `ASSETS` (mantendo `logoDaniel` SVG por compatibilidade com o Footer, ou substituindo pelo color — ver abaixo).

3. **`src/components/Header.tsx`**
   - Trocar a `<img>` do Dr. Daniel para:
     ```tsx
     src={onHero ? ASSETS.logoDanielWhite : ASSETS.logoDanielColor}
     ```
   - Remover o hack `brightness-0 invert` (não é mais necessário).
   - Manter um leve `drop-shadow` no estado hero para contraste, igual ao IBV.

4. **`src/components/Footer.tsx`** (footer é fundo verde escuro)
   - Trocar para `ASSETS.logoDanielWhite` para garantir legibilidade sobre o `bg-primary`.

## Fora de escopo

- Nenhuma mudança em cores do design system, layout do hero ou demais seções.
