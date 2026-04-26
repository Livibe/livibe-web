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
      <HomeClient />
    </>
  );
}
