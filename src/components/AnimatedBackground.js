"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // --- TRANSITION 1: Shape 1 (Top Right) ---
  // 0: Indigo (Hero) -> Toned Blue/Purple Mix
  // 0.33: Blue (Solutions) -> Changed from Purple to Blue (Purple -> Blue Theme)
  // 0.66: Orange (Projects)
  // 1.0: Purple (Contact)
  const shape1Top = useTransform(smoothProgress, [0, 0.33, 0.66, 1], ["-30%", "40%", "20%", "80%"]);
  const shape1Right = useTransform(smoothProgress, [0, 0.33, 0.66, 1], ["-20%", "-10%", "60%", "10%"]);
  const shape1Scale = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [1, 0.8, 1.1, 0.5]);
  const shape1Color = useTransform(smoothProgress, [0, 0.33, 0.66, 1], ["#4F46E5", "#3B82F6", "#FF5500", "#8000FF"]); // Blue
  const shape1Opacity = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [0.7, 0.9, 1, 0.4]);

  // --- TRANSITION 2: Shape 2 (Bottom Left) ---
  // 0: Fuchsia (Hero) -> Changed from Pink to Fuchsia (Less Red, more Purple/Pink)
  // 0.33: Purple (Solutions) -> Changed from Blue to Purple (Purple -> Blue Theme)
  // 0.66: Pink (Projects)
  // 1.0: Purple (Contact)
  const shape2Bottom = useTransform(smoothProgress, [0, 0.33, 0.66, 1], ["-20%", "40%", "10%", "80%"]);
  const shape2Left = useTransform(smoothProgress, [0, 0.33, 0.66, 1], ["-10%", "-10%", "60%", "10%"]);
  const shape2Scale = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [1, 0.8, 1.1, 0.5]);
  const shape2Color = useTransform(smoothProgress, [0, 0.33, 0.66, 1], ["#D946EF", "#A855F7", "#FF0055", "#8000FF"]); // Purple
  const shape2Opacity = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [0.8, 0.9, 0.9, 0.4]);

  // --- TRANSITION 3: Shape 3 (Blue Accent - Hero Only) ---
  // Changed from Yellow to Blue
  // Fade out completely before Solutions section (0.33)
  const shape3Opacity = useTransform(smoothProgress, [0, 0.2], [0.9, 0]);
  const shape3Rotate = useTransform(smoothProgress, [0, 0.33], [0, 180]);
  const shape3Scale = useTransform(smoothProgress, [0, 0.33], [1.2, 0.5]);
  const shape3Top = useTransform(smoothProgress, [0, 0.33], ["20%", "50%"]);
  const shape3Left = useTransform(smoothProgress, [0, 0.33], ["50%", "50%"]);

  // --- TRANSITION 4: Shape 4 (Purple Accent - Hero Only) ---
  // Changed from Yellow to Purple
  const shape4Opacity = useTransform(smoothProgress, [0, 0.2], [0.8, 0]);
  const shape4Rotate = useTransform(smoothProgress, [0, 0.33], [0, -180]);
  const shape4Scale = useTransform(smoothProgress, [0, 0.33], [1.5, 0.5]);
  const shape4Top = useTransform(smoothProgress, [0, 0.33], ["60%", "80%"]);
  const shape4Right = useTransform(smoothProgress, [0, 0.33], ["20%", "10%"]);

  // --- TRANSITION 5: Shape 5 (Cyan Accent - Hero Only) ---
  // Changed from Blue to Cyan
  const shape5Opacity = useTransform(smoothProgress, [0, 0.2], [0.8, 0]);
  const shape5Rotate = useTransform(smoothProgress, [0, 0.33], [0, 90]);
  const shape5Scale = useTransform(smoothProgress, [0, 0.33], [1, 0.5]);
  const shape5Top = useTransform(smoothProgress, [0, 0.33], ["70%", "90%"]);
  const shape5Left = useTransform(smoothProgress, [0, 0.33], ["80%", "90%"]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0a]">
      {/* 1. Base Gradient - Deep Glassy Tone */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#050505] to-[#0a0a0a]" />

      {/* 2. Primary Wave (Left-Bottom - Blue) */}
      <motion.div 
        className="absolute h-[100vh] w-[140vw] mix-blend-hard-light"
        style={{ 
          bottom: shape2Bottom,
          left: shape2Left,
          scale: shape2Scale,
          backgroundColor: shape2Color,
          opacity: shape2Opacity,
          filter: "blur(80px)",
          transformOrigin: "center center",
        }}
        animate={{
          y: [-20, 20, -20],
          rotate: [-2, 2, -2],
          borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* 3. Secondary Wave (Top-Right - Purple) */}
      <motion.div 
        className="absolute h-[140vh] w-[140vh] mix-blend-screen"
        style={{ 
          top: shape1Top,
          right: shape1Right,
          scale: shape1Scale,
          backgroundColor: shape1Color,
          opacity: shape1Opacity,
          filter: "blur(60px)",
        }} 
        animate={{
          y: [20, -20, 20],
          rotate: [2, -2, 2],
          borderRadius: ["50% 50% 50% 50% / 50% 50% 50% 50%", "30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 50% 50% / 50% 50% 50% 50%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* 4. Accent Blob (Blue) */}
      <motion.div 
        className="absolute h-[60vh] w-[60vh] mix-blend-screen pointer-events-none"
        style={{
          top: shape3Top,
          left: shape3Left,
          x: "-50%",
          y: "-50%",
          opacity: shape3Opacity,
          rotate: shape3Rotate,
          scale: shape3Scale,
          backgroundColor: "#3B82F6", // Blue (Was Yellow)
          filter: "blur(70px)",
        }} 
        animate={{
          scale: [1, 1.2, 1],
          borderRadius: ["40% 60% 60% 40% / 60% 30% 70% 40%", "60% 40% 30% 70% / 30% 60% 40% 70%", "40% 60% 60% 40% / 60% 30% 70% 40%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* 5. Accent Blob (Purple) */}
      <motion.div 
        className="absolute h-[40vh] w-[40vh] mix-blend-screen pointer-events-none"
        style={{
          top: shape4Top,
          right: shape4Right,
          opacity: shape4Opacity,
          rotate: shape4Rotate,
          scale: shape4Scale,
          backgroundColor: "#8B5CF6", // Purple (Was Yellow/Orange)
          filter: "blur(60px)",
        }} 
        animate={{
          scale: [1, 1.1, 1],
          borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 50% 50% / 50% 50% 50% 50%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* 6. Accent Blob (Cyan) */}
      <motion.div 
        className="absolute h-[30vh] w-[30vh] mix-blend-screen pointer-events-none"
        style={{
          top: shape5Top,
          left: shape5Left,
          opacity: shape5Opacity,
          rotate: shape5Rotate,
          scale: shape5Scale,
          backgroundColor: "#06B6D4", // Cyan (Was Blue)
          filter: "blur(50px)",
        }} 
        animate={{
          scale: [1, 1.2, 1],
          borderRadius: ["50% 50% 50% 50% / 50% 50% 50% 50%", "30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 50% 50% / 50% 50% 50% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      {/* 7. Texture */}
      <div className="bg-grain opacity-[0.08] mix-blend-overlay pointer-events-none" />
      
      {/* 8. Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_#000000_100%)] pointer-events-none opacity-60" />
    </div>
  );
}
