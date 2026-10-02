import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const REVIEWS = [
  {
    name: "Marcus Whelan",
    vehicle: "2016 Toyota Tacoma",
    quote:
      "My truck already had the satellite button but it was dead when I bought it used. Called in the morning, they activated my radio ID and I had every channel by lunch.",
  },
  {
    name: "Priya Raman",
    vehicle: "2019 Honda Pilot",
    quote:
      "Renewal was painless. They refreshed my signal live on the phone and walked me through finding my radio ID. Kids get their music, I get news and talk.",
  },
  {
    name: "Dev Karlsson",
    vehicle: "2018 Ford F-150",
    quote:
      "Transferred my subscription from my old truck to the new one in one call. No dealer, no new equipment, just working radio coast to coast on my route.",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Driver Reviews"
          title={
            <>
              Activated in minutes,
              <br />
              <span className="text-primary">loved for every mile.</span>
            </>
          }
          lead="Real vehicle owners who activated or renewed their in-car satellite subscription with Get Radio Pro."
        />
        <ul className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal as="li" key={r.name} delay={i * 110} className="bg-background">
              <div className="premium-card flex h-full flex-col p-8 hover:bg-surface lg:p-10">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-6 flex-1 text-base leading-relaxed text-foreground/85">
                  “{r.quote}”
                </p>
                <div className="mt-8 border-t border-border pt-5">
                  <p className="font-display text-lg font-semibold uppercase tracking-wide">
                    {r.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {r.vehicle} · Verified subscription
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
