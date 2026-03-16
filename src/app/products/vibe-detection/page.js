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

  const appHighlights = [
    {
      title: "Device Connection and Event Calibration",
      bulletTitle: "Scan device to connect via Bluetooth",
      description:
        "Connect your wristband via Bluetooth and sync it to the concert session in seconds.",
      images: ["/vibe-detection-application/1.png", "/vibe-detection-application/2.png"],
    },
    {
      title: "Live Vibe Tracking",
      bulletTitle: "Real-time vibe score and activity data",
      description:
        "Track engagement live with motion and activity signals throughout the show.",
      images: ["/vibe-detection-application/3.png", "/vibe-detection-application/4.png"],
    },
    {
      title: "Concert Wrap",
      bulletTitle: "Concert activity wrap-up",
      description:
        "Unlock a personalized recap of your vibe journey and revisit highlights anytime.",
      images: ["/vibe-detection-application/5.png", "/vibe-detection-application/6.png"],
    },
    {
      title: "Deep Analytics",
      bulletTitle: "In-depth activity analytics",
      description:
        "Dive into detailed trends, peak moments, and performance insights across the concert.",
      images: ["/vibe-detection-application/7.png", "/vibe-detection-application/8.png"],
    },
    {
      title: "Social Feed",
      bulletTitle: "Social feed, leaderboard & badges",
      description:
        "Share your activity, compare stats, and earn badges with other fans.",
      images: ["/vibe-detection-application/9.png", "/vibe-detection-application/10.png"],
    },
  ];

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
                <div className="pointer-events-none relative h-[260px] w-full sm:h-[400px] lg:h-[500px]">
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

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInUp}
            className="mt-16"
          >
            <div className="text-4xl font-semibold text-white sm:text-5xl">
              App Experience
            </div>
            <div className="mt-3 max-w-3xl text-lg text-white/80 sm:text-xl">
              Track your vibe live, review insights after the show, and share your
              highlights.
            </div>

            <div className="mt-10 grid gap-6">
              {appHighlights.map((item, index) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-[2.75rem]"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(168, 107, 255, 0.75) 0%, rgba(255, 78, 178, 0.7) 52%, rgba(255, 99, 51, 0.72) 100%)",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/25" />

                  <div className="relative z-10 grid gap-10 p-6 sm:p-14 lg:grid-cols-12 lg:items-center">
                    <div
                      className={`lg:col-span-7 ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                        {item.title}
                      </div>
                      <div className="mt-8 space-y-6">
                        <div className="flex gap-3">
                          <div className="mt-2 h-2 w-2 flex-none rounded-full bg-[#FBBF24]" />
                          <div>
                            <div className="text-lg font-semibold text-white sm:text-xl">
                              {item.bulletTitle}
                            </div>
                            <div className="mt-2 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`lg:col-span-5 ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <div className="relative mx-auto flex w-full max-w-[420px] items-end justify-center gap-2 px-1 sm:max-w-[520px] sm:gap-6 sm:px-0">
                        <div className="absolute inset-0">
                          <div
                            className="absolute -left-20 -top-16 h-72 w-72 rounded-full opacity-55 blur-3xl"
                            style={{
                              background:
                                "radial-gradient(circle at 35% 35%, rgba(168, 107, 255, 0.85) 0%, rgba(168, 107, 255, 0.2) 55%, rgba(168, 107, 255, 0) 78%)",
                            }}
                          />
                          <div
                            className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full opacity-55 blur-3xl"
                            style={{
                              background:
                                "radial-gradient(circle at 45% 45%, rgba(255, 78, 178, 0.8) 0%, rgba(255, 99, 51, 0.18) 55%, rgba(255, 99, 51, 0) 78%)",
                            }}
                          />
                        </div>

                        <div className="relative z-10 h-[320px] w-[40vw] max-w-[160px] sm:h-[420px] sm:w-[200px] sm:max-w-none">
                          <Image
                            fill
                            src={item.images[0]}
                            alt={`${item.title} app screen 1`}
                            className="object-contain drop-shadow-2xl"
                          />
                        </div>
                        <div className="relative z-10 h-[320px] w-[40vw] max-w-[160px] sm:h-[420px] sm:w-[200px] sm:max-w-none">
                          <Image
                            fill
                            src={item.images[1]}
                            alt={`${item.title} app screen 2`}
                            className="object-contain drop-shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
}
