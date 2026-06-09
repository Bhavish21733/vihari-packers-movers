import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919676665549?text=Hi%20Vihari%20Packers,%20I%20would%20like%20a%20free%20moving%20quote."
        target="_blank" rel="noopener"
        aria-label="WhatsApp"
        className="h-14 w-14 rounded-full grid place-items-center bg-[oklch(var(--whatsapp))] text-white shadow-elegant hover:scale-110 transition-transform"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+919676665549"
        aria-label="Call now"
        className="h-14 w-14 rounded-full grid place-items-center bg-gradient-gold text-secondary shadow-gold hover:scale-110 transition-transform"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
