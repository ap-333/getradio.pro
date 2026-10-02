import { useState, useEffect } from "react";
import { Phone, Radio } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CONTACT } from "@/data/contact";

export function PhoneCallDialog() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const hasSeenDialog = sessionStorage.getItem("phoneDialogSeen");
    if (hasSeenDialog) {
      setOpen(false);
    } else {
      const t = setTimeout(() => setOpen(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("phoneDialogSeen", "true");
  };

  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `tel:${CONTACT.phoneRaw}`;
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="border-primary/20 bg-background/95 backdrop-blur-2xl sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground">
              <Radio className="h-5 w-5" />
            </span>
            Activate Your Car Radio
          </DialogTitle>
          <DialogDescription>
            Premium in-car satellite subscription — activated in minutes with your factory radio.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="border border-border bg-surface/50 p-6 text-center">
            <p className="mb-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Call a specialist now
            </p>
            <p className="font-display text-2xl font-semibold text-primary sm:text-3xl">
              {CONTACT.phone}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              New activations · Renewals · Transfers
            </p>
          </div>
          <div className="space-y-3">
            <button
              onClick={handleCall}
              className="inline-flex w-full items-center justify-center gap-2 font-display uppercase tracking-[0.16em] text-sm font-semibold px-7 py-4 rounded-xs transition-all duration-300 bg-primary text-primary-foreground hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
            >
              <Phone className="h-4 w-4" />
              Call to Activate
            </button>
          </div>
          <div className="text-center text-xs text-muted-foreground">
            <p>Monday – Friday: 8:00 – 18:00</p>
            <p>Saturday: 9:00 – 15:00</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
