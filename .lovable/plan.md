## Diagnóstico

O nome no `wrangler.jsonc` **já está correto** (`sight-guide-hub`) — não é problema de nome.

A causa real está no início do log:

```
✘ [ERROR] Could not resolve "tanstack-start-manifest:v"
✘ [ERROR] Could not resolve "tanstack-start-injected-head-scripts:v"
```

Esses são **módulos virtuais** gerados pelo plugin do TanStack Start durante `vite build`. O Cloudflare Workers Builds está executando `wrangler deploy` direto contra `src/server.ts` (o `main` do `wrangler.jsonc`), pulando o build do Vite — então o wrangler/esbuild encontra os imports virtuais sem ninguém pra resolvê-los e quebra.

O projeto usa `@cloudflare/vite-plugin`, que gera o bundle final do Worker em `dist/sight-guide-hub/` junto com um `wrangler.json` próprio (com aliases e entry corretos). O deploy precisa apontar pra esse output, não pra `src/`.

## Correções

### 1. Configurar Cloudflare Workers Builds (no dashboard da Cloudflare)

No painel do Worker `sight-guide-hub` → **Settings → Builds**:

- **Build command:** `bun install && bun run build`
- **Deploy command:** `bunx wrangler deploy`
- **Root directory:** (vazio, ou `/`)

Sem o `bun run build` antes, o `wrangler deploy` nunca vai conseguir resolver os módulos virtuais do TanStack Start.

### 2. Ajustar `wrangler.jsonc` para apontar ao build do Vite

O `@cloudflare/vite-plugin` emite `dist/sight-guide-hub/wrangler.json` completo. A forma mais limpa é deixar o `wrangler deploy` usar esse config gerado, trocando o deploy command pra:

```
bunx wrangler deploy -c dist/sight-guide-hub/wrangler.json
```

Ou, alternativamente, manter `wrangler.jsonc` na raiz mas mudar `main` para o entry buildado (`dist/sight-guide-hub/index.js`) e adicionar:

```jsonc
{
  "name": "sight-guide-hub",
  "main": "dist/sight-guide-hub/index.js",
  "compatibility_date": "2025-09-24",
  "compatibility_flags": ["nodejs_compat"],
  "assets": { "directory": "dist/sight-guide-hub/assets" }
}
```

A primeira opção (usar o `-c` apontando pro wrangler.json gerado) é mais robusta porque o plugin já preenche assets, bindings e aliases corretamente — não precisa duplicar manualmente.

### 3. (Opcional) Confirmar versão do bun/node no build

Cloudflare Workers Builds usa Node 22 por padrão. Se o build reclamar de bun ausente, trocar pra `npm ci && npm run build` e `npx wrangler deploy -c dist/sight-guide-hub/wrangler.json`.

## O que NÃO precisa mudar

- Nome do Worker — já bate.
- `src/server.ts`, `vite.config.ts`, código da app — nada do erro vem daí.
- Publish nativo do Lovable continua funcionando independente disso.

## Como validar

Após ajustar Build/Deploy commands no dashboard da Cloudflare, disparar um novo deploy (push no GitHub). O log deve mostrar `vite build` rodando antes do `wrangler deploy`, sem os erros `Could not resolve "tanstack-start-manifest:v"`.

## Observação importante

Essa mudança é **na configuração do Cloudflare Workers Builds (dashboard)**, não em arquivos do repo — eu não consigo aplicar isso por você. Posso, se quiser, ajustar o `wrangler.jsonc` na raiz pra apontar pro build do Vite (opção 2 acima) como fallback, mas o passo principal (mudar build/deploy commands) precisa ser feito por você no painel Cloudflare.
