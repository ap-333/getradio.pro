import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, Radio, RefreshCw, Zap } from "lucide-react";
import { PageHero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { ButtonLink } from "@/components/ActionButton";
import { PhoneCallDialog } from "@/components/PhoneDialog";
import { Reveal } from "@/components/Reveal";
import { SERVICES } from "@/data/services";
import { CONTACT } from "@/data/contact";
import hero from "@/assets/hero-dashboard.jpg";
import workshop from "@/assets/workshop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Get Radio Pro - In-Car Satellite Radio Subscriptions" },
      {
        name: "description",
        content:
          "Activate premium satellite radio in your vehicle in minutes. New activations, renewals & transfers with your factory radio. 150+ channels.",
      },
      { property: "og:title", content: "Get Radio Pro - Your Radio, Every Channel" },
      {
        property: "og:description",
        content:
          "Premium in-car satellite subscriptions. Instant activation, no new hardware, live U.S. support.",
      },
    ],
  }),
  component: Home,
});

const VALUES = [
  {
    icon: Zap,
    title: "Activation in Minutes",
    body: "Call with your radio ID and we light up every channel live — most vehicles are listening before you hang up. No dealer, no appointment.",
  },
  {
    icon: Radio,
    title: "Keep Your Factory Radio",
    body: "No new screen, no rewiring, no dash removal. Your subscription works with the satellite radio already built into your car, truck or SUV.",
  },
  {
    icon: RefreshCw,
    title: "Renewals & Transfers",
    body: "Expired service, new-to-you used car, or a new vehicle? We refresh signals, reactivate IDs and move plans between vehicles same-day.",
  },
  {
    icon: BadgeCheck,
    title: "Real Human Support",
    body: "Find your radio ID, fix ‘no signal’, understand channels and plans — talk to a specialist who does vehicle subscriptions all day.",
  },
];

