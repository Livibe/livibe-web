import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata = {
  title: "Products | Livibe",
  description: "Cutting-edge LED technology for immersive event experiences.",
};

export default function ProductsPage() {
  const products = [
    {
      title: "Wristbands (2 LED)",
      description: "Our classic lightweight wristband featuring 2 high-brightness LEDs. Perfect for mass participation and creating unified crowd effects with extended battery life.",
      image: "/products/Wristband LED 2 LED.png",
      background: "bg-[#050816]",
      orbA: "bg-[#4F9DFF]",
      orbB: "bg-[#6B5BFF]",
    },
    {
      title: "Wristbands (8 LED)",
      description: "The premium experience with 8 powerful LEDs for maximum brightness and color saturation. Capable of displaying complex patterns and smoother gradients directly on the wrist.",
      image: "/products/Wristband LED 8 LED.png",
      background: "bg-[#140313]",
      orbA: "bg-[#FF3D6E]",
      orbB: "bg-[#FF7A2F]",
    },
    {
      title: "Stick",
      description: "Handheld LED sticks that turn every audience member into a performer. High-visibility design ideal for concerts, rallies, and choreographies.",
      image: "/products/placeholder-stick.png", // Placeholder
      background: "bg-[#05140A]",
      orbA: "bg-[#A7F64A]",
      orbB: "bg-[#00C2FF]",
    },
    {
      title: "Venue",
      description: "Transform the venue itself with our integrated architectural lighting solutions. Synchronize house lights with audience wearables for total immersion.",
      image: "/products/placeholder-venue.png", // Placeholder
      background: "bg-[#0A0414]",
      orbA: "bg-[#7C5CFF]",
      orbB: "bg-[#FB3E60]",
    },
    {
      title: "Emotion Detection",
      subtitle: "Coming Soon",
      description: "Next-generation crowd monitoring and interaction technology. Sensing the energy of the crowd to trigger real-time lighting responses.",
      image: "/products/placeholder-vibe.png", // Placeholder
      background: "bg-[#140A03]",
      orbA: "bg-[#F96443]",
      orbB: "bg-[#FFD84A]",
      comingSoon: true,
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      {/* Global Background Elements */}
      <AnimatedBackground />

      <main className="container mx-auto px-6 py-20 sm:px-12">
        <section className="mb-16">
          <div className="text-4xl text-white sm:text-5xl md:text-6xl">
            Our Products
          </div>
          <div className="mt-4 max-w-3xl text-base text-white/70 sm:text-lg">
            Livibe&apos;s real magic lies in our industry-leading controller technology,
            which creates unparalleled, always-unique immersive effects that transform
            venues and transport audiences.
          </div>
        </section>

        <div className="flex flex-col gap-24">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            const background = product.background ?? "bg-[#050816]";
            const orbA = product.orbA ?? "bg-[#4F9DFF]";
            const orbB = product.orbB ?? "bg-[#FF3D6E]";

            return (
              <section
                key={product.title}
                className={`relative overflow-hidden rounded-3xl border border-white/10 ${background} flex flex-col gap-10 lg:items-center p-8 sm:p-12 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Orb Background Elements */}
                <div className="pointer-events-none absolute inset-0">
                  <div className={`orb-soft absolute -bottom-24 -left-24 h-64 w-64 rounded-full ${orbA} opacity-40 blur-3xl`} />
                  <div className={`orb-soft absolute -right-24 -top-24 h-64 w-64 rounded-full ${orbB} opacity-35 blur-3xl`} />
                </div>

                {/* Text Side */}
                <div className="relative z-10 flex-1">
                  <div className="max-w-xl">
                    {product.comingSoon && (
                      <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-sm backdrop-blur-sm">
                        Coming Soon
                      </span>
                    )}
                    <div className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                      {product.title}
                    </div>
                    <div className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
                      {product.description}
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative z-10 flex-1">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-3xl sm:h-[500px] md:h-[600px]">
                    {product.image.includes("placeholder") ? (
                      <div className="relative z-10 flex h-full w-full items-center justify-center text-white/20">
                        <span className="text-lg font-medium">
                          {product.title} Image
                        </span>
                      </div>
                    ) : (
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-0 transition-transform duration-700 hover:scale-105"
                      />
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
