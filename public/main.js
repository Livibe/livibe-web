const GLOBAL_ROWS = 6;
const GLOBAL_COLUMNS = 4;
const zoneIds = ["A", "B", "C", "D", "E"];
document.addEventListener("DOMContentLoaded", function () {
  const stadium = document.getElementById("stadium");

  for (let i = 1; i <= GLOBAL_ROWS; i++) {
    const row = document.createElement("div");
    row.className = "col-" + i;

    for (let j = 0; j < GLOBAL_COLUMNS; j++) {
      const zone = document.createElement("div");
      zone.className = "zone";
      zone.id = zoneIds[j] + i; // ID pattern like A1, B1, etc.
      row.appendChild(zone);
    }

    stadium.appendChild(row);
  }
});

let currentColor = { r: 250, g: 0, b: 0 };
let currentEffect = "solid"; // The effect to run
let currentBPM = 120; // BPM to determine the speed of the wave

document.addEventListener("DOMContentLoaded", () => {
  const zones = document.querySelectorAll(".zone");
  zones.forEach((zone) => {
    updateZoneColor(zone, currentColor); // Initial color update for each zone
  });
});

function updateZoneColor(zone, color) {
  zone.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
}

function animateEffect(effectFunction) {
  clearZoneAnimations();
  const zones = document.querySelectorAll(".zone");
  zones.forEach(effectFunction);
}

function clearZoneAnimations() {
  const zones = document.querySelectorAll(".zone");
  zones.forEach((zone) => {
    if (zone.animationTimeout) {
      clearTimeout(zone.animationTimeout);
      zone.animationTimeout = null;
    }
    zone.classList.remove("wave-effect");
  });
}

function animateSolid(zone) {
  updateZoneColor(zone, currentColor);
}

function animateFade(zone) {
  const startColor = { r: 255, g: 200, b: 0 };
  const duration = 60000 / currentBPM; // Duration of the fade animation in milliseconds
  const steps = 50; // Number of steps for interpolation
  let step = 0;

  const fade = () => {
    const interval = duration / steps;
    let fadeColor;

    // Fade up from black to startColor
    if (step <= steps / 2) {
      fadeColor = interpolateColor(
        { r: 255, g: 200, b: 0 },
        startColor,
        step / (steps / 2)
      );
    }
    // Fade up from startColor to currentColor
    else if (step <= steps) {
      fadeColor = interpolateColor(
        startColor,
        currentColor,
        (step - steps / 2) / (steps / 2)
      );
    }
    // Fade from currentColor to gray
    else {
      fadeColor = interpolateColor(
        currentColor,
        { r: 255, g: 200, b: 0 },
        (step - steps) / steps
      );
    }

    updateZoneColor(zone, fadeColor);
    step++;
    if (step <= steps * 2 && currentEffect === "fade") {
      setTimeout(fade, interval);
    } else {
      // Restart the animation
      setTimeout(animateFade.bind(null, zone), interval);
    }
  };

  fade();
}

function interpolateColor(startColor, endColor, percentage) {
  const r = Math.round(startColor.r + (endColor.r - startColor.r) * percentage);
  const g = Math.round(startColor.g + (endColor.g - startColor.g) * percentage);
  const b = Math.round(startColor.b + (endColor.b - startColor.b) * percentage);
  return { r, g, b };
}

function animateRandom(zone) {
  const randomColorChange = () => {
    // const randomColor = {
    //   r: Math.floor(Math.random() * 256),
    //   g: Math.floor(Math.random() * 256),
    //   b: Math.floor(Math.random() * 256),
    // };
    const randomColor = [
      { r: 204, g: 1, b: 0 },
      { r: 255, g: 96, b: 65 },
      { r: 83, g: 169, b: 222 },
      { r: 149, g: 106, b: 224 },
      { r: 255, g: 216, b: 102 },
    ];
    updateZoneColor(
      zone,
      randomColor[Math.floor(Math.random() * randomColor.length)]
    );
    if (currentEffect === "random") {
      zone.animationTimeout = setTimeout(
        randomColorChange,
        60000 / currentBPM / 10
      );
    }
  };
  randomColorChange();
}

const waveDuration = (60 / currentBPM) * 1000; // Duration of one full wave cycle in milliseconds
const fadeDuration = waveDuration / 2; // Half duration for fade up, rest for fade down

function updateWavingZoneColor(zone, color, delay, repeatDelay) {
  // Clear previous timeout if it exists
  if (zone.fadeTimeout) {
    clearTimeout(zone.fadeTimeout);
  }

  zone.fadeTimeout = setTimeout(() => {
    zone.style.transition = `background-color ${
      fadeDuration / 1000
    }s ease-in-out`;
    zone.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

    // If repeatDelay is provided, setup the color to toggle back after the delay
    if (repeatDelay) {
      setTimeout(() => {
        // Toggle the color
        const newColor =
          zone.style.backgroundColor ===
          `rgb(${color.r}, ${color.g}, ${color.b})`
            ? { r: 255, g: 0, b: 0 }
            : color; // Toggle between wave color and base color
        updateWavingZoneColor(zone, newColor, 0, repeatDelay);
      }, repeatDelay);
    }
  }, delay);
}

