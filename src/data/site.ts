import logoIbv from "@/assets/logo-ibv.png";
import logoIbvWhite from "@/assets/logo-ibv-white.png";
import logoDaniel from "@/assets/logo-daniel.svg";
import logoDanielColor from "@/assets/logo-daniel-color.png";
import logoDanielWhite from "@/assets/logo-daniel-white.png";
import danielHero from "@/assets/daniel-hero.jpg";
import danielBw from "@/assets/daniel-bw.jpg";
import danielSitting from "@/assets/daniel-sitting.jpg";
import danielSurgery1 from "@/assets/daniel-surgery-1.jpg";
import danielSurgery2 from "@/assets/daniel-surgery-2.jpg";
import specGlaucoma from "@/assets/specialty-glaucoma.jpg";
import specCatarata from "@/assets/specialty-catarata.jpg";
import specNeuro from "@/assets/specialty-neuro.jpg";
import specRefrativa from "@/assets/specialty-refrativa.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import ibvFacade1 from "@/assets/ibv-facade-1.jpg";
import ibvFacade2 from "@/assets/ibv-facade-2.jpg";

export const ASSETS = {
  logoIbv,
  logoIbvWhite,
  logoDaniel,
  logoDanielColor,
  logoDanielWhite,
  danielHero,
  danielBw,
  danielSitting,
  danielSurgery1,
  danielSurgery2,
  specGlaucoma,
  specCatarata,
  specNeuro,
  specRefrativa,
  clinicInterior,
};

export const CONTACT = {
  whatsappNumber: "559833015060",
  whatsappText: "Olá, Dr. Daniel! Gostaria de agendar uma consulta.",
  email: "contato@drdanielcamposoftalmo.com",
  institutoUrl: "https://institutobelavista.com/",
  instagramUrl: "https://www.instagram.com/ibv.institutobelavista/",
};

