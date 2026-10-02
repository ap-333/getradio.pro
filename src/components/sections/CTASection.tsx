import { ButtonLink } from "@/components/ActionButton";
import { Reveal } from "@/components/Reveal";
import nightDrive from "@/assets/night-drive.jpg";

export function CTASection({
  title = "Your Radio Deserves Every Channel.",
  lead = "Activate premium in-car satellite radio in minutes — keep your factory radio, unlock 150+ channels, and drive with music, sports, news and talk that never fades.",
  label = "Activate Now",
}: {
  title?: string;
  lead?: string;
  label?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={nightDrive}
        alt="Night drive with premium satellite radio playing"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-background/80 backdrop-blur-[2px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_100%,oklch(0.8_0.165_68/0.22),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1400px] px-5 py-24 text-center sm:px-8 lg:py-36">
        <Reveal>
          <p className="eyebrow justify-center">Ready when you are — activation in minutes</p>
          <h2 className="display mx-auto mt-6 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)]">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">{lead}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink to="/contact">{label}</ButtonLink>
            <ButtonLink to="/services" variant="outline">
              View Plans
            </ButtonLink>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground">
            No new hardware · Works with factory radio · Live support
          </p>
        </Reveal>
      </div>
    </section>
  );
}
