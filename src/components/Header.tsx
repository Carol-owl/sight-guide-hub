import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { ASSETS, CONTACT, NAV_LINKS, waLink } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <div className={`flex items-center gap-3 ${onHero ? "text-primary-foreground" : "text-primary"}`}>
          <a href="#top" className="flex items-center" aria-label="Dr. Daniel Campos — início">
            <img
              src={onHero ? ASSETS.logoDanielWhite : ASSETS.logoDanielColor}
              alt="Dr. Daniel Campos — Oftalmologia"
              className={`h-14 w-auto transition-[filter] duration-300 ${onHero ? "drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]" : ""}`}
              width={220}
              height={56}
            />
          </a>
          <span aria-hidden className={`hidden h-8 w-px md:block ${onHero ? "bg-primary-foreground/30" : "bg-border"}`} />
          <a
            href={CONTACT.institutoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instituto Bela Vista — site externo"
            className="hidden items-center gap-2 md:flex"
          >
            <span className={`text-[10px] font-medium uppercase tracking-widest ${onHero ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              no
            </span>
            <img
              src={onHero ? ASSETS.logoIbvWhite : ASSETS.logoIbv}
              alt="Instituto Bela Vista Oftalmologia"
              className={`h-8 w-auto opacity-90 transition-[filter] duration-300 ${onHero ? "drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]" : ""}`}
              width={110}
              height={36}
            />
          </a>
        </div>


        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className={`flex items-center gap-7 text-sm font-medium ${onHero ? "text-primary-foreground" : "text-primary"}`}>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`transition-colors ${onHero ? "hover:text-accent" : "hover:text-secondary"}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`glass-cta hidden min-h-[44px] items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold sm:inline-flex ${onHero ? "text-primary-foreground" : "text-primary"}`}
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Agende sua Consulta
          </a>
          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className={`glass-icon inline-flex h-12 w-12 items-center justify-center rounded-full lg:hidden ${onHero ? "text-primary-foreground" : "text-primary"}`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden ${open ? "max-h-[80vh]" : "max-h-0"} overflow-hidden bg-background/98 backdrop-blur transition-[max-height] duration-300`}
      >
        <ul className="flex flex-col gap-1 border-t border-border px-4 py-4 text-base">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[56px] items-center rounded-lg px-3 text-primary hover:bg-muted"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="glass-cta mt-2 flex min-h-[56px] items-center justify-center gap-2 rounded-full px-5 font-semibold text-primary"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Agende sua Consulta
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
