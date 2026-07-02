import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { featuredCollections } from "@/data/collections";

interface FeaturedCollectionsSectionProps {
  className?: string;
  /** Override the default section heading. */
  heading?: string;
  /** Override the default section subtitle. */
  subtitle?: string;
}

/**
 * Featured Collections section — a responsive grid of collection cards
 * for the landing page.
 *
 * Each card shows a background image, the collection name, description,
 * item count, and a link to the collection page.
 *
 * **Server Component** — no client-side interactivity.
 */
function FeaturedCollectionsSection({
  className,
  heading = "Featured Collections",
  subtitle,
}: FeaturedCollectionsSectionProps) {
  const collections = featuredCollections;
  if (collections.length === 0) return null;

  return (
    <section className={cn("py-16 sm:py-24", className)} aria-labelledby="featured-collections-heading">
      <Container>
        <SectionHeading
          title={heading}
          subtitle={subtitle}
          centered
          as="h2"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.slug}`}
              className={cn(
                "group relative block overflow-hidden rounded-xl transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              )}
              aria-label={`${collection.name} — ${collection.productCount} items`}
            >
              <Card padding="none" className="h-full overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-muted/10">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {collection.name}
                    </h3>

                    {collection.description && (
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/80">
                        {collection.description}
                      </p>
                    )}

                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-white/90">
                      <span>
                        {collection.productCount > 0
                          ? `${collection.productCount} items`
                          : "View collection"}
                      </span>
                      <span
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { FeaturedCollectionsSection, type FeaturedCollectionsSectionProps };
