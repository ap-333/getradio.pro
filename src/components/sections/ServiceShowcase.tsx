import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ActionButton";
import type { Service } from "@/data/services";

export function ServiceShowcase({ service, flip }: { service: Service; flip: boolean }) {
  return (
    <article className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-24">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <div className="group relative overflow-hidden">
          <img
            src={service.image}
            alt={service.alt}
            loading="lazy"
            width={1440}
            height={1088}
            className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 border border-border" />
          <span className="display absolute left-0 top-0 bg-primary px-4 py-2 text-xl text-primary-foreground">
            {service.index}
          </span>
        </div>
      </Reveal>

      <Reveal delay={120} className={flip ? "lg:order-1" : ""}>
        <h3 className="display text-3xl sm:text-4xl lg:text-5xl">{service.title}</h3>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{service.summary}</p>
        <ul className="mt-7 space-y-3">
          {service.benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {b}
            </li>
          ))}
        </ul>
        <ButtonLink to="/contact" variant="outline" className="mt-9">
          Activate This Plan <ArrowUpRight className="h-4 w-4" />
        </ButtonLink>
      </Reveal>
    </article>
  );
}
