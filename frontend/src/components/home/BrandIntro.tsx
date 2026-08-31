import Image from "next/image";
import Link from "next/link";

export default function BrandIntro() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 md:py-32 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <div className="relative min-h-[24rem] overflow-hidden bg-[#ede7dc] md:min-h-[39rem]">
          <Image src="/products/56565656.jpeg" alt="Soft contemporary lounge furniture" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          <div className="absolute bottom-0 left-0 bg-[#24211d] px-7 py-6 text-white md:px-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Made for your everyday</p>
            <p className="mt-2 max-w-48 text-sm leading-6 text-white/70">Design that feels as good as it looks.</p>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-6">Our point of view</p>
          <h2 className="max-w-xl font-serif text-4xl font-bold leading-[1.03] tracking-[-0.045em] text-foreground md:text-6xl">A home should hold your best moments.</h2>
          <p className="mt-7 max-w-lg text-base leading-8 text-neutral-dark md:text-lg">OSSAI Trading Company brings together statement furniture, comfortable essentials and finishing pieces that create a home with real presence.</p>
          <p className="mt-5 max-w-lg text-base leading-8 text-neutral-dark">From first conversation to final delivery, we help you choose with clarity and confidence.</p>
          <div className="mt-9 grid max-w-lg grid-cols-2 border-y border-neutral-light py-6">
            <div><strong className="block text-2xl font-bold text-foreground">Curated</strong><span className="mt-1 block text-xs uppercase tracking-[0.12em] text-neutral-dark">Collections</span></div>
            <div className="border-l border-neutral-light pl-7"><strong className="block text-2xl font-bold text-foreground">Personal</strong><span className="mt-1 block text-xs uppercase tracking-[0.12em] text-neutral-dark">Service</span></div>
          </div>
          <Link href="/about" className="btn-secondary mt-9">Discover our story</Link>
        </div>
      </div>
    </section>
  );
}
