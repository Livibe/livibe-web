import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <section className="headers container flex px-0 py-10">
        <div className="relative h-[4rem] w-[10rem]">
          <Image
            fill
            className="w-fit"
            src="/logo/livibe-logo.svg"
            alt="Livibe logo"
          />
        </div>
      </section>
      <section className="container text-center">
        <h1
          className="relative my-2 mt-8 inline-block text-center font-ivy
        text-[24px] font-normal
        sm:-ml-16 sm:text-[32px] 
        md:-ml-16 md:text-[48px] 
        lg:-ml-24 lg:text-[92px]"
        >
          IGNITE THE CROWD
          <div className="relative inline-block">
            <div
              className="spinner 
            absolute -right-4 top-[100px] h-6
            w-6 sm:-right-6  sm:-top-12 sm:h-6
            sm:w-6 md:-right-8  md:-top-16 md:h-8
            md:w-8 lg:-right-16 lg:-top-[7rem] lg:h-16 lg:w-16"
            >
              <Image
                className="left-0 top-0 h-[2rem] w-[2rem] rounded-2xl"
                src="/iconic-flower.svg"
                fill
                alt="Livibe iconic"
              />
            </div>
          </div>
        </h1>
        <br />
        <h1
          className="sm:ml-26 md:ml-26 my-3 ml-8 inline-block text-center font-ivy
        text-[24px]  font-normal
        sm:text-[32px]  md:text-[48px]
        lg:ml-48 lg:text-[92px]"
        >
          ILLIMINATE EMOTIONS
        </h1>
        <div className="mt-4">
          <h5
            className="my-3 font-ivy
        text-[12px]
        sm:text-[12px]
        md:text-[16]
        lg:text-[28px]"
          >
            WHERE EVERY BEAT, LYRIC AND EMOTION IS TRANSLATED
          </h5>
          <h5
            className="mt-4 font-ivy
        text-[12px]
        sm:text-[12px]
        md:text-[16]
        lg:text-[28px]"
          >
            INTO A MESMERIZING DANCE OF LIGHT & COLOR
          </h5>
        </div>
      </section>
      <section
        className=" 
      sm:mx-none"
      >
        <div
          className=" relative
        container -ml-4 mt-[12rem]
        px-[14rem]"
        >
          <div
            className="gap-8 bg-gradient-to-tr from-[#F96443] to-[#FB3E60] bg-clip-text py-2 text-left font-tan
        text-[72px]
        text-transparent
        "
          >
            LIGHTING UP
            <div className="mt-7 flex">
              <div>VIBES</div>
              <div
                className="container mx-auto 
          font-ivy text-[28px] text-[#F0B987]
          sm:mx-auto sm:w-fit
          md:-left-10
          md:bottom-0 md:inline-block"
              >
                turn every concert into an interactive journey,
                <div className="mt-1">
                  connecting the crowd with the heartbeat of the music.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container:sm relative mx-4  overflow-hidden
      rounded-2xl 
      sm:mx-8"
      >
        <div
          className="w-full bg-[#3F3E81] p-4
        sm:p-8
        "
        >
          <div
            className="
            relative z-10
            "
          >
            <div
              className="relative z-10  flex items-center gap-4
            sm:gap-8"
            >
              <div className="relative h-8 w-8 sm:h-8 sm:w-8 md:h-8 md:w-8  lg:h-12 lg:w-12">
                <Image fill sizes="100vw" src="/blink.png" alt="Blink Icon" />
              </div>
              <h1
                className="text-shadow font-stroke-white bg-clip-text font-inter text-sm
          text-transparent
          sm:text-2xl
          md:text-3xl"
              >
                Livibe Wristband
              </h1>
            </div>
            <h1
              className="my-4 font-ivy
          capitalize
          sm:my-8 sm:text-4xl 
          md:text-6xl"
            >
              FEEL THE MUSIC
              <br />
              IN YOUR HANDS
            </h1>
            <h1
              className="mt-3 font-ivy
          sm:text-2xl
          md:text-3xl"
            >
              A magical extension of the music
              <br />
              that dances on your wrist
            </h1>
          </div>
          <div className="absolute -bottom-64 right-0 bg-transparent ">
            <div className="h-[550px] w-[645px] bg-gradient-radial from-[#915688] to-[#2B1A2800]  blur-3xl"></div>
          </div>
          <div className="absolute -top-64 left-0 bg-transparent">
            <div className="h-[550px] w-[645px] bg-gradient-radial from-[#915688] to-[#2B1A2800]  blur-3xl"></div>
          </div>
        </div>
      </section>
      <section className="mb-32">
        <div
          className="half-circle
          relative -ml-[100vw] w-[300vw] bg-gradient-to-bl
          from-[#FD8C2F]
          via-[#F9912C] to-[#F44F29] px-[100vw] py-10 sm:p-16"
        >
          <div className="px-4">
            <div
              className="container 
              sm:p-8
              lg:mt-48"
            >
              <h1
                className="mb-6 inline-block text-left font-inter text-sm
              capitalize
              tracking-tighter text-black
              sm:my-8 sm:text-3xl
              md:text-4xl "
              >
                WE SHAPE THE FUTURE
                <br />
                OF LIVE EXPERIENCES
                <br />
                WHERE EVERY MOMENT
                <br />
                BECOMES A MASTERPIECE
              </h1>
              <div>
                <div
                  className="relative h-32 w-full rounded-[20px] bg-red-500 bg-gradient-to-tr from-[#3D6CE5] via-[#23CC34]
                  to-[#FFE144]
                  lg:h-64
                  "
                >
                  <div
                    className="absolute left-2 top-2 flex
                  h-32 w-full items-center
                  justify-end
                  rounded-[20px]
                  bg-white p-10
                  sm:left-4 sm:top-4
                "
                  >
                    <h3
                      className="my-auto inline-block text-right  font-ivy text-xs
                  text-black
                  sm:text-sm
                  lg:my-16 lg:px-20 lg:text-3xl"
                    >
                      join us on a journey where
                      <br />
                      technology meets imagination.
                      <br />
                      get ready to light up your vibes with Livibe!
                    </h3>
                    <button className="absolute -bottom-4 right-4 rounded-full bg-[#304FB9] px-4 py-2 font-ivy">
                      Contract Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
