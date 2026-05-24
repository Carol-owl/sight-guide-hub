## Problema

O arquivo `wrangler.jsonc` tem uma vírgula final (trailing comma) após `"main": "src/server.ts",`. Apesar de JSONC tecnicamente aceitar comentários, o parser usado no deploy da Cloudflare Pages está rejeitando essa vírgula, gerando o erro `ParseError: PropertyNameExpected`.

## Correção

Remover a vírgula final após o valor de `"main"`:

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "tanstack-start-app",
  "compatibility_date": "2025-09-24",
  "compatibility_flags": ["nodejs_compat"],
  "main": "src/server.ts"
}
```

Mudança única: 1 caractere removido (a vírgula após `"src/server.ts"`).
