type GtagCommand = "js" | "config" | "event";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: GtagCommand, ...args: unknown[]) => void;
  }
}

export const GOOGLE_ADS_CONVERSION_ID = "AW-18447746734/D9-_CK7F-I0dEK6NydxE";

/**
 * Event snippet for Website sale conversion.
 * Fires only when a real conversion happens (e.g. activation form submitted),
 * NOT on page load — calling it globally would count every pageview as a sale.
 */
export function reportSaleConversion(transactionId = ""): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_CONVERSION_ID,
    transaction_id: transactionId,
  });
}
