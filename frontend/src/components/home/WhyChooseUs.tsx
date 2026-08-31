import SectionHeading from "@/components/shared/SectionHeading";

const standards = [
  ["01", "Quality materials", "Furniture selected for beautiful finishes, comfort and everyday durability."],
  ["02", "Craftsmanship", "Thoughtful details and well-considered construction in every collection."],
  ["03", "Timeless design", "Modern forms with the warmth and restraint to live beautifully over time."],
  ["04", "Personal service", "Guidance that helps you make choices that feel right for your own space."],
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#ede7dc] px-5 py-16 sm:px-8 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="The OSSAI standard" subtitle="A more thoughtful way to bring your space together." />
        <div className="mt-10 grid border-t border-[#ddd7cc] md:mt-16 md:grid-cols-2">
          {standards.map(([number, title, description]) => (
            <div key={number} className="grid grid-cols-[2.75rem_1fr] gap-3 border-b border-[#ddd7cc] py-7 pr-2 md:grid-cols-[3.25rem_1fr] md:gap-4 md:py-10 md:pr-12">
              <span className="pt-1 text-xs font-medium tracking-[0.14em] text-accent">{number}</span>
              <div><h3 className="text-xl font-medium tracking-[-0.02em] text-foreground">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-neutral-dark">{description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
