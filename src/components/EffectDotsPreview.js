"use client";

import { useEffect, useRef } from "react";

export default function EffectDotsPreview({ mode }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const GLOBAL_ROWS = 6;
    const GLOBAL_COLUMNS = 4;

    const zones = [];

    container.style.display = "flex";
    container.style.flexDirection = "row";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";

    for (let rowIndex = 0; rowIndex < GLOBAL_ROWS; rowIndex += 1) {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.flexDirection = "column";
      row.style.alignItems = "center";
      row.style.justifyContent = "center";

      for (let colIndex = 0; colIndex < GLOBAL_COLUMNS; colIndex += 1) {
        const zone = document.createElement("div");
        zone.style.width = "18px";
        zone.style.height = "18px";
        zone.style.borderRadius = "9999px";
        zone.style.margin = "4px";
        zone.style.backgroundColor = "rgb(0, 0, 0)";

        zones.push(zone);
        row.appendChild(zone);
      }

      container.appendChild(row);
    }

    let currentColor = { r: 250, g: 0, b: 0 };
    let currentEffect = "solid";
    let currentBPM = 120;

    const waveDuration = (60 / currentBPM) * 1000;
    const fadeDuration = waveDuration / 2;

    const clearZoneAnimations = () => {
      zones.forEach((zone) => {
        if (zone.animationTimeout) {
          clearTimeout(zone.animationTimeout);
          // eslint-disable-next-line no-param-reassign
          zone.animationTimeout = null;
        }
        zone.classList.remove("fade-in");
        zone.classList.remove("fade-out");
      });
    };

    const updateZoneColor = (zone, color) => {
      // eslint-disable-next-line no-param-reassign
      zone.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    };

    const animateEffect = (effectFunction) => {
      clearZoneAnimations();
      zones.forEach(effectFunction);
    };

    const animateSolid = (zone) => {
      updateZoneColor(zone, currentColor);
    };

    const interpolateColor = (startColor, endColor, percentage) => {
      const r = Math.round(
        startColor.r + (endColor.r - startColor.r) * percentage,
      );
      const g = Math.round(
        startColor.g + (endColor.g - startColor.g) * percentage,
      );
      const b = Math.round(
        startColor.b + (endColor.b - startColor.b) * percentage,
      );
      return { r, g, b };
    };

    const animateFade = (zone) => {
      const startColor = { r: 255, g: 200, b: 0 };
      const duration = 60000 / currentBPM;
      const steps = 50;
      let step = 0;

      const fade = () => {
        const interval = duration / steps;
        let fadeColor;

        if (step <= steps / 2) {
          fadeColor = interpolateColor(
            { r: 255, g: 200, b: 0 },
            startColor,
            step / (steps / 2),
          );
        } else if (step <= steps) {
          fadeColor = interpolateColor(
            startColor,
            currentColor,
            (step - steps / 2) / (steps / 2),
          );
        } else {
          fadeColor = interpolateColor(
            currentColor,
            { r: 255, g: 200, b: 0 },
            (step - steps) / steps,
          );
        }

        updateZoneColor(zone, fadeColor);
        step += 1;

        if (step <= steps * 2 && currentEffect === "fade") {
          zone.animationTimeout = setTimeout(fade, interval);
        } else {
          zone.animationTimeout = setTimeout(
            () => animateFade(zone),
            interval,
          );
        }
      };

      fade();
    };

    const animateRandom = (zone) => {
      const randomColorChange = () => {
        const randomColor = [
          { r: 204, g: 1, b: 0 },
          { r: 255, g: 96, b: 65 },
          { r: 83, g: 169, b: 222 },
          { r: 149, g: 106, b: 224 },
          { r: 255, g: 216, b: 102 },
        ];
        updateZoneColor(
          zone,
          randomColor[Math.floor(Math.random() * randomColor.length)],
        );
        if (currentEffect === "random") {
          zone.animationTimeout = setTimeout(
            randomColorChange,
            60000 / currentBPM,
          );
        }
      };
      randomColorChange();
    };

    const animateWave = () => {
      const localFadeDuration = fadeDuration;

      const updateZoneColorWithWave = (zone, color, delay) => {
        setTimeout(() => {
          // eslint-disable-next-line no-param-reassign
          zone.style.transition = `background-color ${
            localFadeDuration / 1000
          }s ease-in-out`;
          // eslint-disable-next-line no-param-reassign
          zone.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
        }, delay);
      };

      const maxColumnDelay = localFadeDuration / GLOBAL_COLUMNS;
      const maxRowDelay = waveDuration / GLOBAL_ROWS;
      const totalDelay = Math.max(maxColumnDelay, maxRowDelay);

      zones.forEach((zone, index) => {
        const row = Math.floor(index / GLOBAL_COLUMNS);
        const color = { r: 255, g: 255, b: 0 };
        const delay = row * totalDelay;
        updateZoneColorWithWave(zone, color, delay);
      });

      setTimeout(() => {
        zones.forEach((zone, index) => {
          const row = Math.floor(index / GLOBAL_COLUMNS);
          const color = { r: 255, g: 0, b: 0 };
          const delay = row * totalDelay;
          updateZoneColorWithWave(zone, color, delay);
        });
      }, waveDuration);

      setTimeout(animateWave, waveDuration * 2);
    };

    const animateHeart = () => {
      clearZoneAnimations();

      const heartMap = [
        [0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 1, 1],
        [0, 1, 1, 1],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
      ];

      zones.forEach((zone) => {
        updateZoneColor(zone, { r: 255, g: 200, b: 0 });
      });

      setTimeout(() => {
        zones.forEach((zone, index) => {
          setTimeout(() => {
            const row = Math.floor(index / GLOBAL_COLUMNS);
            const column = index % GLOBAL_COLUMNS;
            const isHeartZone = heartMap[row] && heartMap[row][column] === 1;
            updateZoneColor(
              zone,
              isHeartZone ? currentColor : { r: 255, g: 200, b: 0 },
            );
          }, 10);
        });
      }, 500);
    };

    const animateGroup = () => {
      clearZoneAnimations();

      const groupMap = [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ];

      let onState = 0;

      const loop = () => {
        zones.forEach((zone, index) => {
          const row = Math.floor(index / GLOBAL_COLUMNS);
          const column = index % GLOBAL_COLUMNS;
          const isOdd = groupMap[row] && groupMap[row][column] === onState;
          updateZoneColor(
            zone,
            isOdd ? currentColor : { r: 255, g: 200, b: 0 },
          );
        });
        onState = onState ? 0 : 1;
      };

      const delay = (60 / currentBPM) * 1000;
      const intervalId = setInterval(loop, delay);

      setTimeout(() => {
        clearInterval(intervalId);
      }, 60000);
    };

    const animateInteractive = () => {
      clearZoneAnimations();

      let currentZoneIndex = 0;
      const bpm = currentBPM;
      const beatTime = (60 / bpm) * 1000;

      const pathMap = [
        [1, 1, 1, 0],
        [0, 0, 0, 1],
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 1, 0],
      ];

      zones.forEach((zone) => {
        // eslint-disable-next-line no-param-reassign
        zone.style.transition = "background-color 0.7s ease-in-out";
      });

      const loopThroughZones = () => {
        zones.forEach((zone, index) => {
          const row = Math.floor(index / GLOBAL_COLUMNS);
          const column = index % GLOBAL_COLUMNS;
          const isHeartZone =
            index === currentZoneIndex &&
            pathMap[row] &&
            pathMap[row][column] === 1;

          if (isHeartZone) {
            updateZoneColor(zone, currentColor);
          } else {
            updateZoneColor(zone, { r: 255, g: 200, b: 0 });
          }
        });

        currentZoneIndex = (currentZoneIndex + 1) % zones.length;
        setTimeout(loopThroughZones, beatTime / 3);
      };

      loopThroughZones();
    };

    const setEffect = (effectType) => {
      currentEffect = effectType;
      switch (effectType) {
        case "solid":
          animateEffect(animateSolid);
          break;
        case "fade":
          animateEffect(animateFade);
          break;
        case "random":
          animateEffect(animateRandom);
          break;
        case "wave":
          animateWave();
          break;
        case "heart":
          animateHeart();
          break;
        case "group":
          animateGroup();
          break;
        case "interactive":
          animateInteractive();
          break;
        default:
          break;
      }
    };

    zones.forEach((zone) => {
      updateZoneColor(zone, currentColor);
    });

    if (mode === "Colouring") {
      setEffect("random");
    } else if (mode === "Waving") {
      setEffect("wave");
    } else if (mode === "Symbol") {
      setEffect("heart");
    } else if (mode === "Grouping") {
      setEffect("group");
    } else if (mode === "Fading") {
      setEffect("fade");
    } else if (mode === "Interactive") {
      setEffect("interactive");
    } else {
      setEffect("solid");
    }

    return () => {
      clearZoneAnimations();
      container.innerHTML = "";
    };
  }, [mode]);

  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <div ref={containerRef} />
    </div>
  );
}
