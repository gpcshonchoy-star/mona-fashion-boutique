import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Star, ShieldCheck } from "lucide-react";
import type { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
  className?: string;
}

// ─── Helpers ────────────────────────────────────────────────

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return `${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  } catch {
    return "";
  }
}

function StarRating({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            "transition-colors",
            i < Math.round(rating) ? "fill-accent text-accent" : "fill-none text-border",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

// ─── Component ──────────────────────────────────────────────

/**
 * Review / testimonial card.
 *
 * Displays customer avatar, name, optional location, star rating,
 * review title, body text, date, and an optional verified-purchase
 * badge.
 *
 * **Server Component** — no client-side interactivity.
 */
function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <Card
      as="article"
      elevated
      padding="md"
      className={cn("flex h-full flex-col", className)}
    >
      {/* Header: avatar + name + stars */}
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-muted/20">
          {review.avatar ? (
            <Image
              src={review.avatar}
              alt={review.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-muted">
              {review.name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* Name + location */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-text">{review.name}</span>
            {review.verified && (
              <span
                className="inline-flex items-center text-success"
                aria-label="Verified purchase"
              >
                <ShieldCheck size={14} />
              </span>
            )}
          </div>
          {review.location && (
            <p className="text-xs text-muted">{review.location}</p>
          )}
        </div>
      </div>

      {/* Rating */}
      <div className="mt-3">
        <StarRating rating={review.rating} />
      </div>

      {/* Review content */}
      {review.title && (
        <h3 className="mt-3 text-sm font-semibold text-text">{review.title}</h3>
      )}
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{review.content}</p>

      {/* Date */}
      {review.date && (
        <p className="mt-auto pt-4 text-xs text-muted">{formatDate(review.date)}</p>
      )}
    </Card>
  );
}

export { ReviewCard, type ReviewCardProps };
