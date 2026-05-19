## Objetivo

Adicionar as 2 novas fotos da fachada do Instituto Bela Vista à galeria da seção **Bastidores** (`#midia`).

## Mudanças

1. **Copiar assets**
   - `user-uploads://BELAVISTA-72.jpg` → `src/assets/ibv-facade-1.jpg` (placa "Instituto Bela Vista Oftalmologia" com logo do olho)
   - `user-uploads://BELAVISTA-73.jpg` → `src/assets/ibv-facade-2.jpg` (fachada com WhatsApp 98 3301-5060)

2. **`src/data/site.ts`**
   - Importar `ibvFacade1` e `ibvFacade2`.
   - Adicionar 2 novos itens ao array `GALLERY` com `alt` descritivo (ex.: "Fachada do Instituto Bela Vista de Oftalmologia").

3. **`src/components/sections/Media.tsx`** — sem alteração de código.
   - O grid atual (`sm:grid-cols-2 lg:grid-cols-4`) com a primeira foto em destaque (`sm:col-span-2 sm:row-span-2`) acomoda naturalmente 6 itens. A primeira segue sendo a cirurgia em destaque; as novas entram como tiles regulares no final.

## Fora de escopo

- Reordenar fotos existentes, alterar layout do grid ou tamanhos.
