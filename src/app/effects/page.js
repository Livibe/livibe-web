import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata = {
  title: "Our Effect | Livibe",
  description: "Color choreography and lighting effects that amplify emotions.",
};

export default function EffectsPage() {
  const effects = [
    {
      title: "Colouring",
      description: "Our Radio Frequency products can display our entire range of 16 million colors, our pixels can beat to the rhythm of a pop song, pulse like a heartbeat or light up your whole audience as one to unify the crowd.",
      dots: [
        "#FF6A5A", "#7C5CFF", "#FFE144", "#55A8FF", "#FF6A5A",
        "#7C5CFF", "#FFE144", "#55A8FF", "#FF6A5A", "#7C5CFF",
        "#FFE144", "#55A8FF", "#FF6A5A", "#7C5CFF", "#55A8FF",
        "#7C5CFF", "#FFE144", "#55A8FF", "#FF6A5A", "#7C5CFF",
        "#FFE144", "#55A8FF", "#FF6A5A", "#7C5CFF", "#55A8FF",
      ],
    },
    {
      title: "Waving",
      description: "Create stunning wave effects across the audience. Control direction, speed, and color to make the crowd move as one fluid ocean of light.",
      dots: [
        "#FFE144", "#FFE144", "#FF9C2A", "#FF3D3D", "#FF3D3D",
        "#FFE144", "#FF9C2A", "#FF3D3D", "#FF3D3D", "#FF3D3D",
        "#FFE144", "#FFE144", "#FF9C2A", "#FF3D3D", "#FF3D3D",
        "#FFE144", "#FFE144", "#FFE144", "#FF9C2A", "#FF3D3D",
        "#FFE144", "#FFE144", "#FFE144", "#FFE144", "#FF9C2A",
      ],
    },
    {
      title: "Symbol",
      description: "Display logos, letters, or custom symbols across the crowd. Perfect for brand activation or artist monograms.",
      dots: [
        "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F",
        "#FFCC2F", null, null, null, "#FFCC2F",
        "#FFCC2F", null, "#FFCC2F", null, "#FFCC2F",
        "#FFCC2F", null, null, null, "#FFCC2F",
        "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F",
      ],
    },
    {
      title: "Grouping",
      description: "Segment the audience into different groups. Create team battles, section-based lighting, or complex multi-zone effects.",
      dots: [
        "#FF1E1E", "#FF1E1E", "#FFE144", "#FFE144", "#FF1E1E",
        "#FF1E1E", "#FF1E1E", "#FFE144", "#FFE144", "#FF1E1E",
        "#FF1E1E", "#FF1E1E", "#FFE144", "#FFE144", "#FF1E1E",
        "#FF1E1E", "#FF1E1E", "#FFE144", "#FFE144", "#FF1E1E",
        "#FF1E1E", "#FF1E1E", "#FFE144", "#FFE144", "#FF1E1E",
      ],
    },
    {
      title: "Fading",
      description: "Smooth transitions and gentle fades that add emotional depth to slower songs or intimate moments.",
      dots: Array.from({ length: 25 }).map(() => null),
      dim: true,
    },
    {
      title: "Interactive",
      description: "Engage the audience with interactive modes where movement or sound triggers lighting changes.",
      dots: [
        "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F",
        "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F",
        "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F",
        "#FFCC2F", "#FF9C2A", "#FFCC2F", "#FFCC2F", "#FFCC2F",
        "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F", "#FFCC2F",
      ],
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Background Elements - Full Width */}
      <AnimatedBackground />

      <main className="relative mx-auto max-w-6xl px-6 py-12">
        <section className="mb-16">
          <div className="text-4xl text-white sm:text-5xl md:text-6xl">
            Our Effects
          </div>
          <div className="mt-3 max-w-3xl text-white/70">
            Signature patterns, waves, and transitions for live shows
          </div>
        </section>

        <section className="flex flex-col gap-24">
          {effects.map((e) => (
            <div key={e.title} className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[500px]">
              {/* Left Side - Main Video */}
              <div className="lg:col-span-8 rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative h-[300px] lg:h-auto">
                 {/* <video
                  src="/path/to/main-video.mp4"
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                /> */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-medium">
                  Main Video Placeholder
                </div>
              </div>

              {/* Right Side - Description & Short Video */}
              <div className="lg:col-span-4 flex flex-col gap-6 h-full">
                {/* Description Box */}
                <div className="flex-1 rounded-3xl bg-white/5 p-8 backdrop-blur-sm border border-white/10 flex flex-col justify-center">
                  <div className="text-3xl font-semibold text-white mb-4">{e.title}</div>
                  <div className="text-white/70 text-sm leading-relaxed">
                    {e.description}
                  </div>
                </div>

                {/* Short Video Box (Bottom Right) */}
                <div className="flex-1 rounded-3xl bg-black/40 border border-white/10 relative overflow-hidden h-[200px] lg:h-auto">
                   {/* <video
                    src="/path/to/short-video.mp4"
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  /> */}
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-medium">
                     Short Video Placeholder
                  </div>
                  <div className="absolute bottom-4 left-4 text-white/50 text-xs z-10">
                    {e.title} Visual
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
