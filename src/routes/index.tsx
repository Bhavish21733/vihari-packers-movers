import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, MessageCircle, ShieldCheck, Truck, PackageCheck, Users, Clock, Award,
  Star, ArrowRight, CheckCircle2, Sparkles, Box, Sofa, Building2, Car, Wrench, Headphones,
  ChevronDown,
} from "lucide-react";
import heroImg from "../assets/hero-loading.jpg";
import sHome from "../assets/service-home.jpg";
import sOffice from "../assets/service-office.jpg";
import sCar from "../assets/service-car.jpg";
import sTransport from "../assets/service-transport.jpg";
import gFurniture from "../assets/gallery-furniture.jpg";
import gFridge from "../assets/gallery-fridge.jpg";
import gWash from "../assets/gallery-washing.jpg";
import gLoading from "../assets/gallery-loading.jpg";
import { QuoteForm } from "../components/site/QuoteForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Packers and Movers in Hyderabad | Vihari Packers and Movers" },
      { name: "description", content: "Vihari Packers and Movers offers safe, affordable home, office and vehicle relocation in Hyderabad. Professional packing, careful loading, reliable transport. Get a free quote today." },
      { property: "og:title", content: "Best Packers and Movers in Hyderabad | Vihari Packers and Movers" },
      { property: "og:description", content: "Professional packing, safe transportation, reliable loading & unloading across Hyderabad and India." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Process />
      <GalleryPreview />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Vihari Packers and Movers loading furniture in Hyderabad" width={1920} height={1080} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 text-white animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium ring-1 ring-white/20">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Trusted by 5,000+ families across Hyderabad
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white text-balance leading-[1.05]">
            Best <span className="text-primary">Packers and Movers</span> in Hyderabad
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl">
            Safe & affordable relocation services — professional packing, reliable loading & unloading,
            and hassle-free home and office shifting across Hyderabad and India.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#quote" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-secondary shadow-gold hover:scale-[1.03] transition">
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+919676665549" className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href="https://wa.me/919676665549" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white hover:scale-[1.03] transition">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
            {["Door-to-Door","Insured Moves","Verified Crew","24/7 Support"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" />{t}</span>
            ))}
          </div>
        </div>

        <div id="quote" className="lg:col-span-5">
          <div className="rounded-2xl bg-white p-6 sm:p-7 shadow-elegant">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Free Instant Quote</p>
            </div>
            <h3 className="mt-1 font-display text-2xl text-secondary">Get Your Free Moving Quote</h3>
            <p className="text-sm text-muted-foreground">We'll respond within 10 minutes.</p>
            <div className="mt-5"><QuoteForm /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const stats = [
    { icon: Award, k: "10+", l: "Years Experience" },
    { icon: Users, k: "5000+", l: "Successful Moves" },
    { icon: Headphones, k: "24/7", l: "Customer Support" },
    { icon: ShieldCheck, k: "100%", l: "Safe & Insured" },
    { icon: Truck, k: "Door", l: "to Door Service" },
    { icon: PackageCheck, k: "Pro", l: "Packing Team" },
  ];
  return (
    <section className="bg-white border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {stats.map((s) => (
          <div key={s.l} className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center text-primary">
              <s.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display font-extrabold text-secondary text-lg leading-none">{s.k}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const SERVICES = [
  { title: "Home Relocation", desc: "End-to-end home shifting with expert packing and careful handling of every item.", img: sHome, icon: Sofa },
  { title: "Office Shifting", desc: "Minimal-downtime corporate moves with labeled, secured workstation transport.", img: sOffice, icon: Building2 },
  { title: "Packing and Moving", desc: "Premium packing materials and trained crews for damage-free relocation.", img: gFurniture, icon: Box },
  { title: "Loading & Unloading", desc: "Strong, experienced labour for safe, swift loading at every floor.", img: gLoading, icon: PackageCheck },
  { title: "Goods Transportation", desc: "Modern fleet of trucks and tempos for local, intercity and interstate moves.", img: sTransport, icon: Truck },
  { title: "Car Transportation", desc: "Secure car carriers and door-to-door vehicle relocation across India.", img: sCar, icon: Car },
];

