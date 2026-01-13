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
      image: "/products/placeholder-2led.png", // Placeholder
      gradient: "from-[#4F9DFF] to-[#6B5BFF]",
    },
    {
      title: "Wristbands (8 LED)",
      description: "The premium experience with 8 powerful LEDs for maximum brightness and color saturation. Capable of displaying complex patterns and smoother gradients directly on the wrist.",
      image: "/products/Wristband LED 8 LED.png",
      gradient: "from-[#FF3D6E] to-[#FF7A2F]",
    },
    {
      title: "Stick",
      description: "Handheld LED sticks that turn every audience member into a performer. High-visibility design ideal for concerts, rallies, and choreographies.",
      image: "/products/placeholder-stick.png", // Placeholder
      gradient: "from-[#A7F64A] to-[#00C2FF]",
    },
    {
      title: "Venue",
      description: "Transform the venue itself with our integrated architectural lighting solutions. Synchronize house lights with audience wearables for total immersion.",
      image: "/products/placeholder-venue.png", // Placeholder
      gradient: "from-[#7C5CFF] to-[#FB3E60]",
    },
    {
      title: "Vibe Detection",
      subtitle: "Coming Soon",
      description: "Next-generation crowd monitoring and interaction technology. Sensing the energy of the crowd to trigger real-time lighting responses.",
      image: "/products/placeholder-vibe.png", // Placeholder
      gradient: "from-[#F96443] to-[#FFD84A]",
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
            return (
              <section
                key={product.title}
                className={`flex flex-col gap-10 lg:items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Side */}
                <div className="flex-1">
                  <div
                    className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${product.gradient} p-[1px]`}
                  >
                    <div className="rounded-3xl bg-black/80 p-10 backdrop-blur-xl sm:p-14">
                      {product.comingSoon && (
                        <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#FFD84A]">
                          Coming Soon
                        </span>
                      )}
                      <h2 className="text-3xl font-bold sm:text-4xl">
                        {product.title}
                      </h2>
                      <p className="mt-6 text-lg leading-relaxed text-white/80">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black via-[#050816] to-black shadow-2xl">
                    <div className="pointer-events-none absolute inset-0">
                      <div className="orb-soft absolute -left-16 -top-20 h-40 w-40 rounded-full bg-[#F96443] opacity-40 blur-3xl" />
                      <div className="orb-soft absolute right-0 top-6 h-48 w-48 rounded-full bg-[#FB3E60] opacity-35 blur-3xl" />
                      <div className="orb-soft absolute bottom-0 left-8 h-40 w-40 rounded-full bg-[#4F9DFF] opacity-30 blur-3xl" />
                    </div>
                    {product.image.includes("placeholder") ? (
                      <div className="relative z-10 flex h-full w-full items-center justify-center text-white/20">
                        <span className="text-lg font-medium">{product.title} Image</span>
                      </div>
                    ) : (
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain p-8 transition-transform duration-700 hover:scale-105"
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
