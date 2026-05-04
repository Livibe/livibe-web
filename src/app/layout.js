import { Poppins, Taviraj } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const taviraj = Taviraj({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-taviraj",
  subsets: ["latin", "thai"],
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://www.livibe.co"),
  title: {
    default: "Livibe – LED Wristband & Immersive Concert Lighting Technology",
    template: "%s | Livibe",
  },
  description:
    "Livibe delivers LED wristband systems, synchronized concert lighting, and immersive live event experiences. Transform your audience into part of the show.",
  keywords: [
    "LED wristband",
    "concert wristband",
    "light up wristband",
    "LED wristband concert",
    "immersive experience",
    "immersive concert experience",
    "immersive live event",
    "lighting innovation",
    "lighting design",
    "concert lighting design",
    "infrared wristband",
    "infrared lighting technology",
    "live event technology",
    "LED show technology",
    "interactive crowd lighting",
    "synchronized lighting effects",
    "wristband lighting",
    "live event lighting",
    "concert audience experience",
    "LED wristband rental",
    "crowd lighting system",
  ],
  authors: [{ name: "Livibe", url: "https://www.livibe.co" }],
  creator: "Livibe",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "none",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.livibe.co",
    siteName: "Livibe",
    title: "Livibe – LED Wristband & Immersive Concert Lighting Technology",
    description:
      "LED wristband systems, synchronized concert lighting, and immersive live event experiences. Ignite the crowd. Light up moments.",
    images: [
      {
        url: "/logo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Livibe – LED Wristband Concert Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Livibe – LED Wristband & Immersive Concert Lighting",
    description:
      "LED wristband systems and immersive concert lighting technology. Ignite the crowd. Light up moments.",
    images: ["/logo/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.livibe.co/#organization",
      name: "Livibe",
      url: "https://www.livibe.co",
      logo: {
        "@type": "ImageObject",
        url: "https://www.livibe.co/logo/livibe-logo.png",
      },
      description:
        "Livibe delivers LED wristband systems, synchronized concert lighting, and immersive live event experiences.",
      sameAs: ["https://www.livibe.co"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.livibe.co/#website",
      url: "https://www.livibe.co",
      name: "Livibe",
      publisher: { "@id": "https://www.livibe.co/#organization" },
    },
    {
      "@type": "SiteNavigationElement",
      name: ["Products", "Effects", "Projects", "About Us"],
      url: [
        "https://www.livibe.co/products",
        "https://www.livibe.co/effects",
        "https://www.livibe.co/projects",
        "https://www.livibe.co/about",
      ],
    },
  ],
};

// App-wide layout including global header and fonts
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="md:snap-y md:snap-mandatory">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${taviraj.variable} font-sans overflow-x-hidden`}
      >
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4YLER6W49Z"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4YLER6W49Z');
          `}
        </Script>
        <Header />
        <div className="relative z-10 pt-4">{children}</div>
      </body>
    </html>
  );
}
