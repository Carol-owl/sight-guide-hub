**Objetivo:** Simplificar o cabeçalho para destacar exclusivamente a marca pessoal do Dr. Daniel Campos.

**Mudança no arquivo `src/components/Header.tsx`:**
1. Remover o bloco inteiro do Instituto Bela Vista — incluindo o divisor vertical, o texto "no" e a imagem/logo do IBV.
2. Manter apenas o logo do Dr. Daniel Campos.
3. Aumentar a visibilidade do logo do Dr. Daniel Campos: elevar de `h-14` para `h-16` (ou maior, se o espaço permitir) e garantir que o `drop-shadow` permaneça no hero para contraste contra o fundo escuro.
4. Remover o link externo que apontava para `CONTACT.institutoUrl` nessa seção.

**Resultado esperado:**
O cabeçalho exibirá unicamente o logo do Dr. Daniel Campos, maior e mais proeminente, sem distração da marca institucional. O IBV continuará sendo mencionado como local de atendimento no corpo da página (hero e footer).