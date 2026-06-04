import { ArrowRight } from "lucide-react";
import { PROCEDURES, waLink } from "@/data/site";
import iconEyecare from "@/assets/icon-eyecare.png";

export function Procedures() {
  return (
    <section id="procedimentos" className="bg-[color:var(--color-surface)] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Procedimentos</p>
          <h2 className="mt-3">Cirurgias e tratamentos realizados.</h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
          <ul className="divide-y divide-border">
            {PROCEDURES.map((p) => (
              <li key={p.id} className="grid items-start gap-4 p-5 md:grid-cols-[auto_1fr_2fr] md:gap-8 md:p-7">
                <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent/15 p-2">
                  <img src={iconEyecare} alt="" aria-hidden className="h-full w-full object-contain drop-shadow-[0_0_6px_color-mix(in_oklab,var(--color-accent)_45%,transparent)]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-primary">{p.technicalName}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-[color:var(--color-gold)]">
                    {p.popularName}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <a
            href={waLink("Olá, Dr. Daniel! Gostaria de saber mais sobre os procedimentos.")}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-cta-dark inline-flex min-h-[56px] items-center gap-2 rounded-full px-7 font-semibold"
          >
            Tire suas dúvidas no WhatsApp
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
