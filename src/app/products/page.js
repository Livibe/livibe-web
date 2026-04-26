import ProductsClient from "@/components/ProductsClient";

export const metadata = {
  title: "Products – LED Wristbands, LED Stick & Venue Lighting",
  description:
    "Explore Livibe's LED wristband (2 LED & 8 LED), LED Stick, and LED Venue systems. Synchronized concert lighting products that turn audiences into part of the show.",
  keywords: [
    "LED wristband",
    "LED wristband 8 LED",
    "LED stick concert",
    "concert wristband",
    "LED venue lighting",
    "synchronized LED wristband",
    "infrared wristband",
    "concert wristband rental",
    "audience LED wristband",
    "light up wristband concert",
  ],
  openGraph: {
    title: "Livibe Products – LED Wristbands & Concert Lighting Systems",
    description:
      "LED wristband (2 & 8 LED), LED Stick, LED Venue — synchronized crowd lighting products for concerts and live events.",
    url: "https://www.livibe.co/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
