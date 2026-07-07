import type { SocialLink } from "@/types";

/**
 * Social media profiles for Mona Fashion Boutique (Australia).
 *
 * ── PRE-LAUNCH ─────────────────────────────────────────────
 * Social media accounts have not been created yet.  Replace
 * each URL placeholder below once the boutique's profiles are
 * live.
 *
 * Platforms chosen for the Australian market:
 * - Instagram — primary visual channel (fashion, lifestyle)
 * - Facebook — local community & events
 * - TikTok — growing fashion audience in AU (Gen Z / Millennial)
 *
 * TODO: When adding TikTok, also add a TikTok SVG icon component
 * to `src/lib/brand-icons.tsx` and register it in the `iconMap`
 * inside `src/lib/icons.tsx` — otherwise the Icon resolver will
 * log a "not implemented" warning.
 */
export const socialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    url: "TODO: https://www.instagram.com/monafashionboutique",
    icon: "Instagram",
  },
  {
    platform: "Facebook",
    url: "TODO: https://www.facebook.com/monafashionboutique",
    icon: "Facebook",
  },
  {
    platform: "TikTok",
    url: "TODO: https://www.tiktok.com/@monafashionboutique",
    icon: "TikTok",
  },
];
