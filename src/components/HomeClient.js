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
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
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
    hidden: { opacity: 0, y: 60 },
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
      <section className="container relative flex flex-col justify-center px-6 pt-32 sm:px-12 md:h-[80vh] md:pt-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto mt-12 max-w-5xl text-center md:mt-36"
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
        className="container mx-auto flex flex-col justify-center px-6 pt-4 sm:px-12 md:py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <motion.div
          variants={staggerContainer}
          className="mb-12"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <motion.div
                variants={fadeInUp}
                className="w-fit bg-clip-text font-taviraj text-2xl font-bold uppercase tracking-widest text-transparent text-white sm:text-[38px]"
              >
                Our Solutions
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="mt-4 text-lg leading-relaxed text-white/90 drop-shadow-sm sm:text-xl">
                  Livibe connects audiences to the show by bringing the experience
                  beyond the stage and into the crowd. We enable audiences to feel,
                  move, and connect together, creating immersive and memorable
                  moments
                </div>
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="shrink-0">
              <a href="/products" className="group relative flex items-center gap-3 rounded-full border border-white/10 bg-white/5 pl-6 pr-2 py-2 text-sm font-medium text-white transition-all backdrop-blur-md hover:bg-white/10 hover:scale-105">
                <span>View Product</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* BENTO GRID LAYOUT */}
        <motion.div
          variants={staggerContainer}
          className="grid h-auto gap-4 xl:h-[500px] xl:grid-cols-3 xl:grid-rows-2"
        >
          {/* CARD 1: Devices (Large - Spans 2 cols) */}
          <motion.div
            variants={fadeInUp}
            className="group relative col-span-1 row-span-1 flex min-h-[400px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black p-0 opacity-5 transition-transform hover:scale-[1.01] xl:col-span-2 xl:min-h-[240px] xl:justify-between xl:p-6"
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
              {/* Text Background Glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06B6D4]/30 via-[#3B82F6]/30 to-transparent blur-2xl filter" />

              <h3 className="text-3xl font-bold text-white md:text-4xl">
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
          </motion.div>

          {/* CARD 2: Control (Tall - Right side) */}
          <motion.div
            variants={fadeInUp}
            className="group relative col-span-1 flex min-h-[400px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black p-0 transition-transform hover:scale-[1.01] xl:row-span-2 xl:min-h-0 xl:justify-between xl:p-6"
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
            className="group relative col-span-1 row-span-1 flex min-h-[400px] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black p-0 transition-transform hover:scale-[1.01] xl:col-span-2 xl:min-h-[240px] xl:justify-between xl:p-6"
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
                className={`object-contain object-center transition-all duration-700 xl:object-right ${consoleMode === "GrandMA" ? "opacity-100" : "opacity-0"}`}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full max-w-md flex-col justify-center p-6 xl:p-0">
              {/* Text Background Glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#22C55E]/30 via-[#CCFF00]/30 to-transparent blur-2xl filter" />

              <h3 className="text-3xl font-bold text-white md:text-4xl">
                Livibe Console
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Allows lighting designers to simply create and manage effects.
                Fully compatible with GrandMA for a seamless lighting workflow.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>



      {/* --- PROJECTS SECTION --- */}
      <motion.section
        id="cases"
        className="container mx-auto flex flex-col justify-center px-6 pt-12 sm:px-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <motion.div
          variants={staggerContainer}
          className="mb-12 pt-8"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <motion.h2
                variants={fadeInUp}
                className="font-taviraj text-3xl font-medium text-white sm:text-5xl"
              >
                Our Projects
              </motion.h2>
            </div>
            {/* <motion.div variants={fadeInUp}>
               <a href="/cases" className="group flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white">
                 <span>View All Projects</span>
                 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
               </a>
             </motion.div> */}
          </div>
        </motion.div>

        {/* Video Showcase Moved Here */}
        <motion.div
          variants={fadeInUp}
          className="mb-16 overflow-hidden rounded-3xl border border-white/10 bg-black/20"
        >
          <div className="aspect-video w-full">
            <video
              className="h-full w-full object-cover"
              src="/showcase.mp4"
              muted
              loop
              autoPlay
              playsInline
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
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
        className="container mx-auto flex max-w-4xl flex-col justify-center px-6 py-16 sm:px-12 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <motion.div
          variants={staggerContainer}
          className="pt-16 text-center"
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
      <div className="">
        <Footer />
      </div>
    </main>
  );
}
