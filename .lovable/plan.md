## Ação
Substituir `src/assets/specialty-refrativa.jpg` pela imagem enviada (olho com feixe de laser, fundo escuro, sem instrumentos metálicos), usando-a como o novo visual da seção Cirurgia Refrativa.

## Passos
1. Copiar `user-uploads://imgi_107_laser-eye-surgery-lasik-concept-260nw-2250937349.jpg` para `src/assets/specialty-refrativa.jpg` (overwrite).
2. Nenhuma mudança de código: o import e o card em `Specialties.tsx` já consomem esse caminho.
3. Limpar arquivos de teste na raiz: `b.jpg`, `c.jpg`, `d.jpg` (sobras de tentativas anteriores).

## Fora de escopo
- Editar a imagem (será usada como enviada).
- Outras imagens, textos ou layout.
- Atribuição/crédito (responsabilidade do usuário sobre a licença da imagem enviada).
