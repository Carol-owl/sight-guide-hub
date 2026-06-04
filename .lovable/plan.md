## Objetivo
Reverter os **títulos principais** (h2) das seções "Localização" e "Contato" de volta para os textos originais, mantendo os **subtítulos** (p/tag acima do h2) que já foram atualizados para "Onde encontrar o Dr. Daniel" e "Fale com a equipe do Dr. Daniel".

## Alterações necessárias
1. `src/data/site.ts` — Reverter labels no menu de navegação (`NAV_LINKS`) para "Localização" e "Contato".
2. `src/components/sections/Location.tsx` — Reverter o `<h2>` de "Onde encontrar o Dr. Daniel." para "Localização", mantendo o `<p>` subtítulo como "Onde encontrar o Dr. Daniel".
3. `src/components/sections/Contact.tsx` — Reverter o `<h2>` de "Fale com a equipe do Dr. Daniel." para "Contato", mantendo o `<p>` subtítulo como "Fale com a equipe do Dr. Daniel".