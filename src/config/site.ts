/**
 * Site-wide configuration for Mona Fashion Boutique.
 *
 * This file holds all business-level constants so components stay
 * presentation-only and data files can import shared values.
 *
 * IMPORTANT: Set NEXT_PUBLIC_SITE_URL in your deployment environment.
 */

// ─── Brand identity ─────────────────────────────────────────
export const siteConfig = {
  brandName: "Mona Fashion Boutique",
  tagline: "Timeless Elegance, Modern Style",
  description:
    "Discover curated fashion collections at Mona Fashion Boutique. Timeless elegance meets modern style for the discerning wardrobe.",

  /**
   * Base URL — used for metadata, canonical links, OG images, sitemaps.
   * Falls back to localhost during development.
   */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  /** Locale for Open Graph and HTML lang attributes. */
  locale: "en-AU",

  // ─── Contact information ───────────────────────────────────
  contact: {
    email: "TODO: Add business email",
    phone: "TODO: Add business phone",
    address: {
      street: "TODO: Add street address",
      city: "TODO: Add city",
      state: "TODO: Add state",
      zip: "TODO: Add postcode",
      country: "TODO: Add country",
    },
    hours: "TODO: Add business hours",
  },

  // ─── Social media profiles ─────────────────────────────────
  socialLinks: [
    { platform: "Instagram", url: "TODO: Add Instagram URL", icon: "Instagram" },
    { platform: "Facebook", url: "TODO: Add Facebook URL", icon: "Facebook" },
    { platform: "Pinterest", url: "TODO: Add Pinterest URL", icon: "Pinterest" },
    { platform: "Twitter", url: "TODO: Add Twitter URL", icon: "Twitter" },
  ],

  // ─── Navigation structure ──────────────────────────────────
  navigation: {
    /** Primary navigation — displayed in the header. */
    main: [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/shop" },
      { label: "Collections", href: "/collections" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    /** Utility actions — icons in the header (search, wishlist, cart, account). */
    utilities: [
      { label: "Search", href: "/search", icon: "Search" },
      { label: "Wishlist", href: "/wishlist", icon: "Heart" },
      { label: "Cart", href: "/cart", icon: "ShoppingBag" },
      { label: "Account", href: "/account", icon: "User" },
    ],
  },

  // ─── SEO defaults ──────────────────────────────────────────
  seo: {
    defaultTitle: "Mona Fashion Boutique – Timeless Elegance, Modern Style",
    titleTemplate: "%s | Mona Fashion Boutique",
    defaultDescription:
      "Discover curated fashion collections at Mona Fashion Boutique. Timeless elegance meets modern style for the discerning wardrobe.",
    ogImage: "/images/og-default.jpg",
    twitterHandle: "@TODO_add_twitter_handle",
  },
} as const;

export type SiteConfig = typeof siteConfig;