function Services() {
  return (
    <section className="bg-muted/40 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Our Services" title="Premium Relocation Services in Hyderabad" sub="From single-room shifting to full-scale corporate relocations — we handle every move with precision and care." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <article key={s.title} className="group rounded-2xl overflow-hidden bg-white shadow-elegant hover:-translate-y-1 transition-transform">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={`${s.title} services by Vihari Packers and Movers Hyderabad`} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 left-3 h-10 w-10 rounded-lg bg-gradient-gold grid place-items-center shadow-gold"><s.icon className="h-5 w-5 text-secondary" /></div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-secondary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { i: Users, t: "Experienced Professionals", d: "Verified, trained packing & loading crews." },
    { i: ShieldCheck, t: "Safe Packing Materials", d: "Bubble wrap, stretch film, cartons, blankets." },
    { i: Award, t: "Affordable Pricing", d: "Transparent quotes, no hidden charges." },
    { i: Clock, t: "Timely Delivery", d: "On-time pickup and on-time delivery." },
    { i: PackageCheck, t: "Damage-Free Handling", d: "Trained crews + premium packaging = zero damage." },
    { i: Wrench, t: "Modern Equipment", d: "Trolleys, lifts and tools for every move size." },
    { i: Truck, t: "Reliable Vehicles", d: "Well-maintained fleet of trucks & tempos." },
    { i: Headphones, t: "24/7 Customer Support", d: "Real humans, real-time updates." },
  ];
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Why Choose Us" title="Why Vihari is Hyderabad's Most Trusted Mover" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border p-6 bg-white hover:border-primary hover:shadow-gold transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center shadow-gold"><it.i className="h-5 w-5 text-secondary" /></div>
              <h3 className="mt-4 font-display text-lg text-secondary">{it.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    "Request a Quote","Schedule Inspection","Professional Packing",
    "Loading & Transportation","Safe Delivery","Unloading & Setup",
  ];
  return (
    <section className="py-20 lg:py-24 bg-gradient-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead darkMode eyebrow="Our Process" title="A Simple, Stress-Free Moving Journey" />
        <ol className="mt-14 relative grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {steps.map((s, i) => (
            <li key={s} className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur">
              <div className="h-10 w-10 rounded-full bg-gradient-gold grid place-items-center font-display font-extrabold text-secondary shadow-gold">{i + 1}</div>
              <h3 className="mt-4 font-display text-base text-white">{s}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const imgs = [
    { src: gFurniture, alt: "Vihari packers furniture wrapping in Hyderabad", h: "row-span-2" },
    { src: gFridge, alt: "Refrigerator packing service Hyderabad" },
    { src: gLoading, alt: "Professional loading activities by Vihari movers" },
    { src: sTransport, alt: "Vihari Packers and Movers truck fleet" },
    { src: sHome, alt: "Household relocation service Hyderabad", h: "row-span-2" },
    { src: gWash, alt: "Washing machine packing Hyderabad" },
  ];
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Our Work" title="Real Moves. Real Results." sub="A glimpse of our packing, loading and relocation work for happy customers across Hyderabad." />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
          {imgs.map((g, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl group ${g.h ?? ""}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white hover:bg-secondary/90">
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  { n: "Rahul Sharma", loc: "Nagole, Hyderabad", t: "Excellent service! The team handled our 3BHK move with utmost care. Every item arrived in perfect condition." },
  { n: "Priya Reddy", loc: "Bandlaguda", t: "Vihari Packers made our office shifting effortless. Professional, punctual and very affordable." },
  { n: "Mohammed Iqbal", loc: "Uppal", t: "Best packers in Hyderabad. Wrapped my refrigerator and washing machine like new. Highly recommend!" },
  { n: "Anitha Kumari", loc: "LB Nagar", t: "Moved Hyderabad to Bangalore with zero damage. Driver kept me updated through the journey." },
  { n: "Suresh Babu", loc: "Dilsukhnagar", t: "Affordable, transparent pricing and a really hardworking crew. Five stars from our family." },
  { n: "Kavitha Rao", loc: "Hayathnagar", t: "From packing to unpacking everything was smooth. Will definitely use Vihari again." },
  { n: "Arjun Verma", loc: "Kondapur", t: "Car transportation was super safe. They followed up at every stage. Loved the experience." },
  { n: "Lakshmi Devi", loc: "Secunderabad", t: "The team arrived on time, packed efficiently and delivered on schedule. Top-notch movers." },
];

function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="Testimonials" title="Loved by 5,000+ Happy Customers" sub="Read what families and businesses across Hyderabad say about Vihari Packers and Movers." />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((r) => (
            <figure key={r.n} className="rounded-2xl bg-white p-6 shadow-elegant">
              <div className="flex gap-0.5 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="mt-3 text-sm text-secondary/80 leading-relaxed">"{r.t}"</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-gold grid place-items-center font-display font-extrabold text-secondary">{r.n[0]}</div>
                <div>
                  <div className="text-sm font-semibold text-secondary">{r.n}</div>
                  <div className="text-xs text-muted-foreground">{r.loc}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "How much does house shifting cost in Hyderabad?", a: "Local 1BHK moves typically start from ₹3,500–₹7,000, 2BHK from ₹6,000–₹12,000, and 3BHK from ₹9,000–₹18,000. Final price depends on volume, distance, floor, and packing requirements. Call us at +91 96766 65549 for a free, no-obligation quote." },
  { q: "Do you provide packing materials?", a: "Yes. We use premium bubble wrap, stretch film, corrugated rolls, multi-layer cartons, and protective blankets. All packing materials are included in your quote." },
  { q: "Can you transport cars and bikes?", a: "Absolutely. We offer dedicated single-car carriers and multi-vehicle car carriers for safe door-to-door vehicle transportation across India." },
  { q: "Do you provide office relocation?", a: "Yes — we specialise in low-downtime corporate relocations including workstations, servers, conference rooms, and pantry setup with weekend and night moves available." },
  { q: "Do you provide insurance support?", a: "Yes, transit insurance is available for all moves. Our team will help you choose the right coverage for the value of your goods." },
  { q: "How long does shifting take?", a: "Local moves are usually completed in a single day. Intercity moves take 1–3 days and interstate moves 3–7 days depending on the route." },
  { q: "Are your staff professionally trained?", a: "All our packers and loaders are background-verified, trained in safe handling techniques, and supervised by an experienced move manager." },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <div key={f.q} className="rounded-xl border border-border bg-white overflow-hidden">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
                <span className="font-semibold text-secondary text-sm sm:text-base">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={sTransport} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-secondary/90" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="font-display text-3xl sm:text-5xl text-white text-balance">Ready For A <span className="text-primary">Stress-Free Move?</span></h2>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">Get your free moving quote today. Our team will respond within 10 minutes.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a href="tel:+919676665549" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-secondary shadow-gold hover:scale-[1.03] transition">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a href="/#quote" className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/30 backdrop-blur px-7 py-4 text-sm font-semibold text-white hover:bg-white/20">
            Get Free Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub, darkMode }: { eyebrow: string; title: string; sub?: string; darkMode?: boolean }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${darkMode ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"}`}>{eyebrow}</span>
      <h2 className={`mt-3 font-display text-3xl sm:text-4xl text-balance ${darkMode ? "text-white" : "text-secondary"}`}>{title}</h2>
      {sub && <p className={`mt-3 text-base ${darkMode ? "text-white/70" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}
