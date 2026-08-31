"use client";

import { ArrowUpDown, SlidersHorizontal } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/data/products";
import { ProductCategory } from "@/types/product";

interface ProductFiltersProps { selectedCategory?: ProductCategory | null; sortBy?: string; }

export default function ProductFilters({ selectedCategory, sortBy = "featured" }: ProductFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const update = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (value) params.set(key, value); else params.delete(key);
    const query = params.toString();
    router.push(query ? `/products?${query}` : "/products");
  };
  const pill = (active: boolean) => `border px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition ${active ? "border-foreground bg-foreground text-white" : "border-neutral-light bg-white text-neutral-dark hover:border-foreground hover:text-foreground"}`;

  return (
    <aside className="space-y-8 rounded-2xl border border-neutral-light bg-[#f4f0e8] p-6 lg:sticky lg:top-24">
      <div className="flex items-center gap-2 border-b border-neutral-light pb-4"><SlidersHorizontal size={17} className="text-accent" /><h2 className="text-sm font-bold uppercase tracking-[0.13em]">Refine the edit</h2></div>
      <div><h3 className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-neutral-dark">Category</h3><div className="flex flex-wrap gap-2"><button onClick={() => update("category", null)} className={pill(!selectedCategory)}>All pieces</button>{CATEGORIES.map((category) => <button key={category.id} onClick={() => update("category", category.id)} className={pill(selectedCategory === category.id)}>{category.name}</button>)}</div></div>
      <div><label htmlFor="sort" className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-neutral-dark"><ArrowUpDown size={14} /> Sort by</label><select id="sort" value={sortBy} onChange={(e) => update("sort", e.target.value)} className="w-full border border-neutral-light bg-white px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"><option value="featured">Featured</option><option value="newest">Newest arrivals</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></div>
    </aside>
  );
}
