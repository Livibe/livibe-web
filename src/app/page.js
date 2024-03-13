import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="headers">
        <div className="relative -mt-2 lg:-mt-8 w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64">
          <Image
            className="w-full h-full top-0 left-0 object-cover rounded-2xl"
            src="/logo/livibe-logo.png"
            objectFit="cover"
            fill alt="Livibe logo" />
        </div>
      </section>
      <section className="sm:container mx-auto relative">
        <h1 className="font-ivy text-[24px] text-center -ml-16 lg:text-[64px] capitalize font-normal">IGNITE THE CROWD</h1>
        <h1 className="font-ivy text-[24px] text-center ml-8 lg:text-[64px] capitalize font-normal">ILLIMINATE EMOTIONS</h1>
      </section>
    </main>
  );
}
