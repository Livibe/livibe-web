import { Poppins, Taviraj } from "next/font/google";
import localFont from "next/font/local";
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
  title: "Livibe",
  description: "IGNITE THE CROWD LIGHT UP MOMENTS",
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
        <div className="pt-4">{children}</div>
      </body>
    </html>
  );
}
