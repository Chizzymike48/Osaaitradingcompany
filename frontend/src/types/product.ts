export type ProductCategory =
  | "dining-chairs"
  | "dining-tables"
  | "dining-sets"
  | "sofas"
  | "interior";

export type ProductAvailability = "in-stock" | "out-of-stock";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  longDescription?: string;
  price?: number;
  priceOnRequest: boolean;
  availability: ProductAvailability;
  images: string[];
  material?: string;
  color?: string;
  dimensions?: string;
  featured: boolean;
  createdAt: string;
}

export interface Category {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
}
