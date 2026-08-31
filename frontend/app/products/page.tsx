"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilters from "@/components/products/ProductFilters";
import SectionHeading from "@/components/shared/SectionHeading";
import { ProductCategory } from "@/types/product";

function ProductsContent() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category") as ProductCategory | null;
  const sortBy = searchParams.get("sort") || "featured";

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = PRODUCTS;

    // Filter by category
    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case "newest":
        sorted.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "price-low":
        sorted.sort((a, b) => {
          const priceA = a.price || 0;
          const priceB = b.price || 0;
          return priceA - priceB;
        });
        break;
      case "price-high":
        sorted.sort((a, b) => {
          const priceA = a.price || 0;
          const priceB = b.price || 0;
          return priceB - priceA;
        });
        break;
      case "featured":
      default:
        sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return sorted;
  }, [category, sortBy]);

  return (
    <>
      {/* Header */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-light">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Our Products"
            subtitle="Explore our carefully curated collection of premium furniture"
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Filters */}
            <div className="lg:col-span-1">
              <ProductFilters
                selectedCategory={category}
                sortBy={sortBy}
              />
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <ProductGrid
                products={filteredAndSortedProducts}
                isEmpty={filteredAndSortedProducts.length === 0}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
