import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { EducationTimeline } from "@/components/sections/EducationTimeline";
import { Specialties } from "@/components/sections/Specialties";
import { Procedures } from "@/components/sections/Procedures";
import { Testimonials } from "@/components/sections/Testimonials";
import { Media } from "@/components/sections/Media";
import { Location } from "@/components/sections/Location";

const title = "Dr. Daniel Costa Campos — Oftalmologista em São Luís | Instituto Bela Vista";
const description =
  "Oftalmologista especialista em catarata, cirurgia refrativa, glaucoma e neuro-oftalmologia. Atendimento humanizado e tecnologia de ponta no Instituto Bela Vista (São Luís — MA).";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Dr. Daniel Costa Campos",
          medicalSpecialty: ["Ophthalmology", "Glaucoma", "Cataract Surgery", "Refractive Surgery", "Neuro-ophthalmology"],
          worksFor: {
            "@type": "MedicalOrganization",
            name: "Instituto Bela Vista de Oftalmologia",
            url: "https://institutobelavista.com/",
          },
          areaServed: "São Luís, MA, Brasil",
          telephone: "+55-98-3301-5060",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <EducationTimeline />
      <Specialties />
      <Procedures />
      <Testimonials />
      <Media />
      <Location />
    </>
  );
}

// Mount the chrome (header, footer, floating CTAs) once for this single-page site.
// Using a tiny wrapper component keeps __root.tsx untouched for SSR shell duties.
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
