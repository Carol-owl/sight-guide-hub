import { GALLERY } from "@/data/site";

export function Media() {
  return (
    <section id="midia" className="bg-[color:var(--color-surface)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Bastidores</p>
          <h2 className="mt-3">Por dentro do <span className="text-accent-script">consultório</span>.</h2>
          <p className="mt-4 text-muted-foreground">
            Conheça o ambiente, a equipe e a rotina cirúrgica do Dr. Daniel no Instituto Bela Vista.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY.map((img, i) => (
            <figure
              key={img.id}
              className={`overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className={`h-full w-full object-cover transition-transform duration-500 hover:scale-105 ${
                  i === 0 ? "aspect-[4/5] sm:aspect-square" : "aspect-[4/5]"
                }`}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
