import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  isEmpty?: boolean;
}

export default function ProductGrid({ products, isEmpty = false }: ProductGridProps) {
  if (isEmpty) {
    return (
      <div className="py-24 text-center">
        <p className="text-lg text-neutral-dark mb-4">No products found</p>
        <p className="text-sm text-gray-500">
          Try adjusting your filters or browse all products
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-2 md:gap-7 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
