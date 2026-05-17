import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="glass-icon fixed bottom-24 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground sm:bottom-28"
    >
      <ArrowUp className="h-5 w-5" aria-hidden />
    </button>
  );
}
