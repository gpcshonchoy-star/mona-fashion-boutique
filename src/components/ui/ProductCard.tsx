import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Heart, Eye, ShoppingBag, Star } from "lucide-react";
import type { Product, StockStatus } from "@/types";

interface ProductCardProps {
  product: Product;
  className?: string;
  /** When true, renders as a semantic <article>. */
  asArticle?: boolean;
}

// ─── Helpers ────────────────────────────────────────────────

const stockLabel: Record<StockStatus, string> = {
  in_stock: "In Stock",
  out_of_stock: "Out of Stock",
  low_stock: "Low Stock",
  coming_soon: "Coming Soon",
};

const stockDot: Record<StockStatus, string> = {
  in_stock: "bg-success",
  out_of_stock: "bg-danger",
  low_stock: "bg-warning",
  coming_soon: "bg-muted",
};

/** Renders a row of stars for the rating. */
function RatingStars({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.round(rating) ? "fill-accent text-accent" : "fill-none text-border"}
        />
      ))}
    </div>
  );
}

// ─── Component ──────────────────────────────────────────────

/**
 * Product card for grids and listings.
 *
 * Displays image, name, category, pricing (with compare-at / discount),
 * rating, stock indicator, and placeholder action buttons.
 *
 * **Server Component** — interactive features (wishlist, quick view,
 * add to cart) are wired via placeholder buttons that become real
 * client interactions when the cart/wishlist providers are added.
 */
function ProductCard({ product, className, asArticle = false }: ProductCardProps) {
  const Tag = asArticle ? "article" : "div";
  const primaryImage = product.images[0] ?? "/images/placeholder.jpg";
  const hasDiscount = product.comparePrice != null || (product.discount != null && product.discount > 0);
  const discountPercent = product.discount ?? (
    product.comparePrice ? Math.round((1 - product.price / product.comparePrice) * 100) : 0
  );

  return (
    <Tag
      className={cn(
        "group relative flex flex-col rounded-xl bg-surface shadow-sm transition-all duration-300",
        "hover:shadow-md",
        className,
      )}
      aria-label={product.name}
    >
      {/* ── Image container ────────────────────── */}
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-square overflow-hidden rounded-t-xl bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
        tabIndex={-1}
      >
        <Image
          src={primaryImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge */}
        {(product.badge || hasDiscount) && (
          <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
            {product.badge && (
              <Badge variant={product.badge.toLowerCase() === "sale" ? "sale" : "new"}>
                {product.badge}
              </Badge>
            )}
            {hasDiscount && !product.badge && (
              <Badge variant="sale">-{discountPercent}%</Badge>
            )}
          </div>
        )}

        {/* Wishlist button (placeholder) */}
        <button
          type="button"
          disabled
          className={cn(
            "absolute right-3 top-3 z-10 rounded-full bg-white/80 p-2 text-text opacity-0 transition-all duration-200",
            "group-hover:opacity-100 focus-visible:opacity-100",
            "cursor-not-allowed",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          )}
          aria-label="Add to wishlist (coming soon)"
          tabIndex={-1}
        >
          <Heart size={18} />
        </button>
      </Link>

      {/* ── Details ────────────────────────────── */}
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        {/* Category */}
        {product.category && (
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            {product.category}
          </p>
        )}

        {/* Name */}
        <Link
          href={`/products/${product.slug}`}
          className={cn(
            "text-sm font-medium leading-snug text-text transition-colors hover:text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          )}
        >
          {product.name}
        </Link>

        {/* Rating */}
        {product.rating > 0 && (
          <div className="flex items-center gap-1.5">
            <RatingStars rating={product.rating} />
            {product.reviewCount > 0 && (
              <span className="text-xs text-muted">({product.reviewCount})</span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="mt-auto flex items-baseline gap-2 pt-1">
          <span className="text-base font-semibold text-text">
            ${product.price.toFixed(2)}
          </span>
          {product.comparePrice && (
            <span className="text-sm text-muted line-through">
              ${product.comparePrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Stock status */}
        <div className="flex items-center gap-1.5 pt-0.5">
          <span className={cn("h-1.5 w-1.5 rounded-full", stockDot[product.stockStatus])} />
          <span className="text-xs text-muted">{stockLabel[product.stockStatus]}</span>
        </div>

        {/* ── Action buttons ──────────────────── */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            type="button"
            disabled
            className={cn(
              "inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-medium text-muted transition-colors",
              "cursor-not-allowed",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            )}
            aria-label="Quick view (coming soon)"
            tabIndex={-1}
          >
            <Eye size={14} />
            Quick View
          </button>
          <button
            type="button"
            disabled
            className={cn(
              "inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-white transition-colors",
              "cursor-not-allowed bg-primary/60",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            )}
            aria-label="Add to cart (coming soon)"
            tabIndex={-1}
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>
    </Tag>
  );
}

export { ProductCard, type ProductCardProps };
