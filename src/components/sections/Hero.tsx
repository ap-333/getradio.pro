import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
  actions,
  height = "tall",
  overlay = "veil",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  image: string;
  alt: string;
  actions?: ReactNode;
  height?: "tall" | "full";
  overlay?: "veil" | "side";
  children?: ReactNode;
}) {
  return (
    <section
      className={`relative isolate flex items-end overflow-hidden ${
        height === "full" ? "min-h-[96svh]" : "min-h-[76svh]"
      }`}
    >
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover"
      />
      <div
        className={`absolute inset-0 -z-10 ${overlay === "veil" ? "veil" : "veil-side"}`}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_20%_80%,oklch(0.8_0.165_68/0.14),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 hairline-grid opacity-30" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 pt-36 sm:px-8 sm:pb-24 lg:pb-28">
        <div className="max-w-4xl">
          {eyebrow && (
            <p className="eyebrow animate-fade-in flex items-center gap-3">
              <span className="h-px w-10 bg-primary shadow-[0_0_12px_var(--color-primary)]" />
              {eyebrow}
            </p>
          )}
          <h1 className="display animate-fade-in-delay-1 mt-6 text-[clamp(2.75rem,9vw,7.5rem)] drop-shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            {title}
          </h1>
          {lead && (
            <p className="animate-fade-in-delay-2 mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              {lead}
            </p>
          )}
          {actions && (
            <div className="animate-fade-in-delay-2 mt-9 flex flex-wrap gap-4">{actions}</div>
          )}
        </div>
        {children}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
