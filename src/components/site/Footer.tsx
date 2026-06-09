import { Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import logo from "../../assets/logowhite.png";

export function Footer() {
  return (
    <footer className="bg-gradient-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Company Info */}
        <div>
          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt="Vihari Packers and Movers"
              className="h-20 w-auto object-contain mb-4"
            />
          </Link>

          <p className="text-sm text-white/70 leading-relaxed">
            Trusted relocation experts in Hyderabad — safe packing,
            reliable transportation and hassle-free home & office
            shifting across India.
          </p>

          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-primary hover:text-secondary transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-extrabold text-white text-base mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm text-white/70">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/gallery", "Gallery"],
              ["/blog", "Blog"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-primary transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-extrabold text-white text-base mb-4">
            Our Services
          </h4>

          <ul className="space-y-2 text-sm text-white/70">
            {[
              "Home Relocation",
              "Office Shifting",
              "Packing & Moving",
              "Loading & Unloading",
              "Goods Transportation",
              "Car Transportation",
            ].map((service) => (
              <li key={service}>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-extrabold text-white text-base mb-4">
            Contact Us
          </h4>

          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 mt-0.5 text-primary shrink-0" />
              <span>
                2-6-101, Eshwaripuri Colony,
                Jaipuri Colony, Bandlaguda,
                Nagole, Hyderabad,
                Telangana 500068
              </span>
            </li>

            <li className="flex gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <a
                href="tel:+919676665549"
                className="hover:text-primary transition-colors"
              >
                +91 96766 65549
              </a>
            </li>

            <li className="flex gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <a
                href="mailto:info@viharipackers.com"
                className="hover:text-primary transition-colors"
              >
                info@viharipackers.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} Vihari Packers and Movers.
            All Rights Reserved.
          </p>

          <div className="flex gap-4">
            <Link
              to="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}