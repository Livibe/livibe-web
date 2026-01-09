export const metadata = {
  title: "Our Effect | Livibe",
  description: "Color choreography and lighting effects that amplify emotions.",
};

export default function EffectsPage() {
  return (
    <main className="grid-bg mx-auto max-w-6xl px-6 py-12">
      <section className="mb-8 text-center">
        <div className="text-[#F96443] font-tan text-4xl sm:text-5xl md:text-6xl">
          Our Effect
        </div>
        <div className="mt-3 font-ivy text-[#F0B987]">
          Signature patterns, waves, and transitions for live shows
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="font-inter text-white text-[20px]">Color Waves</div>
          <div className="mt-2 text-white/80">
            Smooth gradients and crowd-spanning waves that react to music.
          </div>
          <div className="mt-4 h-24 rounded-md bg-gradient-to-tr from-[#304FB9] via-[#23CC34] to-[#FFE144]" />
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="font-inter text-white text-[20px]">Beat React</div>
          <div className="mt-2 text-white/80">
            Pulse and strobe mapped to tempo for high-energy moments.
          </div>
          <div className="mt-4 h-24 rounded-md bg-gradient-to-tr from-[#3D6CE5] via-[#9B59B6] to-[#F37C4C]" />
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="font-inter text-white text-[20px]">Scene Transitions</div>
          <div className="mt-2 text-white/80">
            Elegant fades and swipes that bridge songs and set pieces.
          </div>
          <div className="mt-4 h-24 rounded-md bg-gradient-to-tr from-[#23A6D5] via-[#23CC34] to-[#FFE144]" />
        </div>
      </section>
    </main>
  );
}