function animateWave() {
  const zones = Array.from(document.querySelectorAll(".zone"));

  // Function to update zone color with waving effect
  function updateZoneColorWithWave(zone, color, delay) {
    setTimeout(() => {
      zone.style.transition = `background-color ${
        fadeDuration / 1000
      }s ease-in-out`;
      zone.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
    }, delay);
  }

  // Calculate delay for each row to start fading up simultaneously
  const maxColumnDelay = fadeDuration / GLOBAL_COLUMNS;
  const maxRowDelay = waveDuration / GLOBAL_ROWS;
  const totalDelay = Math.max(maxColumnDelay, maxRowDelay);

  // Animate wave from left to right
  zones.forEach((zone, index) => {
    const row = Math.floor(index / GLOBAL_COLUMNS);
    const column = index % GLOBAL_COLUMNS;
    const delay = row * totalDelay; // Delay for each row to start fading up simultaneously
    const color = { r: 255, g: 255, b: 0 }; // Yellow color
    updateZoneColorWithWave(zone, color, delay);
  });

  // Fade back to red (waving)
  setTimeout(() => {
    zones.forEach((zone, index) => {
      const row = Math.floor(index / GLOBAL_COLUMNS);
      const column = index % GLOBAL_COLUMNS;
      const delay = row * totalDelay; // Delay for each row to start fading up simultaneously
      const color = { r: 255, g: 0, b: 0 }; // Red color
      updateZoneColorWithWave(zone, color, delay);
    });
  }, waveDuration);

  // Repeat the wave animation after the duration of one complete wave
  setTimeout(animateWave, waveDuration * 2); // Double the wave duration for full cycle
}

function animateHeart() {
  clearZoneAnimations();

  const zones = Array.from(document.querySelectorAll(".zone"));
  // The heartMap for a 6x4 grid
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
      // Set a timeout to update the color after a certain delay
      setTimeout(() => {
        const row = Math.floor(index / GLOBAL_COLUMNS);
        const column = index % GLOBAL_COLUMNS;
        const isHeartZone = heartMap[row] && heartMap[row][column] === 1;
        updateZoneColor(
          zone,
          isHeartZone ? currentColor : { r: 255, g: 200, b: 0 }
        );
      }, 10);
    });
  }, 500);
}

function animateGroup() {
  clearZoneAnimations();
  const zones = Array.from(document.querySelectorAll(".zone"));
  let onState = 0;
  const groupMap = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ];

  const loop = () => {
    zones.forEach((zone, index) => {
      // Set a timeout to update the color after a certain delay
      const row = Math.floor(index / GLOBAL_COLUMNS);
      const column = index % GLOBAL_COLUMNS;
      const isOdd = groupMap[row] && groupMap[row][column] === onState;
      updateZoneColor(zone, isOdd ? currentColor : { r: 255, g: 200, b: 0 });
    });
    onState = onState ? 0 : 1; // Toggle state
  };

  // Calculate delay based on BPM
  const delay = (60 / currentBPM) * 1000;

  // Start the loop and repeat based on BPM
  const intervalId = setInterval(loop, delay);

  // Clear the interval after a certain duration (optional)
  // Adjust the duration as needed
  setTimeout(() => {
    clearInterval(intervalId);
  }, 60000); // 1 minute duration as an example
}

function animateInteractive() {
  clearZoneAnimations();

  const zones = Array.from(document.querySelectorAll(".zone"));
  let currentZoneIndex = 0;
  const bpm = currentBPM; // Make sure currentBPM is defined and holds the current beats per minute
  const beatTime = (60 / bpm) * 1000; // Time for one beat in milliseconds
  const fadeDuration = beatTime; // Fade duration is a significant fraction of the beat time

  const pathMap = [
    [1, 1, 1, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 1],
    [0, , 1, 0],
  ];

  // Fade in and out function
  function fadeInOut(zone, isHeartZone) {
    if (isHeartZone) {
      zone.classList.add("fade-in");
      setTimeout(() => {
        zone.classList.replace("fade-in", "fade-out");
      }, fadeDuration);
    } else {
      zone.classList.remove("fade-in", "fade-out");
      zone.style.backgroundColor = `rgb(255, 200, 0)`; // Fallback to yellow
    }
  }

  // Loop function
  function loopThroughZones() {
    zones.forEach((zone) => (zone.style.backgroundColor = `rgb(255, 200, 0)`)); // Reset all to yellow
    const zone = zones[currentZoneIndex];
    const row = Math.floor(currentZoneIndex / GLOBAL_COLUMNS);
    const column = currentZoneIndex % GLOBAL_COLUMNS;
    const isHeartZone = pathMap[row] && pathMap[row][column] === 1;

    fadeInOut(zone, isHeartZone);

    currentZoneIndex = (currentZoneIndex + 1) % zones.length;
    setTimeout(
      loopThroughZones,
      pathMap[row][column] === 1 ? 10 * currentZoneIndex : 0
    ); // Adjust timing for the next zone based on BPM
  }
    loopThroughZones();
}

function updateZoneColor(zone, color) {
  zone.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
}

function setEffect(effectType) {
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
      animateEffect(animateWave);
      break;
    case "heart":
      animateEffect(animateHeart);
      break;
    case "group":
      animateEffect(animateGroup);
      break;
    case "interactive":
      animateEffect(animateInteractive);
      break;
  }
}

function setColor(hexColor) {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  currentColor = { r, g, b };
  setEffect(currentEffect);
}

function setBPM(bpm) {
  currentBPM = parseInt(bpm);
  setEffect(currentEffect);
}
