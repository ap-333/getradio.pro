import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/data/contact";
import install from "@/assets/install.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Activate Now - Get Radio Pro Satellite Subscriptions" },
      {
        name: "description",
        content:
          "Activate or renew premium satellite radio for your vehicle. Send make, model, year and radio ID for fastest activation.",
      },
      { property: "og:title", content: "Activate Your Car Radio - Get Radio Pro" },
      {
        property: "og:description",
        content: "New activations, renewals and transfers in minutes. No new hardware.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Activate in Minutes"
        title={
          <>
            Switch On
            <br />
            Your <span className="text-primary">Radio.</span>
          </>
        }
        lead="Send your vehicle + radio ID and we'll link a premium subscription and send your activation signal. Most cars are live the same day."
        image={install}
        alt="Car dashboard ready for satellite radio activation"
        overlay="side"
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={140} className="space-y-10">
            <div>
              <p className="eyebrow">Prefer to call?</p>
              <h2 className="display mt-4 text-3xl sm:text-4xl">Faster by phone.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Sit in your vehicle, tune to Ch. 0 to see your radio ID, then call. We activate live
                while you stay parked with a clear view of the sky.
              </p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="display mt-6 inline-block bg-primary px-6 py-4 text-2xl text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[var(--shadow-glow)]"
              >
                {CONTACT.phone}
              </a>
            </div>

            <ul className="space-y-px overflow-hidden border border-border bg-border">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: CONTACT.phone,
                  href: `tel:${CONTACT.phoneRaw}`,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: CONTACT.email,
                  href: `mailto:${CONTACT.email}`,
                },
                { icon: MapPin, label: "Base", value: `${CONTACT.address}, ${CONTACT.city}` },
              ].map((item) => (
                <li key={item.label} className="bg-background">
                  <div className="flex gap-4 p-6">
                    <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div className="min-w-0">
                      <p className="font-display text-xs uppercase tracking-[0.24em] text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block break-words text-base text-foreground transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-base text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="glass-plate p-6">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <p className="font-display text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Support hours
                </p>
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {CONTACT.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between gap-4 border-b border-border/60 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-border/60 pt-4 text-xs leading-relaxed text-muted-foreground">
                Tip: For fastest help, include your radio ID (Ch. 0) and what your display shows now
                — “Preview”, “No Signal” or “Check Tuner”.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
