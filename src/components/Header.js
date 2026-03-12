"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// Header: sticky top navigation with elevated z-index to avoid overlap
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const lastDirectionRef = useRef("down");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    const currentDirection = latest > previous ? "down" : "up";

    if (currentDirection !== lastDirectionRef.current) {
      lastDirectionRef.current = currentDirection;
      lastYRef.current = latest;
    }

    if (currentDirection === "down" && latest > 150) {
      setHidden(true);
    } else if (currentDirection === "up") {
      // Show navbar if scrolled up more than 100px or near the top
      if (lastYRef.current - latest > 100 || latest < 150) {
        setHidden(false);
      }
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60"
    >
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div
          className={`flex flex-wrap items-center gap-4 border border-white/10 bg-black/20 px-4 py-2 text-white backdrop-blur transition ${
            isMenuOpen ? "rounded-2xl" : "rounded-full"
          }`}
        >
          <Link href="/" className="relative h-6 w-24 sm:h-7 sm:w-28">
            <Image fill src="/logo/livibe-logo.svg" alt="Livibe logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-3 sm:flex">
            <div className="relative">
              <div className="group inline-flex items-center">
                <Link
                  href="/products#led-products"
                  className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white focus:outline-none"
                >
                  Product
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 text-white/60"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>

                <div className="pointer-events-none absolute left-0 top-full w-[260px] pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black p-2 backdrop-blur">
                    <Link
                      href="/products#led-products"
                      className="flex items-start gap-3 rounded-xl px-3 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white"
                    >
                      <div>
                        <div className="font-medium">LED Devices</div>
                        <div className="mt-0.5 text-xs text-white/60">
                          Wristband 2/8 LEDs, Stick, Venue
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/products/vibe-detection#vibe-detection-wristband"
                      className="flex items-start gap-3 rounded-xl px-3 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-white"
                    >
                      <div>
                        <div className="flex items-center gap-2 font-medium">
                          Vibe Detection Wristband
                          <span className="rounded-full border border-white/15 bg-black/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white/80">
                            New
                          </span>
                        </div>
                        <div className="mt-0.5 text-xs text-white/60">
                          Audience vibe & motion insights
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/effects"
              className="text-sm text-white/90 hover:text-white"
            >
              Effect
            </Link>
            <Link
              href="/about"
              className="text-sm text-white/90 hover:text-white"
            >
              About us
            </Link>
          </div>
          {/* <div className="ml-auto hidden items-center gap-2 sm:flex">
            <div className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/70">
              EN
            </div>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="ml-auto flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/90 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="basis-full sm:hidden">
              <div className="mt-4 flex flex-col gap-4 border-t border-white/0 pt-4">
                <div className="flex flex-col gap-2">
                  <div className="text-base text-white/90">Product</div>
                  <div className="ml-3 flex flex-col gap-2 border-l border-white/10 pl-3">
                    <Link
                      href="/products#led-products"
                      className="text-sm text-white/80 hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      LED Wristband
                    </Link>
                    <Link
                      href="/products/vibe-detection#vibe-detection-wristband"
                      className="text-sm text-white/80 hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Vibe Detection Wristband
                    </Link>
                  </div>
                </div>
                <Link
                  href="/effects"
                  className="text-base text-white/90 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Effect
                </Link>
                <Link
                  href="/about"
                  className="text-base text-white/90 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About us
                </Link>
                {/* <div className="flex items-center gap-2">
                  <div className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/70">
                    EN
                  </div>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
