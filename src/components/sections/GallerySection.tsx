import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/lib/icons";
import { gallery } from "@/data/gallery";

interface GallerySectionProps {
  className?: string;
  /** Override the default section heading. */
  heading?: string;
  subtitle?: string;
  /** Maximum number of gallery items to display. */
  limit?: number;
}

/**
 * Social media gallery section — a responsive grid of platform images
 * for the landing page.
 *
 * **Server Component** — reads from `gallery` data module.
 * Each card links to the original social post when a `link` is available.
 */
function GallerySection({
  className,
  heading = "Follow Us on Instagram",
  subtitle,
  limit,
}: GallerySectionProps) {
  const items = limit ? gallery.slice(0, limit) : gallery;
  if (items.length === 0) return null;

  const platformLabel = (platform: string) =>
    platform.charAt(0).toUpperCase() + platform.slice(1);

  return (
    <section
      id="gallery-heading"
      className={cn("py-16 sm:py-24", className)}
      aria-labelledby="gallery-heading"
    >
      <Container>
        <SectionHeading
          title={heading}
          subtitle={subtitle}
          centered
          as="h2"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.link || undefined}
              target={item.link ? "_blank" : undefined}
              rel={item.link ? "noopener noreferrer" : undefined}
              className="group relative aspect-square overflow-hidden rounded-xl"
              aria-label={`${item.alt} on ${platformLabel(item.platform)}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Platform icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Icon
                  name={platformLabel(item.platform)}
                  size={28}
                  className="text-white"
                />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { GallerySection, type GallerySectionProps };
