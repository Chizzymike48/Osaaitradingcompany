import { notFound } from "next/navigation";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import ProductGallery from "@/components/products/ProductGallery";
import ProductGrid from "@/components/products/ProductGrid";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { formatCurrency } from "@/lib/currency";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";

interface ProductDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductDetailsPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - OSSAI Premium Furniture`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images,
    },
  };
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <>
      {/* Product Details */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Gallery */}
            <ProductGallery
              images={product.images}
              productName={product.name}
            />

            {/* Product Info */}
            <div className="flex flex-col space-y-8">
              {/* Breadcrumb */}
              <div className="text-sm text-gray-600">
                <Link href="/products" className="hover:text-foreground">
                  Products
                </Link>
                {" / "}
                <span className="text-foreground">{product.name}</span>
              </div>

              {/* Name and Category */}
              <div>
                <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
                  {product.category
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </p>
                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                  {product.name}
                </h1>
              </div>

              {/* Price */}
              <div className="space-y-4">
                {product.priceOnRequest ? (
                  <p className="text-2xl font-semibold text-foreground">
                    Price on Request
                  </p>
                ) : product.price ? (
                  <p className="text-3xl font-semibold text-foreground">
                    {formatCurrency(product.price)}
                  </p>
                ) : null}
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-foreground">
                  Description
                </h3>
                <p className="text-lg text-neutral-dark leading-relaxed">
                  {product.longDescription || product.description}
                </p>
              </div>

              {/* Specifications */}
              <div className="space-y-4 border-t border-neutral-light pt-8">
                {product.material && (
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      Material
                    </p>
                    <p className="text-lg text-foreground">{product.material}</p>
                  </div>
                )}
                {product.color && (
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      Color
                    </p>
                    <p className="text-lg text-foreground">{product.color}</p>
                  </div>
                )}
                {product.dimensions && (
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      Dimensions
                    </p>
                    <p className="text-lg text-foreground">
                      {product.dimensions}
                    </p>
                  </div>
                )}
              </div>

              {/* CTAs */}
              <div className="space-y-4 pt-8 border-t border-neutral-light">
                <Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="btn-primary w-full">
                  Enquire about this piece
                </Link>
                <WhatsAppButton
                  message={WHATSAPP_MESSAGES.product(product.name)}
                  text="Chat on WhatsApp"
                  className="w-full justify-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-light">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-foreground">
              Related Products
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}
    </>
  );
}
