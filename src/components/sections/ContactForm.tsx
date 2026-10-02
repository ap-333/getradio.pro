import { useState, type FormEvent } from "react";
import { Button } from "@/components/ActionButton";
import { SERVICES } from "@/data/services";

const field =
  "w-full border border-input bg-surface/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-300 focus:border-primary focus:bg-surface focus:shadow-[0_0_0_3px_var(--ring)] rounded-xs";
const label =
  "block font-display text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="glass-plate p-10 text-center">
        <p className="eyebrow justify-center">Request received</p>
        <h3 className="display mt-4 text-3xl sm:text-4xl">We’ll activate you shortly.</h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thanks — a subscription specialist will confirm your vehicle and radio details and get
          back to you within one business day. Keep your radio ID handy for fastest activation.
        </p>
        <Button variant="outline" className="mt-8" onClick={() => setSent(false)}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-plate p-6 sm:p-10">
      <div className="mb-8 border-b border-border/60 pb-6">
        <h3 className="display text-2xl sm:text-3xl">Activate your in-car radio.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          New activation, renewal or transfer — tell us about your vehicle and we’ll handle the
          rest.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={label} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Full name"
            className={`${field} mt-2`}
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 000-0000"
            className={`${field} mt-2`}
          />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            className={`${field} mt-2`}
          />
        </div>
        <div>
          <label className={label} htmlFor="make">
            Vehicle Make
          </label>
          <input id="make" name="make" placeholder="Toyota" className={`${field} mt-2`} />
        </div>
        <div>
          <label className={label} htmlFor="model">
            Vehicle Model
          </label>
          <input id="model" name="model" placeholder="Tacoma" className={`${field} mt-2}`} />
        </div>
        <div>
          <label className={label} htmlFor="year">
            Vehicle Year
          </label>
          <input
            id="year"
            name="year"
            inputMode="numeric"
            placeholder="2019"
            className={`${field} mt-2}`}
          />
        </div>
        <div>
          <label className={label} htmlFor="service">
            Subscription Needed
          </label>
          <select id="service" name="service" defaultValue="" className={`${field} mt-2`}>
            <option value="" disabled>
              Select a plan
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="radio-id">
            Radio ID{" "}
            <span className="normal-case tracking-normal">(optional, speeds activation)</span>
          </label>
          <input
            id="radio-id"
            name="radio-id"
            placeholder="e.g. Tune to Ch. 0 to find your Radio ID"
            className={`${field} mt-2`}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Is this a new activation, renewal, or transfer? Anything showing on your radio display?"
            className={`${field} mt-2 resize-none`}
          />
        </div>
      </div>
      <Button type="submit" className="mt-8 w-full sm:w-auto">
        Request Activation
      </Button>
      <p className="mt-4 text-xs text-muted-foreground">
        No new hardware needed. Works with most factory-equipped satellite radios.
      </p>
    </form>
  );
}
