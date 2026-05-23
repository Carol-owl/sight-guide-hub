import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

import { Specialties } from "@/components/sections/Specialties";
import { Procedures } from "@/components/sections/Procedures";
import { Testimonials } from "@/components/sections/Testimonials";
import { Media } from "@/components/sections/Media";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import danielHero from "@/assets/daniel-hero.jpg";

const SITE_URL = "https://sight-guide-hub.lovable.app";
const OG_IMAGE = `${SITE_URL}${danielHero}`;

const title =
  "Dr. Daniel Campos | Oftalmologista em São Luís — Catarata, Glaucoma e Refrativa";
const ogTitle =
  "Dr. Daniel Campos — Oftalmologista em São Luís (MA)";
const description =
  "Dr. Daniel Campos (CRM-MA 6135 · RQE 2746): oftalmologista em São Luís especialista em cirurgia de catarata, refrativa a laser, glaucoma e neuro-oftalmologia. Agende sua consulta.";

const physician = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${SITE_URL}/#physician`,
  name: "Dr. Daniel Costa Campos",
  alternateName: "Dr. Daniel Campos",
  honorificPrefix: "Dr.",
  jobTitle: "Médico Oftalmologista",
  image: OG_IMAGE,
  url: SITE_URL,
  telephone: "+55-98-3301-5060",
  priceRange: "$$",
  identifier: [
    { "@type": "PropertyValue", propertyID: "CRM-MA", value: "6135" },
    { "@type": "PropertyValue", propertyID: "RQE", value: "2746" },
  ],
  medicalSpecialty: [
    "Ophthalmologic",
    "Ophthalmology",
    "Glaucoma",
    "Cataract Surgery",
    "Refractive Surgery",
    "Neuro-ophthalmology",
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "Cirurgia de Catarata (Facoemulsificação)" },
    { "@type": "MedicalProcedure", name: "Cirurgia Refrativa a Laser (LASIK / PRK)" },
    { "@type": "MedicalProcedure", name: "Tratamento de Glaucoma" },
    { "@type": "MedicalProcedure", name: "Neuro-oftalmologia" },
    { "@type": "MedicalProcedure", name: "Implante de Lente Intraocular Premium" },
    { "@type": "MedicalProcedure", name: "Cirurgia de Pterígio" },
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universidade Federal do Maranhão (UFMA)" },
    { "@type": "CollegeOrUniversity", name: "Universidade Federal de São Paulo (Unifesp)" },
  ],
  memberOf: { "@type": "Organization", name: "Conselho Brasileiro de Oftalmologia (CBO)" },
  worksFor: { "@id": `${SITE_URL}/#clinic` },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Auxiliar 2, Nº 31, Cohajap",
    addressLocality: "São Luís",
    addressRegion: "MA",
    postalCode: "65072-790",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "São Luís" },
    { "@type": "City", name: "São José de Ribamar" },
    { "@type": "City", name: "Paço do Lumiar" },
    { "@type": "State", name: "Maranhão" },
  ],
};

const clinic = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "MedicalBusiness"],
  "@id": `${SITE_URL}/#clinic`,
  name: "Instituto Bela Vista de Oftalmologia",
  url: "https://institutobelavista.com/",
  telephone: "+55-98-3301-5060",
  image: OG_IMAGE,
  priceRange: "$$",
  medicalSpecialty: ["Ophthalmologic", "Ophthalmology"],
  physician: { "@id": `${SITE_URL}/#physician` },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Auxiliar 2, Nº 31, Cohajap",
    addressLocality: "São Luís",
    addressRegion: "MA",
    postalCode: "65072-790",
    addressCountry: "BR",
  },
  geo: { "@type": "GeoCoordinates", latitude: -2.5297, longitude: -44.3028 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  sameAs: ["https://www.instagram.com/ibv.institutobelavista/"],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Dr. Daniel Campos — Oftalmologista",
  inLanguage: "pt-BR",
  publisher: { "@id": `${SITE_URL}/#physician` },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
  ],
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quem é o Dr. Daniel Campos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Daniel Costa Campos (CRM-MA 6135 · RQE 2746) é médico oftalmologista formado pela UFMA, pós-graduado em Glaucoma pela Unifesp, preceptor da residência médica em Oftalmologia do HU-UFMA e sócio-proprietário do Instituto Bela Vista de Oftalmologia, em São Luís — MA.",
      },
    },
    {
      "@type": "Question",
      name: "Quais cirurgias e tratamentos o Dr. Daniel realiza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cirurgia de catarata com facoemulsificação e lentes premium, cirurgia refrativa a laser (LASIK/PRK), tratamento clínico e cirúrgico de glaucoma, neuro-oftalmologia e cirurgia de pterígio.",
      },
    },
    {
      "@type": "Question",
      name: "Onde o Dr. Daniel Campos atende em São Luís?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No Instituto Bela Vista de Oftalmologia — Rua Auxiliar 2, Nº 31, Cohajap, São Luís — MA, 65072-790. Telefone: (98) 3301-5060.",
      },
    },
    {
      "@type": "Question",
      name: "Como agendar uma consulta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Agende pelo WhatsApp (98) 3301-5060 ou pelo telefone da clínica. Atendimento de segunda a sexta, das 8h às 18h, e aos sábados das 8h às 12h.",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "oftalmologista São Luís, oftalmologista Maranhão, Dr. Daniel Campos, cirurgia de catarata São Luís, cirurgia refrativa São Luís, glaucoma São Luís, neuro-oftalmologia, LASIK Maranhão, Instituto Bela Vista",
      },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Dr. Daniel Campos, oftalmologista em São Luís — MA" },
      { name: "twitter:title", content: ogTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(physician) },
      { type: "application/ld+json", children: JSON.stringify(clinic) },
      { type: "application/ld+json", children: JSON.stringify(website) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
      { type: "application/ld+json", children: JSON.stringify(faq) },
    ],
  }),
});

function Index() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        
        <Specialties />
        <Procedures />
        <Testimonials />
        <Media />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
