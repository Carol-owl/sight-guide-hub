## Diagnóstico da hierarquia atual

A página hoje trata Dr. Daniel e Instituto Bela Vista (IBV) com peso quase equivalente — em alguns pontos o IBV até se sobrepõe ao médico. Isso dilui a autoridade pessoal, que é o ativo de conversão de uma landing page de personal branding médico.

### Pontos onde o IBV ofusca o Dr. Daniel

1. **Header (acima da dobra)**
   - O logo do IBV aparece **primeiro** (à esquerda), em tamanho maior (`h-12`) que o logo do Dr. Daniel (`h-10`).
   - O logo do médico fica oculto no mobile (`hidden md:flex`), enquanto o do IBV aparece sempre.
   - Resultado: no primeiro contato visual, a marca institucional lidera.

2. **Hero**
   - O badge superior diz "Instituto Bela Vista" em destaque, antes mesmo do H1.
   - O H1 é genérico ("Sua visão merece o melhor cuidado") e **não contém o nome do médico**. O nome só aparece no parágrafo de apoio, em peso normal.
   - O selo CBO está presente, mas o nome do médico não tem proeminência tipográfica equivalente.

3. **Footer**
   - O logo do IBV vem **primeiro e acima** do logo do Dr. Daniel, ambos no mesmo container visual — sugere subordinação do médico ao instituto.

4. **SEO/Metadados**
   - Title e Schema.org já priorizam o Dr. Daniel — esta parte está correta e deve ser preservada.

### Veredito
O posicionamento atual **não está adequado para uma landing page de conversão pessoal**. A leitura visual sugere "site do Instituto onde o Dr. Daniel atende", quando deveria ser "site do Dr. Daniel, que é sócio do Instituto Bela Vista".

---

## Estratégia de reposicionamento

**Princípio**: Dr. Daniel = marca principal (rosto, autoridade, conversão). IBV = endosso institucional (confiança, infraestrutura, vínculo profissional). O IBV nunca desaparece, mas passa a ser **selo de credibilidade**, não co-protagonista.

### Mudanças propostas

**1. Header**
- Inverter ordem: logo do **Dr. Daniel à esquerda em destaque** (`h-12` ou maior), com link para `#top`.
- Logo do IBV à direita do nome, menor (`h-8`), com microcopy "no Instituto Bela Vista" — funciona como assinatura institucional.
- Mostrar o logo do Dr. Daniel também no mobile (remover `hidden md:flex`); ocultar o do IBV no mobile se necessário por espaço.

**2. Hero**
- Substituir o badge "Instituto Bela Vista" por um eyebrow com o nome e credenciais do médico: ex. "Dr. Daniel Costa Campos · CRM-MA 6135 · RQE 2746".
- Reescrever o H1 para incluir/posicionar o médico:
  - Opção A: "Dr. Daniel Campos — oftalmologia de precisão em São Luís."
  - Opção B: "Sua visão nas mãos do Dr. Daniel Campos."
- Mover "Instituto Bela Vista" para a faixa de credenciais como vínculo: "Sócio-proprietário do Instituto Bela Vista de Oftalmologia".
- Manter foto do médico ocupando 40% acima da dobra (já está bom).

**3. Footer**
- Inverter ordem dos logos: **Dr. Daniel acima e maior**, IBV abaixo e menor, com label "Atende no:".
- Copyright já está correto (cita o médico).

**4. Seção "Sobre"**
- Está adequada — o eyebrow "Sobre o Dr. Daniel" já dá o tom certo. Apenas reforçar no fim do primeiro parágrafo o vínculo com o IBV como dado institucional.

**5. Não alterar**
- Metadados, Schema.org Physician, conteúdo das especialidades, depoimentos.

---

## Critérios objetivos de validação

Após implementação, a hierarquia está correta se:

| Critério | Meta |
|---|---|
| Primeiro elemento de marca visto no header | Logo/nome do Dr. Daniel |
| Tamanho do logo do médico vs. IBV no header | ≥ 1.5× maior |
| H1 da página | Contém "Dr. Daniel Campos" |
| Nome do médico acima da dobra | Aparece em ≥ 2 lugares (eyebrow + H1/foto card) |
| Ordem no footer | Dr. Daniel antes do IBV |
| Teste de 5 segundos (cobrir tudo menos hero) | Usuário identifica "site do Dr. Daniel" |
| Menção ao IBV | Sempre como vínculo ("no Instituto Bela Vista", "sócio do…"), nunca como protagonista |
| Foto principal acima da dobra | Retrato do médico (já correto) |
| Mobile | Nome/logo do médico visível sem scroll (corrigir o `hidden md:flex` atual) |

---

## Arquivos a editar (na fase de build)

- `src/components/Header.tsx` — inverter ordem e tamanhos dos logos, ajustar visibilidade mobile.
- `src/components/sections/Hero.tsx` — novo eyebrow, novo H1, reposicionar menção ao IBV.
- `src/components/Footer.tsx` — inverter ordem dos blocos de logo, adicionar label "Atende no:".

Sem alterações em dados (`site.ts`), metadados (`index.tsx`) ou outras seções.

---

## Próximo passo

Confirme se deseja:
1. **Aplicar todas as mudanças** propostas acima, ou
2. **Selecionar quais** (ex: só Header + Hero), ou
3. **Ver opções visuais** (design directions) do novo Hero antes de implementar.
