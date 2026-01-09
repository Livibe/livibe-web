import Image from "next/image";

export default function Home() {
  const star = [
    {
      x: 170,
      y: 6,
    },
    {
      x: 190,
      y: 14,
    },
    {
      x: 130,
      y: 30,
    },
    {
      x: 140,
      y: 40,
    },
    {
      x: 140,
      y: 40,
    },
    {
      x: 140,
      y: 40,
    },
    {
      x: 140,
      y: 40,
    },
  ];
  return (
    <main className="flex flex-col gap-y-16">
      <section className="container relative scroll-mt-24 pb-16 text-center sm:pb-20">
        <div className="mx-auto max-w-5xl lg:py-[6vh]">
          <div className="relative m-0 flex justify-center text-center font-ivy text-[40px] leading-tight text-white sm:text-[56px] md:text-[72px]">
            <div>Ignite the Crowd</div>
            <div className="relative inline-block">
              <div className="spinner absolute h-6 w-6 sm:-right-6 sm:-top-12 md:-right-8 md:-top-16 md:h-8 md:w-8 lg:-right-14 lg:-top-24 lg:h-14 lg:w-14">
                <Image
                  className="left-0 top-0 h-full w-full rounded-2xl"
                  src="/iconic-flower.svg"
                  fill
                  alt="Livibe iconic"
                />
              </div>
            </div>
          </div>
          <div className="m-0 -mt-[16px] flex justify-center px-0 font-ivy text-[40px] leading-tight text-white sm:text-[56px] md:text-[72px]">
            <div className="bg-gradient-to-tr from-[#F96443] to-[#FB3E60] bg-clip-text text-transparent">
              Illuminate Emotions
            </div>
          </div>
          <div className="mt-6 font-inter text-[16px] text-white/80 sm:text-[18px] md:text-[20px]">
            <div>
              Wireless LED wristbands that sync the audience with the music.
            </div>
            <div>Turn every concert into an interactive journey of light.</div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="/showcase" className="nav-pill">
              Showcase
            </a>
            <a
              href="mailto:muan@livibe.co?subject=Hello Livibe"
              className="nav-pill"
            >
              Contact
            </a>
          </div>
        </div>
        {/* Storytelling */}
        <section id="story" className="mt-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="font-tan text-[32px] text-[#F96443] sm:text-[40px]">
              Our Story
            </div>
            <div className="mt-3 font-ivy text-white/80">
              From concept to crowd — lighting that turns emotions into color.
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="font-inter text-[18px] text-white">
                It starts with a beat
              </div>
              <div className="mt-2 font-ivy text-white/80">
                We capture the rhythm and translate it into synchronized waves
                of light. The audience becomes part of the performance.
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="font-inter text-[18px] text-white">
                It grows with the crowd
              </div>
              <div className="mt-2 font-ivy text-white/80">
                As emotions rise, wristbands respond, amplifying every chorus,
                drop, and encore with immersive color choreography.
              </div>
            </div>
          </div>
        </section>

        <div id="products" className="mt-12 scroll-mt-24 px-2">
          {/* <div className="text-center text-white">
            <div className="font-inter text-[22px] sm:text-[26px]">
              Products
            </div>
          </div> */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="font-inter text-[20px] text-white">
                Lighting Device
              </div>
              <div className="mt-2 text-white/70">
                LED wristbands that light up in perfect sync with the show.
              </div>
              <div className="mt-4 h-24 rounded-md bg-gradient-to-tr from-[#304FB9] via-[#23CC34] to-[#FFE144]"></div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="font-inter text-[20px] text-white">
                Control System
              </div>
              <div className="mt-2 text-white/70">
                Reliable triggering and show-time control for large venues.
              </div>
              <div className="mt-4 h-24 rounded-md bg-gradient-to-tr from-[#3D6CE5] via-[#9B59B6] to-[#F37C4C]"></div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="font-inter text-[20px] text-white">
                Effects Simulator
              </div>
              <div className="mt-2 text-white/70">
                Dynamic light patterns and color choreography that amplify
                emotions.
              </div>
              <div className="mt-4 h-24 rounded-md bg-gradient-to-tr from-[#23A6D5] via-[#23CC34] to-[#FFE144]"></div>
            </div>
          </div>
        </div>

        {/* Full-width Video */}
        <section
          id="video"
          className="-mx-6 mt-12 scroll-mt-24 sm:-mx-12 lg:-mx-16"
        >
          <div className="w-full">
            <div className="aspect-video">
              <video
                className="h-full w-full object-cover"
                src="/showcase.mp4"
                muted
                loop
                autoPlay
                playsInline
              />
            </div>
          </div>
        </section>

        <div
          id="projects"
          className="mx-4 mt-12 scroll-mt-24 sm:mx-12 md:mx-12 lg:mx-16"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <div className="h-full w-full rounded-2xl bg-gradient-to-tr from-[#3D6CE5] via-[#23CC34] to-[#FFE144] p-[2px]">
              <div className="rounded-2xl bg-black/80 p-8">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="font-ivy text-[24px] text-white sm:text-[28px]">
                    Bring your next show to life
                  </div>
                  <a
                    href="mailto:muan@livibe.co?subject=Show Project"
                    className="nav-pill"
                  >
                    Start a project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Example Cases */}
        <section
          id="cases"
          className="mx-auto mt-12 max-w-6xl scroll-mt-24 px-6"
        >
          <div className="text-center">
            <div className="font-inter text-[20px] text-white">
              Example Cases
            </div>
            <div className="mt-2 text-white/70">
              A glimpse of installations and performances we light up
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="relative aspect-video rounded-md bg-black/20">
                <Image
                  fill
                  src="/logo/livibe-logo.png"
                  alt="Arena Concert"
                  className="object-contain p-4"
                />
              </div>
              <div className="mt-3 font-inter text-white">Arena Concert</div>
              <div className="font-ivy text-white/70">
                40k wristbands synced to the finale
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="relative aspect-video rounded-md bg-black/20">
                <Image
                  fill
                  src="/iconic-flower.svg"
                  alt="Festival Stage"
                  className="object-contain p-8"
                />
              </div>
              <div className="mt-3 font-inter text-white">Festival Stage</div>
              <div className="font-ivy text-white/70">
                Interactive color waves across the crowd
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="relative aspect-video rounded-md bg-black/20">
                <Image
                  fill
                  src="/blink.svg"
                  alt="Club Experience"
                  className="object-contain p-10"
                />
              </div>
              <div className="mt-3 font-inter text-white">Club Experience</div>
              <div className="font-ivy text-white/70">
                Beat-reactive effects all night long
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-12 max-w-xl px-4">
          <div className="text-center">
            <div className="font-inter text-[20px] text-white">
              Stay in the loop
            </div>
            <div className="mt-2 text-white/70">
              Get product updates and show stories in your inbox.
            </div>
          </div>
          <form className="mt-6 flex items-center gap-3">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 focus:outline-none"
            />
            <button type="button" className="nav-pill">
              Subscribe
            </button>
          </form>
        </div>

        <div className="pointer-events-none absolute -right-16 -top-32 -z-10 h-64 w-64 rounded-full border border-[#9A9A9A50] lg:-right-80 lg:-top-80 lg:h-[50vw] lg:w-[50vw]"></div>
      </section>
    </main>
  );
}
