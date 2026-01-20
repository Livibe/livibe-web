import { Poppins, Taviraj } from "next/font/google";
import localFont from "next/font/local";

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
    <html lang="en">
      <body
        className={`${poppins.variable} ${taviraj.variable} font-sans overflow-x-hidden`}
      >
        <Header />
        <div className="pt-16 sm:pt-20 md:pt-24">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
