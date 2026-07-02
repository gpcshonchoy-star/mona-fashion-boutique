// ─── Navigation ─────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// ─── Product ────────────────────────────────────────────────
export type StockStatus = "in_stock" | "out_of_stock" | "low_stock" | "coming_soon";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  comparePrice?: number;
  discount?: number;
  images: string[];
  category: string;
  categorySlug: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  stockStatus: StockStatus;
  badge?: string;
  featured?: boolean;
  bestSeller?: boolean;
  createdAt: string;
}

// ─── Collection ─────────────────────────────────────────────
export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  featured?: boolean;
  productCount: number;
}

// ─── Review ─────────────────────────────────────────────────
export interface Review {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  title?: string;
  content: string;
  date: string;
  productId?: string;
  /** Customer city / location displayed below their name. */
  location?: string;
  /** Whether the reviewer is a verified purchaser. */
  verified?: boolean;
}

// ─── Gallery ────────────────────────────────────────────────
export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  platform: "instagram" | "facebook";
  link: string;
}

// ─── Feature ────────────────────────────────────────────────
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ─── Contact ────────────────────────────────────────────────
export interface ContactInfo {
  label: string;
  value: string;
  icon: string;
  href?: string;
}

// ─── Footer ─────────────────────────────────────────────────
export interface FooterColumn {
  title: string;
  links: NavLink[];
}

// ─── Hero ───────────────────────────────────────────────────
export interface HeroSlide {
  id: string;
  title: string;
  subtitle?: string;
  /** Descriptive alt text for the background image (falls back to title). */
  imageAlt?: string;
  /** Optional text displayed above the title (small, uppercase, subtle). */
  eyebrow?: string;
  /** Primary CTA. */
  ctaText?: string;
  ctaHref?: string;
  /** Optional secondary CTA (ghost-style link). */
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  image: string;
  /** Overlay colour with opacity, e.g. "rgba(0,0,0,0.3)" */
  overlay?: string;
  /** Text alignment within the slide. */
  align?: "left" | "center" | "right";
  /** Optional badge/logos displayed below the CTA. */
  trustBadges?: { label: string; icon?: string }[];
  /** Campaign / promotion identifier for analytics. */
  campaignId?: string;
}

// ─── Newsletter ─────────────────────────────────────────────
export interface NewsletterConfig {
  title: string;
  description: string;
  placeholder: string;
  buttonText: string;
  successMessage: string;
}

// ─── Announcement ───────────────────────────────────────────
export interface Announcement {
  message: string;
  link?: string;
  linkText?: string;
}
