## Problema
1. O card do IBV ficou mais largo que o do Dr. Daniel — as proporções das imagens são parecidas (2.21:1 vs 2.01:1), mas como cada card só usa `px-6 py-5` e dimensiona pela imagem, a diferença aparece.
2. A logo IBV é em verde sálvia sobre fundo claro. Hoje ela está sobre o vidro fosco escuro, o que descaracteriza as cores originais (parecem apagadas/dessaturadas).

## Solução

### 1. Cards do mesmo tamanho
Dar aos dois containers uma dimensão fixa idêntica (`h-28 w-60` por exemplo) com `inline-flex items-center justify-center`. As `<img>` viram `max-h-full max-w-full w-auto object-contain` para se ajustarem internamente — assim, qualquer logo cabe dentro do mesmo "molde".

### 2. Cores precisas da logo IBV
A logo IBV precisa de fundo claro para preservar o verde original. Dentro do card de vidro fosco, adicionar um "tile" interno branco/creme claro (`bg-white rounded-xl px-4 py-3`) que envolve a `<img>` do IBV. O card externo continua sendo o mesmo vidro fosco do Daniel — então a "moldura" externa permanece idêntica, mas o interior do IBV é claro para honrar as cores da marca.

A logo do Dr. Daniel continua direto sobre o vidro (já é branca, então funciona).

## Arquivo
- `src/components/Footer.tsx` — ajustar os dois blocos de logo (linhas ~9-33).

## Resultado esperado
Dois cards de vidro fosco visualmente do mesmo tamanho lado a lado (empilhados na coluna), IBV com fundo branco interno mostrando o verde correto, Daniel com logo branca direto no vidro com brilho dourado.