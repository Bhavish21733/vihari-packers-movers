import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import sHome from "../assets/service-home.jpg";
import sOffice from "../assets/service-office.jpg";
import sCar from "../assets/service-car.jpg";
import sTransport from "../assets/service-transport.jpg";
import gFurniture from "../assets/gallery-furniture.jpg";
import gLoading from "../assets/gallery-loading.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Packers and Movers Services in Hyderabad | Home, Office, Car — Vihari" },
      { name: "description", content: "Full-service relocation in Hyderabad: home shifting, office relocation, packing & moving, loading & unloading, goods transportation and car transportation." },
      { property: "og:title", content: "Packers and Movers Services in Hyderabad — Vihari" },
      { property: "og:description", content: "Home, office and vehicle relocation, packing and transport — all under one roof." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const SERVICES = [
  {
    id: "home-relocation",
    title: "Home Relocation",
    img: sHome,
    overview: "Vihari Packers and Movers is Hyderabad's most trusted name for home relocation. From a compact 1BHK to a sprawling villa, our trained crews pack, load, transport, unload and re-assemble your home with absolute care. We bring the right number of people, the right packing materials and the right vehicle for the size of your move so that nothing is rushed and nothing is damaged.",
    benefits: ["Door-to-door pickup and delivery", "Premium multi-layer packing", "Furniture dismantling & reassembly", "Insurance coverage available", "Trained, background-verified crew"],
    process: ["Free home survey & quote", "Packing day with material kit", "Careful loading into our vehicle", "GPS-tracked transportation", "Unloading & furniture re-setup"],
  },
  {
    id: "office-shifting",
    title: "Office Shifting",
    img: sOffice,
    overview: "Office relocations need precision, speed and zero downtime. Our corporate team specialises in moving workstations, servers, files, conference rooms and pantry setups. We handle the entire IT and furniture move with labelled cartons, anti-static wraps and weekend or night shifts so your business is up and running on Monday morning.",
    benefits: ["Minimal-downtime weekend moves", "Labelled, indexed cartons", "Workstation & server packing", "Furniture dismantling & setup", "Dedicated move manager"],
    process: ["Pre-move walkthrough", "Inventory & labelling plan", "Phased packing & loading", "Transportation & delivery", "Setup at new location"],
  },
  {
    id: "packing-moving",
    title: "Packing and Moving",
    img: gFurniture,
    overview: "Our packing-and-moving service uses only premium materials — bubble wrap, stretch film, corrugated sheets, foam, multi-layer cartons and protective blankets. Each item is wrapped according to its shape, weight and fragility. Whether it's a glass dining table, a 55-inch TV, a queen mattress or a refrigerator, the result is the same: it reaches you in the same condition it left.",
    benefits: ["Damage-free packing standards", "Premium imported materials", "Item-wise labelling", "Special handling for fragile items", "Eco-conscious material reuse"],
    process: ["Material assessment", "Room-by-room packing", "Cushioning & wrapping", "Sealing & labelling", "Loading-ready stacking"],
  },
  {
    id: "loading-unloading",
    title: "Loading and Unloading",
    img: gLoading,
    overview: "Loading and unloading is where most damage happens with untrained movers — and where Vihari truly stands out. Our strong, experienced labour team uses dollies, trolleys, ramps and proper lifting techniques to safely move heavy items across floors, lifts and staircases. We're insured, we're punctual, and we're careful with your walls, floors and corners.",
    benefits: ["Trained, strong workforce", "Trolleys, ramps & dollies", "Multi-floor & lift handling", "Wall & floor protection", "Punctual arrival"],
    process: ["Arrival as scheduled", "Site walk-through", "Sequenced loading plan", "Safe transport stacking", "Careful unloading"],
  },
  {
    id: "goods-transportation",
    title: "Goods Transportation",
    img: sTransport,
    overview: "Our modern fleet of tempos, mini-trucks and full-size trucks covers local, intercity and interstate goods transportation. Every vehicle is well-maintained, GPS-tracked and driven by an experienced driver. Whether you need a single-tempo move within Hyderabad or a dedicated truck to Bangalore, Chennai, Pune or Mumbai — we have the right vehicle and the right route.",
    benefits: ["Local, intercity & interstate", "GPS-tracked vehicles", "Wide fleet — tempo to full truck", "Experienced drivers", "Real-time updates"],
    process: ["Vehicle right-sizing", "Loading & securing", "GPS-tracked transit", "Delivery confirmation", "Unloading at destination"],
  },
  {
    id: "car-transportation",
    title: "Car Transportation",
    img: sCar,
    overview: "Shifting your car across cities? Our dedicated car carriers — single and multi-vehicle — transport your car safely from your doorstep to the new location. Each vehicle is secured with wheel straps, photographed at pickup and at delivery, and tracked through the journey. We handle everything from luxury sedans to SUVs.",
    benefits: ["Single & multi-car carriers", "Door-to-door delivery", "Pre & post photo inspection", "Insurance coverage", "Pan-India network"],
    process: ["Free car inspection", "Pickup & secure loading", "Transit with GPS tracking", "Delivery photo report", "Vehicle handover"],
  },
];

function Services() {
  return (
    <>
      <section className="bg-gradient-navy text-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">Our Services</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl text-white text-balance">Complete Relocation Services in Hyderabad</h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/80">From single-item shifting to full home and office relocations — Vihari handles every move with the same premium standards.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="tel:+919676665549" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-secondary shadow-gold">
              <Phone className="h-4 w-4" /> +91 96766 65549
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/30 px-6 py-3 text-sm font-semibold text-white">
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <nav aria-label="Services" className="border-b border-border bg-white sticky top-[68px] z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex gap-2 overflow-x-auto py-3 text-sm">
          {SERVICES.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="whitespace-nowrap px-3 py-1.5 rounded-full bg-muted text-secondary hover:bg-primary hover:text-secondary transition font-medium">{s.title}</a>
          ))}
        </div>
      </nav>

      {SERVICES.map((s, idx) => (
        <section key={s.id} id={s.id} className={`py-20 ${idx % 2 === 0 ? "bg-white" : "bg-muted/40"}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className={idx % 2 === 0 ? "" : "lg:order-2"}>
              <img src={s.img} alt={`${s.title} by Vihari Packers and Movers Hyderabad`} loading="lazy" className="rounded-2xl shadow-elegant w-full aspect-[4/3] object-cover" />
            </div>
            <div className={idx % 2 === 0 ? "" : "lg:order-1"}>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">{s.title}</span>
              <h2 className="mt-3 font-display text-3xl text-secondary">{s.title} in Hyderabad</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.overview}</p>

              <h3 className="mt-6 font-display text-lg text-secondary">Key Benefits</h3>
              <ul className="mt-2 grid sm:grid-cols-2 gap-2">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-secondary/80"><CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" />{b}</li>
                ))}
              </ul>

              <h3 className="mt-6 font-display text-lg text-secondary">How It Works</h3>
              <ol className="mt-2 space-y-2">
                {s.process.map((p, i) => (
                  <li key={p} className="flex gap-3 text-sm text-secondary/80">
                    <span className="h-6 w-6 rounded-full bg-gradient-gold grid place-items-center font-display font-extrabold text-secondary text-xs shrink-0">{i + 1}</span>
                    {p}
                  </li>
                ))}
              </ol>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="tel:+919676665549" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white"><Phone className="h-4 w-4" /> Call Now</a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-secondary shadow-gold">Get Quote <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
