/**
 * Default image paths for every content type.
 *
 * Components reference these constants instead of hardcoded strings.
 * When real assets replace the placeholders, update the path here.
 *
 * @todo Replace `/images/placeholder.jpg` with actual brand imagery.
 */

export const IMAGES = {
  /** Placeholder when no image is available. */
  PLACEHOLDER: "/images/placeholder.jpg",

  /** Hero section backgrounds. */
  HERO: {
    DEFAULT: "/images/hero/hero-1.jpg",
  } as const,

  /** Collection hero/card images. */
  COLLECTION: {
    DEFAULT: "/images/collections/collection-1.jpg",
  } as const,

  /** Product imagery. */
  PRODUCT: {
    PLACEHOLDER: "/images/products/placeholder.jpg",
  } as const,

  /** Gallery / social feed images. */
  GALLERY: {
    DEFAULT: "/images/gallery/gallery-1.jpg",
  } as const,

  /** Testimonial avatars. */
  TESTIMONIAL: {
    PLACEHOLDER: "/images/testimonials/placeholder.jpg",
  } as const,

  /** Brand logo (light / dark variants). */
  LOGO: {
    LIGHT: "/logo/logo-light.png",
    DARK: "/logo/logo-dark.png",
    ICON: "/logo/icon.png",
  } as const,

  /** Default Open Graph / social share image. */
  OG_DEFAULT: "/images/og-default.jpg",
} as const;

export type ImageKey = keyof typeof IMAGES;
