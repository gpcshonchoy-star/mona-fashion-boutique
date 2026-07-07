import type { Review } from "@/types";

/**
 * Customer reviews / testimonials for the landing page.
 *
 * ── PRE-LAUNCH (empty) ─────────────────────────────────────
 * Mona Fashion Boutique has not yet launched, so there are no
 * real customer reviews available.  The `CustomerReviewsSection`
 * component already handles the empty state (returns null when
 * the array is empty), so no reviews will render on the landing
 * page until real data is added below.
 *
 * ── ADDING REVIEWS (post-launch) ──────────────────────────
 * 1. Reviewers must be verified purchasers — do not fabricate
 *    names, ratings, or testimonials.
 * 2. Optionally link a review to a product via `productId`
 *    (use the product's `slug` value).
 * 3. Add reviewer avatars to `public/images/testimonials/`.
 * 4. Each review requires at minimum: id, name, rating, content,
 *    and date.
 *
 * @example
 * {
 *   id: "rev-1",
 *   name: "Sarah M.",
 *   rating: 5,
 *   title: "Absolutely stunning quality",
 *   content: "The Mona Signature Gown exceeded every expectation...",
 *   date: "2026-07-10T00:00:00.000Z",
 *   productId: "mona-signature-gown",
 *   verified: true,
 *   location: "Sydney, NSW",
 * }
 */
export const reviews: Review[] = [];

/**
 * Reviews selected for the landing page "Customer Reviews" section.
 *
 * Post-launch, populate this with a curated subset of the
 * highest-quality verified reviews to feature prominently.
 */
export const featuredReviews: Review[] = reviews;
