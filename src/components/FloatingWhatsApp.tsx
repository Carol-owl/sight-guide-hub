import { MessageCircle } from "lucide-react";
import { waLink } from "@/data/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com o Dr. Daniel"
      className="wa-pulse fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[var(--shadow-elevated)] transition-transform hover:scale-110 sm:h-16 sm:w-16"
      style={{ backgroundColor: "var(--color-whatsapp)" }}
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
