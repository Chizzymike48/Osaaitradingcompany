import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[39rem] items-end overflow-hidden md:min-h-[calc(100vh-4.75rem)] md:items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/products/78787878.jpeg"
          alt="A serene, contemporary living space furnished by OSSAI"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15 md:bg-gradient-to-r md:from-black/55 md:via-black/20 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 pt-28 sm:px-8 md:py-20 lg:px-10">
        <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/80 md:mb-6 md:text-xs md:tracking-[0.24em]">The 2026 collection</p>
        <h1 className="max-w-3xl font-serif text-[clamp(2.55rem,11vw,3.6rem)] leading-[0.98] text-white md:text-7xl lg:text-[5.4rem]">
          A considered home starts with one beautiful piece.
        </h1>

        <p className="mt-5 max-w-xl text-[0.95rem] leading-7 text-white/85 md:mt-7 md:text-lg md:leading-8">
          Thoughtfully sourced furniture and interior pieces for spaces that feel personal, grounded and unmistakably yours.
        </p>

        <div className="hero-actions mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row">
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
