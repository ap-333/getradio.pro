import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { SERVICES } from "@/data/services";
import { CONTACT } from "@/data/contact";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Get Radio Pro activates premium in-car satellite radio for everyday drivers — instant
            activation, easy renewals, and 150+ channels with your factory radio. No new hardware.
          </p>
          <div className="mt-7 flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social profile"
                className="flex h-10 w-10 items-center justify-center border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-foreground">
            Navigate
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-foreground">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="transition-colors hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-foreground">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-primary">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Get Radio Pro. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
