/**
 * Rastreamento de conversões do Google Ads / Google Analytics (GA4).
 *
 * ================================================================
 * PENDÊNCIA: cole aqui o ID de mensuração do GA4 assim que a Carol
 * enviar (formato "G-XXXXXXXXXX"). Ele fica em:
 * GA4 > Administrador > Fluxos de dados > (fluxo do site) > ID de mensuração.
 * Sem esse ID, nenhum evento é enviado (o código abaixo já protege
 * contra isso — o site continua funcionando normalmente).
 * ================================================================
 */
export const GA_MEASUREMENT_ID = "G-GJ58NY688M";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

function sendEvent(eventName: string, params: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", eventName, params);
}

/**
 * Dispara quando alguém clica em QUALQUER botão/link do WhatsApp do site.
 * Este é o evento principal da campanha (objetivo: agendamento via WhatsApp).
 *
 * @param origem identifica qual botão foi clicado (ex.: "flutuante",
 * "cabecalho_desktop", "hero"), para dar pra ver no GA4 qual parte da
 * página está gerando mais contatos.
 */
export function trackWhatsAppClick(origem: string) {
  sendEvent("contato_whatsapp", {
    method: "whatsapp",
    origem_botao: origem,
  });
}

/**
 * Sinal secundário: clique em número/botão de ligação telefônica.
 * Útil para enxergar o funil completo de contato, mesmo a campanha
 * sendo otimizada primariamente para WhatsApp.
 */
export function trackPhoneClick(origem: string) {
  sendEvent("contato_telefone", {
    method: "phone",
    origem_botao: origem,
  });
}

/**
 * Sinal secundário: envio do formulário de contato (abre o app de e-mail).
 */
export function trackContactFormSubmit() {
  sendEvent("envio_formulario_contato", {
    method: "email",
  });
}
