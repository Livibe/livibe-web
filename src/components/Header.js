import Image from "next/image";
import Link from "next/link";

// Header: sticky top navigation with elevated z-index to avoid overlap
export default function Header() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="nav-pill flex items-center gap-4">
          <Link href="/" className="relative h-6 w-24 sm:h-7 sm:w-28">
            <Image fill src="/logo/livibe-logo.svg" alt="Livibe logo" />
          </Link>
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/products"
              className="text-sm text-white/90 hover:text-white"
            >
              Product
            </Link>
            <Link
              href="/effects"
              className="text-sm text-white/90 hover:text-white"
            >
              Effect
            </Link>
            <Link
              href="/projects"
              className="text-sm text-white/90 hover:text-white"
            >
              Project
            </Link>
          </div>
          <div className="ml-auto hidden items-center gap-2 sm:flex">
            <div className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/70">
              EN
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
