## Objetivo
Fazer com que as duas logos do rodapé (IBV e Dr. Daniel Campos) fiquem visualmente do mesmo tamanho.

## Problema atual
A logo IBV usa um fundo branco quadrado (`bg-primary-foreground/95 p-3 rounded-lg`) enquanto a logo Daniel está dentro de um card de vidro fosco (`bg-white/10 backdrop-blur-xl px-6 py-5 rounded-2xl`). Ambas têm `h-20 md:h-24` na imagem, mas o tratamento do container é diferente, criando desigualdade visual — conforme visível no screenshot do rodapé.

## Solução
1. **Logo IBV**: remover `bg-primary-foreground/95 p-3 rounded-lg` da `<img>` e envolvê-la em um card de vidro fosco idêntico ao da logo Daniel (mesmas classes de container: `rounded-2xl border border-white/25 bg-white/10 px-6 py-5 backdrop-blur-xl shadow-[...] ring-1 ring-inset ring-white/10`).
2. **Logo Daniel**: manter o card de vidro fosco existente, apenas verificar que as dimensões da imagem continuam `h-20 w-auto md:h-24`.
3. Ajustar espaçamento (`mt-6` entre os cards) para manter o layout confortável.

## Resultado esperado
Ambas as logos terão o mesmo container, mesmo padding, mesmo estilo visual e mesmo tamanho percebido no rodapé escuro.