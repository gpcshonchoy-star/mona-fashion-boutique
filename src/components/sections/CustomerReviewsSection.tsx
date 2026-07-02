import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { getFeaturedReviews } from "@/lib/data-helpers";

interface CustomerReviewsSectionProps {
  className?: string;
  /** Override the default section heading. */
  heading?: string;
  subtitle?: string;
  /** Maximum number of reviews to display. */
  limit?: number;
}

/**
 * Customer Reviews section — a responsive grid of testimonial cards
 * for the landing page.
 *
 * **Server Component** — reads from `getFeaturedReviews()` data helper.
 */
function CustomerReviewsSection({
  className,
  heading = "What Our Customers Say",
  subtitle,
  limit = 6,
}: CustomerReviewsSectionProps) {
  const reviews = getFeaturedReviews().slice(0, limit);
  if (reviews.length === 0) return null;

  return (
    <section className={cn("py-16 sm:py-24", className)} aria-labelledby="customer-reviews-heading">
      <Container>
        <SectionHeading title={heading} subtitle={subtitle} centered as="h2" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export { CustomerReviewsSection, type CustomerReviewsSectionProps };
