import HomeClient from "@/components/HomeClient";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata = {
  title: "Livibe - Ignite the crowd. Light up moments.",
};

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <HomeClient />
    </>
  );
}
