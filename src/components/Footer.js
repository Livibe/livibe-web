import Link from "next/link";

// Footer: global site footer with links and contact
export default function Footer() {
  return (
    <div className="mt-12 border-t border-white/10 bg-black/70">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="font-inter text-white">Livibe</div>
            <div className="mt-2 font-ivy text-white/70">Ignite the crowd. Illuminate emotions.</div>
          </div>
          <div>
            <div className="font-inter text-white">Explore</div>
            <div className="mt-2 flex flex-col text-white/80">
              <Link href="/products" className="hover:text-white">Products</Link>
              <Link href="/testimonial" className="hover:text-white">Testimonial</Link>
              <Link href="/effects" className="hover:text-white">Our Effect</Link>
            </div>
          </div>
          <div>
            <div id="contact" className="font-inter text-white">Contact</div>
            <div className="mt-2 text-white/80">muan@livibe.co</div>
            <div className="mt-2">
              <a href="mailto:muan@livibe.co?subject=Hello Livibe" className="nav-pill">Email Us</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Livibe. All rights reserved.</div>
      </div>
    </div>
  );
}
