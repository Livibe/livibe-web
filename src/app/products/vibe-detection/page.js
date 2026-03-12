"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function VibeDetectionProductsPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <main className="relative w-full overflow-hidden text-white">
      <AnimatedBackground />

      <div className="container mx-auto px-6 pb-24 pt-28 sm:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3">
            <a
              href="/products#led-products"
              className="text-sm text-white/70 hover:text-white"
            >
              LED Products
            </a>
            <div className="text-white/30">/</div>
            <div className="text-sm text-white/90">Vibe Detection</div>
          </motion.div>

          <motion.section
            variants={fadeInUp}
            className="relative mt-8 overflow-hidden rounded-[2.75rem] border border-white/10"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(168, 107, 255, 0.95) 0%, rgba(255, 78, 178, 0.85) 52%, rgba(255, 99, 51, 0.9) 100%)",
              }}
            />
            <div className="absolute inset-0 bg-black/15" />

          

            <div className="relative z-10 grid gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div
                  id="vibe-detection-wristband"
                  className="text-5xl font-semibold leading-[1.05] text-white sm:text-6xl"
                >
                  Vibe Detection
                  <br />
                  Wristband
                </div>

                <div className="mt-8 text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  Device for Concert Activity
                </div>

                <div className="mt-8 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                  An advanced sensor-enabled wristband that tracks motion and
                  physiological signals to empower real-time fan engagement and
                  generate concert insights.
                </div>
              </div>

              <div className="relative lg:col-span-5">
                <div className="pointer-events-none relative h-[260px] w-full sm:h-[340px] lg:h-[380px]">
                  <Image
                    fill
                    src="/products/Vibe-Detection.png"
                    alt="Vibe Detection Wristband"
                    className="object-contain opacity-95"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
