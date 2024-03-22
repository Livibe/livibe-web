import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden flex flex-col gap-y-16">
      <section className="headers container p-4">
        <div className="relative w-16 h-8 
        sm:w-16 sm:h-8 md:w-24 md:h-12  lg:w-24 lg:h-12">
          <Image
            fill
            sizes="100vw"
            src="/logo/livibe-logo.png"
            alt="Livibe logo" />
        </div>
      </section>
      <section className="container text-center relative">
        <h1 className="relative inline-block font-ivy font-normal 
        text-[24px] text-center -ml-16
        sm:-ml-16 sm:text-[32px] 
        md:-ml-16 md:text-[68px] 
        lg:text-[92px] lg:-ml-64 ">
          IGNITE THE CROWD
          <div className="relative inline-block ">
            <div className="absolute 
            w-4 h-4 -right-4 -top-8
            sm:w-6 sm:h-6  sm:-right-6 sm:-top-12
            md:w-8 md:h-8  md:-right-8 md:-top-16
            lg:w-14 lg:h-14 lg:-right-14 lg:-top-24 spinner">
              <Image
                className="w-full h-full top-0 left-0 rounded-2xl"
                src="/iconic-flower.png"
                fill alt="Livibe iconic" />
            </div>
          </div>
        </h1>
        <br />
        <h1 className="font-ivy 
        inline-block text-[24px] text-center ml-8 font-normal
        sm:ml-26  sm:text-[32px]
        md:ml-26  md:text-[68px]
        lg:ml-48 lg:text-[92px]">
          ILLIMINATE EMOTIONS
        </h1>
        <h5 className="font-ivy mt-4
        text-[8px]
        sm:text-[12px]
        md:text-[16px]
        lg:text-[36px]">
          WHERE EVERY BEAT, LYRIC AND EMOTION IS TRANSLATED
        </h5>
        <h5 className="font-ivy
        text-[8px]
        sm:text-[12px]
        md:text-[16px]
        lg:text-[36px]">
          INTO A MESMERIZING DANCE OF LIGHT & COLOR
        </h5>
        <div className="border rounded-full border-[#9A9A9A19]   absolute -top-48 -right-16 w-64 h-64
        lg:h-96 lg:w-96 lg:-top-52 lg:-right-56"></div>
      </section>
      <section className="relative
      sm:mx-none">
        <div className="relative">
          <h1 className="font-tan  w-fit text-left bg-clip-text text-transparent bg-gradient-to-tr from-[#F96443] to-[#FB3E60]
        text-xl mx-auto py-2 
        sm:text-4xl md:container sm:mx-auto sm:px-0 
        md:py-4  md:leading-[5rem] md:mx-auto md:w-fit md:relative md:-left-24 md:text-[56px]
        lg:text[64px]
        ">
            LIGHTING UP<br className="" />{' '}
            VIBES
            <span className="font-ivy text-[#F0B987] absolute hidden md:inline-block text-xl left-64 w-full">
              turn every concert into an interactive journey,<br />connecting the crowd with the heartbeat of the music.
            </span>
          </h1>

          <p className="font-ivy text-[#F0B987] 
          text-xs container mx-auto w-fit
          sm:w-fit sm:mx-auto
          md:hidden">
            turn every concert into an interactive journey,<br />connecting the crowd with the heartbeat of the music.
          </p>
        </div>
        <div className="border rounded-full border-[#9A9A9A19]   absolute -top-32 -left-32 w-64 h-64
        lg:h-96 lg:w-96 lg:-top-52 lg:-left-48"></div>

      </section>
      <section className="relative">
        <div className="container:sm relative overflow-hidden  rounded-2xl
      mx-4 
      sm:mx-8
      md:mx-16">
          <div className="w-full bg-[#3F3E81] p-4
        sm:p-8
        md:p-16
        ">
            <div className="
            relative z-10 
            ">
              <div className="flex items-center  relative z-10 gap-4
            sm:gap-8">
                <div className="relative w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8  lg:w-12 lg:h-12">
                  <Image
                    fill
                    sizes="100vw"
                    src="/blink.png"
                    alt="Blink Icon" />
                </div>
                <h1 className="font-inter text-shadow bg-clip-text text-transparent font-stroke-white
          text-sm
          sm:text-2xl
          md:text-3xl">Livibe Wristband</h1>
              </div>
              <h1 className="font-ivy capitalize
          my-4
          sm:text-4xl sm:my-8 
          md:text-6xl">FEEL THE MUSIC<br />IN YOUR HANDS</h1>
              <h1 className="font-ivy mt-3
          sm:text-2xl
          md:text-3xl">A magical extension of the music<br />that dances on your wrist</h1>
            </div>
            <div className="bg-transparent absolute right-0 -bottom-64 ">
              <div className="w-[645px] h-[550px] bg-gradient-radial from-[#915688] to-[#2B1A2800]  blur-3xl"></div>
            </div>
            <div className="bg-transparent absolute left-0 -top-64">
              <div className="w-[645px] h-[550px] bg-gradient-radial from-[#915688] to-[#2B1A2800]  blur-3xl"></div>
            </div>
          </div>
        </div>
        <div className="border rounded-full border-[#9A9A9A19]   absolute -top-32 -right-32 w-64 h-64 z-[100px]
        lg:h-96 lg:w-96
        "></div>

      </section>

      <section className="mb-32">
        <div className="py-10
          w-[300vw] -ml-[100vw] relative px-[100vw]
          sm:p-16
          bg-gradient-to-bl from-[#FD8C2F] via-[#F9912C] to-[#F44F29] half-circle">

          <div className="px-4 ">
            <div className="container 
              sm:py-2 sm:px-8">
              <h1 className="font-inter inline-block text-black capitalize tracking-tighter
              text-left
              text-sm mb-6
              sm:my-8 sm:text-3xl
              md:text-4xl ">WE SHAPE  THE FUTURE<br />
                OF LIVE EXPERIENCES<br />
                WHERE EVERY MOMENT<br />
                BECOMES A MASTERPIECE
              </h1>
              <div >
                <div className="relative w-full bg-red-500 rounded-[20px] bg-gradient-to-tr from-[#3D6CE5] via-[#23CC34] to-[#FFE144]
                  h-32
                  lg:h-64
                  ">
                  <div className="absolute w-full bg-white rounded-[20px]
                  flex justify-end items-center
                  h-32
                  lg:h-64
                  p-10
                  top-2 left-2
                  sm:top-4 sm:left-4
                ">
                    <h3 className="text-black font-ivy text-right  inline-block my-auto
                  text-xs
                  sm:text-sm
                  lg:text-3xl lg:px-20 lg:my-16">
                      join us on a journey where<br />technology meets imagination.<br />get ready to light up your vibes with Livibe!
                    </h3>
                    <button className="font-ivy absolute -bottom-4 right-4 px-4 py-2 bg-[#304FB9] rounded-full">Contract Us</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}
