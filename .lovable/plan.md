## Situação atual

O `Header.tsx` já faz exatamente o que você descreveu:

```tsx
src={onHero ? ASSETS.logoIbvWhite : ASSETS.logoIbv}
```

- `onHero = true` (topo da página, fundo escuro do hero) → logo **branco**
- `onHero = false` (após rolar > 32px, header sólido claro) → logo **verde** original

## Nada a fazer

Não há mudanças de código necessárias. Se você está vendo o logo verde sobre o hero, pode ser cache do navegador — recarregue com Ctrl+Shift+R.

Se mesmo assim o comportamento não estiver correto, me diga:
1. Em qual estado o logo aparece errado (topo ou após rolar)?
2. Qual cor aparece quando deveria ser outra?

Assim consigo investigar o caso específico.