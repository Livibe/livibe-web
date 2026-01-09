export const metadata = {
  title: "Product | Livibe",
  description: "Wristbands, control systems, and show-ready lighting tools.",
};

export default function ProductsPage() {
  return (
    <main className="grid-bg mx-auto max-w-6xl px-6 py-12">
      <section className="mb-8 text-center">
        <div className="font-tan text-4xl text-[#F96443] sm:text-5xl md:text-6xl">
          Product
        </div>
        <div className="mt-3 font-ivy text-[#F0B987]">
          Tools to sync audiences with the music
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="font-inter text-[20px] text-white">
            Wristbands (2 LED)
          </div>
          <div className="mt-2 text-white/70">
            LED wristbands that light up in perfect sync with the show.
          </div>
          <div className="mt-4 h-24 rounded-md bg-gradient-to-tr from-[#304FB9] via-[#23CC34] to-[#FFE144]" />
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="font-inter text-[20px] text-white">
            Wristbands (8 LED)
          </div>
          <div className="mt-2 text-white/70">
            LED wristbands that light up in perfect sync with the show.
          </div>
          <div className="mt-4 h-24 rounded-md bg-gradient-to-tr from-[#304FB9] via-[#23CC34] to-[#FFE144]" />
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="font-inter text-[20px] text-white">Stick</div>
          <div className="mt-2 text-white/70">
            Dynamic light patterns and color choreography that amplify emotions.
          </div>
          <div className="mt-4 h-24 rounded-md bg-gradient-to-tr from-[#23A6D5] via-[#23CC34] to-[#FFE144]" />
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="font-inter text-[20px] text-white">Venue Style 1</div>
          <div className="mt-2 text-white/70">
            Dynamic light patterns and color choreography that amplify emotions.
          </div>
          <div className="mt-4 h-24 rounded-md bg-gradient-to-tr from-[#23A6D5] via-[#23CC34] to-[#FFE144]" />
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="font-inter text-[20px] text-white">Venue Style 2</div>
          <div className="mt-2 text-white/70">
            Dynamic light patterns and color choreography that amplify emotions.
          </div>
          <div className="mt-4 h-24 rounded-md bg-gradient-to-tr from-[#23A6D5] via-[#23CC34] to-[#FFE144]" />
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="font-inter text-[20px] text-white">
            Vibe Detection (Comming soon)
          </div>
          <div className="mt-2 text-white/70">
            Reliable triggering and show-time control for large venues.
          </div>
          <div className="mt-4 h-24 rounded-md bg-gradient-to-tr from-[#3D6CE5] via-[#9B59B6] to-[#F37C4C]" />
        </div>
      </section>
    </main>
  );
}
