"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedBackground() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    <div ref={rootRef} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="js-orb absolute -right-24 -top-28 h-[440px] w-[440px] rounded-full bg-[#FF3D6E] opacity-100 mix-blend-normal" />
      <div className="js-orb absolute -bottom-40 right-6 h-[520px] w-[520px] rounded-full bg-[#4F9DFF] opacity-100 mix-blend-normal" />
      <div className="js-orb absolute right-56 top-44 h-28 w-28 rounded-full bg-[#FF7A2F] opacity-100 mix-blend-normal" />
      <div className="js-orb absolute right-28 top-72 h-20 w-20 rounded-full bg-[#6B5BFF] opacity-100 mix-blend-normal" />
      <div className="js-orb absolute -left-10 bottom-28 h-28 w-28 rounded-full bg-[#A7F64A] opacity-100 mix-blend-normal" />
    </div>
  );
}
