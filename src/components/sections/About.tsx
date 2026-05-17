import { ArrowRight, Quote } from "lucide-react";
import { DOCTOR, waLink } from "@/data/site";

export function About() {
  return (
    <section id="sobre" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <img
              src={DOCTOR.photoSitting}
              alt={`${DOCTOR.name} sentado, retrato profissional`}
              width={640}
              height={800}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-elevated)]"
            />
            <div className="absolute -bottom-6 -right-4 hidden max-w-xs rounded-2xl bg-card p-5 shadow-[var(--shadow-elevated)] md:block">
              <Quote className="h-6 w-6 text-accent" aria-hidden />
              <p className="mt-2 text-sm italic text-muted-foreground">"{DOCTOR.mission}"</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Sobre o Dr. Daniel</p>
          <h2 className="mt-3">Ciência, técnica e escuta atenta caminham juntas.</h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            {DOCTOR.bioParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-[56px] items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Quero agendar uma avaliação
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
