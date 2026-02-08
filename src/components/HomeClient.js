"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import { project } from "@/data/project";

export default function HomeClient() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [ledMode, setLedMode] = useState("2");
  const [txMode, setTxMode] = useState("Broadcaster");
  const [consoleMode, setConsoleMode] = useState("Simulator");
  const [simImageIndex, setSimImageIndex] = useState(0);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Auto-rotation logic
  useEffect(() => {
    let timeoutId;
    if (consoleMode === "GrandMA") {
      timeoutId = setTimeout(() => {
        setConsoleMode("Simulator");
        setSimImageIndex(0);
      }, 5000);
    } else if (consoleMode === "Simulator") {
      timeoutId = setTimeout(() => {
        if (simImageIndex === 0) {
          setSimImageIndex(1);
        } else if (simImageIndex === 1) {
          setSimImageIndex(2);
        } else {
          setConsoleMode("GrandMA");
          setSimImageIndex(0);
        }
      }, 4000);
    }
    return () => clearTimeout(timeoutId);
  }, [consoleMode, simImageIndex]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLedMode((prev) => (prev === "2" ? "8" : "2"));
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [ledMode]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTxMode((prev) => (prev === "Broadcaster" ? "MH" : "Broadcaster"));
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [txMode]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <main className="w-full">
      <AnimatedBackground />
      {/* --- HERO SECTION --- */}
      <section className="container relative flex flex-col justify-center px-6 pt-32 sm:px-12 md:min-h-screen md:snap-start md:snap-always md:pt-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="font-taviraj text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-8xl"
          >
            Ignite the crowd <br />
            <span className="text-white">Light up moments</span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="max-w-1xl mx-auto mt-8 text-balance text-lg text-white/90 drop-shadow-md sm:text-xl"
          >
            We shape the future of event experiences and engagement by
            connecting the audience with the heartbeat of the show through our
            immersive LED technology. <br />
            <br />
            Turn your event into an interactive journey of light
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-12 flex justify-center">
            {/* <a href="/products" className="group relative flex items-center gap-3 rounded-full border border-white/10 bg-white/5 pl-8 pr-2 py-2 text-sm font-medium text-white transition-all backdrop-blur-md hover:bg-white/10 hover:scale-105">
               <span>View Product</span>
               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
               </div>
             </a> */}
          </motion.div>
        </motion.div>
      </section>

      {/* --- SERVICES / SOLUTION SECTION --- */}
      <motion.section
        id="solution"
        className="container mx-auto flex flex-col justify-center px-6 pt-32 sm:px-12 md:min-h-screen md:snap-start md:snap-always md:pt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div
          variants={staggerContainer}
          className="mb-16 border-t border-white/10 pt-8"
        >
          <motion.div
            variants={fadeInUp}
            className="w-fit text-2xl font-bold uppercase tracking-widest bg-gradient-to-r from-[#06B6D4] via-[#3B82F6] to-[#A855F7] bg-clip-text text-transparent sm:text-[38px]"
          >
            01 Our Solutions
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="mt-4 text-lg leading-relaxed text-white/90 drop-shadow-sm sm:text-xl">
              Livibe connects audiences to the show by bringing the experience
              beyond the stage and into the crowd. We enable audiences to feel,
              move, and connect together, creating immersive and memorable
              moments
            </div>
          </motion.div>
        </motion.div>

        {/* BENTO GRID LAYOUT */}
        <motion.div
          variants={staggerContainer}
          className="grid h-auto gap-4 xl:h-[600px] xl:grid-cols-3 xl:grid-rows-2"
        >
          {/* CARD 1: Devices (Large - Spans 2 cols) */}
          <motion.div
            variants={fadeInUp}
            className="group relative col-span-1 row-span-1 flex min-h-[400px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black p-0 opacity-5 transition-transform hover:scale-[1.01] xl:col-span-2 xl:min-h-[300px] xl:justify-between xl:p-10"
          >
            {/* Number */}
            <div className="absolute left-6 top-6 z-20 flex items-start justify-between xl:relative xl:left-0 xl:top-0 xl:z-10">
              <span className="text-sm font-medium text-[#06B6D4] opacity-50">
                01
              </span>
            </div>

            {/* Image Container - Top on Mobile, Absolute on XL */}
            <div className="pointer-events-none relative h-[240px] w-full shrink-0 xl:absolute xl:bottom-0 xl:right-0 xl:h-full xl:w-full">
              <Image
                fill
                src="/products/Wristband LED 8 LED.png"
                alt="8 LED"
                className={`object-contain object-center transition-all duration-700 xl:object-right-bottom ${ledMode === "8" ? "opacity-100" : "opacity-0"}`}
              />
              <Image
                fill
                src="/products/Wristband LED 2 LED.png"
                alt="2 LED"
                className={`object-contain object-center transition-all duration-700 xl:object-right-bottom ${ledMode === "2" ? "opacity-100" : "opacity-0"}`}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex max-w-md flex-col p-6 xl:mt-auto xl:p-0">
              <h3 className="bg-gradient-to-r from-white via-[#06B6D4] to-[#3B82F6] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                Livibe LED Devices
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Immersive LED Devices with millions of colors and dynamic
                effects, light and color that dances on your wrist
              </p>

              {/* Interactive Controls */}
              <div className="mt-6 flex gap-2">
                <button
                  onClick={() => setLedMode("2")}
                  className={`rounded-full border px-3 py-1 text-[10px] uppercase ${ledMode === "2" ? "border-[#06B6D4] text-[#06B6D4]" : "border-white/10 text-white/30"}`}
                >
                  2 LEDs
                </button>
                <button
                  onClick={() => setLedMode("8")}
                  className={`rounded-full border px-3 py-1 text-[10px] uppercase ${ledMode === "8" ? "border-[#06B6D4] text-[#06B6D4]" : "border-white/10 text-white/30"}`}
                >
                  8 LEDs
                </button>
              </div>
            </div>

            {/* Gradient Wave Background */}
            <div className="absolute bottom-0 left-0 right-0 h-[20%] w-full mix-blend-screen blur-md saturate-150">
              <svg
                viewBox="0 0 100 20"
                className="absolute bottom-0 left-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="grad1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <motion.path
                  fill="url(#grad1)"
                  animate={{
                    d: [
                      "M0,10 C30,20 70,0 100,10 L100,20 L0,20 Z",
                      "M0,10 C30,0 70,20 100,10 L100,20 L0,20 Z",
                      "M0,10 C30,20 70,0 100,10 L100,20 L0,20 Z",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.path
                  fill="url(#grad1)"
                  opacity="0.5"
                  animate={{
                    d: [
                      "M0,15 C20,5 80,25 100,15 L100,20 L0,20 Z",
                      "M0,15 C50,25 50,5 100,15 L100,20 L0,20 Z",
                      "M0,15 C20,5 80,25 100,15 L100,20 L0,20 Z",
                    ],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </div>
          </motion.div>

          {/* CARD 2: Control (Tall - Right side) */}
          <motion.div
            variants={fadeInUp}
            className="group relative col-span-1 flex min-h-[400px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black p-0 transition-transform hover:scale-[1.01] xl:row-span-2 xl:min-h-0 xl:justify-between xl:p-10"
          >
            {/* Number */}
            <div className="absolute left-6 top-6 z-20 flex items-start justify-between xl:relative xl:left-0 xl:top-0 xl:z-10">
              <span className="text-sm font-medium text-[#3B82F6] opacity-50">
                02
              </span>
            </div>

            {/* Image Container */}
            <div className="relative h-[240px] w-full shrink-0 xl:absolute xl:inset-0 xl:h-full xl:w-full">
              <Image
                fill
                src="/products/Broadcaster.png"
                alt="Broadcaster"
                className={`object-cover object-center transition-all duration-700 ${txMode === "Broadcaster" ? "opacity-100" : "opacity-0"}`}
              />
              <Image
                fill
                src="/products/Movinghead.png"
                alt="Moving Head"
                className={`object-cover object-center transition-all duration-700 ${txMode === "MH" ? "opacity-100" : "opacity-0"}`}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col p-6 xl:mt-auto xl:p-0">
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Livibe Signal Beam
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Our infrared moving head and transmitter beam out the IR wave to
                communicate and control wristbands
              </p>
              <div className="mt-6 flex gap-2">
                <button
                  onClick={() => setTxMode("Broadcaster")}
                  className={`rounded-full border px-3 py-1 text-[10px] uppercase ${txMode === "Broadcaster" ? "border-[#3B82F6] text-[#3B82F6]" : "border-white/10 text-white/30"}`}
                >
                  Base
                </button>
                <button
                  onClick={() => setTxMode("MH")}
                  className={`rounded-full border px-3 py-1 text-[10px] uppercase ${txMode === "MH" ? "border-[#3B82F6] text-[#3B82F6]" : "border-white/10 text-white/30"}`}
                >
                  Moving
                </button>
              </div>
            </div>
          </motion.div>

          {/* CARD 3: Software (Bottom Left) */}
          <motion.div
            variants={fadeInUp}
            className="group relative col-span-1 row-span-1 flex min-h-[400px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black p-0 transition-transform hover:scale-[1.01] xl:col-span-2 xl:min-h-[300px] xl:justify-between xl:p-10"
          >
            {/* Number */}
            <div className="absolute left-6 top-6 z-20 flex items-start justify-between xl:relative xl:left-0 xl:top-0 xl:z-10">
              <span className="text-sm font-medium text-[#00E0A0] opacity-50">
                03
              </span>
            </div>

            {/* Image Container */}
            <div className="pointer-events-none relative h-[240px] w-full shrink-0 xl:absolute xl:left-0 xl:top-0 xl:h-full xl:w-full">
              <Image
                fill
                src="/products/Simulator_1.png"
                alt="Sim 1"
                className={`object-contain object-center transition-all duration-700 xl:object-right ${consoleMode === "Simulator" && simImageIndex === 0 ? "opacity-100" : "opacity-0"}`}
              />
              <Image
                fill
                src="/products/Simulator_2.png"
                alt="Sim 2"
                className={`object-contain object-center transition-all duration-700 xl:object-right ${consoleMode === "Simulator" && simImageIndex === 1 ? "opacity-100" : "opacity-0"}`}
              />
              <Image
                fill
                src="/products/GrandMA.jpg"
                alt="GrandMA"
                className={`object-cover object-center transition-all duration-700 ${consoleMode === "GrandMA" ? "opacity-100" : "opacity-0"}`}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full max-w-md flex-col justify-center p-6 xl:p-0">
              <h3 className="bg-gradient-to-r from-white via-[#22C55E] to-[#CCFF00] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                Livibe Console
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Allows lighting designers to simply create and manage effects.
                Fully compatible with GrandMA for a seamless lighting workflow.
              </p>
            </div>

            {/* Gradient Wave Background */}
            <div className="absolute bottom-0 left-0 right-0 h-[20%] w-full mix-blend-screen blur-md saturate-150">
              <svg
                viewBox="0 0 100 20"
                className="absolute bottom-0 left-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="grad2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#22C55E" />
                    <stop offset="100%" stopColor="#CCFF00" />
                  </linearGradient>
                </defs>
                <motion.path
                  fill="url(#grad2)"
                  animate={{
                    d: [
                      "M0,12 C40,5 60,25 100,12 L100,20 L0,20 Z",
                      "M0,12 C40,25 60,5 100,12 L100,20 L0,20 Z",
                      "M0,12 C40,5 60,25 100,12 L100,20 L0,20 Z",
                    ],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.path
                  fill="url(#grad2)"
                  opacity="0.5"
                  animate={{
                    d: [
                      "M0,18 C50,25 50,10 100,18 L100,20 L0,20 Z",
                      "M0,18 C20,10 80,25 100,18 L100,20 L0,20 Z",
                      "M0,18 C50,25 50,10 100,18 L100,20 L0,20 Z",
                    ],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* --- VIDEO SECTION --- */}
      <motion.section
        className="relative flex w-full flex-col justify-center pt-32 md:min-h-screen md:snap-start md:snap-always md:pt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 sm:px-12">
          <motion.div
            variants={staggerContainer}
            className="mb-8 border-t border-white/10 pt-8"
          >
            <motion.div
              variants={fadeInUp}
              className="w-fit text-2xl font-bold uppercase tracking-widest bg-gradient-to-r from-[#FF5500] to-[#A855F7] bg-clip-text text-transparent sm:text-[38px]"
            >
              02 Showcase
            </motion.div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8 },
              },
            }}
            className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] md:aspect-[21/9]"
          >
            <video
              className="h-full w-full object-cover"
              src="/showcase.mp4"
              muted
              loop
              autoPlay
              playsInline
            />
            <div className="pointer-events-none absolute inset-0 bg-black/20" />
          </motion.div>
        </div>
      </motion.section>

      {/* --- PROJECTS SECTION --- */}
      <motion.section
        id="cases"
        className="container mx-auto flex flex-col justify-center px-6 pt-32 sm:px-12 md:min-h-screen md:snap-start md:snap-always md:pt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div
          variants={staggerContainer}
          className="mb-12 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <motion.div
                variants={fadeInUp}
                className="w-fit text-2xl font-bold uppercase tracking-widest bg-gradient-to-r from-[#22C55E] to-[#CCFF00] bg-clip-text text-transparent sm:text-[38px]"
              >
                03 Our Projects
              </motion.div>
              {/* <motion.div variants={fadeInUp} className="mt-4 text-4xl text-white sm:text-5xl">Projects</motion.div> */}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {project.slice(0, 3).map((p, i) => (
            <motion.div
              variants={fadeInUp}
              key={`${p.title}-${i}`}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5">
                <Image
                  fill
                  src={p.image}
                  alt={p.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </div>
              <div className="mt-6">
                <div className="whitespace-pre-line text-xl font-medium text-white transition-colors group-hover:text-brand-cyan">
                  {p.title}
                </div>
                <div className="mt-1 text-sm text-white/70">{p.date}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* --- CONTACT SECTION --- */}
      <motion.section
        id="contact"
        className="container mx-auto flex max-w-4xl flex-col justify-center px-6 py-24 sm:px-12 md:min-h-screen md:snap-start md:snap-always md:py-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div
          variants={staggerContainer}
          className="border-t border-white/10 pt-16 text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-widest text-brand-orange"
          >
            04 Contact Us
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="mt-4 text-2xl font-bold tracking-widest text-white sm:text-[38px]"
          >
            Let&apos;s create magic
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-xl text-lg text-white/90 drop-shadow-sm"
          >
            Ready to transform your event? Send us your details and we’ll reach
            out to discuss how we can light up your next project.
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-12 text-left">
            <ContactForm />
          </motion.div>
        </motion.div>
      </motion.section>
      <div className="snap-start snap-always">
        <Footer />
      </div>
    </main>
  );
}
