import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4.75rem)] items-end overflow-hidden md:items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/products/78787878.jpeg"
          alt="A serene, contemporary living space furnished by OSSAI"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-28 sm:px-8 md:py-20 lg:px-10">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">The 2026 collection</p>
        <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] text-white md:text-7xl lg:text-[5.4rem]">
          A considered home starts with one beautiful piece.
        </h1>

        <p className="mt-7 max-w-xl text-base leading-8 text-white/85 md:text-lg">
          Thoughtfully sourced furniture and interior pieces for spaces that feel personal, grounded and unmistakably yours.
        </p>

        <div className="hero-actions mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/products"
            className="btn-light"
          >
            Explore the collection
          </Link>
          <Link
            href="/contact"
            className="btn-secondary border-white/70 text-white hover:bg-white hover:text-foreground"
          >
            Book a consultation
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-3 text-xs uppercase tracking-[0.15em] text-white/75 md:flex">
        <span>Scroll to discover</span>
        <svg
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
