import { portfolio } from "../../data/portfolio";

export const metadata = {
  title: "Portfolio | Livibe",
  description:
    "Selected performances and installations showcasing Livibe lighting experiences.",
};

// Renders portfolio/performance page with structured data for SEO
// Renders a styled portfolio page with structured data for SEO
export default function PortfolioPage() {
  const ldJson = {
    "@context": "https://schema.org",
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
        creator: {
          "@type": "Organization",
          name: "Livibe",
        },
      },
    })),
  };

  return (
    <main className="grid-bg relative mx-auto max-w-6xl px-6 py-12">
      {/* background accents */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full border border-[#9A9A9A30]" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-80 w-80 rounded-full border border-[#9A9A9A30]" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />

      <section className="mb-10 text-center">
        <div className="bg-gradient-to-tr from-[#F96443] to-[#FB3E60] bg-clip-text text-4xl font-tan text-transparent sm:text-5xl md:text-6xl">
          Portfolio
        </div>
        <div className="mt-3 font-ivy text-[#F0B987]">
          Highlights from our recent work
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((p) => (
          <div
            key={`${p.title}-${p.date}`}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#2E2D68] p-6 shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F96443] to-[#FB3E60]" />
            <div className="mb-3 flex items-center gap-2 font-inter text-white">
              <div className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/80">{p.client}</div>
              <div className="ml-auto text-xs text-[#F0B987]">{p.date}</div>
            </div>
            <div className="font-inter text-lg font-bold text-white">{p.title}</div>
            <div className="mt-2 font-ivy text-white/90">{p.description}</div>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-[#F96443] to-[#FB3E60] opacity-30 blur-sm" />
              <div className="h-[1px] w-full bg-white/10" />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}