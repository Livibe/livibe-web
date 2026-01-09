export const metadata = {
  title: "Our Effect | Livibe",
  description: "Color choreography and lighting effects that amplify emotions.",
};

export default function EffectsPage() {
  const effects = [
    {
      title: "Colouring",
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
      dots: Array.from({ length: 25 }).map(() => null),
      dim: true,
    },
    {
      title: "Interactive",
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
    <main className="relative mx-auto max-w-6xl overflow-hidden px-6 py-12">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-24 -top-28 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#FF7A2F] via-[#FF3D6E] to-[#FFD84A] opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 right-6 h-[520px] w-[520px] rounded-full bg-[#4F9DFF] opacity-45 blur-3xl" />
      </div>

      <section className="mb-10">
        <div className="font-tan text-4xl text-white sm:text-5xl md:text-6xl">
          Our Effects
        </div>
        <div className="mt-3 max-w-3xl font-ivy text-white/70">
          Signature patterns, waves, and transitions for live shows
        </div>
      </section>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {effects.map((e) => (
          <div
            key={e.title}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 to-white/5 p-[1px]"
          >
            <div className="rounded-2xl bg-black/40 p-6 backdrop-blur-xl">
              <div className="grid grid-cols-5 gap-3">
                {e.dots.map((dot, i) => (
                  <div
                    key={`${e.title}-${i}`}
                    className="h-5 w-5 rounded-full transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: dot ?? "rgba(255,255,255,0.06)",
                      opacity: e.dim ? 0.15 : dot ? 1 : 0.35,
                    }}
                  />
                ))}
              </div>
              <div className="mt-6 text-center font-ivy text-white/80">
                {e.title}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
