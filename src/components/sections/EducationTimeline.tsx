import { GraduationCap } from "lucide-react";
import { EDUCATION, DOCTOR } from "@/data/site";

export function EducationTimeline() {
  return (
    <section id="formacao" className="bg-[color:var(--color-surface)] py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Formação</p>
          <h2 className="mt-3">Uma trajetória dedicada à oftalmologia.</h2>
          <p className="mt-4 text-muted-foreground">
            Da graduação ao mestrado, mais de uma década de formação contínua em medicina dos olhos.
          </p>
        </div>

        <ol className="relative mx-auto mt-14 max-w-3xl">
          <span aria-hidden className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-ml-px" />
          {EDUCATION.map((item, idx) => {
            const isRight = idx % 2 === 1;
            return (
              <li
                key={item.id}
                className={`relative mb-8 grid grid-cols-[2.5rem_1fr] gap-4 md:grid-cols-2 md:gap-12 ${
                  isRight ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <span
                  aria-hidden
                  className="absolute left-2.5 top-3 z-10 h-3 w-3 rounded-full bg-accent ring-4 ring-[color:var(--color-surface)] md:left-1/2 md:-ml-1.5"
                />
                <div className={`md:${isRight ? "pl-12" : "pr-12 text-right"} col-start-2 md:col-start-auto`}>
                  <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-gold)]">
                      {item.year}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-primary">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                  </div>
                </div>
                <div aria-hidden className="hidden md:block" />
              </li>
            );
          })}
        </ol>

        <div className="mx-auto mt-10 flex max-w-xl items-center gap-4 rounded-2xl border border-[color:var(--color-gold)]/40 bg-[color:var(--color-gold)]/10 p-5">
          <GraduationCap className="h-8 w-8 flex-none text-[color:var(--color-gold)]" aria-hidden />
          <p className="text-sm">
            <span className="font-semibold text-primary">{DOCTOR.crm} • {DOCTOR.rqe}</span>
            <br />
            <span className="text-muted-foreground">{DOCTOR.medicalBoard}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
