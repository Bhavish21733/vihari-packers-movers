import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import sHome from "../assets/service-home.jpg";
import sOffice from "../assets/service-office.jpg";
import sCar from "../assets/service-car.jpg";
import sTransport from "../assets/service-transport.jpg";
import gFurniture from "../assets/gallery-furniture.jpg";
import gFridge from "../assets/gallery-fridge.jpg";
import gWash from "../assets/gallery-washing.jpg";
import gLoading from "../assets/gallery-loading.jpg";
import hero from "../assets/hero-loading.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Vihari Packers and Movers Hyderabad" },
      { name: "description", content: "Photo gallery of Vihari Packers and Movers Hyderabad — furniture packing, refrigerator wrapping, household loading and moving truck fleet." },
      { property: "og:title", content: "Photo Gallery — Vihari Packers and Movers Hyderabad" },
      { property: "og:description", content: "See real photos of our packing, loading and relocation work across Hyderabad." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const IMAGES = [
  { src: gFurniture, alt: "Vihari packers wrapping dining table furniture" },
  { src: gFridge, alt: "Refrigerator packing service Hyderabad" },
  { src: gWash, alt: "Washing machine wrapping service Hyderabad" },
  { src: gLoading, alt: "Movers carrying boxes up stairs" },
  { src: hero, alt: "Loading furniture into a moving truck in Hyderabad" },
  { src: sHome, alt: "Household sofa wrapping for relocation" },
  { src: sOffice, alt: "Office relocation packing in Hyderabad" },
  { src: sCar, alt: "Car loading on enclosed car carrier" },
  { src: sTransport, alt: "Vihari Packers and Movers truck fleet" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <section className="bg-gradient-navy text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl text-white">Our Work in Pictures</h1>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Real moves, real customers, real results from across Hyderabad.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {IMAGES.map((img, i) => (
              <button key={i} onClick={() => setOpen(i)} className="mb-4 block w-full break-inside-avoid rounded-2xl overflow-hidden group relative">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition" />
              </button>
            ))}
          </div>
        </div>
      </section>
      {open !== null && (
        <div className="fixed inset-0 z-[60] bg-black/90 grid place-items-center p-4" onClick={() => setOpen(null)}>
          <button aria-label="Close" className="absolute top-5 right-5 h-10 w-10 grid place-items-center rounded-full bg-white text-secondary"><X className="h-5 w-5" /></button>
          <img src={IMAGES[open].src} alt={IMAGES[open].alt} className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl" />
        </div>
      )}
    </>
  );
}
