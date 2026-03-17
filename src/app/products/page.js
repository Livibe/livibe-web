"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function ProductsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [autoScrollInterval, setAutoScrollInterval] = useState(5000); // Default 5s

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const products = [
    {
      title: "Wristband\n(2 LEDs)",
      description:
        "Ignite the crowd and drive engagement. Synchronized light effects that turn audiences into part of the show.",
      image: "/products/Wristband LED 2 LED.png",
      accent: "from-[#46C7DE] to-[#776AFF]",
      bg: "linear-gradient(135deg, rgba(168, 107, 255, 0.92) 0%, rgba(119, 106, 255, 0.9) 45%, rgba(70, 199, 222, 0.92) 100%)",
    },
    {
      title: "Wristband\n(8 LEDs)",
      description:
        "Ultra-bright performance with 8 LEDs for powerful impact and engagement. The premium experience with maximum brightness to light up the crowd.",
      image: "/products/Wristband LED 8 LED.png",
      accent: "from-[#A500FF] to-[#CE56CF]",
      bg: "linear-gradient(135deg, rgba(165, 0, 255, 0.92) 0%, rgba(168, 107, 255, 0.9) 48%, rgba(206, 86, 207, 0.92) 100%)",
    },
    {
      title: "LED Stick",
      description:
        "Unleash the energy with handheld LED power. Turn every audience member into a performer with high-visibility visuals ideal for concerts and interactive choreographies.",
      image: "/products/LED Stick.png",
      accent: "from-[#FF6033] to-[#CE56CF]",
      bg: "linear-gradient(135deg, rgba(255, 96, 51, 0.92) 0%, rgba(255, 78, 178, 0.88) 52%, rgba(168, 107, 255, 0.9) 100%)",
    },
    {
      title: "LED Venue",
      description:
        "Venue-wide lighting, haptic, and interactive systems for fully immersive experiences. Synchronize house lights with audience wearables for total immersion.",
      image: "/products/Venue.png", // Placeholder
      accent: "from-[#21D285] to-[#46C7DE]",
      bg: "linear-gradient(135deg, rgba(33, 210, 133, 0.9) 0%, rgba(70, 199, 222, 0.9) 58%, rgba(119, 106, 255, 0.88) 100%)",
    },
  ];

  // Auto-scroll logic (resets on interaction via activeIndex dependency)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, autoScrollInterval); // Use dynamic interval
    return () => clearInterval(interval);
  }, [isPaused, activeIndex, products.length, autoScrollInterval]);

  const slideVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="relative w-full overflow-hidden text-white">
      <AnimatedBackground />

      {/* --- SECTION 1: CAROUSEL (Wristbands & Main Products) --- */}
      <section
        id="led-products"
        className="relative flex min-h-[82vh] w-full flex-col justify-center overflow-hidden pt-10"
      >
        {/* Main Content Container */}
        <div className="relative z-10 flex h-full w-full flex-col justify-start px-4 pt-12 sm:px-8">
          {/* Header Title */}
          <div className="mb-4 text-center sm:mb-8">
            <div className="relative mb-2">
              <div className="font-taviraj text-4xl font-medium text-white sm:text-6xl">
                Our Products
              </div>
              {/* <svg
                className="pointer-events-none absolute -right-4 top-1/2 hidden h-10 w-28 -translate-y-1/2 sm:block"
                viewBox="0 0 120 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 26c12-14 26-14 38 0s26 14 38 0 22-14 34 0"
                  stroke="url(#stroke)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="stroke" x1="0" y1="0" x2="120" y2="0">
                    <stop stopColor="#FF6033" />
                    <stop offset="0.5" stopColor="#46C7DE" />
                    <stop offset="1" stopColor="#A500FF" />
                  </linearGradient>
                </defs>
              </svg> */}
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="max-w-2xl text-center text-lg leading-relaxed text-white">
                Immerse your audience in an enchanting world, As the music
                pulses through the air, watch as the crowd becomes a living
                canvas of soul.
              </p>
              <p className="text-lg font-medium italic text-white">
                &quot;where every moment becomes a masterpiece&quot;
              </p>
            </div>
          </div>

          {/* Carousel Container */}
          <div
            className={`relative flex w-full items-center justify-center overflow-visible ${isMobile ? "h-auto" : "h-[40vh]"}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Mobile Vertical Layout */}
            {isMobile ? (
              <div className="flex w-full flex-col gap-4 px-4 pb-20 pt-4">
                {products.map((product, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <motion.div
                      key={product.title}
                      layout
                      onClick={() => {
                        setActiveIndex(index);
                        setAutoScrollInterval(10000);
                      }}
                      className={`relative w-full flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black transition-all duration-500 ease-in-out ${
                        isActive ? "h-[400px]" : "h-[80px]"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-40"}`}
                        style={{ background: product.bg }}
                      />
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-60"} bg-black`}
                      />
                      <div className="absolute inset-0 bg-black/15" />

                      {isActive ? (
                        // Mobile Active State
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="relative z-10 flex h-full flex-col p-6"
                        >
                          <div className="mb-4 flex-1">
                            {product.comingSoon && (
                              <span className="mb-2 inline-block rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80">
                                Coming Soon
                              </span>
                            )}
                            <div className="font-taviraj text-3xl font-bold leading-tight text-white">
                              {product.title}
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-white/80">
                              {product.description}
                            </p>
                          </div>
                          <div className="relative h-48 w-full">
                            <div className="pointer-events-none absolute inset-0">
                              <Image
                                src="/assets/line2.png"
                                alt=""
                                width={180}
                                height={180}
                                className="absolute -left-6 bottom-0 h-auto w-20 opacity-95"
                              />
                              <Image
                                src="/assets/line3.png"
                                alt=""
                                width={240}
                                height={240}
                                className="absolute -right-6 -top-8 h-auto w-24 opacity-95"
                              />
                            </div>
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              className="relative z-10 object-contain drop-shadow-2xl"
                            />
                          </div>
                        </motion.div>
                      ) : (
                        // Mobile Inactive State
                        <div className="relative z-10 flex h-full items-center justify-between px-6">
                          <span className="text-sm font-bold uppercase tracking-widest text-white">
                            {product.title}
                          </span>
                          <div className="relative h-12 w-12">
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              className="object-contain opacity-50"
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              // Desktop Horizontal Layout
              <motion.div
                className="flex gap-4"
                animate={{
                  x: `calc(50vw - 25vw - (${activeIndex} * (12vw + 1rem)))`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {products.map((product, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <motion.div
                      key={product.title}
                      layout
                      onClick={() => {
                        setActiveIndex(index);
                        setAutoScrollInterval(10000); // Manual click -> Set to 10s
                      }}
                      className={`relative flex h-[40vh] cursor-pointer overflow-hidden whitespace-pre-line rounded-[2rem] border border-white/10  transition-all duration-500 ease-in-out`}
                      style={{
                        width: isActive ? "50vw" : "12vw",
                        minWidth: isActive ? "50vw" : "12vw",
                      }}
                    >
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-50"}`}
                        style={{ background: product.bg }}
                      />
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 ${isActive ? "opacity-0" : "opacity-70"} bg-black`}
                      />
                      <div className="absolute inset-0 bg-black/10" />

                      {isActive ? (
                        // --- ACTIVE STATE (Flex Row: Text Left, Image Right) ---
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="relative z-10 flex h-full w-full flex-row"
                        >
                          {/* Left: Title & Description */}
                          <div className="flex w-1/2 flex-col justify-center p-6 sm:p-10">
                            <div className="z-10">
                              {product.comingSoon && (
                                <span className="mb-2 inline-block rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80">
                                  Coming Soon
                                </span>
                              )}
                              <div className="text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                                {product.title}
                              </div>
                              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80">
                                {product.description}
                              </p>
                            </div>
                          </div>

                          {/* Right: Image */}
                          <div className="relative z-10 flex w-1/2 items-center justify-center overflow-hidden">
                            <div className="pointer-events-none absolute inset-0">
                              {/* <Image
                                src="/assets/line1.png"
                                alt=""
                                width={220}
                                height={220}
                                className="absolute left-4 top-10 h-auto w-20 opacity-95"
                              />
                              <Image
                                src="/assets/line3.png"
                                alt=""
                                width={320}
                                height={320}
                                className="absolute right-10 top-6 h-auto w-20 opacity-95"
                              />
                              <Image
                                src="/assets/line2.png"
                                alt=""
                                width={260}
                                height={260}
                                className="absolute bottom-4 left-40 h-auto w-16 opacity-95"
                              /> */}
                            </div>
                            {product.image.includes("placeholder") ? (
                              <div className="flex h-full w-full items-center justify-center text-white/30">
                                <span className="text-center text-lg font-medium">
                                  {product.subtitle === "Coming Soon"
                                    ? "Coming Soon"
                                    : product.title}
                                </span>
                              </div>
                            ) : (
                              <div className="relative h-full w-full p-8">
                                <motion.div
                                  layoutId={`product-image-${product.title}`}
                                  className="relative h-full w-full"
                                >
                                  <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                  />
                                </motion.div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ) : (
                        // --- INACTIVE STATE (Image Only) ---
                        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center overflow-hidden">
                          {/* Vertical Text Label */}
                          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 sm:opacity-100">
                            <span className="rotate-[-90deg] whitespace-nowrap text-sm font-bold uppercase tracking-widest text-white mix-blend-difference">
                              {product.title}
                            </span>
                          </div>

                          {/* Image Preview */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-40 transition-opacity hover:opacity-60">
                            {!product.image.includes("placeholder") && (
                              <div className="relative h-full w-[25vw] flex-none p-8">
                                <motion.div
                                  layoutId={`product-image-${product.title}`}
                                  className="relative h-full w-full"
                                >
                                  <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain"
                                  />
                                </motion.div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </div>

          {/* Product Navigation Dots/Titles */}
          <div className="z-20 mt-8 hidden flex-col items-center justify-center gap-4 md:flex">
            <div className="flex items-center gap-8 rounded-full border border-white/10 bg-black/20 px-8 py-3 pt-6 backdrop-blur-md">
              {products.map((product, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={product.title}
                    onClick={() => {
                      setActiveIndex(index);
                      setAutoScrollInterval(10000);
                    }}
                    className={`group relative flex flex-col items-center gap-2 transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <span
                      className={`text-sm font-medium uppercase tracking-widest transition-all duration-300 ${
                        isActive ? "scale-110 text-white" : "text-white/80"
                      }`}
                    >
                      {product.title.split(" (")[0].replace("\n", "")}
                    </span>
                    <div
                      className={`h-1 rounded-full transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-1/2"
                      }`}
                      style={{
                        background: `linear-gradient(to right, ${
                          product.accent
                            .replace("from-[", "")
                            .replace("]", "")
                            .split(" ")[0]
                        }, ${
                          product.accent.includes("to-[")
                            ? product.accent.split("to-[")[1].split("]")[0]
                            : "#fff"
                        })`,
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* <div className="mt-10 flex justify-center">
            <a
              href="/products/vibe-detection"
              className="group relative flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/10"
            >
              <span className="rounded-full border border-white/15 bg-black/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
                New
              </span>
              <span className="text-white/90">Explore Vibe Detection Wristband</span>
              <span className="text-white/50 transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div> */}

          {/* <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-white/70 backdrop-blur">
              <span>Scroll for more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-white/60"
              >
                <path
                  fillRule="evenodd"
                  d="M10 14a1 1 0 01-.707-.293l-5-5a1 1 0 111.414-1.414L10 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5A1 1 0 0110 14z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div> */}
        </div>
      </section>

      {/* --- SECTION 2: MOVING HEAD --- */}
      <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden">
        <div className="container relative z-10 mx-auto px-6 md:px-12 pb-20 sm:pb-0">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex-1 text-center md:text-left"
            >
              <div className="rounded-3xl border border-white/10 bg-black p-8 transition-colors hover:bg-black/80 lg:p-12">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1 text-sm font-medium text-brand-blue">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-blue"></span>
                  </span>
                  Signal Transmission
                </div>
                <div className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-4xl font-bold text-transparent sm:text-5xl pb-2">
                  Livibe Moving Head
                </div>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Our professional infrared moving head provides precise control
                  and specific location targeting, enabling dynamic effects like
                  waving and symbolic patterns.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Infrared Technology",
                    "Waving & Symbolic Effects",
                    "Specific Location Control",
                    "DMX Compatible",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-white/90">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative mt-8 h-[260px] w-full overflow-hidden rounded-3xl border border-white/10 md:hidden">
                <Image
                  fill
                  src="/products/Movinghead.png"
                  alt="Moving Head"
                  className="object-cover"
                />
              </div>
            </motion.div>
            {/* Image */}
            <div className="relative hidden h-[400px] w-full flex-1 overflow-hidden rounded-3xl md:block">
              <Image
                fill
                src="/products/Movinghead.png"
                alt="Moving Head"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: WASHER --- */}
      <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden ">
        <div className="container relative z-10 mx-auto px-6 md:px-12 pb-20 sm:pb-0">
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
            {/* Image */}
            <div className="relative hidden h-[400px] w-full flex-1 overflow-hidden rounded-3xl md:block">
              <Image
                fill
                src="/products/Broadcaster.png"
                alt="Washer"
                className="object-cover"
              />
            </div>
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex-1 text-center md:text-left"
            >
              <div className="rounded-3xl border border-white/10 bg-black p-8 transition-colors hover:bg-black/80 lg:p-12">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-1 text-sm font-medium text-brand-cyan">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan"></span>
                  </span>
                  Wide Coverage
                </div>
                <div className="bg-gradient-to-r from-brand-cyan to-brand-blue bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                  Livibe Washer
                </div>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  High-intensity infrared washer designed for wide area coverage
                  broadcast, ensuring seamless signal distribution across the
                  entire venue.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Infrared Technology",
                    "Wide Area Broadcast",
                    "High Intensity Coverage",
                    "DMX Compatible",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-cyan/20 text-brand-cyan">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-white/90">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative mt-8 h-[260px] w-full overflow-hidden rounded-3xl border border-white/10 md:hidden">
                <Image
                  fill
                  src="/products/Broadcaster.png"
                  alt="Washer"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: CONSOLE --- */}
      <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden">
        <div className="container relative z-10 mx-auto px-6 md:px-12 pb-20 sm:pb-0">
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex-1 text-center md:text-left"
            >
              <div className="rounded-3xl border border-white/10 bg-black p-8 transition-colors hover:bg-black/80 lg:p-12">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-4 py-1 text-sm font-medium text-brand-green">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green"></span>
                  </span>
                  Control System
                </div>
                <div className="bg-gradient-to-r from-brand-green to-brand-cyan bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                  Livibe Console
                </div>
                <p className="mt-6 text-lg leading-relaxed text-white/80">
                  Allows lighting designers to simply create and manage effects.
                  Fully compatible with GrandMA for a seamless lighting
                  workflow.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "GrandMA Compatible",
                    "Real-time Control",
                    "Easy Setup",
                    "Effect Simulator",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green/20 text-brand-green">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-white/90">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative mt-8 h-[260px] w-full overflow-hidden rounded-3xl border border-white/10 md:hidden">
                <ConsoleShowcase />
              </div>
            </motion.div>
            {/* Image - Sliding Showcase */}
            <div className="relative hidden h-[400px] w-full flex-1 overflow-hidden rounded-3xl md:block">
              <ConsoleShowcase />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- SUB-COMPONENTS FOR SLIDESHOWS ---

function ConsoleShowcase() {
  const [consoleMode, setConsoleMode] = useState("Simulator");
  const [simImageIndex, setSimImageIndex] = useState(0);

  // Auto-rotation logic (copied from HomeClient)
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

  return (
    <div className="relative h-full w-full bg-black">
      <Image
        fill
        src="/products/Simulator_1.png"
        alt="Sim 1"
        className={`object-cover object-center transition-all duration-700 ${
          consoleMode === "Simulator" && simImageIndex === 0
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0"
        }`}
      />
      <Image
        fill
        src="/products/Simulator_2.png"
        alt="Sim 2"
        className={`object-contain object-center transition-all duration-700 ${
          consoleMode === "Simulator" && simImageIndex === 1
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0"
        }`}
      />
      <Image
        fill
        src="/products/GrandMA.jpg"
        alt="GrandMA"
        className={`object-cover object-center transition-all duration-700 ${
          consoleMode === "GrandMA"
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0"
        }`}
      />
      {/* Optional Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <div
          className={`h-1.5 rounded-full transition-all duration-300 ${consoleMode === "Simulator" && simImageIndex === 0 ? "w-6 bg-[#22C55E]" : "w-1.5 bg-white/20"}`}
        />
        <div
          className={`h-1.5 rounded-full transition-all duration-300 ${consoleMode === "Simulator" && simImageIndex === 1 ? "w-6 bg-[#22C55E]" : "w-1.5 bg-white/20"}`}
        />
        <div
          className={`h-1.5 rounded-full transition-all duration-300 ${consoleMode === "GrandMA" ? "w-6 bg-[#22C55E]" : "w-1.5 bg-white/20"}`}
        />
      </div>
    </div>
  );
}
