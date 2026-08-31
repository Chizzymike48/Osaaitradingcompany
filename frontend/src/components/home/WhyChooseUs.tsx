import SectionHeading from "@/components/shared/SectionHeading";

const standards = [
  ["01", "Quality materials", "Furniture selected for beautiful finishes, comfort and everyday durability."],
  ["02", "Craftsmanship", "Thoughtful details and well-considered construction in every collection."],
  ["03", "Timeless design", "Modern forms with the warmth and restraint to live beautifully over time."],
  ["04", "Personal service", "Guidance that helps you make choices that feel right for your own space."],
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#ede7dc] px-5 py-20 sm:px-8 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="The OSSAI standard" subtitle="A more thoughtful way to bring your space together." />
        <div className="mt-16 grid border-t border-[#ddd7cc] md:grid-cols-2">
          {standards.map(([number, title, description]) => (
            <div key={number} className="grid grid-cols-[3.25rem_1fr] gap-4 border-b border-[#ddd7cc] py-8 pr-5 md:py-10 md:pr-12">
              <span className="pt-1 text-xs font-medium tracking-[0.14em] text-accent">{number}</span>
              <div><h3 className="text-xl font-medium tracking-[-0.02em] text-foreground">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-neutral-dark">{description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
