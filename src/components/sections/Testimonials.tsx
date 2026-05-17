import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section id="depoimentos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Depoimentos</p>
            <h2 className="mt-3">A confiança de quem voltou a enxergar bem.</h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Depoimento anterior"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-muted"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Próximo depoimento"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-muted"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="snap-x-carousel mt-10 flex gap-5 overflow-x-auto pb-5"
          style={{ scrollbarWidth: "thin" }}
        >
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="flex w-[85%] flex-none flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:w-[60%] lg:w-[32%]"
            >
              <div className="flex items-center gap-1 text-[color:var(--color-gold)]" aria-label={`${t.rating} de 5 estrelas`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-semibold text-primary">{t.patientName}</p>
                <p className="text-xs text-muted-foreground">
                  {t.city} — {t.state}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
