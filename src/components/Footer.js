import Link from "next/link";

// Footer: global site footer with links and contact
export default function Footer() {
 return (
 <div className="mt-12 border-t border-white/10 bg-black/70">
 <div className="mx-auto max-w-7xl px-4 py-10">
 <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
 <div>
 <div className="text-white">Livibe</div>
 <div className="mt-2 text-white/70">Ignite the crowd. Light up moments.</div>
 </div>
 <div>
 <div className="text-white">Explore</div>
 <div className="mt-2 flex flex-col text-white/80">
 <Link href="/products" className="hover:text-white">Product</Link>
 <Link href="/effects" className="hover:text-white">Effect</Link>
 </div>
 </div>
 <div>
 <div id="contact" className="text-white">Contact</div>
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
