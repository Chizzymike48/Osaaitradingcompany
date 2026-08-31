import { PRODUCTS } from "@/data/products";
import ProductGrid from "@/components/products/ProductGrid";
import SectionHeading from "@/components/shared/SectionHeading";
import Link from "next/link";

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#f7f4ee]">
      <div className="max-w-7xl mx-auto">
        <p className="eyebrow mb-5 text-center">Selected for living</p>
        <SectionHeading
          title="Featured Collection"
          subtitle="Handpicked pieces from our premium collection"
        />

        <div className="mt-16">
          <ProductGrid products={featured} />
        </div>

        <div className="text-center mt-16">
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
