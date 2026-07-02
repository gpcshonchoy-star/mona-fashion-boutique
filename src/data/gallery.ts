import type { GalleryItem } from "@/types";

/**
 * Social media gallery items for the landing page gallery section.
 *
 * Add gallery images to `public/images/gallery/`. The `platform`
 * field determines which platform icon is shown on hover.
 *
 * @todo Replace placeholder with actual Instagram / Facebook posts
 *   and shop-related imagery.
 */
export const gallery: GalleryItem[] = [
  {
    id: "gallery-1",
    src: "/images/gallery/gallery-1.jpg",
    alt: "TODO: Gallery image alt text",
    platform: "instagram",
    link: "TODO: Add Instagram post URL",
  },
];
