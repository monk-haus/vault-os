import type { Metadata } from "next";
import MissionClient from "./MissionClient";

export const metadata: Metadata = {
  title: "Mission — Infrastructure for Agentic Commerce",
  description:
    "VAULT builds infrastructure for agentic commerce. We scale human judgment in luxury retail by absorbing operational complexity so teams can focus on high-leverage client relationships.",
  alternates: {
    canonical: "https://thevaulthq.io/mission",
  },
  openGraph: {
    title: "Mission — Infrastructure for Agentic Commerce | VAULT",
    description:
      "We architect the operation. You define the narrative. Meet the team behind the premier operating system for modern luxury retail.",
    url: "https://thevaulthq.io/mission",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VAULT Mission — Infrastructure for Agentic Commerce",
      },
    ],
  },
};

export default function MissionPage() {
  return <MissionClient />;
}
