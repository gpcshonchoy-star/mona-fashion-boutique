import type { Product } from "@/types";

/**
 * Master product catalogue.
 *
 * Add product images to `public/images/products/<product-slug>/`.
 * Each product can optionally include a badge (e.g. "Sale", "New"),
 * a compare-at price for discount display, and a stock status for
 * inventory-aware UI.
 */
export const products: Product[] = [
  // ── Elegant Dresses ────────────────────────────────────────
  {
    id: "prod-1",
    name: "Mona Signature Gown",
    slug: "mona-signature-gown",
    description:
      "An embodiment of timeless elegance. This floor-length gown drapes effortlessly, featuring a sculpted bodice and fluid skirt that moves with you. Cut from lustrous satin-backed crepe, it transitions seamlessly from black-tie galas to intimate soirées.",
    price: 495,
    images: ["/images/products/placeholder.jpg"],
    category: "Elegant Dresses",
    categorySlug: "elegant-dresses",
    tags: ["evening", "formal", "gown", "satin"],
    rating: 0,
    reviewCount: 0,
    stockStatus: "coming_soon",
    featured: true,
    bestSeller: true,
    createdAt: "2026-07-01T00:00:00.000Z",
  },
  {
    id: "prod-2",
    name: "Audrey Silk Midi Dress",
    slug: "audrey-silk-midi-dress",
    description:
      "Effortless polish meets modern femininity. Cut from pure silk charmeuse, this midi dress skims the silhouette before falling into a gentle hem. The V-neckline and delicate cap sleeves make it a go-to for gallery openings and dinner dates alike.",
    price: 325,
    images: ["/images/products/placeholder.jpg"],
    category: "Elegant Dresses",
    categorySlug: "elegant-dresses",
    tags: ["silk", "midi", "dinner", "evening"],
    rating: 0,
    reviewCount: 0,
    stockStatus: "coming_soon",
    featured: true,
    createdAt: "2026-07-01T00:00:00.000Z",
  },
  {
    id: "prod-3",
    name: "Azure Wrap Dress",
    slug: "azure-wrap-dress",
    description:
      "The wrap dress reimagined. Cut from a breathable Tencel blend in a deep cobalt hue, this piece cinches at the waist and falls into a graceful skirt. The adjustable tie belt lets you customise the fit — equally at home at the office or a weekend lunch.",
    price: 275,
    images: ["/images/products/placeholder.jpg"],
    category: "Elegant Dresses",
    categorySlug: "elegant-dresses",
    tags: ["wrap", "day dress", "cobalt", "office"],
    rating: 0,
    reviewCount: 0,
    stockStatus: "coming_soon",
    createdAt: "2026-07-01T00:00:00.000Z",
  },

  // ── Modern Casual Wear ─────────────────────────────────────
  {
    id: "prod-4",
    name: "Coastal Linen Blouse",
    slug: "coastal-linen-blouse",
    description:
      "Breezy, relaxed, undone. This oversized linen blouse has the rumpled charm of a beachside morning. Pair it with tailored shorts or tuck it into wide-leg trousers — it brings effortless texture to any warm-weather look.",
    price: 185,
    images: ["/images/products/placeholder.jpg"],
    category: "Modern Casual Wear",
    categorySlug: "modern-casual-wear",
    tags: ["linen", "blouse", "summer", "relaxed"],
    rating: 0,
    reviewCount: 0,
    stockStatus: "coming_soon",
    featured: true,
    createdAt: "2026-07-01T00:00:00.000Z",
  },
  {
    id: "prod-5",
    name: "Bondi Knit Set",
    slug: "bondi-knit-set",
    description:
      "A considered take on the matching set. The cropped knit top and high-rise wide-leg pants are crafted from a lightweight cotton-modal blend with subtle ribbing. Wear them together for an instant outfit or mix the separates into your rotation.",
    price: 245,
    images: ["/images/products/placeholder.jpg"],
    category: "Modern Casual Wear",
    categorySlug: "modern-casual-wear",
    tags: ["knit", "co-ord", "matching set", "cotton"],
    rating: 0,
    reviewCount: 0,
    stockStatus: "coming_soon",
    bestSeller: true,
    createdAt: "2026-07-01T00:00:00.000Z",
  },
  {
    id: "prod-6",
    name: "Tailored Crop Pant",
    slug: "tailored-crop-pant",
    description:
      "Sharp, cropped, endlessly versatile. Cut from a stretch-cotton twill with a mid-rise waist and pressed crease, these trousers anchor everything from a linen blouse to a cashmere knit. The cropped length shows off your favourite loafers or mules.",
    price: 195,
    images: ["/images/products/placeholder.jpg"],
    category: "Modern Casual Wear",
    categorySlug: "modern-casual-wear",
    tags: ["trouser", "crop", "tailored", "office"],
    rating: 0,
    reviewCount: 0,
    stockStatus: "coming_soon",
    createdAt: "2026-07-01T00:00:00.000Z",
  },

  // ── Fashion Accessories ────────────────────────────────────
  {
    id: "prod-7",
    name: "Signature Leather Tote",
    slug: "signature-leather-tote",
    description:
      "The everyday carry, elevated. Handcrafted from full-grain leather with a soft unstructured silhouette, this tote fits a 13-inch laptop, a silk scarf, and then some. Internal slip pockets keep essentials within reach while the exterior ages beautifully.",
    price: 350,
    images: ["/images/products/placeholder.jpg"],
    category: "Fashion Accessories",
    categorySlug: "fashion-accessories",
    tags: ["leather", "tote", "bag", "everyday"],
    rating: 0,
    reviewCount: 0,
    stockStatus: "coming_soon",
    featured: true,
    bestSeller: true,
    createdAt: "2026-07-01T00:00:00.000Z",
  },
  {
    id: "prod-8",
    name: "Silk Knot Scarf",
    slug: "silk-knot-scarf",
    description:
      "A whisper of colour. Hand-rolled edges frame an abstract watercolour print on pure silk twill. Wear it knotted at the neck, threaded through a bag handle, or tied in your hair — a small accent with outsized impact.",
    price: 120,
    images: ["/images/products/placeholder.jpg"],
    category: "Fashion Accessories",
    categorySlug: "fashion-accessories",
    tags: ["silk", "scarf", "print", "accessory"],
    rating: 0,
    reviewCount: 0,
    stockStatus: "coming_soon",
    createdAt: "2026-07-01T00:00:00.000Z",
  },
  {
    id: "prod-9",
    name: "Gold Link Belt",
    slug: "gold-link-belt",
    description:
      "A sculptural finish for any waistline. Oversized gold-toned links thread through a smooth leather strap — part jewellery, part belt. Cinch it over a blazer, a slip dress, or high-waisted denim to define your silhouette.",
    price: 95,
    images: ["/images/products/placeholder.jpg"],
    category: "Fashion Accessories",
    categorySlug: "fashion-accessories",
    tags: ["belt", "gold", "statement", "leather"],
    rating: 0,
    reviewCount: 0,
    stockStatus: "coming_soon",
    createdAt: "2026-07-01T00:00:00.000Z",
  },
];

/**
 * Products flagged as best sellers for the "Best Sellers" landing
 * page section.
 */
export const bestSellers: Product[] = products.filter((p) => p.bestSeller);

/**
 * Products flagged as featured for prominent placement.
 */
export const featuredProducts: Product[] = products.filter((p) => p.featured);

/**
 * Products currently on sale (have a compare-at price or discount).
 */
export const saleProducts: Product[] = products.filter(
  (p) => p.comparePrice != null || (p.discount != null && p.discount > 0),
);
