import { Instagram, Youtube, Linkedin, MessageCircle, ExternalLink } from "lucide-react";
import { ASSETS, CONTACT, DOCTOR, NAV_LINKS, waLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 text-primary-foreground">
              <img src={ASSETS.logoIbv} alt="Instituto Bela Vista" className="h-10 w-auto" />
            </div>
            <img src={ASSETS.logoDaniel} alt="Dr. Daniel Campos" className="mt-4 h-10 w-auto text-primary-foreground" />
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
                  href="#"
                  className="inline-flex min-h-[44px] items-center gap-2 text-primary-foreground/90 hover:text-accent"
                >
                  <Youtube className="h-4 w-4" aria-hidden /> YouTube
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex min-h-[44px] items-center gap-2 text-primary-foreground/90 hover:text-accent"
                >
                  <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
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
              className="mt-5 inline-flex min-h-[56px] items-center gap-2 rounded-full bg-accent px-6 font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
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
