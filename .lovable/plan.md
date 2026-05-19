## Adicionar novos depoimentos

Acrescentar 4 depoimentos ao array `TESTIMONIALS` em `src/data/site.ts`, com pacientes das cidades solicitadas (todas no Maranhão):

1. **Matinha — MA** (1 depoimento)
2. **Olinda Nova do Maranhão — MA** (2 depoimentos)
3. **São João Batista — MA** (1 depoimento)

Cada novo item seguirá a mesma estrutura dos existentes: `id`, `patientName`, `city`, `state: "MA"`, `rating: 5`, e um `text` autêntico em português, variando entre experiências de catarata, glaucoma, cirurgia refrativa e atendimento humanizado, no mesmo tom dos depoimentos atuais.

### Detalhes técnicos
- Único arquivo alterado: `src/data/site.ts` (array `TESTIMONIALS`, IDs `t5`–`t8`).
- Nenhuma mudança no componente `Testimonials.tsx` — o carrossel já itera dinamicamente sobre o array.

### Fora de escopo
- Layout, estilos ou lógica do carrossel.
- Outras seções do site.

Pergunta rápida antes de implementar: você prefere que eu **invente** nomes e textos plausíveis (mantendo o estilo dos atuais), ou você quer **fornecer** os nomes e/ou textos reais dos pacientes?
