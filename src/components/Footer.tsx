import { Instagram, MessageCircle, ExternalLink } from "lucide-react";
import { ASSETS, CONTACT, DOCTOR, NAV_LINKS, waLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div
              className="relative flex h-32 w-64 items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.25)] ring-1 ring-inset ring-white/10 md:h-36 md:w-72"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(120%_120%_at_50%_0%,color-mix(in_oklab,var(--color-accent)_22%,transparent),transparent_60%)]"
              />
              <img
                src={ASSETS.logoDanielWhite}
                alt="Dr. Daniel Campos"
                loading="eager"
                decoding="sync"
                className="relative max-h-full max-w-full w-auto object-contain drop-shadow-[0_0_22px_color-mix(in_oklab,var(--color-gold)_70%,transparent)]"
              />
            </div>

            <p className="mt-4 text-xs font-medium uppercase tracking-widest text-primary-foreground/60">
              Atende no:
            </p>
            <div
              className="relative mt-2 flex h-20 w-44 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.25)]"
            >
              <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-white px-2 py-1 shadow-inner">
                <img
                  src={ASSETS.logoIbv}
                  alt="Instituto Bela Vista Oftalmologia"
                  loading="eager"
                  decoding="sync"
                  className="max-h-full max-w-full w-auto object-contain"
                />
              </div>
            </div>

            <p className="mt-4 text-sm text-primary-foreground/80">
              {DOCTOR.crm} • {DOCTOR.rqe}
              <br />
              {DOCTOR.medicalBoard}
            </p>
          </div>


          <nav aria-label="Links rápidos">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-primary-foreground/90 transition-colors hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
              Conecte-se
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 text-primary-foreground/90 hover:text-accent"
                >
                  <Instagram className="h-4 w-4" aria-hidden /> Instagram
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.institutoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 text-primary-foreground/90 hover:text-accent"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden /> institutobelavista.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
              Agendamento
            </h3>
            <p className="mt-4 text-sm text-primary-foreground/85">
              Atendimento particular e por convênio. Resposta rápida via WhatsApp.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-cta-accent mt-5 inline-flex min-h-[56px] items-center gap-2 rounded-full px-6 font-semibold"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/65">
          <p>
            © {new Date().getFullYear()} {DOCTOR.name}. Este site tem caráter informativo e não substitui a consulta médica.
          </p>
        </div>
      </div>
    </footer>
  );
}
