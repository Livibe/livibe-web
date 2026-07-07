import HomeClient from "@/components/HomeClient";

export const metadata = {
  title: "Livibe – Ignite the Crowd. Light Up Moments.",
  description:
    "Livibe creates LED wristband systems and immersive concert lighting for live events. Turn your audience into a living light show with synchronized LED wristbands.",
  keywords: [
    "LED wristband",
    "concert wristband",
    "immersive live event",
    "crowd lighting",
    "synchronized LED",
    "concert experience",
    "light up concert",
    "LED show",
  ],
  openGraph: {
    title: "Livibe – Ignite the Crowd. Light Up Moments.",
    description:
      "LED wristband systems and immersive concert lighting. Transform your audience into part of the show.",
    url: "https://www.livibe.co",
  },
};

export default function Home() {
  return (
    <>
      {/* Keyword-rich text for search engines */}
      <div className="sr-only">
        <h1>Livibe – LED Wristband &amp; Immersive Concert Lighting</h1>
        <p>
          Livibe provides LED wristband systems for concerts, festivals, and
          live events. Our synchronized LED wristbands turn the entire audience
          into a living light show — with millions of colors, waving effects,
          and real-time interactive crowd lighting controlled wirelessly via
          infrared technology.
        </p>
        <p>
          We offer LED wristband rental and full event lighting solutions
          including LED Stick, LED Venue systems, and the Livibe Console for
          lighting designers. Used at concerts and live events across Thailand
          and Asia.
        </p>
      </div>
      <HomeClient />
    </>
  );
}
