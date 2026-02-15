import type { Metadata } from "next";
import localFont from "next/font/local";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "./globals.css";

const hero = localFont({
  src: "../fonts/Hero-Light.ttf",
  variable: "--font-hero",
  display: "swap",
});

const lamea = localFont({
  src: "../fonts/Lamea.otf",
  variable: "--font-lamea",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thevaulthq.io"),
  title: {
    default: "VAULT — The Operating System for Luxury Retail",
    template: "%s | VAULT",
  },
  description:
    "VAULT is the premier operating system for modern luxury retail. Unify inventory intelligence, clienteling, and merchandising into one agentic platform built for high-touch retail teams.",
  keywords: [
    "luxury retail software",
    "retail operating system",
    "clienteling platform",
    "luxury merchandising software",
    "retail inventory management",
    "agentic commerce",
    "luxury retail technology",
    "retail CRM",
    "high-touch retail",
    "fashion retail platform",
    "retail personalization",
    "luxury brand operations",
  ],
  authors: [{ name: "VAULT", url: "https://thevaulthq.io" }],
  creator: "VAULT",
  publisher: "VAULT",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "VAULT — The Operating System for Luxury Retail",
    description:
      "Unify inventory intelligence, clienteling, and merchandising into one agentic platform built for high-touch retail teams.",
    url: "https://thevaulthq.io",
    siteName: "VAULT",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VAULT — The Operating System for Luxury Retail",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VAULT — The Operating System for Luxury Retail",
    description:
      "Unify inventory intelligence, clienteling, and merchandising into one agentic platform built for high-touch retail teams.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://thevaulthq.io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://thevaulthq.io/#organization",
      name: "VAULT",
      url: "https://thevaulthq.io",
      logo: {
        "@type": "ImageObject",
        url: "https://thevaulthq.io/assets/images/VAULT-logo-new.png",
      },
      description:
        "VAULT is the premier operating system for modern luxury retail, unifying inventory intelligence, clienteling, and merchandising.",
      sameAs: ["https://www.linkedin.com/company/thevaulthq/"],
      founder: [
        {
          "@type": "Person",
          name: "Olaitan Ajilore",
          jobTitle: "Founder & CEO",
        },
        {
          "@type": "Person",
          name: "Haboon Nur",
          jobTitle: "Co-Founder & CTO",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://thevaulthq.io/#website",
      url: "https://thevaulthq.io",
      name: "VAULT",
      publisher: { "@id": "https://thevaulthq.io/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "VAULT",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Agentic operating system for luxury retail that unifies inventory intelligence, clienteling, and merchandising into one platform.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/OnlineOnly",
        category: "Enterprise Software",
      },
      featureList: [
        "Dynamic Prioritization Dashboard",
        "Real-Time Merchandising Intake",
        "Digital Capsule Curation",
        "Trend Atlas Market Intelligence",
        "Client Relationship Management",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hero.variable} ${lamea.variable}`}>
      <body className="antialiased selection:bg-zinc-200 selection:text-black dark:selection:bg-zinc-800 dark:selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
