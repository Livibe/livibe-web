"use client";

import { useEffect, useMemo, useState } from "react";

export default function EffectDotsPreview({ dots, dim, mode }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
    const interval = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 450);

    return () => clearInterval(interval);
  }, [mode]);

  const totalCells = dots.length || 25;

  const interactivePath = useMemo(() => {
    const indices = Array.from({ length: totalCells }, (_, i) => i);
    const startIndex = totalCells >= 25 ? 20 : 0;
    const rest = indices.filter((i) => i !== startIndex);

    for (let i = rest.length - 1; i > 0; i -= 1) {
      const j = (i * 7 + 3) % (i + 1);
      const temp = rest[i];
      rest[i] = rest[j];
      rest[j] = temp;
    }

    return [startIndex, ...rest];
  }, [totalCells]);

  const getCellStyle = (index) => {
    const row = Math.floor(index / 5);
    const col = index % 5;
    const baseGray = "#111827";
    const softGray = dim ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)";

    if (mode === "Colouring") {
      const palette =
        dots.filter(Boolean).length > 0
          ? dots.filter(Boolean)
          : ["#FF6A5A", "#FFE144", "#55A8FF", "#7C5CFF"];
      const color =
        palette[(index * 7 + step) % palette.length] || "#FFE144";
      return { backgroundColor: color, opacity: 1 };
    }

    if (mode === "Waving") {
      const activeCol = step % 5;
      const isActive = col === activeCol;
      return {
        backgroundColor: isActive ? "#FFE144" : baseGray,
        opacity: isActive ? 1 : 0.4,
      };
    }

    if (mode === "Symbol") {
      const cycle = 20;
      const phase = (step % cycle) / (cycle - 1 || 1);
      const targetColor = dots[index];
      const isHeartDot = Boolean(targetColor);
      if (!isHeartDot) {
        return {
          backgroundColor: baseGray,
          opacity: 0.5,
        };
      }

      const opacity = 0.2 + 0.8 * phase;
      return {
        backgroundColor: targetColor,
        opacity,
      };
    }

    if (mode === "Grouping") {
      const groups = [
        [0, 1],
        [2, 3],
        [3, 4],
      ];
      const groupIndex = step % groups.length;
      const activeCols = groups[groupIndex];
      const isActive = activeCols.includes(col);
      const targetColor = dots[index] || "#FF3D3D";
      return {
        backgroundColor: isActive ? targetColor : baseGray,
        opacity: isActive ? 1 : 0.4,
      };
    }

    if (mode === "Fading") {
      const on = step % 2 === 0;
      const color = dots[index] || "#FFE144";
      return {
        backgroundColor: color,
        opacity: on ? 1 : 0.1,
      };
    }

    if (mode === "Interactive") {
      const activeIndex = step % interactivePath.length;
      const color = dots[index] || "#FFE144";
      const chainPos = interactivePath.indexOf(index);
      const isInChain = chainPos !== -1 && chainPos <= activeIndex;
      return {
        backgroundColor: isInChain ? color : baseGray,
        opacity: isInChain ? 1 : 0.25,
      };
    }

    const fallbackColor = dots[index] || baseGray;
    return {
      backgroundColor: fallbackColor,
      opacity: dots[index] ? 1 : 0.4,
    };
  };

  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <div className="grid aspect-square w-full max-w-[120px] grid-cols-5 grid-rows-5 gap-1 sm:max-w-[160px] sm:gap-2">
        {Array.from({ length: totalCells }).map((_, index) => {
          const style = getCellStyle(index);
          return (
            <div
              key={index}
              className="flex h-full w-full items-center justify-center"
            >
              <div
                className="h-3 w-3 rounded-full transition-opacity duration-300 sm:h-4 sm:w-4"
                style={style}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
