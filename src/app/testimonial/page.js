import Image from "next/image";
import { portfolio } from "../../data/portfolio";
import { testimonials } from "../../data/testimonials";

export const metadata = {
  title: "Testimonial | Livibe",
  description: "Portfolio and testimonials in one place for better discovery.",
};

// Renders a single page combining Portfolio and Testimonials with SEO JSON-LD
export default function TestimonialPage() {
  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        itemListElement: portfolio.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            name: p.title,
            description: p.description,
            url: p.url,
            datePublished: p.date,
            creator: { "@type": "Organization", name: "Livibe" },
          },
        })),
      },
      {
        "@type": "Organization",
        name: "Livibe",
        review: testimonials.map((t) => ({
          "@type": "Review",
          reviewBody: t.quote,
          reviewRating: {
            "@type": "Rating",
            ratingValue: t.rating,
            bestRating: 5,
            worstRating: 1,
          },
          author: { "@type": "Person", name: t.name },
          datePublished: t.date,
        })),
      },
    ],
  };

  return (
    <main className="grid-bg relative mx-auto max-w-6xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />

      {/* Hero */}
      <section className="mb-10 text-center">
        <div className="text-[#F96443] font-tan text-4xl sm:text-5xl md:text-6xl">
          Testimonials
        </div>
        <div className="mt-3 font-ivy text-[#F0B987]">
          Portfolio and testimonials in one place
        </div>
      </section>

      {/* Portfolio */}
      <section className="mb-12">
        <div className="mb-4 text-center">
          <div className="bg-clip-text font-tan text-2xl text-white sm:text-3xl">
            Portfolio
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p) => (
            <div
              key={`${p.title}-${p.date}`}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#2E2D68] p-6 shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F96443] to-[#FB3E60]" />
              <div className="mb-3 flex items-center gap-2 font-inter text-white">
                <div className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">
                  {p.client}
                </div>
                <div className="ml-auto text-xs text-[#F0B987]">{p.date}</div>
              </div>
              <div className="font-inter text-lg font-bold text-white">
                {p.title}
              </div>
              <div className="mt-2 font-ivy text-white/90">{p.description}</div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-[#F96443] to-[#FB3E60] opacity-30 blur-sm" />
                <div className="h-[1px] w-full bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="mb-4 text-center">
          <div className="bg-clip-text font-tan text-2xl text-white sm:text-3xl">
            Testimonials
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={`${t.name}-${idx}`}
              className="relative overflow-hidden rounded-xl border border-[#9A9A9A30] bg-[#262566] p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="relative h-6 w-6 sm:h-7 sm:w-7">
                  <Image fill src="/star.svg" alt="Rating" />
                </div>
                <div className="font-inter text-white">
                  <div className="text-sm opacity-80">{t.role}</div>
                  <div className="text-base font-bold">{t.name}</div>
                </div>
                <div className="ml-auto rounded bg-white/10 px-2 py-1 font-inter text-sm text-white">
                  {t.rating} ★
                </div>
              </div>
              <div className="font-ivy text-white/90">“{t.quote}”</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
