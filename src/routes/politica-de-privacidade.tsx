import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { CONTACT, DOCTOR, LOCATIONS } from "@/data/site";

const SITE_URL = "https://www.drdanielcamposoftalmo.com";
const PAGE_URL = `${SITE_URL}/politica-de-privacidade`;
const LAST_UPDATE = "13 de setembro de 2026";

const title = "Política de Privacidade | Dr. Daniel Campos — Oftalmologista";
const description =
  "Saiba como o site do Dr. Daniel Campos coleta, utiliza e protege seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: PAGE_URL },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
});

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="mt-10">
      <h2 id={`${id}-titulo`} className="text-xl font-semibold text-primary lg:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function PrivacyPolicy() {
  const loc = LOCATIONS[0];

  return (
    <main className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-secondary hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Voltar ao site
        </Link>

        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-secondary">
          Transparência e proteção de dados
        </p>
        <h1 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Última atualização: {LAST_UPDATE}
        </p>

        <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
          Esta Política de Privacidade explica como o site{" "}
          <strong className="text-foreground">{SITE_URL.replace("https://", "")}</strong>{" "}
          (“Site”), mantido por {DOCTOR.name} ({DOCTOR.crm} · {DOCTOR.rqe}), coleta,
          utiliza, armazena e protege os dados pessoais de seus visitantes, em conformidade
          com a Lei Geral de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018), o Marco
          Civil da Internet (Lei nº 12.965/2014) e o Código de Ética Médica.
        </p>

        <Section id="controlador" title="1. Quem é o responsável pelos seus dados">
          <p>
            O controlador dos dados pessoais tratados por meio deste Site é{" "}
            <strong className="text-foreground">{DOCTOR.name}</strong>, médico
            oftalmologista, com atendimento no {loc.name}, {loc.address}.
          </p>
          <p>
            Para qualquer assunto relacionado à privacidade e à proteção de dados, entre em
            contato pelo e-mail{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-medium text-primary hover:underline">
              {CONTACT.email}
            </a>
            .
          </p>
        </Section>

        <Section id="dados" title="2. Quais dados coletamos e por quê">
          <p>
            <strong className="text-foreground">a) Dados que você nos envia voluntariamente.</strong>{" "}
            Ao clicar em “Falar no WhatsApp”, “Agende sua consulta” ou em links de telefone e
            e-mail, você é direcionado a um aplicativo externo (WhatsApp, telefone ou seu
            aplicativo de e-mail). As informações que você compartilhar por esses canais —
            como nome, telefone, e-mail e o motivo do contato — são utilizadas exclusivamente
            para responder à sua solicitação e organizar o agendamento de consultas.
          </p>
          <p>
            <strong className="text-foreground">b) Dados de navegação coletados automaticamente.</strong>{" "}
            Utilizamos o Google Analytics 4 para entender como o Site é usado (páginas
            visitadas, tempo de permanência, tipo de dispositivo, região aproximada, origem
            do acesso e cliques em botões de contato). Esses dados são coletados de forma
            agregada e pseudonimizada, com o objetivo de melhorar o conteúdo e a experiência
            do Site e de medir o resultado de campanhas de divulgação.
          </p>
          <p>
            <strong className="text-foreground">c) Dados que não coletamos pelo Site.</strong>{" "}
            Este Site não solicita nem armazena dados de saúde, exames, prontuários ou
            informações financeiras. Informações clínicas são tratadas apenas no ambiente de
            atendimento médico, sob sigilo profissional e com base legal própria (tutela da
            saúde — art. 11, II, “f”, da LGPD).
          </p>
        </Section>

        <Section id="bases-legais" title="3. Bases legais do tratamento">
          <p>
            Tratamos seus dados com fundamento nas seguintes hipóteses previstas na LGPD:
            execução de procedimentos preliminares e de contrato a seu pedido (art. 7º, V),
            quando você solicita informações ou agendamento; legítimo interesse (art. 7º, IX),
            para análise estatística de uso do Site e prevenção de fraudes; e consentimento
            (art. 7º, I), para cookies e tecnologias de medição não essenciais, que você pode
            revogar a qualquer momento conforme a seção 5.
          </p>
        </Section>

        <Section id="compartilhamento" title="4. Com quem compartilhamos seus dados">
          <p>
            Não vendemos nem cedemos seus dados pessoais. O compartilhamento ocorre somente
            com fornecedores que nos ajudam a operar o Site e a comunicação, sempre limitado à
            finalidade descrita: Google LLC (Google Analytics e Google Ads, para medição de
            audiência e de campanhas), Meta Platforms (WhatsApp, quando você opta por esse
            canal de contato) e provedores de hospedagem e infraestrutura do Site. Alguns
            desses fornecedores podem armazenar dados fora do Brasil, em países com nível de
            proteção adequado ou mediante cláusulas contratuais que garantam a proteção
            exigida pela LGPD (art. 33).
          </p>
          <p>
            Também poderemos compartilhar dados quando exigido por lei, ordem judicial ou
            autoridade competente.
          </p>
        </Section>

        <Section id="cookies" title="5. Cookies e tecnologias de medição">
          <p>
            Cookies são pequenos arquivos gravados no seu navegador. Este Site utiliza:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Cookies estritamente necessários</strong> —
              garantem o funcionamento e a segurança do Site. Não podem ser desativados.
            </li>
            <li>
              <strong className="text-foreground">Cookies de medição e desempenho (Google
              Analytics)</strong> — identificam visitas de forma pseudonimizada
              (por exemplo, <code className="rounded bg-muted px-1">_ga</code>,{" "}
              <code className="rounded bg-muted px-1">_ga_*</code>), com validade de até 2
              anos, para estatísticas de uso e medição de campanhas.
            </li>
            <li>
              <strong className="text-foreground">Cookies de publicidade (Google Ads)</strong>{" "}
              — podem ser usados para medir conversões de anúncios e, quando ativados, para
              exibir anúncios mais relevantes em outros sites.
            </li>
          </ul>
          <p>
            Você pode bloquear ou apagar cookies a qualquer momento nas configurações do seu
            navegador. Para desativar especificamente a coleta do Google Analytics, é possível
            instalar a extensão oficial de desativação disponibilizada pelo Google
            (tools.google.com/dlpage/gaoptout). Para gerenciar a personalização de anúncios do
            Google, acesse adssettings.google.com.
          </p>
        </Section>

        <Section id="retencao" title="6. Por quanto tempo guardamos seus dados">
          <p>
            Dados de contato são mantidos pelo tempo necessário para atender à sua
            solicitação e cumprir obrigações legais. Dados estatísticos do Google Analytics
            são retidos por até 14 meses e, após esse período, permanecem apenas de forma
            agregada. Registros médicos seguem os prazos exigidos pelo Conselho Federal de
            Medicina e legislação específica, sob responsabilidade do serviço de saúde.
          </p>
        </Section>

        <Section id="direitos" title="7. Seus direitos como titular">
          <p>
            Nos termos do art. 18 da LGPD, você pode, a qualquer momento, solicitar:
            confirmação da existência de tratamento; acesso aos seus dados; correção de dados
            incompletos, inexatos ou desatualizados; anonimização, bloqueio ou eliminação de
            dados desnecessários ou tratados em desconformidade; portabilidade; informação
            sobre compartilhamentos; e revogação do consentimento.
          </p>
          <p>
            Para exercer esses direitos, envie um e-mail para{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-medium text-primary hover:underline">
              {CONTACT.email}
            </a>{" "}
            com o assunto “LGPD”. Responderemos em até 15 dias. Você também pode apresentar
            reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
          </p>
        </Section>

        <Section id="seguranca" title="8. Segurança da informação">
          <p>
            Adotamos medidas técnicas e administrativas para proteger seus dados contra
            acessos não autorizados, perda, alteração ou divulgação indevida, incluindo
            conexão criptografada (HTTPS) em todo o Site, acesso restrito aos canais de
            contato e uso de fornecedores com práticas reconhecidas de segurança. Nenhum
            sistema é totalmente infalível; caso ocorra incidente de segurança relevante,
            você e a ANPD serão comunicados conforme a lei.
          </p>
        </Section>

        <Section id="menores" title="9. Crianças e adolescentes">
          <p>
            O Site não é direcionado a menores de 18 anos e não coleta intencionalmente dados
            de crianças e adolescentes. Contatos referentes a pacientes menores devem ser
            realizados por seus responsáveis legais.
          </p>
        </Section>

        <Section id="links" title="10. Links para sites de terceiros">
          <p>
            O Site contém links para páginas externas (como WhatsApp, Instagram, Google Maps e
            o site do Instituto Bela Vista). Não nos responsabilizamos pelas práticas de
            privacidade desses serviços; recomendamos a leitura das políticas de cada um.
          </p>
        </Section>

        <Section id="alteracoes" title="11. Alterações desta política">
          <p>
            Esta Política pode ser atualizada para refletir mudanças legais ou operacionais.
            A versão vigente estará sempre disponível nesta página, com a data da última
            atualização indicada no topo.
          </p>
        </Section>

        <div className="mt-14 border-t border-border pt-8 text-sm text-muted-foreground">
          <p>
            {DOCTOR.name} · {DOCTOR.crm} · {DOCTOR.rqe}
            <br />
            {loc.name} — {loc.address}
            <br />
            {CONTACT.email} · {loc.phone}
          </p>
        </div>
      </div>
    </main>
  );
}
