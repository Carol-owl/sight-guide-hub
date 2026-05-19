import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SPECIALTIES, type Specialty } from "@/data/site";

function Card({ s }: { s: Specialty }) {
  const [open, setOpen] = useState(false);
  const panelId = `spec-${s.id}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={s.image}
          alt={s.imageAlt}
          width={800}
          height={500}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/95 text-primary-foreground shadow-[var(--shadow-soft)]">
          <Icon className="h-6 w-6" aria-hidden />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-primary">{s.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-5 inline-flex min-h-[48px] items-center justify-between rounded-xl border border-border bg-background px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-accent hover:bg-accent/5"
        >
          <span>{open ? "Menos detalhes" : "Saiba mais"}</span>
          {open ? <Minus className="h-4 w-4" aria-hidden /> : <Plus className="h-4 w-4" aria-hidden />}
        </button>

        <div
          id={panelId}
          role="region"
          hidden={!open}
          className="mt-4 rounded-xl bg-[color:var(--color-surface)] p-4 text-sm text-muted-foreground"
        >
          <p>{s.expanded}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {s.procedures.map((p) => (
              <li
                key={p}
                className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Specialties() {
  return (
    <section id="especialidades" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Áreas de atuação</p>
          <h2 className="mt-3">Cuidado especializado em quatro grandes frentes.</h2>
          <p className="mt-4 text-muted-foreground">
            Cada especialidade combina diagnóstico preciso, tecnologia moderna e conduta personalizada.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPECIALTIES.map((s) => (
            <Card key={s.id} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
