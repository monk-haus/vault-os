import type { Metadata } from "next";
import PlatformClient from "./PlatformClient";

export const metadata: Metadata = {
  title: "Platform — Luxury Retail Operating System",
  description:
    "Explore VAULT's unified retail platform: dynamic prioritization dashboards, real-time merchandising intake, digital capsule curation, and localized trend intelligence for luxury retail teams.",
  alternates: {
    canonical: "https://thevaulthq.io/platform",
  },
  openGraph: {
    title: "Platform — Luxury Retail Operating System | VAULT",
    description:
      "A unified retail operating system that connects inventory intelligence, client data, and merchandising workflows in real time.",
    url: "https://thevaulthq.io/platform",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VAULT Platform — Luxury Retail Operating System",
      },
    ],
  },
};

export default function PlatformPage() {
  return <PlatformClient />;
}
