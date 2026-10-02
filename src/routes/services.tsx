import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/Hero";
import { ServiceShowcase } from "@/components/sections/ServiceShowcase";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/Reveal";
import { SERVICES } from "@/data/services";
import carplay from "@/assets/carplay.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Plans & Services - In-Car Satellite Subscriptions | Get Radio Pro" },
      {
        name: "description",
        content:
          "New activations, renewals, transfers, family bundles and signal support for in-car satellite radio. No new hardware.",
      },
      { property: "og:title", content: "Get Radio Pro Plans" },
      {
        property: "og:description",
        content: "Eight subscription paths for your factory car radio — activated in minutes.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Plans & Services"
        title={
          <>
            One radio.
            <br />
            <span className="text-primary">Every possibility.</span>
          </>
        }
        lead="Eight subscription paths for the radio you already own. Mix activation, renewal, transfer or support — all live in minutes, no shop visit."
        image={carplay}
        alt="Car display with premium satellite channels active"
        overlay="side"
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-px border-x border-border bg-border px-0 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["~10 min", "Typical activation"],
            ["150+", "Channels unlocked"],
            ["$0", "Hardware required"],
            ["Live", "Human support"],
          ].map(([n, l], i) => (
            <Reveal key={l} delay={i * 80} className="bg-background">
              <div className="px-6 py-8 sm:px-8">
                <p className="display text-3xl text-primary">{n}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {l}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="divide-y divide-border">
        {SERVICES.map((s, i) => (
          <ServiceShowcase key={s.slug} service={s} flip={i % 2 === 1} />
        ))}
      </div>

      <CTASection
        title="Not Sure What You Need?"
        lead="Send your make, model, year and what your radio shows now. We'll tell you if it's new, expired, or ready for transfer."
        label="Check My Radio"
      />
    </>
  );
}
