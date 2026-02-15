import type { Metadata } from "next";
import JournalClient from "./JournalClient";

export const metadata: Metadata = {
  title: "Journal — Press, Coverage & Industry Analysis",
  description:
    "Read the latest press coverage, interviews, and critical analysis about VAULT and the future of agentic commerce in luxury retail.",
  alternates: {
    canonical: "https://thevaulthq.io/journal",
  },
  openGraph: {
    title: "Journal — Press, Coverage & Industry Analysis | VAULT",
    description:
      "Conversations, critical analysis, and coverage. A growing record of the dialogue surrounding VAULT and the future of commerce.",
    url: "https://thevaulthq.io/journal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VAULT Journal — Press and Industry Analysis",
      },
    ],
  },
};

export default function JournalPage() {
  return <JournalClient />;
}
