import type { Review } from "@/types";

/**
 * Customer reviews / testimonials for the landing page.
 *
 * Add reviewer avatars to `public/images/testimonials/`.
 * Reviews can optionally be linked to a product via `productId`.
 *
 * @todo Replace placeholder with real customer testimonials.
 */
export const reviews: Review[] = [
  {
    id: "rev-1",
    name: "TODO: Customer name",
    rating: 5,
    title: "TODO: Review title",
    content: "TODO: Review content.",
    date: new Date().toISOString(),
  },
];

/**
 * Reviews selected for the landing page "Customer Reviews" section.
 */
export const featuredReviews: Review[] = reviews;
