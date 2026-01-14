"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { project } from "@/data/project";

export default function Home() {
  const rootRef = useRef(null);
  const [ledMode, setLedMode] = useState("2");
  const [txMode, setTxMode] = useState("Broadcaster");
  const [consoleMode, setConsoleMode] = useState("Simulator");
  const [simImageIndex, setSimImageIndex] = useState(0);

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

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [consoleMode, simImageIndex]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".js-hero", {
        y: 18,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.utils.toArray(".js-section").forEach((section) => {
        const targets = section.querySelectorAll(".js-reveal");
        if (!targets.length) return;

        gsap.from(targets, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
          y: 18,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        });
      });

      gsap.utils.toArray(".js-orb").forEach((orb, index) => {
        gsap.to(orb, {
          x: index % 2 === 0 ? 18 : -14,
          y: index % 3 === 0 ? 22 : -18,
          duration: 6 + index * 0.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

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

  return (
    <main
      ref={rootRef}
      className="relative flex flex-col gap-y-16 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="js-orb absolute -right-24 -top-28 h-[440px] w-[440px] rounded-full bg-[#FF3D6E] opacity-100 mix-blend-normal" />
        <div className="js-orb absolute -bottom-40 right-6 h-[520px] w-[520px] rounded-full bg-[#4F9DFF] opacity-100 mix-blend-normal" />
        <div className="js-orb absolute right-56 top-44 h-28 w-28 rounded-full bg-[#FF7A2F] opacity-100 mix-blend-normal" />
        <div className="js-orb absolute right-28 top-72 h-20 w-20 rounded-full bg-[#6B5BFF] opacity-100 mix-blend-normal" />
        <div className="js-orb absolute -left-10 bottom-28 h-28 w-28 rounded-full bg-[#A7F64A] opacity-100 mix-blend-normal" />
      </div>

      <section className="container relative scroll-mt-24 px-6 pb-16 pt-10 sm:px-12 sm:pb-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="js-hero text-5xl leading-tight text-white sm:text-7xl">
            Ignite the crowd <br />
            Light up moments
          </div>

          <div className="js-reveal mt-4 max-w-4xl text-base text-white/70 sm:text-lg">
            <br />
            We shape the future of event experiences and engagement by
            connecting the audience <br /> with the heartbeat of the show
            through our immersive LED technology
            <br />
            <br />
            Turn your event into an interactive journey of light
          </div>
          <div className="js-hero mt-8 flex flex-wrap gap-3">
            <a href="/effects" className="nav-pill">
              Our effects
            </a>
            <a href="/products" className="nav-pill">
              Products
            </a>
          </div>
        </div>
        <section id="story" className="js-section mt-16">
          <div className="mx-auto max-w-6xl ">
            <div className="js-reveal max-w-4xl text-base leading-relaxed text-white/80 sm:text-lg">
              Livibe connects audiences to the show by bringing the experience
              beyond the stage and into the crowd. We enable audiences to feel,
              move, and connect together, creating immersive and memorable
              moments
            </div>
          </div>
        </section>

        <section
          id="solution"
          className="js-section mt-16 scroll-mt-24 px-6 sm:px-12 md:px-12"
        >
          <div className="mx-auto max-w-6xl">
            <div className="js-reveal text-3xl text-white sm:text-5xl">
              Our Solution
            </div>
            <div className="js-reveal mt-3 max-w-3xl text-base text-white/70 sm:text-lg"></div>

            <div className="mt-8 grid min-h-[85vh] grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
              <div className="js-reveal relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black via-[#050816] to-black shadow-2xl">
                <div className="pointer-events-none absolute inset-0">
                  <div className="orb-soft absolute -left-16 -top-20 h-40 w-40 rounded-full bg-[#F96443] opacity-40 blur-3xl" />
                  <div className="orb-soft absolute right-0 top-6 h-48 w-48 rounded-full bg-[#FB3E60] opacity-35 blur-3xl" />
                  <div className="orb-soft absolute bottom-0 left-8 h-40 w-40 rounded-full bg-[#4F9DFF] opacity-30 blur-3xl" />
                </div>
                <Image
                  fill
                  src="/products/Wristband LED 8 LED.png"
                  alt="Livibe LED Devices"
                  className={`object-contain transition-all duration-500 ${ledMode === "8" ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
                  quality={100}
                  priority
                />
                <Image
                  fill
                  src="/products/Wristband LED 2 LED.png"
                  alt="Livibe LED Devices"
                  className={`object-contain transition-all duration-500 ${ledMode === "2" ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="text-base text-white sm:text-lg">
                    Livibe LED Devices
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <button
                        className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 ${ledMode === "2" ? "border-white bg-white text-black" : "border-white/40 bg-white/5 text-white"}`}
                        onClick={() => setLedMode("2")}
                      >
                        2 LED
                      </button>
                      <button
                        className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 ${ledMode === "8" ? "border-white bg-white text-black" : "border-white/40 bg-white/5 text-white"}`}
                        onClick={() => setLedMode("8")}
                      >
                        8 LED
                      </button>
                    </div>
                    <div className="mt-3 text-sm text-white/80">
                      Immersive LED wristband with millions of colors and
                      dynamic effects, light and color that dances on your wrist
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid h-full grid-rows-6 gap-6">
                <div className="js-reveal relative row-span-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black via-[#050816] to-black shadow-2xl">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="orb-soft absolute -right-20 -top-12 h-44 w-44 rounded-full bg-[#4F9DFF] opacity-40 blur-3xl" />
                    <div className="orb-soft absolute bottom-0 left-4 h-36 w-36 rounded-full bg-[#6B5BFF] opacity-35 blur-3xl" />
                  </div>
                  <Image
                    fill
                    src="/products/Broadcaster.png"
                    alt="Livibe Broadcaster"
                    className={`object-cover transition-all duration-500 ${
                      txMode === "Broadcaster" ? "opacity-100" : "opacity-0"
                    }`}
                    quality={100}
                  />
                  <Image
                    fill
                    src="/products/Movinghead.png"
                    alt="Livibe Moving Head"
                    className={`object-cover transition-all duration-500 ${
                      txMode === "MH" ? "opacity-100" : "opacity-0"
                    }`}
                    quality={100}
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-4">
                    <div className="text-base text-white sm:text-lg">
                      Livibe Signal Beam
                    </div>
                    <div>
                      <div className="flex gap-2">
                        <button
                          className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 ${txMode === "Broadcaster" ? "border-white bg-white text-black" : "border-white/40 bg-white/5 text-white"}`}
                          onClick={() => setTxMode("Broadcaster")}
                        >
                          Broadcaster
                        </button>
                        <button
                          className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 ${txMode === "MH" ? "border-white bg-white text-black" : "border-white/40 bg-white/5 text-white"}`}
                          onClick={() => setTxMode("MH")}
                        >
                          Moving Head
                        </button>
                      </div>
                      <div className="mt-3 text-sm text-white/80">
                        Infrared moving head and transmitter beam out the IR
                        wave to control the wristband
                      </div>
                    </div>
                  </div>
                </div>

                <div className="js-reveal relative row-span-2 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black via-[#050816] to-black shadow-2xl">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="orb-soft absolute -bottom-8 -left-10 h-40 w-40 rounded-full bg-[#FFD84A] opacity-40 blur-3xl" />
                    <div className="orb-soft absolute right-0 top-0 h-32 w-32 rounded-full bg-[#F96443] opacity-35 blur-3xl" />
                  </div>
                  <Image
                    fill
                    src="/products/Simulator_1.png"
                    alt="Effect Simulator view 1"
                    className={`object-cover transition-all duration-500 ${
                      consoleMode === "Simulator" && simImageIndex === 0
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                  <Image
                    fill
                    src="/products/Simulator_2.png"
                    alt="Effect Simulator view 2"
                    className={`object-cover transition-all duration-500 ${
                      consoleMode === "Simulator" && simImageIndex === 1
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                  <Image
                    fill
                    src="/products/GrandMA.jpg"
                    alt="GrandMA console"
                    className={`object-cover transition-all duration-500 ${
                      consoleMode === "GrandMA" ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div className="absolute inset-0 flex flex-col justify-between p-4">
                    <div className="text-base text-white sm:text-lg">
                      Livibe Console
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 ${
                            consoleMode === "Simulator"
                              ? "border-white bg-white text-black"
                              : "border-white/40 bg-white/5 text-white"
                          }`}
                          onClick={() => {
                            setConsoleMode("Simulator");
                            setSimImageIndex(0);
                          }}
                        >
                          Effect Simulator
                        </button>
                        <button
                          type="button"
                          className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 ${
                            consoleMode === "GrandMA"
                              ? "border-white bg-white text-black"
                              : "border-white/40 bg-white/5 text-white"
                          }`}
                          onClick={() => {
                            setConsoleMode("GrandMA");
                            setSimImageIndex(0);
                          }}
                        >
                          GrandMA
                        </button>
                      </div>
                      <div className="mt-3 text-sm text-white/80">
                        Allows lighting designers to simply create and manage
                        effects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="video" className="js-section mt-16 scroll-mt-24">
          <div className="js-reveal relative left-1/2 w-screen -translate-x-1/2">
            <div className="relative aspect-video overflow-hidden">
              <video
                className="h-full w-full object-cover"
                src="/showcase.mp4"
                muted
                loop
                autoPlay
                playsInline
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
            </div>
          </div>
        </section>
      </section>

      <div className="relative w-full bg-gradient-to-b from-transparent to-white/5 pb-24 pt-16">
        <section className="container mx-auto px-6 sm:px-12 md:px-12">
          <section
            id="cases"
            className="js-section mx-auto max-w-6xl scroll-mt-24"
          >
            <div className="js-reveal">
              <div className="text-3xl text-white sm:text-5xl">Projects</div>
              <div className="mt-2 max-w-3xl text-base text-white/70 sm:text-lg">
                A glimpse of installations and performances we light up
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
              {project.slice(0, 3).map((p) => (
                <div key={`${p.title}-${p.date}`} className="js-reveal group">
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-black/40">
                    <Image
                      fill
                      src={p.image}
                      alt={p.title}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="whitespace-pre-line text-lg font-semibold text-white">
                      {p.title}
                    </div>
                    <div className="mt-1 text-sm text-white/70">{p.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="js-section mx-auto mt-16 max-w-xl">
            <div className="js-reveal text-3xl text-white sm:text-5xl">
              Contact us
            </div>
            <div className="js-reveal mt-2 text-base text-white/70 sm:text-lg">
              Send us your details and we’ll reach out.
            </div>
            <div className="js-reveal mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 to-white/5 p-[1px]">
              <form className="rounded-2xl bg-black/40 p-5 backdrop-blur-xl">
                <div className="grid gap-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20"
                  />
                  <input
                    type="text"
                    placeholder="Organization"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20"
                  />
                  <textarea
                    placeholder="Note"
                    rows={4}
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/20"
                  />
                  <div className="pt-2">
                    <button type="button" className="nav-pill w-full">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
