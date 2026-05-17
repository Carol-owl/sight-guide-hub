
# Landing Page — Dr. Daniel Costa Campos

Site institucional one-page, estático, mobile-first, com foco em acessibilidade (público 40+, baixa visão) e conversão via WhatsApp.

## Stack

- TanStack Start (já configurado) + React + TypeScript
- Tailwind CSS v4 com tokens semânticos em `src/styles.css`
- Lucide React para ícones
- Fontes Google: DM Sans (headings) + Inter (corpo), `display=swap`
- Dados em `src/data/*.ts` tipados (sem backend)
- Imagens otimizadas em `src/assets/` (fotos enviadas + arte gerada)

## Design system (tokens em `styles.css`)

Paleta mapeada para tokens semânticos em oklch:
- `--primary` azul-marinho `#0A2A4A`
- `--secondary` azul-petróleo `#1A6B8A`
- `--accent` verde-água `#2EC4B6` (CTA principal)
- `--background` off-white `#F8F9FA` / `--muted` `#E9ECEF`
- `--foreground` `#1A1A2E`
- `--gold` dourado `#C9A84C` (selos/detalhes premium)
- `--whatsapp` `#25D366` (apenas botão flutuante)
- Modo escuro via `prefers-color-scheme` para fotofobia

Tipografia responsiva com `clamp()`, base 18px desktop / 16px mobile, line-height 1.6, alvo de toque 56px, foco visível, contraste ≥ 4.5:1.

## Estrutura de arquivos

```text
src/
  routes/
    __root.tsx                 (header fixo, footer, botão WhatsApp + topo, <main>)
    index.tsx                  (composição das seções)
  components/
    Header.tsx                 (logos duplos, nav âncora, hamburger mobile, scroll-bg)
    Footer.tsx
    FloatingWhatsApp.tsx       (pulse 3s, respeita reduced-motion)
    BackToTop.tsx              (aparece após 500px)
    sections/
      Hero.tsx
      About.tsx
      EducationTimeline.tsx
      Specialties.tsx          (cards expansíveis — accordion)
      Procedures.tsx
      Testimonials.tsx         (scroll-snap drag)
      Media.tsx                (vídeos + galeria lazy)
      Location.tsx             (Maps embed lazy via IntersectionObserver)
    ui/                        (shadcn existente reaproveitado)
  data/
    doctor.ts  education.ts  specialties.ts  procedures.ts
    testimonials.ts  locations.ts  media.ts
  lib/
    whatsapp.ts                (builder do link wa.me)
    useInView.ts               (IntersectionObserver para lazy sections)
  assets/
    daniel-hero.jpg  daniel-bw.jpg  daniel-sitting.jpg
    daniel-surgery-1.jpg  daniel-surgery-2.jpg
    logo-ibv.svg               (extraída do BrandBook PDF)
    logo-daniel.svg            (gerada — placeholder substituível depois)
```

## Conteúdo pré-preenchido

- **Doutor**: nome, CRM/RQE (placeholders a confirmar), bio com formação real fornecida (UFMA 2010, residência HU-UFMA 2015, CBO 2015, pós Glaucoma Unifesp 2016, mestrado UFMA 2024, preceptor HU-UFMA, sócio IBV).
- **Especialidades**: Glaucoma, Catarata, Neuro-oftalmologia, Cirurgia Refrativa (4 áreas conforme observação 2 — não as 6 originais).
- **Procedimentos**: derivados das 4 áreas (facectomia, trabeculectomia, LASIK/PRK, etc.).
- **Localização**: Instituto Bela Vista com o embed Google Maps fornecido.
- **WhatsApp**: `https://wa.me/559833015060?text=...`
- **Links externos**: institutobelavista.com, instagram.com/ibv.institutobelavista (target=_blank rel=noopener).
- **Depoimentos / vídeos**: 3–4 placeholders realistas marcados para substituição.

## Assets visuais

- 4 fotos do Daniel enviadas → copiadas para `src/assets/` e usadas em Hero, Sobre, e galeria de mídia (cirurgia).
- Logomarca IBV: extrair do `BrandBook_IBV_1.pdf` (parse → exportar PNG/SVG).
- Logo pessoal "Dr. Daniel Campos": gerar marca minimalista (monograma DCC em azul-marinho + dourado, estilo médico premium) como placeholder substituível.
- Imagens decorativas das specialties: geradas (olho/equipamento/consultório, estilo limpo).

## SEO & acessibilidade

- `head()` no route index: title, description, og:*, JSON-LD `MedicalWebPage` + `Physician`.
- `<main>` único no `__root.tsx`, h1 único no Hero, h2 por seção.
- `alt` descritivo, `aria-label` nos botões-ícone, `prefers-reduced-motion` respeitado, scroll-behavior smooth.
- Imagens com `loading="lazy"`, dimensões explícitas, WebP onde possível.

## Comportamentos

- Header transparente no topo → branco com sombra ao rolar (>40px).
- Hamburger mobile com slide-in.
- Cards de especialidade: hover elevação + clique expande (accordion).
- Carrossel depoimentos: `scroll-snap-type: x mandatory`, drag nativo, setas.
- WhatsApp flutuante com pulse a cada 3s (desativado em reduced-motion).
- Maps e seções pesadas só montam quando entram no viewport.

## Pontos a confirmar antes de implementar

1. **CRM e RQE** do Dr. Daniel — não foram fornecidos; usar placeholders `CRM-MA XXXX / RQE XXXX`?
2. **Depoimentos reais** disponíveis ou usar 4 placeholders marcados como exemplo?
3. **Vídeos do YouTube** — há URLs ou deixo grid vazio com placeholder "em breve"?
4. **Logo pessoal**: gero uma versão monograma "DCC" agora como placeholder, ok?

Posso seguir com placeholders nesses 4 pontos se preferir — basta aprovar.