function Home() {
  return (
    <>
      <PhoneCallDialog />
      <PageHero
        height="full"
        eyebrow="In-Car Satellite Radio · Activation · Renewal"
        title={
          <>
            Your Radio,
            <br />
            <span className="text-primary">Every Channel.</span>
          </>
        }
        lead="Premium satellite subscriptions for vehicle owners. Keep your factory radio and unlock 150+ channels of ad-free music, live sports, breaking news and talk — activated in minutes."
        image={hero}
        alt="Premium car interior at night with satellite radio playing"
        actions={
          <>
            <ButtonLink to="/contact">Activate Now</ButtonLink>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="group relative inline-flex items-center justify-center gap-2 font-display uppercase tracking-[0.16em] text-sm font-semibold px-7 py-4 rounded-xs transition-all duration-300 border border-border text-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5 bg-background/40 backdrop-blur-md"
            >
              Call {CONTACT.phone}
            </a>
          </>
        }
      >
        <div className="pointer-events-none mt-14 hidden max-w-2xl items-end gap-5 md:flex">
          <div className="glass-plate flex items-center gap-5 px-6 py-4" aria-hidden="true">
            <div className="flex items-end gap-1.5">
              {[0.2, 0.5, 0.9, 0.4, 0.7, 1, 0.35, 0.6].map((h, i) => (
                <span
                  key={i}
                  className="wave-bar w-1.5 bg-primary"
                  style={{ height: `${h * 34 + 8}px`, animationDelay: `${i * 0.11}s` }}
                />
              ))}
            </div>
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Now Playing
              </p>
              <p className="display mt-1 text-2xl">
                150+ <span className="text-primary">Channels Live</span>
              </p>
            </div>
          </div>
          <div className="glass-plate relative overflow-hidden px-6 py-4">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Activation
            </p>
            <p className="display mt-1 text-2xl">
              ~10 <span className="text-primary">Mins</span>
            </p>
            <span className="sweep-line absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
          </div>
          <div className="glass-plate px-6 py-4">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Hardware
            </p>
            <p className="display mt-1 text-2xl">
              None <span className="text-primary">Needed</span>
            </p>
          </div>
        </div>
      </PageHero>

      {/* Trust strip */}
      <section className="border-b border-border bg-background/60 backdrop-blur-sm">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px px-0 sm:grid-cols-4">
          {[
            ["150+", "Channels in your car"],
            ["~10 min", "Typical activation"],
            ["$0", "Hardware to install"],
            ["Live", "U.S. specialists"],
          ].map(([n, l], i) => (
            <Reveal key={l} delay={i * 80}>
              <div className="px-6 py-7 text-center sm:px-8">
                <p className="display text-3xl text-primary sm:text-4xl">{n}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {l}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Get Radio Pro */}
      <section className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Why Get Radio Pro"
          title={
            <>
              Built for drivers
              <br />
              <span className="text-primary">who live in their cars.</span>
            </>
          }
          lead="Most vehicles on the road already have a satellite radio inside — it's just not active. We switch it on, keep it on, and make it effortless."
        />

        <ul className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 90} className="bg-background">
              <div className="premium-card group flex h-full flex-col gap-5 p-8 hover:bg-surface lg:p-12">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center border border-primary/30 bg-primary/10">
                    <v.icon className="h-6 w-6 shrink-0 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
                  </span>
                  <span className="font-display text-xs tracking-[0.3em] text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="display text-2xl sm:text-3xl">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
          <SectionHeading
            eyebrow="How activation works"
            title={
              <>
                Listening in
                <br />
                three smooth steps.
              </>
            }
            lead="No tools, no shop visit. Just your car, your radio, and a short call or message."
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {[
              [
                "01",
                "Tell us your vehicle",
                "Make, model, year + whether it's new, expired or a transfer. We'll confirm compatibility instantly.",
              ],
              [
                "02",
                "Share your Radio ID",
                "Tune to Ch. 0 to see it on your display. We link it to a fresh premium subscription.",
              ],
              [
                "03",
                "We send the signal",
                "Park with clear sky view for a few minutes. Channels flood in — music, sports, news, talk.",
              ],
            ].map(([n, t, b], i) => (
              <Reveal key={n} delay={i * 110} className="bg-background">
                <div className="premium-card h-full p-8 hover:bg-surface lg:p-10">
                  <p className="display text-5xl text-primary/90">{n}</p>
                  <h3 className="display mt-5 text-2xl">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150} className="mt-10 flex flex-wrap gap-4">
            <ButtonLink to="/contact">Start Activation</ButtonLink>
            <ButtonLink to="/services" variant="outline">
              View Plans <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* Featured services */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-end">
          <SectionHeading
            eyebrow="Subscriptions & Support"
            title={
              <>
                Everything for your
                <br />
                in-car listening.
              </>
            }
            lead="New plans, renewals, transfers and live signal help — all for the radio you already own."
          />
          <Reveal delay={100} className="lg:justify-self-end">
            <ButtonLink to="/services" variant="outline">
              All Plans <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 100} className="bg-background">
              <Link
                to="/services"
                className="group relative flex h-full min-h-[360px] flex-col justify-end overflow-hidden"
              >
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  width={1440}
                  height={1088}
                  className="absolute inset-0 h-full w-full object-cover opacity-50 transition-all duration-[1400ms] ease-out group-hover:scale-110 group-hover:opacity-75"
                />
                <div className="veil absolute inset-0" aria-hidden="true" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative p-8">
                  <span className="font-display text-xs tracking-[0.3em] text-primary">
                    {s.index}
                  </span>
                  <h3 className="display mt-3 text-2xl sm:text-3xl">{s.title}</h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-muted-foreground opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                    {s.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience section */}
      <section className="relative isolate overflow-hidden">
        <img
          src={workshop}
          alt="Driver enjoying coast-to-coast satellite coverage"
          loading="lazy"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="veil-side absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-40">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">The Difference</p>
            <h2 className="display mt-6 text-[clamp(2.25rem,6vw,4.75rem)]">
              From silent presets
              <br />
              to a <span className="text-primary">coast-to-coast soundtrack.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
              FM fades outside the city. Your phone eats data and drops in dead zones. An active
              in-car satellite subscription just plays — tunnel to desert, commute to cross-country
              — with DJs, games, breaking news and talk that ride with you.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
              {[
                ["Before", "Dead satellite button, FM static, phone plugged in for music"],
                ["Activation", "Radio ID linked, live signal sent, channels unlock in minutes"],
                ["After", "150+ channels, no buffering, no pairing, just drive"],
              ].map(([k, v]) => (
                <div key={k} className="bg-background/90 p-6 backdrop-blur-md">
                  <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">
                    {k}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink to="/contact">Activate My Radio</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
