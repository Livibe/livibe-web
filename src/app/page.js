import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="headers">
        <div className="relative ml-4 -mt-2 md:-mt-6 lg:-mt-8 w-16 h-16 md:w-48 md:h-48 lg:w-64 lg:h-64">
          <Image
            className="w-full h-full top-0 left-0 object-cover rounded-2xl"
            src="/logo/livibe-logo.png"
            objectFit="cover"
            fill alt="Livibe logo" />
        </div>
      </section>
      <section className="md:container text-center">
        <h1 className="relative inline-block font-ivy font-normal
        text-[24px] text-center -ml-16 
        sm:-ml-16 sm:text-[32px] 
        md:-ml-16 md:text-[48px] 
        lg:text-[64px] lg:-ml-24 ">
          IGNITE THE CROWD
          <div className="relative inline-block">
            <div className="absolute 
            w-4 h-4 -right-4 -top-8
            sm:w-6 sm:h-6  sm:-right-6 sm:-top-12
            md:w-8 md:h-8  md:-right-8 md:-top-16
            lg:w-16 lg:h-16 lg:-right-16 lg:-top-28">
              <Image
                className="w-full h-full top-0 left-0 rounded-2xl"
                src="/iconic-flower.png"
                fill alt="Livibe iconic" />
            </div>
          </div>
        </h1>
        <br />
        <h1 className="font-ivy inline-block text-[24px] text-center ml-8 font-normal
        sm:ml-26  sm:text-[32px]
        md:ml-26  md:text-[48px]
        lg:ml-48 lg:text-[64px]">
          ILLIMINATE EMOTIONS
        </h1>
        <h5 className="font-ivy
        text-[8px]
        sm:text-[12px]
        md:text-[16]
        lg:text-[24px]">
          WHERE EVERY BEAT, LYRIC AND EMOTION IS TRANSLATED
        </h5>
        <h5 className="font-ivy
        text-[8px]
        sm:text-[12px]
        md:text-[16]
        lg:text-[24px]">
          INTO A MESMERIZING DANCE OF LIGHT & COLOR
        </h5>
      </section>
      <section className="container text-center 
      mt-32">
        <h1 className="font-tan inline-block text-left bg-clip-text text-transparent bg-gradient-to-tr from-[#F96443] to-[#FB3E60]
        -ml-16 text-[24px]
        sm:text-[36px]
        md:text[48px]  md:-ml-44 
        lg:text[64px] lg:-ml-96
        ">
          LIGHTING UP<br />
          VIBES
        </h1>
      </section>
    </main>
  );
}
