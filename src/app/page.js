"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const rootRef = useRef(null);

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
          <div className="js-hero font-inter text-5xl leading-tight text-white sm:text-7xl">
            Ignite the crowd
          </div>
          <div className="js-hero mt-4 max-w-3xl font-ivy text-3xl leading-snug text-white sm:text-5xl">
            Light up moments
          </div>

          <div className="js-reveal mt-4 max-w-4xl font-ivy text-white/70 text-base sm:text-lg">
            <br />
            We shape the future of event experiences and engagement by
            connecting the audience <br /> with the heartbeat of the show
            through our immersive LED technology
            <br />
            <br />
            Turn your event into an interactive journey of light
          </div>
          <div className="js-hero mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:muan@livibe.co?subject=Show Project"
              className="nav-pill"
            >
              Start a project
            </a>
            <a href="/effects" className="nav-pill">
              Our effects
            </a>
            <a href="/products" className="nav-pill">
              Products
            </a>
          </div>
        </div>
        <section id="story" className="js-section mt-16">
          <div className="mx-auto max-w-6xl px-6 sm:px-12 md:px-12">
            <div className="js-reveal max-w-4xl font-ivy text-white/80 text-base sm:text-lg leading-relaxed">
              Livibe connects audiences to the show by bringing the experience
              beyond the stage and into the crowd. We enable audiences to feel,
              move, and connect together, creating immersive and memorable
              moments
            </div>
          </div>
        </section>

        <section id="solution" className="js-section mt-16 scroll-mt-24 px-6 sm:px-12 md:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="js-reveal font-ivy text-3xl text-white sm:text-5xl">
              Our Solution
            </div>
            <div className="js-reveal mt-3 max-w-3xl font-ivy text-white/70 text-base sm:text-lg">
              Products designed for crowd-wide light choreography
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="js-reveal group relative row-span-2 overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 to-white/5 p-[1px]">
                <div className="h-full rounded-2xl bg-black/40 p-6 backdrop-blur-xl">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF3D6E] opacity-100" />
                  <div className="font-inter text-base text-white sm:text-lg">
                    Lighting Device
                  </div>
                  <div className="mt-2 font-ivy text-white/70">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="js-reveal group relative flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 to-white/5 p-[1px]">
                  <div className="h-full rounded-2xl bg-black/40 p-6 backdrop-blur-xl">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#4F9DFF] opacity-100" />
                    <div className="font-inter text-base text-white sm:text-lg">
                      Control System
                    </div>
                    <div className="mt-2 font-ivy text-white/70">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                </div>

                <div className="js-reveal group relative flex-1 overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 to-white/5 p-[1px]">
                  <div className="h-full rounded-2xl bg-black/40 p-6 backdrop-blur-xl">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#A7F64A] opacity-100" />
                    <div className="font-inter text-[20px] text-white">
                      Effects Simulator
                    </div>
                    <div className="mt-2 font-ivy text-white/70">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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

        <section
          id="projects"
          className="js-section mx-4 mt-16 scroll-mt-24 sm:mx-12 md:mx-12 lg:mx-16"
        >
          <div className="js-reveal relative overflow-hidden rounded-2xl bg-gradient-to-tr from-[#3D6CE5] via-[#23CC34] to-[#FFE144] p-[2px]">
            <div className="relative rounded-2xl bg-black/70 p-8 backdrop-blur-xl">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white opacity-100" />
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="font-ivy text-[24px] text-white sm:text-[30px]">
                  Bring your next show to life
                </div>
                <a
                  href="mailto:muan@livibe.co?subject=Show Project"
                  className="nav-pill"
                >
                  Start a project
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="cases"
          className="js-section mx-auto mt-16 max-w-6xl scroll-mt-24 px-6"
        >
          <div className="js-reveal">
            <div className="font-ivy text-3xl text-white sm:text-5xl">
              Example Cases
            </div>
            <div className="mt-2 max-w-3xl font-ivy text-white/70 text-base sm:text-lg">
              A glimpse of installations and performances we light up
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="js-reveal group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 to-white/5 p-[1px]">
              <div className="rounded-2xl bg-black/40 p-4 backdrop-blur-xl">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-black/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)] opacity-35 [background-size:18px_18px]" />
                  <Image
                    fill
                    src="/logo/livibe-logo.png"
                    alt="Arena Concert"
                    className="object-contain p-4"
                  />
                </div>
                <div className="mt-4 font-inter text-white text-base sm:text-lg">Arena Concert</div>
                <div className="font-ivy text-white/70 text-base sm:text-lg">
                  40k wristbands synced to the finale
                </div>
              </div>
            </div>
            <div className="js-reveal group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 to-white/5 p-[1px]">
              <div className="rounded-2xl bg-black/40 p-4 backdrop-blur-xl">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-black/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)] opacity-35 [background-size:18px_18px]" />
                  <Image
                    fill
                    src="/iconic-flower.svg"
                    alt="Festival Stage"
                    className="object-contain p-8"
                  />
                </div>
                <div className="mt-4 font-inter text-white text-base sm:text-lg">Festival Stage</div>
                <div className="font-ivy text-white/70 text-base sm:text-lg">
                  Interactive color waves across the crowd
                </div>
              </div>
            </div>
            <div className="js-reveal group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 to-white/5 p-[1px]">
              <div className="rounded-2xl bg-black/40 p-4 backdrop-blur-xl">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-black/30">
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)] opacity-35 [background-size:18px_18px]" />
                  <Image
                    fill
                    src="/blink.svg"
                    alt="Club Experience"
                    className="object-contain p-10"
                  />
                </div>
                <div className="mt-4 font-inter text-white">
                  Club Experience
                </div>
                <div className="font-ivy text-white/70">
                  Beat-reactive effects all night long
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="js-section mx-auto mt-16 max-w-6xl scroll-mt-24 px-6"
        >
          <div className="js-reveal">
            <div className="font-ivy text-3xl text-white sm:text-5xl">
              Testimonials
            </div>
            <div className="mt-2 max-w-3xl font-ivy text-white/70 text-base sm:text-lg">
              What people say about the experience
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="js-reveal group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 to-white/5 p-[1px]">
              <div className="h-full rounded-2xl bg-black/40 p-6 backdrop-blur-xl">
                <div className="font-inter text-base text-white sm:text-lg">
                  Banpuen Live House
                </div>
                <div className="mt-1 text-white/50 text-base sm:text-lg">Event</div>
                <div className="mt-4 font-ivy text-white/80 text-base sm:text-lg">
                  &quot;Livibe lit the room beautifully — smooth setup and an
                  unforgettable crowd sync.&quot;
                </div>
                <div className="mt-4 flex text-[#FFD84A]">★★★★★</div>
              </div>
            </div>
            <div className="js-reveal group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 to-white/5 p-[1px]">
              <div className="h-full rounded-2xl bg-black/40 p-6 backdrop-blur-xl">
                <div className="font-inter text-base text-white sm:text-lg">
                  TEDxCharoenkrung
                </div>
                <div className="mt-1 text-white/50 text-base sm:text-lg">Event</div>
                <div className="mt-4 font-ivy text-white/80">
                  &quot;Sleek, reliable wristband effects that elevated talks
                  and performances throughout the show.&quot;
                </div>
                <div className="mt-4 flex text-[#FFD84A]">★★★★★</div>
              </div>
            </div>
          </div>
        </section>

        <section className="js-section mx-auto mt-16 max-w-xl px-6">
          <div className="js-reveal font-ivy text-3xl text-white sm:text-5xl">
            Contact us
          </div>
          <div className="js-reveal mt-2 font-ivy text-white/70 text-base sm:text-lg">
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
    </main>
  );
}
