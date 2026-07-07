# Mona Fashion Boutique — Image Asset Guide

This document lists every image file the site expects, organised by directory.
Use it as a checklist when sourcing or creating real brand imagery.

---

## `/public/images/hero/` — Hero banners

| File | Size | Purpose |
|---|---|---|
| `hero-1.jpg` | 1920×1080 | Landing page hero slide background |

**Note:** The site currently supports one hero slide. When additional slides
are added to `src/data/hero.ts`, add corresponding `hero-N.jpg` files here.

---

## `/public/images/collections/` — Collection cards

| File | Size | Purpose |
|---|---|---|
| `elegant-dresses.jpg` | 1200×1500 | Elegant Dresses collection card |
| `modern-casual-wear.jpg` | 1200×1500 | Modern Casual Wear collection card |
| `fashion-accessories.jpg` | 1200×1500 | Fashion Accessories collection card |

**Note:** All three collections currently reference
`/images/collections/collection-1.jpg`. Once real assets are added, update
each collection's `image` path in `src/data/collections.ts` and remove the
old `collection-1.jpg`.

---

## `/public/images/products/<product-slug>/` — Product images

Each product has its own sub-directory named after its slug. Place `main.jpg`
for the primary product image. Additional angles can be added as
`angle-2.jpg`, `angle-3.jpg`, etc. and pushed to the product's `images` array.

| Sub-directory | File | Size | Product |
|---|---|---|---|
| `mona-signature-gown/` | `main.jpg` | 1200×1600 | Mona Signature Gown |
| `audrey-silk-midi-dress/` | `main.jpg` | 1200×1600 | Audrey Silk Midi Dress |
| `azure-wrap-dress/` | `main.jpg` | 1200×1600 | Azure Wrap Dress |
| `coastal-linen-blouse/` | `main.jpg` | 1200×1600 | Coastal Linen Blouse |
| `bondi-knit-set/` | `main.jpg` | 1200×1600 | Bondi Knit Set |
| `tailored-crop-pant/` | `main.jpg` | 1200×1600 | Tailored Crop Pant |
| `signature-leather-tote/` | `main.jpg` | 1200×1600 | Signature Leather Tote |
| `silk-knot-scarf/` | `main.jpg` | 1200×1600 | Silk Knot Scarf |
| `gold-link-belt/` | `main.jpg` | 1200×1600 | Gold Link Belt |

**After adding images:** Update each product's `images` array in
`src/data/products.ts` to point to its real path (e.g.
`/images/products/mona-signature-gown/main.jpg`), then the shared
`/images/products/placeholder.jpg` reference can be removed.

---

## `/public/images/gallery/` — Social media gallery

| File | Size | Purpose |
|---|---|---|
| `gallery-1.jpg` | 1080×1080 | Social media / Instagram gallery tile |

**Note:** The gallery currently has one placeholder item. Replace with real
brand imagery once the boutique's social feed is active.

---

## `/public/images/testimonials/` — Reviewer avatars

| File | Size | Purpose |
|---|---|---|
| — | — | No files needed until real customer reviews are added |

Place reviewer avatar images here when `src/data/reviews.ts` is populated
with verified purchasers.

---

## `/public/logo/` — Brand logo

| File | Size | Purpose |
|---|---|---|
| `logo-light.png` | — | Light variant (used on dark backgrounds) |
| `logo-dark.png` | — | Dark variant (used on light backgrounds) |
| `icon.png` | — | Square icon (favicon, mobile, social previews) |

---

## Other shared images

| Path | Size | Purpose |
|---|---|---|
| `/public/images/placeholder.jpg` | — | Global fallback when no product image is available |
| `/public/images/og-default.jpg` | 1200×630 | Open Graph / social share preview image |

---

## Image guidelines

- **Format:** JPEG for photos, PNG for logos with transparency
- **Colour profile:** sRGB for consistent browser rendering
- **File size:** Optimise below 500 KB per image where possible
- **Naming:** Lowercase, hyphenated, descriptive (`elegant-dresses.jpg`)
- **Alt text:** Add meaningful `imageAlt` descriptions in data files
