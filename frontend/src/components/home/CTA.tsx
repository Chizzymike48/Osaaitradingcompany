import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-8">
          Find the Right Furniture for Your Space
        </h2>

        <p className="text-xl text-neutral-dark mb-12 leading-relaxed">
          Browse our complete collection or get in touch with our team for personalized recommendations
        </p>

        <div className="hero-actions flex flex-col gap-3 justify-center sm:flex-row">
          <Link
            href="/products"
            className="btn-primary"
          >
            View Collection
          </Link>
          <Link
            href="/contact"
            className="btn-secondary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
