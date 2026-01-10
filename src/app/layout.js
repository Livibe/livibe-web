import { Poppins } from "next/font/google";
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

// Font files can be colocated inside of `app`
const tanOfficial = localFont({
  src: "./font/tan-official.ttf",
  variable: "--font-tan",
  preload: true,
});

const ivyMode = localFont({
  preload: true,
  src: [
    {
      path: "./font/Ivy-Mode-Light-normal-300-100.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./font/Ivy-Mode-Light-normal-300-100.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./font/Ivy-Mode-Light-normal-300-100.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./font/Ivy-Mode-normal-400-100.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/Ivy-Mode-normal-400-100.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/Ivy-Mode-SemiBold-normal-600-100.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-ivy",
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
        className={`${poppins.variable} ${tanOfficial.variable} ${ivyMode.variable} overflow-x-hidden`}
      >
        <Header />
        <div className="pt-16 sm:pt-20 md:pt-24">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
