import { siteConfig } from "@/config/site";
import type { Announcement, FooterColumn, NavLink } from "@/types";

// ─── Announcement Bar ───────────────────────────
export const announcement: Announcement = {
  message: "TODO: Announcement message",
  linkText: "TODO",
  link: "",
};

// ─── Navigation (extends siteConfig.navigation) ──
export const mainNav: NavLink[] = [...siteConfig.navigation.main];

export const utilityNav: NavLink[] = [...siteConfig.navigation.utilities];

// ─── Footer ──────────────────────────────────────
export const footerColumns: FooterColumn[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Shop All", href: "/shop" },
      { label: "TODO: Collection link", href: "/collections" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "TODO: Shipping & Returns", href: "/shipping-returns" },
      { label: "TODO: Privacy Policy", href: "/privacy" },
      { label: "TODO: Terms of Service", href: "/terms" },
      { label: "TODO: FAQ", href: "/faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "TODO: Email Us", href: `mailto:${siteConfig.contact.email}` },
      { label: "TODO: Visit Us", href: "/contact" },
      { label: "TODO: About Us", href: "/about" },
    ],
  },
];

// ─── Social Links ────────────────────────────────
export const socialLinks = [...siteConfig.socialLinks];

// ─── Footer bottom text ──────────────────────────
export const footerBottom = {
  copyright: `© ${new Date().getFullYear()} ${siteConfig.brandName}. All rights reserved.`,
  paymentIcons: ["Visa", "Mastercard", "PayPal", "Afterpay"],
};
