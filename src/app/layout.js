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
    "immersive concert experience",
    "concert lighting",
    "interactive crowd lighting",
    "synchronized lighting effects",
    "live event technology",
    "LED show technology",
    "wristband lighting",
    "immersive experience",
    "live event lighting",
    "concert audience experience",
    "LED wristband rental",
    "crowd lighting system",
  ],
  authors: [{ name: "Livibe", url: "https://www.livibe.co" }],
  creator: "Livibe",
  robots: { index: true, follow: true },
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

// App-wide layout including global header and fonts
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="md:snap-y md:snap-mandatory">
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
