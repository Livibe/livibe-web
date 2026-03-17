"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function StaticAnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#776AFF]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#776AFF] via-[#A500FF] to-[#CE56CF]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 110%, rgba(255, 96, 51, 0.85) 0%, rgba(255, 96, 51, 0.25) 35%, rgba(255, 96, 51, 0) 70%)",
        }}
      />
      <div className="absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_45%,_#000_100%)] pointer-events-none opacity-25" />
    </div>
  );
}

function MotionAnimatedBackground() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  /** =========================
   * CONFIG
   ========================== */
  const HERO_END = 0.22;

  // ✅ Balanced palette (Optimized for performance - pre-saturated)
  const COLORS = {
    blue: "#776AFF",
    purple: "#A500FF",
    pink: "#CE56CF",
    cyan: "#46C7DE",
    orange: "#FF6033",
    green: "#21D285",
    yellow: "#CE56CF",
  };

  // Map progress after hero: [HERO_END..1] -> [0..1]
  const afterHero = useTransform(smoothProgress, [HERO_END, 1], [0, 1], {
    clamp: true,
  });

  /** =========================
   * SHAPE 1 (Top Right)
   ========================== */
  // Converted to Y (vh) for transform optimization
  const shape1Y = useTransform(
    afterHero,
    [0, 0.33, 0.5, 0.66, 1],
    ["-30vh", "40vh", "30vh", "20vh", "80vh"]
  );
  // Converted to X (vw) - Right aligned, so positive X moves LEFT if we use right:0? 
  // No, we'll use top:0, right:0. Positive x moves right (off screen). 
  // Original right: -20% (out right) -> x: 20vw
  // Original right: 10% (in left) -> x: -10vw
  const shape1X = useTransform(
    afterHero,
    [0, 0.33, 0.5, 0.66, 1],
    ["20vw", "10vw", "-25vw", "-60vw", "-10vw"]
  );
  const shape1Scale = useTransform(
    afterHero,
    [0, 0.33, 0.5, 0.66, 1],
    [1, 0.8, 1.0, 1.1, 0.5]
  );

  // ✅ Hero: keep blue, After: your transitions
  const shape1Color = useTransform(
    smoothProgress,
    [0, HERO_END, 0.33, 0.5, 0.66, 1],
    [COLORS.blue, COLORS.blue, COLORS.purple, COLORS.pink, COLORS.purple, COLORS.blue]
  );
  const shape1Opacity = useTransform(
    smoothProgress,
    [0, HERO_END, 0.33, 0.5, 0.66, 1],
    // ✅ เพิ่มความเด่นของโทนเย็นขึ้นนิด เพื่อ balance warm
    [0.62, 0.62, 0.78, 0.82, 0.82, 0.35]
  );

  /** =========================
   * SHAPE 2 (Bottom Left) - main field
   ========================== */
  // Converted to Y (vh) - Bottom aligned. 
  // Original bottom: -20% (down) -> y: 20vh
  // Original bottom: 10% (up) -> y: -10vh
  const shape2Y = useTransform(
    afterHero,
    [0, 0.33, 0.5, 0.66, 1],
    ["20vh", "-40vh", "-25vh", "-10vh", "-80vh"]
  );
  // Converted to X (vw) - Left aligned.
  // Original left: -10% -> x: -10vw
  const shape2X = useTransform(
    afterHero,
    [0, 0.33, 0.5, 0.66, 1],
    ["-10vw", "-10vw", "25vw", "60vw", "10vw"]
  );
  const shape2Scale = useTransform(
    afterHero,
    [0, 0.33, 0.5, 0.66, 1],
    [1, 0.8, 1.0, 1.1, 0.5]
  );

  const shape2Color = useTransform(
    smoothProgress,
    [0, HERO_END, 0.33, 0.5, 0.66, 1],
    [COLORS.purple, COLORS.purple, COLORS.cyan, COLORS.blue, COLORS.orange, COLORS.pink]
  );

  const shape2Opacity = useTransform(
    smoothProgress,
    [0, HERO_END, 0.33, 0.5, 0.66, 1],
    // ✅ เพิ่มม่วง/น้ำเงินขึ้นนิดให้ balance warm
    [0.55, 0.55, 0.88, 0.88, 0.88, 0.55]
  );

  /** =========================
   * HERO WARM (เฉพาะ Hero)
   ========================== */
  const warmOverlayOpacity = useTransform(smoothProgress, [0, HERO_END], [0.75, 0]);

  // Orange core
  const shape3Opacity = useTransform(smoothProgress, [0, HERO_END], [0.75, 0]);
  const shape3Rotate = useTransform(smoothProgress, [0, HERO_END], [0, 180]);
  const shape3Scale = useTransform(smoothProgress, [0, HERO_END], [1.08, 0.5]);
  // Use transforms for movement
  const shape3Y = useTransform(smoothProgress, [0, HERO_END], ["0%", "-26%"]); // 76-50 = 26% diff? No. 
  // Original top: 76% -> 50%.  Delta -26vh (approx).
  // Let's keep top/left fixed and animate x/y.
  // Center: top 50%, left 50%.
  // Start: top 76% -> y: 26vh. End: top 50% -> y: 0.
  // Start: left 50% -> x: 0. End: left 50% -> x: 0.
  const shape3Y_val = useTransform(smoothProgress, [0, HERO_END], ["26vh", "0vh"]);
  
  // Yellow highlight
  const shape5Opacity = useTransform(smoothProgress, [0, HERO_END], [0.70, 0]);
  const shape5Rotate = useTransform(smoothProgress, [0, HERO_END], [0, 90]);
  const shape5Scale = useTransform(smoothProgress, [0, HERO_END], [1.10, 0.5]);
  // Original top: 86% -> 90%. Delta +4vh.
  // Original left: 58% -> 90%. Delta +32vw.
  // Anchor top-left 0,0? Or relative to center?
  // Let's use top:0, left:0.
  const shape5Y = useTransform(smoothProgress, [0, HERO_END], ["86vh", "90vh"]);
  const shape5X = useTransform(smoothProgress, [0, HERO_END], ["58vw", "90vw"]);

  // Subtle purple accent
  const shape4Opacity = useTransform(smoothProgress, [0, HERO_END], [0.10, 0]);
  const shape4Rotate = useTransform(smoothProgress, [0, HERO_END], [0, -180]);
  const shape4Scale = useTransform(smoothProgress, [0, HERO_END], [1.0, 0.5]);
  // Original top: 28% -> 80%.
  // Original right: 18% -> 10%.
  // Anchor top:0, right:0.
  const shape4Y = useTransform(smoothProgress, [0, HERO_END], ["28vh", "80vh"]);
  const shape4X = useTransform(smoothProgress, [0, HERO_END], ["-18vw", "-10vw"]); // Right to left is negative X? No, right: 18% is 18% from right. x: -18vw means moved left by 18vw.

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#776AFF]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#776AFF] via-[#A500FF] to-[#CE56CF]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 110%, rgba(255, 96, 51, 0.85) 0%, rgba(255, 96, 51, 0.25) 35%, rgba(255, 96, 51, 0) 70%)",
        }}
      />

      {/* 2) Primary Wave (Bottom-Left) */}
      <motion.div
        className="absolute h-[100vh] w-[140vw]"
        style={{
          bottom: 0,
          left: 0,
          y: shape2Y,
          x: shape2X,
          scale: shape2Scale,
          backgroundColor: shape2Color,
          opacity: shape2Opacity,
          // ✅ Optimized: Reduced blur, removed saturate/contrast (baked into colors)
          filter: "blur(60px)", 
          willChange: "transform, opacity",
          transformOrigin: "center center",
        }}
        animate={{
          rotate: [-2, 2, -2],
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3) Secondary Wave (Top-Right) */}
      <motion.div
        className="absolute h-[140vh] w-[140vh]"
        style={{
          top: 0,
          right: 0,
          y: shape1Y,
          x: shape1X,
          scale: shape1Scale,
          backgroundColor: shape1Color,
          opacity: shape1Opacity,
          // ✅ Optimized
          filter: "blur(50px)",
          willChange: "transform, opacity",
        }}
        animate={{
          rotate: [2, -2, 2],
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ✅ HERO warm overlay — Optimized */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: warmOverlayOpacity,
          background: `linear-gradient(to right, 
            transparent 0%, 
            ${COLORS.purple}22 10%, 
            ${COLORS.pink}55 28%,
            ${COLORS.orange}CC 45%, 
            ${COLORS.orange}FF 52%, 
            ${COLORS.orange}CC 60%, 
            ${COLORS.cyan}22 90%, 
            transparent 100%
          )`,
          filter: "blur(40px)", // Reduced from 60px + saturate/contrast
          willChange: "opacity",
        }}
      />

      {/* 4) Middle Orange Solid Glow - Optimized SVG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1000 1000"
          className="absolute h-full w-full opacity-90"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="diffuseBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="40" /> {/* Reduced from 70 */}
            </filter>
            <linearGradient id="washGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={COLORS.purple} stopOpacity="0" />
              <stop offset="18%" stopColor={COLORS.pink} stopOpacity="0.25" />
              <stop offset="38%" stopColor={COLORS.orange} stopOpacity="0.9" />
              <stop offset="50%" stopColor={COLORS.orange} stopOpacity="1.0" />
              <stop offset="62%" stopColor={COLORS.orange} stopOpacity="0.9" />
              <stop offset="82%" stopColor={COLORS.pink} stopOpacity="0.25" />
              <stop offset="100%" stopColor={COLORS.cyan} stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.rect
            x="0"
            y="250"
            width="1000"
            height="500"
            animate={{
              y: [250, 200, 300, 250],
              opacity: [0.9, 1.0, 0.9],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            fill="url(#washGrad)"
            filter="url(#diffuseBlur)"
            style={{ 
              opacity: shape3Opacity,
              mixBlendMode: "screen",
              // Map y position for scroll using transform instead of top/left
              y: shape3Y_val
            }}
          />
        </svg>
      </div>

      {/* 5) Purple Accent (Hero only) */}
      <motion.div
        className="absolute h-[38vh] w-[38vh] rounded-full pointer-events-none"
        style={{
          top: 0,
          right: 0,
          y: shape4Y,
          x: shape4X,
          opacity: shape4Opacity,
          rotate: shape4Rotate,
          scale: shape4Scale,
          backgroundColor: COLORS.purple,
          filter: "blur(40px)", // Reduced
          willChange: "transform, opacity",
        }}
      />

      {/* ✅ 6) Yellow Blob */}
      <motion.div
        className="absolute h-[42vh] w-[42vh] rounded-full pointer-events-none"
        style={{
          top: 0,
          left: 0,
          y: shape5Y,
          x: shape5X,
          opacity: shape5Opacity,
          rotate: shape5Rotate,
          scale: shape5Scale,
          backgroundColor: COLORS.yellow,
          filter: "blur(15px)", // Reduced
          willChange: "transform, opacity",
        }}
      />

      {/* 7) Grain */}
      <div className="absolute inset-0 bg-grain opacity-[0.08] mix-blend-overlay pointer-events-none" />

      {/* 8) Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_45%,_#000_100%)] pointer-events-none opacity-25" />
    </div>
  );
}

export default function AnimatedBackground() {
  const [useStaticBackground, setUseStaticBackground] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const smallScreen = window.matchMedia("(max-width: 768px)");

    const update = () =>
      setUseStaticBackground(reducedMotion.matches || smallScreen.matches);

    update();
    reducedMotion.addEventListener("change", update);
    smallScreen.addEventListener("change", update);

    return () => {
      reducedMotion.removeEventListener("change", update);
      smallScreen.removeEventListener("change", update);
    };
  }, []);

  if (useStaticBackground) {
    return <StaticAnimatedBackground />;
  }

  return <MotionAnimatedBackground />;
}