export const waLink = (text?: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    text ?? CONTACT.whatsappText,
  )}`;

export const DOCTOR = {
  name: "Dr. Daniel Costa Campos",
  shortName: "Dr. Daniel",
  crm: "CRM-MA 6135",
  rqe: "RQE 2746",
  photoHero: danielHero,
  photoBw: danielBw,
  photoSitting: danielSitting,
  bioParagraphs: [
    "Médico oftalmologista formado pela Universidade Federal do Maranhão, com residência médica no Hospital Universitário (HU-UFMA) e título de Especialista em Oftalmologia pelo Conselho Brasileiro de Oftalmologia (CBO).",
    "Pós-graduado em Glaucoma pela Universidade Federal de São Paulo (Unifesp) e mestre pelo Programa de Pós-Graduação em Saúde do Adulto da UFMA, atua como preceptor da residência médica em Oftalmologia do HU-UFMA desde 2015.",
    "Sócio-proprietário do Instituto Bela Vista de Oftalmologia, alia ciência, tecnologia de ponta e escuta atenta para oferecer um cuidado verdadeiramente humano a cada paciente.",
  ],
  mission:
    "Cuidar da sua visão com tempo, ciência e empatia — para que enxergar o mundo continue sendo uma das suas melhores experiências.",
  medicalBoard: "Membro do Conselho Brasileiro de Oftalmologia (CBO)",
};


export interface Specialty {
  id: string;
  title: string;
  icon: "eye" | "scan" | "brain" | "focus";
  image: string;
  imageAlt: string;
  description: string;
  expanded: string;
  procedures: string[];
}

export const SPECIALTIES: Specialty[] = [
  {
    id: "glaucoma",
    title: "Glaucoma",
    icon: "scan",
    image: specGlaucoma,
    imageAlt: "Detalhe macro de um olho humano para acompanhamento de glaucoma",
    description:
      "Diagnóstico precoce e acompanhamento contínuo da pressão intraocular, preservando o nervo óptico e a sua visão a longo prazo.",
    expanded:
      "O glaucoma é silencioso e, sem tratamento, pode levar à perda irreversível da visão. Com pós-graduação em Glaucoma pela Unifesp, o Dr. Daniel realiza avaliação completa do nervo óptico, campimetria e OCT, definindo o plano terapêutico clínico ou cirúrgico ideal para cada caso.",
    procedures: ["Tonometria de aplanação", "Campo visual computadorizado", "OCT de nervo óptico", "Trabeculectomia", "Implante de drenagem"],
  },
  {
    id: "catarata",
    title: "Catarata",
    icon: "eye",
    image: specCatarata,
    imageAlt: "Lente intraocular usada em cirurgia de catarata",
    description:
      "Cirurgia moderna e segura com facoemulsificação e lentes intraoculares premium, devolvendo nitidez ao seu olhar.",
    expanded:
      "A cirurgia de catarata é um dos procedimentos mais realizados no mundo. Utilizando facoemulsificação por ultrassom e lentes monofocais, tóricas ou multifocais, o objetivo é restaurar uma visão clara e, sempre que possível, reduzir a dependência de óculos.",
    procedures: ["Facoemulsificação", "Implante de LIO monofocal", "Implante de LIO tórica", "Implante de LIO multifocal/EDOF"],
  },
  {
    id: "neuro",
    title: "Neuro-oftalmologia",
    icon: "brain",
    image: specNeuro,
    imageAlt: "Ilustração de conexões neurais entre olho e cérebro",
    description:
      "Investigação especializada das alterações visuais relacionadas ao nervo óptico, vias visuais e sistema nervoso central.",
    expanded:
      "Sintomas como visão dupla, perda súbita de visão, alterações de campo visual ou dores de cabeça associadas à visão exigem investigação detalhada. A neuro-oftalmologia integra exame clínico, exames de imagem e avaliação funcional para identificar e tratar a causa correta.",
    procedures: ["Avaliação do nervo óptico", "Estudo de motilidade ocular", "Campimetria computadorizada", "Acompanhamento conjunto com neurologia"],
  },
  {
    id: "refrativa",
    title: "Cirurgia Refrativa",
    icon: "focus",
    image: specRefrativa,
    imageAlt: "Sala de cirurgia refrativa equipada com tecnologia a laser",
    description:
      "Liberdade dos óculos com técnicas a laser modernas para miopia, hipermetropia e astigmatismo.",
    expanded:
      "Após avaliação minuciosa da córnea, refração e biometria, o Dr. Daniel indica a técnica mais segura para o seu caso — LASIK, PRK ou implante de lente fácica — explicando expectativas, riscos e benefícios com transparência.",
    procedures: ["Avaliação refracional completa", "LASIK", "PRK", "Implante de lente fácica (ICL)"],
  },
];

export interface Procedure {
  id: string;
  technicalName: string;
  popularName: string;
  description: string;
}

export const PROCEDURES: Procedure[] = [
  { id: "p1", technicalName: "Facoemulsificação", popularName: "Cirurgia de catarata", description: "Remoção do cristalino opacificado por ultrassom e implante de lente intraocular." },
  { id: "p2", technicalName: "LASIK / PRK", popularName: "Cirurgia para tirar os óculos", description: "Correção de grau (miopia, hipermetropia e astigmatismo) com laser excimer." },
  { id: "p3", technicalName: "Trabeculectomia", popularName: "Cirurgia de glaucoma", description: "Criação de uma nova via de drenagem para reduzir a pressão intraocular." },
  { id: "p4", technicalName: "Implante de drenagem (tubo)", popularName: "Válvula para glaucoma", description: "Indicado em glaucomas avançados ou refratários ao tratamento clínico." },
  { id: "p5", technicalName: "Implante de LIO premium", popularName: "Lente multifocal ou tórica", description: "Lentes que corrigem grau e/ou ampliam o foco para perto, intermediário e longe." },
  { id: "p6", technicalName: "Exérese de Pterígio", popularName: "Cirurgia de Pterígio", description: "A cirurgia de pterígio remove o excesso de tecido conjuntival que cresce sobre a córnea para aliviar sintomas e melhorar a visão." },
];

export interface Testimonial {
  id: string;
  patientName: string;
  city: string;
  state: string;
  rating: number;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { id: "t1", patientName: "Maria Helena S.", city: "São Luís", state: "MA", rating: 5, text: "Dr. Daniel é extremamente atencioso. Explicou tudo sobre a cirurgia de catarata da minha mãe e o pós-operatório foi tranquilo. Hoje ela enxerga como há 30 anos." },
  { id: "t2", patientName: "Ricardo M.", city: "São Luís", state: "MA", rating: 5, text: "Fiz a cirurgia refrativa e voltei a dirigir sem óculos no dia seguinte. Equipe acolhedora, tecnologia impecável." },
  { id: "t3", patientName: "Antônia P.", city: "São José de Ribamar", state: "MA", rating: 5, text: "Convivo com glaucoma há anos. Pela primeira vez senti que um médico realmente me escutou e ajustou o tratamento ao meu dia a dia." },
  { id: "t4", patientName: "João Carlos L.", city: "Paço do Lumiar", state: "MA", rating: 5, text: "Atendimento humano e técnico ao mesmo tempo. Indico de olhos fechados — ou melhor, bem abertos!" },
  { id: "t5", patientName: "Francisca R.", city: "Matinha", state: "MA", rating: 5, text: "Viajei até São Luís para uma segunda opinião sobre catarata e me surpreendi com a atenção do Dr. Daniel. Cirurgia tranquila e voltei para casa enxergando muito melhor." },
  { id: "t6", patientName: "Raimundo N.", city: "Olinda Nova do Maranhão", state: "MA", rating: 5, text: "Trato glaucoma há mais de cinco anos. O Dr. Daniel ajustou minha medicação com calma e hoje a pressão dos olhos está totalmente controlada." },
  { id: "t7", patientName: "Luciana A.", city: "Olinda Nova do Maranhão", state: "MA", rating: 5, text: "Minha mãe fez a cirurgia de catarata e a recuperação foi rapidíssima. Atendimento atencioso desde a recepção até o pós-operatório." },
  { id: "t8", patientName: "José Ribamar C.", city: "São João Batista", state: "MA", rating: 5, text: "Sempre tive medo de operar os olhos, mas o Dr. Daniel explicou cada etapa com paciência. Hoje leio sem óculos e agradeço todos os dias." },
];

export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapEmbed: string;
}

export const LOCATIONS: Location[] = [
  {
    id: "ibv",
    name: "Instituto Bela Vista de Oftalmologia",
    address: "Rua Auxiliar 2, Nº 31, Cohajap, São Luís — MA, 65072-790",
    phone: "(98) 3301-5060",
    hours: "Seg a Sex: 08h às 18h • Sáb: 08h às 12h",
    mapEmbed:
      "https://www.google.com/maps?q=Rua+Auxiliar+2,+31,+Cohajap,+S%C3%A3o+Lu%C3%ADs+-+MA,+65072-790&output=embed",
  },
];

export const GALLERY = [
  { id: "g1", url: danielSurgery1, alt: "Dr. Daniel Campos em microcirurgia oftalmológica" },
  { id: "g2", url: danielSurgery2, alt: "Dr. Daniel Campos utilizando microscópio cirúrgico" },
  { id: "g3", url: clinicInterior, alt: "Interior do consultório do Instituto Bela Vista" },
  { id: "g4", url: danielSitting, alt: "Retrato profissional do Dr. Daniel Campos" },
  { id: "g5", url: ibvFacade1, alt: "Placa do Instituto Bela Vista de Oftalmologia na fachada" },
  { id: "g6", url: ibvFacade2, alt: "Fachada do Instituto Bela Vista de Oftalmologia em São Luís" },
];

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Áreas" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];
