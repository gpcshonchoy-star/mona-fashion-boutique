/**
 * Data helpers — pure functions for querying, filtering, and grouping
 * content arrays. All functions return readonly arrays to prevent
 * accidental mutation of source data.
 *
 * These helpers sit between the static data layer (src/data/) and
 * components. When the project migrates to a CMS, swap the data
 * source here rather than touching every component.
 */

import type { Collection, Product, Review } from "@/types";
import { products } from "@/data/products";
import { collections } from "@/data/collections";
import { reviews } from "@/data/reviews";

// ─── Product queries ────────────────────────────────────────

/** Returns products flagged as featured, sorted by rating descending. */
export function getFeaturedProducts(): readonly Product[] {
  return products
    .filter((p) => p.featured)
    .sort((a, b) => b.rating - a.rating);
}

/** Returns products flagged as best sellers, sorted by review count descending. */
export function getBestSellers(): readonly Product[] {
  return products
    .filter((p) => p.bestSeller)
    .sort((a, b) => b.reviewCount - a.reviewCount);
}

/**
 * Returns products currently on sale (have a compare-at price or a
 * discount percentage), sorted by discount descending.
 */
export function getSaleProducts(): readonly Product[] {
  return products
    .filter((p) => p.comparePrice != null || (p.discount != null && p.discount > 0))
    .sort((a, b) => (b.discount ?? 0) - (a.discount ?? 0));
}

/** Returns the full catalogue sorted by newest first. */
export function getNewArrivals(): readonly Product[] {
  return [...products].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

/** Returns a single product by slug, or undefined. */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

// ─── Collection queries ─────────────────────────────────────

/** Returns collections that are flagged as featured on the landing page. */
export function getFeaturedCollections(): readonly Collection[] {
  return collections.filter((c) => c.featured);
}

/** Returns a single collection by slug, or undefined. */
export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

// ─── Review queries ─────────────────────────────────────────

/** Returns reviews selected for the landing page. */
export function getFeaturedReviews(): readonly Review[] {
  return [...reviews];
}

/** Returns reviews for a specific product, sorted by date descending. */
export function getReviewsByProduct(productId: string): readonly Review[] {
  return reviews
    .filter((r) => r.productId === productId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// ─── Grouping ───────────────────────────────────────────────

/**
 * Groups an array of items by the value returned by `keyFn`.
 *
 * @example
 *   groupByCategory(products, (p) => p.categorySlug)
 *   // => { "dresses": Product[], "tops": Product[], ... }
 */
export function groupByCategory<T>(
  items: readonly T[],
  keyFn: (item: T) => string,
): Record<string, readonly T[]> {
  const map = new Map<string, T[]>();

  for (const item of items) {
    const key = keyFn(item);
    const group = map.get(key);
    if (group) {
      group.push(item);
    } else {
      map.set(key, [item]);
    }
  }

  return Object.fromEntries(map);
}

// ─── Filtering ──────────────────────────────────────────────

/**
 * Filters out items whose display name starts with "TODO:".
 * Accepts an optional custom predicate for other visibility rules.
 *
 * @example
 *   filterVisibleItems(products)
 *   filterVisibleItems(products, (p) => p.stockStatus !== "out_of_stock")
 */
export function filterVisibleItems<T extends { name: string }>(
  items: readonly T[],
  predicate?: (item: T) => boolean,
): readonly T[] {
  const base = items.filter((item) => !item.name.startsWith("TODO:"));
  return predicate ? base.filter(predicate) : base;
}

// ─── Sorting ────────────────────────────────────────────────

/**
 * Sorts items by a numeric priority field in descending order.
 * Items missing the field sort last.
 *
 * @example
 *   sortByPriority(features, (f) => f.order ?? 0)
 */
export function sortByPriority<T>(
  items: readonly T[],
  priorityFn: (item: T) => number,
): readonly T[] {
  return [...items].sort((a, b) => priorityFn(b) - priorityFn(a));
}

// ─── Validation (CMS-ready) ─────────────────────────────────

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/** Validates a product object has all required fields populated. */
export function validateProduct(product: Partial<Product>): ValidationResult {
  const errors: string[] = [];

  if (!product.id) errors.push("Missing product id");
  if (!product.name || product.name.startsWith("TODO:"))
    errors.push("Missing or placeholder product name");
  if (!product.slug) errors.push("Missing product slug");
  if (typeof product.price !== "number" || product.price < 0)
    errors.push("Invalid or missing product price");

  return { valid: errors.length === 0, errors };
}

/** Validates a collection object has all required fields populated. */
export function validateCollection(c: Partial<Collection>): ValidationResult {
  const errors: string[] = [];

  if (!c.id) errors.push("Missing collection id");
  if (!c.name || c.name.startsWith("TODO:"))
    errors.push("Missing or placeholder collection name");
  if (!c.slug) errors.push("Missing collection slug");
  if (!c.image) errors.push("Missing collection image");

  return { valid: errors.length === 0, errors };
}

/**
 * Runs a validation function against every item in an array and
 * returns items that pass.
 *
 * Useful for filtering out placeholder data before rendering.
 *
 * @example
 *   const validProducts = validateEach(products, validateProduct);
 */
export function validateEach<T>(
  items: readonly T[],
  validator: (item: T) => ValidationResult,
): readonly T[] {
  return items.filter((item) => validator(item).valid);
}
