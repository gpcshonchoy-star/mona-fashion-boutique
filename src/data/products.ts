import type { Product } from "@/types";

/**
 * Master product catalogue.
 *
 * Add product images to `public/images/products/<product-slug>/`.
 * Each product can optionally include a badge (e.g. "Sale", "New"),
 * a compare-at price for discount display, and a stock status for
 * inventory-aware UI.
 *
 * @todo Replace placeholder with real product data — either
 *   statically defined here or fetched from a headless CMS / API
 *   once the e-commerce backend is integrated.
 */
export const products: Product[] = [
  {
    id: "prod-1",
    name: "TODO: Product name",
    slug: "todo-product-slug",
    description: "TODO: Product description",
    price: 0,
    images: ["/images/products/placeholder.jpg"],
    category: "TODO: Category",
    categorySlug: "todo-category",
    tags: ["TODO"],
    rating: 0,
    reviewCount: 0,
    stockStatus: "coming_soon",
    createdAt: new Date().toISOString(),
  },
];

/**
 * Products flagged as best sellers for the "Best Sellers" landing
 * page section.
 */
export const bestSellers: Product[] = products.filter((p) => p.bestSeller);

/**
 * Products flagged as featured for prominent placement.
 */
export const featuredProducts: Product[] = products.filter((p) => p.featured);

/**
 * Products currently on sale (have a compare-at price or discount).
 */
export const saleProducts: Product[] = products.filter(
  (p) => p.comparePrice != null || (p.discount != null && p.discount > 0),
);
