import { Inter } from "next/font/google";
import localFont from 'next/font/local'

import "./globals.css";

const inter = Inter({
  weight: [
    "100", "200", "300", "400", "700"
  ],
  variable: '--font-inter',
  subsets: ["latin"],
  display: 'swap',
  preload: true
});

// Font files can be colocated inside of `app`
const tanOfficial = localFont({
  src: './font/tan-official.ttf',
  variable: '--font-tan',
  preload: true

})

const ivyMode = localFont({
  preload: true,
  src: [
    {
      path: './font/Ivy-Mode-Light-normal-300-100.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './font/Ivy-Mode-Light-normal-300-100.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './font/Ivy-Mode-Light-normal-300-100.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './font/Ivy-Mode-normal-400-100.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/Ivy-Mode-normal-400-100.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/Ivy-Mode-SemiBold-normal-600-100.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-ivy'
})
export const metadata = {
  title: "Livibe",
  description: "IGNITE THE CROWD ILLIMINATE EMOTIONS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${tanOfficial.variable} ${ivyMode.variable}`}>{children}</body>
    </html>
  );
}
