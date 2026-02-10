"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  /** =========================
   * CONFIG
   ========================== */
  const HERO_END = 0.22; // adjust if needed

  // ✅ No pink/magenta palette
  const COLORS = {
    blue: "#1D4ED8",
    purple: "#5B21B6", // deeper violet (less pink)
    orange: "#FF5500", // vivid orange
    yellow: "#edf500", // vivid gold
  };

  // Map progress after hero: [HERO_END..1] -> [0..1]
  const afterHero = useTransform(smoothProgress, [HERO_END, 1], [0, 1], {
    clamp: true,
  });

  /** =========================
   * SHAPE 1 (Top Right)
   ========================== */
  const shape1Top = useTransform(
    afterHero,
    [0, 0.33, 0.5, 0.66, 1],
    ["-30%", "40%", "30%", "20%", "80%"]
  );
  const shape1Right = useTransform(
    afterHero,
    [0, 0.33, 0.5, 0.66, 1],
    ["-20%", "-10%", "25%", "60%", "10%"]
  );
  const shape1Scale = useTransform(
    afterHero,
    [0, 0.33, 0.5, 0.66, 1],
    [1, 0.8, 1.0, 1.1, 0.5]
  );

  // Hero: keep BLUE, AfterHero: keep your palette transitions
  const shape1Color = useTransform(
    smoothProgress,
    [0, HERO_END, 0.33, 0.5, 0.66, 1],
    [COLORS.blue, COLORS.blue, COLORS.purple, COLORS.orange, COLORS.purple, COLORS.blue]
  );
  const shape1Opacity = useTransform(
    smoothProgress,
    [0, HERO_END, 0.33, 0.5, 0.66, 1],
    [0.75, 0.75, 0.9, 0.95, 0.95, 0.4]
  );

  /** =========================
   * SHAPE 2 (Bottom Left)
   ========================== */
  const shape2Bottom = useTransform(
    afterHero,
    [0, 0.33, 0.5, 0.66, 1],
    ["-20%", "40%", "25%", "10%", "80%"]
  );
  const shape2Left = useTransform(
    afterHero,
    [0, 0.33, 0.5, 0.66, 1],
    ["-10%", "-10%", "25%", "60%", "10%"]
  );
  const shape2Scale = useTransform(
    afterHero,
    [0, 0.33, 0.5, 0.66, 1],
    [1, 0.8, 1.0, 1.1, 0.5]
  );

  // Hero: keep PURPLE base, AfterHero: transitions
  const shape2Color = useTransform(
    smoothProgress,
    [0, HERO_END, 0.33, 0.5, 0.66, 1],
    [COLORS.purple, COLORS.purple, COLORS.blue, COLORS.purple, COLORS.yellow, COLORS.purple]
  );

  // ✅ Reduce purple dominance during HERO => warm colors become visible
  const shape2Opacity = useTransform(
    smoothProgress,
    [0, HERO_END, 0.33, 0.5, 0.66, 1],
    [0.6, 0.6, 1.0, 0.95, 0.95, 0.55]
  );

  /** =========================
   * HERO WARM CORE
   ========================== */
  const warmOverlayOpacity = useTransform(smoothProgress, [0, HERO_END], [0.85, 0]);

  // Orange core (bottom-center)
  const shape3Opacity = useTransform(smoothProgress, [0, HERO_END], [1.0, 0]);
  const shape3Rotate = useTransform(smoothProgress, [0, HERO_END], [0, 180]);
  const shape3Scale = useTransform(smoothProgress, [0, HERO_END], [1.15, 0.5]);
  const shape3Top = useTransform(smoothProgress, [0, HERO_END], ["78%", "50%"]);
  const shape3Left = useTransform(smoothProgress, [0, HERO_END], ["50%", "50%"]);

  // Purple accent (small)
  const shape4Opacity = useTransform(smoothProgress, [0, HERO_END], [0.25, 0]);
  const shape4Rotate = useTransform(smoothProgress, [0, HERO_END], [0, -180]);
  const shape4Scale = useTransform(smoothProgress, [0, HERO_END], [1.05, 0.5]);
  const shape4Top = useTransform(smoothProgress, [0, HERO_END], ["28%", "80%"]);
  const shape4Right = useTransform(smoothProgress, [0, HERO_END], ["18%", "10%"]);

  // Yellow core (gold highlight)
  const shape5Opacity = useTransform(smoothProgress, [0, HERO_END], [1.0, 0]);
  const shape5Rotate = useTransform(smoothProgress, [0, HERO_END], [0, 90]);
  const shape5Scale = useTransform(smoothProgress, [0, HERO_END], [1.2, 0.5]);
  const shape5Top = useTransform(smoothProgress, [0, HERO_END], ["88%", "90%"]);
  const shape5Left = useTransform(smoothProgress, [0, HERO_END], ["58%", "90%"]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* 1) Base dark */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06060d] via-[#040407] to-[#05050a]" />

      {/* 2) Primary Wave (Bottom-Left) */}
      <motion.div
        className="absolute h-[100vh] w-[140vw] mix-blend-screen"
        style={{
          bottom: shape2Bottom,
          left: shape2Left,
          scale: shape2Scale,
          backgroundColor: shape2Color,
          opacity: shape2Opacity,
          filter: "blur(90px) saturate(135%)",
          transformOrigin: "center center",
        }}
        animate={{
          y: [-20, 20, -20],
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
        className="absolute h-[140vh] w-[140vh] mix-blend-lighten"
        style={{
          top: shape1Top,
          right: shape1Right,
          scale: shape1Scale,
          backgroundColor: shape1Color,
          opacity: shape1Opacity,
          filter: "blur(70px) saturate(135%)",
        }}
        animate={{
          y: [20, -20, 20],
          rotate: [2, -2, 2],
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* 🔥 HERO warm overlay ABOVE waves (adds orange/yellow without pink wash) */}
      <motion.div
        className="absolute inset-0 pointer-events-none mix-blend-screen"
        style={{
          opacity: warmOverlayOpacity,
          background: `
            radial-gradient(1000px 720px at 50% 80%, rgba(255,215,0,0.7), transparent 62%),
            radial-gradient(920px 680px at 52% 84%, rgba(255,85,0,0.8), transparent 68%)
          `,
          filter: "blur(24px) saturate(300%) contrast(160%)",
        }}
      />

      {/* 4) Accent Blob (Orange) - Hero only */}
      <motion.div
        className="absolute h-[70vh] w-[70vh] mix-blend-screen pointer-events-none"
        style={{
          top: shape3Top,
          left: shape3Left,
          x: "-50%",
          y: "-50%",
          opacity: shape3Opacity,
          rotate: shape3Rotate,
          scale: shape3Scale,
          backgroundColor: COLORS.orange,
          filter: "blur(32px) saturate(350%) contrast(170%)",
        }}
        animate={{
          scale: [1, 1.22, 1],
          borderRadius: [
            "42% 58% 60% 40% / 60% 30% 70% 40%",
            "62% 38% 30% 70% / 30% 60% 40% 70%",
            "42% 58% 60% 40% / 60% 30% 70% 40%",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 5) Accent Blob (Purple) - Hero only */}
      <motion.div
        className="absolute h-[40vh] w-[40vh] mix-blend-screen pointer-events-none"
        style={{
          top: shape4Top,
          right: shape4Right,
          opacity: shape4Opacity,
          rotate: shape4Rotate,
          scale: shape4Scale,
          backgroundColor: COLORS.purple,
          filter: "blur(60px) saturate(130%)",
        }}
        animate={{
          scale: [1, 1.12, 1],
          borderRadius: [
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* 6) Accent Blob (Yellow) - Hero only */}
      <motion.div
        className="absolute h-[42vh] w-[42vh] mix-blend-screen pointer-events-none"
        style={{
          top: shape5Top,
          left: shape5Left,
          opacity: shape5Opacity,
          rotate: shape5Rotate,
          scale: shape5Scale,
          backgroundColor: COLORS.yellow,
          filter: "blur(18px) saturate(400%) contrast(200%)",
        }}
        animate={{
          scale: [1, 1.25, 1],
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* 7) Grain (requires .bg-grain CSS) */}
      <div className="absolute inset-0 bg-grain opacity-[0.08] mix-blend-overlay pointer-events-none" />

      {/* 8) Vignette (lighter so warm tones survive) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_45%,_#000_100%)] pointer-events-none opacity-30" />
    </div>
  );
}
