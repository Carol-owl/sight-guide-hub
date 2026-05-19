import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, Clock, Send } from "lucide-react";
import { toast } from "sonner";

import { CONTACT, LOCATIONS } from "@/data/site";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const CONTACT_EMAIL = "contato@drdanielcamposoftalmo.com";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Informe seu nome completo." })
    .max(100, { message: "Máximo de 100 caracteres." }),
  email: z
    .string()
    .trim()
    .email({ message: "Informe um e-mail válido." })
    .max(255, { message: "E-mail muito longo." }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Descreva o assunto (mín. 3 caracteres)." })
    .max(150, { message: "Máximo de 150 caracteres." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Escreva uma mensagem com pelo menos 10 caracteres." })
    .max(1000, { message: "Máximo de 1000 caracteres." }),
});

type ContactFormValues = z.infer<typeof schema>;

export function Contact() {
  const loc = LOCATIONS[0];

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (values: ContactFormValues) => {
    const subject = `[Site] ${values.subject}`;
    const body =
      `Nome: ${values.name}\n` +
      `E-mail: ${values.email}\n\n` +
      `Mensagem:\n${values.message}`;

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    toast.success("Abrindo seu app de e-mail…", {
      description: "Revise a mensagem e confirme o envio.",
    });
    form.reset();
  };

  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="bg-muted/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Contato
          </p>
          <h2 id="contato-titulo" className="mt-3">
            Fale com nossa equipe.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Envie sua dúvida ou solicitação. Respondemos em até 1 dia útil.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Info card */}
          <aside className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
            <h3 className="text-xl font-semibold text-primary">
              Canais de atendimento
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefere escrever direto? Use nosso e-mail oficial — clicando, seu
              app de e-mail abre automaticamente.
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-none text-accent" aria-hidden />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-primary break-all hover:text-secondary"
                >
                  {CONTACT_EMAIL}
                </a>
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
          </aside>

          {/* Form card */}
          <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                noValidate
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome completo</FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="name"
                            placeholder="Seu nome"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail de contato</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            autoComplete="email"
                            placeholder="voce@exemplo.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assunto</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Ex.: Agendamento de consulta"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          placeholder="Conte como podemos ajudar…"
                          className="min-h-[160px] resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="glass-cta-dark inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full px-6 font-semibold sm:w-auto"
                >
                  <Send className="h-4 w-4" aria-hidden />
                  Enviar mensagem
                </button>

                <p className="text-xs text-muted-foreground">
                  Ao enviar, seu app de e-mail abrirá com a mensagem já
                  preenchida. Se nada acontecer, escreva para{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>

      {/* JSON-LD: ContactPoint */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPoint",
            email: CONTACT_EMAIL,
            telephone: `+${CONTACT.whatsappNumber}`,
            contactType: "customer support",
            areaServed: "BR",
            availableLanguage: ["Portuguese"],
          }),
        }}
      />
    </section>
  );
}
