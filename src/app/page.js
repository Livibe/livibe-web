import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16 overflow-hidden">
      <section className="headers px-[2rem] py-[2rem]">
        <div
          className="relative
        h-[52px] w-20 fill-white sm:h-[64px] sm:w-40"
        >
          <Image
            fill
            sizes="100vw"
            src="/logo/livibe-logo.svg"
            alt="Livibe logo"
          />
        </div>
      </section>
      <section className="container relative text-center lg:px-[4rem]">
        <div className="px-[2rem] lg:py-[54px]">
          <h1
            className="relative m-0 flex
        justify-center text-left font-ivy text-[32px]
        font-normal leading-relaxed sm:mr-0 sm:block sm:px-12
        sm:text-[52px]
        md:px-0
        md:text-[64px]
        lg:text-[78px]
        xl:text-[92px]"
          >
            IGNITE THE CROWD
            <div className="relative inline-block ">
              <div
                className="spinner 
            absolute h-4 
            w-4 sm:-right-6 sm:-top-12 sm:h-6
            sm:w-6 md:-right-8  md:-top-16 md:h-8
            md:w-8 lg:-right-14 lg:-top-24 lg:h-14 lg:w-14"
              >
                <Image
                  className="left-0 top-0 h-full w-full rounded-2xl"
                  src="/iconic-flower.svg"
                  fill
                  alt="Livibe iconic"
                />
              </div>
            </div>
          </h1>
          <br />
          <h1
            className="m-0
          -mt-[12px] flex justify-center px-0 text-right font-ivy text-[32px] font-normal sm:mr-0
          sm:block
          sm:text-[52px]
          md:text-[64px]
          lg:text-[78px]
          xl:text-[92px]"
          >
            ILLIMINATE EMOTIONS
          </h1>
          <h5
            className="mt-12 font-ivy
        text-[12px]
        leading-[1.6]
        sm:text-[18px]
        md:text-[24px]
        xl:text-[36px]"
          >
            WHERE EVERY BEAT, LYRIC AND EMOTION IS TRANSLATED
            <br />
            INTO A MESMERIZING DANCE OF LIGHT & COLOR
          </h5>
        </div>
        <div
          className="absolute -right-16 -top-48  h-64 w-64 rounded-full border border-[#9A9A9A19]
        lg:-right-80 lg:-top-80 lg:h-[50vw] lg:w-[50vw]"
        ></div>
      </section>
      <section
        className="sm:mx-none 
      relative
      lg:pt-64"
      >
        <div className="relative mx-auto text-center sm:px-[2rem] md:text-left lg:flex lg:justify-start">
          <h1
            className="flex justify-center bg-gradient-to-tr from-[#F96443] to-[#FB3E60] bg-clip-text py-6 text-left
        font-tan  
        text-[22px] text-transparent md:container 
        sm:px-0 sm:text-[42px] md:relative
        md:block
        md:w-fit md:text-[72px]
        md:leading-[7rem] lg:pr-48 lg:text-[78px] lg:leading-[7.5rem] xl:text-[98px] 

        "
          >
            LIGHTING UP
            <br className="hidden lg:block" /> VIBES
            <span className="absolute bottom-12 left-auto hidden w-full pl-8 font-ivy leading-normal text-[#F0B987] md:text-[22px] lg:inline-block lg:text-[24px] xl:text-[26px]">
              turn every concert into an interactive journey,
              <br />
              connecting the crowd with the heartbeat of the music.
            </span>
          </h1>

          <p
            className="container
          font-ivy text-[14px] leading-[1.2rem] text-[#F0B987]
          sm:-mt-[2rem]
          sm:text-[22px]
          sm:leading-[2rem]
          md:text-[24px]
          lg:hidden
          "
          >
            turn every concert into an interactive journey,
            <br />
            connecting the crowd with the heartbeat of the music.
          </p>
        </div>
        <div
          className="absolute -left-32 -top-32   h-64 w-64 rounded-full border border-[#9A9A9A19]
        lg:-left-48 lg:-top-52  lg:h-[50vw] lg:w-[50vw]"
        ></div>
      </section>
      <section className="relative">
        <div
          className="container:sm relative mx-4 overflow-hidden
      rounded-2xl 
      
      sm:mx-8
      md:mx-8"
        >
          <div
            className="container relative mx-auto overflow-hidden rounded-xl bg-[#3F3E81] p-8
        px-8 sm:px-16
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
                  <Image fill sizes="100vw" src="/blink.svg" alt="Blink Icon" />
                </div>
                <h1
                  className="text-shadow font-stroke-white bg-clip-text font-inter
          text-[22px]
          font-bold
          text-transparent
          sm:text-[32px]
          md:text-[32px]
          lg:text-[48px]"
                >
                  Livibe Wristband
                </h1>
              </div>
              <h1
                className="inline-block font-ivy 
          text-[42px] 
          capitalize 
          leading-[4rem] sm:my-8 sm:text-[56px] sm:leading-[5rem]
          md:text-[56px] lg:text-[72px] lg:leading-[6rem] xl:text-[98px] xl:leading-[8rem]
          "
              >
                FEEL THE MUSIC
                <br className="my-6" />
                IN YOUR HANDS
              </h1>
              <h1
                className="font-ivy 
                text-[22px]
                leading-relaxed
                sm:text-[28px]
                md:text-[32px]
                lg:text-[48px]"
              >
                A magical extension of the music
                <br />
                that dances on your wrist
              </h1>
            </div>

            <div className="absolute -left-[323px] -top-[323px] bg-transparent">
              <div className="h-[646px] w-[646px] bg-gradient-radial from-[#915688] to-[#2B1A2800] blur-3xl lg:h-[646px]  lg:w-[646px]"></div>
            </div>
            <div className="absolute -bottom-[323px] -right-[323px] bg-transparent">
              <div className="h-[646px] w-[646px] bg-gradient-radial from-[#915688] to-[#2B1A2800] blur-3xl lg:h-[646px]  lg:w-[646px]"></div>
            </div>
          </div>
        </div>
        <div
          className="absolute -right-32 -top-32   z-[100px] h-64 w-64 rounded-full border border-[#9A9A9A19]
        lg:-right-24 lg:-top-52  lg:h-[32vw] lg:w-[32vw]
        "
        ></div>
      </section>

      <section className="mb-32">
        <div
          className="half-circle
          curve-section-background relative -ml-[100vw] w-[300vw] bg-gradient-to-bl px-[100vw] py-10 sm:p-16"
        >
          <div className="w-full px-8 sm:px-[100vw]">
            <div className="container">
              <div
                className="mb-6 inline-block text-left font-inter 
              text-[22px]
              capitalize
              leading-[1.5]
              tracking-tighter
              text-black
              sm:my-8
              sm:text-[32px]
              md:text-[38px] 
              xl:text-[56px]"
              >
                WE SHAPE THE FUTURE
                <br />
                OF LIVE EXPERIENCES
                <br />
                WHERE EVERY MOMENT
                <br />
                BECOMES A MASTERPIECE
              </div>
              <div className="mt-8">
                <div
                  className="relative h-[26vw] w-full rounded-[20px] bg-red-500 bg-gradient-to-tr from-[#3D6CE5] via-[#23CC34]
                  to-[#FFE144]
                  lg:h-64
                  "
                >
                  <div
                    className="absolute left-2 top-2 flex
                  h-[26vw] w-full items-center
                  justify-end
                  rounded-[20px]
                  bg-white
                  p-10 sm:left-4
                  sm:top-4 lg:h-64
                "
                  >
                    <h3
                      className="inline-block text-right  font-ivy
                      text-[14px]
                      leading-[1.2rem]
                  text-black
                  sm:text-[22px]
                  sm:leading-[2rem]
                  md:text-[22px]
                  md:leading-[2.8rem]
                  lg:text-[28px]
                 xl:px-20"
                    >
                      join us on a journey where
                      <br />
                      technology meets imagination.
                      <br />
                      get ready to light up your vibes with Livibe!
                    </h3>
                    <a
                      target="_blank"
                      href="mailto:muan@livibe.co?subject=Hello Livibe"
                      className="absolute -bottom-4 right-4 rounded-full bg-[#304FB9] px-4 py-2 font-ivy text-[12px] 
                      sm:py-4
                    sm:text-[18px]
                    lg:-bottom-8
                    lg:px-6
                    lg:text-[28px]
                    xl:-bottom-8 xl:px-6"
                    >
                      CONTACT US
                    </a>
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
