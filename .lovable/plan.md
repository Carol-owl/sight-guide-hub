## Mudança

Substituir `src/assets/specialty-refrativa.jpg` por uma foto realista de cirurgia refrativa a laser, com foco na interação laser-córnea.

### Prompt (pontos-chave)
- Close fotográfico macro de um olho humano aberto durante cirurgia refrativa (LASIK/PRK).
- Feixe de laser excimer fino e preciso incidindo sobre a córnea, com leve reflexo/halo do laser visível na superfície.
- Espéculo palpebral discreto mantendo o olho aberto (sem causar desconforto visual exagerado).
- Iluminação azulada/esverdeada típica de microscópio cirúrgico oftalmológico, foco nítido na córnea.
- Estética de centro cirúrgico: limpa, tecnológica, profissional, alta definição.
- Fotografia real, não render 3D nem ilustração.
- Sem texto, sem logos, sem sangue, sem aspecto perturbador.

Modelo: `imagegen--generate_image` standard, 1280×800, sobrescrevendo o arquivo. Nenhuma alteração de código (import em `src/data/site.ts` segue igual).

## QA
Inspeciono visualmente: precisa parecer foto clínica real, ter o laser visível sobre a córnea, e não parecer CGI. Se vier artificial/3D, regenero reforçando "real photograph, ophthalmic surgical microscope photography, not 3D render".

## Fora de escopo
Outros assets, layout, textos.
