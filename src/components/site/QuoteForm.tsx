import { useState } from "react";
import { Send } from "lucide-react";

const services = [
  "Home Relocation","Office Shifting","Packing and Moving","Loading and Unloading",
  "Goods Transportation","Car Transportation","Furniture Shifting","Local Shifting",
  "Intercity Relocation","Interstate Relocation",
];

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `New Quote Request%0A%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0AEmail: ${data.get("email")}%0AFrom: ${data.get("from")}%0ATo: ${data.get("to")}%0AService: ${data.get("service")}%0AMessage: ${data.get("message")}`;
    window.open(`https://wa.me/919676665549?text=${msg}`, "_blank");
    setSubmitted(true);
  }
  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input name="name" placeholder="Your Name" required />
        <Input name="phone" placeholder="Phone Number" required type="tel" />
      </div>
      <Input name="email" placeholder="Email" type="email" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input name="from" placeholder="Moving From" />
        <Input name="to" placeholder="Moving To" />
      </div>
      <select name="service" required className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary">
        <option value="">Select Service</option>
        {services.map((s) => <option key={s}>{s}</option>)}
      </select>
      {!compact && (
        <textarea name="message" rows={3} placeholder="Tell us about your move" className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary" />
      )}
      <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-secondary shadow-gold hover:scale-[1.02] transition-transform">
        <Send className="h-4 w-4" /> Get My Free Quote
      </button>
      {submitted && <p className="text-sm text-emerald-600 text-center">Opening WhatsApp — we'll respond in minutes!</p>}
      <p className="text-[11px] text-muted-foreground text-center">100% Free • No Obligation • Instant Response</p>
    </form>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-secondary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />;
}
