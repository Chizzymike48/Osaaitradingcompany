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
        <div className="relative mb-4 aspect-[4/4.7] overflow-hidden rounded-xl border border-neutral-light bg-[#f4f0e8] md:mb-6 md:aspect-[4/4.6]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-2 px-0 md:space-y-3 md:px-1">
          {/* Category */}
          <p className="text-xs font-medium text-accent uppercase tracking-wider">
            {product.category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </p>

          {/* Name */}
          <h3 className="font-serif text-base font-bold leading-snug tracking-tight transition-colors group-hover:text-accent md:text-xl md:leading-tight">
            {product.name}
          </h3>

          {/* Price */}
          <div className="pt-1 md:pt-2">
            {product.priceOnRequest ? (
              <p className="text-xs font-medium text-neutral-dark md:text-sm">
                Price on Request
              </p>
            ) : product.price ? (
              <p className="text-sm font-semibold text-foreground md:text-lg">
                {formatCurrency(product.price)}
              </p>
            ) : null}
          </div>

          <span className="mt-3 inline-flex items-center text-[0.65rem] font-bold uppercase tracking-[0.09em] text-foreground md:mt-5 md:text-xs md:tracking-[0.13em]">
            View product <span className="ml-2 text-accent transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
