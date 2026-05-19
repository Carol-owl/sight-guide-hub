## Mudanças

Substituir a foto atual de Catarata em **Áreas de atuação** por uma imagem realista de um olho humano com catarata visível (cristalino opacificado, pupila esbranquiçada/acinzentada).

### Como vou gerar
- Usar `imagegen--generate_image` (modelo `standard` para fidelidade fotográfica) com prompt focado em close fotográfico de olho humano com catarata madura — opacidade esbranquiçada na pupila, íris e cílios nítidos, iluminação clínica natural.
- Aspect ratio compatível com `aspect-[16/10]` do card: 1280×800.
- Salvar sobrescrevendo `src/assets/specialty-catarata.jpg`.

### Código
Nenhuma mudança de código — o import e o uso em `src/data/site.ts` continuam apontando para o mesmo arquivo.

## Fora de escopo
- Outras especialidades, layout do card, textos.

## Observação
É imagem **ilustrativa gerada por IA**, não foto clínica real de paciente. Se preferir uma foto real (banco de imagens médico) ou enviar uma própria, me avise.
