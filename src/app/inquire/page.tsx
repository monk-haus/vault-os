import type { Metadata } from "next";
import InquireClient from "./InquireClient";

export const metadata: Metadata = {
  title: "Inquire — Request Enterprise Access",
  description:
    "Request a demo of VAULT, the operating system for luxury retail. Connect with our team to discuss how VAULT can transform your merchandising, clienteling, and retail operations.",
  alternates: {
    canonical: "https://thevaulthq.io/inquire",
  },
  openGraph: {
    title: "Inquire — Request Enterprise Access | VAULT",
    description:
      "Connect with our team to discuss how VAULT can elevate your luxury retail operations with unified inventory intelligence and clienteling.",
    url: "https://thevaulthq.io/inquire",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VAULT — Request Enterprise Access",
      },
    ],
  },
};

export default function InquirePage() {
  return <InquireClient />;
}
