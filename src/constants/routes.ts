/**
 * Centralised application route map.
 *
 * Every route used across the app is defined here so components and
 * data files never hardcode path strings. Import these constants to
 * keep routing changes in one place.
 */

export const ROUTES = {
  HOME: "/",
  SHOP: "/shop",
  SHOP_ALL: "/shop",
  COLLECTIONS: "/collections",
  COLLECTION_NEW_ARRIVALS: "/collections/new-arrivals",
  COLLECTION_BEST_SELLERS: "/collections/best-sellers",
  COLLECTION_SALE: "/collections/sale",
  ABOUT: "/about",
  CONTACT: "/contact",
  SEARCH: "/search",
  WISHLIST: "/wishlist",
  CART: "/cart",
  ACCOUNT: "/account",
  FAQ: "/faq",
  PRIVACY: "/privacy",
  TERMS: "/terms",
  SHIPPING_RETURNS: "/shipping-returns",
} as const;

export type RouteKey = keyof typeof ROUTES;
