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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <div className="flex items-center gap-3 text-primary">
          <a
            href={CONTACT.institutoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instituto Bela Vista — site externo"
            className="flex items-center"
          >
            <img src={ASSETS.logoIbv} alt="Instituto Bela Vista" className="h-10 w-auto" width={120} height={36} />
          </a>
          <span aria-hidden className="hidden h-8 w-px bg-border md:block" />
          <a href="#top" className="hidden items-center md:flex" aria-label="Dr. Daniel Campos — início">
            <img src={ASSETS.logoDaniel} alt="Dr. Daniel Campos — Oftalmologia" className="h-9 w-auto" width={160} height={36} />
          </a>
        </div>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-primary">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-secondary">
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
            className="hidden min-h-[44px] items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-elevated)] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Agende sua Consulta
          </a>
          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-primary lg:hidden"
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
              className="mt-2 flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-accent px-5 font-semibold text-accent-foreground"
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
