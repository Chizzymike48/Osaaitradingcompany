import { PRODUCTS } from "@/data/products";
import ProductGrid from "@/components/products/ProductGrid";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="bg-[#f7f4ee] px-4 py-16 sm:px-6 md:py-32 lg:px-8">
      <div className="motion-reveal max-w-7xl mx-auto">
        <p className="eyebrow mb-5 text-center">Selected for living</p>
        <SectionHeading
          title="Featured Collection"
          subtitle="Handpicked pieces from our premium collection"
        />

        <div className="mt-10 md:mt-16">
          <ProductGrid products={featured} />
        </div>

        <div className="mt-10 text-center md:mt-16">
          <Link
            href="/products"
            className="btn-primary"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
