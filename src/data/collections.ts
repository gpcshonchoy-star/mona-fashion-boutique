import type { Collection } from "@/types";

/**
 * Featured collections displayed on the landing page and the
 * /collections index.
 *
 * Each collection links to a filtered shop view. Add collection
 * hero images to `public/images/collections/`.
 *
 * @todo Replace placeholder values with actual collections and
 *   photography. Set `featured: true` on collections that appear
 *   on the home page.
 */
export const collections: Collection[] = [
  {
    id: "col-1",
    name: "TODO: Collection name",
    slug: "todo-collection-slug",
    description: "TODO: Collection description",
    image: "/images/collections/collection-1.jpg",
    featured: true,
    productCount: 0,
  },
];

/**
 * Collections flagged for the landing page "Featured Collections"
 * section.
 */
export const featuredCollections: Collection[] = collections.filter(
  (c) => c.featured,
);
