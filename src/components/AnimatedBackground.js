"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AnimatedBackground() {
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

  // ✅ Balanced palette (ยังไม่มีชมพู)
  const COLORS = {
    blue: "#4C6FFF",
    purple: "#f45eff",
    orange: "#ff815eb9",
    yellow: "#ff815ea3",
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

  // ✅ Hero: keep blue, After: your transitions
  const shape1Color = useTransform(
    smoothProgress,
    [0, HERO_END, 0.33, 0.5, 0.66, 1],
    [COLORS.blue, COLORS.blue, COLORS.purple, COLORS.orange, COLORS.purple, COLORS.blue]
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

  const shape2Color = useTransform(
    smoothProgress,
    [0, HERO_END, 0.33, 0.5, 0.66, 1],
    [COLORS.purple, COLORS.purple, COLORS.blue, COLORS.purple, COLORS.yellow, COLORS.purple]
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
  const shape3Top = useTransform(smoothProgress, [0, HERO_END], ["76%", "50%"]);
  const shape3Left = useTransform(smoothProgress, [0, HERO_END], ["50%", "50%"]);

  // Yellow highlight
  const shape5Opacity = useTransform(smoothProgress, [0, HERO_END], [0.70, 0]);
  const shape5Rotate = useTransform(smoothProgress, [0, HERO_END], [0, 90]);
  const shape5Scale = useTransform(smoothProgress, [0, HERO_END], [1.10, 0.5]);
  const shape5Top = useTransform(smoothProgress, [0, HERO_END], ["86%", "90%"]);
  const shape5Left = useTransform(smoothProgress, [0, HERO_END], ["58%", "90%"]);

  // Subtle purple accent
  const shape4Opacity = useTransform(smoothProgress, [0, HERO_END], [0.10, 0]);
  const shape4Rotate = useTransform(smoothProgress, [0, HERO_END], [0, -180]);
  const shape4Scale = useTransform(smoothProgress, [0, HERO_END], [1.0, 0.5]);
  const shape4Top = useTransform(smoothProgress, [0, HERO_END], ["28%", "80%"]);
  const shape4Right = useTransform(smoothProgress, [0, HERO_END], ["18%", "10%"]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* 1) Base dark */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06060d] via-[#040407] to-[#05050a]" />

      {/* 2) Primary Wave (Bottom-Left) */}
      <motion.div
        className="absolute h-[100vh] w-[140vw]"
        style={{
          bottom: shape2Bottom,
          left: shape2Left,
          scale: shape2Scale,
          backgroundColor: shape2Color,
          opacity: shape2Opacity,
          // ✅ เพิ่มโทนเย็นให้คมขึ้นนิด
          filter: "blur(90px) saturate(165%) contrast(125%)",
          transformOrigin: "center center",
        }}
        animate={{
          y: [-18, 18, -18],
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
          top: shape1Top,
          right: shape1Right,
          scale: shape1Scale,
          backgroundColor: shape1Color,
          opacity: shape1Opacity,
          filter: "blur(70px) saturate(165%) contrast(125%)",
        }}
        animate={{
          y: [18, -18, 18],
          rotate: [2, -2, 2],
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ✅ HERO warm overlay — Intense Atmospheric Orange Light Wash */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: warmOverlayOpacity,
          background: `linear-gradient(to right, 
            transparent 0%, 
            ${COLORS.purple}22 10%, 
            ${COLORS.orange}CC 40%, 
            #ff6a00 50%, 
            ${COLORS.orange}CC 60%, 
            ${COLORS.blue}22 90%, 
            transparent 100%
          )`,
          filter: "blur(60px) saturate(200%) contrast(120%)",
        }}
      />

      {/* 4) Middle Orange Solid Glow - Strong presence, no circular edges */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1000 1000"
          className="absolute h-full w-full opacity-90"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="diffuseBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="70" />
            </filter>
            <linearGradient id="washGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={COLORS.purple} stopOpacity="0" />
              <stop offset="15%" stopColor={COLORS.orange} stopOpacity="0.2" />
              <stop offset="35%" stopColor={COLORS.orange} stopOpacity="0.9" />
              <stop offset="50%" stopColor="#ff6a00" stopOpacity="1.0" />
              <stop offset="65%" stopColor={COLORS.orange} stopOpacity="0.9" />
              <stop offset="85%" stopColor={COLORS.orange} stopOpacity="0.2" />
              <stop offset="100%" stopColor={COLORS.blue} stopOpacity="0" />
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
              mixBlendMode: "screen"
            }}
          />
        </svg>
      </div>

      {/* 5) Purple Accent (Hero only) */}
      <motion.div
        className="absolute h-[38vh] w-[38vh] rounded-full pointer-events-none"
        style={{
          top: shape4Top,
          right: shape4Right,
          opacity: shape4Opacity,
          rotate: shape4Rotate,
          scale: shape4Scale,
          backgroundColor: COLORS.purple,
          filter: "blur(58px) saturate(155%) contrast(120%)",
        }}
      />

      {/* ✅ 6) Yellow Blob — FIX: ให้เป็นวงกลม + ลดความแรง */}
      <motion.div
        className="absolute h-[42vh] w-[42vh] rounded-full pointer-events-none"
        style={{
          top: shape5Top,
          left: shape5Left,
          opacity: shape5Opacity,
          rotate: shape5Rotate,
          scale: shape5Scale,
          backgroundColor: COLORS.yellow,
          // ✅ blur มากขึ้นนิดให้เนียน + ลด saturate/contrast ให้กลมกล่อม
          filter: "blur(22px) saturate(150%) contrast(115%)",
        }}
      />

      {/* 7) Grain */}
      <div className="absolute inset-0 bg-grain opacity-[0.08] mix-blend-overlay pointer-events-none" />

      {/* 8) Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_45%,_#000_100%)] pointer-events-none opacity-25" />
    </div>
  );
}
