import { siteConfig } from "@/config/site";
import type { ContactInfo } from "@/types";

// ─── Footer Contact Info ─────────────────────────
export const contactInfo: ContactInfo[] = [
  {
    label: "Email",
    value: siteConfig.contact.email,
    icon: "Mail",
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    label: "Phone",
    value: siteConfig.contact.phone,
    icon: "Phone",
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    label: "Location",
    value: `${siteConfig.contact.address.city}, ${siteConfig.contact.address.country}`,
    icon: "MapPin",
  },
  {
    label: "Hours",
    value: siteConfig.contact.hours,
    icon: "Clock",
  },
];
