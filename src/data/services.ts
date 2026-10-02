import dashboard from "@/assets/hero-dashboard.jpg";
import install from "@/assets/install.jpg";
import carplay from "@/assets/carplay.jpg";
import audio from "@/assets/audio.jpg";
import camera from "@/assets/camera.jpg";
import nightDrive from "@/assets/night-drive.jpg";
import workshop from "@/assets/workshop.jpg";

export type Service = {
  slug: string;
  title: string;
  index: string;
  summary: string;
  benefits: string[];
  image: string;
  alt: string;
};

export const SERVICES: Service[] = [
  {
    slug: "new-activation",
    title: "New Vehicle Activation",
    index: "01",
    summary:
      "First-time premium satellite subscription for your car, truck or SUV. We link your factory radio ID and light up every channel in minutes.",
    benefits: ["Activation in minutes", "Works with factory radio", "All channels unlocked"],
    image: dashboard,
    alt: "Modern car dashboard with satellite radio display active",
  },
  {
    slug: "renewal-reactivation",
    title: "Renewal & Reactivation",
    index: "02",
    summary:
      "Lapsed or expired in-car radio service? We refresh your signal, reactivate your radio ID and restore full-channel access without a dealer visit.",
    benefits: ["Instant signal refresh", "Keep same radio ID", "No hardware change"],
    image: install,
    alt: "Specialist activating in-car satellite radio service",
  },
  {
    slug: "monthly-flex-plans",
    title: "Flexible Monthly Plans",
    index: "03",
    summary:
      "Simple month-to-month in-vehicle listening. Music, sports, news, talk and comedy with the freedom to pause or change as your driving changes.",
    benefits: ["Month-to-month freedom", "Full channel lineup", "Pause anytime support"],
    image: carplay,
    alt: "Driver enjoying premium satellite channels on the road",
  },
  {
    slug: "transfer-vehicle",
    title: "Move With Your Vehicle",
    index: "04",
    summary:
      "Sold your car or bought a new one? We transfer your vehicle subscription to your new radio ID so you never lose your channels.",
    benefits: ["Radio ID transfer", "Same-day move", "Zero downtime"],
    image: nightDrive,
    alt: "Car driving at night with satellite radio playing",
  },
  {
    slug: "music-sports-talk",
    title: "Every Channel, Every Drive",
    index: "05",
    summary:
      "Over 150 channels engineered for the road: ad-free music, live sports play-by-play, breaking news, talk, comedy and exclusive artist stations.",
    benefits: ["150+ channels", "Ad-free music", "Live sports & news"],
    image: audio,
    alt: "Premium in-car sound with full satellite channel lineup",
  },
  {
    slug: "fleet-multi-vehicle",
    title: "Family & Fleet Coverage",
    index: "06",
    summary:
      "Multiple cars, trucks or work vehicles? Bundle every factory radio under one simple account with one renewal date and one support line.",
    benefits: ["Multi-vehicle bundling", "One renewal date", "Priority support line"],
    image: camera,
    alt: "Multiple vehicles covered under one satellite radio account",
  },
  {
    slug: "signal-support",
    title: "Signal & Radio ID Help",
    index: "07",
    summary:
      "Missing channels, ‘no signal’ or new radio showing an ID screen? We locate your radio ID and send a live refresh to restore sound fast.",
    benefits: ["Radio ID lookup help", "Live signal refresh", "Real human support"],
    image: workshop,
    alt: "Support specialist helping restore vehicle radio signal",
  },
  {
    slug: "activation-support",
    title: "Concierge Activation Support",
    index: "08",
    summary:
      "Talk to a real specialist who handles the whole subscription for you — lookup, activation, renewal reminders and channel setup.",
    benefits: ["Live phone activation", "Renewal reminders", "U.S.-based specialists"],
    image: nightDrive,
    alt: "Driver calling concierge to activate car satellite radio",
  },
];
