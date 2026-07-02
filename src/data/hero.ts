import type { HeroSlide } from "@/types";
import { IMAGES } from "@/constants/images";

/**
 * Hero section carousel slides.
 *
 * Each slide represents a full-width banner displayed in rotation
 * on the landing page. Add images to `public/images/hero/` and
 * reference them here once they are available.
 *
 * @todo Replace placeholder values with actual content and imagery.
 */
export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    title: "TODO: Hero headline",
    subtitle: "TODO: Hero subtitle",
    imageAlt: "TODO: Hero image description",
    ctaText: "TODO: Shop Now",
    ctaHref: "/shop",
    image: IMAGES.HERO.DEFAULT,
    overlay: "rgba(0,0,0,0.3)",
    align: "left",
    campaignId: "TODO: campaign-id",
  },
];
