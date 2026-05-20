## Diagnóstico
Você está certo: na imagem atual (`src/assets/specialty-refrativa.jpg`), os "arames" metálicos cruzando o olho não correspondem a um blefarostato real (que é uma peça única, em forma de mola, apoiada nas bordas palpebrais superior e inferior). Eles parecem mais pinças soltas, o que destoa do padrão clínico.

## Opção recomendada: regerar a imagem com referência anatômica correta
Manter a cena de cirurgia refrativa (com laser) é mais informativo para a seção do que apenas um olho aberto sem instrumentos. A solução mais limpa é gerar uma nova imagem com prompt mais específico sobre o blefarostato.

Novo prompt (resumo): close-up cirúrgico de LASIK, olho mantido aberto por um **Barraquer wire eyelid speculum** (peça única em forma de mola de aço inoxidável, com dois arcos que se apoiam respectivamente sobre a pálpebra superior e inferior, conectados lateralmente por uma alça curva nos cantos — sem hastes cruzando o globo ocular), mira de laser excimer (pontos vermelhos) sobre a córnea, campo estéril azul, microscopia cirúrgica. Sem óculos, sem outras pinças, sem mãos.

Se a primeira tentativa não convencer, tento mais uma variação antes de cair na Opção B.

## Opção B (fallback): editar a imagem atual removendo os instrumentos
Usar `imagegen--edit_image` para apagar os arames metálicos, preservando o olho com a mira do laser e o campo cirúrgico. Risco: a cena fica "olho aberto sozinho no campo", o que enfraquece a leitura "cirurgia em andamento", mas é tecnicamente neutro (não mostra instrumento errado).

## Opção C (fallback final): substituir por foto de banco público
Buscar no Unsplash/Wikimedia uma foto real de LASIK com blefarostato e licença permissiva, baixar e salvar como `src/assets/specialty-refrativa.jpg`. Só recorrer a isso se A e B falharem, pois fotos reais com licença adequada para esse procedimento são raras.

## Pergunta
Quer que eu siga direto pela **Opção A (regerar)**, ou prefere a **Opção B (apagar os instrumentos da imagem atual)**?

## Fora de escopo
- Mexer em outras imagens, textos ou componentes.
- Mudar a imagem da catarata (que ficou correta).
