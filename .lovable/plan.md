## Objetivo
Substituir duas ilustrações clinicamente imprecisas na seção "Áreas de atuação" (Specialties): Catarata e Cirurgia Refrativa.

## Problemas atuais
- `src/assets/specialty-catarata.jpg` — mostra uma lente intraocular isolada (não comunica catarata de forma clara) e/ou pode ser confundida com leucoma corneano.
- `src/assets/specialty-refrativa.jpg` — não representa o ato cirúrgico refrativo (sem blefarostato, sem aplicação de laser).

## Geração de novas imagens (imagegen, premium)

### 1. Nova `src/assets/specialty-catarata.jpg`
Prompt clínico: close-up macro fotorrealista de um olho humano com catarata madura — pupila exibindo opacidade esbranquiçada/amarelada **atrás da íris, no cristalino** (não na córnea). Córnea transparente e brilhante preservada, reflexo de luz nítido na superfície corneana para evidenciar que a opacidade está em plano mais profundo. Iluminação tipo lâmpada de fenda, qualidade de atlas oftalmológico. Sem óculos, sem instrumentos. Proporção 16:10.

### 2. Nova `src/assets/specialty-refrativa.jpg`
Prompt clínico: fotografia cirúrgica fotorrealista de procedimento de LASIK em andamento — olho humano mantido aberto por **blefarostato (afastador palpebral) metálico visível**, feixe/spot de **laser excimer** sendo aplicado sobre a córnea (leve halo de luz vermelha de mira + reflexo do laser), campo cirúrgico estéril azul ao redor, foco no olho. Sem óculos, sem armações, sem mãos do cirurgião em primeiro plano. Estética de fotografia médica acadêmica. Proporção 16:10.

Ambas geradas em qualidade `standard` (fidelidade fotográfica importa, mas não há texto), 1600x1024, sobrescrevendo os arquivos atuais para não exigir mudanças em `src/data/site.ts`.

## QA
Após gerar, abrir as duas imagens e validar:
- Catarata: opacidade claramente atrás da íris (no cristalino), córnea limpa.
- Refrativa: blefarostato visível + indicação de laser, sem óculos.
Se algum critério falhar, regenerar com prompt ajustado antes de entregar.

## Fora de escopo
- Alterar textos, `alt`, descrições ou tokens de design.
- Mudar outras imagens de especialidades (Glaucoma, Neuro).
- Mudar layout do componente `Specialties`.
