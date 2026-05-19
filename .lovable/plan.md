## Objetivo
Adicionar uma nova seção "Contato" na home (entre Localização e o rodapé) com um formulário profissional que, ao enviar, abre o cliente de e-mail do usuário (`mailto:`) já preenchido com os dados — direcionado a `contato@drdanielcamposoftalmo.com`.

## Arquivos
- **Criar** `src/components/sections/Contact.tsx` — seção + formulário (React Hook Form + Zod).
- **Editar** `src/routes/index.tsx` — importar e renderizar `<Contact />` após `<Location />`.
- **Editar** `src/data/site.ts` — adicionar `contactEmail: "contato@drdanielcamposoftalmo.com"` em `CONTACT` e link `{ href: "#contato", label: "Contato" }` em `NAV_LINKS`.

## Campos e validação (Zod)
- **Nome completo**: obrigatório, 2–100 caracteres, trim.
- **E-mail**: obrigatório, formato válido, ≤255.
- **Assunto**: obrigatório, 3–150.
- **Mensagem**: obrigatória, 10–1000, `<Textarea>` com 6 linhas.
- Mensagens de erro em PT-BR exibidas via `FormMessage`.

## Comportamento de envio (mailto)
No `onSubmit`:
1. Monta `subject = "[Site] " + assunto` e `body` com nome, e-mail e mensagem (multi-linha).
2. `window.location.href = \`mailto:contato@drdanielcamposoftalmo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}\``.
3. Exibe toast (sonner) "Abrindo seu app de e-mail…" e reseta o form.
4. Mostra um aviso discreto abaixo do botão: "Se nada acontecer, escreva para [contato@drdanielcamposoftalmo.com](mailto:…)" como fallback.

## Design (consistente com o restante do site)
- Mesma estrutura visual das outras seções (`<section id="contato" className="py-20 …">`, container, `<SectionHeader>` se já existir, senão `<h2>` com classes do tema).
- Layout 2 colunas em `md+`: à esquerda card com info (e-mail clicável `mailto:`, telefone, horário reaproveitando dados de `LOCATIONS[0]`); à direita o formulário em `<Card>` com `bg-card`.
- Inputs/Textarea do shadcn já existentes; botão de envio usa a classe `glass-cta-dark` (mesmo padrão dos demais CTAs solicitados).
- Tokens semânticos (`text-foreground`, `bg-muted`, `border-border`) — nada de cores hardcoded.
- Responsivo: 1 coluna no mobile, 2 colunas a partir de `md`; padding, gaps e tipografia espelhando `Location.tsx`.
- Acessibilidade: `<Label htmlFor>` em todos os campos, `aria-invalid` automático via FormControl, foco visível.

## SEO / semântica
- `<section>` com `id="contato"` e `aria-labelledby`. `<h2>` único da seção.
- Link do header "Contato" aponta para `#contato` (já há scroll suave configurado).

## Fora de escopo
- Backend, banco de dados, envio real de e-mail, captcha, integração com provedor — usuário escolheu "Apenas mailto:".