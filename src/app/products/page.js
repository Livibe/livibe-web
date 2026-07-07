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
    "infrared lighting technology",
    "infrared LED technology",
    "lighting innovation",
    "concert wristband rental",
    "audience LED wristband",
    "light up wristband concert",
    "immersive experience technology",
  ],
  openGraph: {
    title: "Livibe Products – LED Wristbands & Concert Lighting Systems",
    description:
      "LED wristband (2 & 8 LED), LED Stick, LED Venue — synchronized crowd lighting products for concerts and live events.",
    url: "https://www.livibe.co/products",
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Livibe LED Wristband Products",
  description: "Synchronized LED wristband systems and concert lighting products by Livibe",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Livibe LED Wristband 2 LED",
        description:
          "Synchronized LED wristband with 2 LEDs for concerts and live events. Ignite the crowd with immersive light effects.",
        brand: { "@type": "Brand", name: "Livibe" },
        url: "https://www.livibe.co/products",
        image: "https://www.livibe.co/products/Wristband LED 2 LED.png",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Livibe LED Wristband 8 LED",
        description:
          "Ultra-bright LED wristband with 8 LEDs for maximum crowd impact at concerts and immersive live events.",
        brand: { "@type": "Brand", name: "Livibe" },
        url: "https://www.livibe.co/products",
        image: "https://www.livibe.co/products/Wristband LED 8 LED.png",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Livibe LED Stick",
        description:
          "Handheld LED stick for concert audiences. High-visibility synchronized light effects for interactive live shows.",
        brand: { "@type": "Brand", name: "Livibe" },
        url: "https://www.livibe.co/products",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Livibe LED Venue",
        description:
          "Venue-wide synchronized lighting system for fully immersive concert and live event experiences.",
        brand: { "@type": "Brand", name: "Livibe" },
        url: "https://www.livibe.co/products",
      },
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {/* Keyword-rich text for search engines */}
      <div className="sr-only">
        <h1>LED Wristband Systems for Concerts &amp; Live Events</h1>
        <p>
          Livibe LED wristbands synchronize with your concert to create an
          immersive audience experience. Our LED wristband lineup includes the
          2-LED wristband, 8-LED wristband, LED Stick, and LED Venue system —
          all controlled wirelessly via infrared technology for real-time crowd
          lighting effects.
        </p>
        <p>
          Our LED wristbands are used at concerts, festivals, corporate events,
          and live performances across Thailand and Asia. Each LED wristband
          supports millions of colors, waving effects, symbol display, and
          interactive audience engagement modes.
        </p>
      </div>
      <ProductsClient />
    </>
  );
}
