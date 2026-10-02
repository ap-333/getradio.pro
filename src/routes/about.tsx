import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ActionButton";
import workshop from "@/assets/workshop.jpg";
import install from "@/assets/install.jpg";
import audio from "@/assets/audio.jpg";
import carplay from "@/assets/carplay.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Get Radio Pro - In-Car Subscription Specialists" },
      {
        name: "description",
        content:
          "We help vehicle owners activate and keep premium satellite radio. No hardware, no hassle — just every channel, live support and fast activation.",
      },
      { property: "og:title", content: "About Get Radio Pro" },
      {
        property: "og:description",
        content:
          "Subscription-first specialists for in-car satellite radio. Activation, renewal and support.",
      },
    ],
  }),
  component: About,
});

const STATS = [
  ["12", "Years serving drivers"],
  ["48k+", "Radios activated"],
  ["48", "Vehicle brands supported"],
  ["4.9", "Average driver rating"],
];

const PRINCIPLES = [
  {
    title: "Your factory radio is enough",
    body: "If your dash already has a satellite button or a radio ID on Channel 0, you don't need new equipment. We activate what the manufacturer built in — clean, instant, and reversible.",
    image: install,
    alt: "Car dashboard with factory satellite radio active",
  },
  {
    title: "Subscriptions, handled for you",
    body: "Radio IDs, signal refreshes, renewals, transfers between vehicles — the paperwork nobody wants to do. That's our entire job, and we do it live with you on the line.",
    image: carplay,
    alt: "Driver enjoying activated satellite channels",
  },
  {
    title: "Support that answers",
    body: "Missing channels, no signal, new used car with a locked radio? Real specialists who know vehicle radios walk you through it in minutes, not days of hold music.",
    image: audio,
    alt: "Premium in-car listening experience",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            Radio lovers,
            <br />
            for <span className="text-primary">drivers.</span>
          </>
        }
        lead="Get Radio Pro started with one frustration: great cars with dead satellite buttons. We built a concierge to switch them on and keep them on."
        image={workshop}
        alt="Get Radio Pro specialists helping drivers activate car radio"
        overlay="side"
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow">Est. 2014</p>
            <h2 className="display mt-6 text-4xl sm:text-5xl">
              We close the gap between
              <br />
              your car and every channel.
            </h2>
            <div className="mt-8">
              <ButtonLink to="/contact" variant="outline">
                Activate My Vehicle
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Millions of cars, trucks and SUVs left the factory with a satellite tuner inside. Most
              second owners never activate it — they see “Check Tuner” or “No Signal” and assume
              they need new hardware.
            </p>
            <p>
              You usually don’t. Tune to Channel 0, read the radio ID, and that’s the key to 150+
              channels of ad-free music, live play-by-play, breaking news, comedy and talk. We link
              that ID to a premium vehicle subscription and send the activation signal while you’re
              still parked.
            </p>
            <p>
              Today we support activations, renewals, used-car reactivations and multi-vehicle
              households nationwide — with live help when your display doesn’t cooperate.
            </p>
          </Reveal>
        </div>

        <ul className="mt-20 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(([n, l], i) => (
            <Reveal as="li" key={l} delay={i * 90} className="bg-background">
              <div className="premium-card p-8 hover:bg-surface lg:p-10">
                <p className="display text-5xl text-primary lg:text-6xl">{n}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  {l}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                Three promises for
                <br />
                <span className="text-primary">every driver.</span>
              </>
            }
          />
          <div className="mt-16 space-y-14 lg:space-y-24">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal
                  className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2 lg:col-start-6" : ""}`}
                >
                  <div className="group relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      width={1440}
                      height={1088}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 border border-border" />
                  </div>
                </Reveal>
                <Reveal delay={120} className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="font-display text-xs tracking-[0.3em] text-primary">
                    0{i + 1}
                  </span>
                  <h3 className="display mt-4 text-3xl sm:text-4xl">{p.title}</h3>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">{p.body}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Switch Yours On."
        lead="Send your make, model, year and radio ID — we'll confirm compatibility and activate you in minutes."
        label="Activate Now"
      />
    </>
  );
}
