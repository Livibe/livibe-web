"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function ProductsPage() {
  const rootRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.from(".js-hero-title", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from(".js-hero-desc", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
      });

      // Product cards animation
      gsap.utils.toArray(".js-product-card").forEach((card, index) => {
        const isEven = index % 2 === 0;
        const image = card.querySelector(".js-product-image");

        // Card slide animation
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          x: isEven ? -50 : 50, // Left to center (odd index visually), Right to center (even index visually) logic handled by isEven
          opacity: 0,
          duration: 1.0,
          ease: "power3.out",
        });

        // Image fade up animation
        if (image) {
          gsap.from(image, {
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            delay: 0.2, // Slight delay after card starts appearing
            ease: "power3.out",
          });
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const products = [
    {
      title: "Wristbands (2 LED)",
      description:
        "Our classic lightweight wristband featuring 2 high-brightness LEDs. Perfect for mass participation and creating unified crowd effects with extended battery life.",
      image: "/products/Wristband LED 2 LED.png",
      background: "bg-[#050816]",
      orbA: "bg-[#4F9DFF]",
      orbB: "bg-[#6B5BFF]",
    },
    {
      title: "Wristbands (8 LED)",
      description:
        "The premium experience with 8 powerful LEDs for maximum brightness and color saturation. Capable of displaying complex patterns and smoother gradients directly on the wrist.",
      image: "/products/Wristband LED 8 LED.png",
      background: "bg-[#140313]",
      orbA: "bg-[#FF3D6E]",
      orbB: "bg-[#FF7A2F]",
    },
    {
      title: "Stick",
      description:
        "Handheld LED sticks that turn every audience member into a performer. High-visibility design ideal for concerts, rallies, and choreographies.",
      image: "/products/LED Stick.png",
      background: "bg-[#05140A]",
      orbA: "bg-[#A7F64A]",
      orbB: "bg-[#00C2FF]",
    },
    {
      title: "Venue",
      description:
        "Transform the venue itself with our integrated architectural lighting solutions. Synchronize house lights with audience wearables for total immersion.",
      image: "/products/Venue.png", // Placeholder
      background: "bg-[#0A0414]",
      orbA: "bg-[#7C5CFF]",
      orbB: "bg-[#FB3E60]",
    },
    {
      title: "Emotion Detection",
      subtitle: "Coming Soon",
      description:
        "Next-generation crowd monitoring and interaction technology. Sensing the energy of the crowd to trigger real-time lighting responses.",
      image: "/products/Emotion Detection.png", // Placeholder
      background: "bg-[#140A03]",
      orbA: "bg-[#F96443]",
      orbB: "bg-[#FFD84A]",
      // comingSoon: true,
    },
  ];

  return (
    <div
      ref={rootRef}
      className="relative w-full overflow-hidden bg-black text-white"
    >
      {/* Global Background Elements */}
      <AnimatedBackground />

      <main className="container mx-auto px-6 py-20 sm:px-12">
        <section className="mb-16">
          <div className="js-hero-title text-4xl text-white sm:text-5xl md:text-6xl">
            Our Products
          </div>
          <div className="js-hero-desc mt-4 max-w-3xl text-base text-white/70 sm:text-lg">
            Immerse your audience in an enchanting world, As the music pulses
            through the air, watch as the crowd becomes a living canvas of soul.
            <br /><br />
            "where every moment becomes a masterpiece"
          </div>
        </section>

        <div className="flex flex-col gap-24">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            const background = product.background ?? "bg-[#050816]";
            const orbA = product.orbA ?? "bg-[#4F9DFF]";
            const orbB = product.orbB ?? "bg-[#FF3D6E]";

            return (
              <section
                key={product.title}
                className={`js-product-card relative overflow-hidden rounded-3xl border border-white/10 ${background} flex flex-col gap-10 p-8 sm:p-12 lg:items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Orb Background Elements */}
                <div className="pointer-events-none absolute inset-0">
                  <div
                    className={`orb-soft absolute -bottom-24 -left-24 h-64 w-64 rounded-full ${orbA} opacity-40 blur-3xl`}
                  />
                  <div
                    className={`orb-soft absolute -right-24 -top-24 h-64 w-64 rounded-full ${orbB} opacity-35 blur-3xl`}
                  />
                </div>

                {/* Text Side */}
                <div className="relative z-10 flex-1">
                  <div className="max-w-xl">
                    {product.comingSoon && (
                      <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-sm backdrop-blur-sm">
                        Coming Soon
                      </span>
                    )}
                    <div className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                      {product.title}
                    </div>
                    <div className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
                      {product.description}
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative z-10 flex-1">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-3xl sm:h-[400px] md:h-[400px]">
                    {product.image.includes("placeholder") ? (
                      <div className="js-product-image relative z-10 flex h-full w-full items-center justify-center text-white/20">
                        <span className="text-lg font-medium">
                          {product.subtitle === "Coming Soon"
                            ? "Coming Soon"
                            : product.title + " Image"}
                        </span>
                      </div>
                    ) : (
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="js-product-image object-contain p-0 transition-transform duration-700 hover:scale-105"
                      />
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
