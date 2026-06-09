import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ArrowRight } from "lucide-react";
import sHome from "../assets/service-home.jpg";
import sOffice from "../assets/service-office.jpg";
import sCar from "../assets/service-car.jpg";
import gFurniture from "../assets/gallery-furniture.jpg";
import gLoading from "../assets/gallery-loading.jpg";
import sTransport from "../assets/service-transport.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Moving & Relocation Blog | Vihari Packers and Movers Hyderabad" },
      { name: "description", content: "Expert moving tips, checklists and guides from Hyderabad's trusted packers and movers — house shifting cost, packing tips, office relocation guide, car transportation and more." },
      { property: "og:title", content: "Moving Blog — Vihari Packers and Movers" },
      { property: "og:description", content: "Tips, checklists and city guides to make your next move stress-free." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const POSTS = [
  { t: "Best Packers and Movers in Hyderabad: How to Choose the Right One", d: "Everything you need to check before hiring a mover in Hyderabad — credentials, reviews, pricing transparency and on-site survey.", img: sHome, date: "Jun 2026" },
  { t: "House Shifting Cost in Hyderabad: A Complete 2026 Price Guide", d: "Detailed breakdown of 1BHK, 2BHK, 3BHK and villa moving costs in Hyderabad with hidden charges to watch out for.", img: gFurniture, date: "May 2026" },
  { t: "The Ultimate Moving Checklist: 8 Weeks to Move Day", d: "A printable week-by-week checklist covering everything from utility transfers to packing your essentials box.", img: gLoading, date: "May 2026" },
  { t: "Packing Tips for Safe Relocation: Pro Tricks from Our Team", d: "How to pack glass, electronics, mattresses, books and fragile decor like professional packers.", img: gFurniture, date: "Apr 2026" },
  { t: "Office Relocation Guide: Move Without Losing a Workday", d: "Plan a zero-downtime office shift with phased packing, IT readiness and weekend execution.", img: sOffice, date: "Apr 2026" },
  { t: "Car Transportation in India: Open vs Enclosed Carriers Explained", d: "Which carrier is right for your car, expected costs, insurance and how delivery timelines work.", img: sCar, date: "Mar 2026" },
  { t: "Moving During Monsoon Season in Hyderabad: 10 Smart Tips", d: "Protect your goods, schedule wisely and pick the right packing materials for rainy-season moves.", img: sTransport, date: "Mar 2026" },
  { t: "How to Choose the Right Packers and Movers: 12-Point Checklist", d: "Use this checklist to compare quotes, verify experience and avoid scams when hiring movers.", img: sHome, date: "Feb 2026" },
];

function Blog() {
  return (
    <>
      <section className="bg-gradient-navy text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl text-white">Moving Tips & Guides</h1>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Practical advice from Hyderabad's most trusted packers and movers.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((p) => (
            <article key={p.t} className="group rounded-2xl overflow-hidden bg-white shadow-elegant hover:-translate-y-1 transition-transform">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5" />{p.date}</div>
                <h2 className="mt-2 font-display text-lg text-secondary leading-snug">{p.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.d}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
