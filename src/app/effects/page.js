"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import EffectDotsPreview from "@/components/EffectDotsPreview";

export default function EffectsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const effects = [
    {
      title: "Colouring",
      description: "Our Radio Frequency products can display our entire range of 16 million colors, our pixels can beat to the rhythm of a pop song, pulse like a heartbeat or light up your whole audience as one to unify the crowd.",
      dots: [
        "#FF6A5A", "#7C5CFF", "#FFE144", "#55A8FF", "#FF6A5A",
        "#7C5CFF", "#FFE144", "#55A8FF", "#FF6A5A", "#7C5CFF",
        "#FFE144", "#55A8FF", "#FF6A5A", "#7C5CFF", "#55A8FF",
        "#7C5CFF", "#FFE144", "#55A8FF", "#FF6A5A", "#7C5CFF",
        "#FFE144", "#55A8FF", "#FF6A5A", "#7C5CFF", "#55A8FF",
      ],
    },
    {
      title: "Waving",
      description: "Create stunning wave effects across the audience. Control direction, speed, and color to make the crowd move as one fluid ocean of light.",
      dots: [
        "#FFE144", "#FFE144", "#FF9C2A", "#FF3D3D", "#FF3D3D",
        "#FFE144", "#FF9C2A", "#FF3D3D", "#FF3D3D", "#FF3D3D",
        "#FFE144", "#FFE144", "#FF9C2A", "#FF3D3D", "#FF3D3D",
        "#FFE144", "#FFE144", "#FFE144", "#FF9C2A", "#FF3D3D",
        "#FFE144", "#FFE144", "#FFE144", "#FFE144", "#FF9C2A",
      ],
    },
    {
      title: "Symbol",
      description: "Display logos, letters, or custom symbols across the crowd. Perfect for brand activation or artist monograms.",
      dots: [
        "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F",
        "#FFCC2F", null, null, null, "#FFCC2F",
        "#FFCC2F", null, "#FFCC2F", null, "#FFCC2F",
        "#FFCC2F", null, null, null, "#FFCC2F",
        "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F",
      ],
    },
    {
      title: "Grouping",
      description: "Segment the audience into different groups. Create team battles, section-based lighting, or complex multi-zone effects.",
      dots: [
        "#FF1E1E", "#FF1E1E", "#FFE144", "#FFE144", "#FF1E1E",
        "#FF1E1E", "#FF1E1E", "#FFE144", "#FFE144", "#FF1E1E",
        "#FF1E1E", "#FF1E1E", "#FFE144", "#FFE144", "#FF1E1E",
        "#FF1E1E", "#FF1E1E", "#FFE144", "#FFE144", "#FF1E1E",
        "#FF1E1E", "#FF1E1E", "#FFE144", "#FFE144", "#FF1E1E",
      ],
    },
    {
      title: "Fading",
      description: "Smooth transitions and gentle fades that add emotional depth to slower songs or intimate moments.",
      dots: Array.from({ length: 25 }).map(() => null),
      dim: true,
    },
    {
      title: "Interactive",
      description: "Engage the audience with interactive modes where movement or sound triggers lighting changes.",
      dots: [
        "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F",
        "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F",
        "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F",
        "#FFCC2F", "#FF9C2A", "#FFCC2F", "#FFCC2F", "#FFCC2F",
        "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F",
      ],
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatedBackground />

      <main className="container mx-auto px-6 py-32 sm:px-12">
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-24 text-center"
        >
          <motion.div variants={fadeInUp} className="font-taviraj text-5xl font-medium text-white sm:text-7xl">
            Our Effects
          </motion.div>
          <motion.div variants={fadeInUp} className="mx-auto mt-6 max-w-3xl text-lg text-white/80 sm:text-xl">
            Signature patterns, waves, and transitions for live shows
          </motion.div>
        </motion.section>

        <div className="flex flex-col gap-24">
          {effects.map((e) => (
            <motion.div 
              key={e.title} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[500px]"
            >
              {/* Left Side - Main Video */}
              <div className="lg:col-span-8 rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 relative h-[300px] lg:h-auto backdrop-blur-md group hover:bg-white/10 transition-colors duration-500">
                {/* Placeholder for Video */}
                {/* <video
                  src="/path/to/main-video.mp4"
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                /> */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-medium">
                  Main Video Placeholder
                </div>
              </div>

              {/* Right Side - Description & Short Video */}
              <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                {/* Description Box */}
                <div className="flex-1 rounded-[2.5rem] bg-white/5 p-10 backdrop-blur-md border border-white/10 flex flex-col justify-center hover:bg-white/10 transition-colors duration-500">
                  <div className="text-3xl font-medium text-white mb-6 font-taviraj">{e.title}</div>
                  <div className="text-white/70 text-base leading-relaxed">
                    {e.description}
                  </div>
                </div>

                {/* Short Video Box (Bottom Right) */}
                <div className="flex-1 rounded-[2.5rem] bg-black/40 border border-white/10 relative overflow-hidden h-[200px] lg:h-auto">
                  <EffectDotsPreview dots={e.dots} dim={e.dim} mode={e.title} />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                  <div className="absolute bottom-6 left-6 text-white/60 text-xs z-10 font-medium uppercase tracking-widest">
                    {e.title} Visual
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
