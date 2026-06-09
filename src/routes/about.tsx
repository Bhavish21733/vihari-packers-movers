import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Award, Heart, Target, Users, Sparkles, ArrowRight } from "lucide-react";
import hero from "../assets/hero-loading.jpg";
import sHome from "../assets/service-home.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vihari Packers and Movers Hyderabad | 10+ Years of Trusted Relocation" },
      { name: "description", content: "Learn about Vihari Packers and Movers — Hyderabad's trusted relocation company with 10+ years of experience, 5,000+ successful moves and a 4.9-star customer rating." },
      { property: "og:title", content: "About Vihari Packers and Movers — Hyderabad's Trusted Movers" },
      { property: "og:description", content: "10+ years, 5,000+ moves, 4.9-star rating. Discover the team behind safe, affordable relocations across Hyderabad and India." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative bg-gradient-navy text-white py-20 lg:py-28">
        <div className="absolute inset-0 opacity-25">
          <img src={hero} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">About Us</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl text-white text-balance">A Decade of Trusted Relocations in Hyderabad</h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/80">Built on integrity, powered by hard work — Vihari Packers and Movers has helped over 5,000 families and businesses move safely and stress-free.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={sHome} alt="Vihari packers wrapping furniture in a Hyderabad home" loading="lazy" className="rounded-2xl shadow-elegant w-full" />
          </div>
          <div>
            <h2 className="font-display text-3xl text-secondary">Our Story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Vihari Packers and Movers was founded in Hyderabad with one simple belief: relocation should never be stressful.
              What started as a small local moving company in Bandlaguda has grown into one of Hyderabad's most trusted
              relocation brands — serving homes, offices and vehicles across the city and the country.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Over the last 10+ years we've completed more than 5,000 successful moves, built a fleet of well-maintained
              vehicles, trained a strong team of verified professionals, and refined every step of our process so that
              you can hand over your move to us and focus on the next chapter of your life.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Whether it's a single-room shift inside Nagole, a 3BHK relocation to Bangalore, or a multi-floor office
              move in Hi-Tech City — our crew brings the same level of care, professionalism and punctuality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { i: Target, t: "Our Mission", d: "To deliver the safest, most reliable and most affordable relocation experience to every customer in Hyderabad and beyond — every single time." },
            { i: Sparkles, t: "Our Vision", d: "To become India's most loved relocation brand by combining premium service standards with honest, transparent pricing." },
            { i: Heart, t: "Our Values", d: "Trust, integrity, punctuality, care and customer-first thinking guide every move we plan, pack and deliver." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl bg-white p-7 shadow-elegant">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold grid place-items-center shadow-gold"><c.i className="h-5 w-5 text-secondary" /></div>
              <h3 className="mt-4 font-display text-xl text-secondary">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-secondary text-center">Why Customers Trust Vihari</h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              { i: ShieldCheck, t: "Safety First", d: "Premium packing materials, trained crews and damage-free protocols." },
              { i: Award, t: "Proven Track Record", d: "5,000+ moves with a 4.9 / 5 customer satisfaction rating." },
              { i: Users, t: "Verified Professionals", d: "Every packer and driver is background-checked and trained." },
              { i: Heart, t: "Customer Commitment", d: "Real humans on call 24/7 — before, during and after your move." },
            ].map((c) => (
              <div key={c.t} className="flex gap-4 rounded-2xl border border-border bg-white p-6 hover:border-primary transition">
                <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center text-primary shrink-0"><c.i className="h-5 w-5" /></div>
                <div>
                  <h3 className="font-display text-lg text-secondary">{c.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 font-semibold text-secondary shadow-gold hover:scale-[1.03] transition">
              Talk to Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
