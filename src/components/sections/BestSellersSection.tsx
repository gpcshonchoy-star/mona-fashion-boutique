import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { getBestSellers } from "@/lib/data-helpers";

interface BestSellersSectionProps {
  className?: string;
  /** Override the default section heading. */
  heading?: string;
  subtitle?: string;
  /** Maximum number of products to display. */
  limit?: number;
}

/**
 * Best Sellers section — a responsive grid of top-selling products
 * for the landing page.
 *
 * **Server Component** — reads from `getBestSellers()` data helper.
 */
function BestSellersSection({
  className,
  heading = "Best Sellers",
  subtitle,
  limit = 4,
}: BestSellersSectionProps) {
  const products = getBestSellers().slice(0, limit);
  if (products.length === 0) return null;

  return (
    <section className={cn("py-16 sm:py-24", className)} aria-labelledby="best-sellers-heading">
      <Container>
        <SectionHeading
          title={heading}
          subtitle={subtitle}
          centered
          as="h2"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} asArticle />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/shop"
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-8 py-3.5 text-base font-medium leading-tight text-primary transition-colors duration-200",
              "hover:bg-primary hover:text-white",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            )}
          >
            View All Products
          </Link>
        </div>
      </Container>
    </section>
  );
}

export { BestSellersSection, type BestSellersSectionProps };
