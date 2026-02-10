"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
      title: "Wristbands\n(2 LED)",
      description:
        "Our classic lightweight wristband featuring 2 high-brightness LEDs. Perfect for mass participation and creating unified crowd effects with extended battery life.",
      image: "/products/Wristband LED 2 LED.png",
      accent: "from-[#0055FF] to-[#0088FF]",
    },
    {
      title: "Wristbands\n(8 LED)",
      description:
        "The premium experience with 8 powerful LEDs for maximum brightness and color saturation. Capable of displaying complex patterns and smoother gradients directly on the wrist.",
      image: "/products/Wristband LED 8 LED.png",
      accent: "from-[#FF3D6E] to-[#FF7A2F]",
    },
    {
      title: "Stick",
      description:
        "Handheld LED sticks that turn every audience member into a performer. High-visibility design ideal for concerts, rallies, and choreographies.",
      image: "/products/LED Stick.png",
      accent: "from-[#A7F64A] to-[#00C2FF]",
    },
    {
      title: "Venue",
      description:
        "Transform the venue itself with our integrated architectural lighting solutions. Synchronize house lights with audience wearables for total immersion.",
      image: "/products/Venue.png", // Placeholder
      accent: "from-[#7C5CFF] to-[#FB3E60]",
    },
    {
      title: "Emotion Detection",
      subtitle: "Coming Soon",
      description:
        "Next-generation crowd monitoring and interaction technology. Sensing the energy of the crowd to trigger real-time lighting responses.",
      image: "/products/Emotion Detection.png", // Placeholder
      accent: "from-[#F96443] to-[#FFD84A]",
      comingSoon: true,
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

  return (
    <div className="relative w-full bg-black text-white">
      {/* Global Background Elements */}
      <AnimatedBackground />

      {/* --- SECTION 1: CAROUSEL (Wristbands & Main Products) --- */}
      <section className="relative flex min-h-screen w-full flex-col justify-start overflow-hidden">
        {/* Animated Background Container (Scoped to Section 1) */}
        <AnimatePresence>
          <motion.div
            key={activeIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          >
            {/* Ambient Theme Gradient */}
            <div
              className="absolute inset-0 mix-blend-screen"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${products[
                  activeIndex
                ].accent
                  .split(" ")[0]
                  .replace("from-[", "")
                  .replace("]", "")}AA, transparent 90%)`,
              }}
            />

            {/* Secondary Orb 1 - Top Left */}
            <div
              className="absolute left-[-10%] top-[-20%] h-[600px] w-[600px] rounded-full mix-blend-screen blur-3xl"
              style={{
                background: `radial-gradient(circle, ${products[activeIndex].accent
                  .split(" ")[0]
                  .replace("from-[", "")
                  .replace("]", "")}80, transparent 70%)`,
                transform: activeIndex % 2 === 0 ? "scale(1)" : "scale(1.1) translate(50px, 50px)",
                transition: "transform 0.6s ease-in-out",
              }}
            />

            {/* Secondary Orb 2 - Bottom Right */}
            <div
              className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full mix-blend-screen blur-3xl"
              style={{
                background: `radial-gradient(circle, ${
                  products[activeIndex].accent.includes("to-[")
                    ? products[activeIndex].accent.split("to-[")[1].split("]")[0]
                    : products[activeIndex].accent
                        .split(" ")[0]
                        .replace("from-[", "")
                        .replace("]", "")
                }80, transparent 70%)`,
                transform: activeIndex % 2 === 0 ? "scale(1)" : "scale(1.2) translate(-50px, -50px)",
                transition: "transform 0.6s ease-in-out",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Main Content Container */}
        <div className={`relative z-10 flex h-full w-full flex-col justify-start px-4 pb-10 pt-12 sm:px-8 ${isMobile ? "overflow-y-auto" : ""}`}>
          {/* Header Title */}
          <div className="mb-4 text-center sm:mb-8">
            <div className="mb-2 font-taviraj text-4xl font-medium text-white sm:text-6xl">
              Our Products
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="max-w-2xl text-center text-lg leading-relaxed text-white">
                Immerse your audience in an enchanting world, As the music pulses
                through the air, watch as the crowd becomes a living canvas of
                soul.
              </p>
              <p className="text-lg font-medium italic text-white">
                &quot;where every moment becomes a masterpiece&quot;
              </p>
            </div>
          </div>

          {/* Carousel Container */}
          <div
            className="relative flex h-[40vh] w-full items-center justify-center overflow-visible"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Mobile Vertical Layout */}
            {isMobile ? (
              <div className="flex h-full w-full flex-col gap-4 overflow-y-auto px-4 pb-20 pt-4">
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
                      {/* Background Glow */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          isActive ? "opacity-30" : "opacity-0"
                        }`}
                        style={{
                          background: `radial-gradient(circle at center, ${product.accent.replace("from-[", "").replace("]", "").split(" ")[0] || "#fff"}, transparent 70%)`,
                        }}
                      />

                      {isActive ? (
                        // Mobile Active State
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex h-full flex-col p-6"
                        >
                          <div className="mb-4 flex-1">
                            {product.comingSoon && (
                              <span className="mb-2 inline-block rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80">
                                Coming Soon
                              </span>
                            )}
                            <div
                              className={`bg-gradient-to-br bg-clip-text font-taviraj text-3xl font-bold leading-tight text-transparent ${product.accent}`}
                            >
                              {product.title}
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-white/80">
                              {product.description}
                            </p>
                          </div>
                          <div className="relative h-48 w-full">
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </motion.div>
                      ) : (
                        // Mobile Inactive State
                        <div className="flex h-full items-center justify-between px-6">
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
                      className={`relative whitespace-pre-line flex h-[40vh] cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-black transition-all duration-500 ease-in-out`}
                      style={{
                        width: isActive ? "50vw" : "12vw",
                        minWidth: isActive ? "50vw" : "12vw",
                      }}
                    >
                      {/* Background Glow */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          isActive ? "opacity-30" : "opacity-0 group-hover:opacity-20"
                        }`}
                        style={{
                          background: `radial-gradient(circle at center, ${product.accent.replace("from-[", "").replace("]", "").split(" ")[0] || "#fff"}, transparent 70%)`,
                        }}
                      />

                      {isActive ? (
                        // --- ACTIVE STATE (Flex Row: Text Left, Image Right) ---
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                          className="flex h-full w-full flex-row"
                        >
                          {/* Left: Title & Description */}
                          <div className="flex w-1/2 flex-col justify-center p-6 sm:p-10">
                            <div className="z-10">
                              {product.comingSoon && (
                                <span className="mb-2 inline-block rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/80">
                                Coming Soon
                              </span>
                            )}
                            <div
                              className={`bg-gradient-to-br bg-clip-text font-taviraj text-2xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl ${product.accent}`}
                            >
                              {product.title}
                            </div>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80">
                                {product.description}
                              </p>
                            </div>
                          </div>

                          {/* Right: Image */}
                          <div className="relative z-10 flex w-1/2 items-center justify-center overflow-hidden">
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
                        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
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
          <div className="mt-8 z-20 hidden flex-col items-center justify-center gap-4 md:flex">
            <div className="flex items-center pt-6 gap-8 rounded-full border border-white/10 bg-black/20 px-8 py-3 backdrop-blur-md">
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
                      {product.title.split(" (")[0]}
                    </span>
                    <div
                      className={`h-1 rounded-full transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-1/2"
                      }`}
                      style={{
                        background: `linear-gradient(to right, ${product.accent
                          .replace("from-[", "")
                          .replace("]", "")
                          .split(" ")[0]}, ${
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
        </div>
      </section>

      {/* --- SECTION 2: SIGNAL BEAM --- */}
      <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden border-t border-white/10 py-20">
         {/* Background Gradient/Glow */}
         <div className="absolute inset-0 bg-gradient-to-b from-black via-[#06B6D4]/5 to-black" />
         
         <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="flex flex-col items-center gap-12 md:flex-row">
               {/* Text */}
               <div className="flex-1 text-center md:text-left">
                  <div className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] bg-clip-text font-taviraj text-4xl font-bold text-transparent sm:text-5xl">
                    Livibe Signal Beam
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-white/80">
                    Our infrared moving head and transmitter beam out the IR wave to communicate and control wristbands.
                  </p>
               </div>
               {/* Image */}
               <div className="relative h-[400px] w-full flex-1">
                  <Image src="/products/Broadcaster.png" alt="Signal Beam" fill className="object-contain" />
               </div>
            </div>
         </div>
      </section>

      {/* --- SECTION 3: CONSOLE --- */}
      <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden border-t border-white/10 py-20">
         {/* Background Gradient/Glow */}
         <div className="absolute inset-0 bg-gradient-to-b from-black via-[#22C55E]/5 to-black" />

         <div className="container relative z-10 mx-auto px-6 md:px-12">
            <div className="flex flex-col-reverse items-center gap-12 md:flex-row">
               {/* Image */}
               <div className="relative h-[400px] w-full flex-1">
                  <Image src="/products/Simulator_1.png" alt="Console" fill className="object-contain" />
               </div>
               {/* Text */}
               <div className="flex-1 text-center md:text-left">
                  <div className="bg-gradient-to-r from-[#22C55E] to-[#CCFF00] bg-clip-text font-taviraj text-4xl font-bold text-transparent sm:text-5xl">
                    Livibe Console
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-white/80">
                    Allows lighting designers to simply create and manage effects. Fully compatible with GrandMA for a seamless lighting workflow.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
