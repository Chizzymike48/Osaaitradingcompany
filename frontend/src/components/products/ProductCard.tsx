import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { formatCurrency } from "@/lib/currency";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <article className="cursor-pointer">
        {/* Image Container */}
        <div className="relative mb-6 aspect-[4/4.6] overflow-hidden rounded-xl border border-neutral-light bg-[#f4f0e8]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-3 px-1">
          {/* Category */}
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            {product.category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </p>

          {/* Name */}
          <h3 className="font-serif text-xl font-bold leading-tight tracking-tight group-hover:text-accent transition-colors">
            {product.name}
          </h3>

          {/* Price */}
          <div className="pt-2">
            {product.priceOnRequest ? (
              <p className="text-sm font-medium text-neutral-dark">
                Price on Request
              </p>
            ) : product.price ? (
              <p className="text-lg font-semibold text-foreground">
                {formatCurrency(product.price)}
              </p>
            ) : null}
          </div>

          <span className="mt-5 inline-flex items-center text-xs font-bold uppercase tracking-[0.13em] text-foreground">
            View product <span className="ml-2 text-accent transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
