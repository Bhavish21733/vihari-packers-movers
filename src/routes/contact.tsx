import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Clock, Navigation } from "lucide-react";
import { QuoteForm } from "../components/site/QuoteForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vihari Packers and Movers Hyderabad | Call +91 96766 65549" },
      { name: "description", content: "Contact Vihari Packers and Movers in Bandlaguda, Nagole, Hyderabad. Call +91 96766 65549, WhatsApp us, or request a free moving quote online." },
      { property: "og:title", content: "Contact Vihari Packers and Movers — Hyderabad" },
      { property: "og:description", content: "Call, WhatsApp or request a free quote. We respond within 10 minutes." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-gradient-navy text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl text-white">Let's Plan Your Move</h1>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Call us, WhatsApp us, or send a quick quote request. Our team responds within 10 minutes.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-5">
          {[
            { i: Phone, t: "Call Us", d: "+91 96766 65549", href: "tel:+919676665549" },
            { i: MessageCircle, t: "WhatsApp", d: "Chat with us instantly", href: "https://wa.me/919676665549" },
            { i: Mail, t: "Email Us", d: "info@viharipackers.com", href: "mailto:info@viharipackers.com" },
          ].map((c) => (
            <a key={c.t} href={c.href} className="group rounded-2xl border border-border p-6 bg-white hover:border-primary hover:shadow-gold transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center shadow-gold"><c.i className="h-5 w-5 text-secondary" /></div>
              <h3 className="mt-4 font-display text-lg text-secondary">{c.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-muted/40 p-7">
            <h2 className="font-display text-2xl text-secondary">Get a Free Moving Quote</h2>
            <p className="mt-1 text-sm text-muted-foreground">Tell us about your move — we'll respond within 10 minutes.</p>
            <div className="mt-5"><QuoteForm /></div>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-display text-lg text-secondary flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> Our Office</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Vihari Packers and Movers<br />
                2-6-101, Eshwaripuri Colony, Jaipuri Colony,<br />
                Bandlaguda, Nagole, Hyderabad,<br />
                Telangana 500068
              </p>
              <a target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=Bandlaguda+Nagole+Hyderabad+500068" className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary text-white px-5 py-2.5 text-sm font-semibold">
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </div>
            <div className="rounded-2xl border border-border p-6">
              <h3 className="font-display text-lg text-secondary flex items-center gap-2"><Clock className="h-5 w-5 text-primary" /> Working Hours</h3>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                <li>Monday – Sunday: <span className="font-semibold text-secondary">24/7 Customer Support</span></li>
                <li>Field operations: 7:00 AM – 9:00 PM</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border aspect-[16/10]">
              <iframe
                title="Vihari Packers and Movers location"
                src="https://www.google.com/maps?q=Bandlaguda+Nagole+Hyderabad+500068&output=embed"
                width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
