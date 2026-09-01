import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/data/products";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-[#171715] py-16 text-white md:py-32">
      <div className="absolute -right-32 top-12 h-80 w-80 rounded-full border border-[#d7b879]/20" />
      <div className="absolute -right-12 top-32 h-56 w-56 rounded-full border border-[#d7b879]/10" />
      <div className="max-w-7xl mx-auto">
        <div className="motion-reveal px-5 sm:px-8 lg:px-10"><SectionHeading title="Shop by room" subtitle="Curated pieces that bring a complete, considered feeling to every part of your home." inverse /></div>

        <div className="relative mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] md:mt-14 md:grid md:grid-cols-2 md:gap-px md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-5">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="motion-card group relative min-h-[22rem] w-[78vw] shrink-0 snap-start overflow-hidden rounded-2xl bg-[#24231f] p-5 sm:w-[19rem] md:min-h-[26rem] md:w-auto md:p-6"
            >
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover opacity-65 transition duration-700 group-hover:scale-110 group-hover:opacity-40"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              <div className="relative flex h-full flex-col justify-end">
              <span className="mb-auto text-xs font-bold tracking-[0.17em] text-[#d7b879]">0{CATEGORIES.indexOf(category) + 1}</span>
              <h3 className="font-serif text-2xl font-bold tracking-tight mb-2 text-white transition-colors group-hover:text-[#d7b879]">
                {category.name}
              </h3>
              <p className="mb-5 text-sm leading-6 text-white/70 line-clamp-2">
                {category.description}
              </p>

              <span className="text-xs font-bold uppercase tracking-[0.13em] text-white">
                Discover <span className="ml-1 text-[#d7b879]">→</span>
              </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
