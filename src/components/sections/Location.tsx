import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { LOCATIONS, waLink } from "@/data/site";

export function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const loc = LOCATIONS[0];

  return (
    <section id="localizacao" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Onde encontrar o Dr. Daniel</p>
          <h2 className="mt-3">Onde encontrar o Dr. Daniel.</h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div ref={ref} className="overflow-hidden rounded-3xl border border-border bg-muted shadow-[var(--shadow-soft)]">
            {inView ? (
              <iframe
                src={loc.mapEmbed}
                title={`Mapa — ${loc.name}`}
                className="h-[420px] w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-[420px] items-center justify-center text-muted-foreground">
                Carregando mapa…
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
            <h3 className="text-xl font-semibold text-primary">{loc.name}</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-none text-accent" aria-hidden />
                <span className="text-muted-foreground">{loc.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-none text-accent" aria-hidden />
                <a
                  href={`tel:+${loc.phone.replace(/\D/g, "")}`}
                  className="font-medium text-primary hover:text-secondary"
                >
                  {loc.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-none text-accent" aria-hidden />
                <span className="text-muted-foreground">{loc.hours}</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:+${loc.phone.replace(/\D/g, "")}`}
                className="glass-cta-dark inline-flex min-h-[56px] flex-1 items-center justify-center gap-2 rounded-full px-5 font-semibold"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Ligar agora
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-cta-accent inline-flex min-h-[56px] flex-1 items-center justify-center gap-2 rounded-full px-5 font-semibold"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
