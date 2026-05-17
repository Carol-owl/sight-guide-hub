import { ArrowDown, MessageCircle, ShieldCheck } from "lucide-react";
import { DOCTOR, waLink } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 20%, var(--color-accent) 0%, transparent 60%), radial-gradient(40% 40% at 20% 80%, var(--color-gold) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary-foreground/90">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Instituto Bela Vista
          </div>

          <h1 className="mt-5 text-balance font-display !text-primary-foreground">
            Sua visão merece o melhor cuidado.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
            <strong className="font-semibold text-primary-foreground">{DOCTOR.name}</strong> — oftalmologista
            especializado em catarata, cirurgia refrativa, glaucoma e neuro-oftalmologia. Tecnologia
            de ponta e atendimento humanizado.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[56px] items-center gap-2 rounded-full bg-accent px-7 text-base font-semibold text-accent-foreground shadow-[var(--shadow-elevated)] transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Agende sua Consulta
            </a>
            <a
              href="#especialidades"
              className="inline-flex min-h-[56px] items-center gap-2 rounded-full border border-primary-foreground/30 px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Conheça as áreas <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3">
            <ShieldCheck className="h-5 w-5 text-[color:var(--color-gold)]" aria-hidden />
            <span className="text-sm text-primary-foreground/90">
              <span className="font-semibold">{DOCTOR.crm}</span> · {DOCTOR.rqe} ·{" "}
              <span className="text-primary-foreground/70">{DOCTOR.medicalBoard}</span>
            </span>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem]"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--color-accent) 35%, transparent), color-mix(in oklab, var(--color-gold) 30%, transparent))",
              filter: "blur(40px)",
            }}
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/5 shadow-[var(--shadow-elevated)]">
            <img
              src={DOCTOR.photoHero}
              alt={`Retrato profissional de ${DOCTOR.name}, oftalmologista`}
              width={640}
              height={800}
              className="aspect-[4/5] w-full object-cover object-top"
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-primary-foreground/95 px-4 py-3 text-primary backdrop-blur">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-secondary">Oftalmologista</p>
                <p className="text-base font-semibold">{DOCTOR.name}</p>
              </div>
              <span className="rounded-full bg-[color:var(--color-gold)]/15 px-3 py-1 text-xs font-semibold text-[color:var(--color-gold)]">
                CBO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
